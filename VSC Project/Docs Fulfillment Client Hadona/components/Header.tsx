'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import SearchBox from './SearchBox'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Client Agency', href: '/agency' },
    { name: 'Client Whitelist', href: '/whitelist' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white" style={{ backgroundColor: '#ffffff' }}>
      {/* Top Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-hadona-primary">Hadona</span>
            <span className="text-sm text-gray-600">Docs</span>
          </Link>
          <div className="hidden gap-6 md:flex">
            {navigation.map((item) => {
              const isActive = pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-hadona-primary'
                      : 'text-gray-600 hover:text-hadona-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://hadona.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-gray-600 hover:text-hadona-primary sm:block"
          >
            hadona.id
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Search Box Section - Always Visible */}
      <div className="border-t border-gray-200 bg-gray-50" style={{ backgroundColor: '#f9fafb' }}>
        <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6 lg:px-8">
          <SearchBox />
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden" style={{ backgroundColor: '#ffffff' }}>
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => {
              const isActive = pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? 'bg-hadona-primary/10 text-hadona-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-hadona-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}


