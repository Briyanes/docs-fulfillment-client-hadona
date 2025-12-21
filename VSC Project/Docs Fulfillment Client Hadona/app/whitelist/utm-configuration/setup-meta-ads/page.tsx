import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Setup UTM untuk Meta Ads"
      categoryHref="/whitelist/utm-configuration"
      categoryName="UTM Configuration"
      prevHref="/whitelist/utm-configuration/pengenalan"
      prevTitle="Pengenalan UTM"
      nextHref="/whitelist/utm-configuration/utm-source"
      nextTitle="Parameter utm_source"
    >
      <h2>Mengapa Setup UTM untuk Meta Ads?</h2>
      <p>
        Setup UTM untuk Meta Ads memungkinkan Anda untuk melacak performa campaign secara detail di Google Analytics dan tools analytics lainnya. Ini membantu mengukur ROI, mengoptimalkan budget, dan memahami user journey dari click hingga conversion.
      </p>

      <h2>Metode 1: Automatic UTM Parameters (Recommended)</h2>
      <p>Meta Ads secara otomatis menambahkan UTM parameters jika diaktifkan:</p>
      <ol>
        <li>Buka Meta Ads Manager</li>
        <li>Pergi ke <strong>"Account Settings"</strong> → <strong>"Tracking"</strong></li>
        <li>Aktifkan <strong>"Automatic UTM Parameters"</strong></li>
        <li>Meta akan otomatis menambahkan:
          <ul>
            <li><code>utm_source=facebook</code> (atau <code>instagram</code>)</li>
            <li><code>utm_medium=cpc</code></li>
            <li><code>utm_campaign=[Campaign Name]</code></li>
            <li><code>utm_content=[Ad Name]</code></li>
          </ul>
        </li>
      </ol>

      <h2>Metode 2: Manual UTM Parameters</h2>
      <p>Untuk kontrol lebih detail, tambahkan UTM manual di URL destination:</p>
      <h3>Di Ad Level</h3>
      <ol>
        <li>Buat atau edit ad</li>
        <li>Di <strong>"Website URL"</strong>, tambahkan UTM parameters</li>
        <li>Contoh:
          <pre><code>{`https://example.com/product?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale&utm_content=video_ad`}</code></pre>
        </li>
      </ol>

      <h3>Di Ad Set Level (URL Parameters)</h3>
      <ol>
        <li>Buka Ad Set settings</li>
        <li>Scroll ke <strong>"Tracking"</strong> section</li>
        <li>Di <strong>"URL Parameters"</strong>, tambahkan UTM parameters</li>
        <li>Parameters ini akan ditambahkan ke semua ads di ad set</li>
      </ol>

      <h2>Best Practices untuk Meta Ads UTM</h2>
      <h3>1. Naming Convention</h3>
      <ul>
        <li><strong>utm_source:</strong> <code>facebook</code> atau <code>instagram</code></li>
        <li><strong>utm_medium:</strong> <code>cpc</code> (cost per click)</li>
        <li><strong>utm_campaign:</strong> Nama campaign (contoh: <code>summer_sale_2024</code>)</li>
        <li><strong>utm_content:</strong> Ad name atau ad ID untuk A/B testing</li>
      </ul>

      <h3>2. Campaign Structure</h3>
      <p>Struktur UTM yang baik untuk Meta Ads:</p>
      <pre><code>{`utm_source=facebook
utm_medium=cpc
utm_campaign=[objective]_[product]_[date]
utm_content=[ad_type]_[creative_id]`}</code></pre>
      <p>Contoh:</p>
      <pre><code>{`utm_source=facebook
utm_medium=cpc
utm_campaign=conversion_shoes_q1_2024
utm_content=video_ad_001`}</code></pre>

      <h3>3. Include Ad Set & Ad Names</h3>
      <p>Untuk tracking yang lebih detail, include ad set dan ad names:</p>
      <ul>
        <li>Gunakan <code>utm_content</code> untuk ad name</li>
        <li>Atau tambahkan custom parameter untuk ad set name</li>
      </ul>

      <h2>Setup di Meta Ads Manager</h2>
      <h3>Step-by-Step</h3>
      <ol>
        <li><strong>Buka Campaign atau Ad Set:</strong>
          <ul>
            <li>Pilih campaign atau ad set yang ingin di-setup</li>
          </ul>
        </li>
        <li><strong>Edit Settings:</strong>
          <ul>
            <li>Klik <strong>"Edit"</strong> pada campaign atau ad set</li>
          </ul>
        </li>
        <li><strong>Add URL Parameters:</strong>
          <ul>
            <li>Scroll ke <strong>"Tracking"</strong> section</li>
            <li>Di <strong>"URL Parameters"</strong>, tambahkan UTM parameters</li>
            <li>Format: <code>utm_source=facebook&utm_medium=cpc&utm_campaign=...</code></li>
          </ul>
        </li>
        <li><strong>Save Changes:</strong>
          <ul>
            <li>Klik <strong>"Save"</strong> atau <strong>"Publish"</strong></li>
          </ul>
        </li>
      </ol>

      <h2>Verifikasi UTM di Meta Ads</h2>
      <h3>1. Preview Ad</h3>
      <ol>
        <li>Buka ad yang sudah dibuat</li>
        <li>Klik <strong>"Preview"</strong></li>
        <li>Hover atau klik pada link</li>
        <li>Cek URL di browser address bar atau status bar</li>
        <li>Pastikan UTM parameters muncul</li>
      </ol>

      <h3>2. Test Click</h3>
      <ol>
        <li>Publish ad (atau gunakan test account)</li>
        <li>Klik pada ad</li>
        <li>Cek URL destination di browser</li>
        <li>Verify semua UTM parameters terkirim dengan benar</li>
      </ol>

      <h2>Tracking di Google Analytics</h2>
      <p>Setelah UTM setup, data akan muncul di GA4:</p>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Acquisition"</strong></li>
        <li>Lihat <strong>"Session source/medium"</strong></li>
        <li>Filter untuk <code>facebook / cpc</code> atau <code>instagram / cpc</code></li>
        <li>Lihat campaign performance di <strong>"Campaign"</strong> dimension</li>
      </ol>

      <h2>Common Issues & Solutions</h2>
      <h3>UTM Tidak Muncul di URL</h3>
      <ul>
        <li>Pastikan URL parameters ditambahkan dengan benar</li>
        <li>Cek tidak ada typo atau missing ampersand (&amp;)</li>
        <li>Verify ad sudah published (bukan draft)</li>
      </ul>

      <h3>Data Tidak Muncul di GA4</h3>
      <ul>
        <li>Tunggu 24-48 jam untuk data processing</li>
        <li>Pastikan GA4 sudah terinstall di website</li>
        <li>Cek UTM parameters format sudah benar</li>
        <li>Verify tidak ada ad blockers yang memblokir tracking</li>
      </ul>

      <h2>Tips & Best Practices</h2>
      <ul>
        <li><strong>Use Templates:</strong> Buat template UTM untuk consistency</li>
        <li><strong>Document Everything:</strong> Dokumentasikan semua UTM combinations</li>
        <li><strong>Regular Review:</strong> Review UTM data secara berkala</li>
        <li><strong>Test Before Launch:</strong> Selalu test UTM sebelum campaign launch</li>
        <li><strong>Consistent Naming:</strong> Gunakan naming convention yang konsisten</li>
      </ul>
    </DocLayout>
  )
}
