import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="border-t border-gray-200" 
      style={{ 
        backgroundColor: '#ffffff',
        background: '#ffffff'
      }}
    >
      {/* Copyright Section */}
      <div 
        className="w-full py-6 border-t border-gray-200 px-4 sm:px-6 lg:px-[48px]" 
        style={{ 
          backgroundColor: '#ffffff',
          background: '#ffffff'
        }}
      >
        <div className="text-center space-y-1">
          <p className="text-sm text-gray-600">
            © {currentYear} Hadona Docs. Powered by{' '}
            <a
              href="https://hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-hadona-primary hover:text-hadona-dark transition-colors"
            >
              Hadona Digital Media
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Designed & Developed by{' '}
            <a
              href="https://github.com/Briyanes"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-hadona-primary transition-colors"
            >
              Briyanes
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
