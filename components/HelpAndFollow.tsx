export default function HelpAndFollow() {
  return (
    <div className="w-full" style={{ backgroundColor: '#ffffff' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
        {/* Need Help Card - 25% */}
        <div className="rounded-lg bg-hadona-primary p-5 shadow-sm flex flex-col items-center justify-center min-h-[120px] md:col-span-1 gap-3">
          {/* Need Help Label */}
          <span className="text-base font-bold text-white">Need Help?</span>
          {/* WhatsApp */}
          <a 
            href="https://wa.me/6285158000123" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
            style={{ textDecoration: 'none' }}
          >
            <i className="bi bi-whatsapp" style={{ fontSize: '22px', flexShrink: 0 }}></i>
            <span className="text-sm font-semibold text-white whitespace-nowrap">+62 851 5800 0123</span>
          </a>
        </div>

        {/* Follow Us Card - 75% */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm flex items-center justify-center min-h-[120px] md:col-span-3">
          {/* Desktop: Social media in one row */}
          <div className="hidden md:flex items-center gap-6 w-full px-2 justify-between flex-nowrap">
            {/* Follow Us Label */}
            <span className="text-base font-bold text-gray-900 flex-shrink-0">Follow Us:</span>
            <div className="flex items-center gap-6 flex-nowrap">
            {/* Instagram */}
            <a
              href="https://instagram.com/hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-instagram" style={{ fontSize: '22px', color: '#ec4899', flexShrink: 0 }}></i>
              <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">Instagram</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/hadona-digital-media"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-linkedin" style={{ fontSize: '22px', color: '#0077b5', flexShrink: 0 }}></i>
              <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">LinkedIn</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/hadonadigitalmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-facebook" style={{ fontSize: '22px', color: '#1877f2', flexShrink: 0 }}></i>
              <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">Facebook</span>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-tiktok" style={{ fontSize: '22px', color: '#000000', flexShrink: 0 }}></i>
              <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">TikTok</span>
            </a>
            </div>
          </div>

          {/* Mobile: Social media in one row */}
          <div className="flex gap-4 items-center justify-between flex-nowrap overflow-x-auto px-2 md:hidden w-full">
            {/* Follow Us Label */}
            <span className="text-base font-bold text-gray-900 flex-shrink-0">Follow Us:</span>
            <div className="flex items-center gap-4 flex-nowrap">
            {/* Instagram */}
            <a
              href="https://instagram.com/hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-instagram" style={{ fontSize: '22px', color: '#ec4899', flexShrink: 0 }}></i>
              <span className="hidden md:inline text-sm font-semibold text-gray-900 whitespace-nowrap">Instagram</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/hadona-digital-media"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-linkedin" style={{ fontSize: '22px', color: '#0077b5', flexShrink: 0 }}></i>
              <span className="hidden md:inline text-sm font-semibold text-gray-900 whitespace-nowrap">LinkedIn</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/hadonadigitalmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-facebook" style={{ fontSize: '22px', color: '#1877f2', flexShrink: 0 }}></i>
              <span className="hidden md:inline text-sm font-semibold text-gray-900 whitespace-nowrap">Facebook</span>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-tiktok" style={{ fontSize: '22px', color: '#000000', flexShrink: 0 }}></i>
              <span className="hidden md:inline text-sm font-semibold text-gray-900 whitespace-nowrap">TikTok</span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
