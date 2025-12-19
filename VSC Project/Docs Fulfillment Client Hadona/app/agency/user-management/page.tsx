import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function UserManagementPage() {
  const articles = [
    { title: 'Menambahkan Team Member', href: '/agency/user-management/menambahkan-team' },
    { title: 'Mengatur Akses User', href: '/agency/user-management/mengatur-akses' },
    { title: 'Role & Permission', href: '/agency/user-management/role-permission' },
    { title: 'Audit Log', href: '/agency/user-management/audit-log' },
    { title: 'Monitoring Aktivitas', href: '/agency/user-management/monitoring' },
    { title: 'Menghapus User', href: '/agency/user-management/menghapus-user' },
  ]

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">User Management</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Kelola tim dan akses pengguna
      </p>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-hadona-primary hover:bg-hadona-primary/5 dark:border-gray-800 dark:bg-gray-900"
          >
            <span className="font-medium">{article.title}</span>
            <ArrowRight className="h-5 w-5 text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  )
}


