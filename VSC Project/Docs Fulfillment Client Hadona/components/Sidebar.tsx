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
    const isCategory = level === 0 && hasChildren

    return (
      <li key={item.href} className={level === 0 ? 'mb-6' : 'mb-0.5'}>
        {hasChildren ? (
          <>
            <button
              onClick={() => toggleSection(item.href)}
              className={`flex w-full items-center justify-between py-2 text-sm transition-colors ${
                isCategory 
                  ? 'font-bold text-gray-900' 
                  : 'font-medium text-gray-700 hover:text-hadona-primary'
              }`}
            >
              <span>{item.title}</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform flex-shrink-0 ml-2 ${
                  isOpen ? 'rotate-90' : ''
                } ${isCategory ? 'text-gray-400' : 'text-gray-400'}`}
              />
            </button>
            {isOpen && (
              <ul className="mt-2 space-y-0.5 ml-0">
                {item.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={`block py-1.5 text-sm transition-colors ${
                        isActive(child.href)
                          ? 'text-hadona-primary font-medium'
                          : 'text-gray-600 hover:text-hadona-primary'
                      }`}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className={`block py-2 text-sm transition-colors ${
              active
                ? 'text-hadona-primary font-medium'
                : 'text-gray-700 hover:text-hadona-primary'
            } ${isCategory ? 'font-bold' : ''}`}
          >
            {item.title}
          </Link>
        )}
      </li>
    )
  }

  return (
    <aside className="sticky top-[110px] sm:top-[100px] lg:top-[90px] h-[calc(100vh-110px)] sm:h-[calc(100vh-100px)] lg:h-[calc(100vh-90px)] w-64 overflow-y-auto border-r border-gray-200 bg-white pl-[48px] pr-[48px] py-6 z-50" style={{ backgroundColor: '#ffffff' }}>
      {title && (
        <h2 className="mb-6 text-base font-bold text-gray-900">
          {title}
        </h2>
      )}
      <nav>
        <ul className="space-y-0">{items.map((item) => renderItem(item))}</ul>
      </nav>
    </aside>
  )
}

