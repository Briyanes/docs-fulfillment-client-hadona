import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Data Layer"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      description="Tutorial implementasi data layer untuk tracking yang terstruktur"
      prevHref="/whitelist/advanced-setup/advanced-events"
      prevTitle="Advanced Event Tracking"
      nextHref="/whitelist/advanced-setup/privacy-compliance"
      nextTitle="Privacy & Compliance"
    >
      <h2>Data Layer Overview</h2>
      <p>
        Data layer adalah JavaScript object yang menyimpan structured data tentang user interactions dan page information, memudahkan data sharing antara website dan tracking tools.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Centralized data storage</li>
        <li>Easy data sharing</li>
        <li>Better maintainability</li>
        <li>Standardized data format</li>
      </ul>

      <h2>Implementation</h2>
      <pre><code>{`// Initialize data layer
window.dataLayer = window.dataLayer || [];

// Push events to data layer
dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'transaction_id': 'T12345',
    'value': 100.00,
    'currency': 'USD',
    'items': [...]
  }
});`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Initialize data layer early</li>
        <li>Use consistent structure</li>
        <li>Document data layer schema</li>
        <li>Validate data sebelum push</li>
      </ul>
    </ArticleLayout>
  )
}
