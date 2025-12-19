'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, FileText, ArrowRight } from 'lucide-react'
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
}

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
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
          setIsOpen(true)
          setSelectedIndex(-1)
        }
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
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
    const href = result.category_slug 
      ? `/${result.type}/${result.category_slug}/${result.slug}`
      : `/${result.type}/${result.slug}`
    
    router.push(href)
    setIsOpen(false)
    setQuery('')
    inputRef.current?.blur()
  }

  const getCategoryPath = (type?: string, categorySlug?: string) => {
    if (!type || !categorySlug) return ''
    return `/${type}/${categorySlug}`
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder="Search documentation... (⌘K)"
          className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-10 text-sm placeholder:text-gray-400 focus:border-hadona-primary focus:outline-none focus:ring-2 focus:ring-hadona-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setIsOpen(false)
              inputRef.current?.focus()
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query.length >= 2 || results.length > 0) && (
        <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          {isLoading ? (
            <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <>
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
                      className={`block border-b border-gray-100 px-4 py-3 transition-colors last:border-b-0 dark:border-gray-700 ${
                        isSelected
                          ? 'bg-hadona-primary/10 text-hadona-primary dark:bg-hadona-primary/20'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {result.title}
                            </span>
                            {result.type && (
                              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                                {result.type === 'agency' ? 'Agency' : 'Whitelist'}
                              </span>
                            )}
                          </div>
                          {result.description && (
                            <p className="mt-1 line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                              {result.description}
                            </p>
                          )}
                          {result.category_name && (
                            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                              {result.category_name}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300 dark:text-gray-600" />
                      </div>
                    </Link>
                  )
                })}
              </div>
              <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
                Use ↑↓ to navigate, Enter to select, Esc to close
              </div>
            </>
          ) : query.length >= 2 ? (
            <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
              No results found for &quot;{query}&quot;
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

