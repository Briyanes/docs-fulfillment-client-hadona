import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Shield, Smartphone, Key, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Two-Factor Authentication"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      prevHref="/agency/business-manager/permission"
      prevTitle="Mengatur Permission"
      nextHref="/agency/business-manager/troubleshooting"
      nextTitle="Troubleshooting BM"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Two-Factor Authentication (2FA) atau Autentikasi Dua Faktor adalah lapisan keamanan
          tambahan yang melindungi Business Manager dan akun Facebook Anda. Dengan 2FA, selain
          password, Anda juga perlu memasukkan kode verifikasi yang dikirim ke perangkat Anda
          saat login.
        </p>
      </div>

      <h2>Mengapa 2FA Penting?</h2>
      <p>Two-Factor Authentication memberikan perlindungan ekstra yang sangat penting:</p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Perlindungan dari Hacking</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Bahkan jika password Anda bocor, penyerang tidak dapat mengakses akun tanpa kode
            verifikasi dari perangkat Anda.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Key className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Kepatuhan Keamanan</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Banyak perusahaan dan klien memerlukan 2FA sebagai standar keamanan minimum untuk
            akses Business Manager.
          </p>
        </div>
      </div>

      <Callout type="warning" title="Sangat Direkomendasikan">
        <p>
          Meta sangat merekomendasikan mengaktifkan 2FA untuk semua akun Business Manager, terutama
          yang mengelola kampanye iklan dengan budget besar. Ini adalah praktik keamanan terbaik
          yang harus diikuti oleh semua pengguna Business Manager.
        </p>
      </Callout>

      <h2>Metode 2FA yang Tersedia</h2>
      <p>Meta menyediakan beberapa metode 2FA:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-hadona-primary" />
            <h4 className="font-semibold">Authentication App (Direkomendasikan)</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Menggunakan aplikasi authenticator seperti Google Authenticator, Authy, atau Microsoft
            Authenticator. Kode verifikasi dihasilkan langsung dari aplikasi di smartphone Anda.
            Metode ini paling aman karena tidak bergantung pada SMS.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-hadona-primary" />
            <h4 className="font-semibold">SMS (Text Message)</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kode verifikasi dikirim melalui SMS ke nomor telepon yang terdaftar. Metode ini mudah
            digunakan tetapi kurang aman dibandingkan Authentication App karena SMS dapat diintercept.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-3">
            <Key className="h-5 w-5 text-hadona-primary" />
            <h4 className="font-semibold">Security Key</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Menggunakan perangkat fisik seperti USB security key atau NFC-enabled device. Metode
            ini sangat aman dan direkomendasikan untuk akun dengan tingkat keamanan tinggi.
          </p>
        </div>
      </div>

      <h2>Mengaktifkan 2FA dengan Authentication App</h2>
      <p>
        Kami merekomendasikan menggunakan Authentication App karena lebih aman dan tidak bergantung
        pada SMS:
      </p>
      <StepGuide
        steps={[
          {
            title: 'Download Authentication App',
            content: (
              <div>
                <p>
                  Download dan install aplikasi authenticator di smartphone Anda. Pilihan populer:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Google Authenticator (iOS & Android)</li>
                  <li>Microsoft Authenticator (iOS & Android)</li>
                  <li>Authy (iOS & Android)</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Akses Security Settings',
            content: (
              <div>
                <p>
                  Login ke Business Manager, lalu klik menu <strong>"Business Settings"</strong> di
                  pojok kiri atas.
                </p>
                <p className="mt-2">
                  Di menu sebelah kiri, klik <strong>"Security Center"</strong> atau{' '}
                  <strong>"Pusat Keamanan"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Two-Factor Authentication',
            content: (
              <div>
                <p>
                  Di halaman Security Center, cari bagian{' '}
                  <strong>"Two-Factor Authentication"</strong> atau{' '}
                  <strong>"Autentikasi Dua Faktor"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih "Use Authentication App"',
            content: (
              <div>
                <p>
                  Klik <strong>"Set Up"</strong> atau <strong>"Atur"</strong> di bagian
                  Authentication App, lalu pilih <strong>"Use Authentication App"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Scan QR Code',
            content: (
              <div>
                <p>
                  Buka aplikasi authenticator di smartphone Anda, lalu scan QR code yang
                  ditampilkan di layar. QR code akan muncul setelah Anda memilih "Use Authentication
                  App".
                </p>
                <Callout type="info" title="Tips">
                  <p>
                    Jika tidak bisa scan QR code, Anda dapat memasukkan kode setup secara manual.
                    Klik "Can't scan?" untuk melihat kode setup.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Verifikasi Kode',
            content: (
              <div>
                <p>
                  Setelah QR code di-scan, aplikasi authenticator akan menampilkan kode 6 digit
                  yang berubah setiap 30 detik. Masukkan kode ini di halaman setup untuk
                  memverifikasi bahwa setup berhasil.
                </p>
              </div>
            ),
          },
          {
            title: 'Simpan Backup Codes',
            content: (
              <div>
                <p>
                  Setelah verifikasi berhasil, Meta akan memberikan backup codes. Simpan kode-kode
                  ini di tempat yang aman. Backup codes dapat digunakan untuk login jika Anda kehilangan
                  akses ke aplikasi authenticator.
                </p>
                <Callout type="warning" title="Penting">
                  <p>
                    Simpan backup codes dengan aman! Jika Anda kehilangan akses ke aplikasi
                    authenticator dan tidak memiliki backup codes, Anda mungkin tidak bisa login ke
                    akun.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Selesai',
            content: (
              <div>
                <p>
                  Setelah semua langkah selesai, 2FA sudah aktif. Mulai sekarang, setiap kali login,
                  Anda akan diminta memasukkan kode dari aplikasi authenticator.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Mengaktifkan 2FA dengan SMS</h2>
      <p>
        Jika Anda lebih memilih menggunakan SMS (meskipun kurang aman):
      </p>
      <StepGuide
        steps={[
          {
            title: 'Akses Security Center',
            content: (
              <div>
                <p>
                  Ikuti langkah 1-3 dari panduan Authentication App untuk mengakses Security Center
                  dan bagian Two-Factor Authentication.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih "Use Text Message"',
            content: (
              <div>
                <p>
                  Klik <strong>"Set Up"</strong> di bagian Text Message, lalu pilih{' '}
                  <strong>"Use Text Message"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Masukkan Nomor Telepon',
            content: (
              <div>
                <p>
                  Masukkan nomor telepon yang ingin digunakan untuk menerima kode verifikasi.
                  Pastikan nomor telepon aktif dan dapat menerima SMS.
                </p>
              </div>
            ),
          },
          {
            title: 'Verifikasi Nomor',
            content: (
              <div>
                <p>
                  Meta akan mengirimkan kode verifikasi melalui SMS. Masukkan kode tersebut untuk
                  memverifikasi nomor telepon.
                </p>
              </div>
            ),
          },
          {
            title: 'Selesai',
            content: (
              <div>
                <p>
                  Setelah nomor terverifikasi, 2FA dengan SMS sudah aktif. Setiap kali login, Anda
                  akan menerima kode verifikasi melalui SMS.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Menggunakan Backup Codes</h2>
      <p>
        Backup codes adalah kode sekali pakai yang dapat digunakan untuk login jika Anda kehilangan
        akses ke metode 2FA utama:
      </p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Saat login, pilih opsi <strong>"Use a recovery code"</strong> atau{' '}
            <strong>"Gunakan kode pemulihan"</strong>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Masukkan salah satu backup code yang Anda simpan
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Setelah login berhasil, segera setup ulang 2FA atau generate backup codes baru
          </div>
        </li>
      </ol>

      <Callout type="warning" title="Backup Codes">
        <p>
          Setiap backup code hanya dapat digunakan sekali. Setelah digunakan, code tersebut tidak
          dapat digunakan lagi. Pastikan Anda menyimpan backup codes dengan aman dan tidak
          membagikannya kepada siapa pun.
        </p>
      </Callout>

      <h2>Mengatur 2FA untuk Anggota Tim</h2>
      <p>
        Sebagai admin Business Manager, Anda dapat mewajibkan semua anggota tim untuk mengaktifkan
        2FA:
      </p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Akses Security Center di Business Settings
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Cari bagian <strong>"Require Two-Factor Authentication"</strong> atau{' '}
            <strong>"Wajibkan Autentikasi Dua Faktor"</strong>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Aktifkan opsi untuk mewajibkan 2FA untuk semua anggota tim
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Anggota tim yang belum mengaktifkan 2FA akan diminta untuk mengaktifkannya sebelum
            dapat mengakses Business Manager
          </div>
        </li>
      </ol>

      <h2>Troubleshooting</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Kehilangan Akses ke Authentication App
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gunakan backup codes yang Anda simpan untuk login. Setelah login, setup ulang 2FA
            dengan aplikasi authenticator baru atau metode lain. Jika tidak memiliki backup codes,
            hubungi support Meta untuk proses pemulihan akun.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Tidak Menerima SMS Kode
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan nomor telepon aktif dan dapat menerima SMS. Periksa juga apakah nomor telepon
            sudah benar. Jika masalah berlanjut, coba gunakan metode Authentication App sebagai
            alternatif yang lebih andal.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Kode Authenticator Tidak Valid
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan waktu di smartphone Anda sudah disinkronkan dengan benar. Kode authenticator
            bergantung pada waktu yang akurat. Jika masih bermasalah, coba generate kode baru atau
            setup ulang 2FA.
          </p>
        </div>
      </div>

      <Callout type="success" title="Langkah Selanjutnya">
        <p>
          Setelah 2FA diaktifkan, Business Manager Anda sudah lebih aman. Jika Anda mengalami
          masalah dengan Business Manager, lihat panduan Troubleshooting untuk solusi umum.
        </p>
      </Callout>

      <h2>Tips & Best Practices</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Gunakan Authentication App:</strong> Lebih aman daripada SMS dan tidak bergantung
          pada jaringan telepon
        </li>
        <li>
          <strong>Simpan Backup Codes:</strong> Simpan backup codes di tempat yang aman, misalnya
          password manager atau dokumen terenkripsi
        </li>
        <li>
          <strong>Multiple Devices:</strong> Beberapa aplikasi authenticator (seperti Authy)
          mendukung sync ke multiple devices untuk backup otomatis
        </li>
        <li>
          <strong>Wajibkan untuk Tim:</strong> Aktifkan requirement 2FA untuk semua anggota tim
          untuk keamanan maksimal
        </li>
        <li>
          <strong>Review Berkala:</strong> Periksa dan update metode 2FA secara berkala, terutama
          jika mengganti nomor telepon atau perangkat
        </li>
      </ul>
    </DocLayout>
  )
}
