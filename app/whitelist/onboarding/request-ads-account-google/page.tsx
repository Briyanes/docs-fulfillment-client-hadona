import ArticleLayout from '@/components/ArticleLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { CheckCircle2, Clock, AlertCircle, ExternalLink, Video, FileCheck, Globe } from 'lucide-react'

export default function RequestAdsAccountGooglePage() {
  return (
    <ArticleLayout
      title="Request Google Ads Account (Whitelist)"
      categoryHref="/whitelist/onboarding"
      categoryName="Onboarding"
      description="Cara mengajukan permintaan Google Ads Account untuk Client Whitelist — langkah demi langkah melalui dashboard Hadona"
      prevHref="/whitelist/onboarding/request-ads-account-meta"
      prevTitle="Request Meta Ads Account"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Panduan ini menjelaskan cara mengajukan permintaan Google Ads Account melalui dashboard
          Hadona. Dengan request ini, tim Hadona akan membuatkan dan mengelola akun Google Ads
          untuk kampanye iklan berbasis Google Search, Display, YouTube, dan Shopping.
        </p>
      </div>

      {/* Video Tutorial Banner */}
      <div className="my-6 flex items-start gap-4 rounded-xl border-2 border-hadona-primary/30 bg-hadona-primary/5 p-5">
        <div className="flex-shrink-0 rounded-lg bg-hadona-primary p-2.5">
          <Video className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 mb-1">Video Tutorial Tersedia</p>
          <p className="text-sm text-gray-600">
            Panduan ini dilengkapi dengan video tutorial{' '}
            <strong>"Tutorial Req Ads Acc WL Google"</strong>. Ikuti langkah-langkah di video
            tersebut bersamaan dengan membaca panduan ini.
          </p>
        </div>
      </div>

      <h2>Apa itu Google Ads Account Request?</h2>
      <p>
        Google Ads Account adalah akun iklan di platform Google yang memungkinkan bisnis Anda
        tampil di Google Search, Google Display Network, YouTube, dan Google Shopping. Sebagai
        Client Whitelist, tim Hadona akan mengelola akun ini sepenuhnya untuk Anda — mulai dari
        pembuatan hingga optimasi kampanye.
      </p>
      <p>Dengan mengajukan <strong>Google Ads Account Request</strong>, tim Hadona akan:</p>
      <ul className="my-4 ml-5 list-disc space-y-2 text-gray-700">
        <li>Membuat atau menghubungkan Google Ads Account ke Google Manager Account Hadona</li>
        <li>Menghubungkan Google Ads dengan Google Analytics 4 (GA4) website Anda</li>
        <li>Mengonfigurasi konversi tracking (website, telepon, atau form)</li>
        <li>Menyiapkan struktur kampanye awal sesuai kebutuhan bisnis</li>
        <li>Setup Google Tag Manager (jika diperlukan)</li>
      </ul>

      <h2>Perbedaan Google Ads vs Meta Ads</h2>

      <div className="my-6 overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Aspek</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Google Ads</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Meta Ads</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Platform</td>
              <td className="px-4 py-3 text-sm text-gray-600">Google Search, YouTube, Display</td>
              <td className="px-4 py-3 text-sm text-gray-600">Facebook, Instagram, Messenger</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Intent Pengguna</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                High intent — pengguna aktif mencari produk/layanan
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Discovery — pengguna tidak sedang mencari, tapi tertarik
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Format Iklan</td>
              <td className="px-4 py-3 text-sm text-gray-600">Teks, banner, video, shopping</td>
              <td className="px-4 py-3 text-sm text-gray-600">Gambar, video, carousel, story</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900">Cocok Untuk</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Bisnis yang produknya dicari aktif di Google
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Brand awareness, retargeting, & audience baru
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="Apakah Perlu Kedua Akun?">
        <p>
          Banyak klien Hadona menjalankan iklan di kedua platform sekaligus untuk hasil
          yang maksimal. Google Ads tangkap demand yang sudah ada, Meta Ads ciptakan demand
          baru. Diskusikan dengan tim Hadona strategi terbaik untuk bisnis Anda.
        </p>
      </Callout>

      <h2>Persyaratan Sebelum Request</h2>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong className="text-gray-900">Website Aktif dengan Domain Sendiri</strong>
            <p className="mt-1 text-sm text-gray-600">
              Google Ads memerlukan website dengan domain yang valid (bukan subdomain gratis
              seperti .blogspot.com atau .wix.com). Website harus aktif dan dapat diakses.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong className="text-gray-900">Akun Gmail / Google Workspace</strong>
            <p className="mt-1 text-sm text-gray-600">
              Email Google yang akan dihubungkan ke Google Ads Account. Bisa menggunakan Gmail
              personal atau Google Workspace bisnis Anda.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong className="text-gray-900">Aksesibilitas Website</strong>
            <p className="mt-1 text-sm text-gray-600">
              Website harus memiliki halaman Privacy Policy, dan konten website harus mematuhi
              Google Ads policies (tidak ada produk terlarang, konten dewasa, dll).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong className="text-gray-900">Akses Google Analytics 4 (Disarankan)</strong>
            <p className="mt-1 text-sm text-gray-600">
              Jika website sudah menggunakan GA4, siapkan akses Editor ke properti GA4 untuk
              dihubungkan ke Google Ads. Jika belum ada, tim Hadona akan membantu setup.
            </p>
          </div>
        </div>
      </div>

      <h2>Cara Mengajukan Request</h2>

      <StepGuide
        title="Langkah-langkah Request Google Ads Account"
        steps={[
          {
            title: 'Login ke Dashboard Hadona',
            content: (
              <div>
                <p className="mb-3">
                  Login ke dashboard Hadona di <strong>app.hadona.id</strong> menggunakan
                  email dan password Anda.
                </p>
                <p className="text-sm text-gray-600">
                  Pastikan Anda menggunakan akun dengan role <strong>Admin</strong> atau{' '}
                  <strong>PIC</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Buka Menu "Akun Iklan" → Tab "Google Ads"',
            content: (
              <div>
                <p className="mb-3">
                  Di sidebar kiri, klik <strong>"Akun Iklan"</strong> lalu pilih tab{' '}
                  <strong>"Google Ads"</strong>.
                </p>
                <p className="text-sm text-gray-600">
                  Di halaman ini Anda dapat melihat status Google Ads Account yang sudah ada
                  atau mengajukan request baru.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik "Ajukan Request Google Ads"',
            content: (
              <div>
                <p className="mb-3">
                  Klik tombol <strong>"+ Ajukan Request Google Ads"</strong>. Formulir
                  pengajuan akan muncul di halaman yang sama.
                </p>
              </div>
            ),
          },
          {
            title: 'Isi Informasi Bisnis & Website',
            content: (
              <div>
                <p className="mb-3">
                  Isi formulir dengan informasi bisnis Anda:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Nama Bisnis</strong> — Nama resmi usaha atau brand Anda
                  </li>
                  <li>
                    <strong>URL Website Utama</strong> — Contoh: https://www.tokobajumaju.com
                  </li>
                  <li>
                    <strong>Kategori Bisnis</strong> — Pilih dari daftar (Retail, Jasa, Properti,
                    Kuliner, Pendidikan, Kesehatan, dll)
                  </li>
                  <li>
                    <strong>Negara Operasional</strong> — Indonesia (default)
                  </li>
                  <li>
                    <strong>Mata Uang</strong> — IDR / Rupiah (default)
                  </li>
                  <li>
                    <strong>Email Gmail Bisnis</strong> — Email Google yang akan dihubungkan
                    sebagai Admin akun Google Ads
                  </li>
                </ul>
                <Callout type="warning" title="Pastikan URL Website Benar">
                  <p>
                    URL website yang Anda masukkan harus dapat diakses secara publik. Tim Hadona
                    akan melakukan verifikasi akses website sebelum membuat akun Google Ads.
                    Jika website belum aktif, proses request akan ditunda.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Isi Kebutuhan Kampanye',
            content: (
              <div>
                <p className="mb-3">Jelaskan kebutuhan kampanye Google Ads Anda:</p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Tipe Kampanye yang Diinginkan</strong> — Pilih satu atau lebih:
                    Search Ads, Display Ads, YouTube Ads, Shopping Ads, Performance Max
                  </li>
                  <li>
                    <strong>Target Kata Kunci (Keywords)</strong> — Masukkan 5–10 kata kunci
                    utama yang relevan dengan bisnis Anda (contoh: "baju anak murah", "jasa
                    renovasi rumah jakarta")
                  </li>
                  <li>
                    <strong>Estimasi Budget Bulanan</strong> — Rencanakan anggaran dalam Rupiah
                    (minimal Rp 3.000.000 / bulan untuk Google Ads)
                  </li>
                  <li>
                    <strong>Target Lokasi</strong> — Kota / provinsi / seluruh Indonesia
                  </li>
                  <li>
                    <strong>Tujuan Konversi</strong> — Form submission, telepon, pembelian,
                    WhatsApp chat, atau kunjungan toko fisik
                  </li>
                  <li>
                    <strong>URL Landing Page</strong> — Halaman tujuan dari iklan (boleh
                    berbeda dengan halaman utama website)
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Isi Informasi GA4 (Opsional tapi Disarankan)',
            content: (
              <div>
                <p className="mb-3">
                  Jika website Anda sudah menggunakan Google Analytics 4 (GA4), masukkan
                  informasi berikut agar tim Hadona dapat menghubungkan GA4 dengan Google Ads:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>GA4 Measurement ID</strong> — Dimulai dengan <code>G-</code>{' '}
                    (contoh: G-ABCDE12345). Dapat ditemukan di{' '}
                    <a
                      href="https://analytics.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hadona-primary hover:underline inline-flex items-center gap-1"
                    >
                      Google Analytics
                      <ExternalLink className="h-3 w-3" />
                    </a>{' '}
                    → Admin → Data Streams
                  </li>
                  <li>
                    <strong>Email Google dengan Akses GA4</strong> — Email yang memiliki role
                    Editor di properti GA4 (untuk proses linking)
                  </li>
                </ul>
                <Callout type="info" title="Belum Ada GA4?">
                  <p>
                    Jika website Anda belum menggunakan GA4, centang opsi{' '}
                    <strong>"Bantu saya setup GA4"</strong> di formulir. Tim Hadona akan
                    membuatkan properti GA4 dan menginstalnya di website Anda.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Upload Materi & Dokumen',
            content: (
              <div>
                <p className="mb-3">
                  Upload dokumen dan materi pendukung berikut:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Logo Bisnis</strong> — PNG/JPG, minimal 512×512 px (untuk Display Ads
                    & YouTube Ads)
                  </li>
                  <li>
                    <strong>Screenshot Website</strong> — Screenshot halaman utama website Anda
                    (untuk verifikasi tampilan)
                  </li>
                  <li>
                    <strong>Materi Iklan (Opsional)</strong> — Foto produk, banner, atau video
                    promosi jika sudah tersedia
                  </li>
                  <li>
                    <strong>Daftar Produk / Layanan</strong> — Deskripsi singkat produk atau
                    layanan utama yang akan diiklankan (format PDF atau Word)
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Review dan Submit',
            content: (
              <div>
                <p className="mb-3">
                  Periksa kembali semua informasi yang sudah diisi. Klik tombol{' '}
                  <strong>"Submit Request"</strong> untuk mengirimkan pengajuan.
                </p>
                <p className="text-sm text-gray-600">
                  Konfirmasi penerimaan akan dikirimkan via email dan WhatsApp dalam beberapa
                  menit.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Tracking Status Request</h2>
      <p>
        Pantau status request di menu <strong>Akun Iklan → Google Ads</strong>. Status yang
        mungkin muncul:
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
                Request diterima, tim sedang memeriksa data
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
                Tim sedang membuat dan mengonfigurasi akun Google Ads
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
                Tim memerlukan informasi tambahan
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Lengkapi data yang diminta
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3">
                <span className="inline-flex rounded-full bg-purple-100 px-2.5 py-1 text-xs font-semibold text-purple-700">
                  Verifikasi Akses
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Akun sudah disiapkan, menunggu konfirmasi akses dari Anda
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Terima undangan dari Google & Hadona
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">
                <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                  Selesai
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Akun Google Ads aktif dan siap digunakan
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
            Rata-rata proses pembuatan Google Ads Account memakan waktu{' '}
            <strong>2–4 hari kerja</strong> setelah semua dokumen dan informasi lengkap. Jika
            website perlu diperbaiki untuk memenuhi kebijakan Google, waktu bisa lebih lama.
          </p>
        </div>
      </div>

      <h2>Setelah Request Disetujui</h2>
      <p>
        Setelah status berubah menjadi <strong>"Selesai"</strong>, Anda akan mendapatkan:
      </p>

      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">Google Ads Account ID</strong>
            <p className="mt-1 text-sm text-gray-600">
              Nomor ID akun Google Ads (format: XXX-XXX-XXXX). Tersimpan di dashboard Hadona
              dan dapat diakses kapan saja.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">Akses View ke Google Ads</strong>
            <p className="mt-1 text-sm text-gray-600">
              Undangan email untuk mengakses akun Google Ads sebagai Standard User (view &
              edit), sehingga Anda dapat memantau kampanye secara langsung.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">Google Tag Terpasang</strong>
            <p className="mt-1 text-sm text-gray-600">
              Google Tag (gtag.js) sudah diinstal di website Anda oleh tim Hadona untuk
              tracking konversi dan remarketing.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">GA4 Terhubung ke Google Ads</strong>
            <p className="mt-1 text-sm text-gray-600">
              Google Analytics 4 Anda sudah dihubungkan dengan akun Google Ads untuk tracking
              yang lebih akurat dan data audiens untuk remarketing.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong className="text-gray-900">Briefing Kampanye Pertama</strong>
            <p className="mt-1 text-sm text-gray-600">
              Tim Hadona akan menghubungi Anda untuk briefing strategi kampanye Google Ads
              pertama berdasarkan tujuan dan anggaran yang sudah diinformasikan.
            </p>
          </div>
        </div>
      </div>

      <h2>Memberikan Akses ke Google Account Anda</h2>
      <p>
        Beberapa proses setup Google Ads memerlukan akses ke akun Google Anda. Berikut cara
        memberikan akses yang diperlukan:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-4 w-4 text-hadona-primary" />
            <strong className="text-gray-900 text-sm">Akses Google Analytics 4</strong>
          </div>
          <ol className="ml-4 list-decimal space-y-1 text-sm text-gray-700">
            <li>
              Buka{' '}
              <a
                href="https://analytics.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hadona-primary hover:underline inline-flex items-center gap-1"
              >
                Google Analytics
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>Klik ikon gear (Admin) di bagian bawah kiri</li>
            <li>Pada kolom Property, klik <strong>Property Access Management</strong></li>
            <li>Klik tombol <strong>"+"</strong> lalu pilih Add Users</li>
            <li>Masukkan email Google yang diberikan tim Hadona</li>
            <li>Berikan role <strong>Editor</strong> lalu klik Add</li>
          </ol>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-4 w-4 text-hadona-primary" />
            <strong className="text-gray-900 text-sm">Akses Google Search Console (Jika Ada)</strong>
          </div>
          <ol className="ml-4 list-decimal space-y-1 text-sm text-gray-700">
            <li>
              Buka{' '}
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hadona-primary hover:underline inline-flex items-center gap-1"
              >
                Google Search Console
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>Pilih property website Anda</li>
            <li>Klik <strong>Settings → Users and permissions</strong></li>
            <li>Klik <strong>"Add User"</strong> dan masukkan email tim Hadona</li>
            <li>Berikan role <strong>Full</strong> lalu klik Add</li>
          </ol>
        </div>
      </div>

      <Callout type="info" title="Panduan Linking GA4">
        <p>
          Untuk panduan lengkap menghubungkan Google Ads dengan GA4, baca artikel{' '}
          <a href="/whitelist/google-integration/linking-google-ads" className="font-semibold underline">
            Linking Google Ads
          </a>{' '}
          di bagian Google Integration.
        </p>
      </Callout>

      <h2>Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-red-100 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
            <div>
              <strong className="text-red-800">Website ditolak karena tidak memenuhi Google Ads Policy</strong>
              <p className="mt-1 text-sm text-red-700">
                Google Ads memiliki kebijakan ketat terhadap konten website. Pastikan website
                Anda memiliki: halaman Privacy Policy, Kontak yang jelas, konten yang tidak
                melanggar kebijakan (tidak ada produk replika, obat terlarang, konten dewasa,
                dll). Tim Hadona akan memberikan panduan perbaikan jika website Anda terkena
                masalah ini.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-red-100 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
            <div>
              <strong className="text-red-800">Tidak menerima undangan akses Google Ads</strong>
              <p className="mt-1 text-sm text-red-700">
                Periksa inbox email Gmail Anda dari Google (pengirim: noreply@google.com).
                Cek juga folder Spam. Undangan berlaku selama 14 hari. Jika sudah kadaluarsa,
                minta tim Hadona untuk mengirim ulang undangan.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-red-100 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
            <div>
              <strong className="text-red-800">Akun terblokir oleh Google</strong>
              <p className="mt-1 text-sm text-red-700">
                Jika akun Google Ads diblokir atau di-suspend oleh Google, tim Hadona akan
                melakukan proses appeal. Ini bisa memakan waktu 1–7 hari tergantung alasan
                pemblokiran. Segera hubungi tim Hadona via WhatsApp jika hal ini terjadi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Callout type="success" title="Semua Akun Iklan Sudah Siap!">
        <p>
          Setelah Google Ads Account selesai disetup, Anda sudah memiliki semua yang
          dibutuhkan untuk memulai kampanye iklan digital. Tim Hadona akan menghubungi Anda
          untuk memulai proses perencanaan dan eksekusi kampanye. Selanjutnya, pelajari cara
          memantau data di bagian{' '}
          <a href="/whitelist/monitoring" className="font-semibold underline">
            Monitoring
          </a>.
        </p>
      </Callout>
    </ArticleLayout>
  )
}
