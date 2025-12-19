import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Settings, Shield, Lock, Eye, Edit, Trash2, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Mengatur Akses User"
      categoryHref="/agency/user-management"
      categoryName="User Management"
      prevHref="/agency/user-management/menambahkan-team"
      prevTitle="Menambahkan Team Member"
      nextHref="/agency/user-management/role-permission"
      nextTitle="Role & Permission"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Mengatur akses user memungkinkan Anda mengontrol apa yang dapat dilihat dan dilakukan oleh
          setiap anggota tim. Halaman ini menjelaskan cara mengubah, menyesuaikan, dan mengelola
          akses user di platform Hadona.
        </p>
      </div>

      <Callout type="info" title="Penting">
        <p>
          Hanya Admin yang dapat mengubah akses user. Perubahan akses akan langsung berlaku setelah
          disimpan.
        </p>
      </Callout>

      <h2>Jenis Akses di Platform Hadona</h2>
      <p>
        Platform Hadona memiliki beberapa jenis akses yang dapat diberikan kepada user:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Eye className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Akses Dashboard</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Mengontrol apakah user dapat melihat dashboard dan metrik utama.
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• View: Dapat melihat semua dashboard</li>
            <li>• Restricted: Hanya melihat dashboard tertentu</li>
            <li>• None: Tidak dapat mengakses dashboard</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Edit className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Akses Campaign Management</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Mengontrol kemampuan user untuk membuat, mengedit, atau menghapus campaign.
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Full: Dapat membuat, mengedit, dan menghapus campaign</li>
            <li>• Edit Only: Hanya dapat mengedit campaign yang sudah ada</li>
            <li>• View Only: Hanya dapat melihat campaign</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Settings className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Akses Settings</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Mengontrol akses ke pengaturan sistem dan konfigurasi.
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Full: Dapat mengubah semua settings</li>
            <li>• Limited: Hanya dapat mengubah settings tertentu</li>
            <li>• None: Tidak dapat mengakses settings</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Akses User Management</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Mengontrol kemampuan untuk menambah, mengedit, atau menghapus user lain.
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Full: Dapat mengelola semua user</li>
            <li>• View Only: Hanya dapat melihat daftar user</li>
            <li>• None: Tidak dapat mengakses user management</li>
          </ul>
        </div>
      </div>

      <h2>Cara Mengubah Akses User</h2>
      <p>
        Ikuti langkah-langkah berikut untuk mengubah akses user yang sudah ada:
      </p>

      <StepGuide
        steps={[
          {
            title: 'Buka Halaman User Management',
            content: (
              <div>
                <p className="mb-2">
                  Login sebagai Admin dan navigasi ke menu <strong>User Management</strong>. Di
                  halaman ini, Anda akan melihat daftar semua user yang terdaftar.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih User yang Akan Diubah Aksesnya',
            content: (
              <div>
                <p className="mb-2">
                  Klik pada user yang ingin Anda ubah aksesnya. Ini akan membuka detail user atau
                  menu dropdown dengan opsi "Edit Access" atau "Manage Permissions".
                </p>
                <Callout type="warning" title="Catatan">
                  <p>
                    Anda tidak dapat mengubah akses sendiri. Jika perlu mengubah akses Anda,
                    minta Admin lain untuk melakukannya.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Buka Menu Edit Akses',
            content: (
              <div>
                <p className="mb-2">
                  Klik tombol <strong>"Edit Access"</strong> atau <strong>"Manage Permissions"</strong>.
                  Ini akan membuka panel atau halaman untuk mengatur akses.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Level Akses Baru',
            content: (
              <div>
                <p className="mb-3">
                  Pilih level akses yang ingin diberikan. Anda dapat memilih dari:
                </p>
                <div className="my-4 space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-red-500" />
                    <strong>Admin</strong> - Akses penuh ke semua fitur
                  </div>
                  <div className="flex items-center gap-2">
                    <Edit className="h-4 w-4 text-blue-500" />
                    <strong>Manager</strong> - Dapat mengelola campaign dan melihat laporan
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-green-500" />
                    <strong>Viewer</strong> - Hanya dapat melihat dashboard dan laporan
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: 'Atur Akses Spesifik (Opsional)',
            content: (
              <div>
                <p className="mb-2">
                  Jika platform mendukung custom permissions, Anda dapat mengatur akses spesifik
                  untuk setiap fitur. Centang atau uncentang checkbox sesuai kebutuhan.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Contoh: User dapat melihat campaign tetapi tidak dapat mengedit budget.
                </p>
              </div>
            ),
          },
          {
            title: 'Simpan Perubahan',
            content: (
              <div>
                <p className="mb-2">
                  Setelah selesai mengatur akses, klik tombol <strong>"Save"</strong> atau{' '}
                  <strong>"Update Access"</strong>. Perubahan akan langsung berlaku.
                </p>
                <Callout type="info" title="Notifikasi">
                  <p>
                    User akan menerima notifikasi email jika akses mereka diubah secara signifikan
                    (misalnya dari Viewer ke Admin).
                  </p>
                </Callout>
              </div>
            ),
          },
        ]}
      />

      <h2>Mengatur Akses Berdasarkan Project/Campaign</h2>
      <p>
        Beberapa platform memungkinkan Anda mengatur akses per project atau campaign. Ini berguna
        jika Anda ingin membatasi user hanya pada project tertentu.
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-3 font-semibold">Cara Mengatur Akses Per Project:</h3>
        <ol className="ml-4 space-y-2 text-sm">
          <li className="list-decimal">
            Buka halaman User Management dan pilih user yang ingin diatur
          </li>
          <li className="list-decimal">
            Klik opsi "Project Access" atau "Campaign Access"
          </li>
          <li className="list-decimal">
            Pilih project/campaign yang dapat diakses oleh user tersebut
          </li>
          <li className="list-decimal">
            Tentukan level akses untuk setiap project (View, Edit, atau Full)
          </li>
          <li className="list-decimal">Simpan perubahan</li>
        </ol>
      </div>

      <h2>Best Practices untuk Mengatur Akses</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong>Prinsip Least Privilege</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Berikan akses minimal yang diperlukan untuk user melakukan tugasnya. Jangan berikan
              akses Admin jika user hanya perlu melihat laporan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong>Review Akses Secara Berkala</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lakukan review akses setiap 3-6 bulan untuk memastikan user masih memerlukan akses
              yang diberikan. Hapus akses yang tidak lagi diperlukan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong>Dokumentasi Perubahan</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Catat setiap perubahan akses yang dilakukan, termasuk alasan perubahan. Ini membantu
              dalam audit dan troubleshooting.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Komunikasi dengan User</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Beri tahu user jika akses mereka diubah, terutama jika akses dikurangi. Ini
              menghindari kebingungan dan membantu user memahami perubahan.
            </p>
          </div>
        </div>
      </div>

      <h2>Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">User masih memiliki akses setelah diubah</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Pastikan perubahan sudah disimpan dengan benar</li>
            <li>• Minta user untuk logout dan login kembali</li>
            <li>• Clear cache browser user</li>
            <li>• Periksa apakah ada multiple roles yang diberikan</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Tidak bisa mengubah akses user tertentu</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Pastikan Anda memiliki akses Admin</li>
            <li>• Periksa apakah user tersebut adalah super admin yang tidak dapat diubah</li>
            <li>• Hubungi support jika masalah berlanjut</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">User kehilangan akses yang seharusnya dimiliki</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Periksa kembali pengaturan akses user</li>
            <li>• Periksa audit log untuk melihat perubahan terakhir</li>
            <li>• Restore akses yang diperlukan</li>
            <li>• Hubungi support jika perlu bantuan</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="Tips Keamanan">
        <p>
          Selalu verifikasi identitas user sebelum memberikan akses tinggi. Gunakan komunikasi
          resmi (email bisnis) untuk konfirmasi perubahan akses penting.
        </p>
      </Callout>
    </DocLayout>
  )
}
