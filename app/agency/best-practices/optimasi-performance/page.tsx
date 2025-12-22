import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { TrendingUp, Target, BarChart3, Zap, Lightbulb, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Optimasi Performance"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/keamanan-akun"
      prevTitle="Keamanan Akun"
      nextHref="/agency/best-practices/budget-management"
      nextTitle="Budget Management"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Optimasi performance kampanye iklan adalah proses berkelanjutan untuk meningkatkan ROI dan
          mencapai hasil terbaik dari budget iklan Anda. Panduan ini akan membantu Anda
          mengoptimalkan kampanye Meta Ads secara efektif.
        </p>
      </div>

      <h2>Prinsip Dasar Optimasi</h2>
      <p>
        Optimasi yang efektif memerlukan pendekatan sistematis dan data-driven. Berikut prinsip
        dasar yang perlu Anda pahami:
      </p>
      <ul>
        <li>
          <strong>Data-Driven Decisions</strong> - Gunakan data dan analytics untuk membuat
          keputusan
        </li>
        <li>
          <strong>Continuous Testing</strong> - Terus uji variasi kreatif, audience, dan strategi
        </li>
        <li>
          <strong>Patience & Learning Phase</strong> - Beri waktu algoritma Meta untuk belajar
        </li>
        <li>
          <strong>Focus on Objectives</strong> - Optimasi harus selaras dengan tujuan bisnis
        </li>
      </ul>

      <h2>Key Performance Indicators (KPIs)</h2>
      <p>
        Sebelum mengoptimalkan, tentukan KPIs yang relevan dengan tujuan kampanye Anda. Berikut
        metrik penting yang perlu dipantau:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Target className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Conversion Metrics</h3>
          </div>
          <ul className="text-sm text-gray-600">
            <li>• Conversion Rate (CVR)</li>
            <li>• Cost per Conversion (CPA)</li>
            <li>• Return on Ad Spend (ROAS)</li>
            <li>• Revenue</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <BarChart3 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Engagement Metrics</h3>
          </div>
          <ul className="text-sm text-gray-600">
            <li>• Click-Through Rate (CTR)</li>
            <li>• Cost per Click (CPC)</li>
            <li>• Engagement Rate</li>
            <li>• Video View Rate</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <TrendingUp className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Reach & Frequency</h3>
          </div>
          <ul className="text-sm text-gray-600">
            <li>• Reach</li>
            <li>• Frequency</li>
            <li>• Impressions</li>
            <li>• Cost per 1000 Impressions (CPM)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Zap className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Quality Metrics</h3>
          </div>
          <ul className="text-sm text-gray-600">
            <li>• Relevance Score</li>
            <li>• Quality Ranking</li>
            <li>• Engagement Rate Ranking</li>
            <li>• Conversion Rate Ranking</li>
          </ul>
        </div>
      </div>

      <h2>Strategi Optimasi Berdasarkan Fase Kampanye</h2>

      <h3>Fase 1: Learning Phase (Hari 1-7)</h3>
      <p>
        Pada fase ini, algoritma Meta sedang belajar tentang audience dan performa kampanye Anda.
        Strategi yang tepat:
      </p>
      <ul>
        <li>
          <strong>Jangan Terlalu Sering Edit</strong> - Biarkan algoritma belajar dengan minimal
          intervensi
        </li>
        <li>
          <strong>Budget yang Cukup</strong> - Pastikan budget cukup untuk mendapatkan 50+ konversi
          per ad set
        </li>
        <li>
          <strong>Monitor, Jangan Optimasi</strong> - Pantau metrik tapi jangan membuat perubahan
          besar
        </li>
        <li>
          <strong>Beri Waktu</strong> - Setidaknya 3-7 hari sebelum mengevaluasi performa
        </li>
      </ul>

      <Callout type="warning" title="Penting: Learning Phase">
        <p>
          Menghentikan atau terlalu sering mengubah kampanye selama learning phase dapat mereset
          algoritma dan memperlambat optimasi. Bersabarlah dan biarkan sistem belajar.
        </p>
      </Callout>

      <h3>Fase 2: Optimization Phase (Hari 8+)</h3>
      <p>
        Setelah learning phase selesai, Anda dapat mulai mengoptimalkan kampanye secara aktif:
      </p>

      <StepGuide
        title="Langkah Optimasi Kampanye"
        steps={[
          {
            title: 'Analisis Data Performa',
            content: (
              <div>
                <p>Review metrik berikut selama 7-14 hari terakhir:</p>
                <ul>
                  <li>Ad sets dengan CPA tertinggi</li>
                  <li>Ads dengan CTR terendah</li>
                  <li>Audience yang tidak perform</li>
                  <li>Time of day dan day of week terbaik</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Scale Up yang Perform',
            content: (
              <p>
                Identifikasi ad sets yang perform dengan baik (CPA rendah, ROAS tinggi) dan
                tingkatkan budget secara bertahap (20-30% setiap 2-3 hari).
              </p>
            ),
          },
          {
            title: 'Pause yang Tidak Perform',
            content: (
              <p>
                Hentikan ad sets yang tidak mencapai target CPA atau ROAS setelah learning phase.
                Alihkan budget ke ad sets yang perform lebih baik.
              </p>
            ),
          },
          {
            title: 'Test Variasi Baru',
            content: (
              <div>
                <p>Buat variasi baru untuk elemen yang perform:</p>
                <ul>
                  <li>Kreatif baru dengan angle berbeda</li>
                  <li>Copy baru dengan CTA yang berbeda</li>
                  <li>Audience lookalike baru</li>
                  <li>Placement baru (jika relevan)</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Optimasi Berkelanjutan',
            content: (
              <p>
                Lakukan review dan optimasi setiap 3-7 hari. Jangan terlalu sering mengubah
                (maksimal 2-3 perubahan per minggu per ad set).
              </p>
            ),
          },
        ]}
      />

      <h2>Optimasi Kreatif</h2>
      <p>Kreatif yang efektif adalah kunci sukses kampanye. Berikut tips optimasi kreatif:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Video Ads</h4>
          <ul className="text-sm text-gray-600">
            <li>• Hook yang menarik dalam 3 detik pertama</li>
            <li>• Durasi optimal: 15-30 detik untuk feed, 6-15 detik untuk stories</li>
            <li>• Caption untuk video tanpa suara</li>
            <li>• CTA yang jelas dan visible</li>
            <li>• Format square (1:1) untuk feed, vertical (9:16) untuk stories</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Image Ads</h4>
          <ul className="text-sm text-gray-600">
            <li>• High-quality images dengan resolusi tinggi</li>
            <li>• Minimal text overlay (kurang dari 20% dari gambar)</li>
            <li>• Bright colors dan kontras yang baik</li>
            <li>• Product atau value proposition yang jelas</li>
            <li>• Format yang sesuai placement (square untuk feed)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Copywriting</h4>
          <ul className="text-sm text-gray-600">
            <li>• Headline yang menarik perhatian</li>
            <li>• Benefit-focused, bukan feature-focused</li>
            <li>• CTA yang jelas dan actionable</li>
            <li>• Panjang optimal: 125 karakter untuk primary text</li>
            <li>• Gunakan emoji dengan bijak (maksimal 2-3)</li>
          </ul>
        </div>
      </div>

      <h2>Optimasi Audience</h2>
      <p>Strategi optimasi audience yang efektif:</p>

      <h3>1. Lookalike Audiences</h3>
      <ul>
        <li>
          Gunakan source audience berkualitas tinggi (customers, converters, high-value users)
        </li>
        <li>Test berbagai persentase lookalike (1%, 2-3%, 4-5%)</li>
        <li>Refresh lookalike setiap 30-60 hari</li>
      </ul>

      <h3>2. Interest Targeting</h3>
      <ul>
        <li>Kombinasikan 3-5 interest yang relevan per ad set</li>
        <li>Gunakan interest yang spesifik, bukan terlalu broad</li>
        <li>Test interest baru secara berkala</li>
      </ul>

      <h3>3. Custom Audiences</h3>
      <ul>
        <li>Retargeting berdasarkan website visitors, app users, atau customer lists</li>
        <li>Segmentasi berdasarkan recency dan value</li>
        <li>Exclude converters untuk menghindari wasted spend</li>
      </ul>

      <h2>Optimasi Budget & Bidding</h2>
      <p>Strategi bidding yang tepat dapat meningkatkan performa kampanye:</p>

      <div className="my-6 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Bidding Strategy</th>
              <th>Kapan Digunakan</th>
              <th>Keuntungan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Lowest Cost</strong>
              </td>
              <td>Kampanye baru, budget terbatas</td>
              <td>Maksimalkan konversi dengan budget yang ada</td>
            </tr>
            <tr>
              <td>
                <strong>Cost Cap</strong>
              </td>
              <td>Target CPA spesifik</td>
              <td>Kontrol CPA sambil tetap fleksibel</td>
            </tr>
            <tr>
              <td>
                <strong>Bid Cap</strong>
              </td>
              <td>Budget besar, kontrol ketat</td>
              <td>Kontrol maksimal terhadap bid</td>
            </tr>
            <tr>
              <td>
                <strong>Target Cost</strong>
              </td>
              <td>CPA yang sangat spesifik</td>
              <td>Target CPA yang tepat</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Best Practices Optimasi</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>One Change at a Time</strong>
            <p className="text-sm text-gray-600">
              Lakukan satu perubahan per waktu agar Anda tahu apa yang menyebabkan peningkatan atau
              penurunan performa.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Document Everything</strong>
            <p className="text-sm text-gray-600">
              Catat semua perubahan yang Anda buat, kapan, dan hasilnya. Ini membantu Anda belajar
              dari setiap optimasi.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Test Systematically</strong>
            <p className="text-sm text-gray-600">
              Buat hypothesis, test, analisis hasil, dan iterasi. Jangan test secara random tanpa
              tujuan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Focus on What Matters</strong>
            <p className="text-sm text-gray-600">
              Fokus pada metrik yang benar-benar penting untuk bisnis Anda, bukan vanity metrics.
            </p>
          </div>
        </div>
      </div>

      <h2>Common Optimization Mistakes</h2>
      <p>Hindari kesalahan umum berikut:</p>
      <ul>
        <li>
          <strong>Over-optimization</strong> - Terlalu sering mengubah kampanye dapat merusak
          learning phase
        </li>
        <li>
          <strong>Killing winners too early</strong> - Jangan pause ad yang perform sebelum learning
          phase selesai
        </li>
        <li>
          <strong>Not enough budget</strong> - Budget terlalu kecil tidak cukup untuk algoritma
          belajar
        </li>
        <li>
          <strong>Ignoring data</strong> - Membuat keputusan berdasarkan feeling, bukan data
        </li>
        <li>
          <strong>Not testing</strong> - Tidak membuat variasi baru untuk menemukan winner baru
        </li>
      </ul>

      <Callout type="info" title="Butuh Bantuan Optimasi?">
        <p>
          Tim Hadona siap membantu Anda mengoptimalkan kampanye. Hubungi support kami untuk
          konsultasi strategi optimasi yang sesuai dengan bisnis Anda.
        </p>
      </Callout>
    </DocLayout>
  )
}
