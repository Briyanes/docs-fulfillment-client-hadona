// Static search data - extracted from file structure
// This provides search without requiring database

export interface SearchArticle {
  id: string
  title: string
  slug: string
  description?: string
  category_slug: string
  category_name: string
  type: 'agency' | 'whitelist'
  path: string
}

/**
 * Extended search result with AI enhancement
 */
export interface AISearchResult extends SearchArticle {
  relevance_score?: number // 0-100 from AI
  ai_reasoning?: string
  is_ai_enhanced?: boolean
}

// Generate search data from content.ts structure
import { agencySidebarItems, whitelistSidebarItems } from './content'

function generateSearchData() {
  const articles: SearchArticle[] = []
  let idCounter = 1

  // Process Agency articles
  agencySidebarItems.forEach((category) => {
    const categorySlug = category.href.replace('/agency/', '')
    category.children?.forEach((article) => {
      articles.push({
        id: `a${idCounter++}`,
        title: article.title,
        slug: article.href.split('/').pop() || '',
        category_slug: categorySlug,
        category_name: category.title,
        type: 'agency',
        path: article.href,
      })
    })
  })

  // Process Whitelist articles
  whitelistSidebarItems.forEach((category) => {
    const categorySlug = category.href.replace('/whitelist/', '')
    category.children?.forEach((article) => {
      articles.push({
        id: `w${idCounter++}`,
        title: article.title,
        slug: article.href.split('/').pop() || '',
        category_slug: categorySlug,
        category_name: category.title,
        type: 'whitelist',
        path: article.href,
      })
    })
  })

  return articles
}

export const allSearchArticles: SearchArticle[] = generateSearchData()

export function searchArticles(query: string): SearchArticle[] {
  if (!query || query.length < 2) {
    return []
  }

  const lowerQuery = query.toLowerCase()

  return allSearchArticles.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(lowerQuery)
    const descriptionMatch = article.description?.toLowerCase().includes(lowerQuery)
    const categoryMatch = article.category_name.toLowerCase().includes(lowerQuery)
    const slugMatch = article.slug.toLowerCase().includes(lowerQuery)
    const pathMatch = article.path.toLowerCase().includes(lowerQuery)

    return titleMatch || descriptionMatch || categoryMatch || slugMatch || pathMatch
  }).slice(0, 10) // Limit to 10 results
}

/**
 * AI-enhanced search that combines static search with AI ranking
 *
 * @param query - User's search query
 * @param options - Configuration options
 * @returns Promise<AISearchResult[]> - AI-enhanced search results
 */
export async function aiEnhancedSearch(
  query: string,
  options: { enableAI?: boolean; limit?: number } = {}
): Promise<AISearchResult[]> {
  const { enableAI = true, limit = 10 } = options

  // Validate query
  if (!query || query.length < 2) {
    return []
  }

  try {
    // Step 1: Get candidates from static search (get more for AI to rank)
    const candidates = allSearchArticles.filter((article) => {
      const lowerQuery = query.toLowerCase()
      const titleMatch = article.title.toLowerCase().includes(lowerQuery)
      const descriptionMatch = article.description?.toLowerCase().includes(lowerQuery)
      const categoryMatch = article.category_name.toLowerCase().includes(lowerQuery)
      const slugMatch = article.slug.toLowerCase().includes(lowerQuery)
      const pathMatch = article.path.toLowerCase().includes(lowerQuery)

      return titleMatch || descriptionMatch || categoryMatch || slugMatch || pathMatch
    }).slice(0, 20) // Get top 20 candidates for AI ranking

    // If no candidates found, return empty
    if (candidates.length === 0) {
      return []
    }

    // Step 2: If AI is disabled or not enough candidates, return static results
    if (!enableAI || candidates.length <= 1) {
      return candidates.slice(0, limit).map(c => ({
        ...c,
        relevance_score: 50,
        is_ai_enhanced: false,
      }))
    }

    // Step 3: Use AI to rank results
    const { rankResultsWithAI } = await import('./search-ranker')
    const rankedResults = await rankResultsWithAI(query, candidates)

    // Step 4: Return top results
    return rankedResults.slice(0, limit)

  } catch (error) {
    console.error('AI search failed, falling back to static:', error)

    // Fallback to static search
    return searchArticles(query).map(c => ({
      ...c,
      relevance_score: 50,
      is_ai_enhanced: false,
    }))
  }
}