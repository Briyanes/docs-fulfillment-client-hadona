// AI-powered search ranking using Z.ai API
// Enhances static search with semantic relevance scoring

import { SearchArticle } from './search-data'
import { callZaiAPI, isZaiAvailable, ZaiMessage, logZaiError, ZaiAPIError } from './zai-client'

/**
 * Extended search result with AI relevance score
 */
export interface RankedResult extends SearchArticle {
  relevance_score: number // 0-100
  ai_reasoning?: string
  is_ai_enhanced: boolean
}

/**
 * Cache entry structure
 */
interface CacheEntry {
  results: RankedResult[]
  timestamp: number
}

/**
 * Simple LRU cache for search results
 */
class SearchCache {
  private cache = new Map<string, CacheEntry>()
  private maxEntries = 100
  private ttl = 5 * 60 * 1000 // 5 minutes

  set(key: string, results: RankedResult[]): void {
    // Remove oldest entry if cache is full
    if (this.cache.size >= this.maxEntries) {
      const firstKey = this.cache.keys().next().value
      if (firstKey) {
        this.cache.delete(firstKey)
      }
    }

    this.cache.set(key, {
      results,
      timestamp: Date.now(),
    })
  }

  get(key: string): RankedResult[] | null {
    const entry = this.cache.get(key)
    if (!entry) return null

    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.ttl) {
      this.cache.delete(key)
      return null
    }

    return entry.results
  }

  clear(): void {
    this.cache.clear()
  }

  get size(): number {
    return this.cache.size
  }
}

// Global cache instance
const searchCache = new SearchCache()

/**
 * Generate cache key for search query
 */
function generateCacheKey(query: string, candidatesCount: number): string {
  return `search:${query.toLowerCase().trim()}:${candidatesCount}`
}

/**
 * System prompt for AI ranking
 */
const RANKING_SYSTEM_PROMPT = `You are a search relevance ranking system for documentation.
Your task is to rank documentation articles by their relevance to a user's search query.

Consider these factors when ranking:
1. Title match - Does the title contain the search terms?
2. Category relevance - Is the article in a relevant category?
3. Semantic similarity - Does the description match the user's intent?
4. User intent - Is the user looking for how-to guides, troubleshooting, or reference?

Return ONLY a JSON array of objects with this structure:
[
  {
    "id": "article_id",
    "score": 85,  // 0-100 relevance score
    "reason": "Brief explanation of why this article is relevant"
  }
]

Sort by score (highest first). Do not include any other text in your response.`

/**
 * Rank search results using Z.ai API
 *
 * @param query - User's search query
 * @param candidates - Candidate articles from static search
 * @returns Promise<RankedResult[]> - Articles sorted by AI relevance
 */
export async function rankResultsWithAI(
  query: string,
  candidates: SearchArticle[]
): Promise<RankedResult[]> {
  // Check cache first
  const cacheKey = generateCacheKey(query, candidates.length)
  const cachedResults = searchCache.get(cacheKey)
  if (cachedResults) {
    return cachedResults
  }

  // Check if Z.ai is available
  if (!isZaiAvailable()) {
    // Return candidates with neutral scores
    return candidates.map(c => ({
      ...c,
      relevance_score: 50,
      is_ai_enhanced: false,
    }))
  }

  // If no candidates, return empty
  if (candidates.length === 0) {
    return []
  }

  try {
    // Prepare articles for AI (minimal data to reduce tokens)
    const articlesForAI = candidates.map(c => ({
      id: c.id,
      title: c.title,
      description: c.description || '',
      category: c.category_name,
    }))

    const userMessage: ZaiMessage = {
      role: 'user',
      content: `Query: "${query}"

Articles to rank:
${JSON.stringify(articlesForAI, null, 2)}

Rank these articles by relevance to the query. Return ONLY a JSON array.`,
    }

    // Call Z.ai API
    const response = await callZaiAPI(
      [
        { role: 'system', content: RANKING_SYSTEM_PROMPT },
        userMessage,
      ],
      0.3, // Low temperature for consistent ranking
      1500 // Max tokens for response
    )

    // Parse AI response
    const aiContent = response.choices[0]?.message?.content || '[]'
    let rankings: Array<{ id: string; score: number; reason?: string }>

    try {
      // Extract JSON from response (handle potential extra text)
      const jsonMatch = aiContent.match(/\[[\s\S]*\]/)
      const jsonStr = jsonMatch ? jsonMatch[0] : aiContent
      rankings = JSON.parse(jsonStr)
    } catch (parseError) {
      console.error('Failed to parse AI response:', aiContent)
      throw new Error('Invalid AI response format')
    }

    // Create a map of article scores
    const scoreMap = new Map<string, { score: number; reasoning?: string }>()
    for (const ranking of rankings) {
      scoreMap.set(ranking.id, {
        score: Math.min(100, Math.max(0, ranking.score)),
        reasoning: ranking.reason,
      })
    }

    // Merge scores with candidates
    const rankedResults: RankedResult[] = candidates.map(c => {
      const scoreData = scoreMap.get(c.id)
      return {
        ...c,
        relevance_score: scoreData?.score ?? 50,
        ai_reasoning: scoreData?.reasoning,
        is_ai_enhanced: true,
      }
    })

    // Sort by relevance score (highest first)
    rankedResults.sort((a, b) => b.relevance_score - a.relevance_score)

    // Cache the results
    searchCache.set(cacheKey, rankedResults)

    return rankedResults

  } catch (error) {
    // Log error and fallback to neutral scores
    if (error instanceof ZaiAPIError) {
      logZaiError(error, `AI ranking failed for query: "${query}"`)
    } else {
      console.error('Unexpected error in AI ranking:', error)
    }

    // Return candidates with neutral scores (fallback)
    return candidates.map(c => ({
      ...c,
      relevance_score: 50,
      is_ai_enhanced: false,
    }))
  }
}

/**
 * Clear the search cache (useful for testing or manual invalidation)
 */
export function clearSearchCache(): void {
  searchCache.clear()
}

/**
 * Get cache statistics
 */
export function getCacheStats(): { size: number; maxSize: number } {
  return {
    size: searchCache.size,
    maxSize: 100,
  }
}