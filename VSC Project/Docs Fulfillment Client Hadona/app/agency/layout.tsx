import Sidebar from '@/components/Sidebar'
import { agencySidebarItems } from '@/lib/content'

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex items-start">
      <div className="hidden lg:block flex-shrink-0 self-stretch">
        <Sidebar items={agencySidebarItems} title="Client Agency" />
      </div>
      <div className="flex-1 min-w-0 px-3 sm:px-6 py-6 sm:py-8 lg:px-[48px]">
        {children}
      </div>
    </div>
  )
}


