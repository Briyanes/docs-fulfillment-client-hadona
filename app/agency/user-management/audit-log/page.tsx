import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { FileText, Search, Filter, Download, Clock, User, Shield, AlertCircle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Audit Log"
      categoryHref="/agency/user-management"
      categoryName="User Management"
      prevHref="/agency/user-management/role-permission"
      prevTitle="Role & Permission"
      nextHref="/agency/user-management/monitoring"
      nextTitle="Monitoring Aktivitas"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Audit Log adalah catatan lengkap semua aktivitas yang dilakukan oleh user di platform
          Hadona. Fitur ini membantu Anda melacak perubahan, mengidentifikasi masalah, dan
          memastikan keamanan sistem.
        </p>
      </div>

      <Callout type="info" title="Penting">
        <p>
          Hanya Admin yang dapat mengakses Audit Log. Semua aktivitas user dicatat secara otomatis
          dan tidak dapat dihapus atau dimodifikasi.
        </p>
      </Callout>

      <h2>Apa itu Audit Log?</h2>
      <p>
        Audit Log adalah sistem pencatatan otomatis yang mencatat setiap aktivitas penting yang
        dilakukan di platform Hadona. Setiap entry dalam audit log berisi informasi tentang:
      </p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <User className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">User yang Melakukan Aksi</h3>
            <p className="text-sm text-gray-600">
              Nama dan email user yang melakukan aktivitas
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Clock className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Waktu dan Tanggal</h3>
            <p className="text-sm text-gray-600">
              Timestamp lengkap kapan aktivitas dilakukan
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <FileText className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Jenis Aktivitas</h3>
            <p className="text-sm text-gray-600">
              Tipe aksi yang dilakukan (create, update, delete, login, dll)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Shield className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Detail Perubahan</h3>
            <p className="text-sm text-gray-600">
              Informasi detail tentang apa yang diubah (nilai sebelum dan sesudah)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <AlertCircle className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">IP Address dan Device</h3>
            <p className="text-sm text-gray-600">
              Informasi keamanan tentang dari mana aktivitas dilakukan
            </p>
          </div>
        </div>
      </div>

      <h2>Aktivitas yang Dicatat dalam Audit Log</h2>
      <p>
        Berikut adalah jenis aktivitas yang secara otomatis dicatat dalam Audit Log:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-3 font-semibold">User Management</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Menambahkan user baru</li>
            <li>• Mengubah role atau permission user</li>
            <li>• Menghapus user</li>
            <li>• Mengubah informasi user (nama, email, dll)</li>
            <li>• Aktivasi atau deaktivasi akun</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-3 font-semibold">Campaign Management</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Membuat campaign baru</li>
            <li>• Mengedit campaign (termasuk perubahan budget, targeting, dll)</li>
            <li>• Menghapus campaign</li>
            <li>• Mengaktifkan atau menonaktifkan campaign</li>
            <li>• Mengubah status campaign</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-3 font-semibold">Settings & Configuration</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Mengubah pengaturan sistem</li>
            <li>• Mengubah konfigurasi Business Manager</li>
            <li>• Mengubah integrasi dengan platform lain</li>
            <li>• Mengubah notification settings</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-3 font-semibold">Security Events</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Login dan logout</li>
            <li>• Gagal login (failed login attempts)</li>
            <li>• Perubahan password</li>
            <li>• Aktivasi 2FA</li>
            <li>• Akses dari IP atau device baru</li>
          </ul>
        </div>
      </div>

      <h2>Cara Mengakses Audit Log</h2>
      <p>
        Untuk mengakses Audit Log, ikuti langkah-langkah berikut:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Langkah 1: Login sebagai Admin</h3>
          </div>
          <p className="text-sm text-gray-600">
            Pastikan Anda login dengan akun yang memiliki role Admin. Hanya Admin yang dapat
            mengakses Audit Log.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <FileText className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Langkah 2: Buka Menu User Management</h3>
          </div>
          <p className="text-sm text-gray-600">
            Navigasi ke menu <strong>User Management</strong> di sidebar, kemudian klik opsi{' '}
            <strong>"Audit Log"</strong> atau <strong>"Activity Log"</strong>.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Search className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Langkah 3: Gunakan Filter dan Search</h3>
          </div>
          <p className="text-sm text-gray-600">
            Gunakan filter untuk mencari aktivitas spesifik berdasarkan user, tanggal, atau jenis
            aktivitas. Anda juga dapat menggunakan search bar untuk mencari keyword tertentu.
          </p>
        </div>
      </div>

      <h2>Menggunakan Filter di Audit Log</h2>
      <p>
        Audit Log menyediakan berbagai filter untuk membantu Anda menemukan informasi yang
        diperlukan:
      </p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <Filter className="h-4 w-4 text-hadona-primary" />
            <strong>Filter berdasarkan User</strong>
          </div>
          <p className="text-sm text-gray-600">
            Pilih user tertentu untuk melihat hanya aktivitas yang dilakukan oleh user tersebut.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <Filter className="h-4 w-4 text-hadona-primary" />
            <strong>Filter berdasarkan Tanggal</strong>
          </div>
          <p className="text-sm text-gray-600">
            Pilih rentang tanggal untuk melihat aktivitas dalam periode tertentu. Dapat memilih
            hari ini, minggu ini, bulan ini, atau custom date range.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <Filter className="h-4 w-4 text-hadona-primary" />
            <strong>Filter berdasarkan Jenis Aktivitas</strong>
          </div>
          <p className="text-sm text-gray-600">
            Filter berdasarkan kategori aktivitas seperti User Management, Campaign Changes,
            Settings, atau Security Events.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <Filter className="h-4 w-4 text-hadona-primary" />
            <strong>Filter berdasarkan Status</strong>
          </div>
          <p className="text-sm text-gray-600">
            Filter berdasarkan status aktivitas seperti Success, Failed, atau Warning.
          </p>
        </div>
      </div>

      <h2>Mengekspor Audit Log</h2>
      <p>
        Anda dapat mengekspor data Audit Log untuk keperluan dokumentasi atau analisis lebih
        lanjut:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-white p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Download className="h-5 w-5 text-hadona-primary" />
          </div>
          <h3 className="text-lg font-semibold">Cara Mengekspor</h3>
        </div>
        <ol className="ml-4 space-y-2 text-sm">
          <li className="list-decimal">
            Terapkan filter yang diinginkan untuk mempersempit data yang akan diekspor
          </li>
          <li className="list-decimal">
            Klik tombol <strong>"Export"</strong> atau <strong>"Download"</strong> di pojok kanan
            atas
          </li>
          <li className="list-decimal">
            Pilih format ekspor: CSV atau PDF
          </li>
          <li className="list-decimal">
            File akan diunduh dan dapat dibuka dengan Excel, Google Sheets, atau PDF reader
          </li>
        </ol>
        <Callout type="info" title="Catatan">
          <p>
            Ekspor akan mencakup semua data yang terlihat di halaman saat ini. Pastikan filter
            sudah diatur dengan benar sebelum mengekspor.
          </p>
        </Callout>
      </div>

      <h2>Menggunakan Audit Log untuk Troubleshooting</h2>
      <p>
        Audit Log sangat berguna untuk troubleshooting dan investigasi masalah:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">Mencari Perubahan yang Tidak Diketahui</h3>
          <p className="mb-2 text-sm text-gray-600">
            Jika ada perubahan yang tidak diharapkan, gunakan Audit Log untuk melihat siapa yang
            melakukan perubahan dan kapan.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Contoh:</strong> Budget campaign tiba-tiba berubah. Filter Audit Log berdasarkan
            campaign tersebut dan lihat siapa yang mengubah budget dan kapan.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">Investigasi Masalah Keamanan</h3>
          <p className="mb-2 text-sm text-gray-600">
            Gunakan Audit Log untuk melihat aktivitas mencurigakan seperti login dari IP yang tidak
            dikenal atau multiple failed login attempts.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Contoh:</strong> Filter berdasarkan Security Events dan periksa failed login
            attempts untuk mengidentifikasi potensi serangan brute force.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">Melacak Perubahan Konfigurasi</h3>
          <p className="mb-2 text-sm text-gray-600">
            Jika ada masalah dengan konfigurasi, gunakan Audit Log untuk melihat riwayat perubahan
            dan mengidentifikasi kapan masalah mulai terjadi.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Contoh:</strong> Filter berdasarkan Settings & Configuration untuk melihat
            semua perubahan pengaturan dalam periode tertentu.
          </p>
        </div>
      </div>

      <h2>Best Practices</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Review Audit Log Secara Berkala</strong>
            <p className="text-sm text-gray-600">
              Lakukan review Audit Log setidaknya sekali seminggu untuk mengidentifikasi aktivitas
              mencurigakan atau masalah potensial.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Ekspor untuk Dokumentasi</strong>
            <p className="text-sm text-gray-600">
              Ekspor Audit Log penting untuk dokumentasi compliance dan audit eksternal. Simpan
              ekspor secara berkala.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Set Up Alerts</strong>
            <p className="text-sm text-gray-600">
              Jika platform mendukung, set up alert untuk aktivitas mencurigakan seperti multiple
              failed logins atau perubahan settings penting.
            </p>
          </div>
        </div>
      </div>

      <h2>Retensi Data Audit Log</h2>
      <p>
        Data Audit Log disimpan untuk periode tertentu sesuai kebijakan platform:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-white p-5">
        <ul className="ml-4 space-y-2 text-sm">
          <li className="list-disc">
            <strong>Data Aktif:</strong> Audit Log tersedia untuk 90 hari terakhir di interface
          </li>
          <li className="list-disc">
            <strong>Data Archive:</strong> Data lebih dari 90 hari dapat diakses melalui ekspor
            atau request khusus
          </li>
          <li className="list-disc">
            <strong>Retensi Penuh:</strong> Semua data disimpan minimal 1 tahun untuk keperluan
            compliance
          </li>
        </ul>
        <Callout type="warning" title="Penting">
          <p>
            Jika Anda perlu data Audit Log yang lebih lama dari 90 hari, hubungi support untuk
            request khusus. Data akan disediakan dalam format ekspor.
          </p>
        </Callout>
      </div>

      <Callout type="success" title="Tips">
        <p>
          Gunakan Audit Log sebagai alat pembelajaran. Review aktivitas user yang sering melakukan
          kesalahan untuk memberikan training tambahan.
        </p>
      </Callout>
    </DocLayout>
  )
}
