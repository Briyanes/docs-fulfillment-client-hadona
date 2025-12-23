import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ShareButtons from './ShareButtons'
import HelpAndFollow from './HelpAndFollow'
import TableOfContentsWrapper from './TableOfContentsWrapper'
import Breadcrumb from './Breadcrumb'

interface ArticleLayoutProps {
  title: string
  categoryHref: string
  categoryName: string
  prevHref?: string
  prevTitle?: string
  nextHref?: string
  nextTitle?: string
  description?: string
  children: React.ReactNode
}

export default function ArticleLayout({
  title,
  categoryHref,
  categoryName,
  prevHref,
  prevTitle,
  nextHref,
  nextTitle,
  description,
  children,
}: ArticleLayoutProps) {
  // Generate breadcrumb items based on the current path
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: categoryName, href: categoryHref },
  ]

  return (
    <div className="flex gap-12 items-start">
      {/* Main Content */}
      <article className="flex-1 min-w-0">
        <Breadcrumb items={breadcrumbItems} currentItem={title} />
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        </div>
        <ShareButtons title={title} description={description} />
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">{children}</div>
      {(prevHref || nextHref) && (
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          {prevHref && prevTitle ? (
            <Link
              href={prevHref}
                className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-hadona-primary hover:bg-hadona-primary/5 transition-all w-full sm:w-auto"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-hadona-primary flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-gray-500 group-hover:text-hadona-primary mb-1">Previous</div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-hadona-primary truncate">{prevTitle}</div>
                </div>
            </Link>
          ) : (
            <div />
          )}
          {nextHref && nextTitle ? (
            <Link
              href={nextHref}
                className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-hadona-primary hover:bg-hadona-primary/5 transition-all w-full sm:w-auto sm:ml-auto"
              >
                <div className="min-w-0 flex-1 text-right">
                  <div className="text-xs text-gray-500 group-hover:text-hadona-primary mb-1">Next</div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-hadona-primary truncate">{nextTitle}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-hadona-primary flex-shrink-0" />
            </Link>
          ) : (
            <div />
          )}
          </div>
        </div>
      )}

        {/* Help & Follow Section */}
        <div className="mt-12">
          <HelpAndFollow />
        </div>
    </article>

      {/* Table of Contents Sidebar */}
      <TableOfContentsWrapper />
    </div>
  )
}