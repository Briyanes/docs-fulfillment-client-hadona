import { NextRequest, NextResponse } from 'next/server'
import { aiEnhancedSearch } from '@/lib/search-data'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const aiParam = searchParams.get('ai')
  const enableAI = aiParam !== 'false' // Default to true unless explicitly set to false

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
    // Use AI-enhanced search
    const results = await aiEnhancedSearch(query, { enableAI, limit: 10 })

    // Determine if AI was actually used
    const isAIEnhanced = results.length > 0 && results[0]?.is_ai_enhanced

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
