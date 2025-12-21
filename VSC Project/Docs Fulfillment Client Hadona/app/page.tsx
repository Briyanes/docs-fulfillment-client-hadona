import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import { homeSidebarItems } from '@/lib/content'
import HelpAndFollow from '@/components/HelpAndFollow'

export default function HomePage() {
  const quickLinks = [
    {
      title: 'Client Agency',
      href: '/agency',
      icon: 'bi-people',
      description: 'Panduan lengkap untuk setup Business Manager, Ads Manager, User Management, dan best practices untuk Client Agency.',
      color: 'bg-hadona-primary/10 text-hadona-primary',
    },
    {
      title: 'Client Whitelist',
      href: '/whitelist',
      icon: 'bi-gear',
      description: 'Panduan setup Meta Pixel, integrasi Google Analytics 4, konfigurasi UTM, dan monitoring data untuk Client Whitelist.',
      color: 'bg-hadona-primary/10 text-hadona-primary',
    },
  ]

  const categories = [
    {
      title: 'Onboarding',
      icon: 'bi-book',
      description: 'Mulai perjalanan Anda dengan Hadona',
      href: '/agency/onboarding',
    },
    {
      title: 'Setup',
      icon: 'bi-gear',
      description: 'Konfigurasi dan integrasi platform',
      href: '/agency/business-manager',
    },
    {
      title: 'Management',
      icon: 'bi-people',
      description: 'Kelola tim dan akses pengguna',
      href: '/agency/user-management',
    },
    {
      title: 'Monitoring',
      icon: 'bi-graph-up',
      description: 'Pantau performa dan analitik',
      href: '/whitelist/monitoring',
    },
  ]

  const features = [
    {
      icon: 'bi-search',
      title: 'Pencarian Cepat',
      description: 'Gunakan Ctrl+K atau Cmd+K untuk mencari dokumentasi dengan cepat',
    },
    {
      icon: 'bi-lightning',
      title: 'Panduan Lengkap',
      description: 'Dokumentasi step-by-step yang mudah diikuti untuk semua fitur',
    },
    {
      icon: 'bi-star-fill',
      title: 'Best Practices',
      description: 'Tips dan trik untuk mengoptimalkan penggunaan platform Hadona',
    },
    {
      icon: 'bi-question-circle',
      title: 'Dukungan 24/7',
      description: 'Tim support siap membantu Anda kapan saja melalui WhatsApp',
    },
  ]

  return (
    <div className="w-full flex items-start">
      <div className="hidden lg:block flex-shrink-0 self-stretch">
        <Sidebar items={homeSidebarItems} title="Documentation" />
      </div>
      <div className="flex-1 min-w-0">
        {/* Hero Section */}
        <div className="w-full px-3 sm:px-6 lg:px-[48px] py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Dokumentasi Lengkap<br />
              <span className="text-hadona-primary">Hadona Digital Media</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-3 max-w-3xl mx-auto leading-relaxed">
              Panduan komprehensif untuk Client Agency dan Client Whitelist dalam mengoptimalkan kampanye Meta Ads dan Google Ads
            </p>
            <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-2xl mx-auto">
              Dokumentasi ini dibuat untuk memberikan panduan lengkap, step-by-step, dan best practices dalam setup, konfigurasi, dan optimasi platform Meta Ads (Facebook & Instagram Ads) serta Google Ads untuk memaksimalkan performa kampanye digital marketing Anda.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="w-full px-3 sm:px-6 py-12 lg:px-[48px] bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Pilih Dokumentasi Anda
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-hadona-primary hover:shadow-lg no-underline hover:no-underline"
                style={{ textDecoration: 'none' }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className={`rounded-lg ${link.color} p-2.5`}>
                    <i className={`bi ${link.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {link.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                  {link.description}
                </p>
                <div className="flex items-center gap-2 text-hadona-primary">
                  <span className="text-sm font-medium">Mulai belajar</span>
                  <i className="bi bi-arrow-right text-sm"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

        {/* Categories Section */}
        <div className="w-full px-3 sm:px-6 lg:px-[48px] py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Kategori Dokumentasi
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-hadona-primary hover:shadow-md no-underline hover:no-underline"
                style={{ textDecoration: 'none' }}
              >
                <i className={`bi ${category.icon} mb-3 text-2xl text-hadona-primary block`}></i>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

        {/* Features Section */}
        <div className="w-full px-3 sm:px-6 lg:px-[48px] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Fitur Dokumentasi
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <i className={`bi ${feature.icon} mb-3 text-2xl text-hadona-primary block`}></i>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Help & Follow Section */}
        <div className="w-full px-3 sm:px-6 lg:px-[48px] py-8">
          <div className="max-w-7xl mx-auto">
            <HelpAndFollow />
          </div>
        </div>
      </div>
    </div>
  )
}