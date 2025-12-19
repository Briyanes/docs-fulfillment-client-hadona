'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, FileText } from 'lucide-react'
import { useState } from 'react'

interface SidebarItem {
  title: string
  href: string
  children?: SidebarItem[]
}

interface SidebarProps {
  items: SidebarItem[]
  title?: string
}

export default function Sidebar({ items, title }: SidebarProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  const toggleSection = (href: string) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(href)) {
      newOpenSections.delete(href)
    } else {
      newOpenSections.add(href)
    }
    setOpenSections(newOpenSections)
  }

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(`${href}/`)
  }

  const renderItem = (item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isOpen = openSections.has(item.href)
    const active = isActive(item.href)

    return (
      <li key={item.href} className="mb-1">
        {hasChildren ? (
          <>
            <button
              onClick={() => toggleSection(item.href)}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? 'bg-hadona-primary/10 text-hadona-primary'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {item.title}
              </span>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
              />
            </button>
            {isOpen && (
              <ul className={`mt-1 space-y-1 ${level > 0 ? 'ml-4 border-l border-gray-200 pl-4 dark:border-gray-700' : ''}`}>
                {item.children?.map((child) => renderItem(child, level + 1))}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? 'bg-hadona-primary/10 text-hadona-primary'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <FileText className="h-4 w-4" />
            {item.title}
          </Link>
        )}
      </li>
    )
  }

  return (
    <aside className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto border-r border-gray-200 bg-white px-4 py-6 dark:border-gray-800 dark:bg-gray-900">
      {title && (
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      <nav>
        <ul className="space-y-1">{items.map((item) => renderItem(item))}</ul>
      </nav>
    </aside>
  )
}


