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
      <nav className="header-nav-wrapper flex w-full items-center justify-between py-5">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img 
              src="/images/logo-hadona.png" 
              alt="Hadona Logo" 
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden gap-6 md:flex">
            {navigation.map((item) => {
              const isActive = pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold transition-colors no-underline hover:no-underline ${
                    isActive
                      ? 'text-hadona-primary'
                      : 'text-gray-600 hover:text-hadona-primary'
                  }`}
                  style={{ textDecoration: 'none' }}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
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
      <div className="border-t border-gray-200 w-full bg-hadona-primary" style={{ backgroundColor: '#2B46BB' }}>
        <div className="search-box-wrapper py-3">
          <div className="max-w-4xl">
            <SearchBox />
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden px-4" style={{ backgroundColor: '#ffffff' }}>
          <div className="space-y-1 pb-4 pt-2">
            {navigation.map((item) => {
              const isActive = pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-bold no-underline hover:no-underline ${
                    isActive
                      ? 'bg-hadona-primary/10 text-hadona-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-hadona-primary'
                  }`}
                  style={{ textDecoration: 'none' }}
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
      <nav className="header-nav-wrapper flex w-full items-center justify-between py-5">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img 
              src="/images/logo-hadona.png" 
              alt="Hadona Logo" 
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden gap-6 md:flex">
            {navigation.map((item) => {
              const isActive = pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold transition-colors no-underline hover:no-underline ${
                    isActive
                      ? 'text-hadona-primary'
                      : 'text-gray-600 hover:text-hadona-primary'
                  }`}
                  style={{ textDecoration: 'none' }}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
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
      <div className="border-t border-gray-200 w-full bg-hadona-primary" style={{ backgroundColor: '#2B46BB' }}>
        <div className="search-box-wrapper py-3">
          <div className="max-w-4xl">
            <SearchBox />
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden px-4" style={{ backgroundColor: '#ffffff' }}>
          <div className="space-y-1 pb-4 pt-2">
            {navigation.map((item) => {
              const isActive = pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-bold no-underline hover:no-underline ${
                    isActive
                      ? 'bg-hadona-primary/10 text-hadona-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-hadona-primary'
                  }`}
                  style={{ textDecoration: 'none' }}
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

