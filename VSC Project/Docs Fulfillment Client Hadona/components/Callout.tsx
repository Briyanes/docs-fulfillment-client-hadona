import { AlertCircle, Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface CalloutProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  children: ReactNode
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      icon: Info,
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-800 dark:text-blue-200',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    success: {
      icon: CheckCircle,
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-800 dark:text-green-200',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-800 dark:text-yellow-200',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
    error: {
      icon: XCircle,
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-800 dark:text-red-200',
      iconColor: 'text-red-600 dark:text-red-400',
    },
  }

  const style = styles[type]
  const Icon = style.icon

  return (
    <div
      className={`my-6 rounded-lg border ${style.border} ${style.bg} p-4 ${style.text}`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${style.iconColor}`} />
        <div className="flex-1">
          {title && (
            <h4 className={`mb-2 font-semibold ${style.text}`}>{title}</h4>
          )}
          <div className="prose prose-sm max-w-none dark:prose-invert">{children}</div>
        </div>
      </div>
    </div>
  )
}


