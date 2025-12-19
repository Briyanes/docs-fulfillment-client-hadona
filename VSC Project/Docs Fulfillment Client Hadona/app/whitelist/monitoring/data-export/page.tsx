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
      <p>Konten akan ditambahkan di sini.</p>
    </DocLayout>
  )
}
