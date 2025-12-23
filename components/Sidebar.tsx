'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { useState, useMemo, useCallback } from 'react'

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

  const toggleSection = useCallback((href: string) => {
    setOpenSections((prev) => {
      const newOpenSections = new Set(prev)
    if (newOpenSections.has(href)) {
      newOpenSections.delete(href)
    } else {
      newOpenSections.add(href)
    }
      return newOpenSections
    })
  }, [])

  const isActive = useCallback((href: string) => {
    return pathname === href || pathname?.startsWith(`${href}/`)
  }, [pathname])

  const renderItem = useCallback((item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isOpen = openSections.has(item.href)
    const active = isActive(item.href)
    const isCategory = level === 0 && hasChildren

    return (
      <li key={item.href} className={level === 0 ? 'mb-6' : 'mb-0.5'}>
        {hasChildren ? (
          <>
            <button
              onClick={() => toggleSection(item.href)}
              className={`flex w-full items-center justify-between py-2 text-sm transition-colors duration-150 ease-out whitespace-nowrap ${
                isCategory
                  ? 'font-bold text-gray-900'
                  : 'font-medium text-gray-900 hover:text-gray-800'
              }`}
              style={{ willChange: 'color' }}
            >
              <span className="truncate">{item.title}</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200 ease-out flex-shrink-0 ml-2 ${
                  isOpen ? 'rotate-90' : ''
                } text-gray-800`}
                style={{ willChange: 'transform' }}
              />
            </button>
            {isOpen && (
              <ul className="mt-2 space-y-0.5 ml-0">
                {item.children?.map((child) => {
                  const childActive = isActive(child.href)
                  return (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                        prefetch={true}
                        className={`block py-1.5 text-sm transition-colors duration-150 ease-out whitespace-nowrap ${
                          childActive
                            ? 'text-hadona-dark font-semibold'
                            : 'text-gray-800 hover:text-gray-900'
                      }`}
                        style={{ willChange: 'color' }}
                    >
                      {child.title}
                    </Link>
                  </li>
                  )
                })}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            prefetch={true}
            className={`block py-2 text-sm transition-colors duration-150 ease-out whitespace-nowrap ${
              active
                ? 'text-hadona-dark font-semibold'
                : 'text-gray-900 hover:text-gray-800'
            } ${isCategory ? 'font-bold' : ''}`}
            style={{ willChange: 'color' }}
          >
            {item.title}
          </Link>
        )}
      </li>
    )
  }, [openSections, isActive, toggleSection])

  const renderedItems = useMemo(() => {
    return items.map((item) => renderItem(item))
  }, [items, renderItem])

  return (
    <aside className="sticky top-[110px] sm:top-[100px] lg:top-[90px] h-[calc(100vh-110px)] sm:h-[calc(100vh-100px)] lg:h-[calc(100vh-90px)] w-80 overflow-y-auto border-r border-hadona-yellow-dark bg-hadona-yellow pl-[48px] pr-[48px] py-6 z-50" style={{ backgroundColor: '#EDD947' }}>
      {title && (
        <h2 className="mb-6 text-base font-bold text-gray-900">
          {title}
        </h2>
      )}
      <nav>
        <ul className="space-y-0">
          {renderedItems}
        </ul>
      </nav>
    </aside>
  )
}

