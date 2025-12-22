import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { CheckCircle2, AlertCircle, Search, Eye, Activity } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Verifikasi Instalasi"
      categoryHref="/whitelist/pixel-setup"
      categoryName="Pixel Setup"
      prevHref="/whitelist/pixel-setup/instalasi-partner"
      prevTitle="Instalasi via Partner"
      nextHref="/whitelist/pixel-setup/testing"
      nextTitle="Testing Pixel"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Setelah menginstal Meta Pixel, penting untuk memverifikasi bahwa pixel terpasang dengan
          benar dan mengirim data ke Meta. Panduan ini menjelaskan berbagai metode verifikasi yang
          dapat Anda gunakan.
        </p>
      </div>

      <Callout type="info" title="Mengapa Verifikasi Penting?">
        <p>
          Verifikasi memastikan pixel bekerja dengan benar sebelum Anda mulai menjalankan kampanye.
          Ini membantu menghindari masalah tracking dan memastikan data yang akurat untuk optimasi
          kampanye.
        </p>
      </Callout>

      <h2>Metode Verifikasi</h2>
      <p>
        Ada beberapa cara untuk memverifikasi instalasi pixel. Kami merekomendasikan menggunakan
        kombinasi beberapa metode untuk memastikan verifikasi yang komprehensif:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Search className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Meta Pixel Helper</h3>
          <p className="text-sm text-gray-600">
            Browser extension resmi dari Meta untuk verifikasi visual pixel di halaman website.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Activity className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Events Manager</h3>
          <p className="text-sm text-gray-600">
            Cek activity pixel secara real-time di Meta Events Manager untuk melihat events yang
            terkirim.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Eye className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Browser DevTools</h3>
          <p className="text-sm text-gray-600">
            Gunakan Network tab di browser DevTools untuk melihat request ke Meta servers.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <CheckCircle2 className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Test Events Tool</h3>
          <p className="text-sm text-gray-600">
            Tool di Events Manager untuk test dan debug events secara real-time.
          </p>
        </div>
      </div>

      <h2>Verifikasi dengan Meta Pixel Helper</h2>
      <p>
        Meta Pixel Helper adalah cara termudah dan paling visual untuk verifikasi pixel. Berikut
        langkah-langkahnya:
      </p>

      <StepGuide
        title="Setup Meta Pixel Helper"
        steps={[
          {
            title: 'Install Browser Extension',
            content: (
              <div>
                <p className="mb-3">
                  Install Meta Pixel Helper dari Chrome Web Store atau Firefox Add-ons:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>
                    <a
                      href="https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hadona-primary hover:underline"
                    >
                      Chrome Extension
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://addons.mozilla.org/en-US/firefox/addon/meta-pixel-helper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hadona-primary hover:underline"
                    >
                      Firefox Add-on
                    </a>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Extension ini gratis dan resmi dari Meta.
                </p>
              </div>
            ),
          },
          {
            title: 'Kunjungi Website Anda',
            content: (
              <div>
                <p className="mb-3">
                  Buka website Anda di browser yang sudah terinstall Meta Pixel Helper. Extension akan
                  otomatis mendeteksi pixel di halaman.
                </p>
                <p className="text-sm text-gray-600">
                  Pastikan extension aktif (icon akan muncul di toolbar browser).
                </p>
              </div>
            ),
          },
          {
            title: 'Cek Status Pixel',
            content: (
              <div>
                <p className="mb-3">
                  Klik icon Meta Pixel Helper di toolbar browser. Extension akan menampilkan:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm">
                  <li>
                    <strong>Pixel ID</strong> - ID pixel yang terdeteksi di halaman
                  </li>
                  <li>
                    <strong>Status</strong> - Apakah pixel bekerja dengan benar (hijau) atau ada
                    masalah (merah/kuning)
                  </li>
                  <li>
                    <strong>Events</strong> - Daftar events yang terdeteksi (PageView, dll)
                  </li>
                  <li>
                    <strong>Warnings/Errors</strong> - Masalah yang ditemukan (jika ada)
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Interpretasi Hasil',
            content: (
              <div>
                <p className="mb-3">
                  <strong>Status Hijau:</strong> Pixel terdeteksi dan bekerja dengan benar.
                </p>
                <p className="mb-3">
                  <strong>Status Kuning:</strong> Pixel terdeteksi tapi ada warning (misalnya
                  duplicate pixel, missing events).
                </p>
                <p className="mb-3">
                  <strong>Status Merah:</strong> Ada error serius yang perlu diperbaiki.
                </p>
                <p className="text-sm text-gray-600">
                  Extension akan memberikan detail tentang masalah yang ditemukan.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Verifikasi dengan Events Manager</h2>
      <p>
        Events Manager adalah tool resmi Meta untuk melihat activity pixel secara real-time:
      </p>

      <StepGuide
        title="Cek Activity di Events Manager"
        steps={[
          {
            title: 'Buka Events Manager',
            content: (
              <div>
                <p className="mb-3">
                  Login ke{' '}
                  <a
                    href="https://business.facebook.com/events_manager2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline"
                  >
                    Events Manager
                  </a>{' '}
                  dan pilih pixel yang ingin Anda verifikasi.
                </p>
                <p className="text-sm text-gray-600">
                  Pastikan Anda menggunakan akun yang memiliki akses ke pixel tersebut.
                </p>
              </div>
            ),
          },
          {
            title: 'Cek Overview Tab',
            content: (
              <div>
                <p className="mb-3">
                  Di tab <strong>"Overview"</strong>, Anda akan melihat:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Status pixel (Active/Inactive)</li>
                  <li>Total events dalam 24 jam terakhir</li>
                  <li>Chart activity over time</li>
                  <li>Top events yang terkirim</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Jika pixel aktif, Anda akan melihat activity dalam beberapa menit setelah
                  mengunjungi website.
                </p>
              </div>
            ),
          },
          {
            title: 'Gunakan Test Events Tool',
            content: (
              <div>
                <p className="mb-3">
                  Di Events Manager, buka tab <strong>"Test Events"</strong>. Tool ini memungkinkan
                  Anda melihat events secara real-time saat melakukan action di website.
                </p>
                <p className="mb-3">
                  <strong>Cara menggunakan:</strong>
                </p>
                <ol className="ml-4 list-decimal space-y-1 text-sm">
                  <li>Buka Test Events tool di Events Manager</li>
                  <li>Buka website Anda di tab browser lain</li>
                  <li>Lakukan action (navigate halaman, klik button, dll)</li>
                  <li>Events akan muncul di Test Events tool secara real-time</li>
                </ol>
              </div>
            ),
          },
          {
            title: 'Verifikasi Event Details',
            content: (
              <div>
                <p className="mb-3">
                  Klik pada event di Test Events tool untuk melihat detail:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Event name (PageView, ViewContent, dll)</li>
                  <li>Event time</li>
                  <li>Event parameters (jika ada)</li>
                  <li>Browser dan device info</li>
                  <li>URL halaman</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Pastikan event parameters sesuai dengan yang Anda harapkan.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Verifikasi dengan Browser DevTools</h2>
      <p>
        Untuk verifikasi yang lebih teknis, Anda dapat menggunakan browser DevTools:
      </p>

      <StepGuide
        title="Cek Network Requests"
        steps={[
          {
            title: 'Buka DevTools',
            content: (
              <div>
                <p className="mb-3">
                  Buka website Anda dan tekan <strong>F12</strong> atau <strong>Right-click → Inspect</strong> untuk
                  membuka DevTools.
                </p>
                <p className="text-sm text-gray-600">
                  Pastikan tab <strong>"Network"</strong> terbuka.
                </p>
              </div>
            ),
          },
          {
            title: 'Filter Network Requests',
            content: (
              <div>
                <p className="mb-3">
                  Di filter box Network tab, ketik <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">facebook</code> atau{' '}
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">fbevents</code> untuk
                  melihat hanya request ke Meta.
                </p>
                <p className="text-sm text-gray-600">
                  Anda akan melihat request ke <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">connect.facebook.net</code> atau{' '}
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">facebook.com/tr</code>.
                </p>
              </div>
            ),
          },
          {
            title: 'Cek Request Details',
            content: (
              <div>
                <p className="mb-3">
                  Klik pada request untuk melihat detail:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>
                    <strong>Request URL:</strong> Harus mengandung Pixel ID Anda
                  </li>
                  <li>
                    <strong>Status:</strong> Harus 200 (OK) atau 204 (No Content)
                  </li>
                  <li>
                    <strong>Payload:</strong> Data event yang dikirim
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Request yang sukses menunjukkan pixel mengirim data dengan benar.
                </p>
              </div>
            ),
          },
          {
            title: 'Cek Console untuk Errors',
            content: (
              <div>
                <p className="mb-3">
                  Buka tab <strong>"Console"</strong> di DevTools dan cek apakah ada error terkait
                  pixel.
                </p>
                <p className="text-sm text-gray-600">
                  Error umum termasuk CORS issues, blocked requests, atau JavaScript errors.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Checklist Verifikasi</h2>
      <p>
        Gunakan checklist berikut untuk memastikan verifikasi komprehensif:
      </p>

      <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Pixel Code Terpasang</h3>
              <p className="text-sm text-gray-600">
                Pixel code terdeteksi di halaman website (cek dengan Meta Pixel Helper atau view
                page source)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Pixel ID Benar</h3>
              <p className="text-sm text-gray-600">
                Pixel ID yang terdeteksi sesuai dengan Pixel ID di Events Manager
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">PageView Event Terkirim</h3>
              <p className="text-sm text-gray-600">
                PageView event muncul di Events Manager atau Test Events tool saat mengunjungi
                halaman
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Tidak Ada Duplicate Pixel</h3>
              <p className="text-sm text-gray-600">
                Hanya satu instance pixel yang terdeteksi (cek dengan Meta Pixel Helper)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">No Errors atau Warnings</h3>
              <p className="text-sm text-gray-600">
                Meta Pixel Helper tidak menampilkan error atau warning yang perlu diperbaiki
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Activity di Events Manager</h3>
              <p className="text-sm text-gray-600">
                Activity muncul di Events Manager dalam beberapa menit setelah mengunjungi website
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Masalah Umum dan Solusi</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div>
              <h3 className="mb-1 font-semibold">Pixel Tidak Terdeteksi</h3>
              <p className="text-sm text-gray-600">
                <strong>Solusi:</strong> Pastikan pixel code terpasang di tag &lt;head&gt; dan Pixel
                ID sudah benar. Cek browser console untuk JavaScript errors.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div>
              <h3 className="mb-1 font-semibold">Events Tidak Muncul di Events Manager</h3>
              <p className="text-sm text-gray-600">
                <strong>Solusi:</strong> Tunggu beberapa menit (data bisa delay 5-15 menit). Pastikan
                tidak ada ad blocker yang memblokir pixel. Cek Test Events tool untuk real-time
                verification.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div>
              <h3 className="mb-1 font-semibold">Duplicate Pixel Warning</h3>
              <p className="text-sm text-gray-600">
                <strong>Solusi:</strong> Cari semua instance pixel code di website dan hapus
                duplikatnya. Pastikan hanya satu pixel code yang terpasang per halaman.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Callout type="success" title="Verifikasi Selesai!">
        <p>
          Setelah verifikasi berhasil dan semua checklist terpenuhi, pixel Anda siap digunakan.
          Lanjutkan ke artikel Testing Pixel untuk mempelajari cara test berbagai event dan memastikan
          tracking berfungsi dengan baik.
        </p>
      </Callout>
    </DocLayout>
  )
}
