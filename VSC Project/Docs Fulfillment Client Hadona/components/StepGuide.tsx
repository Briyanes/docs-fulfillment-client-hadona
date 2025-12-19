import { ReactNode } from 'react'
import { CheckCircle2 } from 'lucide-react'

interface Step {
  title: string
  content: ReactNode
  optional?: boolean
}

interface StepGuideProps {
  steps: Step[]
  title?: string
}

export default function StepGuide({ steps, title }: StepGuideProps) {
  return (
    <div className="my-8">
      {title && (
        <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 font-semibold ${
                  step.optional
                    ? 'border-gray-300 bg-gray-50 text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400'
                    : 'border-hadona-primary bg-hadona-primary text-white'
                }`}
              >
                {step.optional ? (
                  <span className="text-sm">?</span>
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="mt-2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}
            </div>
            <div className="flex-1 pb-8">
              <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {step.title}
                {step.optional && (
                  <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                    (Opsional)
                  </span>
                )}
              </h4>
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {step.content}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}


