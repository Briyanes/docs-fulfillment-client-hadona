import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  currentItem?: string
}

export default function Breadcrumb({ items, currentItem }: BreadcrumbProps) {
  return (
    <nav className="mt-4 sm:mt-6 mb-6 sm:mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            )}
            <Link
              href={item.href}
              className="hover:text-hadona-primary transition-colors duration-150"
            >
              {item.label}
            </Link>
          </li>
        ))}
        {currentItem && (
          <li className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <span className="text-gray-900 font-medium">{currentItem}</span>
          </li>
        )}
      </ol>
    </nav>
  )
}
