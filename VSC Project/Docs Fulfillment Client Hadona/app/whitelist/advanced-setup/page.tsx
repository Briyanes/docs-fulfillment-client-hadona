import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AdvancedSetupPage() {
  const articles = [
    { title: 'Conversions API', href: '/whitelist/advanced-setup/conversions-api' },
    { title: 'Custom Events', href: '/whitelist/advanced-setup/custom-events' },
    { title: 'Server-Side Tracking', href: '/whitelist/advanced-setup/server-side-tracking' },
    { title: 'Webhooks Setup', href: '/whitelist/advanced-setup/webhooks' },
    { title: 'Advanced Event Tracking', href: '/whitelist/advanced-setup/advanced-events' },
    { title: 'Data Layer', href: '/whitelist/advanced-setup/data-layer' },
    { title: 'Privacy & Compliance', href: '/whitelist/advanced-setup/privacy-compliance' },
    { title: 'Performance Optimization', href: '/whitelist/advanced-setup/performance' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Advanced Setup</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Setup lanjutan dan optimasi
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


