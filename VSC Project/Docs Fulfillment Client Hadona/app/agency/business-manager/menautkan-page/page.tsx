import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Facebook, Link2, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Menautkan Facebook Page"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      prevHref="/agency/business-manager/verifikasi"
      prevTitle="Verifikasi Business Manager"
      nextHref="/agency/business-manager/menautkan-instagram"
      nextTitle="Menautkan Instagram Account"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Menautkan Facebook Page ke Business Manager memungkinkan Anda mengelola halaman dari
          satu tempat terpusat. Ini adalah langkah penting sebelum membuat kampanye iklan, karena
          setiap iklan memerlukan Page yang terhubung ke Business Manager.
        </p>
      </div>

      <h2>Mengapa Perlu Menautkan Page?</h2>
      <p>Menautkan Facebook Page memberikan beberapa keuntungan:</p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Facebook className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Manajemen Terpusat</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kelola semua halaman Facebook dari satu dashboard Business Manager yang terpusat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Link2 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Akses Tim</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Berikan akses ke anggota tim tanpa harus memberikan password akun Facebook pribadi.
          </p>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum menautkan Page, pastikan:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Anda memiliki akses admin ke Facebook Page yang akan ditautkan</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Business Manager sudah dibuat dan aktif</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Page tidak sedang ditautkan ke Business Manager lain (jika ya, lepaskan dulu)</div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          Satu Facebook Page hanya dapat ditautkan ke satu Business Manager pada satu waktu. Jika
          Page sudah ditautkan ke Business Manager lain, Anda harus melepasnya terlebih dahulu
          sebelum menautkannya ke Business Manager baru.
        </p>
      </Callout>

      <h2>Cara Menautkan Page yang Sudah Ada</h2>
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
            title: 'Pilih Accounts &gt; Pages',
            content: (
              <div>
                <p>
                  Di menu sebelah kiri, klik <strong>"Accounts"</strong>, lalu pilih{' '}
                  <strong>"Pages"</strong>.
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
                  <strong>"Add a Page"</strong> atau <strong>"Tambahkan Halaman"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Metode Penambahan',
            content: (
              <div>
                <p>Anda akan melihat beberapa opsi:</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>"Request Access to a Page":</strong> Jika Page dimiliki oleh orang lain
                    atau Business Manager lain
                  </li>
                  <li>
                    <strong>"Add a Page":</strong> Jika Anda adalah admin dari Page tersebut
                  </li>
                  <li>
                    <strong>"Create a New Page":</strong> Untuk membuat Page baru langsung dari
                    Business Manager
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Pilih atau Cari Page',
            content: (
              <div>
                <p>
                  Jika memilih "Add a Page", Anda akan melihat daftar semua Page yang Anda kelola.
                  Pilih Page yang ingin ditautkan, atau gunakan search bar untuk mencari Page
                  tertentu.
                </p>
                <Callout type="info" title="Tips">
                  <p>
                    Jika Page tidak muncul dalam daftar, pastikan Anda memiliki peran admin di Page
                    tersebut. Periksa juga apakah Page sudah ditautkan ke Business Manager lain.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Konfirmasi Penautan',
            content: (
              <div>
                <p>
                  Setelah memilih Page, klik <strong>"Add Page"</strong> untuk mengonfirmasi.
                  Page akan langsung ditautkan ke Business Manager Anda.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Membuat Page Baru dari Business Manager</h2>
      <p>
        Jika Anda belum memiliki Facebook Page, Anda dapat membuatnya langsung dari Business
        Manager:
      </p>
      <StepGuide
        steps={[
          {
            title: 'Akses Business Settings &gt; Pages',
            content: (
              <div>
                <p>
                  Ikuti langkah 1-3 dari panduan sebelumnya untuk mengakses halaman Pages di
                  Business Settings.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih "Create a New Page"',
            content: (
              <div>
                <p>
                  Klik <strong>"Add"</strong>, lalu pilih{' '}
                  <strong>"Create a New Page"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Isi Informasi Page',
            content: (
              <div>
                <p>Isi informasi yang diminta:</p>
                <ul className="mt-2 space-y-1">
                  <li>Nama Page</li>
                  <li>Kategori Page</li>
                  <li>Deskripsi Page</li>
                  <li>Informasi kontak (opsional)</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Selesai',
            content: (
              <div>
                <p>
                  Setelah informasi diisi, Page baru akan dibuat dan otomatis ditautkan ke Business
                  Manager Anda.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Request Access ke Page Milik Orang Lain</h2>
      <p>
        Jika Page yang ingin Anda tautkan dimiliki oleh orang lain atau Business Manager lain, Anda
        perlu meminta akses:
      </p>
      <StepGuide
        steps={[
          {
            title: 'Pilih "Request Access to a Page"',
            content: (
              <div>
                <p>
                  Saat menambahkan Page, pilih opsi{' '}
                  <strong>"Request Access to a Page"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Masukkan Nama atau URL Page',
            content: (
              <div>
                <p>
                  Masukkan nama Page atau URL Facebook Page yang ingin Anda akses, lalu klik{' '}
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
                  Admin Page akan menerima notifikasi untuk menyetujui atau menolak permintaan
                  akses Anda. Setelah disetujui, Page akan muncul di Business Manager Anda dengan
                  permission sesuai yang diberikan admin.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Mengatur Permission Page</h2>
      <p>
        Setelah Page ditautkan, Anda dapat mengatur permission untuk setiap anggota tim:
      </p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Klik Page yang sudah ditautkan di halaman Pages
          </div>
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
            Tambahkan anggota tim dan pilih permission yang sesuai (Admin, Editor, Moderator, atau
            Advertiser)
          </div>
        </li>
      </ol>

      <h2>Troubleshooting</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Page Tidak Muncul dalam Daftar
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan Anda memiliki peran admin di Page tersebut. Periksa juga apakah Page sudah
            ditautkan ke Business Manager lain. Jika ya, minta admin Business Manager tersebut
            untuk melepas Page terlebih dahulu.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Request Access Ditolak
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hubungi admin Page untuk membahas kebutuhan akses. Pastikan Anda menjelaskan alasan
            mengapa akses diperlukan dan permission apa yang dibutuhkan.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Error Saat Menautkan
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Coba refresh halaman dan pastikan koneksi internet stabil. Jika masalah berlanjut,
            coba logout dan login ulang ke Business Manager.
          </p>
        </div>
      </div>

      <Callout type="success" title="Langkah Selanjutnya">
        <p>
          Setelah Page berhasil ditautkan, langkah berikutnya adalah menautkan akun Instagram Anda
          ke Business Manager untuk memungkinkan iklan Instagram.
        </p>
      </Callout>

      <h2>Tips & Best Practices</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Verifikasi Page:</strong> Pastikan Page sudah diverifikasi (blue checkmark)
          untuk meningkatkan kredibilitas
        </li>
        <li>
          <strong>Naming Convention:</strong> Gunakan nama yang konsisten untuk memudahkan
          identifikasi Page di Business Manager
        </li>
        <li>
          <strong>Permission Management:</strong> Berikan permission yang sesuai dengan kebutuhan
          setiap anggota tim (prinsip least privilege)
        </li>
        <li>
          <strong>Backup Admin:</strong> Pastikan ada minimal 2 admin untuk setiap Page penting
          untuk menghindari kehilangan akses
        </li>
      </ul>
    </DocLayout>
  )
}
