import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Book, Video, FileText, ExternalLink, Download, Link as LinkIcon } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Resources"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/kontak-support"
      prevTitle="Kontak Support"
      nextHref="/agency/best-practices/updates"
      nextTitle="Updates & Changelog"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Kumpulan resources yang berguna untuk membantu Anda mengoptimalkan kampanye iklan Meta.
          Dari dokumentasi resmi hingga tools dan templates, semua tersedia di sini.
        </p>
      </div>

      <h2>Dokumentasi Resmi Meta</h2>
      <p>
        Akses langsung ke dokumentasi resmi dari Meta untuk informasi paling update dan akurat:
      </p>

      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <Book className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Meta Business Help Center</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Panduan lengkap tentang Business Manager, Ads Manager, dan semua fitur Meta untuk
            bisnis.
          </p>
          <a
            href="https://www.facebook.com/business/help"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Kunjungi <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <FileText className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Meta Advertising Policies</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Kebijakan iklan Meta yang harus diikuti untuk menghindari rejection dan account issues.
          </p>
          <a
            href="https://www.facebook.com/policies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Kunjungi <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <Video className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Meta Blueprint</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Kursus online gratis dari Meta untuk belajar digital marketing dan advertising.
          </p>
          <a
            href="https://www.facebook.com/blueprint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Kunjungi <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <LinkIcon className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Meta for Developers</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Dokumentasi teknis untuk developers, termasuk API, Pixel, dan Conversions API.
          </p>
          <a
            href="https://developers.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Kunjungi <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <h2>Tools & Utilities</h2>
      <p>Tools yang berguna untuk mengoptimalkan dan menganalisis kampanye Anda:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Meta Pixel Helper</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Browser extension untuk memverifikasi pixel installation dan debug tracking issues.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
            >
              Chrome <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/meta-pixel-helper/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
            >
              Firefox <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Text Overlay Checker</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Tool untuk memeriksa apakah text overlay pada image ads memenuhi aturan Meta (maksimal
            20%).
          </p>
          <a
            href="https://www.facebook.com/ads/tools/text_overlay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Gunakan Tool <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Ad Library</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Lihat semua iklan aktif dari competitor atau brand lain untuk research dan inspiration.
          </p>
          <a
            href="https://www.facebook.com/ads/library"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Buka Ad Library <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Audience Insights</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Tool untuk research audience, memahami demografi, interest, dan behavior target market
            Anda.
          </p>
          <a
            href="https://www.facebook.com/ads/audience-insights"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Buka Audience Insights <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <h2>Templates & Checklists</h2>
      <p>Download templates dan checklist yang berguna untuk workflow Anda:</p>

      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <Download className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Campaign Planning Template</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Template Excel untuk merencanakan kampanye, alokasi budget, dan tracking KPIs.
          </p>
          <button className="text-sm text-hadona-primary hover:text-hadona-dark">
            Download Template
          </button>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <Download className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Content Calendar Template</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Template untuk merencanakan dan mengorganisir konten iklan bulanan.
          </p>
          <button className="text-sm text-hadona-primary hover:text-hadona-dark">
            Download Template
          </button>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <Download className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Campaign Launch Checklist</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Checklist lengkap untuk memastikan semua elemen siap sebelum launch kampanye.
          </p>
          <button className="text-sm text-hadona-primary hover:text-hadona-dark">
            Download Checklist
          </button>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <Download className="h-5 w-5 text-hadona-primary" />
            <h3 className="font-semibold">Performance Review Template</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Template untuk weekly/monthly review performa kampanye dan optimasi.
          </p>
          <button className="text-sm text-hadona-primary hover:text-hadona-dark">
            Download Template
          </button>
        </div>
      </div>

      <h2>Video Tutorials & Webinars</h2>
      <p>Kumpulan video tutorial dan webinar untuk meningkatkan pengetahuan Anda:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Hadona Academy</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Video tutorial lengkap tentang menggunakan platform Hadona, best practices, dan case
            studies.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Akses Academy <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Meta Blueprint Courses</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Kursus online gratis dari Meta, termasuk sertifikasi untuk Facebook Certified Marketing
            Science Professional.
          </p>
          <a
            href="https://www.facebook.com/blueprint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Lihat Courses <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Webinar Series</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Webinar bulanan dari Hadona tentang topik-topik terkini dalam digital advertising.
            Recording tersedia untuk yang tidak bisa hadir live.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Lihat Webinar <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <h2>Blog & Articles</h2>
      <p>Artikel dan blog posts tentang tips, strategi, dan insights digital marketing:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Hadona Blog</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Blog resmi Hadona dengan artikel tentang best practices, case studies, dan industry
            insights.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Baca Blog <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Meta Business Blog</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Blog resmi Meta Business dengan updates, tips, dan success stories dari advertisers.
          </p>
          <a
            href="https://www.facebook.com/business/news"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Baca Blog <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <h2>Community Resources</h2>
      <p>Bergabung dengan komunitas untuk belajar dan berbagi pengalaman:</p>

      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Hadona Community Forum</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Forum komunitas untuk bertanya, berbagi tips, dan berdiskusi dengan advertisers lain.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Join Forum <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Facebook Groups</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Bergabung dengan Facebook Groups untuk digital marketers dan Meta advertisers.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-hadona-primary hover:text-hadona-dark"
          >
            Lihat Groups <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <h2>Recommended Reading</h2>
      <p>Buku dan resources tambahan untuk memperdalam pengetahuan:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-1 font-semibold">"Jab, Jab, Jab, Right Hook" by Gary Vaynerchuk</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Panduan tentang social media marketing dan content strategy.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-1 font-semibold">"The Art of Social Media" by Guy Kawasaki</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tips dan strategi untuk mengoptimalkan social media presence.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-1 font-semibold">"Digital Marketing for Dummies"</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Panduan komprehensif untuk pemula dalam digital marketing.
          </p>
        </div>
      </div>

      <Callout type="info" title="Resource Baru">
        <p>
          Kami terus menambahkan resources baru. Bookmark halaman ini dan check kembali secara
          berkala untuk updates terbaru.
        </p>
      </Callout>
    </DocLayout>
  )
}
