import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function DataSyncPage() {
  const articles = [
    { title: 'Import Data ke GA4', href: '/whitelist/data-sync/import-ga4' },
    { title: 'Auto-Sync Setup', href: '/whitelist/data-sync/auto-sync' },
    { title: 'Mapping Events', href: '/whitelist/data-sync/mapping-events' },
    { title: 'Data Validation', href: '/whitelist/data-sync/data-validation' },
    { title: 'Troubleshooting Sync', href: '/whitelist/data-sync/troubleshooting' },
    { title: 'Monitoring Sync Status', href: '/whitelist/data-sync/monitoring' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Data Sync</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Sinkronisasi data ke GA4
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


