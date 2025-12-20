import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Custom Events"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      prevHref="/whitelist/advanced-setup/conversions-api"
      prevTitle="Conversions API"
      nextHref="/whitelist/advanced-setup/server-side-tracking"
      nextTitle="Server-Side Tracking"
    >
      <h2>Custom Events Overview</h2>
      <p>
        Custom events memungkinkan Anda untuk track user interactions yang spesifik untuk bisnis Anda, beyond standard events yang disediakan oleh Meta Pixel dan GA4.
      </p>

      <h2>Kapan Menggunakan Custom Events?</h2>
      <ul>
        <li>Track interactions yang tidak ada di standard events</li>
        <li>Track business-specific actions</li>
        <li>Track micro-conversions</li>
        <li>Track user engagement metrics</li>
      </ul>

      <h2>Creating Custom Events</h2>
      <h3>Meta Pixel</h3>
      <pre><code>{`fbq('trackCustom', 'VideoPlay', {
  content_name: 'Product Demo',
  content_category: 'Video'
});`}</code></pre>

      <h3>GA4</h3>
      <pre><code>{`gtag('event', 'video_play', {
  video_title: 'Product Demo',
  video_category: 'Video'
});`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Use descriptive event names</li>
        <li>Follow naming conventions (lowercase, underscores)</li>
        <li>Include relevant parameters</li>
        <li>Document all custom events</li>
        <li>Test thoroughly sebelum production</li>
      </ul>
    </DocLayout>
  )
}

      <h2>Kapan Menggunakan Custom Events?</h2>
      <ul>
        <li>Track interactions yang tidak ada di standard events</li>
        <li>Track business-specific actions</li>
        <li>Track micro-conversions</li>
        <li>Track user engagement metrics</li>
      </ul>

      <h2>Creating Custom Events</h2>
      <h3>Meta Pixel</h3>
      <pre><code>{`fbq('trackCustom', 'VideoPlay', {
  content_name: 'Product Demo',
  content_category: 'Video'
});`}</code></pre>

      <h3>GA4</h3>
      <pre><code>{`gtag('event', 'video_play', {
  video_title: 'Product Demo',
  video_category: 'Video'
});`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Use descriptive event names</li>
        <li>Follow naming conventions (lowercase, underscores)</li>
        <li>Include relevant parameters</li>
        <li>Document all custom events</li>
        <li>Test thoroughly sebelum production</li>
      </ul>
    </DocLayout>
  )
}