import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Settings, Target, BarChart3, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Setup Ads Manager"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      nextHref="/agency/ads-setup/membuat-campaign"
      nextTitle="Membuat Campaign"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Ads Manager adalah platform utama untuk membuat, mengelola, dan mengoptimalkan kampanye
          iklan di Meta (Facebook & Instagram). Panduan ini akan membantu Anda melakukan setup awal
          Ads Manager dengan benar.
        </p>
      </div>

      <h2>Apa itu Ads Manager?</h2>
      <p>
        Ads Manager adalah tool gratis dari Meta yang memungkinkan Anda mengelola semua kampanye
        iklan Anda dalam satu dashboard terpusat. Dengan Ads Manager, Anda dapat:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Settings className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Kelola Campaign</h3>
          </div>
          <p className="text-sm text-gray-600">
            Buat, edit, dan kelola semua kampanye iklan Anda dari satu tempat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Target className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Targeting Audience</h3>
          </div>
          <p className="text-sm text-gray-600">
            Setup dan kelola audience targeting untuk mencapai target pasar yang tepat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <BarChart3 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Analytics & Reporting</h3>
          </div>
          <p className="text-sm text-gray-600">
            Monitor performa kampanye dengan analytics dan reporting yang detail.
          </p>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum setup Ads Manager, pastikan Anda memiliki:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Business Manager yang sudah dibuat dan diverifikasi</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Ad Account yang sudah ditautkan ke Business Manager</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Page Facebook atau akun Instagram yang akan digunakan untuk iklan</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Akses admin atau advertiser ke Ad Account</div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          Pastikan Ad Account Anda sudah aktif dan memiliki metode pembayaran yang valid sebelum
          membuat kampanye iklan. Tanpa metode pembayaran, iklan tidak akan bisa berjalan.
        </p>
      </Callout>

      <h2>Langkah-langkah Setup Ads Manager</h2>
      <StepGuide
        steps={[
          {
            title: 'Akses Ads Manager',
            content: (
              <div>
                <p>
                  Login ke Business Manager Anda di{' '}
                  <a
                    href="https://business.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline"
                  >
                    business.facebook.com
                  </a>
                  . Kemudian klik menu <strong>"Ads Manager"</strong> di sidebar kiri atau kunjungi
                  langsung{' '}
                  <a
                    href="https://business.facebook.com/adsmanager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline"
                  >
                    business.facebook.com/adsmanager
                  </a>
                  .
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Ad Account',
            content: (
              <div>
                <p>
                  Di bagian atas Ads Manager, klik dropdown untuk memilih Ad Account yang ingin Anda
                  gunakan. Jika Anda memiliki beberapa Ad Account, pastikan memilih yang benar.
                </p>
                <p className="mt-2">
                  Jika belum memiliki Ad Account, Anda perlu membuatnya terlebih dahulu melalui
                  Business Manager Settings.
                </p>
              </div>
            ),
          },
          {
            title: 'Setup Metode Pembayaran',
            content: (
              <div>
                <p>
                  Klik menu <strong>"Billing"</strong> di sidebar kiri, lalu pilih{' '}
                  <strong>"Payment Methods"</strong>. Tambahkan metode pembayaran yang valid:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Kartu kredit atau debit</li>
                  <li>PayPal (jika tersedia di negara Anda)</li>
                  <li>Invoice (untuk akun dengan spending tinggi)</li>
                </ul>
                <Callout type="info" title="Tips">
                  <p>
                    Pastikan metode pembayaran memiliki saldo yang cukup atau limit kredit yang
                    memadai untuk menjalankan kampanye iklan.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Konfigurasi Pengaturan Akun',
            content: (
              <div>
                <p>Klik menu <strong>"Account Settings"</strong> dan konfigurasi:</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Account Name:</strong> Beri nama yang jelas untuk Ad Account Anda
                  </li>
                  <li>
                    <strong>Currency:</strong> Pilih mata uang yang sesuai (tidak bisa diubah
                    setelah dibuat)
                  </li>
                  <li>
                    <strong>Time Zone:</strong> Pilih time zone yang sesuai dengan lokasi bisnis
                  </li>
                  <li>
                    <strong>Spend Limit:</strong> Atur batas pengeluaran harian (opsional, untuk
                    kontrol budget)
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Verifikasi Page & Instagram',
            content: (
              <div>
                <p>
                  Pastikan Page Facebook dan akun Instagram yang akan digunakan untuk iklan sudah
                  ditautkan ke Business Manager dan memiliki status aktif. Anda dapat mengeceknya
                  di <strong>Business Settings → Pages</strong> dan{' '}
                  <strong>Business Settings → Instagram Accounts</strong>.
                </p>
                <p className="mt-2">
                  Jika Page atau Instagram belum ditautkan, ikuti panduan di bagian Business Manager
                  untuk menautkannya.
                </p>
              </div>
            ),
          },
          {
            title: 'Setup Pixel (Opsional)',
            content: (
              <div>
                <p>
                  Untuk tracking dan optimasi yang lebih baik, setup Facebook Pixel di website Anda.
                  Pixel akan membantu Anda:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Track conversions dari iklan</li>
                  <li>Membuat custom audiences berdasarkan website visitors</li>
                  <li>Optimasi kampanye untuk conversions</li>
                  <li>Retargeting pengunjung website</li>
                </ul>
                <p className="mt-2">
                  Pixel setup dapat dilakukan nanti jika diperlukan. Untuk sekarang, Anda sudah
                  bisa membuat kampanye iklan tanpa Pixel.
                </p>
              </div>
            ),
            optional: true,
          },
        ]}
      />

      <h2>Verifikasi Setup</h2>
      <p>Setelah setup selesai, verifikasi bahwa semua sudah benar:</p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Ad Account Aktif:</strong> Status Ad Account menunjukkan "Active" di Ads Manager
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Metode Pembayaran:</strong> Metode pembayaran sudah ditambahkan dan terverifikasi
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Page & Instagram:</strong> Page dan Instagram sudah ditautkan dan dapat diakses
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Akses Permission:</strong> Anda memiliki akses admin atau advertiser ke Ad Account
          </div>
        </li>
      </ol>

      <Callout type="success" title="Setup Selesai">
        <p>
          Jika semua checklist di atas sudah terpenuhi, Ads Manager Anda siap digunakan! Langkah
          selanjutnya adalah membuat kampanye iklan pertama Anda.
        </p>
      </Callout>

      <h2>Tips & Best Practices</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Gunakan Nama yang Jelas:</strong> Beri nama Ad Account yang jelas dan mudah
          dikenali, terutama jika Anda mengelola multiple accounts.
        </li>
        <li>
          <strong>Atur Spend Limit:</strong> Untuk keamanan, atur spend limit harian terutama jika
          ini adalah akun baru atau Anda masih belajar.
        </li>
        <li>
          <strong>Simpan Informasi Login:</strong> Pastikan informasi login dan akses disimpan dengan
          aman dan dapat diakses oleh tim yang berwenang.
        </li>
        <li>
          <strong>Setup Pixel Secepatnya:</strong> Meskipun opsional, setup Pixel akan sangat membantu
          optimasi kampanye jangka panjang.
        </li>
        <li>
          <strong>Review Pengaturan Secara Berkala:</strong> Lakukan review pengaturan akun secara
          berkala untuk memastikan semuanya masih sesuai.
        </li>
      </ul>

      <h2>Masalah Umum</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Ad Account Tidak Muncul</h3>
          <p className="text-sm text-gray-600">
            Pastikan Ad Account sudah ditautkan ke Business Manager dan Anda memiliki permission
            yang tepat. Cek di Business Settings → Accounts → Ad Accounts.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Metode Pembayaran Ditolak</h3>
          <p className="text-sm text-gray-600">
            Pastikan kartu kredit/debit masih valid dan memiliki saldo yang cukup. Jika masalah
            berlanjut, hubungi bank atau gunakan metode pembayaran lain.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Tidak Bisa Membuat Campaign</h3>
          <p className="text-sm text-gray-600">
            Pastikan Page atau Instagram sudah ditautkan dan memiliki status aktif. Juga pastikan
            Ad Account tidak dalam status "Restricted" atau "Disabled".
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
