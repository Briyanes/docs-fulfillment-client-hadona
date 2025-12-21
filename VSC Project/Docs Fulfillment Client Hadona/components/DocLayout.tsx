import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ShareButtons from './ShareButtons'
import HelpAndFollow from './HelpAndFollow'
import TableOfContentsWrapper from './TableOfContentsWrapper'

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
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start w-full">
      {/* Main Content */}
      <article className="flex-1 min-w-0 w-full overflow-x-hidden lg:mr-64">
        <div className="bg-white w-full px-3 sm:px-6 lg:px-[48px] overflow-x-hidden" style={{ backgroundColor: '#ffffff' }}>
            {/* Breadcrumb */}
            {categoryHref && categoryName && (
              <nav className="text-sm text-gray-500 mb-4 sm:mb-6">
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
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none w-full overflow-x-hidden break-words">
              {children}
            </div>

          {/* Navigation */}
          {(prev || next) && (
            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                {prev && (
                  <Link
                    href={prev.href}
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-hadona-primary hover:bg-hadona-primary/5 transition-all w-full sm:w-auto"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-hadona-primary flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-gray-500 group-hover:text-hadona-primary mb-1">Previous</div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-hadona-primary truncate">{prev.title}</div>
                    </div>
                  </Link>
                )}
                {next && (
                  <Link
                    href={next.href}
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-hadona-primary hover:bg-hadona-primary/5 transition-all w-full sm:w-auto sm:ml-auto"
                  >
                    <div className="min-w-0 flex-1 text-right">
                      <div className="text-xs text-gray-500 group-hover:text-hadona-primary mb-1">Next</div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-hadona-primary truncate">{next.title}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-hadona-primary flex-shrink-0" />
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Help & Follow Section */}
          <div className="mt-12">
            <HelpAndFollow />
          </div>
        </div>
      </article>

      {/* Table of Contents Sidebar */}
      <TableOfContentsWrapper />
    </div>
  )
}