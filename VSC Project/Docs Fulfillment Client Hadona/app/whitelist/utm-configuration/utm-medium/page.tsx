import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Parameter utm_medium"
      categoryHref="/whitelist/utm-configuration"
      categoryName="UTM Configuration"
      prevHref="/whitelist/utm-configuration/utm-source"
      prevTitle="Parameter utm_source"
      nextHref="/whitelist/utm-configuration/utm-campaign"
      nextTitle="Parameter utm_campaign"
    >
      <h2>Apa itu utm_medium?</h2>
      <p>
        <code>utm_medium</code> adalah parameter UTM yang mengidentifikasi media atau channel marketing yang digunakan untuk mengirimkan traffic. Ini membantu membedakan antara berbagai jenis marketing channels, seperti paid ads, email, social media, dll.
      </p>

      <h2>Fungsi utm_medium</h2>
      <ul>
        <li><strong>Channel Classification:</strong> Mengklasifikasikan jenis marketing channel</li>
        <li><strong>Compare Channels:</strong> Membandingkan performa antar channel types</li>
        <li><strong>Budget Optimization:</strong> Mengoptimalkan budget berdasarkan channel performance</li>
        <li><strong>Reporting:</strong> Membuat reports berdasarkan channel type</li>
      </ul>

      <h2>Nilai Standar untuk utm_medium</h2>
      <h3>Paid Advertising</h3>
      <ul>
        <li><code>cpc</code> - Cost per click (Google Ads, Meta Ads, dll)</li>
        <li><code>cpm</code> - Cost per mille (Display ads)</li>
        <li><code>cpv</code> - Cost per view (Video ads)</li>
        <li><code>ppc</code> - Pay per click (Alternative untuk cpc)</li>
      </ul>

      <h3>Social Media</h3>
      <ul>
        <li><code>social</code> - Organic social media posts</li>
        <li><code>social_paid</code> - Paid social media ads</li>
        <li><code>facebook</code> - Facebook (jika ingin lebih spesifik)</li>
        <li><code>instagram</code> - Instagram (jika ingin lebih spesifik)</li>
      </ul>

      <h3>Email</h3>
      <ul>
        <li><code>email</code> - Email marketing campaigns</li>
        <li><code>newsletter</code> - Newsletter emails</li>
      </ul>

      <h3>Content & Other</h3>
      <ul>
        <li><code>organic</code> - Organic search results</li>
        <li><code>referral</code> - Referral dari website lain</li>
        <li><code>affiliate</code> - Affiliate marketing</li>
        <li><code>display</code> - Display/banner advertising</li>
        <li><code>video</code> - Video marketing</li>
        <li><code>podcast</code> - Podcast advertising</li>
      </ul>

      <h2>Best Practices</h2>
      <h3>1. Use Standard Values</h3>
      <ul>
        <li>Gunakan nilai standar yang umum digunakan</li>
        <li>Ini memudahkan comparison dengan industry benchmarks</li>
        <li>Lebih mudah untuk reporting dan analysis</li>
      </ul>

      <h3>2. Consistency</h3>
      <ul>
        <li>Gunakan nilai yang sama untuk channel type yang sama</li>
        <li>Jangan mix <code>cpc</code> dan <code>ppc</code> untuk paid search</li>
        <li>Standardize untuk seluruh organization</li>
      </ul>

      <h3>3. Combine dengan utm_source</h3>
      <p>utm_medium bekerja bersama utm_source untuk memberikan konteks lengkap:</p>
      <ul>
        <li><code>utm_source=facebook&utm_medium=cpc</code> - Paid Facebook ads</li>
        <li><code>utm_source=facebook&utm_medium=social</code> - Organic Facebook posts</li>
        <li><code>utm_source=google&utm_medium=cpc</code> - Google Ads</li>
        <li><code>utm_source=google&utm_medium=organic</code> - Organic Google search</li>
      </ul>

      <h2>Contoh Penggunaan</h2>
      <h3>Meta Ads (Paid)</h3>
      <pre><code>{`https://example.com?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale`}</code></pre>

      <h3>Organic Social Media</h3>
      <pre><code>{`https://example.com?utm_source=instagram&utm_medium=social&utm_campaign=product_launch`}</code></pre>

      <h3>Email Marketing</h3>
      <pre><code>{`https://example.com?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_update`}</code></pre>

      <h3>Google Ads</h3>
      <pre><code>{`https://example.com?utm_source=google&utm_medium=cpc&utm_campaign=brand_keywords`}</code></pre>

      <h2>Melihat utm_medium di Analytics</h2>
      <h3>Google Analytics 4</h3>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Acquisition"</strong></li>
        <li>Lihat <strong>"Session source/medium"</strong> report</li>
        <li>Format: <code>source / medium</code> (contoh: <code>facebook / cpc</code>)</li>
        <li>Anda dapat filter berdasarkan medium</li>
      </ol>

      <h3>Custom Analysis</h3>
      <p>Buat exploration untuk analisis medium performance:</p>
      <ol>
        <li>Buka <strong>"Explore"</strong> → Create new exploration</li>
        <li>Add dimension: <strong>"Session medium"</strong></li>
        <li>Add metrics: Sessions, Users, Revenue, Conversions</li>
        <li>Compare performance per medium</li>
      </ol>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Inconsistent Values:</strong> Menggunakan <code>cpc</code>, <code>ppc</code>, dan <code>paid</code> secara bergantian</li>
        <li><strong>Wrong Medium:</strong> Menggunakan <code>social</code> untuk paid social ads (seharusnya <code>cpc</code>)</li>
        <li><strong>Too Specific:</strong> Membuat medium terlalu spesifik sehingga sulit untuk aggregate data</li>
        <li><strong>Missing Medium:</strong> Tidak mengisi utm_medium untuk campaigns</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li>Gunakan <code>cpc</code> untuk semua paid advertising (Meta Ads, Google Ads, dll)</li>
        <li>Gunakan <code>social</code> hanya untuk organic social media</li>
        <li>Standardize medium values untuk seluruh team</li>
        <li>Document semua medium values yang digunakan</li>
        <li>Review data secara berkala untuk detect inconsistencies</li>
      </ul>
    </DocLayout>
  )
}
