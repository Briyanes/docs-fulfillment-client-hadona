import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Alerts & Notifications"
      categoryHref="/whitelist/monitoring"
      categoryName="Monitoring"
      prevHref="/whitelist/monitoring/custom-reports"
      prevTitle="Custom Reports"
      nextHref="/whitelist/monitoring/data-export"
      nextTitle="Data Export"
    >
      <h2>Setting Up Alerts di GA4</h2>
      <p>
        Alerts membantu Anda untuk mendapatkan notifikasi ketika terjadi anomalies atau changes penting dalam data, memungkinkan quick response untuk issues.
      </p>

      <h2>Create Custom Alerts</h2>
      <ol>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"Custom Alerts"</strong></li>
        <li>Klik <strong>"Create Alert"</strong></li>
        <li>Configure:
          <ul>
            <li>Alert name</li>
            <li>Metric (Users, Events, Conversions, dll)</li>
            <li>Condition (increase, decrease, threshold)</li>
            <li>Threshold value</li>
            <li>Time period</li>
          </ul>
        </li>
        <li>Add email recipients</li>
        <li>Save alert</li>
      </ol>

      <h2>Alert Types</h2>
      <ul>
        <li><strong>Threshold Alerts:</strong> Alert ketika metric melewati threshold</li>
        <li><strong>Anomaly Detection:</strong> Alert untuk anomalies (requires GA4 360)</li>
        <li><strong>Change Alerts:</strong> Alert untuk significant changes</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Set realistic thresholds</li>
        <li>Don't create too many alerts (alert fatigue)</li>
        <li>Review alerts regularly</li>
        <li>Update alerts berdasarkan learnings</li>
      </ul>
    </DocLayout>
  )
}
