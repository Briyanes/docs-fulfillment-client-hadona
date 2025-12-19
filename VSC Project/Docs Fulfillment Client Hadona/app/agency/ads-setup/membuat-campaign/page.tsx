import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Rocket, Target, Image, CheckCircle2, TrendingUp } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Membuat Campaign"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/setup-ads-manager"
      prevTitle="Setup Ads Manager"
      nextHref="/agency/ads-setup/mengatur-budget"
      nextTitle="Mengatur Budget"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Campaign adalah fondasi dari setiap strategi iklan di Meta. Panduan ini akan membantu Anda
          membuat campaign pertama dengan langkah-langkah yang jelas dan best practices yang
          terbukti efektif.
        </p>
      </div>

      <h2>Memahami Struktur Campaign</h2>
      <p>
        Di Meta Ads, struktur iklan terdiri dari 3 level hierarki:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Rocket className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Campaign</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Level tertinggi yang menentukan tujuan iklan (Awareness, Traffic, Conversions, dll).
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Target className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Ad Set</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Level tengah yang mengatur targeting, budget, schedule, dan placement.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Image className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Ad</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Level terendah yang berisi creative (gambar, video, teks) yang akan ditampilkan.
          </p>
        </div>
      </div>

      <h2>Campaign Objectives</h2>
      <p>
        Meta menyediakan berbagai campaign objectives yang disesuaikan dengan tujuan bisnis Anda:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Awareness</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Meningkatkan brand awareness dan reach. Cocok untuk brand baru atau produk baru.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Brand Awareness</li>
            <li>• Reach</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Consideration</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Mendorong engagement dan interaksi dengan brand Anda.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Traffic (ke website atau app)</li>
            <li>• Engagement (likes, comments, shares)</li>
            <li>• App Installs</li>
            <li>• Video Views</li>
            <li>• Lead Generation</li>
            <li>• Messages</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Conversion</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Mendorong aksi spesifik yang bernilai bisnis seperti pembelian atau registrasi.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Conversions (pembelian, registrasi, dll)</li>
            <li>• Catalog Sales</li>
            <li>• Store Traffic</li>
          </ul>
        </div>
      </div>

      <Callout type="info" title="Tips Memilih Objective">
        <p>
          Pilih objective yang sesuai dengan tujuan bisnis Anda. Meta akan mengoptimalkan algoritma
          berdasarkan objective yang dipilih. Misalnya, jika tujuan Anda adalah penjualan, pilih
          "Conversions" bukan "Traffic".
        </p>
      </Callout>

      <h2>Langkah-langkah Membuat Campaign</h2>
      <StepGuide
        steps={[
          {
            title: 'Buka Ads Manager',
            content: (
              <div>
                <p>
                  Login ke Ads Manager di{' '}
                  <a
                    href="https://business.facebook.com/adsmanager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline"
                  >
                    business.facebook.com/adsmanager
                  </a>
                  . Pastikan Ad Account yang benar sudah dipilih.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik "Create"',
            content: (
              <div>
                <p>
                  Klik tombol hijau <strong>"Create"</strong> di pojok kiri atas, atau gunakan
                  shortcut <strong>Ctrl/Cmd + K</strong> untuk quick create.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Campaign Objective',
            content: (
              <div>
                <p>
                  Pilih objective yang sesuai dengan tujuan kampanye Anda. Untuk pemula, kami
                  merekomendasikan:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Traffic:</strong> Jika tujuan utama adalah mengarahkan traffic ke website
                  </li>
                  <li>
                    <strong>Engagement:</strong> Jika ingin meningkatkan likes, comments, atau shares
                  </li>
                  <li>
                    <strong>Conversions:</strong> Jika ingin mendorong pembelian atau aksi spesifik
                    (perlu Pixel setup)
                  </li>
                </ul>
                <p className="mt-2">
                  Setelah memilih, klik <strong>"Continue"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Beri Nama Campaign',
            content: (
              <div>
                <p>
                  Di bagian <strong>"Campaign Details"</strong>, beri nama campaign yang jelas dan
                  deskriptif. Gunakan format yang konsisten, misalnya:
                </p>
                <ul className="mt-2 space-y-1">
                  <li><code>[Objective] - [Product] - [Date]</code></li>
                  <li>Contoh: <code>Traffic - Product Launch - Jan 2024</code></li>
                </ul>
                <Callout type="info" title="Tips">
                  <p>
                    Gunakan naming convention yang konsisten untuk memudahkan tracking dan reporting
                    di kemudian hari.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Konfigurasi Campaign Settings',
            content: (
              <div>
                <p>Konfigurasi pengaturan campaign:</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Campaign Budget Optimization (CBO):</strong> Aktifkan untuk membiarkan
                    Meta mengoptimalkan budget secara otomatis di semua Ad Sets
                  </li>
                  <li>
                    <strong>Special Ad Categories:</strong> Pilih jika iklan Anda termasuk kategori
                    khusus (perumahan, pekerjaan, kredit)
                  </li>
                  <li>
                    <strong>Buying Type:</strong> Biasanya "Auction" (default)
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Setup Ad Set',
            content: (
              <div>
                <p>
                  Di level Ad Set, konfigurasi:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Ad Set Name:</strong> Beri nama yang jelas untuk Ad Set
                  </li>
                  <li>
                    <strong>Budget:</strong> Atur budget harian atau lifetime budget (akan dibahas
                    lebih detail di halaman berikutnya)
                  </li>
                  <li>
                    <strong>Audience:</strong> Pilih atau buat audience targeting (akan dibahas lebih
                    detail di halaman Setup Audience)
                  </li>
                  <li>
                    <strong>Placements:</strong> Pilih di mana iklan akan ditampilkan (Facebook,
                    Instagram, Messenger, dll)
                  </li>
                  <li>
                    <strong>Schedule:</strong> Atur kapan iklan akan berjalan
                  </li>
                </ul>
                <p className="mt-2">
                  Untuk sekarang, Anda bisa menggunakan default settings dan mengubahnya nanti.
                </p>
              </div>
            ),
          },
          {
            title: 'Buat Ad Creative',
            content: (
              <div>
                <p>
                  Di level Ad, buat creative yang menarik:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Format:</strong> Pilih format (Single Image, Video, Carousel, dll)
                  </li>
                  <li>
                    <strong>Media:</strong> Upload gambar atau video (minimal 1080x1080px untuk
                    square, 1200x628px untuk landscape)
                  </li>
                  <li>
                    <strong>Primary Text:</strong> Tulis copy yang menarik dan relevan (maksimal
                    125 karakter untuk optimal)
                  </li>
                  <li>
                    <strong>Headline:</strong> Tulis headline yang catchy (maksimal 40 karakter)
                  </li>
                  <li>
                    <strong>Description:</strong> Tambahkan deskripsi (opsional, maksimal 125
                    karakter)
                  </li>
                  <li>
                    <strong>Call-to-Action (CTA):</strong> Pilih CTA button yang sesuai (Learn More,
                    Shop Now, Sign Up, dll)
                  </li>
                </ul>
                <Callout type="warning" title="Penting">
                  <p>
                    Pastikan creative memenuhi{' '}
                    <a
                      href="https://www.facebook.com/policies/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hadona-primary hover:underline"
                    >
                      Facebook Advertising Policies
                    </a>
                    . Iklan yang melanggar policy akan ditolak atau dihentikan.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Review & Publish',
            content: (
              <div>
                <p>
                  Sebelum publish, review semua pengaturan:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Objective sudah sesuai</li>
                  <li>Budget sudah diatur dengan benar</li>
                  <li>Audience targeting sudah tepat</li>
                  <li>Creative sudah menarik dan sesuai policy</li>
                  <li>Landing page (jika ada) sudah berfungsi dengan baik</li>
                </ul>
                <p className="mt-2">
                  Setelah yakin semuanya benar, klik <strong>"Publish"</strong>. Campaign akan masuk
                  ke review process (biasanya 15 menit - 24 jam).
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Best Practices untuk Campaign Baru</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Mulai dengan Budget Kecil</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mulai dengan budget kecil ($10-20/hari) untuk testing, lalu scale up jika performa
              bagus.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Test Multiple Creatives</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Buat 3-5 variasi creative dalam satu Ad Set untuk melihat mana yang performa terbaik.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Gunakan Automatic Placements</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Biarkan Meta memilih placement terbaik secara otomatis untuk hasil optimal.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Monitor Performa Harian</h3>
            <p className="text-sm text-gray-400">
              Cek performa campaign setiap hari di 3-7 hari pertama untuk optimasi cepat.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Campaign Berhasil Dibuat">
        <p>
          Setelah campaign dipublish, tunggu review dari Meta. Setelah approved, campaign akan mulai
          berjalan. Monitor performa dan lakukan optimasi sesuai kebutuhan.
        </p>
      </Callout>

      <h2>Masalah Umum</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Campaign Ditolak</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Cek email atau notification untuk alasan penolakan. Biasanya karena melanggar policy,
            creative tidak jelas, atau landing page bermasalah. Perbaiki dan submit ulang.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Campaign Tidak Berjalan</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan budget sudah diatur, metode pembayaran valid, dan campaign status "Active".
            Cek juga apakah ada error di Ad Set atau Ad level.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Tidak Ada Impressions</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Audience targeting mungkin terlalu sempit. Coba perlebar audience atau gunakan
            Automatic Placements untuk reach yang lebih luas.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
