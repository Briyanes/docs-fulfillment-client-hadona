export default function HelpAndFollow() {
  return (
    <div className="w-full" style={{ backgroundColor: '#ffffff' }}>
      <div className="grid gap-4 md:grid-cols-5 items-stretch">
        {/* Need Help Card - 20% */}
        <div className="rounded-lg bg-hadona-primary p-4 shadow-sm md:col-span-1 flex flex-col items-center justify-center">
          <h3 className="mb-4 text-base font-bold text-white text-center">Need Help?</h3>
          <div className="flex flex-col items-center gap-3">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/6285158000123" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-2 text-white transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: '20px' }}></i>
              <div className="text-center">
                <p className="font-semibold text-sm text-white">WhatsApp</p>
                <p className="text-xs text-white/90">+62 851 5800 0123</p>
              </div>
            </a>
          </div>
        </div>

        {/* Follow Us Card - 80% */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:col-span-4 flex items-center justify-center">
          {/* Desktop: Title and social media in one row */}
          <div className="hidden md:flex items-center gap-6 w-full">
            <h3 className="text-base font-bold text-gray-900 flex-shrink-0">Follow Us</h3>
            <div className="flex flex-wrap gap-4 items-center flex-1">
            {/* Instagram */}
            <a
              href="https://instagram.com/hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
              aria-label="Instagram @hadona.id"
            >
              <i className="bi bi-instagram" style={{ fontSize: '24px', color: '#ec4899' }}></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/hadona-digital-media"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
              aria-label="LinkedIn PT. Hadona Digital Media"
            >
              <i className="bi bi-linkedin" style={{ fontSize: '24px', color: '#0077b5' }}></i>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/hadonadigitalmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
              aria-label="Facebook Hadona Digital Media"
            >
              <i className="bi bi-facebook" style={{ fontSize: '24px', color: '#1877f2' }}></i>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
              aria-label="TikTok @hadona.id"
            >
              <i className="bi bi-tiktok" style={{ fontSize: '24px', color: '#000000' }}></i>
            </a>
            </div>
          </div>

          {/* Mobile: Title and social media stacked */}
          <div className="flex flex-col gap-4 md:hidden w-full">
            <h3 className="text-base font-bold text-gray-900 text-center">Follow Us</h3>
            <div className="flex flex-wrap gap-4 justify-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
              aria-label="Instagram @hadona.id"
            >
              <i className="bi bi-instagram" style={{ fontSize: '24px', color: '#ec4899' }}></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/hadona-digital-media"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
              aria-label="LinkedIn PT. Hadona Digital Media"
            >
              <i className="bi bi-linkedin" style={{ fontSize: '24px', color: '#0077b5' }}></i>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/hadonadigitalmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
              aria-label="Facebook Hadona Digital Media"
            >
              <i className="bi bi-facebook" style={{ fontSize: '24px', color: '#1877f2' }}></i>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              style={{ textDecoration: 'none' }}
              aria-label="TikTok @hadona.id"
            >
              <i className="bi bi-tiktok" style={{ fontSize: '24px', color: '#000000' }}></i>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
