import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MonitoringPage() {
  const articles = [
    { title: 'Melihat Data di Events Manager', href: '/whitelist/monitoring/events-manager' },
    { title: 'Melihat Data di GA4', href: '/whitelist/monitoring/ga4-data' },
    { title: 'Interpretasi Metrics', href: '/whitelist/monitoring/interpretasi-metrics' },
    { title: 'Custom Reports', href: '/whitelist/monitoring/custom-reports' },
    { title: 'Alerts & Notifications', href: '/whitelist/monitoring/alerts' },
    { title: 'Data Export', href: '/whitelist/monitoring/data-export' },
    { title: 'Troubleshooting Monitoring', href: '/whitelist/monitoring/troubleshooting' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Monitoring</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Monitoring dan reporting data
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


