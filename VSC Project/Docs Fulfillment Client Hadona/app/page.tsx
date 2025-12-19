import Link from 'next/link'
import { ArrowRight, BookOpen, Settings, Users, BarChart3 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          Selamat Datang di{' '}
          <span className="text-hadona-primary">Hadona Docs</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
          Dokumentasi lengkap untuk membantu Anda mengoptimalkan penggunaan platform Hadona
          Digital Media
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Link
          href="/agency"
          className="group rounded-xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-hadona-primary hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-3">
              <Users className="h-6 w-6 text-hadona-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Client Agency
            </h2>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Panduan lengkap untuk setup Business Manager, Ads Manager, User Management, dan
            best practices untuk Client Agency.
          </p>
          <div className="flex items-center gap-2 text-hadona-primary">
            <span className="font-medium">Mulai belajar</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/whitelist"
          className="group rounded-xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-hadona-primary hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-3">
              <Settings className="h-6 w-6 text-hadona-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Client Whitelist
            </h2>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Panduan setup Meta Pixel, integrasi Google Analytics 4, konfigurasi UTM, dan
            monitoring data untuk Client Whitelist.
          </p>
          <div className="flex items-center gap-2 text-hadona-primary">
            <span className="font-medium">Mulai belajar</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Kategori Dokumentasi
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <BookOpen className="mb-3 h-8 w-8 text-hadona-primary" />
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Onboarding
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mulai perjalanan Anda dengan Hadona
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <Settings className="mb-3 h-8 w-8 text-hadona-primary" />
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">Setup</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Konfigurasi dan integrasi platform
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <Users className="mb-3 h-8 w-8 text-hadona-primary" />
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Management
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kelola tim dan akses pengguna
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <BarChart3 className="mb-3 h-8 w-8 text-hadona-primary" />
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Monitoring
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pantau performa dan analitik
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


