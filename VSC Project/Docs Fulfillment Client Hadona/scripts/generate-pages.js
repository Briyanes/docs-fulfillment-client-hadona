const fs = require('fs')
const path = require('path')

const articleTemplate = (title, categoryHref, categoryName, prevHref, prevTitle, nextHref, nextTitle) => `import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="${title}"
      categoryHref="${categoryHref}"
      categoryName="${categoryName}"
      ${prevHref ? `prevHref="${prevHref}"` : ''}
      ${prevTitle ? `prevTitle="${prevTitle}"` : ''}
      ${nextHref ? `nextHref="${nextHref}"` : ''}
      ${nextTitle ? `nextTitle="${nextTitle}"` : ''}
    >
      <p>Konten akan ditambahkan di sini.</p>
    </ArticleLayout>
  )
}
`

const categories = [
  {
    name: 'Business Manager',
    href: '/agency/business-manager',
    articles: [
      { title: 'Membuat Business Manager', slug: 'membuat-business-manager' },
      { title: 'Verifikasi Business Manager', slug: 'verifikasi' },
      { title: 'Menautkan Facebook Page', slug: 'menautkan-page' },
      { title: 'Menautkan Instagram Account', slug: 'menautkan-instagram' },
      { title: 'Menautkan Ad Account', slug: 'menautkan-ad-account' },
      { title: 'Mengatur Permission', slug: 'permission' },
      { title: 'Two-Factor Authentication', slug: '2fa' },
      { title: 'Troubleshooting BM', slug: 'troubleshooting' },
    ],
  },
  {
    name: 'Ads Setup',
    href: '/agency/ads-setup',
    articles: [
      { title: 'Setup Ads Manager', slug: 'setup-ads-manager' },
      { title: 'Membuat Campaign', slug: 'membuat-campaign' },
      { title: 'Mengatur Budget', slug: 'mengatur-budget' },
      { title: 'Setup Audience', slug: 'setup-audience' },
      { title: 'Instagram Ads', slug: 'instagram-ads' },
      { title: 'WhatsApp Ads', slug: 'whatsapp-ads' },
      { title: 'Instagram & WhatsApp Linking', slug: 'instagram-whatsapp-linking' },
      { title: 'Creative Best Practices', slug: 'creative-best-practices' },
      { title: 'Optimasi Campaign', slug: 'optimasi-campaign' },
      { title: 'A/B Testing', slug: 'ab-testing' },
      { title: 'Reporting & Analytics', slug: 'reporting-analytics' },
      { title: 'Troubleshooting Ads', slug: 'troubleshooting' },
    ],
  },
  {
    name: 'User Management',
    href: '/agency/user-management',
    articles: [
      { title: 'Menambahkan Team Member', slug: 'menambahkan-team' },
      { title: 'Mengatur Akses User', slug: 'mengatur-akses' },
      { title: 'Role & Permission', slug: 'role-permission' },
      { title: 'Audit Log', slug: 'audit-log' },
      { title: 'Monitoring Aktivitas', slug: 'monitoring' },
      { title: 'Menghapus User', slug: 'menghapus-user' },
    ],
  },
  {
    name: 'Best Practices',
    href: '/agency/best-practices',
    articles: [
      { title: 'Keamanan Akun', slug: 'keamanan-akun' },
      { title: 'Optimasi Performance', slug: 'optimasi-performance' },
      { title: 'Budget Management', slug: 'budget-management' },
      { title: 'Content Strategy', slug: 'content-strategy' },
      { title: 'Troubleshooting Umum', slug: 'troubleshooting-umum' },
      { title: 'FAQ', slug: 'faq' },
      { title: 'Kontak Support', slug: 'kontak-support' },
      { title: 'Resources', slug: 'resources' },
      { title: 'Updates & Changelog', slug: 'updates' },
      { title: 'Community', slug: 'community' },
    ],
  },
  {
    name: 'Pixel Setup',
    href: '/whitelist/pixel-setup',
    articles: [
      { title: 'Pengenalan Meta Pixel', slug: 'pengenalan' },
      { title: 'Membuat Meta Pixel', slug: 'membuat-pixel' },
      { title: 'Instalasi Manual', slug: 'instalasi-manual' },
      { title: 'Instalasi via Partner', slug: 'instalasi-partner' },
      { title: 'Verifikasi Instalasi', slug: 'verifikasi' },
      { title: 'Testing Pixel', slug: 'testing' },
      { title: 'Troubleshooting Pixel', slug: 'troubleshooting' },
    ],
  },
  {
    name: 'Google Integration',
    href: '/whitelist/google-integration',
    articles: [
      { title: 'Pengenalan GA4', slug: 'pengenalan-ga4' },
      { title: 'Setup GA4 Property', slug: 'setup-ga4' },
      { title: 'Linking Google Ads', slug: 'linking-google-ads' },
      { title: 'Authentication & Access', slug: 'authentication' },
      { title: 'Event Mapping', slug: 'event-mapping' },
      { title: 'Verifikasi Integration', slug: 'verifikasi' },
      { title: 'Custom Dimensions', slug: 'custom-dimensions' },
      { title: 'Troubleshooting GA4', slug: 'troubleshooting' },
      { title: 'Best Practices', slug: 'best-practices' },
    ],
  },
  {
    name: 'UTM Configuration',
    href: '/whitelist/utm-configuration',
    articles: [
      { title: 'Pengenalan UTM', slug: 'pengenalan' },
      { title: 'Setup UTM untuk Meta Ads', slug: 'setup-meta-ads' },
      { title: 'Parameter utm_source', slug: 'utm-source' },
      { title: 'Parameter utm_medium', slug: 'utm-medium' },
      { title: 'Parameter utm_campaign', slug: 'utm-campaign' },
      { title: 'Parameter utm_id', slug: 'utm-id' },
    ],
  },
  {
    name: 'Data Sync',
    href: '/whitelist/data-sync',
    articles: [
      { title: 'Import Data ke GA4', slug: 'import-ga4' },
      { title: 'Auto-Sync Setup', slug: 'auto-sync' },
      { title: 'Mapping Events', slug: 'mapping-events' },
      { title: 'Data Validation', slug: 'data-validation' },
      { title: 'Troubleshooting Sync', slug: 'troubleshooting' },
      { title: 'Monitoring Sync Status', slug: 'monitoring' },
    ],
  },
  {
    name: 'Advanced Setup',
    href: '/whitelist/advanced-setup',
    articles: [
      { title: 'Conversions API', slug: 'conversions-api' },
      { title: 'Custom Events', slug: 'custom-events' },
      { title: 'Server-Side Tracking', slug: 'server-side-tracking' },
      { title: 'Webhooks Setup', slug: 'webhooks' },
      { title: 'Advanced Event Tracking', slug: 'advanced-events' },
      { title: 'Data Layer', slug: 'data-layer' },
      { title: 'Privacy & Compliance', slug: 'privacy-compliance' },
      { title: 'Performance Optimization', slug: 'performance' },
    ],
  },
  {
    name: 'Monitoring',
    href: '/whitelist/monitoring',
    articles: [
      { title: 'Melihat Data di Events Manager', slug: 'events-manager' },
      { title: 'Melihat Data di GA4', slug: 'ga4-data' },
      { title: 'Interpretasi Metrics', slug: 'interpretasi-metrics' },
      { title: 'Custom Reports', slug: 'custom-reports' },
      { title: 'Alerts & Notifications', slug: 'alerts' },
      { title: 'Data Export', slug: 'data-export' },
      { title: 'Troubleshooting Monitoring', slug: 'troubleshooting' },
    ],
  },
]

categories.forEach((category) => {
  category.articles.forEach((article, index) => {
    const prevArticle = index > 0 ? category.articles[index - 1] : null
    const nextArticle = index < category.articles.length - 1 ? category.articles[index + 1] : null

    const filePath = path.join(
      process.cwd(),
      'app',
      category.href.replace(/^\//, ''),
      article.slug,
      'page.tsx'
    )

    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const content = articleTemplate(
      article.title,
      category.href,
      category.name,
      prevArticle ? `${category.href}/${prevArticle.slug}` : null,
      prevArticle ? prevArticle.title : null,
      nextArticle ? `${category.href}/${nextArticle.slug}` : null,
      nextArticle ? nextArticle.title : null
    )

    fs.writeFileSync(filePath, content)
    console.log(`Created: ${filePath}`)
  })
})

console.log('All pages generated!')


