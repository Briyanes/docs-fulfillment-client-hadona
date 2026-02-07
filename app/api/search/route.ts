import { NextRequest, NextResponse } from 'next/server'
import { aiEnhancedSearch, getPopularArticles, getRelatedArticles } from '@/lib/search-data'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const aiParam = searchParams.get('ai')
  const mode = searchParams.get('mode') // 'search' | 'popular' | 'related'
  const enableAI = aiParam !== 'false' // Default to true unless explicitly set to false

  // Return popular articles (for empty search / suggestions)
  if (mode === 'popular') {
    const popular = getPopularArticles()
    return NextResponse.json({
      results: popular.map((article) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        description: article.description,
        category_slug: article.category_slug,
        category_name: article.category_name,
        type: article.type,
        path: article.path,
      })),
      meta: {
        ai_enhanced: false,
        total_results: popular.length,
        query: '',
        mode: 'popular',
      },
    })
  }

  if (!query || query.length < 2) {
    return NextResponse.json({
      results: [],
      meta: {
        ai_enhanced: false,
        total_results: 0,
        query,
      },
    })
  }

  try {
    // Use AI-enhanced search with smart scoring
    const results = await aiEnhancedSearch(query, { enableAI, limit: 15 })

    // Determine if AI was actually used
    const isAIEnhanced = results.length > 0 && results[0]?.is_ai_enhanced

    // If no results, get related suggestions
    let suggestions: typeof results = []
    if (results.length === 0) {
      const related = getRelatedArticles(query)
      suggestions = related.map(a => ({
        ...a,
        relevance_score: 20,
        is_ai_enhanced: false,
      }))
    }

    return NextResponse.json({
      results: results.map((article) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        description: article.description,
        category_slug: article.category_slug,
        category_name: article.category_name,
        type: article.type,
        path: article.path,
        relevance_score: article.relevance_score,
        is_ai_enhanced: article.is_ai_enhanced,
      })),
      suggestions: suggestions.map((article) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        description: article.description,
        category_slug: article.category_slug,
        category_name: article.category_name,
        type: article.type,
        path: article.path,
      })),
      meta: {
        ai_enhanced: isAIEnhanced,
        total_results: results.length,
        query,
      },
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({
      results: [],
      meta: {
        ai_enhanced: false,
        total_results: 0,
        query,
        error: 'Search failed',
      },
    })
  }
}
