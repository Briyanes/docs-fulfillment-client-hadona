import ArticleLayout from '@/components/ArticleLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Users, Shield, CheckCircle2, AlertTriangle, UserPlus } from 'lucide-react'

export default function Page() {
  return (
    <ArticleLayout
      title="Menambahkan People ke Ad Account"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      description="Panduan menambahkan orang dan mengatur permission di Ad Account Meta untuk kolaborasi tim"
      prevHref="/agency/business-manager/menautkan-ad-account"
      prevTitle="Menautkan Ad Account"
      nextHref="/agency/business-manager/permission"
      nextTitle="Mengatur Permission"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Menambahkan people (orang) ke Ad Account memungkinkan tim Anda untuk berkolaborasi dalam
          mengelola kampanye iklan. Dengan permission yang tepat, setiap anggota tim dapat bekerja
          sesuai dengan peran mereka tanpa harus berbagi kredensial login pribadi.
        </p>
      </div>

      <h2>Mengapa Perlu Menambahkan People ke Ad Account?</h2>
      <p>Menambahkan people ke Ad Account memberikan beberapa keuntungan:</p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <UserPlus className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Kolaborasi Tim</h3>
          </div>
          <p className="text-sm text-gray-600">
            Izinkan beberapa anggota tim untuk bekerja bersama dalam mengelola kampanye iklan dari
            satu Ad Account.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Keamanan</h3>
          </div>
          <p className="text-sm text-gray-600">
            Berikan akses tanpa harus membagikan kredensial login pribadi, menjaga keamanan akun
            tetap terkontrol.
          </p>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum menambahkan people ke Ad Account, pastikan:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Anda memiliki <strong>permission Admin</strong> pada Ad Account tersebut. Hanya Admin yang
            dapat menambahkan orang lain.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Orang yang akan ditambahkan memiliki <strong>akun Facebook aktif</strong>. Meta hanya
            mengizinkan pengguna dengan akun Facebook aktif untuk ditambahkan.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Ad Account sudah ditautkan ke Business Manager Anda.</div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          Satu Ad Account hanya dapat dimiliki oleh satu Business Manager. Pastikan Ad Account yang
          akan Anda tambahkan people sudah terhubung ke Business Manager Anda sebelum melanjutkan.
        </p>
      </Callout>

      <h2>Level Permission Ad Account</h2>
      <p>
        Ada tiga level permission yang dapat diberikan kepada people di Ad Account, masing-masing
        dengan akses yang berbeda:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Admin Ad Account</h4>
          <p className="mb-2 text-sm text-gray-600">Akses penuh ke Ad Account:</p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>✓ Membuat, mengedit, dan menghapus kampanye iklan</li>
            <li>✓ Mengelola metode pembayaran</li>
            <li>✓ Menambahkan dan menghapus people dari Ad Account</li>
            <li>✓ Mengubah pengaturan Ad Account</li>
            <li>✓ Akses penuh ke laporan dan analytics</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Advertiser</h4>
          <p className="mb-2 text-sm text-gray-600">Akses terbatas untuk mengelola iklan:</p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>✓ Membuat dan mengedit kampanye dan ad sets</li>
            <li>✓ Melihat dan mengedit iklan</li>
            <li>✓ Melihat laporan dan analytics</li>
            <li>✗ TIDAK dapat mengakses pengaturan pembayaran</li>
            <li>✗ TIDAK dapat menambahkan atau menghapus user lain</li>
            <li>✗ TIDAK dapat menghapus Ad Account</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Analyst</h4>
          <p className="mb-2 text-sm text-gray-600">Hanya akses melihat (view-only):</p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>✓ Hanya dapat melihat kampanye dan laporan</li>
            <li>✓ Melihat analytics dan insights</li>
            <li>✗ TIDAK dapat membuat atau mengedit iklan</li>
            <li>✗ TIDAK dapat mengakses pengaturan pembayaran</li>
            <li>✗ TIDAK dapat mengubah pengaturan Ad Account</li>
          </ul>
        </div>
      </div>

      <h2>Cara Menambahkan People ke Ad Account</h2>
      <p>
        Berikut adalah langkah-langkah lengkap untuk menambahkan orang ke Ad Account yang sudah
        ditautkan ke Business Manager:
      </p>

      <StepGuide
        steps={[
          {
            title: 'Buka Business Settings',
            content: (
              <div>
                <p>
                  Login ke{' '}
                  <a
                    href="https://business.facebook.com/settings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary underline"
                  >
                    Business Settings
                  </a>{' '}
                  Meta Business Manager Anda. Klik menu <strong>"Business Settings"</strong> di
                  pojok kiri atas halaman.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Menu Ad Account',
            content: (
              <div>
                <p>
                  Di menu sebelah kiri, klik <strong>"Accounts"</strong> lalu pilih{' '}
                  <strong>"Ad Accounts"</strong>. Anda akan melihat daftar semua Ad Account yang
                  terhubung ke Business Manager Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Ad Account yang Ingin Ditambahkan People',
            content: (
              <div>
                <p>
                  Dari daftar Ad Account, klik pada Ad Account yang ingin Anda tambahkan people.
                  Pastikan Anda memiliki permission Admin untuk Ad Account tersebut.
                </p>
                <Callout type="info" title="Tips">
                  <p>
                    Jika Ad Account tidak muncul dalam daftar, berarti Ad Account tersebut belum
                    ditautkan ke Business Manager Anda. Tautkan terlebih dahulu sebelum menambahkan
                    people.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Klik Tombol "Add People"',
            content: (
              <div>
                <p>
                  Setelah memilih Ad Account, lihat di menu sebelah kanan (bagian atas) dari detail
                  Ad Account. Anda akan melihat tombol <strong>"Add People"</strong>. Klik tombol
                  tersebut.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Orang yang Ingin Ditambahkan',
            content: (
              <div>
                <p>
                  Akan muncul jendela untuk memilih orang. Anda dapat memilih dari daftar people yang
                  sudah ada di Business Manager Anda, atau menambahkan orang baru dengan email
                  mereka.
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Jika orang sudah ada di Business Manager:</strong> Cukup pilih nama mereka
                    dari daftar
                  </li>
                  <li>
                    <strong>Jika orang belum ada:</strong> Masukkan email Facebook mereka dan klik{' '}
                    <strong>"Next"</strong>
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Beri Akses Sesuai Kebutuhan',
            content: (
              <div>
                <p>
                  Setelah memilih orang, tentukan permission level yang sesuai dengan peran mereka:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Admin Ad Account:</strong> Untuk manajer atau pemilik yang membutuhkan
                    akses penuh
                  </li>
                  <li>
                    <strong>Advertiser:</strong> Untuk anggota tim yang membuat dan mengelola kampanye
                    iklan
                  </li>
                  <li>
                    <strong>Analyst:</strong> Untuk yang hanya perlu melihat laporan dan analytics
                  </li>
                </ul>
                <Callout type="warning" title="Prinsip Least Privilege">
                  <p>
                    Berikan permission minimum yang diperlukan untuk melakukan pekerjaan. Jangan
                    memberikan Admin kecuali benar-benar diperlukan. Ini meningkatkan keamanan dan
                    mencegah perubahan yang tidak diinginkan.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Klik "Add People" untuk Konfirmasi',
            content: (
              <div>
                <p>
                  Terakhir, klik tombol <strong>"Confirm"</strong> atau <strong>"Add People"</strong>{' '}
                  untuk menyelesaikan proses. Orang yang ditambahkan akan menerima notifikasi dan
                  segera memiliki akses ke Ad Account sesuai permission yang diberikan.
                </p>
                <p className="mt-2">
                  <strong>Catatan:</strong> Jika orang tersebut belum pernah mengakses Business
                  Manager Anda sebelumnya, mereka mungkin perlu menerima undangan terlebih dahulu
                  melalui email atau notifikasi Facebook.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Best Practices untuk Menambahkan People</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">
            1. Gunakan Prinsip Least Privilege (Minimum Access)
          </h4>
          <p className="text-sm text-gray-600">
            Selalu berikan permission minimum yang diperlukan untuk melakukan pekerjaan. Berikan
            Analyst untuk yang hanya butuh lihat laporan, Advertiser untuk yang manage campaign, dan
            Admin hanya untuk trusted personnel. Ini mengurangi risiko kesalahan dan meningkatkan
            keamanan.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">2. Gunakan Email Bisnis yang Konsisten</h4>
          <p className="text-sm text-gray-600">
            Gunakan email bisnis yang profesional dan konsisten (misalnya{' '}
            <code>nama@perusahaan.com</code>). Hindari menggunakan email pribadi untuk akses
            Business Manager. Email bisnis memudahkan audit dan management permission.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">3. Lakukan Audit Permission Secara Berkala</h4>
          <p className="text-sm text-gray-600">
            Review permission setiap 3-6 bulan untuk memastikan hanya orang yang masih aktif yang
            memiliki akses. Hapus akses untuk anggota tim yang sudah tidak bekerja atau berpindah
            divisi. Update permission sesuai dengan perubahan role.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">4. Sediakan Multiple Admins untuk Backup</h4>
          <p className="text-sm text-gray-600">
            Pastikan ada minimal 2 admin untuk setiap Ad Account penting. Ini menghindari situasi
            di mana Anda terkunci dari Ad Account jika satu admin tidak available atau meninggalkan
            perusahaan.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">5. Dokumentasikan Perubahan Permission</h4>
          <p className="text-sm text-gray-600">
            Catat kapan user ditambah atau dihapus, alasan permission diberikan, dan role mereka.
            Dokumentasi ini memudahkan troubleshooting, compliance audit, dan onboarding anggota
            tim baru.
          </p>
        </div>
      </div>

      <h2>Troubleshooting</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Tombol "Add People" Tidak Muncul
          </h4>
          <p className="text-sm text-gray-600">
            Pastikan Anda memiliki permission <strong>Admin</strong> pada Ad Account tersebut. Hanya
            Admin yang dapat menambahkan orang lain. Jika Anda bukan Admin, hubungi Admin Ad Account
            untuk meminta bantuan.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Orang yang Ditambahkan Tidak Dapat Mengakses Ad Account
          </h4>
          <p className="text-sm text-gray-600">
            Pastikan orang tersebut sudah menerima undangan ke Business Manager (jika applicable) dan
            memiliki permission yang sesuai. Periksa juga apakah Ad Account sudah benar-benar
            ditautkan ke Business Manager. Kadang ada delay beberapa menit sebelum akses aktif.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Tidak Bisa Mengubah Permission Orang Lain
          </h4>
          <p className="text-sm text-gray-600">
            Pastikan Anda memiliki permission <strong>Admin Ad Account</strong>. Orang dengan
            permission Advertiser atau Analyst tidak dapat mengubah permission orang lain. Hubungi
            Admin untuk mengubah permission jika Anda tidak memiliki akses.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Error: Orang Tidak Dapat Ditambahkan
          </h4>
          <p className="text-sm text-gray-600">
            Pastikan email yang digunakan terhubung dengan akun Facebook aktif. Jika orang tersebut
            belum memiliki akun Facebook, mereka perlu membuat akun terlebih dahulu. Pastikan juga
            orang tersebut belum diblokir atau memiliki restriction dari Meta.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Permission Tidak Berfungsi Seperti yang Diharapkan
          </h4>
          <p className="text-sm text-gray-600">
            Refresh halaman Business Settings dan coba lagi. Kadang ada delay dalam sistem Meta untuk
            mengaktifkan permission baru. Jika masalah berlanjut setelah 15-30 menit, coba hapus
            dan tambahkan kembali orang tersebut dengan permission yang benar.
          </p>
        </div>
      </div>

      <Callout type="success" title="Langkah Selanjutnya">
        <p>
          Setelah berhasil menambahkan people ke Ad Account, pelajari lebih lanjut tentang{' '}
          <a
            href="/agency/business-manager/permission"
            className="text-hadona-primary underline"
          >
            Mengatur Permission
          </a>{' '}
          untuk mengelola akses anggota tim secara menyeluruh di Business Manager, termasuk akses
          ke Page, Instagram Account, dan aset lainnya.
        </p>
      </Callout>

      <h2>Referensi Resmi Meta</h2>
      <p>Untuk informasi lebih lanjut, referensi resmi dari Meta:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <a
              href="https://www.facebook.com/business/help/195296697183682"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hadona-primary underline"
            >
              How to add people to your ad account in Meta Ads Manager
            </a>{' '}
            - Guide resmi Meta untuk menambahkan people
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <a
              href="https://www.facebook.com/business/help/155909647811305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hadona-primary underline"
            >
              Ad Account Permissions Overview
            </a>{' '}
            - Penjelasan lengkap tentang roles dan permissions
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <a
              href="https://www.facebook.com/business/help/186007118118684"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hadona-primary underline"
            >
              Remove ad account permissions
            </a>{' '}
            - Cara menghapus atau mengupdate permissions
          </div>
        </li>
      </ul>

      <Callout type="info" title="Tips Tambahan">
        <ul className="space-y-2">
          <li>
            <strong>Informasi Terkini:</strong> Meta secara berkala memperbarui interface dan
            fitur. Selalu periksa dokumentasi resmi untuk informasi terbaru.
          </li>
          <li>
            <strong>Bantuan:</strong> Jika mengalami masalah yang tidak teratasi, hubungi{' '}
            <a
              href="https://www.facebook.com/business/help"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hadona-primary underline"
            >
              Meta Business Help Center
            </a>
            .
          </li>
          <li>
            <strong>Training:</strong> Pastikan anggota tim yang baru ditambahkan mendapatkan
            training yang cukup tentang cara menggunakan Ads Manager sebelum diberikan akses.
          </li>
        </ul>
      </Callout>
    </ArticleLayout>
  )
}
