import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Verifikasi Integration"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      prevHref="/whitelist/google-integration/event-mapping"
      prevTitle="Event Mapping"
      nextHref="/whitelist/google-integration/custom-dimensions"
      nextTitle="Custom Dimensions"
    >
      <h2>Mengapa Verifikasi Penting?</h2>
      <p>
        Verifikasi integration memastikan bahwa GA4 berfungsi dengan benar, menerima data dengan akurat, dan semua konfigurasi sudah tepat. Ini membantu mencegah masalah di masa depan dan memastikan data yang Anda lihat adalah data yang valid.
      </p>

      <h2>Checklist Verifikasi</h2>
      <h3>1. Installation Verification</h3>
      <h4>GA4 Tag Terinstall dengan Benar</h4>
      <ol>
        <li>Buka website di browser</li>
        <li>Buka Developer Tools (F12)</li>
        <li>Tab <strong>"Network"</strong> → Filter: <code>collect</code> atau <code>gtag</code></li>
        <li>Reload halaman</li>
        <li>Pastikan ada request ke <code>google-analytics.com</code> atau <code>googletagmanager.com</code></li>
        <li>Cek request URL mengandung Measurement ID Anda</li>
      </ol>

      <h4>Alternative: View Page Source</h4>
      <ol>
        <li>Right-click → <strong>"View Page Source"</strong></li>
        <li>Search: <code>G-</code> (Measurement ID prefix)</li>
        <li>Pastikan Measurement ID muncul di code</li>
      </ol>

      <h3>2. Realtime Data Verification</h3>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Realtime"</strong></li>
        <li>Buka website di tab baru</li>
        <li>Navigate beberapa halaman</li>
        <li>Kembali ke GA4 Realtime</li>
        <li>Pastikan Anda melihat aktivitas (Users, Page views)</li>
        <li>Jika tidak muncul dalam 1-2 menit, ada masalah dengan installation</li>
      </ol>

      <h3>3. Event Tracking Verification</h3>
      <h4>Standard Events</h4>
      <ol>
        <li>Di GA4 Realtime, scroll ke <strong>"Event count by Event name"</strong></li>
        <li>Trigger beberapa events (scroll, click, dll)</li>
        <li>Pastikan events muncul di list</li>
      </ol>

      <h4>Custom Events</h4>
      <ol>
        <li>Trigger custom event di website</li>
        <li>Cek di Realtime → <strong>"Events"</strong></li>
        <li>Pastikan event name sesuai dengan yang dikirim</li>
        <li>Cek event parameters sudah benar</li>
      </ol>

      <h3>4. Enhanced Measurement Verification</h3>
      <p>Verifikasi Enhanced Measurement events:</p>
      <ul>
        <li><strong>Scroll:</strong> Scroll halaman hingga 90% depth</li>
        <li><strong>Outbound clicks:</strong> Klik link external</li>
        <li><strong>Site search:</strong> Lakukan search di website (jika ada)</li>
        <li><strong>Video engagement:</strong> Play video di website</li>
        <li><strong>File downloads:</strong> Download file (PDF, dll)</li>
      </ul>
      <p>Cek semua events muncul di GA4 Realtime.</p>

      <h3>5. Conversion Events Verification</h3>
      <ol>
        <li>Buka <strong>"Admin"</strong> → <strong>"Events"</strong></li>
        <li>Pastikan conversion events sudah di-mark sebagai conversions</li>
        <li>Trigger conversion event</li>
        <li>Buka <strong>"Reports"</strong> → <strong>"Realtime"</strong> → <strong>"Conversions"</strong></li>
        <li>Pastikan conversion muncul</li>
      </ol>

      <h3>6. Data Accuracy Verification</h3>
      <h4>Compare dengan Other Tools</h4>
      <ul>
        <li>Compare page views dengan server logs (jika ada)</li>
        <li>Compare dengan Meta Pixel data (jika sudah diinstall)</li>
        <li>Note: Beberapa perbedaan normal karena tracking methods berbeda</li>
      </ul>

      <h4>Check Data Sampling</h4>
      <ol>
        <li>Buka standard reports (bukan Realtime)</li>
        <li>Cek apakah ada indicator "This report is based on sampled data"</li>
        <li>Jika ada, pertimbangkan untuk upgrade ke GA4 360 (untuk data unsampled)</li>
      </ol>

      <h2>Tools untuk Verifikasi</h2>
      <h3>1. GA Debugger (Chrome Extension)</h3>
      <ol>
        <li>Install <a href="https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna" target="_blank" rel="noopener noreferrer">GA Debugger extension</a></li>
        <li>Aktifkan extension</li>
        <li>Buka website</li>
        <li>Buka Console (F12)</li>
        <li>Lihat debug messages untuk GA4 events</li>
      </ol>

      <h3>2. Google Tag Assistant</h3>
      <ol>
        <li>Install <a href="https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk" target="_blank" rel="noopener noreferrer">Tag Assistant Legacy</a></li>
        <li>Aktifkan recording</li>
        <li>Navigate website</li>
        <li>Lihat summary tags yang terdeteksi</li>
      </ol>

      <h3>3. GA4 DebugView</h3>
      <ol>
        <li>Di GTM, enable <strong>"Preview mode"</strong></li>
        <li>Atau tambahkan <code>debug_mode: true</code> di GA4 config</li>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"DebugView"</strong></li>
        <li>Lihat events secara real-time dengan detail lengkap</li>
      </ol>

      <h2>Common Issues & Solutions</h2>
      <h3>No Data in Realtime</h3>
      <ul>
        <li>Cek GA4 tag sudah terinstall</li>
        <li>Pastikan tidak ada ad blocker yang aktif</li>
        <li>Cek browser console untuk JavaScript errors</li>
        <li>Pastikan Measurement ID benar</li>
      </ul>

      <h3>Events Tidak Terkirim</h3>
      <ul>
        <li>Verify event syntax benar</li>
        <li>Cek trigger di GTM (jika menggunakan GTM)</li>
        <li>Pastikan GA4 config tag sudah fire sebelum event tag</li>
        <li>Cek event name sesuai dengan GA4 naming convention</li>
      </ul>

      <h3>Data Tidak Akurat</h3>
      <ul>
        <li>Pastikan tidak ada duplicate tracking</li>
        <li>Cek filter internal traffic sudah benar</li>
        <li>Verify IP exclusions jika ada</li>
        <li>Pastikan timezone settings benar</li>
      </ul>

      <h2>Regular Monitoring</h2>
      <p>Setelah verifikasi awal, lakukan monitoring berkala:</p>
      <ul>
        <li><strong>Daily:</strong> Cek Realtime untuk memastikan tracking masih aktif</li>
        <li><strong>Weekly:</strong> Review standard reports untuk anomalies</li>
        <li><strong>Monthly:</strong> Full audit tracking setup</li>
      </ul>
    </DocLayout>
  )
}
