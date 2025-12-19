import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import CodeBlock from '@/components/CodeBlock'
import { Code, FileCode, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Instalasi Manual"
      categoryHref="/whitelist/pixel-setup"
      categoryName="Pixel Setup"
      prevHref="/whitelist/pixel-setup/membuat-pixel"
      prevTitle="Membuat Meta Pixel"
      nextHref="/whitelist/pixel-setup/instalasi-partner"
      nextTitle="Instalasi via Partner"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Panduan ini menjelaskan cara menginstal Meta Pixel secara manual dengan menambahkan code
          langsung ke website Anda. Metode ini cocok untuk website custom atau jika Anda memiliki
          akses ke source code website.
        </p>
      </div>

      <Callout type="info" title="Persyaratan">
        <p>
          Untuk instalasi manual, Anda memerlukan akses ke source code website atau Content Management
          System (CMS) yang memungkinkan edit HTML/JavaScript. Pastikan Anda memiliki backup sebelum
          melakukan perubahan.
        </p>
      </Callout>

      <h2>Lokasi Instalasi Pixel Code</h2>
      <p>
        Meta Pixel code harus dipasang di bagian <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">&lt;head&gt;</code> dari
        setiap halaman website yang ingin Anda track. Idealnya, code dipasang di template header yang
        digunakan oleh semua halaman.
      </p>

      <StepGuide
        title="Langkah-langkah Instalasi Manual"
        steps={[
          {
            title: 'Dapatkan Pixel Code dari Events Manager',
            content: (
              <div>
                <p className="mb-3">
                  Login ke Events Manager dan pilih pixel yang ingin Anda instal. Klik{' '}
                  <strong>"Settings"</strong> dan scroll ke bagian <strong>"Install Pixel"</strong>.
                </p>
                <p className="mb-3">
                  Copy seluruh code yang ditampilkan. Code akan terlihat seperti ini:
                </p>
                <CodeBlock
                  code={`<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
  />
</noscript>
<!-- End Meta Pixel Code -->`}
                  language="html"
                />
                <Callout type="warning" title="Penting">
                  <p>
                    Ganti <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">YOUR_PIXEL_ID</code> dengan Pixel ID
                    Anda yang sebenarnya (angka 15-16 digit).
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Akses File Header Website',
            content: (
              <div>
                <p className="mb-3">
                  Tentukan lokasi file header website Anda. Lokasi umum tergantung platform:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm">
                  <li>
                    <strong>HTML Static:</strong> File <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">index.html</code> atau
                    template header
                  </li>
                  <li>
                    <strong>WordPress:</strong> File <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">header.php</code> di theme atau
                    menggunakan plugin
                  </li>
                  <li>
                    <strong>React/Next.js:</strong> File <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">_document.tsx</code> atau{' '}
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">_app.tsx</code>
                  </li>
                  <li>
                    <strong>Vue.js:</strong> File <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">index.html</code> atau component
                    layout
                  </li>
                  <li>
                    <strong>Custom CMS:</strong> Template header atau global script section
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Paste Pixel Code di &lt;head&gt; Section',
            content: (
              <div>
                <p className="mb-3">
                  Buka file header dan paste pixel code tepat sebelum tag penutup{' '}
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">&lt;/head&gt;</code>. Pastikan code berada di dalam tag{' '}
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">&lt;head&gt;</code>.
                </p>
                <p className="mb-3">Contoh struktur file:</p>
                <CodeBlock
                  code={`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Title</title>
  
  <!-- Meta Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
    />
  </noscript>
  <!-- End Meta Pixel Code -->
</head>
<body>
  <!-- Website content -->
</body>
</html>`}
                  language="html"
                />
              </div>
            ),
          },
          {
            title: 'Simpan dan Deploy Perubahan',
            content: (
              <div>
                <p className="mb-3">
                  Setelah menambahkan code, simpan file dan deploy perubahan ke production (jika
                  menggunakan version control atau staging environment).
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pastikan untuk test di staging environment terlebih dahulu sebelum deploy ke
                  production.
                </p>
              </div>
            ),
          },
          {
            title: 'Verifikasi Instalasi',
            content: (
              <div>
                <p className="mb-3">
                  Setelah code terpasang, verifikasi instalasi dengan cara:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm">
                  <li>
                    Buka website di browser dan gunakan browser DevTools (F12) untuk melihat Network
                    requests
                  </li>
                  <li>
                    Cari request ke <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">connect.facebook.net</code> atau{' '}
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">facebook.com/tr</code>
                  </li>
                  <li>
                    Gunakan Meta Pixel Helper browser extension untuk verifikasi visual
                  </li>
                  <li>
                    Cek Events Manager untuk melihat apakah PageView event muncul
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Detail verifikasi akan dibahas lebih lanjut di artikel Verifikasi Instalasi.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Instalasi untuk Framework Modern</h2>

      <h3>Next.js (App Router)</h3>
      <p className="mb-3">
        Untuk Next.js dengan App Router, tambahkan pixel code di file <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">app/layout.tsx</code>:
      </p>
      <CodeBlock
        code={`import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={\`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1\`}
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}`}
        language="typescript"
        filename="app/layout.tsx"
      />

      <h3>React (Create React App)</h3>
      <p className="mb-3">
        Untuk React, tambahkan di file <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">public/index.html</code>:
      </p>
      <CodeBlock
        code={`<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- Meta Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    </script>
    <noscript>
      <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
      />
    </noscript>
    <!-- End Meta Pixel Code -->
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`}
        language="html"
        filename="public/index.html"
      />

      <h3>Vue.js</h3>
      <p className="mb-3">
        Untuk Vue.js, tambahkan di file <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">public/index.html</code> atau gunakan plugin:
      </p>
      <CodeBlock
        code={`<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    
    <!-- Meta Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    </script>
    <noscript>
      <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
      />
    </noscript>
    <!-- End Meta Pixel Code -->
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>`}
        language="html"
        filename="public/index.html"
      />

      <h2>Best Practices</h2>

      <div className="my-6 space-y-4">
        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Load Pixel Asynchronously</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pixel code yang diberikan Meta sudah asynchronous, jadi tidak akan memblokir loading
              halaman. Jangan ubah struktur code ini.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Include Noscript Tag</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Selalu sertakan tag <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">&lt;noscript&gt;</code> untuk tracking pengunjung yang
              menonaktifkan JavaScript.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Single Installation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jangan install pixel code lebih dari sekali di halaman yang sama. Ini dapat menyebabkan
              duplicate events.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Test di Staging First</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Selalu test instalasi di staging environment sebelum deploy ke production untuk
              memastikan tidak ada masalah.
            </p>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Peringatan">
        <p>
          Jangan pernah hardcode Pixel ID di multiple tempat. Gunakan environment variable atau
          configuration file untuk memudahkan maintenance dan menghindari kesalahan.
        </p>
      </Callout>

      <h2>Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div>
          <h3 className="mb-2 font-semibold">Pixel tidak terdeteksi</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan code dipasang di tag <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">&lt;head&gt;</code> dan Pixel ID sudah benar. Cek
            browser console untuk error JavaScript.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Duplicate events</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jika melihat duplicate events, kemungkinan pixel code terpasang lebih dari sekali. Cari
            semua instance pixel code di website dan hapus duplikatnya.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Pixel tidak load di mobile</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan code tidak di-block oleh Content Security Policy (CSP) atau ad blocker. Test di
            berbagai browser dan device.
          </p>
        </div>
      </div>

      <Callout type="success" title="Instalasi Manual Selesai!">
        <p>
          Setelah pixel code terpasang, lanjutkan ke artikel berikutnya untuk mempelajari instalasi
          via partner integration (jika menggunakan platform yang didukung) atau langsung ke artikel
          Verifikasi Instalasi untuk memastikan pixel bekerja dengan benar.
        </p>
      </Callout>
    </DocLayout>
  )
}
