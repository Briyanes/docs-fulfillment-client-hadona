import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function OnboardingPage() {
  const articles = [
    { title: 'Selamat Datang', href: '/agency/onboarding/selamat-datang' },
    { title: 'Mengapa Hadona', href: '/agency/onboarding/mengapa-hadona' },
    { title: 'Proses Onboarding', href: '/agency/onboarding/proses-onboarding' },
    { title: 'Persiapan', href: '/agency/onboarding/persiapan' },
    { title: 'Kickoff Meeting', href: '/agency/onboarding/kickoff-meeting' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Onboarding</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Panduan lengkap untuk memulai perjalanan Anda dengan Hadona
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


