import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import CodeBlock from '@/components/CodeBlock'
import { FlaskConical, CheckCircle2, AlertTriangle, Play, Eye } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Testing Pixel"
      categoryHref="/whitelist/pixel-setup"
      categoryName="Pixel Setup"
      prevHref="/whitelist/pixel-setup/verifikasi"
      prevTitle="Verifikasi Instalasi"
      nextHref="/whitelist/pixel-setup/troubleshooting"
      nextTitle="Troubleshooting Pixel"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Setelah pixel terverifikasi, penting untuk melakukan testing menyeluruh untuk memastikan semua
          event yang Anda butuhkan ter-track dengan benar. Panduan ini menjelaskan cara test berbagai
          jenis event dan memastikan tracking berfungsi optimal.
        </p>
      </div>

      <Callout type="info" title="Mengapa Testing Penting?">
        <p>
          Testing memastikan bahwa semua event yang diperlukan untuk kampanye Anda ter-track dengan
          benar sebelum Anda mulai menjalankan iklan. Ini membantu menghindari masalah tracking yang
          dapat mempengaruhi optimasi kampanye.
        </p>
      </Callout>

      <h2>Tools untuk Testing</h2>
      <p>
        Gunakan kombinasi tools berikut untuk testing yang komprehensif:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <FlaskConical className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Test Events Tool</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tool resmi Meta di Events Manager untuk melihat events secara real-time saat testing.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <Eye className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Meta Pixel Helper</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Browser extension untuk verifikasi visual pixel dan events di halaman website.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <Play className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Browser DevTools</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Network tab dan Console untuk melihat request dan debug issues.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <CheckCircle2 className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Manual Testing</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lakukan action di website dan verifikasi events muncul di Events Manager.
          </p>
        </div>
      </div>

      <h2>Setup Test Events Tool</h2>
      <p>
        Test Events Tool adalah cara terbaik untuk test events secara real-time:
      </p>

      <StepGuide
        title="Menggunakan Test Events Tool"
        steps={[
          {
            title: 'Buka Test Events di Events Manager',
            content: (
              <div>
                <p className="mb-3">
                  Login ke Events Manager, pilih pixel Anda, dan buka tab <strong>"Test Events"</strong>.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tool ini akan menampilkan events secara real-time saat Anda melakukan action di
                  website.
                </p>
              </div>
            ),
          },
          {
            title: 'Buka Website di Tab Lain',
            content: (
              <div>
                <p className="mb-3">
                  Buka website Anda di tab browser lain (atau window terpisah) agar Anda dapat melihat
                  Test Events tool dan website secara bersamaan.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pastikan Test Events tool tetap terbuka saat melakukan testing.
                </p>
              </div>
            ),
          },
          {
            title: 'Monitor Events Real-time',
            content: (
              <div>
                <p className="mb-3">
                  Saat Anda melakukan action di website, events akan muncul di Test Events tool secara
                  real-time (biasanya dalam 1-2 detik).
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Setiap event akan menampilkan timestamp, event name, dan parameters.
                </p>
              </div>
            ),
          },
          {
            title: 'Verifikasi Event Details',
            content: (
              <div>
                <p className="mb-3">
                  Klik pada event untuk melihat detail lengkap:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Event name dan type</li>
                  <li>Event parameters (value, currency, content_ids, dll)</li>
                  <li>Browser dan device information</li>
                  <li>URL halaman</li>
                  <li>User agent</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Pastikan semua parameters sesuai dengan yang Anda harapkan.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Testing Standard Events</h2>
      <p>
        Test setiap standard event yang relevan dengan website Anda:
      </p>

      <h3>1. PageView Event</h3>
      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3">
          <strong>Cara test:</strong>
        </p>
        <ol className="ml-4 list-decimal space-y-2 text-sm">
          <li>Buka Test Events tool di Events Manager</li>
          <li>Navigate ke berbagai halaman di website</li>
          <li>Verifikasi PageView event muncul untuk setiap halaman</li>
        </ol>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <strong>Expected result:</strong> PageView event muncul otomatis saat halaman dimuat.
        </p>
      </div>

      <h3>2. ViewContent Event (E-commerce)</h3>
      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3">
          <strong>Cara test:</strong>
        </p>
        <ol className="ml-4 list-decimal space-y-2 text-sm">
          <li>Buka halaman detail produk</li>
          <li>Verifikasi ViewContent event muncul dengan parameters:
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>content_name (nama produk)</li>
              <li>content_ids (ID produk)</li>
              <li>content_type (product)</li>
              <li>value (harga produk)</li>
              <li>currency (mata uang)</li>
            </ul>
          </li>
        </ol>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <strong>Expected result:</strong> ViewContent event dengan semua product parameters terkirim
          dengan benar.
        </p>
      </div>

      <h3>3. AddToCart Event</h3>
      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3">
          <strong>Cara test:</strong>
        </p>
        <ol className="ml-4 list-decimal space-y-2 text-sm">
          <li>Tambahkan produk ke keranjang</li>
          <li>Verifikasi AddToCart event muncul dengan parameters:
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>content_name</li>
              <li>content_ids</li>
              <li>value (total value di cart)</li>
              <li>currency</li>
            </ul>
          </li>
        </ol>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <strong>Expected result:</strong> AddToCart event terkirim setiap kali produk ditambahkan ke
          cart.
        </p>
      </div>

      <h3>4. InitiateCheckout Event</h3>
      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3">
          <strong>Cara test:</strong>
        </p>
        <ol className="ml-4 list-decimal space-y-2 text-sm">
          <li>Klik tombol checkout atau mulai proses checkout</li>
          <li>Verifikasi InitiateCheckout event muncul dengan value total checkout</li>
        </ol>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <strong>Expected result:</strong> InitiateCheckout event terkirim saat user memulai checkout.
        </p>
      </div>

      <h3>5. Purchase Event</h3>
      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3">
          <strong>Cara test:</strong>
        </p>
        <ol className="ml-4 list-decimal space-y-2 text-sm">
          <li>Lakukan test purchase (gunakan test payment method jika tersedia)</li>
          <li>Verifikasi Purchase event muncul dengan parameters lengkap:
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>value (total purchase amount)</li>
              <li>currency</li>
              <li>content_ids (array of product IDs)</li>
              <li>num_items (jumlah item)</li>
            </ul>
          </li>
        </ol>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <strong>Expected result:</strong> Purchase event terkirim dengan semua transaction details
          yang akurat.
        </p>
        <Callout type="warning" title="Test Purchase">
          <p>
            Gunakan test mode atau sandbox environment untuk test purchase. Jangan gunakan real
            payment untuk testing.
          </p>
        </Callout>
      </div>

      <h3>6. Lead Event</h3>
      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3">
          <strong>Cara test:</strong>
        </p>
        <ol className="ml-4 list-decimal space-y-2 text-sm">
          <li>Submit form lead generation (contact form, newsletter signup, dll)</li>
          <li>Verifikasi Lead event muncul</li>
        </ol>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <strong>Expected result:</strong> Lead event terkirim setiap kali form berhasil di-submit.
        </p>
      </div>

      <h2>Testing Custom Events</h2>
      <p>
        Jika Anda menggunakan custom events, test dengan cara yang sama:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="mb-3">
          <strong>Contoh custom event tracking:</strong>
        </p>
        <CodeBlock
          code={`// Custom event: VideoPlay
fbq('track', 'VideoPlay', {
  content_name: 'Product Demo Video',
  content_category: 'Video'
});

// Custom event: NewsletterSignup
fbq('track', 'NewsletterSignup', {
  content_name: 'Newsletter Subscription'
});

// Custom event: Download
fbq('track', 'Download', {
  content_name: 'Product Brochure',
  content_type: 'PDF'
});`}
          language="javascript"
        />
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Test setiap custom event dengan melakukan action yang memicu event tersebut dan verifikasi
          event muncul di Test Events tool.
        </p>
      </div>

      <h2>Testing Checklist</h2>
      <p>
        Gunakan checklist berikut untuk memastikan testing komprehensif:
      </p>

      <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">PageView Event</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test di berbagai halaman (homepage, product pages, blog, dll)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">E-commerce Events</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test ViewContent, AddToCart, InitiateCheckout, dan Purchase (jika applicable)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Event Parameters</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Verifikasi semua parameters (value, currency, content_ids, dll) terkirim dengan benar
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Custom Events</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test semua custom events yang telah diimplementasikan
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Multiple Browsers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test di Chrome, Firefox, Safari, dan mobile browsers
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Mobile Devices</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test di mobile devices (iOS dan Android) untuk memastikan tracking bekerja di semua
                platform
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h3 className="font-semibold">Ad Blocker</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test dengan dan tanpa ad blocker untuk memahami impact pada tracking
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Common Testing Issues</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400" />
            <div>
              <h3 className="mb-1 font-semibold">Events Tidak Muncul</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Possible causes:</strong> Ad blocker, JavaScript error, pixel code tidak
                terpasang dengan benar, atau event code tidak dipanggil.
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <strong>Solution:</strong> Disable ad blocker, cek browser console untuk errors, verifikasi
                pixel code, dan pastikan event tracking code dipanggil dengan benar.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400" />
            <div>
              <h3 className="mb-1 font-semibold">Parameters Tidak Lengkap</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Possible causes:</strong> Event tracking code tidak mengirim semua parameters
                yang diperlukan.
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <strong>Solution:</strong> Review event tracking code dan pastikan semua parameters
                (value, currency, content_ids, dll) dikirim dengan benar.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400" />
            <div>
              <h3 className="mb-1 font-semibold">Delay dalam Events</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Possible causes:</strong> Network latency atau batch processing dari Meta.
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <strong>Solution:</strong> Delay 1-2 detik adalah normal. Jika delay lebih dari 30
                detik, cek network connection dan browser console.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Best Practices untuk Testing</h2>

      <div className="my-6 space-y-4">
        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Test di Staging Environment</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Selalu test di staging environment terlebih dahulu sebelum deploy ke production untuk
              menghindari masalah di live website.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Document Test Results</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Catat hasil testing untuk setiap event dan simpan screenshot dari Test Events tool untuk
              referensi.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Test Regularly</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lakukan testing secara berkala, terutama setelah update website atau perubahan pada
              tracking code.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Test User Flows</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Test complete user flows (dari homepage ke purchase) untuk memastikan semua events
              ter-track dalam sequence yang benar.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Testing Selesai!">
        <p>
          Setelah semua testing selesai dan semua events terverifikasi, pixel Anda siap untuk
          digunakan dalam kampanye. Jika menemukan masalah selama testing, lanjutkan ke artikel
          Troubleshooting Pixel untuk solusi masalah umum.
        </p>
      </Callout>
    </DocLayout>
  )
}
