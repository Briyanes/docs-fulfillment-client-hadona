import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Event Mapping"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      description="Tutorial memetakan events dari Meta Pixel ke GA4 untuk analisis terpadu"
      prevHref="/whitelist/google-integration/authentication"
      prevTitle="Authentication & Access"
      nextHref="/whitelist/google-integration/verifikasi"
      nextTitle="Verifikasi Integration"
    >
      <h2>Apa itu Event Mapping?</h2>
      <p>
        Event mapping adalah proses memetakan events dari Meta Pixel ke GA4 events agar data dapat dianalisis secara terpadu. Ini memungkinkan Anda untuk melihat performa Meta Ads campaigns di GA4 dengan lebih detail.
      </p>

      <h2>Mengapa Event Mapping Penting?</h2>
      <ul>
        <li><strong>Unified Analytics:</strong> Melihat semua data tracking di satu tempat</li>
        <li><strong>Better Attribution:</strong> Memahami user journey dari berbagai sumber</li>
        <li><strong>Cross-Platform Insights:</strong> Menganalisis bagaimana Meta Ads dan Google Ads bekerja bersama</li>
        <li><strong>Conversion Tracking:</strong> Tracking conversions dari Meta Ads di GA4</li>
      </ul>

      <h2>Meta Pixel Events ke GA4 Events</h2>
      <h3>Standard Events Mapping</h3>
      <table>
        <thead>
          <tr>
            <th>Meta Pixel Event</th>
            <th>GA4 Event</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>PageView</code></td>
            <td><code>page_view</code></td>
            <td>Automatic, tidak perlu mapping manual</td>
          </tr>
          <tr>
            <td><code>ViewContent</code></td>
            <td><code>view_item</code></td>
            <td>User melihat konten/produk</td>
          </tr>
          <tr>
            <td><code>AddToCart</code></td>
            <td><code>add_to_cart</code></td>
            <td>User menambahkan item ke cart</td>
          </tr>
          <tr>
            <td><code>InitiateCheckout</code></td>
            <td><code>begin_checkout</code></td>
            <td>User memulai checkout process</td>
          </tr>
          <tr>
            <td><code>Purchase</code></td>
            <td><code>purchase</code></td>
            <td>User menyelesaikan purchase</td>
          </tr>
          <tr>
            <td><code>Lead</code></td>
            <td><code>generate_lead</code></td>
            <td>User mengisi form lead</td>
          </tr>
          <tr>
            <td><code>CompleteRegistration</code></td>
            <td><code>sign_up</code></td>
            <td>User menyelesaikan registrasi</td>
          </tr>
        </tbody>
      </table>

      <h2>Setup Event Mapping di Google Tag Manager</h2>
      <h3>Langkah 1: Setup GA4 Configuration Tag</h3>
      <ol>
        <li>Buka Google Tag Manager</li>
        <li>Buat tag baru: <strong>"Google Analytics: GA4 Configuration"</strong></li>
        <li>Masukkan Measurement ID</li>
        <li>Trigger: <strong>"All Pages"</strong></li>
      </ol>

      <h3>Langkah 2: Setup Event Tag untuk Meta Pixel Events</h3>
      <ol>
        <li>Buat tag baru: <strong>"Google Analytics: GA4 Event"</strong></li>
        <li>Configuration Tag: Pilih GA4 Configuration tag yang sudah dibuat</li>
        <li>Event Name: Gunakan GA4 event name (contoh: <code>purchase</code>)</li>
        <li>Event Parameters: Map parameters dari Meta Pixel</li>
      </ol>

      <h3>Langkah 3: Setup Trigger</h3>
      <ol>
        <li>Buat Custom Event trigger</li>
        <li>Event name: Nama event dari Meta Pixel (contoh: <code>fbq</code> atau custom event name)</li>
        <li>Attach trigger ke GA4 Event tag</li>
      </ol>

      <h2>Mapping Parameters</h2>
      <h3>Purchase Event Example</h3>
      <p>Meta Pixel mengirim:</p>
      <pre><code>{`fbq('track', 'Purchase', {
  value: 100.00,
  currency: 'USD',
  content_ids: ['123'],
  contents: [{id: '123', quantity: 1}]
});`}</code></pre>

      <p>Map ke GA4:</p>
      <pre><code>{`Event Parameters:
- value: {{Purchase Value}}
- currency: {{Currency}}
- items: [{
    item_id: '123',
    quantity: 1
  }]`}</code></pre>

      <h2>Custom Events Mapping</h2>
      <p>Untuk custom events, Anda perlu membuat mapping manual:</p>
      <ol>
        <li>Identifikasi custom event dari Meta Pixel</li>
        <li>Tentukan GA4 event name yang sesuai</li>
        <li>Setup tag dan trigger di GTM</li>
        <li>Test dan verify di GA4 Realtime reports</li>
      </ol>

      <h2>Verifikasi Event Mapping</h2>
      <h3>Di GA4 Realtime</h3>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Realtime"</strong></li>
        <li>Trigger event di website</li>
        <li>Pastikan event muncul di Realtime report</li>
        <li>Cek event parameters sudah benar</li>
      </ol>

      <h3>Di GA4 DebugView</h3>
      <ol>
        <li>Setup DebugView di GA4 (perlu GA Debugger extension atau gtag debug mode)</li>
        <li>Trigger events</li>
        <li>Lihat events di DebugView dengan detail parameters</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Consistent Naming:</strong> Gunakan naming convention yang konsisten</li>
        <li><strong>Parameter Mapping:</strong> Map semua parameters yang relevan</li>
        <li><strong>Testing:</strong> Selalu test mapping sebelum production</li>
        <li><strong>Documentation:</strong> Dokumentasikan semua custom mappings</li>
        <li><strong>Regular Review:</strong> Review mappings secara berkala</li>
      </ul>

      <h2>Troubleshooting</h2>
      <h3>Events Tidak Muncul di GA4</h3>
      <ul>
        <li>Pastikan trigger sudah benar di GTM</li>
        <li>Cek GA4 Configuration tag sudah aktif</li>
        <li>Verify event name sesuai dengan GA4 naming convention</li>
        <li>Cek browser console untuk errors</li>
      </ul>

      <h3>Parameters Tidak Terkirim</h3>
      <ul>
        <li>Pastikan parameter names sesuai dengan GA4 requirements</li>
        <li>Cek data layer variables di GTM</li>
        <li>Verify parameter values tidak null atau undefined</li>
      </ul>
    </ArticleLayout>
  )
}
