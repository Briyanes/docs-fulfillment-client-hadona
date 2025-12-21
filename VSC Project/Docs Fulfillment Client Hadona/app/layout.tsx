import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.hadona.id'),
  title: {
    default: 'Hadona Docs - Dokumentasi Lengkap untuk Client Agency & Whitelist',
    template: '%s | Hadona Docs',
  },
  description:
    'Dokumentasi lengkap untuk Client Agency dan Client Whitelist Hadona Digital Media. Panduan setup Meta Ads, Google Analytics 4, best practices, dan troubleshooting.',
  keywords: [
    'Hadona',
    'Digital Media',
    'Documentation',
    'Meta Ads',
    'Facebook Ads',
    'Instagram Ads',
    'GA4',
    'Google Analytics',
    'Business Manager',
    'Pixel Setup',
    'UTM Configuration',
  ],
  authors: [{ name: 'Hadona Digital Media' }],
  creator: 'Hadona Digital Media',
  publisher: 'Hadona Digital Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://docs.hadona.id',
    siteName: 'Hadona Docs',
    title: 'Hadona Docs - Dokumentasi Lengkap untuk Client Agency & Whitelist',
    description:
      'Dokumentasi lengkap untuk Client Agency dan Client Whitelist Hadona Digital Media. Panduan setup, best practices, dan troubleshooting.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hadona Docs - Dokumentasi Lengkap',
    description:
      'Dokumentasi lengkap untuk Client Agency dan Client Whitelist Hadona Digital Media.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification if available
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <main className="flex-1 overflow-x-hidden pt-[110px] sm:pt-[130px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
