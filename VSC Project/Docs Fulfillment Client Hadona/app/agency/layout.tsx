import Sidebar from '@/components/Sidebar'
import { agencySidebarItems } from '@/lib/content'

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full lg:px-[48px]">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar items={agencySidebarItems} title="Client Agency" />
      </div>
      <div className="flex-1 px-3 sm:px-6 py-6 sm:py-8 lg:px-8">
        {children}
      </div>
    </div>
  )
}


