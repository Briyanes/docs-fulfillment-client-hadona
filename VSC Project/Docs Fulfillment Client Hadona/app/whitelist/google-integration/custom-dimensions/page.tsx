import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Custom Dimensions"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      prevHref="/whitelist/google-integration/verifikasi"
      prevTitle="Verifikasi Integration"
      nextHref="/whitelist/google-integration/troubleshooting"
      nextTitle="Troubleshooting GA4"
    >
      <h2>Apa itu Custom Dimensions?</h2>
      <p>
        Custom dimensions adalah atribut tambahan yang dapat Anda tambahkan ke events untuk memberikan konteks lebih detail tentang user behavior. GA4 menyediakan default dimensions, tetapi custom dimensions memungkinkan Anda untuk track data spesifik sesuai kebutuhan bisnis.
      </p>

      <h2>Jenis Custom Dimensions</h2>
      <h3>1. Event-scoped Dimensions</h3>
      <p>Dimensions yang terkait dengan specific events:</p>
      <ul>
        <li>Contoh: Product category, Campaign name, User type</li>
        <li>Hanya tersedia untuk events yang mengirim dimension tersebut</li>
        <li>Maksimal 50 event-scoped dimensions per property</li>
      </ul>

      <h3>2. User-scoped Dimensions</h3>
      <p>Dimensions yang terkait dengan user:</p>
      <ul>
        <li>Contoh: User segment, Membership level, Customer type</li>
        <li>Persist across sessions</li>
        <li>Maksimal 25 user-scoped dimensions per property</li>
      </ul>

      <h3>3. Item-scoped Dimensions</h3>
      <p>Dimensions untuk e-commerce items:</p>
      <ul>
        <li>Contoh: Item category, Brand, Color</li>
        <li>Digunakan dalam purchase events</li>
        <li>Maksimal 10 item-scoped dimensions per property</li>
      </ul>

      <h2>Membuat Custom Dimensions</h2>
      <h3>Langkah 1: Setup di GA4</h3>
      <ol>
        <li>Buka GA4 → <strong>"Admin"</strong></li>
        <li>Di kolom <strong>"Property"</strong>, klik <strong>"Custom Definitions"</strong></li>
        <li>Klik <strong>"Create custom dimension"</strong></li>
        <li>Isi informasi:
          <ul>
            <li><strong>Dimension name:</strong> Nama yang akan muncul di reports</li>
            <li><strong>Scope:</strong> Event, User, atau Item</li>
            <li><strong>Event parameter:</strong> Nama parameter yang dikirim dari website</li>
            <li><strong>Description:</strong> Deskripsi dimension (optional)</li>
          </ul>
        </li>
        <li>Klik <strong>"Save"</strong></li>
      </ol>

      <h3>Langkah 2: Send Parameter dari Website</h3>
      <p>Setelah custom dimension dibuat, kirim parameter dari website:</p>

      <h4>Menggunakan gtag.js</h4>
      <pre><code>{`gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 100.00,
  'currency': 'USD',
  'custom_parameter_name': 'custom_value'
});`}</code></pre>

      <h4>Menggunakan Google Tag Manager</h4>
      <ol>
        <li>Buka GTM → Create/Edit Event tag</li>
        <li>Di <strong>"Event Parameters"</strong>, tambahkan parameter</li>
        <li>Parameter name harus sama dengan yang di-setup di GA4</li>
        <li>Value bisa dari Data Layer variable atau constant</li>
      </ol>

      <h2>Best Practices untuk Custom Dimensions</h2>
      <h3>1. Naming Convention</h3>
      <ul>
        <li>Gunakan nama yang deskriptif dan konsisten</li>
        <li>Hindari special characters</li>
        <li>Gunakan lowercase dengan underscores (snake_case)</li>
        <li>Contoh: <code>user_segment</code>, <code>campaign_source</code></li>
      </ul>

      <h3>2. Planning Dimensions</h3>
      <ul>
        <li>Plan dimensions sebelum membuat (ada limit per property)</li>
        <li>Prioritize dimensions yang paling penting</li>
        <li>Dokumentasikan semua custom dimensions</li>
      </ul>

      <h3>3. Data Quality</h3>
      <ul>
        <li>Pastikan parameter values konsisten</li>
        <li>Hindari null atau empty values jika memungkinkan</li>
        <li>Gunakan standardized values (contoh: "USD" bukan "usd" atau "dollar")</li>
      </ul>

      <h2>Use Cases</h2>
      <h3>E-commerce</h3>
      <ul>
        <li><strong>Product category:</strong> Track kategori produk yang dibeli</li>
        <li><strong>Brand:</strong> Track brand preference</li>
        <li><strong>Price range:</strong> Segment berdasarkan harga</li>
      </ul>

      <h3>Content Websites</h3>
      <ul>
        <li><strong>Content type:</strong> Blog, video, podcast, dll</li>
        <li><strong>Author:</strong> Track performa per author</li>
        <li><strong>Topic category:</strong> Technology, Business, dll</li>
      </ul>

      <h3>Lead Generation</h3>
      <ul>
        <li><strong>Lead source:</strong> Organic, Paid, Referral</li>
        <li><strong>Form type:</strong> Contact, Newsletter, Demo request</li>
        <li><strong>User segment:</strong> B2B, B2C, Enterprise</li>
      </ul>

      <h2>Menggunakan Custom Dimensions di Reports</h2>
      <h3>Di Standard Reports</h3>
      <ol>
        <li>Buka report (contoh: <strong>"Events"</strong>)</li>
        <li>Klik <strong>"Customize report"</strong> (ikon pensil)</li>
        <li>Di <strong>"Dimensions"</strong>, tambahkan custom dimension</li>
        <li>Save report</li>
      </ol>

      <h3>Di Exploration Reports</h3>
      <ol>
        <li>Buka <strong>"Explore"</strong> → Create new exploration</li>
        <li>Di <strong>"Dimensions"</strong>, pilih custom dimension</li>
        <li>Drag ke rows atau columns</li>
        <li>Add metrics untuk analisis</li>
      </ol>

      <h2>Limitations</h2>
      <ul>
        <li><strong>Event-scoped:</strong> Maksimal 50 dimensions</li>
        <li><strong>User-scoped:</strong> Maksimal 25 dimensions</li>
        <li><strong>Item-scoped:</strong> Maksimal 10 dimensions</li>
        <li>Data hanya tersedia setelah dimension dibuat (tidak retroactive)</li>
        <li>Beberapa dimensions mungkin tidak tersedia di semua reports</li>
      </ul>

      <h2>Troubleshooting</h2>
      <h3>Dimension Tidak Muncul di Reports</h3>
      <ul>
        <li>Pastikan parameter sudah dikirim dari website</li>
        <li>Verify parameter name sama dengan yang di-setup di GA4</li>
        <li>Tunggu 24-48 jam untuk data mulai muncul</li>
        <li>Cek di Realtime reports terlebih dahulu</li>
      </ul>

      <h3>Data Tidak Akurat</h3>
      <ul>
        <li>Pastikan parameter values konsisten</li>
        <li>Cek untuk typos atau case sensitivity issues</li>
        <li>Verify data dikirim dengan benar dari website</li>
      </ul>
    </DocLayout>
  )
}
