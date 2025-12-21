import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Parameter utm_campaign"
      categoryHref="/whitelist/utm-configuration"
      categoryName="UTM Configuration"
      prevHref="/whitelist/utm-configuration/utm-medium"
      prevTitle="Parameter utm_medium"
      nextHref="/whitelist/utm-configuration/utm-id"
      nextTitle="Parameter utm_id"
    >
      <h2>Apa itu utm_campaign?</h2>
      <p>
        <code>utm_campaign</code> adalah parameter UTM yang mengidentifikasi campaign marketing spesifik. Ini adalah salah satu dari tiga required UTM parameters dan membantu melacak performa setiap campaign secara individual.
      </p>

      <h2>Fungsi utm_campaign</h2>
      <ul>
        <li><strong>Campaign Tracking:</strong> Melacak performa setiap campaign secara spesifik</li>
        <li><strong>ROI Measurement:</strong> Mengukur return on investment per campaign</li>
        <li><strong>Performance Comparison:</strong> Membandingkan performa antar campaigns</li>
        <li><strong>Budget Optimization:</strong> Mengoptimalkan budget berdasarkan campaign performance</li>
        <li><strong>Reporting:</strong> Membuat reports per campaign</li>
      </ul>

      <h2>Naming Convention untuk utm_campaign</h2>
      <h3>Best Practice Structure</h3>
      <p>Gunakan struktur yang konsisten dan deskriptif:</p>
      <pre><code>{`[objective]_[product/service]_[date/season]
[promotion_type]_[target_audience]_[date]
[campaign_type]_[theme]_[year]`}</code></pre>

      <h3>Contoh Naming</h3>
      <ul>
        <li><code>conversion_shoes_q1_2024</code> - Conversion campaign untuk shoes di Q1 2024</li>
        <li><code>awareness_brand_summer_2024</code> - Brand awareness campaign summer 2024</li>
        <li><code>sale_black_friday_2024</code> - Black Friday sale campaign</li>
        <li><code>launch_new_product_march_2024</code> - Product launch campaign</li>
        <li><code>retargeting_cart_abandoners</code> - Retargeting campaign</li>
      </ul>

      <h2>Best Practices</h2>
      <h3>1. Be Descriptive</h3>
      <ul>
        <li>Gunakan nama yang jelas dan deskriptif</li>
        <li>Include informasi penting (objective, product, date)</li>
        <li>Hindari nama generic seperti <code>campaign1</code> atau <code>test</code></li>
      </ul>

      <h3>2. Consistency</h3>
      <ul>
        <li>Gunakan format yang konsisten untuk semua campaigns</li>
        <li>Standardize naming convention untuk seluruh team</li>
        <li>Dokumentasikan naming convention</li>
      </ul>

      <h3.3. Use Separators</h3>
      <ul>
        <li>Gunakan underscores (_) untuk memisahkan kata</li>
        <li>Hindari spaces atau special characters</li>
        <li>Contoh: <code>summer_sale_2024</code> ✅</li>
        <li>Contoh: <code>Summer Sale 2024!</code> ❌</li>
      </ul>

      <h3>4. Include Date/Timeframe</h3>
      <ul>
        <li>Include date atau timeframe untuk easy identification</li>
        <li>Format: <code>q1_2024</code>, <code>march_2024</code>, <code>summer_2024</code></li>
        <li>Membantu untuk historical analysis</li>
      </ul>

      <h2>Contoh Penggunaan</h2>
      <h3>E-commerce Campaign</h3>
      <pre><code>{`https://example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=conversion_shoes_summer_2024`}</code></pre>

      <h3>Brand Awareness Campaign</h3>
      <pre><code>{`https://example.com?utm_source=instagram&utm_medium=cpc&utm_campaign=awareness_brand_q2_2024`}</code></pre>

      <h3>Promotional Campaign</h3>
      <pre><code>{`https://example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=sale_black_friday_2024`}</code></pre>

      <h3>Product Launch</h3>
      <pre><code>{`https://example.com?utm_source=google&utm_medium=cpc&utm_campaign=launch_new_product_march_2024`}</code></pre>

      <h2>Melihat utm_campaign di Analytics</h2>
      <h3>Google Analytics 4</h3>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Acquisition"</strong></li>
        <li>Lihat <strong>"Campaign"</strong> report</li>
        <li>Atau buat custom report dengan dimension "Campaign"</li>
        <li>Filter dan group berdasarkan campaign name</li>
      </ol>

      <h3>Campaign Performance Analysis</h3>
      <ol>
        <li>Buka <strong>"Explore"</strong> → Create new exploration</li>
        <li>Add dimension: <strong>"Campaign name"</strong></li>
        <li>Add metrics: Sessions, Users, Conversions, Revenue</li>
        <li>Compare performance antar campaigns</li>
        <li>Sort berdasarkan metrics yang penting</li>
      </ol>

      <h2>Campaign Hierarchy</h2>
      <p>Untuk organisasi besar, pertimbangkan campaign hierarchy:</p>
      <ul>
        <li><strong>Top Level:</strong> Business objective (conversion, awareness, retention)</li>
        <li><strong>Mid Level:</strong> Product/service category</li>
        <li><strong>Bottom Level:</strong> Specific campaign atau promotion</li>
      </ul>
      <p>Contoh: <code>conversion_shoes_summer_sale_2024</code></p>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Generic Names:</strong> Menggunakan <code>campaign1</code>, <code>test</code>, <code>new_campaign</code></li>
        <li><strong>Inconsistent Format:</strong> Mix format seperti <code>summer_sale</code> dan <code>Summer-Sale</code></li>
        <li><strong>Missing Context:</strong> Tidak include objective, product, atau date</li>
        <li><strong>Too Long:</strong> Nama terlalu panjang sehingga sulit dibaca</li>
        <li><strong>Special Characters:</strong> Menggunakan spaces, dashes, atau special chars</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li>Buat template campaign naming untuk consistency</li>
        <li>Document semua campaign names di spreadsheet</li>
        <li>Review campaign names sebelum launch</li>
        <li>Use campaign name yang match dengan nama di Meta Ads Manager</li>
        <li>Include date untuk easy identification dan historical tracking</li>
        <li>Keep it concise tapi descriptive</li>
      </ul>

      <h2>Campaign Naming Template</h2>
      <p>Template yang bisa digunakan:</p>
      <pre><code>{`[Objective]_[Product/Service]_[Audience]_[Date]
Examples:
- conversion_shoes_women_q1_2024
- awareness_brand_general_summer_2024
- retargeting_cart_abandoners_all_2024`}</code></pre>
    </DocLayout>
  )
}
