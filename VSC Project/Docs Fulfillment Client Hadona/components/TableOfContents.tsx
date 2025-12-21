'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Only run on client side after mount
    if (typeof window === 'undefined' || !mounted) return

    // Wait for DOM to be ready
    const extractHeadings = () => {
      try {
        const articleContent = document.querySelector('.prose')
        if (!articleContent) {
          // Retry after a short delay if prose not found (max 3 seconds)
          const retryCount = (extractHeadings as any).retryCount || 0
          if (retryCount < 30) {
            (extractHeadings as any).retryCount = retryCount + 1
            setTimeout(extractHeadings, 100)
          }
          return
        }

      const headingElements = articleContent.querySelectorAll('h2, h3, h4')
      const headingList: Heading[] = []

      headingElements.forEach((heading) => {
        const text = heading.textContent || ''
        if (!text) return
        
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
        
        if (!id) return
        
        // Set id if not already set
        if (!heading.id) {
          heading.id = id
        }

        headingList.push({
          id: heading.id || id,
          text,
          level: parseInt(heading.tagName.charAt(1)),
        })
      })

        if (headingList.length > 0) {
          setHeadings(headingList)
        }
      } catch (error) {
        console.error('Error extracting headings:', error)
      }
    }

    extractHeadings()
  }, [mounted])

  // Separate effect for scroll handling
  useEffect(() => {
    if (typeof window === 'undefined' || !mounted || headings.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 110 // Offset for header

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id)
        if (element) {
          const offsetTop = element.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveId(headings[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings, mounted])

  if (!mounted || headings.length === 0) {
    return null
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Offset for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <aside className="hidden lg:block fixed top-[110px] sm:top-[130px] right-0 h-[calc(100vh-110px)] sm:h-[calc(100vh-130px)] overflow-y-auto border-l border-gray-200 bg-white pl-6 pr-4 py-6 w-64 flex-shrink-0 z-50" style={{ backgroundColor: '#ffffff' }}>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          On this page
        </h3>
      </div>
      <nav className="space-y-0.5">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToHeading(heading.id)
            }}
            className={`block text-sm py-1.5 px-2 rounded transition-colors ${
              heading.level === 2
                ? 'font-medium text-gray-900'
                : heading.level === 3
                ? 'font-normal text-gray-700 pl-4'
                : 'font-normal text-gray-600 pl-6'
            } ${
              activeId === heading.id
                ? 'bg-hadona-primary/10 text-hadona-primary'
                : 'hover:bg-gray-50 hover:text-hadona-primary text-gray-700'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  )
}