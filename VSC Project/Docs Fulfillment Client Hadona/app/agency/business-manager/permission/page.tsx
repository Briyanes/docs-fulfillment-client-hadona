import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Users, Shield, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Mengatur Permission"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      prevHref="/agency/business-manager/menautkan-ad-account"
      prevTitle="Menautkan Ad Account"
      nextHref="/agency/business-manager/2fa"
      nextTitle="Two-Factor Authentication"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Mengatur permission (izin akses) adalah cara untuk mengontrol siapa yang dapat mengakses
          dan melakukan apa di Business Manager dan aset-asetnya. Dengan permission yang tepat,
          Anda dapat memastikan keamanan sambil memungkinkan tim bekerja secara efisien.
        </p>
      </div>

      <h2>Mengapa Permission Penting?</h2>
      <p>Mengatur permission dengan baik memberikan beberapa manfaat:</p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Keamanan</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Melindungi aset bisnis dengan memberikan akses hanya kepada orang yang tepat dengan
            permission yang sesuai.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Users className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Kolaborasi</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Memungkinkan tim bekerja bersama tanpa harus membagikan kredensial login pribadi.
          </p>
        </div>
      </div>

      <h2>Jenis Permission di Business Manager</h2>
      <p>Ada beberapa level permission yang dapat diberikan:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Business Manager Level</h4>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Permission untuk mengelola Business Manager itu sendiri:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <strong>Admin:</strong> Akses penuh ke semua pengaturan Business Manager
            </li>
            <li>
              <strong>Employee:</strong> Dapat mengakses aset yang diberikan akses, tidak dapat
              mengubah pengaturan Business Manager
            </li>
            <li>
              <strong>Finance Editor:</strong> Dapat melihat dan mengelola informasi pembayaran
            </li>
            <li>
              <strong>Finance Analyst:</strong> Hanya dapat melihat informasi pembayaran
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Page Level</h4>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Permission untuk mengelola Facebook Page:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <strong>Admin:</strong> Kontrol penuh termasuk menghapus Page
            </li>
            <li>
              <strong>Editor:</strong> Dapat membuat posting, mengedit, dan menghapus konten
            </li>
            <li>
              <strong>Moderator:</strong> Dapat merespons komentar dan pesan
            </li>
            <li>
              <strong>Advertiser:</strong> Dapat melihat Page dan membuat iklan
            </li>
            <li>
              <strong>Analyst:</strong> Hanya dapat melihat analytics dan insights
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Ad Account Level</h4>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Permission untuk mengelola Ad Account:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <strong>Admin:</strong> Kontrol penuh termasuk pengaturan pembayaran
            </li>
            <li>
              <strong>Advertiser:</strong> Dapat membuat dan mengedit kampanye iklan
            </li>
            <li>
              <strong>Analyst:</strong> Hanya dapat melihat laporan dan analytics
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Instagram Account Level</h4>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Permission untuk mengelola Instagram Account:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <strong>Admin:</strong> Kontrol penuh termasuk menghapus akun
            </li>
            <li>
              <strong>Advertiser:</strong> Dapat membuat iklan dan melihat insights
            </li>
            <li>
              <strong>Analyst:</strong> Hanya dapat melihat analytics
            </li>
          </ul>
        </div>
      </div>

      <h2>Menambahkan Orang ke Business Manager</h2>
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
            title: 'Pilih Users &gt; People',
            content: (
              <div>
                <p>
                  Di menu sebelah kiri, klik <strong>"Users"</strong>, lalu pilih{' '}
                  <strong>"People"</strong>.
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
                  <strong>"Add People"</strong> atau <strong>"Tambahkan Orang"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Masukkan Email',
            content: (
              <div>
                <p>
                  Masukkan alamat email Facebook dari orang yang ingin ditambahkan. Pastikan email
                  tersebut terhubung dengan akun Facebook mereka.
                </p>
                <Callout type="info" title="Tips">
                  <p>
                    Jika orang tersebut belum memiliki akun Facebook, mereka perlu membuat akun
                    terlebih dahulu sebelum dapat ditambahkan ke Business Manager.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Pilih Permission Level',
            content: (
              <div>
                <p>
                  Pilih permission level untuk orang tersebut di Business Manager:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Admin:</strong> Untuk pemilik atau manajer yang membutuhkan akses penuh
                  </li>
                  <li>
                    <strong>Employee:</strong> Untuk anggota tim yang hanya perlu akses ke aset
                    tertentu
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Kirim Undangan',
            content: (
              <div>
                <p>
                  Klik <strong>"Next"</strong> dan kemudian <strong>"Invite"</strong> untuk
                  mengirim undangan. Orang tersebut akan menerima email undangan dan harus
                  menerimanya untuk mendapatkan akses.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Memberikan Akses ke Aset Spesifik</h2>
      <p>
        Setelah menambahkan orang ke Business Manager, Anda perlu memberikan akses ke aset
        spesifik (Page, Ad Account, Instagram):
      </p>
      <StepGuide
        steps={[
          {
            title: 'Pilih Aset yang Ingin Dibagikan',
            content: (
              <div>
                <p>
                  Di Business Settings, pilih jenis aset yang ingin dibagikan (Pages, Ad Accounts,
                  atau Instagram Accounts).
                </p>
              </div>
            ),
          },
          {
            title: 'Klik Aset Tertentu',
            content: (
              <div>
                <p>
                  Klik pada aset tertentu (Page, Ad Account, atau Instagram Account) yang ingin
                  Anda berikan akses.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik Tab "People"',
            content: (
              <div>
                <p>
                  Klik tab <strong>"People"</strong> atau <strong>"Orang"</strong> untuk melihat
                  daftar orang yang memiliki akses.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik "Assign People"',
            content: (
              <div>
                <p>
                  Klik tombol <strong>"Assign People"</strong> atau{' '}
                  <strong>"Tetapkan Orang"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Orang dan Permission',
            content: (
              <div>
                <p>
                  Pilih orang yang ingin diberikan akses dari daftar, lalu pilih permission level
                  yang sesuai dengan kebutuhan mereka.
                </p>
              </div>
            ),
          },
          {
            title: 'Simpan',
            content: (
              <div>
                <p>
                  Klik <strong>"Save Changes"</strong> untuk menyimpan perubahan. Orang tersebut
                  sekarang memiliki akses ke aset dengan permission yang telah ditetapkan.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Prinsip Least Privilege</h2>
      <p>
        Prinsip least privilege berarti memberikan permission minimum yang diperlukan untuk
        melakukan pekerjaan. Ini penting untuk keamanan:
      </p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Analyst untuk Viewer:</strong> Jika seseorang hanya perlu melihat laporan,
            berikan permission Analyst, bukan Admin
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Advertiser untuk Campaign Manager:</strong> Jika seseorang hanya perlu membuat
            iklan, berikan permission Advertiser, bukan Admin
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Editor untuk Content Creator:</strong> Jika seseorang hanya perlu membuat
            posting, berikan permission Editor, bukan Admin
          </div>
        </li>
      </ul>

      <Callout type="warning" title="Keamanan">
        <p>
          Jangan memberikan permission Admin kecuali benar-benar diperlukan. Admin memiliki akses
          penuh termasuk menghapus aset dan mengubah pengaturan penting. Selalu gunakan prinsip
          least privilege.
        </p>
      </Callout>

      <h2>Mengelola Permission yang Sudah Ada</h2>
      <p>Anda dapat mengubah atau menghapus permission kapan saja:</p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Akses aset yang ingin diubah permission-nya di Business Settings
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Klik tab <strong>"People"</strong> untuk melihat daftar orang dengan akses
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Klik pada permission level orang tertentu untuk mengubahnya, atau klik{' '}
            <strong>"Remove"</strong> untuk menghapus akses
          </div>
        </li>
      </ol>

      <h2>Best Practices untuk Permission Management</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">1. Audit Permission Secara Berkala</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lakukan review permission secara berkala (misalnya setiap 3-6 bulan) untuk memastikan
            hanya orang yang masih aktif yang memiliki akses. Hapus akses untuk orang yang sudah
            tidak bekerja di tim.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">2. Gunakan Naming Convention</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gunakan email bisnis yang konsisten dan mudah diidentifikasi. Hindari menggunakan
            email pribadi untuk akses Business Manager.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">3. Dokumentasikan Permission</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Simpan dokumentasi tentang siapa yang memiliki akses apa dan mengapa. Ini akan
            memudahkan audit dan onboarding anggota tim baru.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">4. Multiple Admins untuk Aset Penting</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan ada minimal 2 admin untuk setiap aset penting (Page, Ad Account) untuk
            menghindari kehilangan akses jika satu admin tidak tersedia.
          </p>
        </div>
      </div>

      <h2>Troubleshooting</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Undangan Tidak Diterima
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan email yang digunakan terhubung dengan akun Facebook. Minta orang tersebut
            memeriksa folder spam. Jika masih tidak muncul, coba kirim ulang undangan atau gunakan
            email alternatif.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Tidak Bisa Mengubah Permission
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan Anda memiliki permission Admin di Business Manager atau aset yang ingin
            diubah. Hanya Admin yang dapat mengubah permission orang lain.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Orang Tidak Bisa Mengakses Aset
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan orang tersebut sudah menerima undangan dan memiliki permission yang sesuai di
            aset tersebut. Periksa juga apakah aset sudah benar-benar ditautkan ke Business
            Manager.
          </p>
        </div>
      </div>

      <Callout type="success" title="Langkah Selanjutnya">
        <p>
          Setelah permission diatur dengan baik, langkah penting berikutnya adalah mengaktifkan
          Two-Factor Authentication untuk meningkatkan keamanan Business Manager dan semua aset
          di dalamnya.
        </p>
      </Callout>

      <h2>Tips & Best Practices</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Review Berkala:</strong> Lakukan audit permission setiap 3-6 bulan untuk
          memastikan hanya orang yang aktif yang memiliki akses
        </li>
        <li>
          <strong>Least Privilege:</strong> Selalu berikan permission minimum yang diperlukan
        </li>
        <li>
          <strong>Dokumentasi:</strong> Simpan catatan tentang siapa memiliki akses apa dan mengapa
        </li>
        <li>
          <strong>Multiple Admins:</strong> Pastikan ada backup admin untuk aset penting
        </li>
        <li>
          <strong>Email Bisnis:</strong> Gunakan email bisnis yang profesional untuk akses Business
          Manager
        </li>
      </ul>
    </DocLayout>
  )
}
