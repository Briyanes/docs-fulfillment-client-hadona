import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function GoogleIntegrationPage() {
  const articles = [
    { title: 'Pengenalan GA4', href: '/whitelist/google-integration/pengenalan-ga4' },
    { title: 'Setup GA4 Property', href: '/whitelist/google-integration/setup-ga4' },
    { title: 'Linking Google Ads', href: '/whitelist/google-integration/linking-google-ads' },
    { title: 'Authentication & Access', href: '/whitelist/google-integration/authentication' },
    { title: 'Event Mapping', href: '/whitelist/google-integration/event-mapping' },
    { title: 'Verifikasi Integration', href: '/whitelist/google-integration/verifikasi' },
    { title: 'Custom Dimensions', href: '/whitelist/google-integration/custom-dimensions' },
    { title: 'Troubleshooting GA4', href: '/whitelist/google-integration/troubleshooting' },
    { title: 'Best Practices', href: '/whitelist/google-integration/best-practices' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Google Integration</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Integrasi dengan Google Analytics 4
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


