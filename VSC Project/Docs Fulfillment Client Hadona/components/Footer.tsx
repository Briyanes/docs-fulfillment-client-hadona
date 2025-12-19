import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl font-bold text-hadona-primary">Hadona</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Docs</span>
            </div>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Dokumentasi lengkap untuk Client Agency dan Client Whitelist Hadona Digital
              Media.
            </p>
            <a
              href="https://hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
            >
              Kunjungi hadona.id
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Client Agency
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/agency/onboarding"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light"
                >
                  Onboarding
                </Link>
              </li>
              <li>
                <Link
                  href="/agency/business-manager"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light"
                >
                  Business Manager
                </Link>
              </li>
              <li>
                <Link
                  href="/agency/ads-setup"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light"
                >
                  Ads Setup
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Client Whitelist
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/whitelist/pixel-setup"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light"
                >
                  Pixel Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/whitelist/google-integration"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light"
                >
                  Google Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/whitelist/utm-configuration"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light"
                >
                  UTM Configuration
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Hadona Digital Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


