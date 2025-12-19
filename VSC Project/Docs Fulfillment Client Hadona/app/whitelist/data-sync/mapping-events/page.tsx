import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Mapping Events"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      prevHref="/whitelist/data-sync/auto-sync"
      prevTitle="Auto-Sync Setup"
      nextHref="/whitelist/data-sync/data-validation"
      nextTitle="Data Validation"
    >
      <p>Konten akan ditambahkan di sini.</p>
    </DocLayout>
  )
}
