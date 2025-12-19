import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PixelSetupPage() {
  const articles = [
    { title: 'Pengenalan Meta Pixel', href: '/whitelist/pixel-setup/pengenalan' },
    { title: 'Membuat Meta Pixel', href: '/whitelist/pixel-setup/membuat-pixel' },
    { title: 'Instalasi Manual', href: '/whitelist/pixel-setup/instalasi-manual' },
    { title: 'Instalasi via Partner', href: '/whitelist/pixel-setup/instalasi-partner' },
    { title: 'Verifikasi Instalasi', href: '/whitelist/pixel-setup/verifikasi' },
    { title: 'Testing Pixel', href: '/whitelist/pixel-setup/testing' },
    { title: 'Troubleshooting Pixel', href: '/whitelist/pixel-setup/troubleshooting' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Pixel Setup</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Setup dan instalasi Meta Pixel
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


