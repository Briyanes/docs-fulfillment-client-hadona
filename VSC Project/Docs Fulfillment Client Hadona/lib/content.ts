export interface Article {
  id: string
  title: string
  slug: string
  category: string
  content: string
  excerpt?: string
  order: number
  parent_slug?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  order: number
}

export const agencySidebarItems = [
  {
    title: 'Onboarding',
    href: '/agency/onboarding',
    children: [
      { title: 'Selamat Datang', href: '/agency/onboarding/selamat-datang' },
      { title: 'Mengapa Hadona', href: '/agency/onboarding/mengapa-hadona' },
      { title: 'Proses Onboarding', href: '/agency/onboarding/proses-onboarding' },
      { title: 'Persiapan', href: '/agency/onboarding/persiapan' },
      { title: 'Kickoff Meeting', href: '/agency/onboarding/kickoff-meeting' },
    ],
  },
  {
    title: 'Business Manager',
    href: '/agency/business-manager',
    children: [
      { title: 'Membuat Business Manager', href: '/agency/business-manager/membuat-business-manager' },
      { title: 'Verifikasi Business Manager', href: '/agency/business-manager/verifikasi' },
      { title: 'Menautkan Facebook Page', href: '/agency/business-manager/menautkan-page' },
      { title: 'Menautkan Instagram Account', href: '/agency/business-manager/menautkan-instagram' },
      { title: 'Menautkan Ad Account', href: '/agency/business-manager/menautkan-ad-account' },
      { title: 'Mengatur Permission', href: '/agency/business-manager/permission' },
      { title: 'Two-Factor Authentication', href: '/agency/business-manager/2fa' },
      { title: 'Troubleshooting BM', href: '/agency/business-manager/troubleshooting' },
    ],
  },
  {
    title: 'Ads Setup',
    href: '/agency/ads-setup',
    children: [
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
    ],
  },
  {
    title: 'User Management',
    href: '/agency/user-management',
    children: [
      { title: 'Menambahkan Team Member', href: '/agency/user-management/menambahkan-team' },
      { title: 'Mengatur Akses User', href: '/agency/user-management/mengatur-akses' },
      { title: 'Role & Permission', href: '/agency/user-management/role-permission' },
      { title: 'Audit Log', href: '/agency/user-management/audit-log' },
      { title: 'Monitoring Aktivitas', href: '/agency/user-management/monitoring' },
      { title: 'Menghapus User', href: '/agency/user-management/menghapus-user' },
    ],
  },
  {
    title: 'Best Practices',
    href: '/agency/best-practices',
    children: [
      { title: 'Keamanan Akun', href: '/agency/best-practices/keamanan-akun' },
      { title: 'Optimasi Performance', href: '/agency/best-practices/optimasi-performance' },
      { title: 'Budget Management', href: '/agency/best-practices/budget-management' },
      { title: 'Content Strategy', href: '/agency/best-practices/content-strategy' },
      { title: 'Troubleshooting Umum', href: '/agency/best-practices/troubleshooting-umum' },
      { title: 'FAQ', href: '/agency/best-practices/faq' },
      { title: 'Kontak Support', href: '/agency/best-practices/kontak-support' },
      { title: 'Resources', href: '/agency/best-practices/resources' },
      { title: 'Updates & Changelog', href: '/agency/best-practices/updates' },
      { title: 'Community', href: '/agency/best-practices/community' },
    ],
  },
]

export const whitelistSidebarItems = [
  {
    title: 'Pixel Setup',
    href: '/whitelist/pixel-setup',
    children: [
      { title: 'Pengenalan Meta Pixel', href: '/whitelist/pixel-setup/pengenalan' },
      { title: 'Membuat Meta Pixel', href: '/whitelist/pixel-setup/membuat-pixel' },
      { title: 'Instalasi Manual', href: '/whitelist/pixel-setup/instalasi-manual' },
      { title: 'Instalasi via Partner', href: '/whitelist/pixel-setup/instalasi-partner' },
      { title: 'Verifikasi Instalasi', href: '/whitelist/pixel-setup/verifikasi' },
      { title: 'Testing Pixel', href: '/whitelist/pixel-setup/testing' },
      { title: 'Troubleshooting Pixel', href: '/whitelist/pixel-setup/troubleshooting' },
    ],
  },
  {
    title: 'Google Integration',
    href: '/whitelist/google-integration',
    children: [
      { title: 'Pengenalan GA4', href: '/whitelist/google-integration/pengenalan-ga4' },
      { title: 'Setup GA4 Property', href: '/whitelist/google-integration/setup-ga4' },
      { title: 'Linking Google Ads', href: '/whitelist/google-integration/linking-google-ads' },
      { title: 'Authentication & Access', href: '/whitelist/google-integration/authentication' },
      { title: 'Event Mapping', href: '/whitelist/google-integration/event-mapping' },
      { title: 'Verifikasi Integration', href: '/whitelist/google-integration/verifikasi' },
      { title: 'Custom Dimensions', href: '/whitelist/google-integration/custom-dimensions' },
      { title: 'Troubleshooting GA4', href: '/whitelist/google-integration/troubleshooting' },
      { title: 'Best Practices', href: '/whitelist/google-integration/best-practices' },
    ],
  },
  {
    title: 'UTM Configuration',
    href: '/whitelist/utm-configuration',
    children: [
      { title: 'Pengenalan UTM', href: '/whitelist/utm-configuration/pengenalan' },
      { title: 'Setup UTM untuk Meta Ads', href: '/whitelist/utm-configuration/setup-meta-ads' },
      { title: 'Parameter utm_source', href: '/whitelist/utm-configuration/utm-source' },
      { title: 'Parameter utm_medium', href: '/whitelist/utm-configuration/utm-medium' },
      { title: 'Parameter utm_campaign', href: '/whitelist/utm-configuration/utm-campaign' },
      { title: 'Parameter utm_id', href: '/whitelist/utm-configuration/utm-id' },
    ],
  },
  {
    title: 'Data Sync',
    href: '/whitelist/data-sync',
    children: [
      { title: 'Import Data ke GA4', href: '/whitelist/data-sync/import-ga4' },
      { title: 'Auto-Sync Setup', href: '/whitelist/data-sync/auto-sync' },
      { title: 'Mapping Events', href: '/whitelist/data-sync/mapping-events' },
      { title: 'Data Validation', href: '/whitelist/data-sync/data-validation' },
      { title: 'Troubleshooting Sync', href: '/whitelist/data-sync/troubleshooting' },
      { title: 'Monitoring Sync Status', href: '/whitelist/data-sync/monitoring' },
    ],
  },
  {
    title: 'Advanced Setup',
    href: '/whitelist/advanced-setup',
    children: [
      { title: 'Conversions API', href: '/whitelist/advanced-setup/conversions-api' },
      { title: 'Custom Events', href: '/whitelist/advanced-setup/custom-events' },
      { title: 'Server-Side Tracking', href: '/whitelist/advanced-setup/server-side-tracking' },
      { title: 'Webhooks Setup', href: '/whitelist/advanced-setup/webhooks' },
      { title: 'Advanced Event Tracking', href: '/whitelist/advanced-setup/advanced-events' },
      { title: 'Data Layer', href: '/whitelist/advanced-setup/data-layer' },
      { title: 'Privacy & Compliance', href: '/whitelist/advanced-setup/privacy-compliance' },
      { title: 'Performance Optimization', href: '/whitelist/advanced-setup/performance' },
    ],
  },
  {
    title: 'Monitoring',
    href: '/whitelist/monitoring',
    children: [
      { title: 'Melihat Data di Events Manager', href: '/whitelist/monitoring/events-manager' },
      { title: 'Melihat Data di GA4', href: '/whitelist/monitoring/ga4-data' },
      { title: 'Interpretasi Metrics', href: '/whitelist/monitoring/interpretasi-metrics' },
      { title: 'Custom Reports', href: '/whitelist/monitoring/custom-reports' },
      { title: 'Alerts & Notifications', href: '/whitelist/monitoring/alerts' },
      { title: 'Data Export', href: '/whitelist/monitoring/data-export' },
      { title: 'Troubleshooting Monitoring', href: '/whitelist/monitoring/troubleshooting' },
    ],
  },
]


