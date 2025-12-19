import Sidebar from '@/components/Sidebar'
import { whitelistSidebarItems } from '@/lib/content'

export default function WhitelistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex max-w-7xl">
      <div className="hidden w-64 flex-shrink-0 lg:block">
        <Sidebar items={whitelistSidebarItems} title="Client Whitelist" />
      </div>
      <div className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">{children}</div>
      </div>
    </div>
  )
}


