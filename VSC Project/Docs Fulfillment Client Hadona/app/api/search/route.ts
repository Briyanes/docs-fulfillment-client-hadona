import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] })
  }

  try {
    // Search in articles table using full-text search
    const { data: articles, error } = await supabase
      .from('articles')
      .select(`
        id,
        title,
        slug,
        description,
        category_slug,
        published
      `)
      .or(`title.ilike.%${query}%,description.ilike.%${query}%,content.ilike.%${query}%`)
      .eq('published', true)
      .limit(10)

    if (error) {
      console.error('Search error:', error)
      return NextResponse.json({ results: [] })
    }

    // Get category information for each article
    const results = await Promise.all(
      (articles || []).map(async (article) => {
        let categoryName = ''
        let type: 'agency' | 'whitelist' | undefined

        if (article.category_slug) {
          const { data: category } = await supabase
            .from('categories')
            .select('name, type')
            .eq('slug', article.category_slug)
            .single()

          if (category) {
            categoryName = category.name
            type = category.type as 'agency' | 'whitelist'
          }
        }

        return {
          id: article.id,
          title: article.title,
          slug: article.slug,
          description: article.description,
          category_slug: article.category_slug,
          category_name: categoryName,
          type,
        }
      })
    )

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ results: [] })
  }
}

