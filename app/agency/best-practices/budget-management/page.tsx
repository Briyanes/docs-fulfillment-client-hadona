import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { DollarSign, TrendingUp, PieChart, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Budget Management"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/optimasi-performance"
      prevTitle="Optimasi Performance"
      nextHref="/agency/best-practices/content-strategy"
      nextTitle="Content Strategy"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Manajemen budget yang efektif adalah kunci sukses kampanye iklan. Panduan ini akan
          membantu Anda mengalokasikan, mengoptimalkan, dan mengontrol budget iklan dengan lebih
          baik.
        </p>
      </div>

      <h2>Prinsip Dasar Budget Management</h2>
      <p>
        Manajemen budget yang baik memerlukan perencanaan, monitoring, dan optimasi yang berkelanjutan.
        Berikut prinsip dasar yang perlu Anda pahami:
      </p>
      <ul>
        <li>
          <strong>Plan Before Spend</strong> - Rencanakan alokasi budget sebelum memulai kampanye
        </li>
        <li>
          <strong>Monitor Regularly</strong> - Pantau pengeluaran harian dan mingguan
        </li>
        <li>
          <strong>Optimize Continuously</strong> - Alihkan budget dari underperforming ke
          performing campaigns
        </li>
        <li>
          <strong>Scale Winners</strong> - Tingkatkan budget untuk kampanye yang perform
        </li>
      </ul>

      <h2>Jenis Budget di Meta Ads</h2>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <DollarSign className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Campaign Budget</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600">
            Budget yang dialokasikan di level campaign dan dibagi otomatis ke semua ad sets dalam
            campaign tersebut.
          </p>
          <p className="text-xs font-semibold text-gray-700">Kapan Digunakan:</p>
          <ul className="text-xs text-gray-600">
            <li>• Multiple ad sets dengan tujuan sama</li>
            <li>• Ingin Meta mengoptimalkan distribusi budget</li>
            <li>• Campaign dengan banyak variasi</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <PieChart className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Ad Set Budget</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600">
            Budget yang ditetapkan untuk setiap ad set secara individual. Memberikan kontrol lebih
            granular.
          </p>
          <p className="text-xs font-semibold text-gray-700">Kapan Digunakan:</p>
          <ul className="text-xs text-gray-600">
            <li>• Kontrol spesifik per ad set</li>
            <li>• Testing dengan budget berbeda</li>
            <li>• Campaign dengan sedikit ad sets</li>
          </ul>
        </div>
      </div>

      <h2>Strategi Alokasi Budget</h2>

      <h3>1. Budget Allocation Framework</h3>
      <p>Berikut framework yang direkomendasikan untuk alokasi budget:</p>

      <div className="my-6 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Tipe Kampanye</th>
              <th>% dari Total Budget</th>
              <th>Alasan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Proven Winners</strong>
              </td>
              <td>50-60%</td>
              <td>Kampanye yang sudah terbukti perform dengan baik</td>
            </tr>
            <tr>
              <td>
                <strong>Scaling Campaigns</strong>
              </td>
              <td>20-30%</td>
              <td>Kampanye yang sedang di-scale up</td>
            </tr>
            <tr>
              <td>
                <strong>Testing</strong>
              </td>
              <td>10-20%</td>
              <td>Testing kreatif, audience, atau strategi baru</td>
            </tr>
            <tr>
              <td>
                <strong>Retargeting</strong>
              </td>
              <td>10-15%</td>
              <td>Kampanye retargeting untuk warm audiences</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2. Budget Minimum untuk Learning Phase</h3>
      <p>
        Untuk memastikan algoritma Meta dapat belajar dengan baik, setiap ad set memerlukan budget
        minimum:
      </p>
      <ul>
        <li>
          <strong>Conversion Campaigns</strong> - Minimum 5x target CPA per hari (contoh: CPA $10 =
          budget $50/hari)
        </li>
        <li>
          <strong>Traffic/Engagement</strong> - Minimum $20-30 per hari per ad set
        </li>
        <li>
          <strong>Brand Awareness</strong> - Minimum $10-20 per hari per ad set
        </li>
      </ul>

      <Callout type="warning" title="Penting: Budget Minimum">
        <p>
          Budget yang terlalu kecil akan membuat algoritma kesulitan belajar dan menghasilkan
          performa yang tidak optimal. Pastikan budget cukup untuk learning phase.
        </p>
      </Callout>

      <h2>Cara Mengatur Budget dengan Efektif</h2>
      <StepGuide
        steps={[
          {
            title: 'Tentukan Total Budget Bulanan',
            content: (
              <p>
                Tentukan total budget yang tersedia untuk iklan Meta per bulan. Ini akan menjadi
                dasar untuk alokasi ke berbagai kampanye.
              </p>
            ),
          },
          {
            title: 'Breakdown per Campaign Type',
            content: (
              <p>
                Alokasikan budget sesuai framework di atas. Prioritaskan proven winners, lalu
                scaling, testing, dan retargeting.
              </p>
            ),
          },
          {
            title: 'Set Daily Budget',
            content: (
              <p>
                Bagi budget bulanan menjadi daily budget. Gunakan formula: (Budget Bulanan / 30) x
                1.2 untuk buffer. Meta akan menghabiskan budget secara merata sepanjang bulan.
              </p>
            ),
          },
          {
            title: 'Monitor Daily Spend',
            content: (
              <p>
                Pantau pengeluaran harian untuk memastikan tidak ada overspend atau underspend.
                Adjust jika diperlukan.
              </p>
            ),
          },
          {
            title: 'Optimize Weekly',
            content: (
              <p>
                Setiap minggu, review performa dan alihkan budget dari underperforming ke
                performing campaigns. Scale up winners.
              </p>
            ),
          },
        ]}
      />

      <h2>Budget Optimization Strategies</h2>

      <h3>1. Budget Scaling</h3>
      <p>Ketika menemukan winner, scale up dengan strategi berikut:</p>
      <ul>
        <li>
          <strong>20% Rule</strong> - Tingkatkan budget maksimal 20-30% setiap 2-3 hari
        </li>
        <li>
          <strong>Wait for Stability</strong> - Tunggu 2-3 hari setelah scale untuk melihat
          performa stabil
        </li>
        <li>
          <strong>Monitor Metrics</strong> - Pastikan CPA/ROAS tetap dalam target setelah scaling
        </li>
        <li>
          <strong>Stop if Performance Drops</strong> - Jika performa turun, kurangi budget kembali
        </li>
      </ul>

      <h3>2. Budget Reallocation</h3>
      <p>Strategi untuk mengalihkan budget:</p>
      <ul>
        <li>
          <strong>Pause Underperformers</strong> - Hentikan ad sets yang tidak mencapai target
        </li>
        <li>
          <strong>Reduce Gradually</strong> - Kurangi budget secara bertahap, jangan langsung
          pause
        </li>
        <li>
          <strong>Move to Winners</strong> - Alihkan budget ke ad sets yang perform lebih baik
        </li>
        <li>
          <strong>Test New Variations</strong> - Gunakan budget yang tersedia untuk test variasi
          baru
        </li>
      </ul>

      <h2>Budget Monitoring & Reporting</h2>
      <p>Pantau budget dengan metrik berikut:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Daily Metrics</h4>
          <ul className="text-sm text-gray-600">
            <li>• Daily spend vs daily budget</li>
            <li>• Projected monthly spend</li>
            <li>• Budget utilization rate</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Performance Metrics</h4>
          <ul className="text-sm text-gray-600">
            <li>• CPA per campaign/ad set</li>
            <li>• ROAS per campaign/ad set</li>
            <li>• Cost efficiency trends</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Budget Health</h4>
          <ul className="text-sm text-gray-600">
            <li>• Budget pacing (on track/behind/ahead)</li>
            <li>• Budget distribution across campaigns</li>
            <li>• Budget allocation efficiency</li>
          </ul>
        </div>
      </div>

      <h2>Common Budget Management Mistakes</h2>
      <p>Hindari kesalahan umum berikut:</p>
      <ul>
        <li>
          <strong>Too Many Small Budgets</strong> - Terlalu banyak ad sets dengan budget kecil
          membuat algoritma tidak bisa belajar
        </li>
        <li>
          <strong>Frequent Budget Changes</strong> - Mengubah budget terlalu sering dapat mereset
          learning phase
        </li>
        <li>
          <strong>No Budget Buffer</strong> - Tidak menyisakan buffer untuk scaling winners
        </li>
        <li>
          <strong>Ignoring Daily Spend</strong> - Tidak memantau daily spend dapat menyebabkan
          overspend atau underspend
        </li>
        <li>
          <strong>Scaling Too Fast</strong> - Meningkatkan budget terlalu cepat dapat merusak
          performa
        </li>
      </ul>

      <h2>Best Practices</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Start Conservative</strong>
            <p className="text-sm text-gray-600">
              Mulai dengan budget konservatif, lalu scale up setelah melihat performa yang baik.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Use Campaign Budget for Testing</strong>
            <p className="text-sm text-gray-600">
              Gunakan campaign budget untuk testing agar Meta dapat mengoptimalkan distribusi
              budget.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Set Budget Limits</strong>
            <p className="text-sm text-gray-400">
              Gunakan account spending limit untuk mencegah overspend yang tidak terduga.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Review Weekly</strong>
            <p className="text-sm text-gray-600">
              Lakukan review budget mingguan untuk optimasi dan reallocation yang tepat waktu.
            </p>
          </div>
        </div>
      </div>

      <h2>Budget Planning Template</h2>
      <p>Gunakan template berikut untuk perencanaan budget:</p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h4 className="mb-4 font-semibold">Monthly Budget Plan</h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Total Monthly Budget:</span>
            <strong>$10,000</strong>
          </div>
          <div className="flex justify-between">
            <span>Proven Winners (60%):</span>
            <strong>$6,000</strong>
          </div>
          <div className="flex justify-between">
            <span>Scaling (25%):</span>
            <strong>$2,500</strong>
          </div>
          <div className="flex justify-between">
            <span>Testing (10%):</span>
            <strong>$1,000</strong>
          </div>
          <div className="flex justify-between">
            <span>Retargeting (5%):</span>
            <strong>$500</strong>
          </div>
          <div className="mt-4 border-t border-gray-300 pt-3">
            <div className="flex justify-between">
              <span>Daily Budget (Total / 30):</span>
              <strong>$333/day</strong>
            </div>
          </div>
        </div>
      </div>

      <Callout type="info" title="Butuh Bantuan Budget Planning?">
        <p>
          Tim Hadona dapat membantu Anda membuat strategi budget management yang optimal untuk
          bisnis Anda. Hubungi support kami untuk konsultasi.
        </p>
      </Callout>
    </DocLayout>
  )
}
