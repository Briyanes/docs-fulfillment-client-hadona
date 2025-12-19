import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { BarChart3, TrendingUp, Eye, Download, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Reporting & Analytics"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/ab-testing"
      prevTitle="A/B Testing"
      nextHref="/agency/ads-setup/troubleshooting"
      nextTitle="Troubleshooting Ads"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Reporting dan analytics yang tepat membantu Anda memahami performa kampanye dan membuat
          keputusan yang data-driven. Panduan ini akan membantu Anda setup dan menggunakan reporting
          tools di Meta Ads Manager.
        </p>
      </div>

      <h2>Key Metrics yang Perlu Dimonitor</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Reach & Impressions Metrics</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• <strong>Reach:</strong> Jumlah unique users yang melihat iklan</li>
            <li>• <strong>Impressions:</strong> Total berapa kali iklan ditampilkan</li>
            <li>• <strong>Frequency:</strong> Rata-rata berapa kali setiap user melihat iklan (Impressions ÷ Reach)</li>
            <li>• <strong>CPM (Cost Per Mille):</strong> Biaya per 1000 impressions</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Engagement Metrics</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• <strong>CTR (Click-Through Rate):</strong> Persentase yang klik dari impressions</li>
            <li>• <strong>CPC (Cost Per Click):</strong> Biaya rata-rata per klik</li>
            <li>• <strong>Link Clicks:</strong> Total klik ke website/landing page</li>
            <li>• <strong>Post Engagement:</strong> Likes, comments, shares, saves</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Conversion Metrics</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• <strong>Conversions:</strong> Total conversions (purchase, sign up, dll)</li>
            <li>• <strong>CVR (Conversion Rate):</strong> Persentase yang convert dari klik</li>
            <li>• <strong>CPA (Cost Per Acquisition):</strong> Biaya rata-rata per conversion</li>
            <li>• <strong>ROAS (Return on Ad Spend):</strong> Revenue ÷ Ad Spend</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Video Metrics (untuk Video Ads)</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• <strong>Video Views:</strong> Total views (minimal 3 detik)</li>
            <li>• <strong>Video Watch Time:</strong> Total durasi yang ditonton</li>
            <li>• <strong>Video Completion Rate:</strong> Persentase yang tonton hingga selesai</li>
            <li>• <strong>ThruPlay:</strong> Views yang tonton minimal 15 detik atau hingga selesai</li>
          </ul>
        </div>
      </div>

      <h2>Mengakses Reports di Ads Manager</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <Eye className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Campaigns Tab</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lihat overview semua campaigns dengan metrics utama. Klik campaign untuk drill down
              ke Ad Set dan Ad level.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <BarChart3 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Breakdown</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Klik "Breakdown" button untuk analyze performa berdasarkan demographics (age, gender,
              location), placement, time, atau delivery.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Charts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Klik "Charts" untuk visualize trends over time. Pilih metrics yang ingin di-plot dan
              time range.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Download className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Export</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Export reports ke Excel atau CSV untuk analysis lebih lanjut atau sharing dengan
              team/client.
            </p>
          </div>
        </div>
      </div>

      <h2>Customize Columns</h2>
      <p>
        Customize columns di Ads Manager untuk melihat metrics yang paling relevan:
      </p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Klik <strong>"Columns"</strong> dropdown di atas data table</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Pilih preset (Performance, Engagement, Video Engagement, dll) atau <strong>"Customize Columns"</strong></div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Tambah/hapus metrics sesuai kebutuhan</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Save sebagai preset untuk digunakan lagi</div>
        </li>
      </ul>

      <Callout type="info" title="Recommended Column Sets">
        <p>
          Untuk efficiency, buat beberapa column presets untuk use cases berbeda:
        </p>
        <ul className="mt-2 text-sm">
          <li>• <strong>Overview:</strong> Reach, Impressions, CTR, CPC, Conversions, CPA, ROAS</li>
          <li>• <strong>Creative Testing:</strong> CTR, CPC, Engagement Rate, Video Completion Rate</li>
          <li>• <strong>Conversion Analysis:</strong> Link Clicks, CVR, CPA, ROAS, Purchase Value</li>
        </ul>
      </Callout>

      <h2>Using Breakdowns untuk Insights</h2>
      <p>
        Breakdowns membantu Anda understand performa lebih detail:
      </p>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">By Demographics</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lihat performa by age, gender, atau location. Gunakan untuk optimize audience targeting.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">By Placement</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lihat placement mana yang performa terbaik (Feed, Stories, Reels, dll). Optimize budget
            ke placement yang paling efektif.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">By Time</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lihat performa by day, hour, atau week. Identify pola dan optimize schedule.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">By Delivery</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lihat device (mobile vs desktop), platform (Facebook vs Instagram), atau operating system.
          </p>
        </div>
      </div>

      <h2>Creating Custom Reports</h2>
      <p>
        Buat custom reports untuk monitoring yang lebih efisien:
      </p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">1</div>
          <div>
            <strong>Pilih View:</strong> Setup columns dan breakdowns yang ingin digunakan
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">2</div>
          <div>
            <strong>Save View:</strong> Klik "Save" dan beri nama yang jelas
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">3</div>
          <div>
            <strong>Schedule Export:</strong> Setup scheduled export untuk receive reports via
            email secara otomatis (daily, weekly, monthly)
          </div>
        </li>
      </ol>

      <h2>Analyzing Campaign Performance</h2>
      <p>
        Framework untuk analyze performa campaign:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Step 1: Check Overall Performance</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Apakah campaign mencapai target (ROAS, CPA, dll)?</li>
            <li>• Apakah budget terpakai dengan baik?</li>
            <li>• Apakah ada trends (naik/turun) dalam beberapa hari terakhir?</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Step 2: Drill Down ke Ad Set Level</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Ad Set mana yang performa terbaik/terburuk?</li>
            <li>• Apakah ada Ad Set yang perlu di-pause atau scale up?</li>
            <li>• Compare performa between different audiences</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Step 3: Analyze Ad Level</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Creative mana yang paling engaging (highest CTR)?</li>
            <li>• Creative mana yang paling converting (highest CVR)?</li>
            <li>• Apakah ada ad fatigue (declining performance over time)?</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Step 4: Use Breakdowns</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Demographics mana yang paling efektif?</li>
            <li>• Placement mana yang paling performing?</li>
            <li>• Ada pola berdasarkan time of day atau day of week?</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Step 5: Identify Actions</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Apa yang perlu di-optimize?</li>
            <li>• Apa yang perlu di-pause atau di-scale?</li>
            <li>• Test apa yang perlu dijalankan berikutnya?</li>
          </ul>
        </div>
      </div>

      <h2>Reporting Best Practices</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Monitor Daily (First 7 Days)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Untuk campaign baru, check performa daily di 7 hari pertama untuk catch issues early.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Weekly Reviews (Mature Campaigns)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Untuk campaign yang sudah mature, weekly reviews sudah cukup. Focus pada trends dan
              strategic optimizations.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Use Attribution Windows</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Understand attribution windows (1-day click, 7-day click, 1-day view). Pilih yang
              sesuai dengan sales cycle bisnis Anda.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Compare Time Periods</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Always compare dengan periode sebelumnya untuk identify trends. Gunakan "Compare"
              feature di date picker.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Export untuk Stakeholders</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Setup scheduled exports atau create custom dashboards untuk stakeholders yang perlu
              regular updates.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Data-Driven Optimization">
        <p>
          Good reporting dan analytics adalah foundation dari optimization yang efektif. Invest
          time untuk setup proper reporting structure dan review data secara berkala. Data yang
          baik membuat optimization decisions yang jauh lebih efektif.
        </p>
      </Callout>

      <h2>Advanced Analytics</h2>
      <p>
        Untuk insights yang lebih advanced:
      </p>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Meta Attribution Tool:</strong> Analyze customer journey across multiple
          touchpoints dan channels
        </li>
        <li>
          <strong>Experiments Tool:</strong> Run controlled experiments untuk test strategies
          dengan statistical significance
        </li>
        <li>
          <strong>Custom Conversions:</strong> Track conversions spesifik di website dengan rules
          yang custom
        </li>
        <li>
          <strong>Funnel Analysis:</strong> Analyze drop-off di setiap stage funnel untuk identify
          bottlenecks
        </li>
      </ul>
    </DocLayout>
  )
}
