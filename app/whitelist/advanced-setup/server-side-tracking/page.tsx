import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Server-Side Tracking"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      description="Panduan implementasi server-side tracking untuk better data quality"
      prevHref="/whitelist/advanced-setup/custom-events"
      prevTitle="Custom Events"
      nextHref="/whitelist/advanced-setup/webhooks"
      nextTitle="Webhooks Setup"
    >
      <h2>Server-Side Tracking Overview</h2>
      <p>
        Server-side tracking mengirim events dari server instead of browser, memberikan better reliability, privacy compliance, dan data quality.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Ad blocker resistant</li>
        <li>Better privacy compliance</li>
        <li>More reliable data</li>
        <li>Complete user data access</li>
        <li>Better for Conversions API</li>
      </ul>

      <h2>Architecture</h2>
      <pre><code>{`Browser → Server → Meta Conversions API
Browser → Server → GA4 Measurement Protocol`}</code></pre>

      <h2>Implementation</h2>
      <ol>
        <li>Setup server endpoint untuk receive events</li>
        <li>Transform events ke format yang sesuai</li>
        <li>Send ke Meta Conversions API dan GA4</li>
        <li>Implement error handling</li>
        <li>Setup monitoring</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Use bersama client-side tracking (hybrid approach)</li>
        <li>Implement proper deduplication</li>
        <li>Hash user data untuk privacy</li>
        <li>Monitor performance</li>
      </ul>
    </ArticleLayout>
  )
}
