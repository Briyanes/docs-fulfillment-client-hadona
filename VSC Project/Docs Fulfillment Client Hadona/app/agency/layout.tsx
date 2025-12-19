import Sidebar from '@/components/Sidebar'
import { agencySidebarItems } from '@/lib/content'

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex max-w-7xl">
      <div className="hidden w-64 flex-shrink-0 lg:block">
        <Sidebar items={agencySidebarItems} title="Client Agency" />
      </div>
      <div className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">{children}</div>
      </div>
    </div>
  )
}


