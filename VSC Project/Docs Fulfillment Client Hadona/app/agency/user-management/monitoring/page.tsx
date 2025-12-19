import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Activity, Users, Clock, AlertTriangle, TrendingUp, Eye, Bell } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Monitoring Aktivitas"
      categoryHref="/agency/user-management"
      categoryName="User Management"
      prevHref="/agency/user-management/audit-log"
      prevTitle="Audit Log"
      nextHref="/agency/user-management/menghapus-user"
      nextTitle="Menghapus User"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Monitoring aktivitas memungkinkan Anda melacak dan menganalisis aktivitas user secara
          real-time. Fitur ini membantu Anda memahami bagaimana tim menggunakan platform, mengidentifikasi
          pola penggunaan, dan mendeteksi aktivitas mencurigakan.
        </p>
      </div>

      <Callout type="info" title="Penting">
        <p>
          Monitoring aktivitas berbeda dengan Audit Log. Monitoring memberikan overview real-time
          dan analytics, sementara Audit Log memberikan catatan detail setiap aktivitas.
        </p>
      </Callout>

      <h2>Apa itu Monitoring Aktivitas?</h2>
      <p>
        Monitoring aktivitas adalah dashboard yang menampilkan ringkasan aktivitas user dalam
        platform Hadona. Fitur ini memberikan insight tentang:
      </p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Activity className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Aktivitas Real-Time</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Melihat aktivitas yang sedang terjadi saat ini
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Users className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Statistik User</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jumlah user aktif, user online, dan aktivitas per user
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <TrendingUp className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Trend dan Pola</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pola penggunaan platform, jam aktif, dan aktivitas paling sering dilakukan
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <AlertTriangle className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Alert dan Notifikasi</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Peringatan untuk aktivitas mencurigakan atau tidak biasa
            </p>
          </div>
        </div>
      </div>

      <h2>Cara Mengakses Monitoring Aktivitas</h2>
      <p>
        Untuk mengakses halaman Monitoring Aktivitas:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Eye className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Langkah 1: Buka Menu User Management</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Login sebagai Admin atau Manager, kemudian navigasi ke menu{' '}
            <strong>User Management</strong> di sidebar.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Activity className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Langkah 2: Klik "Monitoring" atau "Activity Monitor"</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Di halaman User Management, klik tab atau menu <strong>"Monitoring"</strong> untuk
            membuka dashboard monitoring aktivitas.
          </p>
        </div>
      </div>

      <h2>Fitur-Fitur Monitoring</h2>
      <p>
        Dashboard monitoring menyediakan berbagai fitur untuk membantu Anda memahami aktivitas user:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <Clock className="h-5 w-5 text-hadona-primary" />
            Aktivitas Real-Time
          </h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Widget yang menampilkan aktivitas yang sedang terjadi saat ini, termasuk:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• User yang sedang online</li>
            <li>• Aktivitas terbaru (last 5-10 aktivitas)</li>
            <li>• Update real-time setiap beberapa detik</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <Users className="h-5 w-5 text-hadona-primary" />
            Statistik User
          </h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Ringkasan statistik tentang user dan aktivitas mereka:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Total user aktif (hari ini, minggu ini, bulan ini)</li>
            <li>• User online saat ini</li>
            <li>• User paling aktif</li>
            <li>• Aktivitas per role (Admin, Manager, Viewer)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <TrendingUp className="h-5 w-5 text-hadona-primary" />
            Grafik Aktivitas
          </h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Visualisasi aktivitas dalam bentuk grafik:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Grafik aktivitas per jam (24 jam terakhir)</li>
            <li>• Grafik aktivitas per hari (7 hari terakhir)</li>
            <li>• Grafik aktivitas per minggu (4 minggu terakhir)</li>
            <li>• Breakdown aktivitas berdasarkan jenis (campaign, settings, dll)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-hadona-primary" />
            Alert dan Peringatan
          </h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Notifikasi untuk aktivitas yang perlu perhatian:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Multiple failed login attempts</li>
            <li>• Aktivitas dari IP atau device baru</li>
            <li>• Perubahan settings penting</li>
            <li>• Aktivitas di luar jam kerja normal</li>
          </ul>
        </div>
      </div>

      <h2>Menggunakan Filter di Monitoring</h2>
      <p>
        Dashboard monitoring menyediakan berbagai filter untuk melihat data spesifik:
      </p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <strong>Filter berdasarkan Periode Waktu</strong>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Pilih periode waktu: Hari ini, Minggu ini, Bulan ini, atau Custom date range. Filter
            ini mempengaruhi semua widget dan grafik di dashboard.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <strong>Filter berdasarkan User</strong>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Pilih user tertentu untuk melihat hanya aktivitas user tersebut. Berguna untuk
            monitoring aktivitas user spesifik.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <strong>Filter berdasarkan Jenis Aktivitas</strong>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Filter berdasarkan kategori aktivitas seperti Campaign Management, User Management,
            Settings, atau Security Events.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <strong>Filter berdasarkan Role</strong>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Lihat aktivitas berdasarkan role user (Admin, Manager, atau Viewer). Berguna untuk
            memahami pola penggunaan per level akses.
          </p>
        </div>
      </div>

      <h2>Mengatur Alert dan Notifikasi</h2>
      <p>
        Anda dapat mengatur alert untuk mendapatkan notifikasi ketika terjadi aktivitas tertentu:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-3 flex items-center gap-3">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Bell className="h-5 w-5 text-hadona-primary" />
          </div>
          <h3 className="text-lg font-semibold">Jenis Alert yang Tersedia</h3>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
            <strong className="text-sm">Security Alerts</strong>
            <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• Multiple failed login attempts (3+ dalam 10 menit)</li>
              <li>• Login dari IP atau device baru</li>
              <li>• Login di luar jam kerja normal</li>
            </ul>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
            <strong className="text-sm">Activity Alerts</strong>
            <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• Perubahan budget campaign besar (lebih dari 50%)</li>
              <li>• Penghapusan campaign atau user</li>
              <li>• Perubahan settings penting</li>
            </ul>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
            <strong className="text-sm">Usage Alerts</strong>
            <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• User tidak aktif dalam periode tertentu</li>
              <li>• Aktivitas tidak biasa (spike atau drop drastis)</li>
            </ul>
          </div>
        </div>
        <Callout type="info" title="Cara Mengatur Alert">
          <p>
            Buka Settings → Notifications untuk mengatur alert. Anda dapat memilih jenis alert
            yang ingin diterima dan metode notifikasi (email, in-app, atau keduanya).
          </p>
        </Callout>
      </div>

      <h2>Menganalisis Data Monitoring</h2>
      <p>
        Berikut cara menggunakan data monitoring untuk mendapatkan insight yang berguna:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Identifikasi Pola Penggunaan</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Gunakan grafik aktivitas untuk melihat kapan tim paling aktif menggunakan platform.
            Ini membantu dalam:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Merencanakan maintenance window</li>
            <li>• Mengoptimalkan jadwal training</li>
            <li>• Memahami peak hours untuk support</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Deteksi User yang Tidak Aktif</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Gunakan statistik user untuk mengidentifikasi user yang tidak aktif dalam periode
            tertentu. Ini membantu dalam:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Membersihkan user yang tidak digunakan</li>
            <li>• Mengidentifikasi user yang perlu training tambahan</li>
            <li>• Mengoptimalkan jumlah license (jika berbayar per user)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Monitoring Keamanan</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Perhatikan alert keamanan dan aktivitas mencurigakan. Segera investigasi jika:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Ada multiple failed login attempts</li>
            <li>• Login dari lokasi atau device yang tidak dikenal</li>
            <li>• Aktivitas di luar jam kerja normal tanpa alasan jelas</li>
            <li>• Perubahan settings atau konfigurasi yang tidak diotorisasi</li>
          </ul>
        </div>
      </div>

      <h2>Best Practices</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Review Monitoring Secara Berkala</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lakukan review dashboard monitoring setidaknya sekali sehari untuk mengidentifikasi
              masalah atau pola yang perlu perhatian.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Set Up Alert yang Relevan</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Aktifkan alert untuk aktivitas penting tetapi jangan terlalu banyak agar tidak
              mengganggu. Fokus pada alert yang benar-benar memerlukan tindakan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Gunakan Data untuk Improvement</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gunakan insight dari monitoring untuk meningkatkan proses dan training. Identifikasi
              user yang perlu bantuan tambahan.
            </p>
          </div>
        </div>
      </div>

      <h2>Perbedaan Monitoring vs Audit Log</h2>
      <p>
        Penting untuk memahami perbedaan antara Monitoring Aktivitas dan Audit Log:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-300 dark:border-gray-700">
              <th className="px-4 py-3 text-left font-semibold">Aspek</th>
              <th className="px-4 py-3 text-left font-semibold">Monitoring Aktivitas</th>
              <th className="px-4 py-3 text-left font-semibold">Audit Log</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3 font-medium">Tujuan</td>
              <td className="px-4 py-3">Overview dan analytics real-time</td>
              <td className="px-4 py-3">Catatan detail setiap aktivitas</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3 font-medium">Format</td>
              <td className="px-4 py-3">Dashboard dengan grafik dan statistik</td>
              <td className="px-4 py-3">Daftar log dengan detail lengkap</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3 font-medium">Update</td>
              <td className="px-4 py-3">Real-time atau near real-time</td>
              <td className="px-4 py-3">Setiap aktivitas dicatat segera</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3 font-medium">Detail</td>
              <td className="px-4 py-3">Ringkasan dan agregasi data</td>
              <td className="px-4 py-3">Detail lengkap setiap aktivitas</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <td className="px-4 py-3 font-medium">Use Case</td>
              <td className="px-4 py-3">Monitoring umum, trend analysis</td>
              <td className="px-4 py-3">Investigasi, compliance, troubleshooting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Tips">
        <p>
          Gunakan Monitoring untuk overview cepat dan Audit Log untuk investigasi detail. Keduanya
          saling melengkapi untuk manajemen keamanan dan efisiensi yang optimal.
        </p>
      </Callout>
    </DocLayout>
  )
}
