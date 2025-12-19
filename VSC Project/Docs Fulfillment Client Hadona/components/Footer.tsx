import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center space-y-1">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Hadona Docs. Powered by{' '}
            <a
              href="https://hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-hadona-primary hover:text-hadona-dark dark:hover:text-hadona-light transition-colors"
            >
              Hadona Digital Media
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Designed & Developed by{' '}
            <a
              href="https://github.com/Briyanes"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-hadona-primary dark:text-gray-400 dark:hover:text-hadona-light transition-colors"
            >
              Briyanes
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
