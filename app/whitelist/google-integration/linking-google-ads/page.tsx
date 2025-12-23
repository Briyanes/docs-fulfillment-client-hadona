import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Linking Google Ads"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      description="Tutorial menghubungkan Google Ads dengan GA4 untuk analisis terintegrasi"
      prevHref="/whitelist/google-integration/setup-ga4"
      prevTitle="Setup GA4 Property"
      nextHref="/whitelist/google-integration/authentication"
      nextTitle="Authentication & Access"
    >
      <h2>Mengapa Linking Google Ads dengan GA4?</h2>
      <p>
        Linking Google Ads dengan GA4 memungkinkan Anda untuk:
      </p>
      <ul>
        <li>Melihat data GA4 di Google Ads interface</li>
        <li>Menggunakan GA4 conversions sebagai goals di Google Ads</li>
        <li>Mendapatkan insights yang lebih detail tentang performa campaign</li>
        <li>Mengoptimalkan bidding berdasarkan data GA4</li>
        <li>Melihat user journey dari click hingga conversion</li>
      </ul>

      <h2>Prerequisites</h2>
      <p>Sebelum melakukan linking, pastikan:</p>
      <ul>
        <li>Anda memiliki akses Admin di Google Analytics account</li>
        <li>Anda memiliki akses Admin di Google Ads account</li>
        <li>Kedua account menggunakan email yang sama (atau dalam organization yang sama)</li>
        <li>GA4 property sudah dibuat dan aktif</li>
      </ul>

      <h2>Langkah-langkah Linking</h2>
      <h3>Dari Google Analytics</h3>
      <ol>
        <li>Login ke <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">Google Analytics</a></li>
        <li>Klik <strong>"Admin"</strong> (ikon gear di pojok kiri bawah)</li>
        <li>Di kolom <strong>"Property"</strong>, klik <strong>"Google Ads Linking"</strong></li>
        <li>Klik <strong>"Link"</strong> atau <strong>"+ New Link Group"</strong></li>
        <li>Pilih Google Ads account yang ingin di-link</li>
        <li>Berikan nama untuk link group (contoh: "Main Google Ads Account")</li>
        <li>Pilih Google Ads accounts yang ingin di-link</li>
        <li>Klik <strong>"Next"</strong></li>
      </ol>

      <h3>Konfigurasi Link Settings</h3>
      <ol>
        <li><strong>Enable Personalized Advertising:</strong> Aktifkan untuk menggunakan data GA4 untuk remarketing</li>
        <li><strong>Enable Auto-tagging:</strong> Pastikan auto-tagging aktif di Google Ads (recommended)</li>
        <li>Klik <strong>"Next"</strong></li>
      </ol>

      <h3>Review & Submit</h3>
      <ol>
        <li>Review konfigurasi yang sudah dibuat</li>
        <li>Klik <strong>"Submit"</strong></li>
        <li>Tunggu beberapa saat hingga linking selesai (biasanya instant)</li>
      </ol>

      <h2>Verifikasi Linking</h2>
      <p>Untuk memverifikasi bahwa linking berhasil:</p>
      <ol>
        <li>Di Google Analytics, buka <strong>"Admin"</strong> → <strong>"Google Ads Linking"</strong></li>
        <li>Pastikan status menunjukkan <strong>"Linked"</strong></li>
        <li>Di Google Ads, buka <strong>"Tools & Settings"</strong> → <strong>"Linked accounts"</strong></li>
        <li>Pastikan Google Analytics account muncul di daftar</li>
      </ol>

      <h2>Menggunakan GA4 Conversions di Google Ads</h2>
      <p>Setelah linking, Anda dapat menggunakan GA4 conversions:</p>
      <ol>
        <li>Di Google Ads, buka <strong>"Tools & Settings"</strong> → <strong>"Conversions"</strong></li>
        <li>Klik <strong>"+"</strong> untuk membuat conversion baru</li>
        <li>Pilih <strong>"Import"</strong> → <strong>"Google Analytics (GA4)"</strong></li>
        <li>Pilih GA4 property yang sudah di-link</li>
        <li>Pilih events yang ingin dijadikan conversions</li>
        <li>Konfigurasi conversion settings (value, count, attribution)</li>
        <li>Klik <strong>"Import and continue"</strong></li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Auto-tagging:</strong> Selalu aktifkan auto-tagging untuk tracking yang lebih akurat</li>
        <li><strong>Multiple Accounts:</strong> Anda dapat link multiple Google Ads accounts ke satu GA4 property</li>
        <li><strong>Conversion Import:</strong> Import conversions yang relevan untuk optimasi bidding</li>
        <li><strong>Data Freshness:</strong> Data GA4 di Google Ads mungkin memiliki delay 3-24 jam</li>
      </ul>

      <h2>Troubleshooting</h2>
      <h3>Linking Gagal</h3>
      <ul>
        <li>Pastikan email yang digunakan memiliki akses Admin di kedua account</li>
        <li>Pastikan tidak ada firewall atau security settings yang memblokir</li>
        <li>Coba logout dan login kembali</li>
      </ul>

      <h3>Data Tidak Muncul</h3>
      <ul>
        <li>Tunggu 24-48 jam setelah linking untuk data mulai muncul</li>
        <li>Pastikan auto-tagging aktif di Google Ads</li>
        <li>Pastikan GA4 sudah menerima data dari website</li>
      </ul>
    </ArticleLayout>
  )
}
