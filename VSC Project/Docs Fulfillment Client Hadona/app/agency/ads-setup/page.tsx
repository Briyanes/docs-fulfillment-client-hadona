import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AdsSetupPage() {
  const articles = [
    { title: 'Setup Ads Manager', href: '/agency/ads-setup/setup-ads-manager' },
    { title: 'Membuat Campaign', href: '/agency/ads-setup/membuat-campaign' },
    { title: 'Mengatur Budget', href: '/agency/ads-setup/mengatur-budget' },
    { title: 'Setup Audience', href: '/agency/ads-setup/setup-audience' },
    { title: 'Instagram Ads', href: '/agency/ads-setup/instagram-ads' },
    { title: 'WhatsApp Ads', href: '/agency/ads-setup/whatsapp-ads' },
    { title: 'Instagram & WhatsApp Linking', href: '/agency/ads-setup/instagram-whatsapp-linking' },
    { title: 'Creative Best Practices', href: '/agency/ads-setup/creative-best-practices' },
    { title: 'Optimasi Campaign', href: '/agency/ads-setup/optimasi-campaign' },
    { title: 'A/B Testing', href: '/agency/ads-setup/ab-testing' },
    { title: 'Reporting & Analytics', href: '/agency/ads-setup/reporting-analytics' },
    { title: 'Troubleshooting Ads', href: '/agency/ads-setup/troubleshooting' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Ads Setup</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Panduan setup dan optimasi iklan
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


