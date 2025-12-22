import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hadona-docs.vercel.app'

  // Define all routes
  const routes = [
    '',
    '/agency',
    '/agency/onboarding',
    '/agency/business-manager',
    '/agency/user-management',
    '/agency/ads-setup',
    '/agency/best-practices',
    '/agency/best-practices/kontak-support',
    '/whitelist',
    '/whitelist/google-integration',
    '/whitelist/pixel-setup',
    '/whitelist/pixel-setup/instalasi-manual',
    '/whitelist/utm-configuration',
    '/whitelist/utm-configuration/utm-campaign',
    '/whitelist/data-sync',
    '/whitelist/data-sync/import-ga4',
    '/whitelist/data-sync/data-validation',
    '/whitelist/data-sync/monitoring',
    '/whitelist/advanced-setup',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.includes('/agency/') || route.includes('/whitelist/') ? 0.8 : 0.6,
  }))
}