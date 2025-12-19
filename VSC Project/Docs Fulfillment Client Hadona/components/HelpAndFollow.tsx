export default function HelpAndFollow() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="grid gap-4 md:grid-cols-5 items-center">
        {/* Need Help Card - 20% */}
        <div className="rounded-lg bg-hadona-primary p-3 shadow-sm md:col-span-1">
          <h3 className="mb-3 text-base font-bold text-white text-center">Need Help?</h3>
          <div className="flex justify-center">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/6285158000123" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: '18px' }}></i>
              <div className="text-center">
                <p className="font-semibold text-xs text-white">WhatsApp</p>
                <p className="text-xs text-white/90">+62 851 5800 0123</p>
              </div>
            </a>
          </div>
        </div>

        {/* Follow Us Card - 80% */}
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:col-span-4">
          <h3 className="mb-3 text-base font-bold text-gray-900 text-center">Follow Us</h3>
          {/* Desktop: Horizontal layout */}
          <div className="hidden md:flex flex-wrap gap-3 justify-center items-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-instagram" style={{ fontSize: '18px', color: '#ec4899' }}></i>
              <div>
                <p className="font-semibold text-xs text-gray-900">Instagram</p>
                <p className="text-xs text-gray-600">@hadona.id</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/hadona-digital-media"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-linkedin" style={{ fontSize: '18px', color: '#0077b5' }}></i>
              <div>
                <p className="font-semibold text-xs text-gray-900">LinkedIn</p>
                <p className="text-xs text-gray-600">PT. Hadona Digital Media</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/hadonadigitalmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-facebook" style={{ fontSize: '18px', color: '#1877f2' }}></i>
              <div>
                <p className="font-semibold text-xs text-gray-900">Facebook</p>
                <p className="text-xs text-gray-600">Hadona Digital Media</p>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-tiktok" style={{ fontSize: '18px', color: '#000000' }}></i>
              <div>
                <p className="font-semibold text-xs text-gray-900">TikTok</p>
                <p className="text-xs text-gray-600">@hadona.id</p>
              </div>
            </a>
          </div>

          {/* Mobile: Vertical list */}
          <div className="flex flex-col gap-3 md:hidden">
            {/* Instagram */}
            <a
              href="https://instagram.com/hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-instagram" style={{ fontSize: '18px', color: '#ec4899' }}></i>
              <div>
                <p className="font-semibold text-xs text-gray-900">Instagram</p>
                <p className="text-xs text-gray-600">@hadona.id</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/hadona-digital-media"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-linkedin" style={{ fontSize: '18px', color: '#0077b5' }}></i>
              <div>
                <p className="font-semibold text-xs text-gray-900">LinkedIn</p>
                <p className="text-xs text-gray-600">PT. Hadona Digital Media</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/hadonadigitalmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-facebook" style={{ fontSize: '18px', color: '#1877f2' }}></i>
              <div>
                <p className="font-semibold text-xs text-gray-900">Facebook</p>
                <p className="text-xs text-gray-600">Hadona Digital Media</p>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-tiktok" style={{ fontSize: '18px', color: '#000000' }}></i>
              <div>
                <p className="font-semibold text-xs text-gray-900">TikTok</p>
                <p className="text-xs text-gray-600">@hadona.id</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
