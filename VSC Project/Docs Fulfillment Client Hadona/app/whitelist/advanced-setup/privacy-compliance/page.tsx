import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Privacy & Compliance"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      prevHref="/whitelist/advanced-setup/data-layer"
      prevTitle="Data Layer"
      nextHref="/whitelist/advanced-setup/performance"
      nextTitle="Performance Optimization"
    >
      <h2>Privacy & Compliance Overview</h2>
      <p>
        Privacy compliance sangat penting untuk memastikan tracking setup sesuai dengan regulations seperti GDPR, CCPA, dan lainnya.
      </p>

      <h2>Key Regulations</h2>
      <h3>1. GDPR (General Data Protection Regulation)</h3>
      <ul>
        <li>Requires user consent untuk tracking</li>
        <li>Right to access data</li>
        <li>Right to delete data</li>
        <li>Data processing transparency</li>
      </ul>

      <h3>2. CCPA (California Consumer Privacy Act)</h3>
      <ul>
        <li>Disclosure requirements</li>
        <li>Opt-out rights</li>
        <li>Data sale restrictions</li>
      </ul>

      <h2>Implementation</h2>
      <h3>1. Cookie Consent</h3>
      <ul>
        <li>Implement cookie consent banner</li>
        <li>Only track setelah consent</li>
        <li>Allow users to opt-out</li>
      </ul>

      <h3>2. Data Minimization</h3>
      <ul>
        <li>Only collect data yang diperlukan</li>
        <li>Anonymize data ketika memungkinkan</li>
        <li>Limit data retention</li>
      </ul>

      <h3>3. User Rights</h3>
      <ul>
        <li>Provide data access</li>
        <li>Allow data deletion</li>
        <li>Respect opt-out requests</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Implement proper consent management</li>
        <li>Use server-side tracking untuk better privacy</li>
        <li>Anonymize IP addresses</li>
        <li>Document data processing activities</li>
        <li>Regular compliance audits</li>
      </ul>
    </DocLayout>
  )
}

      <h2>Key Regulations</h2>
      <h3>1. GDPR (General Data Protection Regulation)</h3>
      <ul>
        <li>Requires user consent untuk tracking</li>
        <li>Right to access data</li>
        <li>Right to delete data</li>
        <li>Data processing transparency</li>
      </ul>

      <h3>2. CCPA (California Consumer Privacy Act)</h3>
      <ul>
        <li>Disclosure requirements</li>
        <li>Opt-out rights</li>
        <li>Data sale restrictions</li>
      </ul>

      <h2>Implementation</h2>
      <h3>1. Cookie Consent</h3>
      <ul>
        <li>Implement cookie consent banner</li>
        <li>Only track setelah consent</li>
        <li>Allow users to opt-out</li>
      </ul>

      <h3>2. Data Minimization</h3>
      <ul>
        <li>Only collect data yang diperlukan</li>
        <li>Anonymize data ketika memungkinkan</li>
        <li>Limit data retention</li>
      </ul>

      <h3>3. User Rights</h3>
      <ul>
        <li>Provide data access</li>
        <li>Allow data deletion</li>
        <li>Respect opt-out requests</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Implement proper consent management</li>
        <li>Use server-side tracking untuk better privacy</li>
        <li>Anonymize IP addresses</li>
        <li>Document data processing activities</li>
        <li>Regular compliance audits</li>
      </ul>
    </DocLayout>
  )
}