import Link from 'next/link'
import { ArrowRight, BookOpen, Settings, Users, Shield, Lightbulb } from 'lucide-react'

export default function AgencyPage() {
  const categories = [
    {
      title: 'Onboarding',
      href: '/agency/onboarding',
      icon: BookOpen,
      description: 'Mulai perjalanan Anda dengan Hadona',
      count: 5,
    },
    {
      title: 'Business Manager',
      href: '/agency/business-manager',
      icon: Settings,
      description: 'Setup dan konfigurasi Business Manager',
      count: 8,
    },
    {
      title: 'Ads Setup',
      href: '/agency/ads-setup',
      icon: Settings,
      description: 'Panduan setup dan optimasi iklan',
      count: 12,
    },
    {
      title: 'User Management',
      href: '/agency/user-management',
      icon: Users,
      description: 'Kelola tim dan akses pengguna',
      count: 6,
    },
    {
      title: 'Best Practices',
      href: '/agency/best-practices',
      icon: Lightbulb,
      description: 'Tips dan best practices',
      count: 10,
    },
  ]

  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Client Agency Documentation
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
          Panduan lengkap untuk setup dan optimasi platform Hadona untuk Client Agency
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-xl border-2 border-gray-200 bg-white p-4 sm:p-6 transition-all hover:border-hadona-primary hover:shadow-lg"
            >
              <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="rounded-lg bg-hadona-primary/10 p-1.5 sm:p-2">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-hadona-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <span className="rounded-full bg-gray-100 px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 self-start sm:self-auto">
                  {category.count} artikel
                </span>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">
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

