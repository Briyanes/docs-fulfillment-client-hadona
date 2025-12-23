import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Performance Optimization"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      description="Tutorial optimasi performa tracking untuk website yang cepat"
      prevHref="/whitelist/advanced-setup/privacy-compliance"
      prevTitle="Privacy & Compliance"
    >
      <h2>Performance Optimization</h2>
      <p>
        Optimizing tracking performance memastikan bahwa tracking tidak memperlambat website dan memberikan user experience yang baik.
      </p>

      <h2>Optimization Strategies</h2>
      <h3>1. Async Loading</h3>
      <ul>
        <li>Load tracking scripts asynchronously</li>
        <li>Don't block page rendering</li>
        <li>Use async atau defer attributes</li>
      </ul>

      <h3>2. Lazy Loading</h3>
      <ul>
        <li>Load tracking scripts setelah page load</li>
        <li>Prioritize critical content</li>
        <li>Defer non-critical tracking</li>
      </ul>

      <h3>3. Event Batching</h3>
      <ul>
        <li>Batch multiple events</li>
        <li>Reduce number of requests</li>
        <li>Improve performance</li>
      </ul>

      <h3>4. Server-Side Tracking</h3>
      <ul>
        <li>Move tracking ke server</li>
        <li>Reduce client-side load</li>
        <li>Better performance</li>
      </ul>

      <h2>Monitoring Performance</h2>
      <ul>
        <li>Monitor page load times</li>
        <li>Check tracking script impact</li>
        <li>Use performance monitoring tools</li>
        <li>Optimize based on metrics</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Minimize tracking scripts</li>
        <li>Use efficient tracking methods</li>
        <li>Monitor performance impact</li>
        <li>Optimize continuously</li>
      </ul>
    </ArticleLayout>
  )
}
