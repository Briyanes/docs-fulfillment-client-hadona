import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UTM Configuration',
  description: 'Panduan konfigurasi UTM tracking — UTM source, medium, campaign, ID, dan setup UTM untuk Meta Ads.',
  keywords: ['utm', 'utm configuration', 'utm source', 'utm medium', 'utm campaign', 'tracking', 'analytics'],
  openGraph: {
    title: 'UTM Configuration | Hadona Docs',
    description: 'Panduan konfigurasi UTM tracking — UTM source, medium, campaign, ID, dan setup UTM untuk Meta Ads.',
    url: 'https://docs.hadona.id/whitelist/utm-configuration',
  },
}

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
    <div className="lg:mr-64 pt-4 sm:pt-6">
      <h1 className="mb-4 text-4xl font-bold">UTM Configuration</h1>
      <p className="mb-8 text-lg text-gray-600">
        Konfigurasi UTM untuk tracking
      </p>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-hadona-primary hover:bg-hadona-primary/5"
          >
            <span className="font-medium">{article.title}</span>
            <ArrowRight className="h-5 w-5 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  )
}






