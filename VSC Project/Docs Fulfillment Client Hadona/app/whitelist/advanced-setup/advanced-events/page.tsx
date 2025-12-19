import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Advanced Event Tracking"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      prevHref="/whitelist/advanced-setup/webhooks"
      prevTitle="Webhooks Setup"
      nextHref="/whitelist/advanced-setup/data-layer"
      nextTitle="Data Layer"
    >
      <h2>Advanced Event Tracking</h2>
      <p>
        Advanced event tracking melibatkan techniques dan strategies untuk track events yang lebih complex dan sophisticated, memberikan insights yang lebih mendalam.
      </p>

      <h2>Techniques</h2>
      <h3>1. Event Sequencing</h3>
      <p>Track sequence of events untuk understand user journey:</p>
      <ul>
        <li>Track event order</li>
        <li>Measure time between events</li>
        <li>Identify conversion paths</li>
      </ul>

      <h3>2. Event Grouping</h3>
      <p>Group related events untuk better analysis:</p>
      <ul>
        <li>Use event parameters untuk grouping</li>
        <li>Create event hierarchies</li>
        <li>Track event relationships</li>
      </ul>

      <h3>3. Conditional Tracking</h3>
      <p>Track events berdasarkan conditions:</p>
      <ul>
        <li>User segments</li>
        <li>Page conditions</li>
        <li>Behavioral triggers</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Plan event structure carefully</li>
        <li>Use consistent naming</li>
        <li>Document all events</li>
        <li>Test thoroughly</li>
      </ul>
    </DocLayout>
  )
}
