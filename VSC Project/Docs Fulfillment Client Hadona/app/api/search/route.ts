import { NextRequest, NextResponse } from 'next/server'
import { searchArticles } from '@/lib/search-data'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] })
  }

  try {
    // Use static search data (no database required)
    const results = searchArticles(query)

    // Format results to match expected interface
    const formattedResults = results.map((article) => ({
      id: article.id,
      title: article.title,
      slug: article.slug,
      description: article.description,
      category_slug: article.category_slug,
      category_name: article.category_name,
      type: article.type,
    }))

    return NextResponse.json({ results: formattedResults })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ results: [] })
  }
}

