'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, FileText, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface SearchResult {
  id: string
  title: string
  slug: string
  description?: string
  category_slug?: string
  category_name?: string
  type?: 'agency' | 'whitelist'
  path?: string
  relevance_score?: number
  is_ai_enhanced?: boolean
}

interface SearchMeta {
  ai_enhanced: boolean
  total_results: number
  query: string
}

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [meta, setMeta] = useState<SearchMeta | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setQuery('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        inputRef.current?.focus()
        setIsOpen(true)
      }
      if (event.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
        inputRef.current?.blur()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Search function
  useEffect(() => {
    if (!query.trim() || query.length < 2) {
      setResults([])
      setMeta(null)
      setIsOpen(false)
      return
    }

    const searchArticles = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        if (response.ok) {
          const data = await response.json()
          setResults(data.results || [])
          setMeta(data.meta || null)
          setIsOpen(true)
          setSelectedIndex(-1)
        }
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
        setMeta(null)
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(searchArticles, 300)
    return () => clearTimeout(debounceTimer)
  }, [query])

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen || results.length === 0) return

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
      } else if (event.key === 'Enter' && selectedIndex >= 0) {
        event.preventDefault()
        const selected = results[selectedIndex]
        handleResultClick(selected)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, results, selectedIndex])

  const handleResultClick = (result: SearchResult) => {
    // Use path from result if available, otherwise construct it
    const href = result.path || (result.category_slug
      ? `/${result.type}/${result.category_slug}/${result.slug}`
      : `/${result.type}/${result.slug}`)

    router.push(href)
    setIsOpen(false)
    setQuery('')
    setMeta(null)
    inputRef.current?.blur()
  }

  const getCategoryPath = (type?: string, categorySlug?: string) => {
    if (!type || !categorySlug) return ''
    return `/${type}/${categorySlug}`
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder="Search documentation... (⌘K or Ctrl+K)"
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-12 pr-12 text-base placeholder:text-gray-400 shadow-sm transition-all focus:border-hadona-primary focus:outline-none focus:ring-2 focus:ring-hadona-primary/20 lg:border-gray-300 lg:py-3"
          style={{ backgroundColor: '#ffffff' }}
        />
        {query ? (
          <button
            onClick={() => {
              setQuery('')
              setIsOpen(false)
              inputRef.current?.focus()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          /* Keyboard shortcut hint */
          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-500 md:flex lg:border-gray-200 lg:bg-gray-50" style={{ backgroundColor: '#f9fafb' }}>
            <kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-xs shadow">⌘</kbd>
            <kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-xs shadow">K</kbd>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query.length >= 2 || results.length > 0) && (
        <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl" style={{ backgroundColor: '#ffffff' }}>
          {isLoading ? (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              {meta?.ai_enhanced ? 'Searching with AI...' : 'Searching...'}
            </div>
          ) : results.length > 0 ? (
            <>
              {/* AI Badge Header */}
              {meta?.ai_enhanced && (
                <div className="flex items-center justify-between border-b border-gray-200 bg-purple-50 px-4 py-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-purple-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>AI-Powered Search</span>
                  </div>
                  <span className="text-xs text-purple-600">
                    {meta.total_results} results
                  </span>
                </div>
              )}
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, index) => {
                  const href = result.category_slug
                    ? `/${result.type}/${result.category_slug}/${result.slug}`
                    : `/${result.type}/${result.slug}`

                  const isSelected = index === selectedIndex

                  return (
                    <Link
                      key={result.id}
                      href={href}
                      onClick={() => handleResultClick(result)}
                      className={`block border-b border-gray-100 px-4 py-3 transition-colors last:border-b-0 ${
                        isSelected
                          ? 'bg-hadona-primary/10 text-hadona-primary'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-medium text-gray-900">
                              {result.title}
                            </span>
                            {result.type && (
                              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                {result.type === 'agency' ? 'Agency' : 'Whitelist'}
                              </span>
                            )}
                            {result.is_ai_enhanced && result.relevance_score !== undefined && (
                              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">
                                {result.relevance_score}% match
                              </span>
                            )}
                          </div>
                          {result.description && (
                            <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                              {result.description}
                            </p>
                          )}
                          {result.category_name && (
                            <p className="mt-1 text-xs text-gray-400">
                              {result.category_name}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
                      </div>
                    </Link>
                  )
                })}
              </div>
              <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500">
                Use ↑↓ to navigate, Enter to select, Esc to close
              </div>
            </>
          ) : query.length >= 2 ? (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              No results found for &quot;{query}&quot;
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}