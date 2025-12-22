import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Parameter utm_source"
      categoryHref="/whitelist/utm-configuration"
      categoryName="UTM Configuration"
      prevHref="/whitelist/utm-configuration/setup-meta-ads"
      prevTitle="Setup UTM untuk Meta Ads"
      nextHref="/whitelist/utm-configuration/utm-medium"
      nextTitle="Parameter utm_medium"
    >
      <h2>Apa itu utm_source?</h2>
      <p>
        <code>utm_source</code> adalah parameter UTM yang mengidentifikasi sumber traffic atau platform yang mengirimkan visitor ke website Anda. Ini adalah salah satu dari tiga required UTM parameters.
      </p>

      <h2>Fungsi utm_source</h2>
      <ul>
        <li><strong>Identify Traffic Source:</strong> Mengetahui platform atau website yang mengirim traffic</li>
        <li><strong>Compare Performance:</strong> Membandingkan performa antar sumber traffic</li>
        <li><strong>Budget Allocation:</strong> Membantu alokasi budget berdasarkan performa sumber</li>
        <li><strong>Reporting:</strong> Membuat reports berdasarkan sumber traffic</li>
      </ul>

      <h2>Nilai Standar untuk utm_source</h2>
      <h3>Social Media Platforms</h3>
      <ul>
        <li><code>facebook</code> - Untuk traffic dari Facebook</li>
        <li><code>instagram</code> - Untuk traffic dari Instagram</li>
        <li><code>twitter</code> - Untuk traffic dari Twitter/X</li>
        <li><code>linkedin</code> - Untuk traffic dari LinkedIn</li>
        <li><code>tiktok</code> - Untuk traffic dari TikTok</li>
        <li><code>youtube</code> - Untuk traffic dari YouTube</li>
      </ul>

      <h3>Search Engines</h3>
      <ul>
        <li><code>google</code> - Untuk traffic dari Google</li>
        <li><code>bing</code> - Untuk traffic dari Bing</li>
        <li><code>yahoo</code> - Untuk traffic dari Yahoo</li>
      </ul>

      <h3>Email & Other</h3>
      <ul>
        <li><code>newsletter</code> - Untuk email newsletter</li>
        <li><code>email</code> - Untuk email marketing umum</li>
        <li><code>direct</code> - Untuk direct traffic (biasanya tanpa UTM)</li>
        <li><code>referral</code> - Untuk referral dari website lain</li>
      </ul>

      <h2>Best Practices</h2>
      <h3>1. Consistency</h3>
      <ul>
        <li>Gunakan nilai yang konsisten untuk setiap platform</li>
        <li>Jangan mix case (gunakan lowercase)</li>
        <li>Hindari variasi seperti <code>facebook</code> vs <code>Facebook</code> vs <code>fb</code></li>
      </ul>

      <h3>2. Naming Convention</h3>
      <ul>
        <li>Gunakan lowercase</li>
        <li>Gunakan underscores untuk compound names jika perlu</li>
        <li>Hindari special characters</li>
        <li>Contoh baik: <code>facebook</code>, <code>google_ads</code></li>
        <li>Contoh buruk: <code>Facebook</code>, <code>google-ads</code>, <code>Google Ads</code></li>
      </ul>

      <h3>3. Documentation</h3>
      <ul>
        <li>Dokumentasikan semua utm_source values yang digunakan</li>
        <li>Buat reference sheet untuk team</li>
        <li>Update secara berkala</li>
      </ul>

      <h2>Contoh Penggunaan</h2>
      <h3>Meta Ads</h3>
      <pre><code>{`https://example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale`}</code></pre>

      <h3>Instagram Ads</h3>
      <pre><code>{`https://example.com?utm_source=instagram&utm_medium=cpc&utm_campaign=product_launch`}</code></pre>

      <h3>Email Newsletter</h3>
      <pre><code>{`https://example.com?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_update`}</code></pre>

      <h2>Melihat utm_source di Analytics</h2>
      <h3>Google Analytics 4</h3>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Acquisition"</strong></li>
        <li>Lihat <strong>"Session source/medium"</strong> report</li>
        <li>Kolom pertama menunjukkan utm_source values</li>
        <li>Anda dapat filter atau group berdasarkan source</li>
      </ol>

      <h3>Custom Reports</h3>
      <p>Buat custom report dengan dimension "Source" untuk analisis lebih detail:</p>
      <ol>
        <li>Buka <strong>"Explore"</strong> → Create new exploration</li>
        <li>Add dimension: <strong>"Source"</strong></li>
        <li>Add metrics: Sessions, Users, Conversions, dll</li>
        <li>Analyze performance per source</li>
      </ol>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Inconsistent Naming:</strong> Menggunakan <code>fb</code>, <code>Facebook</code>, dan <code>facebook</code> secara bergantian</li>
        <li><strong>Case Sensitivity:</strong> <code>Facebook</code> dan <code>facebook</code> dianggap berbeda</li>
        <li><strong>Typos:</strong> Salah ketik akan membuat data terpisah</li>
        <li><strong>Missing Source:</strong> Tidak mengisi utm_source untuk paid campaigns</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li>Gunakan spreadsheet atau document untuk track semua utm_source values</li>
        <li>Standardize naming sebelum campaign launch</li>
        <li>Review data secara berkala untuk detect inconsistencies</li>
        <li>Gunakan UTM builder tools untuk avoid typos</li>
      </ul>
    </DocLayout>
  )
}
