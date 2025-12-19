import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Best Practices"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      prevHref="/whitelist/google-integration/troubleshooting"
      prevTitle="Troubleshooting GA4"
      
      
    >
      <h2>Best Practices untuk GA4 Integration</h2>
      <p>
        Mengikuti best practices memastikan bahwa GA4 setup Anda optimal, data akurat, dan dapat memberikan insights yang actionable untuk bisnis.
      </p>

      <h2>1. Planning & Strategy</h2>
      <h3>Define Goals & KPIs</h3>
      <ul>
        <li>Tentukan business goals yang ingin diukur</li>
        <li>Identifikasi key performance indicators (KPIs)</li>
        <li>Map goals ke GA4 events dan conversions</li>
        <li>Dokumentasikan measurement plan</li>
      </ul>

      <h3>Event Naming Convention</h3>
      <ul>
        <li>Gunakan naming yang konsisten dan deskriptif</li>
        <li>Format: <code>verb_noun</code> (contoh: <code>view_item</code>, <code>add_to_cart</code>)</li>
        <li>Hindari special characters dan spaces</li>
        <li>Dokumentasikan semua custom events</li>
      </ul>

      <h2>2. Implementation Best Practices</h2>
      <h3>Use Google Tag Manager</h3>
      <ul>
        <li>GTM memudahkan management tags tanpa code changes</li>
        <li>Lebih mudah untuk debugging dan testing</li>
        <li>Dapat manage multiple tags dari satu tempat</li>
        <li>Version control untuk changes</li>
      </ul>

      <h3>Implement Data Layer</h3>
      <ul>
        <li>Gunakan data layer untuk structured data</li>
        <li>Memudahkan data sharing antara tools</li>
        <li>Lebih maintainable dan scalable</li>
        <li>Example:
          <pre><code>{`dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'transaction_id': 'T12345',
    'value': 100.00,
    'currency': 'USD',
    'items': [...]
  }
});`}</code></pre>
        </li>
      </ul>

      <h3>Avoid Duplicate Tracking</h3>
      <ul>
        <li>Pastikan GA4 tag hanya diinstall sekali</li>
        <li>Jangan combine hardcoded tag dengan GTM tag</li>
        <li>Verify tidak ada duplicate events</li>
        <li>Use tag assistant untuk detect duplicates</li>
      </ul>

      <h2>3. Data Quality</h2>
      <h3>Filter Internal Traffic</h3>
      <ol>
        <li>Buka <strong>"Admin"</strong> → <strong>"Data Streams"</strong></li>
        <li>Klik stream → <strong>"More tagging settings"</strong></li>
        <li><strong>"List unwanted referrals"</strong> atau <strong>"Define internal traffic"</strong></li>
        <li>Add IP addresses atau domains untuk di-exclude</li>
      </ol>

      <h3>Set Up Data Retention</h3>
      <ul>
        <li>Configure data retention sesuai kebutuhan</li>
        <li>Default: 14 months, bisa diubah ke 50 months</li>
        <li>Pertimbangkan export data penting untuk long-term storage</li>
      </ul>

      <h3>Validate Data Regularly</h3>
      <ul>
        <li>Compare dengan other data sources (server logs, dll)</li>
        <li>Monitor untuk anomalies atau sudden changes</li>
        <li>Setup alerts untuk data quality issues</li>
      </ul>

      <h2>4. Conversion Tracking</h2>
      <h3>Mark Important Events as Conversions</h3>
      <ul>
        <li>Prioritize events yang align dengan business goals</li>
        <li>Jangan mark semua events sebagai conversions</li>
        <li>Focus pada events yang menunjukkan user value</li>
        <li>Review conversions secara berkala</li>
      </ul>

      <h3>Use Enhanced E-commerce</h3>
      <ul>
        <li>Implement full e-commerce tracking</li>
        <li>Track product views, add to cart, checkout steps</li>
        <li>Include product details (ID, name, category, price)</li>
        <li>Enable enhanced measurement untuk automatic tracking</li>
      </ul>

      <h2>5. Custom Dimensions & Metrics</h2>
      <h3>Plan Before Creating</h3>
      <ul>
        <li>Ada limit untuk custom dimensions (50 event-scoped, 25 user-scoped)</li>
        <li>Plan dimensions yang benar-benar diperlukan</li>
        <li>Dokumentasikan purpose dan usage</li>
      </ul>

      <h3>Use Standard Parameters</h3>
      <ul>
        <li>Gunakan GA4 standard parameters ketika memungkinkan</li>
        <li>Lebih konsisten dan compatible dengan reports</li>
        <li>Contoh: <code>value</code>, <code>currency</code>, <code>items</code></li>
      </ul>

      <h2>6. Privacy & Compliance</h2>
      <h3>GDPR Compliance</h3>
      <ul>
        <li>Implement cookie consent jika diperlukan</li>
        <li>Respect user privacy preferences</li>
        <li>Use GA4 consent mode untuk conditional tracking</li>
        <li>Document data processing activities</li>
      </ul>

      <h3>IP Anonymization</h3>
      <ul>
        <li>GA4 secara default anonymize IP addresses</li>
        <li>Verify setting ini aktif</li>
        <li>Important untuk privacy compliance</li>
      </ul>

      <h2>7. Reporting & Analysis</h2>
      <h3>Create Custom Reports</h3>
      <ul>
        <li>Customize standard reports untuk kebutuhan spesifik</li>
        <li>Save custom reports untuk easy access</li>
        <li>Share reports dengan stakeholders</li>
      </ul>

      <h3>Use Exploration Reports</h3>
      <ul>
        <li>Leverage Exploration untuk advanced analysis</li>
        <li>Create custom analysis sesuai kebutuhan</li>
        <li>Export data untuk further analysis</li>
      </ul>

      <h3>Set Up Alerts</h3>
      <ul>
        <li>Create custom alerts untuk anomalies</li>
        <li>Monitor untuk sudden drops atau spikes</li>
        <li>Get notified via email untuk important changes</li>
      </ul>

      <h2>8. Maintenance</h2>
      <h3>Regular Audits</h3>
      <ul>
        <li>Lakukan audit tracking setup setiap 3-6 bulan</li>
        <li>Review custom events dan dimensions</li>
        <li>Remove unused or redundant tracking</li>
        <li>Update documentation</li>
      </ul>

      <h3>Monitor Data Quality</h3>
      <ul>
        <li>Check Realtime reports secara rutin</li>
        <li>Monitor untuk errors atau missing data</li>
        <li>Verify conversions tracking correctly</li>
      </ul>

      <h3>Stay Updated</h3>
      <ul>
        <li>Follow GA4 updates dan new features</li>
        <li>Review Google Analytics blog untuk best practices</li>
        <li>Attend webinars atau training sessions</li>
      </ul>

      <h2>9. Performance Optimization</h2>
      <h3>Minimize Tag Load</h3>
      <ul>
        <li>Only load tags yang diperlukan</li>
        <li>Use tag loading strategies (async, defer)</li>
        <li>Consider tag manager performance impact</li>
      </ul>

      <h3>Optimize Event Frequency</h3>
      <ul>
        <li>Avoid sending too many events</li>
        <li>Throttle high-frequency events jika perlu</li>
        <li>Monitor untuk performance issues</li>
      </ul>

      <h2>10. Documentation</h2>
      <ul>
        <li><strong>Document Setup:</strong> Tuliskan semua tracking setup</li>
        <li><strong>Event Catalog:</strong> Maintain list semua events dan parameters</li>
        <li><strong>Custom Dimensions:</strong> Document purpose dan usage</li>
        <li><strong>Change Log:</strong> Track semua changes dan updates</li>
        <li><strong>Access Management:</strong> Document user access dan permissions</li>
      </ul>

      <h2>Summary</h2>
      <p>
        Mengikuti best practices ini akan memastikan bahwa GA4 integration Anda optimal, maintainable, dan memberikan value untuk bisnis. Ingat bahwa setup GA4 adalah ongoing process yang memerlukan regular monitoring dan optimization.
      </p>
    </DocLayout>
  )
}
