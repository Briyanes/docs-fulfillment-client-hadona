import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Parameter utm_id"
      categoryHref="/whitelist/utm-configuration"
      categoryName="UTM Configuration"
      prevHref="/whitelist/utm-configuration/utm-campaign"
      prevTitle="Parameter utm_campaign"
      
      
    >
      <h2>Apa itu utm_id?</h2>
      <p>
        <code>utm_id</code> adalah parameter UTM opsional yang digunakan untuk melacak campaign ID atau identifier unik. Meskipun tidak sepopuler parameter UTM lainnya, utm_id berguna untuk tracking yang lebih granular dan integration dengan campaign management systems.
      </p>

      <h2>Fungsi utm_id</h2>
      <ul>
        <li><strong>Unique Identifier:</strong> Memberikan ID unik untuk setiap campaign atau ad</li>
        <li><strong>System Integration:</strong> Memudahkan integration dengan campaign management tools</li>
        <li><strong>Granular Tracking:</strong> Tracking yang lebih detail untuk A/B testing atau ad variations</li>
        <li><strong>Automation:</strong> Memudahkan automation dan reporting</li>
      </ul>

      <h2>Kapan Menggunakan utm_id?</h2>
      <h3>1. Campaign Management Systems</h3>
      <p>Jika Anda menggunakan campaign management platform yang generate unique IDs:</p>
      <ul>
        <li>Platform mungkin auto-generate campaign IDs</li>
        <li>utm_id membantu link data analytics dengan platform</li>
        <li>Memudahkan automated reporting</li>
      </ul>

      <h3>2. A/B Testing</h3>
      <p>Untuk tracking multiple variations dalam satu campaign:</p>
      <ul>
        <li>Setiap variation bisa memiliki utm_id berbeda</li>
        <li>Lebih mudah untuk compare performance</li>
        <li>Dapat di-combine dengan utm_content</li>
      </ul>

      <h3>3. Multi-Channel Campaigns</h3>
      <p>Untuk campaigns yang run di multiple channels:</p>
      <ul>
        <li>Gunakan utm_id yang sama untuk semua channels</li>
        <li>Mudah untuk aggregate data across channels</li>
        <li>Better untuk cross-channel analysis</li>
      </ul>

      <h2>Format utm_id</h2>
      <h3>Best Practices</h3>
      <ul>
        <li>Gunakan alphanumeric characters</li>
        <li>Hindari special characters</li>
        <li>Keep it short dan meaningful</li>
        <li>Contoh: <code>campaign_001</code>, <code>summer_2024_001</code>, <code>fb_ads_12345</code></li>
      </ul>

      <h2>Contoh Penggunaan</h2>
      <h3>Meta Ads Campaign ID</h3>
      <pre><code>{`https://example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale&utm_id=fb_123456789`}</code></pre>
      <p>Dimana <code>123456789</code> adalah Campaign ID dari Meta Ads Manager.</p>

      <h3>A/B Test Variation</h3>
      <pre><code>{`// Variation A
https://example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale&utm_content=video_ad&utm_id=var_a

// Variation B
https://example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale&utm_content=video_ad&utm_id=var_b`}</code></pre>

      <h3>Multi-Channel Campaign</h3>
      <pre><code>{`// Facebook
https://example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale&utm_id=campaign_2024_001

// Instagram
https://example.com?utm_source=instagram&utm_medium=cpc&utm_campaign=summer_sale&utm_id=campaign_2024_001

// Google Ads
https://example.com?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale&utm_id=campaign_2024_001`}</code></pre>
      <p>Semua menggunakan utm_id yang sama untuk aggregate analysis.</p>

      <h2>Integration dengan Meta Ads</h2>
      <h3>Menggunakan Campaign ID</h3>
      <ol>
        <li>Buka Meta Ads Manager</li>
        <li>Pilih campaign</li>
        <li>Copy Campaign ID (ada di URL atau campaign settings)</li>
        <li>Tambahkan sebagai utm_id di URL parameters</li>
        <li>Format: <code>utm_id=fb_[campaign_id]</code></li>
      </ol>

      <h3>Menggunakan Ad Set ID</h3>
      <p>Untuk tracking yang lebih granular, gunakan Ad Set ID:</p>
      <ol>
        <li>Buka Ad Set di Meta Ads Manager</li>
        <li>Copy Ad Set ID</li>
        <li>Tambahkan sebagai utm_id</li>
        <li>Format: <code>utm_id=adset_[adset_id]</code></li>
      </ol>

      <h2>Melihat utm_id di Analytics</h2>
      <h3>Google Analytics 4</h3>
      <p>utm_id tidak muncul secara default di GA4 reports. Untuk melihat utm_id:</p>
      <ol>
        <li>Buka <strong>"Explore"</strong> → Create new exploration</li>
        <li>Add dimension: <strong>"Campaign ID"</strong> (jika tersedia)</li>
        <li>Atau export raw data dan filter berdasarkan utm_id</li>
        <li>Gunakan GA4 Reporting API untuk access utm_id data</li>
      </ol>

      <h3>Alternative: Custom Dimension</h3>
      <p>Untuk tracking yang lebih mudah, buat custom dimension:</p>
      <ol>
        <li>Buka <strong>"Admin"</strong> → <strong>"Custom Definitions"</strong></li>
        <li>Create custom dimension: <strong>"Campaign ID"</strong></li>
        <li>Event parameter: <code>campaign_id</code> atau sesuai dengan yang dikirim</li>
        <li>Send utm_id sebagai custom parameter</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Consistent Format:</strong> Gunakan format yang konsisten untuk semua utm_id</li>
        <li><strong>Meaningful IDs:</strong> Gunakan ID yang meaningful, bukan random numbers</li>
        <li><strong>Documentation:</strong> Dokumentasikan mapping utm_id ke campaigns</li>
        <li><strong>Use When Needed:</strong> Hanya gunakan utm_id jika benar-benar diperlukan</li>
        <li><strong>Combine dengan Other Parameters:</strong> utm_id complement, bukan replace, other UTM parameters</li>
      </ul>

      <h2>Common Use Cases</h2>
      <h3>1. Campaign Management Integration</h3>
      <p>Link analytics data dengan campaign management platform menggunakan utm_id.</p>

      <h3>2. Automated Reporting</h3>
      <p>Gunakan utm_id untuk automated reporting dan data aggregation.</p>

      <h3>3. Cross-Platform Tracking</h3>
      <p>Track same campaign across multiple platforms dengan utm_id yang sama.</p>

      <h2>Limitations</h2>
      <ul>
        <li>utm_id tidak selalu tersedia di semua analytics tools</li>
        <li>Mungkin perlu custom setup untuk melihat di reports</li>
        <li>Tidak se-populer utm_source, utm_medium, utm_campaign</li>
        <li>May require technical knowledge untuk implementation</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li>Gunakan utm_id untuk advanced tracking scenarios</li>
        <li>Combine dengan other UTM parameters untuk comprehensive tracking</li>
        <li>Document semua utm_id mappings</li>
        <li>Test implementation sebelum production</li>
        <li>Consider apakah utm_content sudah cukup untuk kebutuhan Anda</li>
      </ul>
    </DocLayout>
  )
}
