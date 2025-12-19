import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ArticleLayoutProps {
  title: string
  categoryHref: string
  categoryName: string
  prevHref?: string
  prevTitle?: string
  nextHref?: string
  nextTitle?: string
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
  children,
}: ArticleLayoutProps) {
  return (
    <article>
      <div className="mb-8">
        <Link
          href={categoryHref}
          className="mb-4 inline-flex items-center gap-1 text-sm text-gray-600 hover:text-hadona-primary dark:text-gray-400"
        >
          <ChevronLeft className="h-4 w-4" />
          Kembali ke {categoryName}
        </Link>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="prose dark:prose-invert">{children}</div>
      {(prevHref || nextHref) && (
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-800">
          {prevHref && prevTitle ? (
            <Link
              href={prevHref}
              className="flex items-center gap-2 text-hadona-primary hover:text-hadona-dark"
            >
              <ChevronLeft className="h-5 w-5" />
              Sebelumnya: {prevTitle}
            </Link>
          ) : (
            <div />
          )}
          {nextHref && nextTitle ? (
            <Link
              href={nextHref}
              className="flex items-center gap-2 text-hadona-primary hover:text-hadona-dark"
            >
              Selanjutnya: {nextTitle}
              <ChevronRight className="h-5 w-5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}
    </article>
  )
}

