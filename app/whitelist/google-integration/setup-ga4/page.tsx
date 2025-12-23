import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Setup GA4 Property"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      description="Panduan langkah demi langkah membuat dan mengatur GA4 property"
      prevHref="/whitelist/google-integration/pengenalan-ga4"
      prevTitle="Pengenalan GA4"
      nextHref="/whitelist/google-integration/linking-google-ads"
      nextTitle="Linking Google Ads"
    >
      <h2>Langkah 1: Membuat GA4 Property</h2>
      <ol>
        <li>Login ke <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">Google Analytics</a></li>
        <li>Klik <strong>"Admin"</strong> di pojok kiri bawah</li>
        <li>Di kolom <strong>"Property"</strong>, klik <strong>"Create Property"</strong></li>
        <li>Masukkan nama property (contoh: "Website Client Name")</li>
        <li>Pilih timezone dan currency yang sesuai</li>
        <li>Klik <strong>"Next"</strong> dan isi informasi bisnis</li>
        <li>Pilih tujuan penggunaan GA4</li>
        <li>Klik <strong>"Create"</strong></li>
      </ol>

      <h2>Langkah 2: Setup Data Stream</h2>
      <p>Setelah property dibuat, Anda perlu membuat data stream:</p>
      <ol>
        <li>Di halaman property, klik <strong>"Data Streams"</strong></li>
        <li>Klik <strong>"Add stream"</strong> → pilih <strong>"Web"</strong></li>
        <li>Masukkan URL website (contoh: https://example.com)</li>
        <li>Masukkan nama stream (contoh: "Website Stream")</li>
        <li>Klik <strong>"Create stream"</strong></li>
      </ol>

      <h2>Langkah 3: Mendapatkan Measurement ID</h2>
      <p>Setelah stream dibuat, Anda akan mendapatkan Measurement ID:</p>
      <ul>
        <li>Format: <code>G-XXXXXXXXXX</code></li>
        <li>ID ini akan digunakan untuk menginstal GA4 di website</li>
        <li>Salin dan simpan ID ini dengan aman</li>
      </ul>

      <h2>Langkah 4: Install GA4 di Website</h2>
      <h3>Metode 1: Google Tag Manager (Recommended)</h3>
      <ol>
        <li>Login ke Google Tag Manager</li>
        <li>Buat tag baru dengan tipe <strong>"Google Analytics: GA4 Configuration"</strong></li>
        <li>Masukkan Measurement ID yang sudah didapat</li>
        <li>Trigger: <strong>"All Pages"</strong></li>
        <li>Save dan publish container</li>
      </ol>

      <h3>Metode 2: Direct Installation (gtag.js)</h3>
      <p>Tambahkan script berikut sebelum closing tag <code>&lt;/head&gt;</code>:</p>
      <pre><code>{`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>`}</code></pre>
      <p><strong>Catatan:</strong> Ganti <code>G-XXXXXXXXXX</code> dengan Measurement ID Anda.</p>

      <h2>Langkah 5: Verifikasi Installation</h2>
      <ol>
        <li>Buka website Anda di browser</li>
        <li>Buka Google Analytics → <strong>"Reports"</strong> → <strong>"Realtime"</strong></li>
        <li>Jika Anda melihat aktivitas di halaman Realtime, berarti instalasi berhasil</li>
        <li>Tunggu 24-48 jam untuk data lengkap mulai muncul</li>
      </ol>

      <h2>Konfigurasi Tambahan</h2>
      <h3>Enhanced Measurement</h3>
      <p>GA4 secara otomatis mengaktifkan Enhanced Measurement yang melacak:</p>
      <ul>
        <li>Page views</li>
        <li>Scrolls (90% depth)</li>
        <li>Outbound clicks</li>
        <li>Site search</li>
        <li>Video engagement</li>
        <li>File downloads</li>
      </ul>
      <p>Anda dapat mengaktifkan/menonaktifkan fitur ini di <strong>"Data Streams"</strong> → <strong>"Enhanced measurement"</strong>.</p>

      <h3>Data Retention</h3>
      <p>Atur data retention di <strong>"Admin"</strong> → <strong>"Data Settings"</strong> → <strong>"Data Retention"</strong>. Default adalah 14 bulan, bisa diubah menjadi 50 bulan.</p>

      <h2>Next Steps</h2>
      <p>Setelah GA4 berhasil diinstall, langkah selanjutnya adalah linking dengan Google Ads (jika menggunakan Google Ads) untuk tracking yang lebih akurat.</p>
    </ArticleLayout>
  )
}
