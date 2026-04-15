import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, UserPlus, MonitorSmartphone, Facebook, Chrome } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Onboarding Client Whitelist',
  description: 'Panduan onboarding Client Whitelist Hadona — registrasi & pengenalan dashboard, request Meta Ads Account, dan request Google Ads Account.',
  keywords: ['onboarding', 'client whitelist', 'registrasi', 'dashboard', 'meta ads', 'google ads', 'hadona'],
  openGraph: {
    title: 'Onboarding Client Whitelist | Hadona Docs',
    description: 'Panduan onboarding Client Whitelist Hadona — registrasi & pengenalan dashboard, request Meta Ads Account, dan request Google Ads Account.',
    url: 'https://docs.hadona.id/whitelist/onboarding',
  },
}

export default function WhitelistOnboardingPage() {
  const articles = [
    {
      title: 'Registrasi & Pengenalan Dashboard',
      href: '/whitelist/onboarding/registrasi-dashboard',
      icon: MonitorSmartphone,
      description:
        'Panduan registrasi akun Client Whitelist dan pengenalan lengkap fitur-fitur dashboard Hadona Digital Media.',
    },
    {
      title: 'Request Meta Ads Account',
      href: '/whitelist/onboarding/request-ads-account-meta',
      icon: Facebook,
      description:
        'Cara mengajukan permintaan Meta Ads Account (Facebook & Instagram Ads) untuk Client Whitelist melalui dashboard Hadona.',
    },
    {
      title: 'Request Google Ads Account',
      href: '/whitelist/onboarding/request-ads-account-google',
      icon: Chrome,
      description:
        'Cara mengajukan permintaan Google Ads Account untuk Client Whitelist melalui dashboard Hadona.',
    },
  ]

  return (
    <div>
      <div className="pt-4 sm:pt-6 mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-hadona-primary/10 p-2.5">
            <UserPlus className="h-6 w-6 text-hadona-primary" />
          </div>
          <span className="text-sm font-semibold text-hadona-primary uppercase tracking-wide">
            Client Whitelist
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Onboarding Client Whitelist
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
          Mulai perjalanan Anda sebagai Client Whitelist Hadona — dari registrasi akun hingga
          pengajuan Ads Account Meta dan Google.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-1 lg:grid-cols-3">
        {articles.map((article, index) => {
          const Icon = article.icon
          return (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-xl border-2 border-gray-200 bg-white p-5 sm:p-6 transition-all hover:border-hadona-primary hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-hadona-primary/10 p-2.5 group-hover:bg-hadona-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-hadona-primary" />
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Step {index + 1}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-hadona-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-hadona-primary text-sm font-medium">
                <span>Baca panduan</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-10 rounded-xl bg-hadona-primary/5 border border-hadona-primary/20 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Urutan yang Disarankan</h2>
        <p className="text-sm text-gray-600 mb-4">
          Ikuti langkah-langkah berikut untuk onboarding yang lancar:
        </p>
        <ol className="space-y-2">
          <li className="flex items-start gap-3 text-sm text-gray-700">
            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-white text-xs font-bold">
              1
            </span>
            <span>
              <Link href="/whitelist/onboarding/registrasi-dashboard" className="font-semibold text-hadona-primary hover:underline">
                Registrasi & Dashboard
              </Link>{' '}
              — Aktifkan akun dan kenali fitur dashboard
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-700">
            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-white text-xs font-bold">
              2
            </span>
            <span>
              <Link href="/whitelist/onboarding/request-ads-account-meta" className="font-semibold text-hadona-primary hover:underline">
                Request Meta Ads Account
              </Link>{' '}
              — Ajukan permintaan akun iklan Facebook & Instagram
            </span>
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-700">
            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-white text-xs font-bold">
              3
            </span>
            <span>
              <Link href="/whitelist/onboarding/request-ads-account-google" className="font-semibold text-hadona-primary hover:underline">
                Request Google Ads Account
              </Link>{' '}
              — Ajukan permintaan akun Google Ads
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}
