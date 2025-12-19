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
      <p>Konten akan ditambahkan di sini.</p>
    </DocLayout>
  )
}
