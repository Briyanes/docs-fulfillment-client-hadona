import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Data Export"
      categoryHref="/whitelist/monitoring"
      categoryName="Monitoring"
      prevHref="/whitelist/monitoring/alerts"
      prevTitle="Alerts & Notifications"
      nextHref="/whitelist/monitoring/troubleshooting"
      nextTitle="Troubleshooting Monitoring"
    >
      <h2>Export Data dari GA4</h2>
      <p>
        Export data memungkinkan Anda untuk menganalisis data di external tools, membuat custom reports, atau archive data untuk long-term storage.
      </p>

      <h2>Export Methods</h2>
      <h3>1. Export dari Reports</h3>
      <ol>
        <li>Buka report yang ingin di-export</li>
        <li>Klik <strong>"Share"</strong> atau <strong>"Export"</strong></li>
        <li>Pilih format:
          <ul>
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>CSV</li>
          </ul>
        </li>
        <li>Download atau share</li>
      </ol>

      <h3>2. GA4 Reporting API</h3>
      <p>Untuk automated exports:</p>
      <ul>
        <li>Use GA4 Reporting API</li>
        <li>Setup scheduled exports</li>
        <li>Export ke BigQuery (requires GA4 360 atau BigQuery linking)</li>
      </ul>

      <h3>3. BigQuery Export</h3>
      <p>Untuk continuous data export:</p>
      <ol>
        <li>Link GA4 dengan BigQuery</li>
        <li>Data akan otomatis export ke BigQuery</li>
        <li>Query data menggunakan SQL</li>
        <li>Export dari BigQuery ke berbagai formats</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li>Export data secara berkala untuk backup</li>
        <li>Use BigQuery untuk large datasets</li>
        <li>Document export schedules</li>
        <li>Store exports securely</li>
      </ul>
    </DocLayout>
  )
}
