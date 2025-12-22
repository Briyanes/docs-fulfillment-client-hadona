import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { FlaskConical, Target, Image, Users, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="A/B Testing"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/optimasi-campaign"
      prevTitle="Optimasi Campaign"
      nextHref="/agency/ads-setup/reporting-analytics"
      nextTitle="Reporting & Analytics"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          A/B Testing adalah metode untuk membandingkan dua atau lebih variasi untuk menemukan mana
          yang performa terbaik. Panduan ini akan membantu Anda setup dan menjalankan A/B test yang
          efektif.
        </p>
      </div>

      <h2>Mengapa A/B Testing Penting?</h2>
      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <FlaskConical className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Data-Driven Decisions</h3>
          </div>
          <p className="text-sm text-gray-600">
            Membuat keputusan berdasarkan data, bukan asumsi atau feeling.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Target className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Continuous Improvement</h3>
          </div>
          <p className="text-sm text-gray-600">
            Meningkatkan performa campaign secara berkelanjutan melalui iterasi testing.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Image className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Lower CPA</h3>
          </div>
          <p className="text-sm text-gray-600">
            Menemukan creative dan strategy terbaik untuk menurunkan Cost Per Acquisition.
          </p>
        </div>
      </div>

      <h2>Apa yang Bisa Di-test?</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Creative Elements</h3>
          <ul className="text-sm text-gray-600">
            <li>• Image vs Video</li>
            <li>• Berbagai style creative (lifestyle vs product shot)</li>
            <li>• Warna, komposisi, atau angle yang berbeda</li>
            <li>• Format (Single Image vs Carousel vs Stories)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Copy & Messaging</h3>
          <ul className="text-sm text-gray-600">
            <li>• Headline variations (benefit-focused vs feature-focused)</li>
            <li>• Primary text (short vs long, different hooks)</li>
            <li>• Value propositions</li>
            <li>• CTA buttons (Learn More vs Shop Now vs Sign Up)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Targeting & Placement</h3>
          <ul className="text-sm text-gray-600">
            <li>• Audience types (Saved vs Custom vs Lookalike)</li>
            <li>• Lookalike percentages (1% vs 5% vs 10%)</li>
            <li>• Placement (Feed vs Stories vs Reels)</li>
            <li>• Age ranges atau gender</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Campaign Settings</h3>
          <ul className="text-sm text-gray-600">
            <li>• Objectives (Traffic vs Conversions)</li>
            <li>• Bid strategies (Lowest Cost vs Cost Cap)</li>
            <li>• Campaign Budget Optimization ON vs OFF</li>
            <li>• Daily budget amounts</li>
          </ul>
        </div>
      </div>

      <Callout type="warning" title="Test Satu Variabel Saja">
        <p>
          Untuk A/B test yang valid, hanya test satu variabel per test. Jika test multiple variables
          sekaligus, Anda tidak tahu mana yang menyebabkan perbedaan performa. Misalnya, jangan
          test creative DAN audience secara bersamaan.
        </p>
      </Callout>

      <h2>Langkah-langkah Setup A/B Test</h2>
      <StepGuide
        steps={[
          {
            title: 'Tentukan Hypothesis',
            content: (
              <div>
                <p>
                  Mulai dengan hypothesis yang jelas. Contoh:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>"Video ads akan memiliki CTR lebih tinggi daripada image ads"</li>
                  <li>"Lookalike 1% akan memiliki CPA lebih rendah daripada Lookalike 5%"</li>
                  <li>"Headline benefit-focused akan convert lebih baik daripada feature-focused"</li>
                </ul>
                <p className="mt-2">
                  Hypothesis yang jelas membantu Anda fokus pada test yang meaningful.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Metric untuk Diukur',
            content: (
              <div>
                <p>
                  Tentukan primary metric yang akan digunakan untuk menentukan winner:
                </p>
                <ul className="mt-2 space-y-1">
                  <li><strong>CTR:</strong> Untuk test creative quality</li>
                  <li><strong>CPC:</strong> Untuk test efficiency</li>
                  <li><strong>CVR:</strong> Untuk test conversion effectiveness</li>
                  <li><strong>CPA:</strong> Untuk test overall performance</li>
                  <li><strong>ROAS:</strong> Untuk test profitability</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Setup Test Structure',
            content: (
              <div>
                <p>
                  Ada dua cara setup A/B test di Meta:
                </p>
                <p className="mt-2"><strong>Option 1: Meta's A/B Test Tool</strong></p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>• Klik "A/B Test" button di Ads Manager</li>
                  <li>• Pilih campaign yang ingin di-test</li>
                  <li>• Pilih variabel yang ingin di-test</li>
                  <li>• Meta akan split traffic secara otomatis 50/50</li>
                </ul>
                <p className="mt-2"><strong>Option 2: Manual Split Testing</strong></p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>• Buat 2+ Ad Sets dengan variabel berbeda</li>
                  <li>• Set budget yang sama untuk setiap Ad Set</li>
                  <li>• Jalankan secara parallel</li>
                  <li>• Compare performance manual</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Set Budget & Duration',
            content: (
              <div>
                <p>
                  Untuk A/B test yang valid:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Budget:</strong> Minimal $10-20/hari per variation untuk mendapatkan
                    data yang cukup
                  </li>
                  <li>
                    <strong>Duration:</strong> Minimal 7 hari atau hingga mencapai statistical
                    significance (biasanya perlu 100+ conversions per variation)
                  </li>
                  <li>
                    <strong>Sample Size:</strong> Semakin besar sample size, semakin valid hasilnya
                  </li>
                </ul>
                <Callout type="info" title="Statistical Significance">
                  <p>
                    Test harus mencapai statistical significance (95%+) sebelum declare winner.
                    Jangan stop test terlalu cepat hanya karena satu variation sedikit lebih baik.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Launch Test',
            content: (
              <div>
                <p>
                  Launch semua variations secara bersamaan untuk kondisi yang fair. Jangan launch
                  variation kedua beberapa hari setelah yang pertama karena kondisi market bisa
                  berubah.
                </p>
              </div>
            ),
          },
          {
            title: 'Monitor & Analyze',
            content: (
              <div>
                <p>
                  Monitor performa secara berkala tapi jangan membuat conclusions terlalu cepat:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Day 1-3: Monitor untuk memastikan tidak ada error</li>
                  <li>Day 3-7: Mulai lihat trends tapi belum conclusive</li>
                  <li>Day 7+: Analyze data dan tentukan winner</li>
                </ul>
                <p className="mt-2">
                  Jangan stop test sebelum mencapai statistical significance atau minimal 7 hari.
                </p>
              </div>
            ),
          },
          {
            title: 'Implement Winner',
            content: (
              <div>
                <p>
                  Setelah ada winner yang clear:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Pause losing variation</li>
                  <li>Alokasikan budget ke winning variation</li>
                  <li>Document insights untuk future tests</li>
                  <li>Setup new test untuk continue optimization</li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <h2>Best Practices untuk A/B Testing</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Test One Variable at a Time</h3>
            <p className="text-sm text-gray-600">
              Hanya test satu variabel per test untuk hasil yang valid. Multi-variable testing
              membutuhkan sample size yang jauh lebih besar.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Run Tests Simultaneously</h3>
            <p className="text-sm text-gray-600">
              Jalankan semua variations secara bersamaan untuk kondisi yang fair. External factors
              (hari, waktu, seasonality) dapat mempengaruhi hasil.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Wait for Statistical Significance</h3>
            <p className="text-sm text-gray-600">
              Jangan declare winner terlalu cepat. Tunggu hingga mencapai 95%+ confidence level
              atau minimal 7 hari dengan 100+ conversions per variation.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Document Everything</h3>
            <p className="text-sm text-gray-600">
              Document hypothesis, setup, results, dan insights. Ini membantu learning jangka
              panjang dan menghindari test yang sama berulang kali.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Test Continuously</h3>
            <p className="text-sm text-gray-600">
              A/B testing adalah proses berkelanjutan. Selalu ada room untuk improvement. Setelah
              satu test selesai, setup test berikutnya.
            </p>
          </div>
        </div>
      </div>

      <h2>Common A/B Testing Mistakes</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="mb-2 font-semibold text-red-800">Stopping Test Terlalu Cepat</h3>
          <p className="text-sm text-red-700">
            Membuat conclusions setelah 1-2 hari atau dengan sample size terlalu kecil. Ini
            menghasilkan false positives dan bad decisions.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="mb-2 font-semibold text-red-800">Testing Multiple Variables</h3>
          <p className="text-sm text-red-700">
            Test creative DAN audience DAN bid strategy sekaligus. Ini membuat tidak jelas mana
            yang menyebabkan perbedaan performa.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="mb-2 font-semibold text-red-800">Tidak Equal Budget</h3>
          <p className="text-sm text-red-700">
            Memberikan budget berbeda untuk setiap variation. Ini membuat comparison tidak fair
            karena sample size berbeda.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="mb-2 font-semibold text-red-800">Tidak Document Insights</h3>
          <p className="text-sm text-red-700">
            Tidak document results dan insights. Ini membuat learning hilang dan mungkin test hal
            yang sama berulang kali.
          </p>
        </div>
      </div>

      <Callout type="success" title="Keep Testing">
        <p>
          A/B testing yang konsisten adalah kunci untuk continuous improvement. Even jika campaign
          sudah profitable, selalu ada room untuk optimization. Setup testing framework dan jalankan
          tests secara berkala untuk maximize ROI.
        </p>
      </Callout>
    </DocLayout>
  )
}
