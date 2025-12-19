import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BestPracticesPage() {
  const articles = [
    { title: 'Keamanan Akun', href: '/agency/best-practices/keamanan-akun' },
    { title: 'Optimasi Performance', href: '/agency/best-practices/optimasi-performance' },
    { title: 'Budget Management', href: '/agency/best-practices/budget-management' },
    { title: 'Content Strategy', href: '/agency/best-practices/content-strategy' },
    { title: 'Troubleshooting Umum', href: '/agency/best-practices/troubleshooting-umum' },
    { title: 'FAQ', href: '/agency/best-practices/faq' },
    { title: 'Kontak Support', href: '/agency/best-practices/kontak-support' },
    { title: 'Resources', href: '/agency/best-practices/resources' },
    { title: 'Updates & Changelog', href: '/agency/best-practices/updates' },
    { title: 'Community', href: '/agency/best-practices/community' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Best Practices</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Tips dan best practices
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


