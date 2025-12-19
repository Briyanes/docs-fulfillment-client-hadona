import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function UTMConfigurationPage() {
  const articles = [
    { title: 'Pengenalan UTM', href: '/whitelist/utm-configuration/pengenalan' },
    { title: 'Setup UTM untuk Meta Ads', href: '/whitelist/utm-configuration/setup-meta-ads' },
    { title: 'Parameter utm_source', href: '/whitelist/utm-configuration/utm-source' },
    { title: 'Parameter utm_medium', href: '/whitelist/utm-configuration/utm-medium' },
    { title: 'Parameter utm_campaign', href: '/whitelist/utm-configuration/utm-campaign' },
    { title: 'Parameter utm_id', href: '/whitelist/utm-configuration/utm-id' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">UTM Configuration</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Konfigurasi UTM untuk tracking
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


