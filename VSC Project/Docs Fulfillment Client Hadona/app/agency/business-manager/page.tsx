import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BusinessManagerPage() {
  const articles = [
    { title: 'Membuat Business Manager', href: '/agency/business-manager/membuat-business-manager' },
    { title: 'Verifikasi Business Manager', href: '/agency/business-manager/verifikasi' },
    { title: 'Menautkan Facebook Page', href: '/agency/business-manager/menautkan-page' },
    { title: 'Menautkan Instagram Account', href: '/agency/business-manager/menautkan-instagram' },
    { title: 'Menautkan Ad Account', href: '/agency/business-manager/menautkan-ad-account' },
    { title: 'Mengatur Permission', href: '/agency/business-manager/permission' },
    { title: 'Two-Factor Authentication', href: '/agency/business-manager/2fa' },
    { title: 'Troubleshooting BM', href: '/agency/business-manager/troubleshooting' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Business Manager</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Panduan setup dan konfigurasi Business Manager
      </p>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-hadona-primary hover:bg-hadona-primary/5 dark:border-gray-800 dark:bg-gray-900"
          >
            <span className="font-medium">{article.title}</span>
            <ArrowRight className="h-5 w-5 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  )
}


