import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ShareButtons from './ShareButtons'

interface DocLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  // New format
  prevLink?: { href: string; title: string }
  nextLink?: { href: string; title: string }
  // Old format (for backward compatibility)
  categoryHref?: string
  categoryName?: string
  prevHref?: string
  prevTitle?: string
  nextHref?: string
  nextTitle?: string
}

export default function DocLayout({
  title,
  description,
  prevLink,
  nextLink,
  categoryHref,
  categoryName,
  prevHref,
  prevTitle,
  nextHref,
  nextTitle,
  children,
}: DocLayoutProps) {
  // Support both formats
  const prev = prevLink || (prevHref && prevTitle ? { href: prevHref, title: prevTitle } : undefined)
  const next = nextLink || (nextHref && nextTitle ? { href: nextHref, title: nextTitle } : undefined)

  return (
    <div className="lg:ml-64 pt-16 pb-12 min-h-screen bg-white" style={{ backgroundColor: '#ffffff' }}>
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white" style={{ backgroundColor: '#ffffff' }}>
          {/* Breadcrumb */}
          {categoryHref && categoryName && (
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-hadona-blue">Home</Link>
              <span className="mx-2">/</span>
              <Link href={categoryHref} className="hover:text-hadona-blue">{categoryName}</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{title}</span>
            </nav>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {/* Share Buttons */}
          <ShareButtons title={title} />

          {/* Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {children}
          </div>

          {/* Navigation */}
          {(prev || next) && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {prev && (
                  <Link
                    href={prev.href}
                    className="group flex items-center space-x-2 px-4 py-2.5 rounded-md hover:bg-gray-50 transition-colors"
                  >
                      <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-hadona-primary" />
                    <div>
                      <div className="text-xs text-gray-500 group-hover:text-hadona-primary">Previous</div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-hadona-primary">{prev.title}</div>
                    </div>
                  </Link>
                )}
                {next && (
                  <Link
                    href={next.href}
                    className="group flex items-center space-x-2 px-4 py-2.5 rounded-md hover:bg-gray-50 transition-colors sm:ml-auto"
                  >
                    <div className="text-right">
                      <div className="text-xs text-gray-500 group-hover:text-hadona-primary">Next</div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-hadona-primary">{next.title}</div>
                    </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-hadona-primary" />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}

 
