'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Copy, Check, MessageCircle } from 'lucide-react'

interface ShareButtonsProps {
  title?: string
}

export default function ShareButtons({ title }: ShareButtonsProps = {}) {
  const pathname = usePathname()
  const [copied, setCopied] = useState(false)
  const [pageTitle, setPageTitle] = useState('')

  // Get page title from document
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const docTitle = document.title || title || 'Hadona Docs'
      setPageTitle(docTitle.replace(' - Hadona Docs', '').replace(' | Hadona Docs', ''))
    }
  }, [title])

  // Get full URL
  const getFullUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin + pathname
    }
    return ''
  }

  // Copy link to clipboard
  const copyLink = async () => {
    try {
      const url = getFullUrl()
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = getFullUrl()
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Share via WhatsApp
  const shareViaWhatsApp = () => {
    const url = getFullUrl()
    const articleTitle = pageTitle || 'Artikel Dokumentasi'
    const text = `📚 ${articleTitle}\n\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="flex items-center gap-3 mb-8 pt-4 border-t border-gray-200">
      <button
        onClick={copyLink}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-hadona-primary hover:text-hadona-primary transition-all"
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            <span className="text-sm font-medium">Link Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            <span className="text-sm font-medium">Copy Link</span>
          </>
        )}
      </button>

      <button
        onClick={shareViaWhatsApp}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-green-500 hover:text-green-600 transition-all"
        aria-label="Share via WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="text-sm font-medium">Share via WhatsApp</span>
      </button>
    </div>
  )
}

