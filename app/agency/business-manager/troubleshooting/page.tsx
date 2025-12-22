import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { AlertTriangle, CheckCircle2, XCircle, Info } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Troubleshooting BM"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      prevHref="/agency/business-manager/2fa"
      prevTitle="Two-Factor Authentication"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Panduan ini akan membantu Anda menyelesaikan masalah umum yang mungkin terjadi saat
          menggunakan Business Manager. Jika masalah Anda tidak tercantum di sini, hubungi tim
          support Hadona atau Meta untuk bantuan lebih lanjut.
        </p>
      </div>

      <h2>Masalah Umum dan Solusinya</h2>

      <div className="my-8 space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-start gap-3">
            <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold">Tidak Bisa Login ke Business Manager</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Kemungkinan Penyebab:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Password salah atau lupa password</li>
                  <li>Akun Facebook terkunci atau dinonaktifkan</li>
                  <li>Masalah dengan Two-Factor Authentication</li>
                  <li>Browser atau cache bermasalah</li>
                </ul>
                <p className="mt-3">
                  <strong>Solusi:</strong>
                </p>
                <ol className="ml-4 list-decimal space-y-1">
                  <li>
                    Coba reset password melalui halaman login Facebook. Klik "Forgot Password?"
                    dan ikuti instruksi.
                  </li>
                  <li>
                    Pastikan akun Facebook pribadi Anda aktif dan tidak terkunci. Coba login ke
                    facebook.com terlebih dahulu.
                  </li>
                  <li>
                    Jika menggunakan 2FA, pastikan kode verifikasi dimasukkan dengan benar. Gunakan
                    backup codes jika kehilangan akses ke aplikasi authenticator.
                  </li>
                  <li>
                    Clear cache dan cookies browser, atau coba gunakan browser lain atau mode
                    incognito.
                  </li>
                  <li>
                    Pastikan JavaScript diaktifkan di browser Anda.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-start gap-3">
            <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold">
                Tidak Bisa Menautkan Page/Instagram/Ad Account
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Kemungkinan Penyebab:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Aset sudah ditautkan ke Business Manager lain</li>
                  <li>Tidak memiliki permission admin untuk aset tersebut</li>
                  <li>Aset sedang dalam proses verifikasi atau review</li>
                  <li>Limit jumlah aset di Business Manager tercapai</li>
                </ul>
                <p className="mt-3">
                  <strong>Solusi:</strong>
                </p>
                <ol className="ml-4 list-decimal space-y-1">
                  <li>
                    Periksa apakah aset sudah ditautkan ke Business Manager lain. Jika ya, minta
                    admin Business Manager tersebut untuk melepasnya terlebih dahulu.
                  </li>
                  <li>
                    Pastikan Anda memiliki peran admin di Page, Instagram Account, atau Ad Account
                    yang ingin ditautkan.
                  </li>
                  <li>
                    Untuk Ad Account, pastikan tidak sedang dalam proses verifikasi atau memiliki
                    masalah pembayaran.
                  </li>
                  <li>
                    Periksa limit Business Manager Anda. Setiap Business Manager memiliki batas
                    jumlah aset yang dapat ditautkan.
                  </li>
                  <li>
                    Coba refresh halaman atau logout dan login ulang ke Business Manager.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-start gap-3">
            <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold">Anggota Tim Tidak Bisa Mengakses Aset</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Kemungkinan Penyebab:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Undangan belum diterima atau expired</li>
                  <li>Permission tidak diberikan dengan benar</li>
                  <li>Aset tidak ditautkan dengan benar ke Business Manager</li>
                  <li>Akun Facebook anggota tim bermasalah</li>
                </ul>
                <p className="mt-3">
                  <strong>Solusi:</strong>
                </p>
                <ol className="ml-4 list-decimal space-y-1">
                  <li>
                    Pastikan anggota tim sudah menerima dan menerima undangan. Periksa email mereka
                    (termasuk folder spam).
                  </li>
                  <li>
                    Verifikasi bahwa permission sudah diberikan dengan benar di aset tersebut.
                    Periksa di Business Settings &gt; Accounts &gt; [Jenis Aset] &gt; [Aset
                    Tertentu] &gt; People.
                  </li>
                  <li>
                    Pastikan aset sudah benar-benar ditautkan ke Business Manager dan tidak hanya
                    di Business Manager lain.
                  </li>
                  <li>
                    Minta anggota tim untuk memastikan akun Facebook mereka aktif dan dapat login
                    dengan normal.
                  </li>
                  <li>
                    Coba hapus dan tambahkan kembali anggota tim dengan permission yang sesuai.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-start gap-3">
            <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold">Verifikasi Business Manager Ditolak</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Kemungkinan Penyebab:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Dokumen tidak jelas atau tidak lengkap</li>
                  <li>Informasi tidak sesuai dengan dokumen</li>
                  <li>Dokumen sudah expired atau tidak valid</li>
                  <li>Alamat bisnis tidak sesuai</li>
                </ul>
                <p className="mt-3">
                  <strong>Solusi:</strong>
                </p>
                <ol className="ml-4 list-decimal space-y-1">
                  <li>
                    Baca email penolakan dari Meta untuk mengetahui alasan spesifik penolakan.
                  </li>
                  <li>
                    Pastikan semua dokumen yang diupload jelas, lengkap, dan masih berlaku. Foto
                    dokumen harus dapat dibaca dengan jelas.
                  </li>
                  <li>
                    Pastikan informasi yang dimasukkan (nama bisnis, alamat, dll) konsisten dengan
                    dokumen legal yang diupload.
                  </li>
                  <li>
                    Perbaiki masalah yang disebutkan dalam email penolakan, lalu ajukan verifikasi
                    ulang.
                  </li>
                  <li>
                    Jika masih ditolak, hubungi support Meta atau konsultasikan dengan tim Hadona
                    untuk bantuan.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-start gap-3">
            <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold">Tidak Bisa Membuat atau Edit Kampanye</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Kemungkinan Penyebab:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Permission tidak cukup (bukan Admin atau Advertiser)</li>
                  <li>Ad Account tidak aktif atau memiliki masalah pembayaran</li>
                  <li>Page atau Instagram tidak ditautkan dengan benar</li>
                  <li>Ad Account mencapai limit budget atau kampanye</li>
                </ul>
                <p className="mt-3">
                  <strong>Solusi:</strong>
                </p>
                <ol className="ml-4 list-decimal space-y-1">
                  <li>
                    Periksa permission Anda di Ad Account. Pastikan Anda memiliki permission Admin
                    atau Advertiser.
                  </li>
                  <li>
                    Periksa status Ad Account di Business Settings. Pastikan tidak ada masalah
                    pembayaran atau verifikasi.
                  </li>
                  <li>
                    Pastikan Page dan Instagram Account sudah ditautkan dengan benar ke Business
                    Manager dan Ad Account.
                  </li>
                  <li>
                    Periksa apakah Ad Account mencapai limit budget harian atau jumlah kampanye
                    maksimal.
                  </li>
                  <li>
                    Coba refresh halaman atau logout dan login ulang ke Business Manager.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-start gap-3">
            <Info className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold">Business Manager Lambat atau Error</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Kemungkinan Penyebab:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Koneksi internet lambat atau tidak stabil</li>
                  <li>Browser cache penuh atau bermasalah</li>
                  <li>Masalah dengan server Meta</li>
                  <li>Extension browser yang mengganggu</li>
                </ul>
                <p className="mt-3">
                  <strong>Solusi:</strong>
                </p>
                <ol className="ml-4 list-decimal space-y-1">
                  <li>
                    Periksa koneksi internet Anda. Coba refresh halaman atau gunakan koneksi yang
                    lebih stabil.
                  </li>
                  <li>
                    Clear cache dan cookies browser. Atau coba gunakan mode incognito/private
                    browsing.
                  </li>
                  <li>
                    Periksa status Meta Business Suite atau Facebook status page untuk melihat
                    apakah ada masalah dengan server Meta.
                  </li>
                  <li>
                    Nonaktifkan extension browser yang mungkin mengganggu, terutama ad blocker atau
                    privacy extension.
                  </li>
                  <li>
                    Coba gunakan browser lain atau update browser ke versi terbaru.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-start gap-3">
            <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold">Tidak Bisa Mengatur 2FA</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Kemungkinan Penyebab:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>QR code tidak bisa di-scan</li>
                  <li>Kode verifikasi tidak valid</li>
                  <li>Nomor telepon tidak menerima SMS</li>
                  <li>Waktu smartphone tidak sinkron</li>
                </ul>
                <p className="mt-3">
                  <strong>Solusi:</strong>
                </p>
                <ol className="ml-4 list-decimal space-y-1">
                  <li>
                    Jika QR code tidak bisa di-scan, gunakan opsi "Can't scan?" untuk memasukkan
                    kode setup secara manual.
                  </li>
                  <li>
                    Pastikan kode verifikasi dimasukkan dengan benar dan masih valid (kode berubah
                    setiap 30 detik).
                  </li>
                  <li>
                    Untuk SMS, pastikan nomor telepon aktif dan dapat menerima SMS. Periksa juga
                    apakah nomor sudah benar.
                  </li>
                  <li>
                    Pastikan waktu di smartphone sudah disinkronkan dengan benar. Kode
                    authenticator bergantung pada waktu yang akurat.
                  </li>
                  <li>
                    Coba setup ulang 2FA atau gunakan metode alternatif (SMS jika menggunakan App,
                    atau sebaliknya).
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Kapan Harus Menghubungi Support?</h2>
      <p>
        Hubungi tim support jika Anda mengalami masalah berikut:
      </p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            Akun Business Manager atau Facebook pribadi terkunci atau dinonaktifkan tanpa alasan
            jelas
          </div>
        </li>
        <li className="flex items-start gap-3">
          <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            Kehilangan akses ke Business Manager dan tidak memiliki backup admin
          </div>
        </li>
        <li className="flex items-start gap-3">
          <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            Masalah pembayaran yang tidak dapat diselesaikan sendiri
          </div>
        </li>
        <li className="flex items-start gap-3">
          <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            Masalah verifikasi yang berulang kali ditolak tanpa alasan jelas
          </div>
        </li>
        <li className="flex items-start gap-3">
          <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            Bug atau error yang jelas dari sistem Meta
          </div>
        </li>
      </ul>

      <Callout type="info" title="Kontak Support">
        <div className="space-y-2">
          <p>
            <strong>Support Hadona:</strong> Hubungi tim support Hadona melalui email atau chat
            support untuk bantuan terkait Business Manager dan kampanye iklan.
          </p>
          <p>
            <strong>Support Meta:</strong> Kunjungi{' '}
            <a
              href="https://www.facebook.com/business/help"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hadona-primary hover:underline"
            >
              Facebook Business Help Center
            </a>{' '}
            atau gunakan fitur Help di Business Manager untuk menghubungi support Meta.
          </p>
        </div>
      </Callout>

      <h2>Tips Mencegah Masalah</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">1. Backup Admin</h4>
          <p className="text-sm text-gray-600">
            Pastikan selalu ada minimal 2 admin untuk setiap Business Manager dan aset penting
            untuk menghindari kehilangan akses.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">2. Dokumentasi</h4>
          <p className="text-sm text-gray-600">
            Simpan dokumentasi tentang struktur Business Manager, siapa yang memiliki akses apa,
            dan informasi penting lainnya.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">3. Review Berkala</h4>
          <p className="text-sm text-gray-600">
            Lakukan review permission dan struktur Business Manager secara berkala untuk memastikan
            semuanya masih relevan dan aman.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">4. Keamanan</h4>
          <p className="text-sm text-gray-600">
            Aktifkan 2FA untuk semua akun, gunakan password yang kuat, dan jangan membagikan
            kredensial login kepada siapa pun.
          </p>
        </div>
      </div>

      <Callout type="success" title="Selesai">
        <p>
          Setelah menyelesaikan setup Business Manager, Anda siap untuk mulai membuat kampanye
          iklan. Lanjutkan ke bagian Ads Setup untuk mempelajari cara membuat dan mengoptimalkan
          kampanye iklan Anda.
        </p>
      </Callout>
    </DocLayout>
  )
}
