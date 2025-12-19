import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Image, Video, PenTool, Target, CheckCircle2, Lightbulb } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Content Strategy"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/budget-management"
      prevTitle="Budget Management"
      nextHref="/agency/best-practices/troubleshooting-umum"
      nextTitle="Troubleshooting Umum"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Strategi konten yang efektif adalah fondasi kampanye iklan yang sukses. Panduan ini akan
          membantu Anda membuat konten yang menarik, relevan, dan menghasilkan konversi.
        </p>
      </div>

      <h2>Prinsip Dasar Content Strategy</h2>
      <p>
        Konten yang efektif harus memenuhi beberapa kriteria penting. Berikut prinsip dasar yang
        perlu Anda pahami:
      </p>
      <ul>
        <li>
          <strong>Audience-Centric</strong> - Konten harus relevan dengan target audience Anda
        </li>
        <li>
          <strong>Value-Driven</strong> - Berikan value, bukan hanya promosi
        </li>
        <li>
          <strong>Clear CTA</strong> - Call-to-action yang jelas dan actionable
        </li>
        <li>
          <strong>Mobile-First</strong> - Optimalkan untuk mobile karena mayoritas user mobile
        </li>
        <li>
          <strong>Test & Iterate</strong> - Terus test dan perbaiki berdasarkan data
        </li>
      </ul>

      <h2>Format Konten yang Efektif</h2>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Video className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Video Ads</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Format paling efektif untuk engagement dan konversi. Ideal untuk storytelling dan
            demonstrasi produk.
          </p>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Best Practices:</p>
          <ul className="text-xs text-gray-600 dark:text-gray-400">
            <li>• Hook dalam 3 detik pertama</li>
            <li>• Durasi 15-30 detik untuk feed</li>
            <li>• Caption untuk video tanpa suara</li>
            <li>• CTA yang jelas</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Image className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Image Ads</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Efektif untuk quick messaging dan brand awareness. Lebih mudah diproduksi dan cost
            effective.
          </p>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Best Practices:</p>
          <ul className="text-xs text-gray-600 dark:text-gray-400">
            <li>• High-quality images</li>
            <li>• Minimal text overlay (&lt;20%)</li>
            <li>• Bright colors & contrast</li>
            <li>• Clear value proposition</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <PenTool className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Carousel Ads</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Ideal untuk showcase multiple products atau features. Meningkatkan engagement dengan
            swipe interaction.
          </p>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Best Practices:</p>
          <ul className="text-xs text-gray-600 dark:text-gray-400">
            <li>• 3-5 cards optimal</li>
            <li>• Consistent design</li>
            <li>• Clear progression</li>
            <li>• Strong first card</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Target className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Collection Ads</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Perfect untuk e-commerce. Menampilkan katalog produk dalam format yang menarik dan
            mudah di-browse.
          </p>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Best Practices:</p>
          <ul className="text-xs text-gray-600 dark:text-gray-400">
            <li>• Curated product selection</li>
            <li>• High-quality product images</li>
            <li>• Clear pricing</li>
            <li>• Mobile-optimized</li>
          </ul>
        </div>
      </div>

      <h2>Copywriting Best Practices</h2>
      <p>Copy yang efektif dapat meningkatkan CTR dan konversi secara signifikan:</p>

      <h3>1. Headline</h3>
      <ul>
        <li>
          <strong>Hook yang Menarik</strong> - Tangkap perhatian dalam 3-5 kata pertama
        </li>
        <li>
          <strong>Benefit-Focused</strong> - Fokus pada benefit, bukan feature
        </li>
        <li>
          <strong>Specific & Clear</strong> - Hindari generic statements
        </li>
        <li>
          <strong>Length</strong> - Optimal 5-10 kata untuk headline
        </li>
      </ul>

      <h3>2. Primary Text</h3>
      <ul>
        <li>
          <strong>Opening Hook</strong> - Pertanyaan, statistik, atau statement yang menarik
        </li>
        <li>
          <strong>Value Proposition</strong> - Jelaskan apa yang ditawarkan dengan jelas
        </li>
        <li>
          <strong>Social Proof</strong> - Testimoni, reviews, atau angka yang membuktikan kualitas
        </li>
        <li>
          <strong>Length</strong> - Optimal 125-150 karakter untuk engagement
        </li>
        <li>
          <strong>Formatting</strong> - Gunakan line breaks, emoji (maksimal 2-3), dan bullet
          points
        </li>
      </ul>

      <h3>3. Call-to-Action (CTA)</h3>
      <p>Pilih CTA yang sesuai dengan tujuan kampanye:</p>
      <ul>
        <li>
          <strong>Shop Now</strong> - Untuk e-commerce dan direct sales
        </li>
        <li>
          <strong>Learn More</strong> - Untuk awareness dan education
        </li>
        <li>
          <strong>Sign Up</strong> - Untuk lead generation
        </li>
        <li>
          <strong>Download</strong> - Untuk app installs
        </li>
        <li>
          <strong>Contact Us</strong> - Untuk B2B dan services
        </li>
      </ul>

      <h2>Content Pillars untuk Berbagai Tujuan</h2>

      <h3>1. Awareness Campaigns</h3>
      <p>Konten untuk meningkatkan brand awareness:</p>
      <ul>
        <li>Educational content tentang masalah yang diselesaikan produk</li>
        <li>Behind-the-scenes dan company culture</li>
        <li>Industry insights dan thought leadership</li>
        <li>User-generated content dan testimonials</li>
      </ul>

      <h3>2. Consideration Campaigns</h3>
      <p>Konten untuk mempengaruhi keputusan pembelian:</p>
      <ul>
        <li>Product demonstrations dan tutorials</li>
        <li>Comparison dengan competitors</li>
        <li>Case studies dan success stories</li>
        <li>FAQ dan addressing objections</li>
      </ul>

      <h3>3. Conversion Campaigns</h3>
      <p>Konten untuk mendorong action:</p>
      <ul>
        <li>Limited-time offers dan promotions</li>
        <li>Product showcases dengan pricing</li>
        <li>Urgency dan scarcity messaging</li>
        <li>Clear value propositions</li>
      </ul>

      <h2>Content Testing Strategy</h2>
      <p>
        Testing adalah kunci untuk menemukan konten yang perform. Berikut framework testing yang
        efektif:
      </p>

      <div className="my-6 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Variasi untuk Test</th>
              <th>Metric to Track</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Creative</strong>
              </td>
              <td>Video vs Image, Different angles, Different styles</td>
              <td>CTR, Engagement Rate</td>
            </tr>
            <tr>
              <td>
                <strong>Headline</strong>
              </td>
              <td>Benefit vs Feature, Question vs Statement, Length</td>
              <td>CTR, Engagement</td>
            </tr>
            <tr>
              <td>
                <strong>Primary Text</strong>
              </td>
              <td>Long vs Short, Tone (formal vs casual), Emoji usage</td>
              <td>CTR, Engagement, Conversion</td>
            </tr>
            <tr>
              <td>
                <strong>CTA</strong>
              </td>
              <td>Different CTA buttons, CTA placement</td>
              <td>Click Rate, Conversion Rate</td>
            </tr>
            <tr>
              <td>
                <strong>Format</strong>
              </td>
              <td>Single Image vs Carousel, Video vs Static</td>
              <td>CTR, Engagement, Cost per Result</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Content Calendar & Planning</h2>
      <p>Perencanaan konten yang baik memastikan konsistensi dan kualitas:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Weekly Planning</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Plan content untuk 1-2 minggu ke depan</li>
            <li>• Assign content types ke specific days</li>
            <li>• Prepare assets dan copy sebelumnya</li>
            <li>• Review dan approve sebelum publish</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Content Mix</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• 40% Educational/Value-driven content</li>
            <li>• 30% Promotional/Sales content</li>
            <li>• 20% Social proof/Testimonials</li>
            <li>• 10% Behind-the-scenes/Brand content</li>
          </ul>
        </div>
      </div>

      <h2>Mobile-First Content Guidelines</h2>
      <p>
        Karena mayoritas user mengakses Meta dari mobile, pastikan konten Anda mobile-optimized:
      </p>
      <ul>
        <li>
          <strong>Vertical Video</strong> - Format 9:16 untuk Stories dan Reels
        </li>
        <li>
          <strong>Square Format</strong> - Format 1:1 untuk Feed (works well di mobile)
        </li>
        <li>
          <strong>Readable Text</strong> - Font size minimum 16px, high contrast
        </li>
        <li>
          <strong>Thumb-Friendly</strong> - CTA buttons di area yang mudah dijangkau
        </li>
        <li>
          <strong>Fast Loading</strong> - Optimize file size untuk loading cepat
        </li>
        <li>
          <strong>No Sound Required</strong> - Konten harus bisa dipahami tanpa audio
        </li>
      </ul>

      <h2>Content Performance Analysis</h2>
      <p>Analisis performa konten untuk continuous improvement:</p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Track Key Metrics</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Monitor CTR, engagement rate, cost per result, dan conversion rate untuk setiap
              creative.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Identify Patterns</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cari pola dari konten yang perform - apa yang membuat mereka sukses?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Iterate on Winners</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Buat variasi dari konten yang perform dengan angle atau elemen baru.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Document Learnings</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Catat insights dan learnings untuk referensi masa depan.
            </p>
          </div>
        </div>
      </div>

      <h2>Common Content Mistakes</h2>
      <p>Hindari kesalahan umum berikut:</p>
      <ul>
        <li>
          <strong>Too Much Text</strong> - Terlalu banyak text overlay pada image ads
        </li>
        <li>
          <strong>Generic Messaging</strong> - Copy yang tidak spesifik atau tidak relevan
        </li>
        <li>
          <strong>Weak CTA</strong> - CTA yang tidak jelas atau tidak actionable
        </li>
        <li>
          <strong>Poor Quality Assets</strong> - Gambar atau video dengan kualitas rendah
        </li>
        <li>
          <strong>Not Mobile-Optimized</strong> - Konten yang tidak terlihat baik di mobile
        </li>
        <li>
          <strong>No Testing</strong> - Tidak melakukan testing untuk menemukan winner
        </li>
      </ul>

      <Callout type="info" title="Butuh Bantuan Content Strategy?">
        <p>
          Tim Hadona dapat membantu Anda mengembangkan strategi konten yang efektif untuk kampanye
          Anda. Hubungi support kami untuk konsultasi.
        </p>
      </Callout>
    </DocLayout>
  )
}
