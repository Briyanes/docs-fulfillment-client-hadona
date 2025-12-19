import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { DollarSign, Plus, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Menautkan Ad Account"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      prevHref="/agency/business-manager/menautkan-instagram"
      prevTitle="Menautkan Instagram Account"
      nextHref="/agency/business-manager/permission"
      nextTitle="Mengatur Permission"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Ad Account (Akun Iklan) adalah tempat di mana Anda membuat, mengelola, dan membayar
          kampanye iklan di Meta. Menautkan Ad Account ke Business Manager memungkinkan Anda
          mengelola semua kampanye iklan dari satu tempat terpusat bersama dengan tim Anda.
        </p>
      </div>

      <h2>Mengapa Perlu Menautkan Ad Account?</h2>
      <p>Menautkan Ad Account memberikan beberapa keuntungan penting:</p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <DollarSign className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Manajemen Kampanye</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kelola semua kampanye iklan dari berbagai Ad Account dalam satu dashboard Business
            Manager.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Plus className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Kolaborasi Tim</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Berikan akses ke anggota tim tanpa harus membagikan kredensial login Ad Account.
          </p>
        </div>
      </div>

      <h2>Jenis Ad Account</h2>
      <p>Ada dua jenis Ad Account yang dapat ditautkan:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Ad Account yang Sudah Ada</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ad Account yang sudah dibuat sebelumnya, baik dari akun Facebook pribadi atau Business
            Manager lain. Anda dapat meminta akses atau memindahkannya ke Business Manager Anda.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Ad Account Baru</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Membuat Ad Account baru langsung dari Business Manager. Ini adalah opsi yang
            direkomendasikan untuk memulai dari awal.
          </p>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum menautkan Ad Account, pastikan:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Business Manager sudah dibuat dan aktif</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Anda memiliki akses admin ke Ad Account (jika menautkan yang sudah ada)</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Metode pembayaran sudah siap (untuk Ad Account baru)</div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          Satu Ad Account hanya dapat dimiliki oleh satu Business Manager pada satu waktu. Jika Ad
          Account sudah dimiliki oleh Business Manager lain, Anda harus memindahkannya terlebih
          dahulu atau meminta akses sebagai partner.
        </p>
      </Callout>

      <h2>Membuat Ad Account Baru</h2>
      <p>
        Untuk membuat Ad Account baru langsung dari Business Manager (direkomendasikan):
      </p>
      <StepGuide
        steps={[
          {
            title: 'Akses Business Settings',
            content: (
              <div>
                <p>
                  Login ke Business Manager Anda, lalu klik menu{' '}
                  <strong>"Business Settings"</strong> di pojok kiri atas.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Accounts &gt; Ad Accounts',
            content: (
              <div>
                <p>
                  Di menu sebelah kiri, klik <strong>"Accounts"</strong>, lalu pilih{' '}
                  <strong>"Ad Accounts"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik "Add"',
            content: (
              <div>
                <p>
                  Klik tombol <strong>"Add"</strong> di bagian atas, lalu pilih{' '}
                  <strong>"Create a New Ad Account"</strong> atau{' '}
                  <strong>"Buat Akun Iklan Baru"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Isi Informasi Ad Account',
            content: (
              <div>
                <p>Isi informasi yang diminta:</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Ad Account Name:</strong> Nama untuk Ad Account (untuk identifikasi
                    internal)
                  </li>
                  <li>
                    <strong>Time Zone:</strong> Zona waktu untuk pelaporan dan penjadwalan iklan
                  </li>
                  <li>
                    <strong>Currency:</strong> Mata uang untuk pembayaran iklan
                  </li>
                  <li>
                    <strong>Payment Method:</strong> Metode pembayaran (kartu kredit/debit atau
                    PayPal)
                  </li>
                </ul>
                <Callout type="info" title="Tips">
                  <p>
                    Gunakan nama yang deskriptif untuk Ad Account, misalnya "Brand A - Main
                    Account" atau "Client XYZ - Q1 Campaign". Ini akan memudahkan identifikasi
                    ketika Anda memiliki banyak Ad Account.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Setujui Syarat dan Ketentuan',
            content: (
              <div>
                <p>
                  Baca dan setujui syarat dan ketentuan iklan Meta. Pastikan Anda memahami
                  kebijakan iklan sebelum melanjutkan.
                </p>
              </div>
            ),
          },
          {
            title: 'Selesai',
            content: (
              <div>
                <p>
                  Setelah semua informasi diisi dan disetujui, Ad Account baru akan dibuat dan
                  otomatis ditautkan ke Business Manager Anda. Anda akan melihat Ad Account ID
                  yang dapat digunakan untuk referensi.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Menautkan Ad Account yang Sudah Ada</h2>
      <p>
        Jika Anda sudah memiliki Ad Account yang ingin ditautkan ke Business Manager:
      </p>
      <StepGuide
        steps={[
          {
            title: 'Akses Business Settings &gt; Ad Accounts',
            content: (
              <div>
                <p>
                  Ikuti langkah 1-2 dari panduan sebelumnya untuk mengakses halaman Ad Accounts di
                  Business Settings.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih "Add an Ad Account"',
            content: (
              <div>
                <p>
                  Klik tombol <strong>"Add"</strong>, lalu pilih{' '}
                  <strong>"Add an Ad Account"</strong> atau <strong>"Tambahkan Akun Iklan"</strong>
                  . Anda akan melihat beberapa opsi:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>"Add an Ad Account":</strong> Jika Anda adalah admin dari Ad Account
                    tersebut
                  </li>
                  <li>
                    <strong>"Request Access to an Ad Account":</strong> Jika Ad Account dimiliki
                    oleh Business Manager lain
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Masukkan Ad Account ID',
            content: (
              <div>
                <p>
                  Masukkan Ad Account ID yang ingin ditautkan. Ad Account ID biasanya berupa angka
                  yang dimulai dengan "act_" (contoh: act_123456789).
                </p>
                <p className="mt-2">
                  Anda dapat menemukan Ad Account ID di Ads Manager, di bagian atas halaman atau di
                  Business Settings jika Ad Account sudah ada di Business Manager lain.
                </p>
              </div>
            ),
          },
          {
            title: 'Konfirmasi Penautan',
            content: (
              <div>
                <p>
                  Setelah memasukkan Ad Account ID, klik <strong>"Add Ad Account"</strong> untuk
                  mengonfirmasi. Ad Account akan langsung ditautkan jika Anda adalah admin.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Meminta Akses ke Ad Account Milik Orang Lain</h2>
      <p>
        Jika Ad Account dimiliki oleh Business Manager lain atau orang lain, Anda perlu meminta
        akses:
      </p>
      <StepGuide
        steps={[
          {
            title: 'Pilih "Request Access"',
            content: (
              <div>
                <p>
                  Saat menambahkan Ad Account, pilih opsi{' '}
                  <strong>"Request Access to an Ad Account"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Masukkan Ad Account ID',
            content: (
              <div>
                <p>
                  Masukkan Ad Account ID yang ingin Anda akses, lalu klik{' '}
                  <strong>"Request Access"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Tunggu Persetujuan',
            content: (
              <div>
                <p>
                  Admin Ad Account akan menerima notifikasi untuk menyetujui atau menolak permintaan
                  akses Anda. Setelah disetujui, Ad Account akan muncul di Business Manager Anda
                  dengan permission sesuai yang diberikan admin.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Mengatur Metode Pembayaran</h2>
      <p>
        Setelah Ad Account dibuat atau ditautkan, pastikan metode pembayaran sudah dikonfigurasi:
      </p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Klik Ad Account yang sudah ditautkan di halaman Ad Accounts
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Klik tab <strong>"Payment Methods"</strong> atau <strong>"Metode Pembayaran"</strong>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Klik <strong>"Add Payment Method"</strong> dan ikuti instruksi untuk menambahkan kartu
            kredit/debit atau PayPal
          </div>
        </li>
      </ol>

      <Callout type="info" title="Metode Pembayaran">
        <p>
          Meta menerima berbagai metode pembayaran termasuk kartu kredit/debit (Visa, Mastercard,
          Amex) dan PayPal. Pastikan metode pembayaran yang digunakan aktif dan memiliki saldo
          yang cukup untuk menjalankan iklan.
        </p>
      </Callout>

      <h2>Mengatur Permission Ad Account</h2>
      <p>
        Setelah Ad Account ditautkan, Anda dapat mengatur permission untuk setiap anggota tim:
      </p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Klik Ad Account yang sudah ditautkan di halaman Ad Accounts</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Klik tab <strong>"People"</strong> atau <strong>"Orang"</strong>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Tambahkan anggota tim dan pilih permission yang sesuai:
            <ul className="mt-2 ml-4 space-y-1">
              <li>
                <strong>Admin:</strong> Akses penuh termasuk pengaturan pembayaran
              </li>
              <li>
                <strong>Advertiser:</strong> Dapat membuat dan mengedit kampanye
              </li>
              <li>
                <strong>Analyst:</strong> Hanya dapat melihat laporan dan analytics
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <h2>Troubleshooting</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Ad Account Tidak Bisa Ditautkan
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan Anda memiliki peran admin di Ad Account tersebut. Jika Ad Account sudah dimiliki
            oleh Business Manager lain, Anda harus memindahkannya terlebih dahulu atau meminta
            akses sebagai partner.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Error Saat Membuat Ad Account Baru
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan semua informasi yang dimasukkan benar, terutama zona waktu dan mata uang.
            Pastikan juga metode pembayaran valid dan aktif. Jika masalah berlanjut, coba refresh
            halaman atau hubungi support Meta.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Request Access Ditolak
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hubungi admin Ad Account untuk membahas kebutuhan akses. Pastikan Anda menjelaskan
            alasan mengapa akses diperlukan dan permission apa yang dibutuhkan.
          </p>
        </div>
      </div>

      <Callout type="success" title="Langkah Selanjutnya">
        <p>
          Setelah Ad Account berhasil ditautkan, langkah berikutnya adalah mengatur permission
          untuk anggota tim agar mereka dapat mengakses dan mengelola kampanye iklan sesuai dengan
          peran mereka.
        </p>
      </Callout>

      <h2>Tips & Best Practices</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Naming Convention:</strong> Gunakan nama yang jelas dan konsisten untuk Ad
          Account agar mudah diidentifikasi
        </li>
        <li>
          <strong>Limit Ad Account:</strong> Setiap Business Manager memiliki batas jumlah Ad
          Account. Rencanakan struktur Ad Account dengan baik
        </li>
        <li>
          <strong>Backup Payment:</strong> Tambahkan metode pembayaran cadangan untuk menghindari
          kampanye terhenti jika metode utama bermasalah
        </li>
        <li>
          <strong>Permission Management:</strong> Berikan permission yang sesuai dengan kebutuhan
          setiap anggota tim (prinsip least privilege)
        </li>
        <li>
          <strong>Budget Management:</strong> Setel budget limit di Ad Account untuk mengontrol
          pengeluaran iklan
        </li>
      </ul>
    </DocLayout>
  )
}
