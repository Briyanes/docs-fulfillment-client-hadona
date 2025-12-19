'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export default function CodeBlock({ code, language = 'text', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative my-6 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      {filename && (
        <div className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
          {filename}
        </div>
      )}
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 rounded-md bg-gray-200 p-2 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
        <pre className="overflow-x-auto p-4 text-sm">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  )
}


