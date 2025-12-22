import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Pengenalan UTM"
      categoryHref="/whitelist/utm-configuration"
      categoryName="UTM Configuration"
      
      
      nextHref="/whitelist/utm-configuration/setup-meta-ads"
      nextTitle="Setup UTM untuk Meta Ads"
    >
      <h2>Apa itu UTM Parameters?</h2>
      <p>
        UTM (Urchin Tracking Module) parameters adalah parameter URL yang digunakan untuk melacak sumber traffic dan efektivitas marketing campaigns. Dengan menambahkan UTM parameters ke URL, Anda dapat melihat di analytics tools (seperti Google Analytics) dari mana pengunjung datang dan campaign mana yang paling efektif.
      </p>

      <h2>Mengapa UTM Penting?</h2>
      <ul>
        <li><strong>Campaign Tracking:</strong> Melacak performa setiap marketing campaign</li>
        <li><strong>Source Attribution:</strong> Mengetahui sumber traffic yang paling efektif</li>
        <li><strong>ROI Measurement:</strong> Mengukur return on investment untuk setiap channel</li>
        <li><strong>Optimization:</strong> Mengoptimalkan budget berdasarkan data yang akurat</li>
        <li><strong>Reporting:</strong> Membuat reports yang lebih detail dan actionable</li>
      </ul>

      <h2>UTM Parameters Standar</h2>
      <p>Ada 5 UTM parameters standar:</p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Required</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>utm_source</code></td>
            <td>✅ Yes</td>
            <td>Identifikasi sumber traffic</td>
            <td>facebook, google, newsletter</td>
          </tr>
          <tr>
            <td><code>utm_medium</code></td>
            <td>✅ Yes</td>
            <td>Media atau channel marketing</td>
            <td>cpc, email, social, banner</td>
          </tr>
          <tr>
            <td><code>utm_campaign</code></td>
            <td>✅ Yes</td>
            <td>Nama campaign spesifik</td>
            <td>summer_sale, product_launch</td>
          </tr>
          <tr>
            <td><code>utm_term</code></td>
            <td>❌ No</td>
            <td>Keyword (untuk paid search)</td>
            <td>running_shoes, laptop</td>
          </tr>
          <tr>
            <td><code>utm_content</code></td>
            <td>❌ No</td>
            <td>Variasi konten untuk A/B testing</td>
            <td>logo_link, text_link, banner_ad</td>
          </tr>
        </tbody>
      </table>

      <h2>Format UTM URL</h2>
      <p>Contoh URL dengan UTM parameters:</p>
      <pre><code>{`https://example.com/product?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale&utm_content=video_ad&utm_term=shoes`}</code></pre>

      <h2>Best Practices</h2>
      <h3>1. Naming Convention</h3>
      <ul>
        <li>Gunakan lowercase</li>
        <li>Gunakan underscores untuk spaces (bukan dashes)</li>
        <li>Konsisten dengan naming</li>
        <li>Hindari special characters</li>
        <li>Contoh: <code>utm_campaign=summer_sale_2024</code> ✅</li>
        <li>Contoh: <code>utm_campaign=Summer Sale 2024!</code> ❌</li>
      </ul>

      <h3>2. Consistency</h3>
      <ul>
        <li>Gunakan values yang konsisten untuk setiap parameter</li>
        <li>Dokumentasikan naming convention</li>
        <li>Gunakan template atau builder untuk consistency</li>
      </ul>

      <h3>3. Documentation</h3>
      <ul>
        <li>Maintain spreadsheet atau document dengan semua UTM combinations</li>
        <li>Include campaign details, dates, dan expected results</li>
        <li>Update secara berkala</li>
      </ul>

      <h2>Tools untuk Membuat UTM URLs</h2>
      <ul>
        <li><strong>Google Campaign URL Builder:</strong> <a href="https://ga-dev-tools.google/campaign-url-builder/" target="_blank" rel="noopener noreferrer">ga-dev-tools.google/campaign-url-builder/</a></li>
        <li><strong>UTM.io:</strong> <a href="https://utm.io" target="_blank" rel="noopener noreferrer">utm.io</a></li>
        <li><strong>Terminus UTM Builder:</strong> Chrome extension</li>
      </ul>

      <h2>Melihat UTM Data di Analytics</h2>
      <h3>Google Analytics 4</h3>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Acquisition"</strong></li>
        <li>Lihat <strong>"Session source/medium"</strong> report</li>
        <li>Atau buat custom report dengan UTM dimensions</li>
      </ol>

      <h3>Meta Pixel</h3>
      <p>UTM parameters juga dapat digunakan untuk tracking di Meta Pixel dan akan muncul di Meta Events Manager.</p>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Typos:</strong> Salah ketik akan membuat data terpisah (facebook vs facebook_ads)</li>
        <li><strong>Case Sensitivity:</strong> Facebook vs facebook dianggap berbeda</li>
        <li><strong>Missing Parameters:</strong> Tidak mengisi required parameters</li>
        <li><strong>Inconsistent Naming:</strong> Menggunakan format berbeda untuk campaign serupa</li>
      </ul>

      <h2>Next Steps</h2>
      <p>
        Setelah memahami dasar-dasar UTM, langkah selanjutnya adalah setup UTM untuk Meta Ads campaigns. Ini akan memastikan semua traffic dari Meta Ads dapat di-track dengan akurat.
      </p>
    </DocLayout>
  )
}
