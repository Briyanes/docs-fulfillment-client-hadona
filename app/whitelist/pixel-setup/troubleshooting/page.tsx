import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import CodeBlock from '@/components/CodeBlock'
import { AlertTriangle, CheckCircle2, XCircle, Search, RefreshCw, Shield } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Troubleshooting Pixel"
      categoryHref="/whitelist/pixel-setup"
      categoryName="Pixel Setup"
      prevHref="/whitelist/pixel-setup/testing"
      prevTitle="Testing Pixel"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Panduan ini membantu Anda mengidentifikasi dan menyelesaikan masalah umum yang terjadi
          dengan Meta Pixel. Gunakan panduan ini sebagai referensi saat menghadapi masalah tracking
          atau instalasi pixel.
        </p>
      </div>

      <Callout type="info" title="Sebelum Memulai Troubleshooting">
        <p>
          Pastikan Anda telah melakukan verifikasi dasar: pixel code terpasang, Pixel ID benar, dan
          tidak ada duplicate pixel. Gunakan Meta Pixel Helper dan Test Events tool untuk diagnosis
          awal.
        </p>
      </Callout>

      <h2>Masalah Umum dan Solusi</h2>

      <h3>1. Pixel Tidak Terdeteksi</h3>
      <div className="my-6 rounded-lg border border-red-200 bg-red-50 p-6">
        <div className="mb-4 flex items-start gap-3">
          <XCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
          <div>
            <h4 className="mb-2 font-semibold text-red-900">
              Gejala: Pixel tidak muncul di Meta Pixel Helper atau Events Manager
            </h4>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="mb-2 font-semibold">Kemungkinan Penyebab:</h5>
            <ul className="ml-4 list-disc space-y-1 text-sm">
              <li>Pixel code tidak terpasang di website</li>
              <li>Pixel code terpasang di lokasi yang salah (bukan di &lt;head&gt;)</li>
              <li>Pixel ID salah atau tidak valid</li>
              <li>JavaScript error yang memblokir pixel</li>
              <li>Ad blocker atau privacy extension memblokir pixel</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 font-semibold">Solusi:</h5>
            <ol className="ml-4 list-decimal space-y-2 text-sm">
              <li>
                <strong>Verifikasi pixel code terpasang:</strong> View page source dan cari "fbq" atau
                Pixel ID Anda. Pastikan code ada di tag &lt;head&gt;.
              </li>
              <li>
                <strong>Cek Pixel ID:</strong> Pastikan Pixel ID di code sesuai dengan Pixel ID di
                Events Manager.
              </li>
              <li>
                <strong>Cek browser console:</strong> Buka DevTools (F12) dan cek tab Console untuk
                JavaScript errors. Perbaiki error yang ditemukan.
              </li>
              <li>
                <strong>Disable ad blocker:</strong> Test dengan ad blocker disabled untuk melihat
                apakah ad blocker memblokir pixel.
              </li>
              <li>
                <strong>Test di browser lain:</strong> Coba di browser yang berbeda untuk mengisolasi
                masalah browser-specific.
              </li>
              <li>
                <strong>Clear cache:</strong> Clear browser cache dan hard refresh (Ctrl+Shift+R atau
                Cmd+Shift+R).
              </li>
            </ol>
          </div>
        </div>
      </div>

      <h3>2. Events Tidak Muncul di Events Manager</h3>
      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
        <div className="mb-4 flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-600" />
          <div>
            <h4 className="mb-2 font-semibold text-yellow-900">
              Gejala: Pixel terdeteksi tapi events tidak muncul di Events Manager
            </h4>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="mb-2 font-semibold">Kemungkinan Penyebab:</h5>
            <ul className="ml-4 list-disc space-y-1 text-sm">
              <li>Delay processing dari Meta (normal: 5-15 menit)</li>
              <li>Ad blocker memblokir event tracking</li>
              <li>Event tracking code tidak dipanggil</li>
              <li>Network issues atau CORS errors</li>
              <li>Pixel di test mode atau restricted</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 font-semibold">Solusi:</h5>
            <ol className="ml-4 list-decimal space-y-2 text-sm">
              <li>
                <strong>Gunakan Test Events tool:</strong> Test Events tool menampilkan events secara
                real-time tanpa delay. Jika events muncul di Test Events tapi tidak di Overview,
                kemungkinan hanya delay processing.
              </li>
              <li>
                <strong>Tunggu beberapa menit:</strong> Data bisa delay 5-15 menit sebelum muncul di
                Events Manager Overview. Ini normal.
              </li>
              <li>
                <strong>Verifikasi event code:</strong> Pastikan event tracking code (fbq('track',
                'EventName')) dipanggil dengan benar. Cek dengan browser console:
                <CodeBlock
                  code={`// Test di browser console
fbq('track', 'PageView');
// Jika tidak ada error, pixel berfungsi`}
                  language="javascript"
                />
              </li>
              <li>
                <strong>Cek Network tab:</strong> Di DevTools Network tab, filter "facebook" dan cek
                apakah request ke Meta servers sukses (status 200 atau 204).
              </li>
              <li>
                <strong>Disable ad blocker:</strong> Test dengan ad blocker disabled.
              </li>
              <li>
                <strong>Cek pixel status:</strong> Di Events Manager, pastikan pixel tidak dalam test
                mode atau restricted mode yang membatasi data.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <h3>3. Duplicate Pixel Warning</h3>
      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
        <div className="mb-4 flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-600" />
          <div>
            <h4 className="mb-2 font-semibold text-yellow-900">
              Gejala: Meta Pixel Helper menampilkan warning "Multiple Pixels Detected"
            </h4>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="mb-2 font-semibold">Kemungkinan Penyebab:</h5>
            <ul className="ml-4 list-disc space-y-1 text-sm">
              <li>Pixel code terpasang lebih dari sekali di halaman yang sama</li>
              <li>Pixel terpasang di header template dan juga di plugin/CMS</li>
              <li>Multiple plugins menginstal pixel secara terpisah</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 font-semibold">Solusi:</h5>
            <ol className="ml-4 list-decimal space-y-2 text-sm">
              <li>
                <strong>Cari semua instance pixel:</strong> View page source dan cari semua instance
                "fbq" atau Pixel ID Anda.
              </li>
              <li>
                <strong>Hapus duplikat:</strong> Hapus semua instance kecuali satu. Pastikan hanya satu
                pixel code yang terpasang.
              </li>
              <li>
                <strong>Cek plugin/CMS:</strong> Jika menggunakan plugin atau CMS, pastikan tidak ada
                konflik antara manual installation dan plugin installation. Pilih salah satu metode.
              </li>
              <li>
                <strong>Verifikasi setelah perbaikan:</strong> Clear cache dan test lagi dengan Meta
                Pixel Helper.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <h3>4. Events Terkirim Tapi Parameters Tidak Lengkap</h3>
      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
        <div className="mb-4 flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-600" />
          <div>
            <h4 className="mb-2 font-semibold text-yellow-900">
              Gejala: Events muncul tapi missing value, currency, atau parameters lainnya
            </h4>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="mb-2 font-semibold">Kemungkinan Penyebab:</h5>
            <ul className="ml-4 list-disc space-y-1 text-sm">
              <li>Event tracking code tidak mengirim parameters</li>
              <li>Parameters tidak di-format dengan benar</li>
              <li>Data tidak tersedia saat event dipanggil</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 font-semibold">Solusi:</h5>
            <ol className="ml-4 list-decimal space-y-2 text-sm">
              <li>
                <strong>Review event tracking code:</strong> Pastikan event dipanggil dengan parameters:
                <CodeBlock
                  code={`// Contoh: Purchase event dengan parameters
fbq('track', 'Purchase', {
  value: 29.99,
  currency: 'USD',
  content_ids: ['12345'],
  content_name: 'Product Name',
  num_items: 1
});`}
                  language="javascript"
                />
              </li>
              <li>
                <strong>Verifikasi data tersedia:</strong> Pastikan data (harga, product ID, dll)
                tersedia saat event dipanggil. Gunakan console.log untuk debug.
              </li>
              <li>
                <strong>Cek format data:</strong> Pastikan value adalah number, currency adalah string
                3 karakter (USD, IDR, dll), content_ids adalah array.
              </li>
              <li>
                <strong>Test dengan Test Events tool:</strong> Lihat detail event di Test Events tool
                untuk melihat parameters yang terkirim.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <h3>5. Pixel Tidak Load di Mobile</h3>
      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
        <div className="mb-4 flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-600" />
          <div>
            <h4 className="mb-2 font-semibold text-yellow-900">
              Gejala: Pixel bekerja di desktop tapi tidak di mobile
            </h4>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="mb-2 font-semibold">Kemungkinan Penyebab:</h5>
            <ul className="ml-4 list-disc space-y-1 text-sm">
              <li>Mobile browser memblokir third-party scripts</li>
              <li>Content Security Policy (CSP) memblokir pixel</li>
              <li>Mobile-specific JavaScript errors</li>
              <li>Network issues di mobile</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 font-semibold">Solusi:</h5>
            <ol className="ml-4 list-decimal space-y-2 text-sm">
              <li>
                <strong>Test di berbagai mobile browsers:</strong> Test di Chrome mobile, Safari iOS,
                dan browser lain.
              </li>
              <li>
                <strong>Cek CSP headers:</strong> Pastikan Content Security Policy mengizinkan
                connect.facebook.net. Tambahkan ke CSP jika perlu:
                <CodeBlock
                  code={`Content-Security-Policy: script-src 'self' https://connect.facebook.net;`}
                  language="text"
                />
              </li>
              <li>
                <strong>Gunakan mobile DevTools:</strong> Gunakan remote debugging untuk melihat
                console errors di mobile device.
              </li>
              <li>
                <strong>Test network connection:</strong> Pastikan mobile device memiliki koneksi
                internet yang stabil.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <h3>6. CORS atau Network Errors</h3>
      <div className="my-6 rounded-lg border border-red-200 bg-red-50 p-6">
        <div className="mb-4 flex items-start gap-3">
          <XCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
          <div>
            <h4 className="mb-2 font-semibold text-red-900">
              Gejala: Error di browser console tentang CORS atau network request failed
            </h4>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="mb-2 font-semibold">Kemungkinan Penyebab:</h5>
            <ul className="ml-4 list-disc space-y-1 text-sm">
              <li>Content Security Policy terlalu ketat</li>
              <li>Network firewall memblokir request ke Meta</li>
              <li>SSL certificate issues</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 font-semibold">Solusi:</h5>
            <ol className="ml-4 list-decimal space-y-2 text-sm">
              <li>
                <strong>Update CSP:</strong> Pastikan CSP mengizinkan connect.facebook.net dan
                facebook.com.
              </li>
              <li>
                <strong>Cek firewall rules:</strong> Pastikan firewall tidak memblokir outbound
                requests ke Meta servers.
              </li>
              <li>
                <strong>Verifikasi SSL:</strong> Pastikan website menggunakan HTTPS (diperlukan untuk
                pixel tracking).
              </li>
            </ol>
          </div>
        </div>
      </div>

      <h2>Diagnostic Tools</h2>
      <p>
        Gunakan tools berikut untuk membantu diagnosis masalah:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Search className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Meta Pixel Helper</h3>
          <p className="mb-3 text-sm text-gray-600">
            Browser extension untuk deteksi visual pixel dan errors.
          </p>
          <p className="text-xs text-gray-500">
            Install dari Chrome Web Store atau Firefox Add-ons
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <RefreshCw className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Test Events Tool</h3>
          <p className="mb-3 text-sm text-gray-600">
            Real-time event monitoring di Events Manager.
          </p>
          <p className="text-xs text-gray-500">
            Events Manager → Test Events tab
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Shield className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Browser DevTools</h3>
          <p className="mb-3 text-sm text-gray-600">
            Network tab dan Console untuk debug technical issues.
          </p>
          <p className="text-xs text-gray-500">
            Press F12 untuk membuka DevTools
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <CheckCircle2 className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Events Manager Overview</h3>
          <p className="mb-3 text-sm text-gray-600">
            Monitor pixel activity dan event statistics.
          </p>
          <p className="text-xs text-gray-500">
            Events Manager → Overview tab
          </p>
        </div>
      </div>

      <h2>Quick Diagnostic Checklist</h2>
      <p>
        Gunakan checklist ini untuk diagnosis cepat:
      </p>

      <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Pixel code terpasang?</strong> View page source dan cari Pixel ID
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Pixel ID benar?</strong> Bandingkan dengan Events Manager
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>No JavaScript errors?</strong> Cek browser console
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Network requests sukses?</strong> Cek DevTools Network tab
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Ad blocker disabled?</strong> Test dengan ad blocker off
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Events muncul di Test Events?</strong> Gunakan Test Events tool
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>No duplicate pixels?</strong> Cek dengan Meta Pixel Helper
            </div>
          </div>
        </div>
      </div>

      <h2>Kapan Harus Menghubungi Support</h2>
      <p>
        Hubungi Meta Support atau tim Hadona jika:
      </p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
          <div className="text-sm">
            Semua troubleshooting steps sudah dilakukan tapi masalah masih terjadi
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
          <div className="text-sm">
            Error yang tidak tercakup di dokumentasi ini
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
          <div className="text-sm">
            Masalah yang mempengaruhi multiple pixels atau akun
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
          <div className="text-sm">
            Kebutuhan untuk advanced configuration atau custom implementation
          </div>
        </div>
      </div>

      <Callout type="info" title="Dokumentasi Tambahan">
        <p>
          Untuk informasi lebih lanjut, kunjungi{' '}
          <a
            href="https://www.facebook.com/business/help"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hadona-primary hover:underline"
          >
            Meta Business Help Center
          </a>{' '}
          atau hubungi tim support Hadona untuk bantuan lebih lanjut.
        </p>
      </Callout>
    </DocLayout>
  )
}
