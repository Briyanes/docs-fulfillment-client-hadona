import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Instagram, Link2, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Menautkan Instagram Account"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      prevHref="/agency/business-manager/menautkan-page"
      prevTitle="Menautkan Facebook Page"
      nextHref="/agency/business-manager/menautkan-ad-account"
      nextTitle="Menautkan Ad Account"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Menautkan akun Instagram ke Business Manager memungkinkan Anda menjalankan iklan
          Instagram dan mengelola akun dari satu tempat terpusat. Akun Instagram harus dikonversi
          menjadi Instagram Business Account terlebih dahulu sebelum dapat ditautkan.
        </p>
      </div>

      <h2>Mengapa Perlu Menautkan Instagram?</h2>
      <p>Menautkan Instagram Account memberikan beberapa keuntungan:</p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Instagram className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Iklan Instagram</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Menjalankan kampanye iklan Instagram melalui Ads Manager dengan berbagai format iklan.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Link2 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Manajemen Terpusat</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kelola akun Instagram bersama dengan aset lainnya dari Business Manager.
          </p>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum menautkan Instagram, pastikan:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Akun Instagram sudah dikonversi menjadi Instagram Business Account</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Akun Instagram sudah ditautkan ke Facebook Page</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Anda memiliki akses admin ke akun Instagram tersebut</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Business Manager sudah dibuat dan aktif</div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          Akun Instagram harus dikonversi menjadi Business Account terlebih dahulu. Personal
          Instagram Account tidak dapat ditautkan ke Business Manager. Pastikan juga akun Instagram
          sudah ditautkan ke Facebook Page sebelum menautkannya ke Business Manager.
        </p>
      </Callout>

      <h2>Mengonversi Instagram ke Business Account</h2>
      <p>
        Jika akun Instagram Anda masih Personal Account, ikuti langkah berikut untuk mengonversinya:
      </p>
      <StepGuide
        steps={[
          {
            title: 'Buka Aplikasi Instagram',
            content: (
              <div>
                <p>
                  Buka aplikasi Instagram di smartphone Anda dan login ke akun yang ingin
                  dikonversi.
                </p>
              </div>
            ),
          },
          {
            title: 'Akses Settings',
            content: (
              <div>
                <p>
                  Tap ikon profil di pojok kanan bawah, lalu tap menu (tiga garis) di pojok kanan
                  atas, dan pilih <strong>"Settings"</strong> atau <strong>"Pengaturan"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Account Type',
            content: (
              <div>
                <p>
                  Scroll ke bawah dan pilih <strong>"Account type and tools"</strong> atau{' '}
                  <strong>"Tipe akun dan alat"</strong>, lalu pilih{' '}
                  <strong>"Switch to Professional Account"</strong> atau{' '}
                  <strong>"Beralih ke Akun Bisnis"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Business',
            content: (
              <div>
                <p>
                  Pilih <strong>"Business"</strong> sebagai tipe akun profesional. Ikuti instruksi
                  untuk menyelesaikan proses konversi.
                </p>
              </div>
            ),
          },
          {
            title: 'Tautkan ke Facebook Page',
            content: (
              <div>
                <p>
                  Saat proses konversi, Anda akan diminta untuk menautkan akun Instagram ke
                  Facebook Page. Pilih Page yang sesuai atau buat Page baru jika belum ada.
                </p>
                <Callout type="info" title="Tips">
                  <p>
                    Pastikan Facebook Page yang dipilih sudah ditautkan ke Business Manager Anda
                    untuk memudahkan proses selanjutnya.
                  </p>
                </Callout>
              </div>
            ),
          },
        ]}
      />

      <h2>Langkah-langkah Menautkan Instagram ke Business Manager</h2>
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
            title: 'Pilih Accounts &gt; Instagram Accounts',
            content: (
              <div>
                <p>
                  Di menu sebelah kiri, klik <strong>"Accounts"</strong>, lalu pilih{' '}
                  <strong>"Instagram Accounts"</strong>.
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
                  <strong>"Add an Instagram Account"</strong> atau{' '}
                  <strong>"Tambahkan Akun Instagram"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Login ke Instagram',
            content: (
              <div>
                <p>
                  Anda akan diminta untuk login ke akun Instagram yang ingin ditautkan. Masukkan
                  username dan password Instagram Anda.
                </p>
                <Callout type="warning" title="Keamanan">
                  <p>
                    Pastikan Anda login menggunakan kredensial yang valid dan aman. Jangan
                    membagikan password Instagram Anda kepada siapa pun.
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
                  Setelah login berhasil, Instagram Account akan langsung ditautkan ke Business
                  Manager Anda. Pastikan akun Instagram sudah ditautkan ke Facebook Page yang
                  sesuai.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Menautkan Instagram yang Sudah Terhubung ke Page</h2>
      <p>
        Jika Instagram Account Anda sudah ditautkan ke Facebook Page yang ada di Business Manager,
        Instagram akan otomatis muncul di Business Manager:
      </p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Pastikan Instagram Account sudah ditautkan ke Facebook Page (dilakukan saat konversi
            ke Business Account)
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Pastikan Facebook Page sudah ditautkan ke Business Manager (lihat panduan sebelumnya)
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            Instagram Account akan otomatis muncul di bagian Instagram Accounts di Business
            Manager
          </div>
        </li>
      </ol>

      <h2>Mengatur Permission Instagram</h2>
      <p>
        Setelah Instagram ditautkan, Anda dapat mengatur permission untuk setiap anggota tim:
      </p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Klik Instagram Account yang sudah ditautkan di halaman Instagram Accounts</div>
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
            Tambahkan anggota tim dan pilih permission yang sesuai (Admin, Advertiser, atau
            Analyst)
          </div>
        </li>
      </ol>

      <h2>Troubleshooting</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Instagram Tidak Bisa Ditautkan
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan akun Instagram sudah dikonversi menjadi Business Account dan sudah ditautkan
            ke Facebook Page. Personal Instagram Account tidak dapat ditautkan ke Business
            Manager.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Error Login Instagram
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan username dan password Instagram benar. Jika menggunakan Two-Factor
            Authentication, pastikan kode verifikasi dimasukkan dengan benar. Coba login langsung
            ke aplikasi Instagram terlebih dahulu untuk memastikan akun aktif.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Instagram Tidak Muncul Otomatis
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jika Instagram sudah ditautkan ke Page tetapi tidak muncul di Business Manager, coba
            refresh halaman atau logout dan login ulang. Pastikan juga Page sudah benar-benar
            ditautkan ke Business Manager.
          </p>
        </div>
      </div>

      <Callout type="success" title="Langkah Selanjutnya">
        <p>
          Setelah Instagram berhasil ditautkan, langkah berikutnya adalah menautkan Ad Account ke
          Business Manager untuk mulai membuat kampanye iklan.
        </p>
      </Callout>

      <h2>Tips & Best Practices</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Business Account:</strong> Selalu gunakan Instagram Business Account untuk
          akses fitur iklan dan analytics yang lebih lengkap
        </li>
        <li>
          <strong>Konsistensi Brand:</strong> Pastikan username Instagram konsisten dengan brand
          Anda dan mudah ditemukan
        </li>
        <li>
          <strong>Verifikasi Akun:</strong> Pertimbangkan untuk memverifikasi akun Instagram
          (blue checkmark) untuk meningkatkan kredibilitas
        </li>
        <li>
          <strong>Backup Access:</strong> Pastikan ada minimal 2 admin untuk akun Instagram
          penting untuk menghindari kehilangan akses
        </li>
        <li>
          <strong>Keamanan:</strong> Aktifkan Two-Factor Authentication di akun Instagram untuk
          keamanan ekstra
        </li>
      </ul>
    </DocLayout>
  )
}
