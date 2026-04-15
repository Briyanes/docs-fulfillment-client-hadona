/**
 * Script to inject `export const metadata` into all article page.tsx files
 * that use ArticleLayout but don't yet have metadata exports.
 */
const fs = require('fs')
const path = require('path')

const APP_DIR = path.join(__dirname, '..', 'app')
const BASE_URL = 'https://docs.hadona.id'

// Files to skip (already have metadata or are not articles)
const SKIP_PATTERNS = [
  'layout.tsx',
]

// Keyword map per section/slug
const KEYWORD_MAP = {
  // Agency - Onboarding
  'selamat-datang': ['selamat datang', 'hadona', 'onboarding', 'mulai', 'client agency'],
  'mengapa-hadona': ['mengapa hadona', 'keunggulan', 'benefit', 'agency', 'digital media'],
  'proses-onboarding': ['proses onboarding', 'alur', 'tahapan', 'klien baru', 'hadona'],
  'persiapan': ['persiapan', 'dokumen', 'syarat', 'onboarding', 'kebutuhan'],
  'kickoff-meeting': ['kickoff meeting', 'pertemuan awal', 'meeting', 'onboarding', 'jadwal'],
  // Agency - Business Manager
  'membuat-business-manager': ['business manager', 'buat bm', 'meta business', 'facebook business'],
  'linking-fanspage': ['linking fanspage', 'hubungkan halaman', 'facebook page', 'fanspage', 'tutorial linked'],
  'menautkan-page': ['menautkan page', 'facebook page', 'business manager', 'halaman'],
  'menautkan-instagram': ['menautkan instagram', 'instagram', 'business manager', 'akun ig'],
  'menautkan-ad-account': ['menautkan ad account', 'akun iklan', 'business manager', 'meta ads'],
  'menambahkan-people-ad-account': ['menambahkan people', 'ad account', 'akses', 'tim'],
  'permission': ['permission', 'izin akses', 'role', 'business manager'],
  '2fa': ['2fa', 'two factor authentication', 'keamanan akun', 'verifikasi dua langkah'],
  'verifikasi': ['verifikasi', 'verifikasi bisnis', 'business manager', 'meta'],
  // Agency - User Management
  'menambahkan-team': ['menambahkan team', 'tambah anggota', 'user management', 'tim'],
  'role-permission': ['role permission', 'hak akses', 'admin', 'user management'],
  'mengatur-akses': ['mengatur akses', 'akses user', 'permission', 'user management'],
  'menghapus-user': ['menghapus user', 'hapus akun', 'user management', 'remove user'],
  'audit-log': ['audit log', 'riwayat aktivitas', 'log aktivitas', 'user management'],
  // Agency - Ads Setup
  'setup-ads-manager': ['setup ads manager', 'ads manager', 'meta ads', 'setup iklan'],
  'membuat-campaign': ['membuat campaign', 'campaign baru', 'iklan', 'meta ads'],
  'setup-audience': ['setup audience', 'target audiens', 'iklan', 'meta ads'],
  'mengatur-budget': ['mengatur budget', 'anggaran iklan', 'budget', 'meta ads'],
  'instagram-ads': ['instagram ads', 'iklan instagram', 'ig ads', 'meta ads'],
  'whatsapp-ads': ['whatsapp ads', 'iklan whatsapp', 'wa ads', 'click to wa'],
  'instagram-whatsapp-linking': ['instagram whatsapp linking', 'linking', 'ig wa', 'hubungkan'],
  'creative-best-practices': ['creative best practices', 'desain iklan', 'kreatif', 'konten iklan'],
  'ab-testing': ['ab testing', 'split test', 'eksperimen iklan', 'meta ads'],
  'optimasi-campaign': ['optimasi campaign', 'optimasi iklan', 'performa', 'meta ads'],
  'reporting-analytics': ['reporting analytics', 'laporan iklan', 'analitik', 'meta ads'],
  // Agency - Best Practices
  'content-strategy': ['content strategy', 'strategi konten', 'konten iklan', 'agency'],
  'budget-management': ['budget management', 'kelola anggaran', 'budget iklan', 'agency'],
  'optimasi-performance': ['optimasi performance', 'performa iklan', 'roas', 'agency'],
  'keamanan-akun': ['keamanan akun', 'keamanan', 'akun aman', 'meta', 'security'],
  'community': ['community', 'komunitas', 'hadona', 'agency'],
  'troubleshooting-umum': ['troubleshooting', 'masalah umum', 'error', 'solusi'],
  'faq': ['faq', 'pertanyaan', 'tanya jawab', 'agency'],
  'kontak-support': ['kontak support', 'bantuan', 'support', 'hadona'],
  'resources': ['resources', 'sumber daya', 'panduan', 'tools'],
  'updates': ['updates', 'update terbaru', 'changelog', 'hadona'],
  // Whitelist - Onboarding
  'registrasi-dashboard': ['registrasi', 'dashboard', 'aktivasi akun', 'client whitelist', 'onboarding'],
  'request-ads-account-meta': ['meta ads', 'facebook ads', 'request akun iklan', 'client whitelist'],
  'request-ads-account-google': ['google ads', 'request akun iklan', 'client whitelist', 'google'],
  // Whitelist - Pixel Setup
  'pengenalan': ['pengenalan', 'pixel', 'meta pixel', 'tracking', 'pengenalan ga4'],
  'membuat-pixel': ['membuat pixel', 'pixel baru', 'meta pixel', 'facebook pixel'],
  'instalasi-partner': ['instalasi partner', 'pixel partner', 'instalasi pixel', 'gtm'],
  'instalasi-manual': ['instalasi manual', 'pixel manual', 'code pixel', 'website'],
  'testing': ['testing pixel', 'test pixel', 'event test tool', 'pixel'],
  // UTM
  'utm-source': ['utm source', 'utm', 'tracking parameter', 'analytics'],
  'utm-medium': ['utm medium', 'utm', 'tracking parameter', 'analytics'],
  'utm-campaign': ['utm campaign', 'utm', 'tracking parameter', 'analytics'],
  'utm-id': ['utm id', 'utm', 'tracking parameter', 'analytics'],
  'setup-meta-ads': ['setup meta ads', 'utm meta', 'tracking meta', 'analytics'],
  // Google Integration
  'pengenalan-ga4': ['pengenalan ga4', 'google analytics 4', 'ga4', 'tracking'],
  'setup-ga4': ['setup ga4', 'google analytics 4', 'ga4', 'konfigurasi'],
  'authentication': ['authentication', 'autentikasi', 'ga4', 'google'],
  'linking-google-ads': ['linking google ads', 'google ads', 'ga4', 'hubungkan'],
  'event-mapping': ['event mapping', 'pemetaan event', 'ga4', 'tracking'],
  'custom-dimensions': ['custom dimensions', 'dimensi kustom', 'ga4', 'analytics'],
  'best-practices': ['best practices', 'praktik terbaik', 'ga4', 'tracking'],
  // Data Sync
  'import-ga4': ['import ga4', 'sinkronisasi data', 'ga4', 'data sync'],
  'auto-sync': ['auto sync', 'sinkronisasi otomatis', 'data sync', 'ga4'],
  'mapping-events': ['mapping events', 'event sync', 'data sync', 'ga4'],
  'data-validation': ['data validation', 'validasi data', 'ga4', 'data sync'],
  // Monitoring
  'events-manager': ['events manager', 'kelola event', 'monitoring', 'meta'],
  'ga4-data': ['ga4 data', 'data analytics', 'monitoring', 'ga4'],
  'interpretasi-metrics': ['interpretasi metrics', 'metrik', 'monitoring', 'analytics'],
  'custom-reports': ['custom reports', 'laporan kustom', 'monitoring', 'analytics'],
  'alerts': ['alerts', 'notifikasi', 'monitoring', 'peringatan'],
  'data-export': ['data export', 'ekspor data', 'monitoring', 'analytics'],
  // Advanced Setup
  'conversions-api': ['conversions api', 'capi', 'server side', 'meta'],
  'server-side-tracking': ['server side tracking', 'server tracking', 'capi', 'advanced'],
  'custom-events': ['custom events', 'event kustom', 'tracking', 'pixel'],
  'advanced-events': ['advanced events', 'event lanjutan', 'tracking', 'pixel'],
  'data-layer': ['data layer', 'gtm', 'tracking', 'advanced'],
  'webhooks': ['webhooks', 'webhook', 'integrasi', 'advanced'],
  'performance': ['performance', 'performa', 'optimasi', 'tracking'],
  'privacy-compliance': ['privacy compliance', 'privasi', 'gdpr', 'cookie'],
  // Common
  'monitoring': ['monitoring', 'pemantauan', 'performa', 'analytics'],
  'troubleshooting': ['troubleshooting', 'masalah', 'error', 'solusi', 'bantuan'],
}

function getKeywords(slug, categoryPath) {
  const slugKeywords = KEYWORD_MAP[slug] || []
  const section = categoryPath.includes('agency') ? ['agency', 'hadona'] : ['whitelist', 'hadona', 'client whitelist']
  return [...new Set([...slugKeywords, ...section])]
}

function extractArticleLayoutProps(content) {
  // Extract title
  const titleMatch = content.match(/title="([^"]+)"/)
  const title = titleMatch ? titleMatch[1] : null

  // Extract description from ArticleLayout prop
  const descMatch = content.match(/description="([^"]+)"/)
  const description = descMatch ? descMatch[1] : null

  return { title, description }
}

function buildMetadataBlock(title, description, keywords, urlPath) {
  const kw = keywords.map(k => `'${k}'`).join(', ')
  return `import type { Metadata } from 'next'\n` +
    `\nexport const metadata: Metadata = {\n` +
    `  title: '${title.replace(/'/g, "\\'")}',\n` +
    `  description: '${description.replace(/'/g, "\\'")}',\n` +
    `  keywords: [${kw}],\n` +
    `  openGraph: {\n` +
    `    title: '${title.replace(/'/g, "\\'")} | Hadona Docs',\n` +
    `    description: '${description.replace(/'/g, "\\'")}',\n` +
    `    url: '${BASE_URL}${urlPath}',\n` +
    `  },\n` +
    `}\n`
}

function getAllPageFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllPageFiles(fullPath, fileList)
    } else if (entry.name === 'page.tsx') {
      fileList.push(fullPath)
    }
  }
  return fileList
}

function main() {
  const pageFiles = getAllPageFiles(APP_DIR)
  let processed = 0
  let skipped = 0
  let errors = 0

  for (const filePath of pageFiles) {
    const content = fs.readFileSync(filePath, 'utf8')

    // Skip if already has metadata export
    if (content.includes('export const metadata')) {
      skipped++
      continue
    }

    // Skip if not an article (no ArticleLayout)
    if (!content.includes('ArticleLayout')) {
      skipped++
      continue
    }

    const { title, description } = extractArticleLayoutProps(content)
    if (!title || !description) {
      console.warn(`⚠️  Skipping (no title/desc): ${filePath}`)
      skipped++
      continue
    }

    // Derive URL path from file path
    const relative = filePath.replace(APP_DIR, '').replace(/\/page\.tsx$/, '').replace(/\\/g, '/')
    const urlPath = relative || '/'

    // Derive slug for keywords
    const slug = path.basename(path.dirname(filePath))
    const keywords = getKeywords(slug, urlPath)

    const metadataBlock = buildMetadataBlock(title, description, keywords, urlPath)

    // Find the first import line and insert metadata after all imports
    // Strategy: insert metadata block right before `export default`
    const newContent = content.replace(
      /^(export default function)/m,
      `${metadataBlock}\nexport default function`
    )

    if (newContent === content) {
      console.warn(`⚠️  Could not inject into: ${filePath}`)
      errors++
      continue
    }

    // Also add `import type { Metadata } from 'next'` at the top if not present
    let finalContent = newContent
    if (!finalContent.includes("from 'next'")) {
      finalContent = `import type { Metadata } from 'next'\n` + finalContent
    } else if (!finalContent.includes('Metadata')) {
      // Has next import but not Metadata - add it
      finalContent = finalContent.replace(
        /^(import type \{[^}]+\} from 'next')/m,
        (match) => match.replace('{', '{ Metadata,')
      )
    }

    fs.writeFileSync(filePath, finalContent, 'utf8')
    console.log(`✓ ${urlPath}`)
    processed++
  }

  console.log(`\nDone: ${processed} processed, ${skipped} skipped, ${errors} errors`)
}

main()
