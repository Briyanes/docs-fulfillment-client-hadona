import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Target, BarChart3, ShoppingCart, Users, Zap, Shield } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Pengenalan Meta Pixel"
      categoryHref="/whitelist/pixel-setup"
      categoryName="Pixel Setup"
      nextHref="/whitelist/pixel-setup/membuat-pixel"
      nextTitle="Membuat Meta Pixel"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Meta Pixel adalah tool tracking yang memungkinkan Anda mengukur efektivitas iklan dengan
          melacak tindakan yang dilakukan pengunjung di website Anda. Panduan ini akan membantu Anda
          memahami konsep dasar dan manfaat Meta Pixel.
        </p>
      </div>

      <h2>Apa itu Meta Pixel?</h2>
      <p>
        Meta Pixel adalah kode JavaScript kecil yang Anda pasang di website untuk melacak aktivitas
        pengunjung. Pixel mengirimkan data kembali ke Meta, memungkinkan Anda untuk:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <Target className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Track Conversions</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Melacak konversi seperti pembelian, pendaftaran, atau download untuk mengukur ROI iklan
            Anda.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <BarChart3 className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Optimize Campaigns</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Meta menggunakan data pixel untuk mengoptimalkan delivery iklan ke audience yang paling
            mungkin melakukan konversi.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <Users className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Build Custom Audiences</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Membuat custom audience berdasarkan pengunjung website untuk retargeting dan lookalike
            audiences.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <ShoppingCart className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Track E-commerce Events</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Melacak event e-commerce seperti Add to Cart, Initiate Checkout, dan Purchase untuk
            analisis yang lebih detail.
          </p>
        </div>
      </div>

      <h2>Bagaimana Meta Pixel Bekerja?</h2>
      <p>
        Meta Pixel bekerja dengan cara berikut:
      </p>

      <ol className="my-6 ml-6 list-decimal space-y-4">
        <li>
          <strong>Instalasi Pixel</strong> - Kode pixel dipasang di semua halaman website Anda
        </li>
        <li>
          <strong>Tracking Events</strong> - Pixel melacak event seperti PageView, Purchase, AddToCart
          saat pengunjung berinteraksi dengan website
        </li>
        <li>
          <strong>Data Collection</strong> - Data dikirim ke Meta secara real-time atau batch
        </li>
        <li>
          <strong>Campaign Optimization</strong> - Meta menggunakan data ini untuk mengoptimalkan
          delivery iklan dan menemukan audience yang mirip
        </li>
        <li>
          <strong>Reporting</strong> - Anda dapat melihat data di Events Manager dan menggunakannya
          untuk analisis performa
        </li>
      </ol>

      <Callout type="info" title="Penting untuk Diketahui">
        <p>
          Meta Pixel memerlukan cookie untuk berfungsi dengan baik. Pastikan website Anda memiliki
          cookie consent banner yang sesuai dengan regulasi privasi (GDPR, CCPA, dll) jika diperlukan.
        </p>
      </Callout>

      <h2>Jenis Event yang Dapat Dilacak</h2>
      <p>
        Meta Pixel dapat melacak berbagai jenis event. Berikut adalah event standar yang tersedia:
      </p>

      <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">Event</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Deskripsi</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td className="px-4 py-3 text-sm font-medium">PageView</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Terpicu otomatis saat halaman dimuat
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Tracking semua kunjungan website
              </td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 text-sm font-medium">ViewContent</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Melihat konten produk/halaman
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                E-commerce: melihat detail produk
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium">AddToCart</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Menambahkan item ke keranjang
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                E-commerce: tracking minat pembelian
              </td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 text-sm font-medium">InitiateCheckout</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Memulai proses checkout
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                E-commerce: tracking intent pembelian tinggi
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium">Purchase</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Menyelesaikan pembelian
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                E-commerce: konversi utama
              </td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 text-sm font-medium">Lead</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Submit form atau mendaftar
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Lead generation campaigns
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium">CompleteRegistration</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                Menyelesaikan registrasi akun
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                App/Website: tracking sign-ups
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Manfaat Meta Pixel untuk Bisnis Anda</h2>

      <div className="my-8 space-y-4">
        <div className="flex gap-4">
          <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="mb-1 font-semibold">Optimasi Otomatis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Meta menggunakan data pixel untuk secara otomatis mengoptimalkan delivery iklan ke
              orang yang paling mungkin melakukan konversi, meningkatkan ROI kampanye Anda.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Target className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="mb-1 font-semibold">Retargeting yang Akurat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Buat custom audience berdasarkan pengunjung website untuk retargeting yang lebih efektif
              dan relevan.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <BarChart3 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="mb-1 font-semibold">Data-Driven Decisions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dapatkan insight mendalam tentang perilaku pengunjung dan performa kampanye untuk
              membuat keputusan berbasis data.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="mb-1 font-semibold">Attribution yang Akurat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Track konversi dengan akurat dan lihat bagaimana iklan Meta berkontribusi terhadap
              revenue bisnis Anda.
            </p>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Privacy & Compliance">
        <p>
          Pastikan Anda mematuhi regulasi privasi yang berlaku (GDPR, CCPA, dll) saat menggunakan
          Meta Pixel. Berikan informasi yang jelas kepada pengunjung tentang tracking dan berikan
          opsi untuk opt-out jika diperlukan.
        </p>
      </Callout>

      <h2>Persiapan Sebelum Setup</h2>
      <p>
        Sebelum mulai setup Meta Pixel, pastikan Anda memiliki:
      </p>

      <ul className="my-6 ml-6 list-disc space-y-2">
        <li>Akses ke Meta Business Manager atau Meta Ads Manager</li>
        <li>Akses ke website untuk instalasi pixel code</li>
        <li>Pemahaman tentang struktur website dan halaman penting yang perlu di-track</li>
        <li>Daftar event yang ingin dilacak (Purchase, Lead, dll)</li>
        <li>Informasi produk/jasa untuk e-commerce tracking (jika applicable)</li>
      </ul>

      <p className="mt-6">
        Setelah memahami konsep dasar Meta Pixel, Anda siap untuk membuat pixel pertama Anda. Lanjutkan
        ke artikel berikutnya untuk panduan step-by-step membuat Meta Pixel.
      </p>
    </DocLayout>
  )
}
