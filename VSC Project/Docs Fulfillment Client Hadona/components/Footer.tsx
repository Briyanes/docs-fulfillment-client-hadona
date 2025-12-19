import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
    </footer>
  )
}
