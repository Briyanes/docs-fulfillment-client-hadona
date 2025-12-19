import Link from 'next/link'
import { ArrowRight, Code, BarChart3, Link2, Database, Zap, Eye } from 'lucide-react'

export default function WhitelistPage() {
  const categories = [
    {
      title: 'Pixel Setup',
      href: '/whitelist/pixel-setup',
      icon: Code,
      description: 'Setup dan instalasi Meta Pixel',
      count: 7,
    },
    {
      title: 'Google Integration',
      href: '/whitelist/google-integration',
      icon: BarChart3,
      description: 'Integrasi dengan Google Analytics 4',
      count: 9,
    },
    {
      title: 'UTM Configuration',
      href: '/whitelist/utm-configuration',
      icon: Link2,
      description: 'Konfigurasi UTM untuk tracking',
      count: 6,
    },
    {
      title: 'Data Sync',
      href: '/whitelist/data-sync',
      icon: Database,
      description: 'Sinkronisasi data ke GA4',
      count: 6,
    },
    {
      title: 'Advanced Setup',
      href: '/whitelist/advanced-setup',
      icon: Zap,
      description: 'Setup lanjutan dan optimasi',
      count: 8,
    },
    {
      title: 'Monitoring',
      href: '/whitelist/monitoring',
      icon: Eye,
      description: 'Monitoring dan reporting data',
      count: 7,
    },
  ]

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Client Whitelist Documentation
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Panduan lengkap untuk setup Meta Pixel, integrasi Google Analytics 4, dan monitoring
          data untuk Client Whitelist
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-hadona-primary hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-hadona-primary/10 p-2">
                    <Icon className="h-5 w-5 text-hadona-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h2>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {category.count} artikel
                </span>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
              <div className="flex items-center gap-2 text-hadona-primary">
                <span className="text-sm font-medium">Lihat dokumentasi</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}


