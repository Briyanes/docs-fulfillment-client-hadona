import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Calendar, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Updates & Changelog"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/resources"
      prevTitle="Resources"
      nextHref="/agency/best-practices/community"
      nextTitle="Community"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Tetap update dengan perubahan terbaru pada platform Hadona, fitur baru, perbaikan, dan
          announcements penting. Halaman ini akan selalu diperbarui dengan informasi terkini.
        </p>
      </div>

      <h2>Latest Updates</h2>

      <div className="my-6 space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-hadona-primary" />
              <h3 className="text-lg font-semibold">Platform Update v2.1.0</h3>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
              New
            </span>
          </div>
          <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>15 Desember 2024</span>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">New Features:</h4>
            <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
              <li>Advanced campaign analytics dashboard dengan real-time metrics</li>
              <li>Automated budget optimization recommendations</li>
              <li>Bulk campaign management tools</li>
              <li>Enhanced reporting dengan custom date ranges</li>
            </ul>
            <h4 className="mt-4 font-semibold text-gray-900">Improvements:</h4>
            <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
              <li>Improved loading speed untuk dashboard (40% faster)</li>
              <li>Better mobile responsiveness</li>
              <li>Enhanced error messages dan user feedback</li>
            </ul>
            <h4 className="mt-4 font-semibold text-gray-900">Bug Fixes:</h4>
            <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
              <li>Fixed issue dengan export reports</li>
              <li>Resolved login timeout problems</li>
              <li>Fixed campaign duplication bug</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-hadona-primary" />
              <h3 className="text-lg font-semibold">Documentation Update</h3>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              Updated
            </span>
          </div>
          <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>10 Desember 2024</span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              Dokumentasi telah diperbarui dengan:
            </p>
            <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
              <li>Panduan lengkap untuk Best Practices section</li>
              <li>Updated troubleshooting guides</li>
              <li>New video tutorials untuk advanced features</li>
              <li>Enhanced FAQ section dengan 20+ pertanyaan baru</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold">Important: Meta API Changes</h3>
            </div>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
              Important
            </span>
          </div>
          <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>5 Desember 2024</span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              Meta akan melakukan update pada API mereka yang dapat mempengaruhi beberapa fitur.
              Perubahan akan berlaku efektif 1 Januari 2025.
            </p>
            <p className="text-sm font-semibold text-gray-900">
              Action Required:
            </p>
            <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
              <li>Review dan update API integrations sebelum 1 Januari 2025</li>
              <li>Test semua automated workflows</li>
              <li>Contact support jika mengalami issues</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Changelog History</h2>
      <p>Riwayat lengkap semua updates dan perubahan:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold">v2.0.5</h3>
            <span className="text-sm text-gray-500">28 November 2024</span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
            <li>Minor bug fixes dan performance improvements</li>
            <li>Updated security protocols</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold">v2.0.0</h3>
            <span className="text-sm text-gray-500">15 November 2024</span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
            <li>Major platform redesign dengan UI/UX improvements</li>
            <li>New campaign builder dengan drag-and-drop interface</li>
            <li>Enhanced analytics dengan predictive insights</li>
            <li>Improved mobile app experience</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold">v1.9.2</h3>
            <span className="text-sm text-gray-500">1 November 2024</span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
            <li>Added support untuk Instagram Shopping campaigns</li>
            <li>Improved export functionality</li>
            <li>Bug fixes untuk reporting module</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold">v1.9.0</h3>
            <span className="text-sm text-gray-500">20 Oktober 2024</span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
            <li>New A/B testing framework</li>
            <li>Enhanced audience insights</li>
            <li>Improved integration dengan Google Analytics</li>
          </ul>
        </div>
      </div>

      <h2>Upcoming Features</h2>
      <p>Fitur-fitur yang sedang dalam pengembangan dan akan segera hadir:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-hadona-primary/20 bg-hadona-primary/5 p-5">
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">AI-Powered Campaign Optimization</h3>
          </div>
          <p className="mb-2 text-sm text-gray-700">
            Machine learning algorithms untuk automated campaign optimization dan budget allocation.
          </p>
          <span className="text-xs text-gray-500">Expected: Q1 2025</span>
        </div>

        <div className="rounded-lg border border-hadona-primary/20 bg-hadona-primary/5 p-5">
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Advanced Multi-Channel Reporting</h3>
          </div>
          <p className="mb-2 text-sm text-gray-700">
            Unified reporting dashboard untuk Meta, Google Ads, TikTok, dan platform lainnya.
          </p>
          <span className="text-xs text-gray-500">Expected: Q1 2025</span>
        </div>

        <div className="rounded-lg border border-hadona-primary/20 bg-hadona-primary/5 p-5">
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Creative Library & Asset Management</h3>
          </div>
          <p className="mb-2 text-sm text-gray-700">
            Centralized library untuk menyimpan, mengorganisir, dan reuse kreatif assets.
          </p>
          <span className="text-xs text-gray-500">Expected: Q2 2025</span>
        </div>

        <div className="rounded-lg border border-hadona-primary/20 bg-hadona-primary/5 p-5">
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Real-Time Collaboration Tools</h3>
          </div>
          <p className="mb-2 text-sm text-gray-700">
            Tools untuk kolaborasi real-time dengan team, termasuk comments, approvals, dan
            notifications.
          </p>
          <span className="text-xs text-gray-500">Expected: Q2 2025</span>
        </div>
      </div>

      <h2>How to Stay Updated</h2>
      <p>Beberapa cara untuk tetap update dengan perubahan terbaru:</p>

      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Email Notifications</h4>
          <p className="text-sm text-gray-600">
            Subscribe ke email newsletter untuk menerima update langsung di inbox Anda.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">In-App Notifications</h4>
          <p className="text-sm text-gray-600">
            Aktifkan in-app notifications di dashboard untuk update real-time.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">RSS Feed</h4>
          <p className="text-sm text-gray-600">
            Subscribe ke RSS feed untuk update otomatis di RSS reader Anda.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Community Forum</h4>
          <p className="text-sm text-gray-600">
            Bergabung dengan community forum untuk diskusi tentang updates dan features.
          </p>
        </div>
      </div>

      <h2>Deprecation Notices</h2>
      <p>Fitur yang akan dihapus atau diganti di versi mendatang:</p>

      <Callout type="warning" title="Deprecated Features">
        <div className="space-y-2">
          <p>
            <strong>Legacy Campaign Builder</strong> - Akan dihapus pada 1 Maret 2025. Migrate ke
            New Campaign Builder sebelum tanggal tersebut.
          </p>
          <p>
            <strong>Old Reporting API</strong> - Akan dihentikan pada 1 April 2025. Gunakan New
            Reporting API yang sudah tersedia.
          </p>
        </div>
      </Callout>

      <h2>Feedback & Feature Requests</h2>
      <p>
        Kami menghargai feedback Anda! Jika Anda memiliki saran untuk fitur baru atau perbaikan,
        silakan kirim melalui:
      </p>
      <ul>
        <li>
          <strong>Feature Request Form</strong> - Tersedia di dashboard Hadona
        </li>
        <li>
          <strong>Email</strong> - feedback@hadona.id
        </li>
        <li>
          <strong>Community Forum</strong> - Diskusikan ide Anda dengan komunitas
        </li>
      </ul>

      <Callout type="info" title="Version Information">
        <p>
          Platform Hadona saat ini berjalan pada versi <strong>v2.1.0</strong>. Untuk informasi
          teknis lebih detail tentang versi dan compatibility, hubungi tim support kami.
        </p>
      </Callout>
    </DocLayout>
  )
}
