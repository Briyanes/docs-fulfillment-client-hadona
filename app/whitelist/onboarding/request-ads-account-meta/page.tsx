import ArticleLayout from '@/components/ArticleLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { CheckCircle2, Clock, AlertCircle, ExternalLink, FileCheck } from 'lucide-react'

export default function RequestAdsAccountMetaPage() {
  return (
    <ArticleLayout
      title="Request Meta Ads Account (Whitelist)"
      categoryHref="/whitelist/onboarding"
      categoryName="Onboarding"
      description="Cara mengajukan permintaan Meta Ads Account untuk Client Whitelist — langkah demi langkah melalui dashboard Hadona"
      prevHref="/whitelist/onboarding/registrasi-dashboard"
      prevTitle="Registrasi & Dashboard"
      nextHref="/whitelist/onboarding/request-ads-account-google"
      nextTitle="Request Google Ads Account"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Panduan ini menjelaskan cara mengajukan permintaan Meta Ads Account (Facebook &
          Instagram Ads) melalui dashboard Hadona. Proses ini diperlukan agar tim Hadona dapat
          membuatkan akun iklan Meta yang sesuai dengan kebutuhan bisnis Anda.
        </p>
      </div>

      {/* Video Tutorial */}
      <div className="my-6">
        <p className="font-semibold text-gray-900 mb-2">Video Tutorial: Request Meta Ads Account</p>
        <video
          className="w-full rounded-xl border border-gray-200"
          controls
          preload="metadata"
        >
          <source src="/video/Tutorial Req Ads Acc WL Meta.mp4" type="video/mp4" />
          Browser Anda tidak mendukung pemutaran video.
        </video>
      </div>

      <h2>Apa itu Meta Ads Account Request?</h2>
      <p>
        Meta Ads Account adalah akun iklan di platform Meta (Facebook & Instagram) yang
        digunakan untuk menjalankan kampanye iklan. Sebagai Client Whitelist, Anda tidak perlu
        membuat akun sendiri — tim Hadona akan membuatkan dan mengelola akun iklan Meta khusus
        untuk bisnis Anda.
      </p>
      <p>
        Dengan mengajukan <strong>Meta Ads Account Request</strong>, Anda memberikan informasi
        bisnis yang diperlukan agar tim Hadona dapat:
      </p>
      <ul className="my-4 ml-5 list-disc space-y-2 text-gray-700">
        <li>Membuat atau menghubungkan Ad Account ke Business Manager Hadona</li>
        <li>Mengonfigurasi Meta Pixel sesuai dengan website Anda</li>
        <li>Menyiapkan audience dan targeting awal</li>
        <li>Menghubungkan Facebook Page dan akun Instagram Anda</li>
        <li>Membangun struktur kampanye yang optimal</li>
      </ul>

      <h2>Persyaratan Sebelum Request</h2>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong className="text-gray-900">Akun Facebook Personal Aktif</strong>
            <p className="mt-1 text-sm text-gray-600">
              Diperlukan untuk menghubungkan ke Facebook Page dan Business Manager. Pastikan
              akun Facebook Anda sudah aktif minimal 30 hari.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong className="text-gray-900">Facebook Page (Fanspage) Bisnis</strong>
            <p className="mt-1 text-sm text-gray-600">
              Halaman Facebook resmi bisnis Anda. Jika belum ada, tim Hadona dapat membantu
              pembuatannya. Anda harus memiliki akses Admin pada Page tersebut.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong className="text-gray-900">Akun Instagram Business (Opsional)</strong>
            <p className="mt-1 text-sm text-gray-600">
              Jika ingin menjalankan iklan di Instagram. Pastikan akun Instagram sudah
              diubah ke tipe Business atau Creator dan belum terhubung ke Business Manager lain.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong className="text-gray-900">Metode Pembayaran</strong>
            <p className="mt-1 text-sm text-gray-600">
              Kartu kredit atau debit internasional (Visa / Mastercard) untuk billing Meta Ads.
              Pengelolaan budget dan pembayaran diatasi oleh tim Hadona sesuai perjanjian.
            </p>
          </div>
        </div>
      </div>

      <h2>Cara Mengajukan Request</h2>

      <StepGuide
        title="Langkah-langkah Request Meta Ads Account"
        steps={[
          {
            title: 'Login ke Dashboard Hadona',
            content: (
              <div>
                <p className="mb-3">
                  Login ke dashboard Hadona di{' '}
                  <strong>app.hadona.id</strong> menggunakan email dan password yang sudah
                  didaftarkan.
                </p>
                <p className="text-sm text-gray-600">
                  Pastikan Anda menggunakan akun dengan role <strong>Admin</strong> atau{' '}
                  <strong>PIC</strong> untuk dapat mengajukan request Ads Account.
                </p>
              </div>
            ),
          },
          {
            title: 'Buka Menu "Akun Iklan"',
            content: (
              <div>
                <p className="mb-3">
                  Di sidebar kiri dashboard, klik menu <strong>"Akun Iklan"</strong> lalu
                  pilih tab <strong>"Meta Ads"</strong>.
                </p>
                <p className="text-sm text-gray-600">
                  Pada halaman ini Anda dapat melihat status semua request Ads Account yang
                  pernah diajukan beserta status pengerjaannya.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik "Ajukan Request Baru"',
            content: (
              <div>
                <p className="mb-3">
                  Klik tombol <strong>"+ Ajukan Request Meta Ads"</strong> di bagian kanan atas
                  halaman. Formulir pengajuan akan muncul.
                </p>
                <Callout type="info" title="Hanya Satu Request Aktif">
                  <p>
                    Anda hanya dapat memiliki satu request Meta Ads yang sedang diproses dalam
                    satu waktu. Jika ada request sebelumnya yang belum selesai, selesaikan
                    dahulu sebelum mengajukan yang baru.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Isi Informasi Facebook Page',
            content: (
              <div>
                <p className="mb-3">
                  Isi detail Facebook Page bisnis Anda:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Nama Page</strong> — Nama Facebook Page bisnis Anda
                    (contoh: "Toko Baju Maju")
                  </li>
                  <li>
                    <strong>URL Page</strong> — Link lengkap Facebook Page
                    (contoh: facebook.com/tokobajumaju)
                  </li>
                  <li>
                    <strong>Kategori Page</strong> — Jenis bisnis sesuai kategori Meta
                    (contoh: Retail, Restaurant, Service, dll)
                  </li>
                  <li>
                    <strong>Email Admin Page</strong> — Email akun Facebook personal yang
                    menjadi Admin Page tersebut
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Isi Informasi Akun Instagram (Opsional)',
            content: (
              <div>
                <p className="mb-3">
                  Jika ingin menjalankan iklan di Instagram, isi bagian ini:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Username Instagram</strong> — Tanpa tanda @ (contoh: tokobajumaju)
                  </li>
                  <li>
                    <strong>Tipe Akun</strong> — Business atau Creator
                  </li>
                  <li>
                    <strong>Apakah sudah terhubung ke Facebook Page?</strong> — Centang jika
                    sudah, atau biarkan kosong jika belum (tim Hadona akan membantu menghubungkan)
                  </li>
                </ul>
              </div>
            ),
            optional: false,
          },
          {
            title: 'Isi Informasi Kampanye',
            content: (
              <div>
                <p className="mb-3">
                  Berikan gambaran kebutuhan kampanye iklan Anda:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Tujuan Kampanye</strong> — Pilih satu atau lebih:{' '}
                    Brand Awareness, Traffic Website, Leads, Penjualan, Pesan WhatsApp
                  </li>
                  <li>
                    <strong>Estimasi Budget Bulanan</strong> — Perkiraan anggaran iklan per
                    bulan dalam Rupiah (contoh: Rp 5.000.000 / bulan)
                  </li>
                  <li>
                    <strong>Target Lokasi</strong> — Kota, provinsi, atau nasional
                  </li>
                  <li>
                    <strong>URL Landing Page / Website</strong> — Halaman tujuan dari iklan
                    (wajib jika tujuan kampanye adalah Traffic atau Penjualan)
                  </li>
                  <li>
                    <strong>Nomor WhatsApp Bisnis</strong> — Untuk kampanye Click-to-WhatsApp
                    (jika diperlukan)
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Upload Dokumen Pendukung',
            content: (
              <div>
                <p className="mb-3">
                  Upload dokumen yang diperlukan untuk verifikasi bisnis:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Screenshot / Bukti Kepemilikan Page</strong> — Screenshot halaman
                    About Facebook Page yang menampilkan nama akun admin
                  </li>
                  <li>
                    <strong>Logo Bisnis</strong> — File PNG atau JPG, ukuran minimal 300×300 px
                  </li>
                  <li>
                    <strong>Produk / Materi Iklan (Opsional)</strong> — Foto produk atau materi
                    visual yang akan digunakan untuk iklan (format JPG, PNG, atau MP4)
                  </li>
                </ul>
                <Callout type="warning" title="Format File">
                  <p>
                    Ukuran file maksimal <strong>10 MB</strong> per file. Format yang diterima:
                    JPG, PNG, PDF, MP4. Pastikan gambar berkualitas tinggi untuk hasil iklan
                    yang optimal.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Review dan Submit',
            content: (
              <div>
                <p className="mb-3">
                  Periksa kembali semua informasi yang sudah diisi. Pastikan tidak ada yang
                  kosong atau salah. Klik tombol <strong>"Submit Request"</strong> untuk
                  mengirimkan pengajuan.
                </p>
                <p className="text-sm text-gray-600">
                  Setelah submit, Anda akan menerima konfirmasi via email dan WhatsApp bahwa
                  request sudah diterima oleh tim Hadona.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Tracking Status Request</h2>
      <p>
        Setelah request disubmit, Anda dapat memantau statusnya di dashboard menu{' '}
        <strong>Akun Iklan → Meta Ads</strong>. Berikut arti dari masing-masing status:
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Arti</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tindakan Anda</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3">
                <span className="inline-flex rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700">
                  Menunggu Review
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Request sudah diterima, tim Hadona sedang memeriksa kelengkapan data
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">Tunggu konfirmasi</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3">
                <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  Diproses
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Tim Hadona sedang membuat dan mengonfigurasi akun iklan
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">Tunggu notifikasi</td>
            </tr>
            <tr>
              <td className="px-4 py-3">
                <span className="inline-flex rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">
                  Butuh Info
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Tim Hadona memerlukan informasi / dokumen tambahan dari Anda
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Periksa pesan dari tim dan lengkapi data
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3">
                <span className="inline-flex rounded-full bg-purple-100 px-2.5 py-1 text-xs font-semibold text-purple-700">
                  Menunggu Akses
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Akun iklan sudah disiapkan, menunggu Anda memberikan akses ke Facebook Page
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Ikuti instruksi yang dikirimkan tim
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">
                <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                  Selesai
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Akun iklan Meta sudah aktif dan siap digunakan
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Cek detail akun di dashboard
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-6 flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
        <div>
          <strong className="text-gray-900">Estimasi Waktu Pengerjaan</strong>
          <p className="mt-1 text-sm text-gray-600">
            Rata-rata proses pembuatan Meta Ads Account memakan waktu{' '}
            <strong>1–3 hari kerja</strong> setelah semua dokumen dan informasi lengkap. Waktu
            bisa lebih lama jika diperlukan verifikasi bisnis tambahan dari Meta.
          </p>
        </div>
      </div>

      <h2>Setelah Request Disetujui</h2>
      <p>
        Setelah status berubah menjadi <strong>"Selesai"</strong>, Anda akan menerima notifikasi
        dan dapat melihat detail akun iklan di dashboard. Berikut yang Anda dapatkan:
      </p>

      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">Ad Account ID</strong>
            <p className="mt-1 text-sm text-gray-600">
              Nomor unik identifikasi akun iklan Meta Anda. Disimpan di dashboard untuk
              referensi.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">Meta Pixel ID</strong>
            <p className="mt-1 text-sm text-gray-600">
              ID Pixel yang sudah dibuat dan perlu dipasang di website Anda untuk tracking
              konversi dan retargeting.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">Akses Business Manager</strong>
            <p className="mt-1 text-sm text-gray-600">
              Undangan sebagai Analyst untuk melihat performa kampanye melalui Meta Ads Manager
              (view-only access, pengelolaan dilakukan oleh tim Hadona).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">Briefing Kampanye Pertama</strong>
            <p className="mt-1 text-sm text-gray-600">
              Tim Hadona akan menghubungi Anda untuk briefing kampanye pertama melalui
              WhatsApp atau video call.
            </p>
          </div>
        </div>
      </div>

      <h2>Memberikan Akses ke Facebook Page</h2>
      <p>
        Salah satu langkah krusial adalah memberikan akses ke Facebook Page Anda kepada tim
        Hadona. Berikut cara melakukannya:
      </p>

      <ol className="my-4 ml-5 list-decimal space-y-3 text-gray-700">
        <li>
          Login ke{' '}
          <a
            href="https://business.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hadona-primary hover:underline inline-flex items-center gap-1"
          >
            Meta Business Suite
            <ExternalLink className="h-3 w-3" />
          </a>
        </li>
        <li>
          Buka menu <strong>Pengaturan Bisnis → Halaman</strong>
        </li>
        <li>
          Pilih Facebook Page bisnis Anda
        </li>
        <li>
          Klik <strong>"Tambahkan Orang"</strong> dan masukkan email yang diberikan tim Hadona
        </li>
        <li>
          Berikan akses minimal sebagai <strong>"Pengiklan"</strong> (Advertiser)
        </li>
        <li>
          Klik <strong>"Simpan Perubahan"</strong>
        </li>
      </ol>

      <Callout type="info" title="Panduan Lengkap">
        <p>
          Untuk panduan langkah-by-langkah cara menghubungkan Facebook Page dan memberikan
          akses ke tim Hadona, lihat artikel{' '}
          <a href="/agency/business-manager/linking-fanspage" className="font-semibold underline">
            Linking Fanspage
          </a>.
        </p>
      </Callout>

      <Callout type="success" title="Meta Ads Account Siap!">
        <p>
          Setelah semua langkah selesai, akun Meta Ads Anda sudah aktif. Langkah selanjutnya
          adalah mengajukan <strong>Request Google Ads Account</strong> jika Anda juga ingin
          menjalankan kampanye di Google, atau mulai diskusi strategi kampanye pertama Anda
          dengan tim Hadona.
        </p>
      </Callout>

      <h2>Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-red-100 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
            <div>
              <strong className="text-red-800">Request ditolak karena Facebook Page belum memenuhi syarat</strong>
              <p className="mt-1 text-sm text-red-700">
                Facebook Page Anda mungkin masih baru dibuat (kurang dari 7 hari) atau belum
                memiliki konten. Pastikan Page sudah aktif, memiliki foto profil, cover photo,
                dan minimal beberapa postingan sebelum mengajukan request.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-red-100 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
            <div>
              <strong className="text-red-800">Akun Facebook Personal Dibatasi Meta</strong>
              <p className="mt-1 text-sm text-red-700">
                Jika akun Facebook personal Anda memiliki pembatasan dari Meta (checkpoint atau
                disabled), proses pembuatan Ads Account akan terkendala. Selesaikan verifikasi
                di Facebook terlebih dahulu, atau gunakan akun Facebook lain yang tidak
                dibatasi.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-red-100 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
            <div>
              <strong className="text-red-800">Tidak menerima notifikasi setelah submit</strong>
              <p className="mt-1 text-sm text-red-700">
                Periksa folder Spam di email Anda. Pastikan juga nomor WhatsApp yang didaftarkan
                sudah benar. Jika masih tidak ada notifikasi dalam 1×24 jam kerja, hubungi tim
                Hadona langsung melalui WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
