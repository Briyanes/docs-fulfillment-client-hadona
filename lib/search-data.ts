// Static search data - extracted from file structure
// This provides search without requiring database
// Enhanced with keyword matching, descriptions, and smart scoring

export interface SearchArticle {
  id: string
  title: string
  slug: string
  description?: string
  keywords?: string[]
  category_slug: string
  category_name: string
  type: 'agency' | 'whitelist'
  path: string
}

/**
 * Extended search result with AI enhancement
 */
export interface AISearchResult extends SearchArticle {
  relevance_score?: number // 0-100 from AI
  ai_reasoning?: string
  is_ai_enhanced?: boolean
}

// Generate search data from content.ts structure
import { agencySidebarItems, whitelistSidebarItems } from './content'

/**
 * Article metadata: descriptions and keywords for better search
 * Key = path, Value = { description, keywords }
 */
const articleMeta: Record<string, { description: string; keywords: string[] }> = {
  // === AGENCY - ONBOARDING ===
  '/agency/onboarding/selamat-datang': {
    description: 'Selamat datang di Hadona Digital Media. Panduan memulai sebagai client agency.',
    keywords: ['welcome', 'mulai', 'pengenalan', 'getting started', 'awal', 'baru'],
  },
  '/agency/onboarding/mengapa-hadona': {
    description: 'Mengapa memilih Hadona Digital Media sebagai partner agency Anda.',
    keywords: ['alasan', 'keuntungan', 'benefit', 'pilih', 'partner', 'agensi'],
  },
  '/agency/onboarding/proses-onboarding': {
    description: 'Langkah-langkah proses onboarding client agency di Hadona.',
    keywords: ['proses', 'langkah', 'tahap', 'alur', 'flow', 'registrasi'],
  },
  '/agency/onboarding/persiapan': {
    description: 'Persiapan yang perlu dilakukan sebelum memulai proses onboarding.',
    keywords: ['siapkan', 'dokumen', 'syarat', 'requirement', 'checklist', 'persiapan'],
  },
  '/agency/onboarding/kickoff-meeting': {
    description: 'Panduan kickoff meeting pertama dengan tim Hadona.',
    keywords: ['meeting', 'pertemuan', 'kick off', 'diskusi', 'rapat', 'pertama'],
  },

  // === AGENCY - BUSINESS MANAGER ===
  '/agency/business-manager/membuat-business-manager': {
    description: 'Cara membuat akun Facebook Business Manager dari awal.',
    keywords: ['buat', 'create', 'daftar', 'facebook', 'meta', 'business suite', 'bm', 'akun bisnis'],
  },
  '/agency/business-manager/verifikasi': {
    description: 'Proses verifikasi Business Manager untuk mendapatkan akses penuh.',
    keywords: ['verif', 'verify', 'konfirmasi', 'domain', 'identitas', 'validasi'],
  },
  '/agency/business-manager/menautkan-page': {
    description: 'Cara menautkan Facebook Page ke Business Manager.',
    keywords: ['page', 'halaman', 'facebook page', 'fanspage', 'connect', 'hubungkan', 'tautkan', 'link'],
  },
  '/agency/business-manager/menautkan-instagram': {
    description: 'Cara menautkan akun Instagram Business ke Business Manager.',
    keywords: ['instagram', 'ig', 'akun ig', 'connect', 'hubungkan', 'tautkan', 'sosial media'],
  },
  '/agency/business-manager/linking-fanspage': {
    description: 'Tutorial lengkap cara menghubungkan Instagram Business ke Facebook Fanspage dan setup Advertiser Hadona.',
    keywords: ['fanspage', 'fan page', 'facebook page', 'instagram', 'hubungkan', 'linking', 'link', 'connect', 'advertiser', 'hadona', 'setting fanspage', 'cara setting'],
  },
  '/agency/business-manager/menautkan-ad-account': {
    description: 'Cara menautkan Ad Account ke Business Manager.',
    keywords: ['ad account', 'akun iklan', 'ads', 'connect', 'hubungkan', 'tautkan', 'iklan'],
  },
  '/agency/business-manager/menambahkan-people-ad-account': {
    description: 'Panduan menambahkan orang dan mengatur permission di Ad Account Meta untuk kolaborasi tim.',
    keywords: ['add people', 'tambah orang', 'menambahkan user', 'akses ad account', 'permission ad account', 'assign people', 'admin advertiser analyst', 'team collaboration', 'add users'],
  },
  '/agency/business-manager/permission': {
    description: 'Mengatur permission dan akses di Business Manager.',
    keywords: ['izin', 'akses', 'hak', 'role', 'admin', 'editor', 'moderator', 'atur'],
  },
  '/agency/business-manager/2fa': {
    description: 'Cara mengaktifkan Two-Factor Authentication untuk keamanan.',
    keywords: ['2fa', 'two factor', 'keamanan', 'security', 'otp', 'authenticator', 'verifikasi dua langkah'],
  },
  '/agency/business-manager/troubleshooting': {
    description: 'Solusi masalah umum pada Business Manager.',
    keywords: ['masalah', 'error', 'problem', 'solusi', 'fix', 'perbaiki', 'gagal', 'tidak bisa'],
  },

  // === AGENCY - ADS SETUP ===
  '/agency/ads-setup/setup-ads-manager': {
    description: 'Panduan setup Ads Manager untuk mulai beriklan.',
    keywords: ['ads manager', 'iklan', 'setup', 'pengaturan', 'mulai iklan', 'beriklan'],
  },
  '/agency/ads-setup/membuat-campaign': {
    description: 'Cara membuat campaign iklan di Meta Ads.',
    keywords: ['campaign', 'kampanye', 'buat', 'create', 'iklan baru', 'meta ads'],
  },
  '/agency/ads-setup/mengatur-budget': {
    description: 'Cara mengatur budget dan bidding untuk campaign.',
    keywords: ['budget', 'anggaran', 'biaya', 'bidding', 'cost', 'pengeluaran', 'dana'],
  },
  '/agency/ads-setup/setup-audience': {
    description: 'Cara setup target audience untuk iklan.',
    keywords: ['audience', 'target', 'targeting', 'custom audience', 'lookalike', 'audiens', 'sasaran'],
  },
  '/agency/ads-setup/instagram-ads': {
    description: 'Panduan membuat iklan khusus untuk Instagram.',
    keywords: ['instagram', 'ig ads', 'story ads', 'reels ads', 'feed ads', 'iklan instagram'],
  },
  '/agency/ads-setup/whatsapp-ads': {
    description: 'Panduan membuat iklan WhatsApp (Click to WhatsApp).',
    keywords: ['whatsapp', 'wa', 'click to whatsapp', 'ctwa', 'chat', 'pesan'],
  },
  '/agency/ads-setup/instagram-whatsapp-linking': {
    description: 'Cara menghubungkan Instagram dengan WhatsApp untuk iklan.',
    keywords: ['instagram', 'whatsapp', 'linking', 'hubungkan', 'integrasi', 'connect'],
  },
  '/agency/ads-setup/creative-best-practices': {
    description: 'Best practices untuk membuat creative iklan yang efektif.',
    keywords: ['creative', 'kreatif', 'desain', 'gambar', 'video', 'copy', 'konten iklan', 'tips'],
  },
  '/agency/ads-setup/optimasi-campaign': {
    description: 'Cara optimasi campaign agar performa lebih baik.',
    keywords: ['optimasi', 'optimize', 'peningkatan', 'performa', 'ctr', 'cpc', 'roas', 'improve'],
  },
  '/agency/ads-setup/ab-testing': {
    description: 'Cara melakukan A/B Testing pada iklan.',
    keywords: ['ab test', 'split test', 'experiment', 'testing', 'uji coba', 'perbandingan'],
  },
  '/agency/ads-setup/reporting-analytics': {
    description: 'Cara membaca laporan dan analitik campaign.',
    keywords: ['report', 'laporan', 'analytics', 'analitik', 'data', 'insight', 'metrik', 'dashboard'],
  },
  '/agency/ads-setup/troubleshooting': {
    description: 'Solusi masalah umum pada proses setup iklan.',
    keywords: ['masalah', 'error', 'problem', 'solusi', 'fix', 'iklan ditolak', 'rejected', 'gagal'],
  },

  // === AGENCY - USER MANAGEMENT ===
  '/agency/user-management/menambahkan-team': {
    description: 'Cara menambahkan anggota tim ke Business Manager.',
    keywords: ['team', 'tim', 'anggota', 'tambah', 'invite', 'undang', 'member'],
  },
  '/agency/user-management/mengatur-akses': {
    description: 'Cara mengatur hak akses untuk setiap user.',
    keywords: ['akses', 'hak', 'permission', 'izin', 'level', 'kontrol'],
  },
  '/agency/user-management/role-permission': {
    description: 'Penjelasan role dan permission yang tersedia.',
    keywords: ['role', 'peran', 'admin', 'analyst', 'editor', 'hak akses'],
  },
  '/agency/user-management/audit-log': {
    description: 'Cara melihat audit log aktivitas di akun.',
    keywords: ['audit', 'log', 'aktivitas', 'history', 'riwayat', 'catatan'],
  },
  '/agency/user-management/monitoring': {
    description: 'Monitoring aktivitas user dalam tim.',
    keywords: ['monitoring', 'pantau', 'aktivitas', 'tracking', 'lacak'],
  },
  '/agency/user-management/menghapus-user': {
    description: 'Cara menghapus user dari Business Manager.',
    keywords: ['hapus', 'delete', 'remove', 'keluarkan', 'cabut akses'],
  },

  // === AGENCY - BEST PRACTICES ===
  '/agency/best-practices/keamanan-akun': {
    description: 'Tips keamanan akun untuk melindungi Business Manager.',
    keywords: ['keamanan', 'security', 'aman', 'hack', 'protect', 'lindungi', 'password'],
  },
  '/agency/best-practices/optimasi-performance': {
    description: 'Tips optimasi performa campaign iklan.',
    keywords: ['optimasi', 'performa', 'performance', 'improve', 'tingkatkan', 'efisiensi'],
  },
  '/agency/best-practices/budget-management': {
    description: 'Panduan manajemen budget iklan yang efektif.',
    keywords: ['budget', 'anggaran', 'biaya', 'efisien', 'hemat', 'alokasi', 'dana'],
  },
  '/agency/best-practices/content-strategy': {
    description: 'Strategi konten untuk campaign yang sukses.',
    keywords: ['konten', 'content', 'strategi', 'strategy', 'planning', 'kalender'],
  },
  '/agency/best-practices/troubleshooting-umum': {
    description: 'Solusi untuk masalah umum yang sering ditemui.',
    keywords: ['masalah', 'error', 'problem', 'solusi', 'fix', 'umum', 'common'],
  },
  '/agency/best-practices/faq': {
    description: 'Pertanyaan yang sering ditanyakan (FAQ).',
    keywords: ['faq', 'pertanyaan', 'tanya', 'jawab', 'question', 'answer'],
  },
  '/agency/best-practices/kontak-support': {
    description: 'Cara menghubungi tim support Hadona.',
    keywords: ['kontak', 'contact', 'support', 'bantuan', 'help', 'hubungi', 'cs'],
  },
  '/agency/best-practices/resources': {
    description: 'Kumpulan resource dan referensi yang berguna.',
    keywords: ['resource', 'referensi', 'materi', 'download', 'template', 'panduan'],
  },
  '/agency/best-practices/updates': {
    description: 'Update dan changelog terbaru dari Hadona.',
    keywords: ['update', 'changelog', 'perubahan', 'fitur baru', 'release', 'terbaru'],
  },
  '/agency/best-practices/community': {
    description: 'Bergabung dengan komunitas Hadona.',
    keywords: ['community', 'komunitas', 'grup', 'group', 'forum', 'diskusi'],
  },

  // === WHITELIST - PIXEL SETUP ===
  '/whitelist/pixel-setup/pengenalan': {
    description: 'Pengenalan tentang Meta Pixel dan fungsinya.',
    keywords: ['pixel', 'meta pixel', 'facebook pixel', 'tracking', 'konversi', 'pengenalan'],
  },
  '/whitelist/pixel-setup/membuat-pixel': {
    description: 'Cara membuat Meta Pixel di Events Manager.',
    keywords: ['buat pixel', 'create pixel', 'events manager', 'pixel baru', 'generate'],
  },
  '/whitelist/pixel-setup/instalasi-manual': {
    description: 'Cara instalasi Meta Pixel secara manual ke website.',
    keywords: ['install', 'manual', 'code', 'kode', 'website', 'pasang', 'embed'],
  },
  '/whitelist/pixel-setup/instalasi-partner': {
    description: 'Instalasi Meta Pixel melalui partner integration.',
    keywords: ['partner', 'shopify', 'wordpress', 'woocommerce', 'integration', 'plugin'],
  },
  '/whitelist/pixel-setup/verifikasi': {
    description: 'Cara verifikasi apakah Meta Pixel sudah terpasang dengan benar.',
    keywords: ['verifikasi', 'cek', 'check', 'test', 'konfirmasi', 'helper', 'debugging'],
  },
  '/whitelist/pixel-setup/testing': {
    description: 'Testing Meta Pixel menggunakan Test Events.',
    keywords: ['test', 'testing', 'uji', 'test events', 'debug', 'helper'],
  },
  '/whitelist/pixel-setup/troubleshooting': {
    description: 'Troubleshooting masalah pada Meta Pixel.',
    keywords: ['masalah', 'error', 'problem', 'fix', 'pixel tidak muncul', 'gagal'],
  },

  // === WHITELIST - GOOGLE INTEGRATION ===
  '/whitelist/google-integration/pengenalan-ga4': {
    description: 'Pengenalan Google Analytics 4 (GA4).',
    keywords: ['ga4', 'google analytics', 'analytics', 'pengenalan', 'tracking', 'web analytics'],
  },
  '/whitelist/google-integration/setup-ga4': {
    description: 'Cara setup GA4 property untuk website.',
    keywords: ['setup', 'ga4', 'property', 'measurement id', 'stream', 'data stream'],
  },
  '/whitelist/google-integration/linking-google-ads': {
    description: 'Cara menghubungkan Google Ads dengan GA4.',
    keywords: ['google ads', 'linking', 'hubungkan', 'integrasi', 'connect', 'adwords'],
  },
  '/whitelist/google-integration/authentication': {
    description: 'Setup authentication dan akses untuk Google integration.',
    keywords: ['auth', 'authentication', 'akses', 'login', 'credential', 'api key'],
  },
  '/whitelist/google-integration/event-mapping': {
    description: 'Cara mapping events antara Meta dan Google.',
    keywords: ['event', 'mapping', 'konversi', 'conversion', 'match', 'sync'],
  },
  '/whitelist/google-integration/verifikasi': {
    description: 'Verifikasi integrasi Google sudah benar.',
    keywords: ['verifikasi', 'cek', 'test', 'check', 'konfirmasi', 'validasi'],
  },
  '/whitelist/google-integration/custom-dimensions': {
    description: 'Setup custom dimensions di GA4.',
    keywords: ['custom dimension', 'dimensi', 'parameter', 'custom', 'ga4'],
  },
  '/whitelist/google-integration/troubleshooting': {
    description: 'Troubleshooting masalah Google integration.',
    keywords: ['masalah', 'error', 'problem', 'fix', 'gagal', 'tidak muncul data'],
  },
  '/whitelist/google-integration/best-practices': {
    description: 'Best practices untuk Google integration.',
    keywords: ['best practice', 'tips', 'rekomendasi', 'optimal', 'efektif'],
  },

  // === WHITELIST - UTM CONFIGURATION ===
  '/whitelist/utm-configuration/pengenalan': {
    description: 'Pengenalan UTM parameter dan fungsinya.',
    keywords: ['utm', 'parameter', 'tracking', 'url', 'link', 'pengenalan'],
  },
  '/whitelist/utm-configuration/setup-meta-ads': {
    description: 'Setup UTM untuk campaign Meta Ads.',
    keywords: ['utm', 'meta ads', 'facebook ads', 'setup', 'campaign', 'url builder'],
  },
  '/whitelist/utm-configuration/utm-source': {
    description: 'Penjelasan dan penggunaan parameter utm_source.',
    keywords: ['utm_source', 'source', 'sumber', 'asal', 'traffic'],
  },
  '/whitelist/utm-configuration/utm-medium': {
    description: 'Penjelasan dan penggunaan parameter utm_medium.',
    keywords: ['utm_medium', 'medium', 'channel', 'saluran', 'tipe'],
  },
  '/whitelist/utm-configuration/utm-campaign': {
    description: 'Penjelasan dan penggunaan parameter utm_campaign.',
    keywords: ['utm_campaign', 'campaign', 'kampanye', 'nama campaign'],
  },
  '/whitelist/utm-configuration/utm-id': {
    description: 'Penjelasan dan penggunaan parameter utm_id.',
    keywords: ['utm_id', 'id', 'identifier', 'campaign id'],
  },

  // === WHITELIST - DATA SYNC ===
  '/whitelist/data-sync/import-ga4': {
    description: 'Cara import data ke Google Analytics 4.',
    keywords: ['import', 'ga4', 'data', 'upload', 'masukkan data'],
  },
  '/whitelist/data-sync/auto-sync': {
    description: 'Setup auto-sync untuk sinkronisasi data otomatis.',
    keywords: ['auto sync', 'otomatis', 'sinkronisasi', 'automatic', 'schedule'],
  },
  '/whitelist/data-sync/mapping-events': {
    description: 'Mapping events antara platform yang berbeda.',
    keywords: ['mapping', 'event', 'konversi', 'sync', 'cross platform'],
  },
  '/whitelist/data-sync/data-validation': {
    description: 'Cara validasi data yang sudah di-sync.',
    keywords: ['validasi', 'validation', 'cek data', 'akurasi', 'quality'],
  },
  '/whitelist/data-sync/troubleshooting': {
    description: 'Troubleshooting masalah sinkronisasi data.',
    keywords: ['masalah', 'error', 'sync gagal', 'fix', 'problem'],
  },
  '/whitelist/data-sync/monitoring': {
    description: 'Monitoring status sinkronisasi data.',
    keywords: ['monitoring', 'status', 'pantau', 'cek', 'progress'],
  },

  // === WHITELIST - ADVANCED SETUP ===
  '/whitelist/advanced-setup/conversions-api': {
    description: 'Setup Conversions API (CAPI) untuk server-side tracking.',
    keywords: ['capi', 'conversions api', 'server side', 'api', 'konversi'],
  },
  '/whitelist/advanced-setup/custom-events': {
    description: 'Membuat custom events untuk tracking spesifik.',
    keywords: ['custom event', 'event kustom', 'tracking', 'buat event'],
  },
  '/whitelist/advanced-setup/server-side-tracking': {
    description: 'Setup server-side tracking untuk data yang lebih akurat.',
    keywords: ['server side', 'tracking', 'server', 'akurat', 'reliable'],
  },
  '/whitelist/advanced-setup/webhooks': {
    description: 'Setup webhooks untuk integrasi real-time.',
    keywords: ['webhook', 'real time', 'notification', 'callback', 'api'],
  },
  '/whitelist/advanced-setup/advanced-events': {
    description: 'Setup advanced event tracking untuk analitik mendalam.',
    keywords: ['advanced event', 'tracking lanjutan', 'custom', 'detail'],
  },
  '/whitelist/advanced-setup/data-layer': {
    description: 'Implementasi data layer untuk tag management.',
    keywords: ['data layer', 'gtm', 'tag manager', 'variable', 'layer'],
  },
  '/whitelist/advanced-setup/privacy-compliance': {
    description: 'Panduan privacy dan compliance untuk tracking.',
    keywords: ['privacy', 'compliance', 'gdpr', 'consent', 'cookie', 'privasi'],
  },
  '/whitelist/advanced-setup/performance': {
    description: 'Optimasi performa tracking dan loading.',
    keywords: ['performance', 'performa', 'speed', 'kecepatan', 'optimasi', 'loading'],
  },

  // === WHITELIST - MONITORING ===
  '/whitelist/monitoring/events-manager': {
    description: 'Cara melihat data di Meta Events Manager.',
    keywords: ['events manager', 'meta', 'data', 'lihat data', 'dashboard', 'event'],
  },
  '/whitelist/monitoring/ga4-data': {
    description: 'Cara melihat dan menganalisis data di GA4.',
    keywords: ['ga4', 'data', 'analytics', 'lihat', 'analisis', 'report'],
  },
  '/whitelist/monitoring/interpretasi-metrics': {
    description: 'Cara menginterpretasi metrics dan data.',
    keywords: ['metrics', 'metrik', 'interpretasi', 'analisis', 'insight', 'kpi'],
  },
  '/whitelist/monitoring/custom-reports': {
    description: 'Membuat custom reports untuk analisis data.',
    keywords: ['custom report', 'laporan kustom', 'report', 'buat laporan', 'dashboard'],
  },
  '/whitelist/monitoring/alerts': {
    description: 'Setup alerts dan notifications untuk monitoring.',
    keywords: ['alert', 'notifikasi', 'notification', 'peringatan', 'warning'],
  },
  '/whitelist/monitoring/data-export': {
    description: 'Cara export data untuk analisis lebih lanjut.',
    keywords: ['export', 'download', 'unduh', 'csv', 'excel', 'data'],
  },
  '/whitelist/monitoring/troubleshooting': {
    description: 'Troubleshooting masalah monitoring dan data.',
    keywords: ['masalah', 'error', 'problem', 'fix', 'data hilang', 'tidak muncul'],
  },
}

/**
 * Keyword synonyms - maps common search terms to related terms
 * This helps when users search with slightly different wording
 */
const synonymMap: Record<string, string[]> = {
  'facebook': ['fb', 'meta', 'fanspage', 'fan page', 'page'],
  'instagram': ['ig', 'insta'],
  'whatsapp': ['wa', 'chat'],
  'iklan': ['ads', 'advertising', 'campaign', 'kampanye'],
  'ads': ['iklan', 'advertising', 'campaign'],
  'masalah': ['error', 'problem', 'troubleshooting', 'gagal', 'tidak bisa'],
  'troubleshooting': ['masalah', 'error', 'problem', 'fix', 'solusi'],
  'setup': ['setting', 'pengaturan', 'konfigurasi', 'atur', 'pasang'],
  'setting': ['setup', 'pengaturan', 'konfigurasi', 'atur'],
  'buat': ['create', 'membuat', 'bikin', 'tambah'],
  'hubungkan': ['connect', 'link', 'linking', 'tautkan', 'menautkan'],
  'link': ['hubungkan', 'connect', 'linking', 'taut'],
  'fanspage': ['fan page', 'facebook page', 'halaman facebook', 'page'],
  'pixel': ['meta pixel', 'facebook pixel', 'tracking pixel'],
  'budget': ['anggaran', 'biaya', 'dana', 'cost'],
  'audience': ['target', 'audiens', 'sasaran', 'targeting'],
  'report': ['laporan', 'reporting', 'analytics', 'analitik'],
  'keamanan': ['security', '2fa', 'aman', 'proteksi'],
  'optimasi': ['optimize', 'optimalisasi', 'improve', 'tingkatkan'],
}

function generateSearchData() {
  const articles: SearchArticle[] = []
  let idCounter = 1

  // Process Agency articles
  agencySidebarItems.forEach((category) => {
    const categorySlug = category.href.replace('/agency/', '')
    category.children?.forEach((article) => {
      const meta = articleMeta[article.href]
      articles.push({
        id: `a${idCounter++}`,
        title: article.title,
        slug: article.href.split('/').pop() || '',
        description: meta?.description,
        keywords: meta?.keywords,
        category_slug: categorySlug,
        category_name: category.title,
        type: 'agency',
        path: article.href,
      })
    })
  })

  // Process Whitelist articles
  whitelistSidebarItems.forEach((category) => {
    const categorySlug = category.href.replace('/whitelist/', '')
    category.children?.forEach((article) => {
      const meta = articleMeta[article.href]
      articles.push({
        id: `w${idCounter++}`,
        title: article.title,
        slug: article.href.split('/').pop() || '',
        description: meta?.description,
        keywords: meta?.keywords,
        category_slug: categorySlug,
        category_name: category.title,
        type: 'whitelist',
        path: article.href,
      })
    })
  })

  return articles
}

export const allSearchArticles: SearchArticle[] = generateSearchData()

/**
 * Get expanded search terms including synonyms
 */
function expandQuery(query: string): string[] {
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length >= 2)
  const expanded = new Set(terms)

  for (const term of terms) {
    // Check synonyms
    const synonyms = synonymMap[term]
    if (synonyms) {
      synonyms.forEach(s => expanded.add(s))
    }
    // Also check if the term is a value in any synonym group
    for (const [key, values] of Object.entries(synonymMap)) {
      if (values.includes(term)) {
        expanded.add(key)
      }
    }
  }

  return Array.from(expanded)
}

/**
 * Score-based search with weighted matching
 * Returns sorted results by relevance score
 */
export function searchArticles(query: string): SearchArticle[] {
  if (!query || query.length < 2) {
    return []
  }

  const lowerQuery = query.toLowerCase().trim()
  const queryTerms = lowerQuery.split(/\s+/).filter(t => t.length >= 2)
  const expandedTerms = expandQuery(lowerQuery)

  const scored = allSearchArticles.map((article) => {
    let score = 0
    const titleLower = article.title.toLowerCase()
    const descLower = (article.description || '').toLowerCase()
    const catLower = article.category_name.toLowerCase()
    const slugLower = article.slug.toLowerCase()
    const pathLower = article.path.toLowerCase()
    const typeLower = article.type.toLowerCase()
    const keywordsLower = (article.keywords || []).map(k => k.toLowerCase())

    // === Full query matching (highest priority) ===
    if (titleLower.includes(lowerQuery)) score += 100
    if (descLower.includes(lowerQuery)) score += 60
    if (catLower.includes(lowerQuery)) score += 40
    if (slugLower.includes(lowerQuery)) score += 50
    if (keywordsLower.some(k => k.includes(lowerQuery))) score += 70

    // === Type matching (agency/whitelist) ===
    if (typeLower === lowerQuery || typeLower.includes(lowerQuery)) score += 30

    // === Per-term matching (for multi-word queries) ===
    for (const term of queryTerms) {
      if (titleLower.includes(term)) score += 25
      if (descLower.includes(term)) score += 15
      if (catLower.includes(term)) score += 10
      if (slugLower.includes(term)) score += 12
      if (pathLower.includes(term)) score += 5
      if (keywordsLower.some(k => k.includes(term))) score += 20
    }

    // === Synonym/expanded term matching ===
    for (const term of expandedTerms) {
      if (!queryTerms.includes(term)) {
        // Only score expanded terms that aren't original terms (already scored)
        if (titleLower.includes(term)) score += 10
        if (descLower.includes(term)) score += 8
        if (keywordsLower.some(k => k.includes(term))) score += 12
        if (slugLower.includes(term)) score += 6
      }
    }

    // === Exact title match bonus ===
    if (titleLower === lowerQuery) score += 200

    return { article, score }
  })

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 15)
    .map(s => s.article)
}

/**
 * Get popular/suggested articles for empty search or "browse" mode
 */
export function getPopularArticles(): SearchArticle[] {
  const popularPaths = [
    '/agency/business-manager/membuat-business-manager',
    '/agency/business-manager/linking-fanspage',
    '/agency/ads-setup/membuat-campaign',
    '/agency/onboarding/selamat-datang',
    '/whitelist/pixel-setup/pengenalan',
    '/whitelist/google-integration/setup-ga4',
    '/agency/best-practices/faq',
    '/agency/business-manager/menautkan-page',
  ]

  return allSearchArticles.filter(a => popularPaths.includes(a.path))
}

/**
 * Get related articles based on category and type
 */
export function getRelatedArticles(query: string): SearchArticle[] {
  const lowerQuery = query.toLowerCase().trim()

  // Try to match by type
  if (lowerQuery.includes('agency') || lowerQuery.includes('agensi')) {
    return allSearchArticles.filter(a => a.type === 'agency').slice(0, 8)
  }
  if (lowerQuery.includes('whitelist') || lowerQuery.includes('pixel') || lowerQuery.includes('tracking')) {
    return allSearchArticles.filter(a => a.type === 'whitelist').slice(0, 8)
  }

  // Try to match by category
  const categoryMatches = allSearchArticles.filter(a =>
    a.category_name.toLowerCase().includes(lowerQuery) ||
    a.category_slug.toLowerCase().includes(lowerQuery)
  )
  if (categoryMatches.length > 0) return categoryMatches.slice(0, 8)

  // Return popular as fallback
  return getPopularArticles()
}

/**
 * AI-enhanced search that combines smart scoring with AI ranking
 *
 * @param query - User's search query
 * @param options - Configuration options
 * @returns Promise<AISearchResult[]> - AI-enhanced search results
 */
export async function aiEnhancedSearch(
  query: string,
  options: { enableAI?: boolean; limit?: number } = {}
): Promise<AISearchResult[]> {
  const { enableAI = true, limit = 15 } = options

  // Validate query
  if (!query || query.length < 2) {
    return []
  }

  try {
    // Step 1: Use smart scored search to get candidates
    const candidates = searchArticles(query).slice(0, 20)

    // If no candidates found, try related articles
    if (candidates.length === 0) {
      const related = getRelatedArticles(query)
      if (related.length > 0) {
        return related.slice(0, limit).map(c => ({
          ...c,
          relevance_score: 30,
          is_ai_enhanced: false,
        }))
      }
      return []
    }

    // Step 2: If AI is disabled or not enough candidates, return scored results
    if (!enableAI || candidates.length <= 1) {
      return candidates.slice(0, limit).map(c => ({
        ...c,
        relevance_score: 50,
        is_ai_enhanced: false,
      }))
    }

    // Step 3: Use AI to rank results
    const { rankResultsWithAI } = await import('./search-ranker')
    const rankedResults = await rankResultsWithAI(query, candidates)

    // Step 4: Return top results
    return rankedResults.slice(0, limit)

  } catch (error) {
    console.error('AI search failed, falling back to static:', error)

    // Fallback to static search
    return searchArticles(query).map(c => ({
      ...c,
      relevance_score: 50,
      is_ai_enhanced: false,
    }))
  }
}