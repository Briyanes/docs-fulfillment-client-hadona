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
