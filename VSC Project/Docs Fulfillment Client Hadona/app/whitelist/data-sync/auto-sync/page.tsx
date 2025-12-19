import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Auto-Sync Setup"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      prevHref="/whitelist/data-sync/import-ga4"
      prevTitle="Import Data ke GA4"
      nextHref="/whitelist/data-sync/mapping-events"
      nextTitle="Mapping Events"
    >
      <p>Konten akan ditambahkan di sini.</p>
    </DocLayout>
  )
}
