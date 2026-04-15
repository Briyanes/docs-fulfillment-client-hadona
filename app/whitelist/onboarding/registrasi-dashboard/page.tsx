import ArticleLayout from '@/components/ArticleLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { CheckCircle2, LayoutDashboard, Bell, Settings, BarChart3, FileText, Headphones } from 'lucide-react'

export default function RegistrasiDashboardPage() {
  return (
    <ArticleLayout
      title="Registrasi & Pengenalan Dashboard Hadona"
      categoryHref="/whitelist/onboarding"
      categoryName="Onboarding"
      description="Panduan lengkap aktivasi akun Client Whitelist dan pengenalan fitur-fitur utama dashboard Hadona Digital Media"
      nextHref="/whitelist/onboarding/request-ads-account-meta"
      nextTitle="Request Meta Ads Account"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Panduan ini akan memandu Anda mulai dari proses aktivasi akun pertama kali hingga
          mengenal semua fitur utama di dashboard Hadona Digital Media sebagai Client Whitelist.
        </p>
      </div>

      {/* Video Tutorial */}
      <div className="my-6">
        <p className="font-semibold text-gray-900 mb-2">Video Tutorial: Registrasi & Pengenalan Dashboard Hadona</p>
        <video
          className="w-full rounded-xl border border-gray-200"
          controls
          preload="metadata"
        >
          <source src="/video/Tutorial Registrasi & Pengenalan Dashboard Hadona.mp4" type="video/mp4" />
          Browser Anda tidak mendukung pemutaran video.
        </video>
      </div>

      <h2>Apa itu Client Whitelist?</h2>
      <p>
        Client Whitelist adalah klien yang menggunakan layanan full-service Hadona Digital Media,
        meliputi pengelolaan Meta Ads (Facebook & Instagram), Google Ads, serta layanan tracking
        dan analitik digital. Sebagai Client Whitelist, Anda mendapatkan akses ke dashboard
        eksklusif Hadona untuk memantau performa kampanye, data pixel, dan laporan analitik secara
        real-time.
      </p>

      <h2>Persyaratan Sebelum Memulai</h2>
      <p>Pastikan Anda telah menyiapkan hal-hal berikut sebelum mendaftar:</p>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mb-2 h-5 w-5 text-green-500" />
          <h4 className="font-semibold text-gray-900 mb-1">Email Bisnis Aktif</h4>
          <p className="text-sm text-gray-600">
            Gunakan email bisnis yang aktif dan dapat Anda akses. Email ini akan menjadi username
            login dashboard.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mb-2 h-5 w-5 text-green-500" />
          <h4 className="font-semibold text-gray-900 mb-1">Nomor WhatsApp</h4>
          <p className="text-sm text-gray-600">
            Nomor WhatsApp aktif untuk verifikasi OTP dan komunikasi dengan tim Hadona.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mb-2 h-5 w-5 text-green-500" />
          <h4 className="font-semibold text-gray-900 mb-1">Informasi Bisnis</h4>
          <p className="text-sm text-gray-600">
            Nama bisnis, jenis usaha, URL website (jika ada), dan alamat bisnis untuk proses
            pengajuan akun iklan.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mb-2 h-5 w-5 text-green-500" />
          <h4 className="font-semibold text-gray-900 mb-1">Akun Facebook Personal</h4>
          <p className="text-sm text-gray-600">
            Akun Facebook personal yang akan dihubungkan ke Meta Business Suite untuk
            pengelolaan iklan.
          </p>
        </div>
      </div>

      <h2>Proses Registrasi</h2>
      <p>
        Proses registrasi Client Whitelist dimulai setelah Anda menyelesaikan kontrak kerjasama
        dengan tim Hadona. Tim kami akan mempersiapkan akun dan mengirimkan undangan aktivasi ke
        email Anda.
      </p>

      <StepGuide
        title="Langkah-langkah Aktivasi Akun"
        steps={[
          {
            title: 'Terima Email Undangan',
            content: (
              <div>
                <p className="mb-3">
                  Setelah proses kontrak selesai, Anda akan menerima email undangan dari{' '}
                  <strong>noreply@hadona.id</strong> dengan subjek{' '}
                  <em>"Selamat Datang di Hadona Digital Media — Aktifkan Akun Anda"</em>.
                </p>
                <Callout type="warning" title="Cek Folder Spam">
                  <p>
                    Jika email tidak ditemukan di Inbox dalam 5 menit, periksa folder{' '}
                    <strong>Spam</strong> atau <strong>Promotions</strong>. Tandai email sebagai
                    "Not Spam" agar email selanjutnya masuk ke Inbox.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Klik Link Aktivasi',
            content: (
              <div>
                <p className="mb-3">
                  Di dalam email undangan, klik tombol <strong>"Aktifkan Akun Saya"</strong> atau
                  salin link yang disediakan dan buka di browser.
                </p>
                <p className="text-sm text-gray-600">
                  Link aktivasi berlaku selama <strong>48 jam</strong>. Jika sudah kadaluarsa,
                  hubungi tim support Hadona untuk meminta link baru.
                </p>
              </div>
            ),
          },
          {
            title: 'Buat Password',
            content: (
              <div>
                <p className="mb-3">
                  Setelah klik link aktivasi, Anda akan diarahkan ke halaman untuk membuat password.
                  Gunakan password yang kuat:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
                  <li>Minimal 8 karakter</li>
                  <li>Kombinasi huruf besar dan kecil</li>
                  <li>Minimal 1 angka</li>
                  <li>Minimal 1 karakter spesial (contoh: @, #, !)</li>
                </ul>
                <Callout type="info" title="Tips Keamanan">
                  <p>
                    Jangan gunakan password yang sama dengan akun lain. Gunakan password manager
                    seperti Google Password Manager atau 1Password untuk menyimpan password dengan
                    aman.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Verifikasi WhatsApp (OTP)',
            content: (
              <div>
                <p className="mb-3">
                  Masukkan nomor WhatsApp Anda untuk menerima kode OTP (One-Time Password).
                  Kode OTP akan dikirimkan melalui pesan WhatsApp dalam hitungan detik.
                </p>
                <p className="text-sm text-gray-600">
                  Masukkan kode 6 digit yang diterima untuk melanjutkan proses registrasi.
                  Kode berlaku selama <strong>5 menit</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Lengkapi Profil Bisnis',
            content: (
              <div>
                <p className="mb-3">
                  Isi informasi profil bisnis Anda pada formulir yang tersedia:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-gray-700">
                  <li>Nama perusahaan / nama bisnis</li>
                  <li>Jenis industri / kategori bisnis</li>
                  <li>URL website (wajib jika ada)</li>
                  <li>Alamat bisnis</li>
                  <li>Nama PIC (Person in Charge) yang akan berkoordinasi dengan Hadona</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Informasi ini akan digunakan untuk keperluan pengajuan Ads Account dan
                  verifikasi bisnis.
                </p>
              </div>
            ),
          },
          {
            title: 'Login ke Dashboard',
            content: (
              <div>
                <p className="mb-3">
                  Setelah semua langkah selesai, Anda akan otomatis diarahkan ke dashboard
                  Hadona. Atau Anda bisa login kapan saja melalui{' '}
                  <strong>app.hadona.id</strong> menggunakan email dan password yang sudah dibuat.
                </p>
                <Callout type="success" title="Registrasi Berhasil!">
                  <p>
                    Selamat! Akun Client Whitelist Anda sudah aktif. Simpan kredensial login
                    Anda di tempat yang aman dan lanjutkan ke pengenalan dashboard di bawah ini.
                  </p>
                </Callout>
              </div>
            ),
          },
        ]}
      />

      <h2>Pengenalan Dashboard Hadona</h2>
      <p>
        Dashboard Hadona dirancang untuk memberikan visibilitas penuh atas performa kampanye iklan
        dan data analitik bisnis Anda. Berikut adalah penjelasan setiap bagian utama dashboard:
      </p>

      {/* Dashboard Overview Cards */}
      <div className="my-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2">
              <LayoutDashboard className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Overview / Beranda</h3>
          </div>
          <p className="text-sm text-gray-600">
            Tampilan ringkasan performa keseluruhan kampanye Anda. Menampilkan metrik utama
            seperti total spend, impressions, clicks, CTR, dan konversi dalam periode yang
            dipilih.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-green-50 p-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Analytics & Laporan</h3>
          </div>
          <p className="text-sm text-gray-600">
            Laporan performa detail dengan filter berdasarkan platform (Meta / Google), periode
            waktu, dan jenis kampanye. Data dapat diekspor ke format CSV atau PDF.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-purple-50 p-2">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Manajemen Kampanye</h3>
          </div>
          <p className="text-sm text-gray-600">
            Lihat daftar semua kampanye aktif dan non-aktif beserta status, anggaran harian,
            dan performa. Tim Hadona mengelola kampanye dari sini berdasarkan arahan Anda.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-orange-50 p-2">
              <Settings className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Pengaturan Akun</h3>
          </div>
          <p className="text-sm text-gray-600">
            Kelola profil bisnis, informasi penagihan, preferensi notifikasi, dan pengaturan
            keamanan akun Anda seperti 2FA dan pengelolaan sesi login.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-pink-50 p-2">
              <Bell className="h-5 w-5 text-pink-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Notifikasi</h3>
          </div>
          <p className="text-sm text-gray-600">
            Terima notifikasi penting tentang status kampanye, perubahan performa signifikan,
            invoice, dan pengumuman dari tim Hadona secara real-time.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-teal-50 p-2">
              <Headphones className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Support & Tiket</h3>
          </div>
          <p className="text-sm text-gray-600">
            Ajukan pertanyaan atau request perubahan kampanye melalui sistem tiket. Tim Hadona
            akan merespons dalam waktu 1×24 jam kerja.
          </p>
        </div>
      </div>

      <h2>Navigasi Utama Dashboard</h2>
      <p>
        Menu navigasi dashboard Hadona tersedia di sidebar kiri. Berikut adalah penjelasan
        setiap menu beserta fungsinya:
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Menu</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Fungsi</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Siapa yang Bisa Akses</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Beranda</td>
              <td className="px-4 py-3 text-sm text-gray-600">Ringkasan performa kampanye</td>
              <td className="px-4 py-3 text-sm text-gray-600">Semua user</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Kampanye</td>
              <td className="px-4 py-3 text-sm text-gray-600">Daftar dan detail kampanye</td>
              <td className="px-4 py-3 text-sm text-gray-600">Semua user</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Analytics</td>
              <td className="px-4 py-3 text-sm text-gray-600">Laporan dan grafik performa</td>
              <td className="px-4 py-3 text-sm text-gray-600">Semua user</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Akun Iklan</td>
              <td className="px-4 py-3 text-sm text-gray-600">Status & request Ads Account</td>
              <td className="px-4 py-3 text-sm text-gray-600">Admin & PIC</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Pengaturan</td>
              <td className="px-4 py-3 text-sm text-gray-600">Profil, keamanan, notifikasi</td>
              <td className="px-4 py-3 text-sm text-gray-600">Admin</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Support</td>
              <td className="px-4 py-3 text-sm text-gray-600">Tiket dan bantuan</td>
              <td className="px-4 py-3 text-sm text-gray-600">Semua user</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Yang Perlu Dilakukan Setelah Login Pertama</h2>

      <ol className="my-6 space-y-4">
        <li className="flex items-start gap-3">
          <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-hadona-primary text-white text-sm font-bold">
            1
          </span>
          <div>
            <strong className="text-gray-900">Lengkapi profil bisnis</strong>
            <p className="mt-1 text-sm text-gray-600">
              Pastikan nama bisnis, URL website, dan informasi kontak sudah terisi dengan benar
              di menu <strong>Pengaturan → Profil Bisnis</strong>.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-hadona-primary text-white text-sm font-bold">
            2
          </span>
          <div>
            <strong className="text-gray-900">Aktifkan Two-Factor Authentication (2FA)</strong>
            <p className="mt-1 text-sm text-gray-600">
              Tingkatkan keamanan akun dengan mengaktifkan 2FA di menu{' '}
              <strong>Pengaturan → Keamanan</strong>. Gunakan aplikasi Google Authenticator
              atau WhatsApp OTP.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-hadona-primary text-white text-sm font-bold">
            3
          </span>
          <div>
            <strong className="text-gray-900">Atur preferensi notifikasi</strong>
            <p className="mt-1 text-sm text-gray-600">
              Pilih jenis notifikasi yang ingin diterima (email / WhatsApp) di menu{' '}
              <strong>Pengaturan → Notifikasi</strong> agar tidak melewatkan informasi penting.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-hadona-primary text-white text-sm font-bold">
            4
          </span>
          <div>
            <strong className="text-gray-900">Ajukan Request Ads Account</strong>
            <p className="mt-1 text-sm text-gray-600">
              Setelah profil lengkap, lanjutkan dengan mengajukan permintaan Ads Account Meta
              dan/atau Google melalui menu <strong>Akun Iklan</strong>.
            </p>
          </div>
        </li>
      </ol>

      <Callout type="success" title="Selamat Bergabung!">
        <p>
          Dashboard Hadona Anda sudah siap. Langkah selanjutnya adalah mengajukan request
          Meta Ads Account untuk mulai menjalankan kampanye di Facebook & Instagram.
        </p>
      </Callout>

      <Callout type="info" title="Butuh Bantuan?">
        <p>
          Tim onboarding Hadona siap membantu Anda setiap saat. Hubungi kami melalui WhatsApp
          di <strong>+62 851 5800 0123</strong> atau buat tiket di menu{' '}
          <strong>Support</strong> di dashboard.
        </p>
      </Callout>
    </ArticleLayout>
  )
}
