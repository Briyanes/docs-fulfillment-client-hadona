import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Custom Reports"
      categoryHref="/whitelist/monitoring"
      categoryName="Monitoring"
      prevHref="/whitelist/monitoring/interpretasi-metrics"
      prevTitle="Interpretasi Metrics"
      nextHref="/whitelist/monitoring/alerts"
      nextTitle="Alerts & Notifications"
    >
      <h2>Membuat Custom Reports di GA4</h2>
      <p>
        Custom reports memungkinkan Anda untuk membuat reports yang sesuai dengan kebutuhan spesifik bisnis dan memfokuskan pada metrics yang paling penting.
      </p>

      <h2>Customize Standard Reports</h2>
      <ol>
        <li>Buka standard report (contoh: Acquisition)</li>
        <li>Klik <strong>"Customize report"</strong> (ikon pensil)</li>
        <li>Modify:
          <ul>
            <li>Dimensions</li>
            <li>Metrics</li>
            <li>Filters</li>
            <li>Visualizations</li>
          </ul>
        </li>
        <li>Save report</li>
      </ol>

      <h2>Create Exploration Reports</h2>
      <ol>
        <li>Buka <strong>"Explore"</strong></li>
        <li>Klik <strong>"Blank"</strong> atau pilih template</li>
        <li>Add dimensions dan metrics</li>
        <li>Configure visualization</li>
        <li>Apply filters</li>
        <li>Save exploration</li>
      </ol>

      <h2>Report Templates</h2>
      <ul>
        <li><strong>Free Form:</strong> Custom tables dan charts</li>
        <li><strong>Cohort Exploration:</strong> User cohort analysis</li>
        <li><strong>Funnel Exploration:</strong> Conversion funnel analysis</li>
        <li><strong>Path Exploration:</strong> User journey analysis</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Focus pada metrics yang actionable</li>
        <li>Keep reports simple dan easy to understand</li>
        <li>Regularly review dan update reports</li>
        <li>Share reports dengan stakeholders</li>
      </ul>
    </DocLayout>
  )
}
