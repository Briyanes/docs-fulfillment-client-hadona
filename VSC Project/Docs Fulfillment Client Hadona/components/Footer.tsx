import Link from 'next/link'
import { ExternalLink, Mail, Globe, Github, Twitter, Linkedin, HelpCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl font-bold text-hadona-primary">Hadona</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Docs</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Dokumentasi lengkap untuk Client Agency dan Client Whitelist Hadona Digital Media. 
              Panduan setup, best practices, dan troubleshooting.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://hadona.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-hadona-primary hover:text-hadona-dark dark:hover:text-hadona-light transition-colors"
                aria-label="Visit Hadona website"
              >
                <Globe className="h-4 w-4" />
                hadona.id
              </a>
            </div>
          </div>

          {/* Client Agency Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Client Agency
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/agency/onboarding"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Onboarding
                </Link>
              </li>
              <li>
                <Link
                  href="/agency/business-manager"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Business Manager
                </Link>
              </li>
              <li>
                <Link
                  href="/agency/ads-setup"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Ads Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/agency/user-management"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  User Management
                </Link>
              </li>
              <li>
                <Link
                  href="/agency/best-practices"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Whitelist Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Client Whitelist
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/whitelist/pixel-setup"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Pixel Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/whitelist/google-integration"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Google Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/whitelist/utm-configuration"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  UTM Configuration
                </Link>
              </li>
              <li>
                <Link
                  href="/whitelist/data-sync"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Data Sync
                </Link>
              </li>
              <li>
                <Link
                  href="/whitelist/advanced-setup"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Advanced Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/whitelist/monitoring"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Support & Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:support@hadona.id"
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  support@hadona.id
                </a>
              </li>
              <li>
                <a
                  href="https://hadona.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                  Help Center
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/agency/best-practices/faq"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/agency/best-practices/kontak-support"
                  className="text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {currentYear} <span className="font-semibold text-gray-900 dark:text-gray-100">Hadona Digital Media</span>. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                Powered by{' '}
                <a
                  href="https://hadona.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-hadona-primary hover:text-hadona-dark dark:hover:text-hadona-light transition-colors"
                >
                  PT. Selaras Kreatif Inovasi
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://hadona.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://hadona.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
