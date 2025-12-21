import Sidebar from '@/components/Sidebar'
import { whitelistSidebarItems } from '@/lib/content'

export default function WhitelistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <Sidebar items={whitelistSidebarItems} title="Client Whitelist" />
      </div>
      <div className="w-full lg:ml-64 lg:mr-64 px-3 sm:px-6 py-6 sm:py-8 lg:px-[48px]">
        {children}
      </div>
    </div>
  )
}


