import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { TrendingUp, Target, BarChart3, Zap, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Optimasi Campaign"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/creative-best-practices"
      prevTitle="Creative Best Practices"
      nextHref="/agency/ads-setup/ab-testing"
      nextTitle="A/B Testing"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Optimasi campaign adalah proses berkelanjutan untuk meningkatkan performa iklan. Panduan
          ini akan membantu Anda mengidentifikasi area yang perlu dioptimasi dan strategi untuk
          meningkatkan ROI.
        </p>
      </div>

      <h2>Kapan Melakukan Optimasi</h2>
      <p>
        Timing yang tepat untuk optimasi sangat penting:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Learning Phase (0-7 hari)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Biarkan campaign berjalan minimal 3-7 hari untuk mengumpulkan data. Hindari perubahan
            besar yang dapat mereset learning phase. Monitor performa tapi jangan panik jika belum
            optimal.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">After Learning Phase (7+ hari)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Setelah 7 hari dan minimal 50 conversions, mulai lakukan optimasi berdasarkan data.
            Lakukan perubahan bertahap dan monitor dampaknya selama 3-5 hari sebelum optimasi
            berikutnya.
          </p>
        </div>
      </div>

      <Callout type="warning" title="Jangan Over-Optimize">
        <p>
          Mengubah campaign terlalu sering dapat mengganggu learning phase dan mengurangi performa.
          Lakukan optimasi secara bertahap dan tunggu data yang cukup sebelum melakukan perubahan
          berikutnya.
        </p>
      </Callout>

      <h2>Metrics untuk Dimonitor</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <BarChart3 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Performance Metrics</h3>
            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• <strong>CTR (Click-Through Rate):</strong> Persentase orang yang klik iklan. Target: 1-3%+</li>
              <li>• <strong>CPC (Cost Per Click):</strong> Biaya per klik. Semakin rendah semakin baik</li>
              <li>• <strong>CPM (Cost Per Mille):</strong> Biaya per 1000 impressions</li>
              <li>• <strong>Frequency:</strong> Berapa kali rata-rata seseorang melihat iklan. Target: 1-3</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Target className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Conversion Metrics</h3>
            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• <strong>CVR (Conversion Rate):</strong> Persentase yang convert dari klik. Target varies by industry</li>
              <li>• <strong>CPA (Cost Per Acquisition):</strong> Biaya per conversion. Compare dengan lifetime value</li>
              <li>• <strong>ROAS (Return on Ad Spend):</strong> Revenue dibagi Ad Spend. Target: 3x-5x+</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Strategi Optimasi Berdasarkan Issue</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Low CTR (&lt; 1%)</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Penyebab:</strong> Creative tidak menarik atau audience tidak relevan.
          </p>
          <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Solusi:</p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Test creative baru yang lebih engaging</li>
            <li>• Perbaiki copy dan headline untuk lebih menarik</li>
            <li>• Sempitkan audience targeting untuk lebih relevan</li>
            <li>• Test berbagai format (video vs image, Stories vs Feed)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">High CPC</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Penyebab:</strong> Kompetisi tinggi, audience terlalu sempit, atau relevance score rendah.
          </p>
          <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Solusi:</p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Perlebar audience untuk mengurangi kompetisi</li>
            <li>• Perbaiki creative untuk meningkatkan relevance score</li>
            <li>• Test placement yang berbeda (automatic vs manual)</li>
            <li>• Turunkan bid atau gunakan bid cap</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Low CVR (Conversion Rate)</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Penyebab:</strong> Landing page tidak optimal, audience tidak qualified, atau value proposition tidak jelas.
          </p>
          <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Solusi:</p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Optimalkan landing page (speed, UX, copy)</li>
            <li>• Gunakan Custom/Lookalike Audience yang lebih qualified</li>
            <li>• Test berbagai value propositions dan offers</li>
            <li>• Perbaiki funnel untuk mengurangi friction</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">High Frequency (&gt; 3)</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Penyebab:</strong> Audience terlalu kecil atau campaign sudah berjalan terlalu lama.
          </p>
          <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Solusi:</p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Perlebar audience targeting</li>
            <li>• Refresh creative untuk mengurangi ad fatigue</li>
            <li>• Pause campaign sementara dan restart dengan creative baru</li>
            <li>• Gunakan frequency cap untuk membatasi exposure</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Budget Tidak Terpakai</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            <strong>Penyebab:</strong> Audience terlalu sempit, bid terlalu rendah, atau creative tidak engaging.
          </p>
          <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Solusi:</p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Perlebar audience targeting</li>
            <li>• Tingkatkan bid atau gunakan automatic bidding</li>
            <li>• Perbaiki creative quality dan relevance</li>
            <li>• Gunakan automatic placements untuk reach yang lebih luas</li>
          </ul>
        </div>
      </div>

      <h2>Optimasi Checklist</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Creative Refresh (Setiap 7-14 hari):</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Refresh creative secara berkala untuk menghindari ad fatigue. Test 3-5 creative baru
              setiap 1-2 minggu.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Audience Optimization:</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Exclude audience yang tidak convert, tambah Lookalike baru berdasarkan converters,
              refresh Custom Audience setiap 30-90 hari.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Bid Strategy:</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Test berbagai bid strategies (lowest cost, cost cap, bid cap). Adjust berdasarkan
              performance dan tujuan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Placement Optimization:</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Analyze performance per placement. Pause placements dengan performa buruk, fokus
              budget ke placement terbaik.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Budget Redistribution:</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Alokasikan lebih banyak budget ke Ad Sets yang performa terbaik. Pause atau kurangi
              budget untuk yang underperform.
            </p>
          </div>
        </div>
      </div>

      <h2>Advanced Optimization Tactics</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Dynamic Creative</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gunakan Dynamic Creative untuk test berbagai kombinasi headline, image, dan copy
              secara otomatis. Meta akan mengoptimalkan kombinasi terbaik.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Campaign Budget Optimization (CBO)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gunakan CBO untuk mengalokasikan budget secara otomatis ke Ad Sets dengan performa
              terbaik. Sangat efektif untuk scaling.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Retargeting Funnel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Setup retargeting campaign untuk website visitors yang belum convert. Biasanya CPA
              lebih rendah dan CVR lebih tinggi.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Dayparting</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Analyze performa per hour/day. Pause atau reduce budget di waktu yang performa buruk,
              fokus di waktu yang performa terbaik.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Optimasi Berkelanjutan">
        <p>
          Optimasi adalah proses berkelanjutan, bukan one-time task. Monitor performa secara berkala
          (daily untuk campaign baru, weekly untuk mature campaign) dan lakukan optimasi
          berdasarkan data. Patience dan consistency adalah kunci.
        </p>
      </Callout>

      <h2>Scaling Campaign yang Sudah Optimal</h2>
      <p>
        Setelah campaign optimal (ROAS 3x+, CVR stabil), mulai scaling:
      </p>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Vertical Scaling:</strong> Tingkatkan budget 20-50% setiap 3-5 hari. Jangan
          double budget sekaligus.
        </li>
        <li>
          <strong>Horizontal Scaling:</strong> Duplicate Ad Set dengan audience yang mirip atau
          creative yang berbeda. Test secara paralel.
        </li>
        <li>
          <strong>Lookalike Expansion:</strong> Buat Lookalike 2-5% dari converters. Test dengan
          budget kecil terlebih dahulu.
        </li>
        <li>
          <strong>New Placements:</strong> Expand ke placements baru (misalnya Stories atau Reels)
          dengan creative yang sesuai.
        </li>
      </ul>
    </DocLayout>
  )
}
