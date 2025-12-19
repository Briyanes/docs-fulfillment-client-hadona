import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    <div className="lg:ml-64 pt-16 pb-12 min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-gray-600 mb-8">
              {description}
            </p>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Navigation */}
          {(prev || next) && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {prev && (
                  <Link
                    href={prev.href}
                    className="group flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-hadona-blue hover:bg-blue-50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-hadona-blue" />
                    <div>
                      <div className="text-sm text-gray-500 group-hover:text-hadona-blue">Previous</div>
                      <div className="font-semibold text-gray-900 group-hover:text-hadona-blue">{prev.title}</div>
                    </div>
                  </Link>
                )}
                {next && (
                  <Link
                    href={next.href}
                    className="group flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-hadona-blue hover:bg-blue-50 transition-colors sm:ml-auto"
                  >
                    <div className="text-right">
                      <div className="text-sm text-gray-500 group-hover:text-hadona-blue">Next</div>
                      <div className="font-semibold text-gray-900 group-hover:text-hadona-blue">{next.title}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-hadona-blue" />
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

 
