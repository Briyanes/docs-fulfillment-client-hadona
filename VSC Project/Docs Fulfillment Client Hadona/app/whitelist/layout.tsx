import Sidebar from '@/components/Sidebar'
import { whitelistSidebarItems } from '@/lib/content'

export default function WhitelistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full lg:px-[48px]">
      <div className="hidden w-64 flex-shrink-0 lg:block">
        <Sidebar items={whitelistSidebarItems} title="Client Whitelist" />
      </div>
      <div className="flex-1 px-3 sm:px-6 py-6 sm:py-8 lg:px-8">
        {children}
      </div>
    </div>
  )
}


