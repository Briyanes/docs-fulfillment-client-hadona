import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Shield, Lock, Key, Eye, AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Keamanan Akun"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      nextHref="/agency/best-practices/optimasi-performance"
      nextTitle="Optimasi Performance"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Keamanan akun adalah prioritas utama dalam mengelola kampanye iklan digital. Panduan ini
          akan membantu Anda melindungi akun Business Manager dan aset digital Anda dari ancaman
          keamanan.
        </p>
      </div>

      <h2>Mengapa Keamanan Akun Penting?</h2>
      <p>
        Akun yang tidak aman dapat mengakibatkan kerugian finansial, pencurian data, dan
        penangguhan akun. Dengan menerapkan praktik keamanan yang baik, Anda dapat:
      </p>
      <ul>
        <li>Melindungi budget iklan dari akses tidak sah</li>
        <li>Mencegah pencurian data klien dan kampanye</li>
        <li>Mempertahankan reputasi bisnis Anda</li>
        <li>Menghindari penangguhan akun oleh Meta</li>
      </ul>

      <h2>Best Practices Keamanan</h2>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Lock className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Two-Factor Authentication (2FA)</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Aktifkan 2FA untuk semua akun yang memiliki akses ke Business Manager. Ini menambahkan
            lapisan keamanan ekstra dengan memerlukan kode verifikasi selain password.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Key className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Password yang Kuat</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gunakan password yang unik dan kompleks untuk setiap akun. Kombinasikan huruf besar,
            kecil, angka, dan simbol. Jangan gunakan password yang sama untuk beberapa akun.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Eye className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Audit Akses Berkala</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lakukan review berkala terhadap daftar pengguna yang memiliki akses ke Business
            Manager. Hapus akses untuk pengguna yang tidak lagi membutuhkannya.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Permission Management</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Terapkan prinsip least privilege - berikan hanya permission yang benar-benar diperlukan
            untuk setiap pengguna. Jangan berikan akses admin kecuali benar-benar diperlukan.
          </p>
        </div>
      </div>

      <h2>Cara Setup Two-Factor Authentication</h2>
      <StepGuide
        steps={[
          {
            title: 'Akses Business Settings',
            content: (
              <p>
                Buka Business Manager Anda dan navigasi ke{' '}
                <strong>Business Settings → Security Center</strong>.
              </p>
            ),
          },
          {
            title: 'Pilih Two-Factor Authentication',
            content: (
              <p>
                Klik pada opsi <strong>Two-Factor Authentication</strong> di menu Security Center.
              </p>
            ),
          },
          {
            title: 'Pilih Metode Verifikasi',
            content: (
              <div>
                <p>Pilih salah satu metode berikut:</p>
                <ul>
                  <li>
                    <strong>Authentication App</strong> - Menggunakan aplikasi seperti Google
                    Authenticator atau Authy
                  </li>
                  <li>
                    <strong>SMS</strong> - Menerima kode via pesan teks
                  </li>
                  <li>
                    <strong>Security Key</strong> - Menggunakan hardware security key
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Ikuti Instruksi Setup',
            content: (
              <p>
                Ikuti langkah-langkah yang ditampilkan untuk menyelesaikan setup 2FA. Pastikan Anda
                menyimpan backup codes di tempat yang aman.
              </p>
            ),
          },
          {
            title: 'Verifikasi Setup',
            content: (
              <p>
                Uji 2FA dengan logout dan login kembali. Pastikan Anda dapat masuk menggunakan
                metode 2FA yang telah dipilih.
              </p>
            ),
          },
        ]}
      />

      <h2>Manajemen Permission yang Aman</h2>
      <p>
        Memberikan permission yang tepat kepada setiap pengguna adalah kunci keamanan. Berikut
        panduan permission berdasarkan role:
      </p>

      <div className="my-6 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Permission yang Diperlukan</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Admin</strong>
              </td>
              <td>Full access</td>
              <td>Hanya untuk pemilik bisnis atau manager senior</td>
            </tr>
            <tr>
              <td>
                <strong>Advertiser</strong>
              </td>
              <td>Create ads, manage campaigns</td>
              <td>Untuk tim yang membuat dan mengelola iklan</td>
            </tr>
            <tr>
              <td>
                <strong>Analyst</strong>
              </td>
              <td>View reports, analytics</td>
              <td>Untuk tim yang hanya melihat data dan laporan</td>
            </tr>
            <tr>
              <td>
                <strong>Employee</strong>
              </td>
              <td>Limited access sesuai kebutuhan</td>
              <td>Untuk staff yang membutuhkan akses terbatas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Monitoring Aktivitas Mencurigakan</h2>
      <p>Waspadai tanda-tanda berikut yang mungkin mengindikasikan masalah keamanan:</p>
      <ul>
        <li>Login dari lokasi atau perangkat yang tidak dikenal</li>
        <li>Perubahan password atau email tanpa pemberitahuan</li>
        <li>Kampanye baru yang tidak Anda buat</li>
        <li>Perubahan budget atau pengaturan tanpa persetujuan</li>
        <li>Email notifikasi yang tidak biasa dari Meta</li>
      </ul>

      <Callout type="warning" title="Tindakan Segera">
        <p>
          Jika Anda mencurigai akun Anda telah diretas, segera lakukan langkah-langkah berikut:
        </p>
        <ol>
          <li>Ubah password segera</li>
          <li>Logout dari semua perangkat</li>
          <li>Review dan hapus akses yang mencurigakan</li>
          <li>Hubungi Meta Support untuk melaporkan insiden</li>
          <li>Hubungi tim Hadona Support untuk bantuan</li>
        </ol>
      </Callout>

      <h2>Tips Keamanan Tambahan</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Gunakan Email Bisnis</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jangan gunakan email pribadi untuk akun bisnis. Email bisnis lebih aman dan
              profesional.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Enable Login Alerts</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Aktifkan notifikasi untuk setiap login baru agar Anda selalu tahu siapa yang mengakses
              akun.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Review Connected Apps</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Secara berkala review aplikasi pihak ketiga yang terhubung dengan akun Anda. Hapus
              yang tidak digunakan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Backup Data Berkala</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lakukan backup data penting seperti daftar kampanye, audience, dan laporan secara
              berkala.
            </p>
          </div>
        </div>
      </div>

      <h2>Kebijakan Password</h2>
      <p>Pastikan semua anggota tim mengikuti kebijakan password berikut:</p>
      <ul>
        <li>Minimum 12 karakter</li>
        <li>Kombinasi huruf besar, huruf kecil, angka, dan simbol</li>
        <li>Tidak menggunakan informasi pribadi (nama, tanggal lahir, dll)</li>
        <li>Ganti password setiap 90 hari</li>
        <li>Jangan bagikan password dengan siapa pun</li>
        <li>Gunakan password manager untuk menyimpan password dengan aman</li>
      </ul>

      <Callout type="info" title="Bantuan Keamanan">
        <p>
          Jika Anda membutuhkan bantuan dalam mengamankan akun atau mencurigai adanya aktivitas
          mencurigakan, jangan ragu untuk menghubungi tim support Hadona. Kami siap membantu Anda
          24/7.
        </p>
      </Callout>
    </DocLayout>
  )
}
