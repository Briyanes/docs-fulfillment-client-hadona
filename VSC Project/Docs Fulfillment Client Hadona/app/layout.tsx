import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hadona Docs - Dokumentasi Lengkap untuk Client Agency & Whitelist',
  description:
    'Dokumentasi lengkap untuk Client Agency dan Client Whitelist Hadona Digital Media. Panduan setup, best practices, dan troubleshooting.',
  keywords: ['Hadona', 'Digital Media', 'Documentation', 'Meta Ads', 'Facebook Ads', 'GA4'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}


