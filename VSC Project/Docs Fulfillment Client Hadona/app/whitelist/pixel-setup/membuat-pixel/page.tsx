import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import CodeBlock from '@/components/CodeBlock'
import { CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Membuat Meta Pixel"
      categoryHref="/whitelist/pixel-setup"
      categoryName="Pixel Setup"
      prevHref="/whitelist/pixel-setup/pengenalan"
      prevTitle="Pengenalan Meta Pixel"
      nextHref="/whitelist/pixel-setup/instalasi-manual"
      nextTitle="Instalasi Manual"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Panduan ini akan membantu Anda membuat Meta Pixel baru di Meta Events Manager. Setelah pixel
          dibuat, Anda akan mendapatkan Pixel ID yang digunakan untuk instalasi di website.
        </p>
      </div>

      <Callout type="info" title="Persyaratan">
        <p>
          Untuk membuat Meta Pixel, Anda memerlukan akses ke Meta Business Manager atau Meta Ads
          Manager dengan permission untuk mengelola Events Manager.
        </p>
      </Callout>

      <StepGuide
        title="Langkah-langkah Membuat Meta Pixel"
        steps={[
          {
            title: 'Akses Events Manager',
            content: (
              <div>
                <p className="mb-3">
                  Login ke{' '}
                  <a
                    href="https://business.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline inline-flex items-center gap-1"
                  >
                    Meta Business Manager
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  {' '}atau{' '}
                  <a
                    href="https://adsmanager.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline inline-flex items-center gap-1"
                  >
                    Meta Ads Manager
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  .
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pastikan Anda menggunakan akun dengan akses yang sesuai.
                </p>
              </div>
            ),
          },
          {
            title: 'Buka Events Manager',
            content: (
              <div>
                <p className="mb-3">
                  Di menu Business Manager, klik <strong>"Events Manager"</strong> atau akses langsung
                  melalui{' '}
                  <a
                    href="https://business.facebook.com/events_manager2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline inline-flex items-center gap-1"
                  >
                    business.facebook.com/events_manager2
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  .
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Events Manager adalah tempat untuk mengelola semua pixel dan event tracking Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Buat Pixel Baru',
            content: (
              <div>
                <p className="mb-3">
                  Di halaman Events Manager, klik tombol <strong>"Connect Data Sources"</strong> atau{' '}
                  <strong>"Add"</strong> di bagian Data Sources.
                </p>
                <p className="mb-3">Pilih opsi <strong>"Web"</strong> sebagai sumber data.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Meta akan meminta Anda memilih antara Meta Pixel atau Conversions API. Pilih{' '}
                  <strong>"Meta Pixel"</strong> untuk setup awal.
                </p>
              </div>
            ),
          },
          {
            title: 'Beri Nama Pixel',
            content: (
              <div>
                <p className="mb-3">
                  Masukkan nama untuk pixel Anda. Gunakan nama yang deskriptif, misalnya:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Website Main - [Nama Website]</li>
                  <li>[Nama Brand] - Production Pixel</li>
                  <li>[Nama Website] - E-commerce Pixel</li>
                </ul>
                <Callout type="warning" title="Tips Penamaan">
                  <p>
                    Gunakan nama yang jelas dan konsisten. Jika Anda memiliki multiple website atau
                    environment (staging, production), gunakan naming convention yang konsisten.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Masukkan URL Website',
            content: (
              <div>
                <p className="mb-3">
                  Masukkan URL website Anda (contoh: https://www.example.com). URL ini akan digunakan
                  untuk verifikasi domain dan testing.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pastikan URL yang Anda masukkan adalah domain utama website Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Setup Method',
            content: (
              <div>
                <p className="mb-3">
                  Meta akan menawarkan beberapa metode instalasi:
                </p>
                <ul className="ml-4 list-disc space-y-2 text-sm">
                  <li>
                    <strong>Install code manually</strong> - Untuk instalasi manual dengan copy-paste
                    code
                  </li>
                  <li>
                    <strong>Use a partner integration</strong> - Untuk platform seperti Shopify,
                    WooCommerce, WordPress, dll
                  </li>
                  <li>
                    <strong>Email instructions</strong> - Kirim instruksi ke developer
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Untuk saat ini, pilih <strong>"Install code manually"</strong>. Kita akan membahas
                  metode lain di artikel berikutnya.
                </p>
              </div>
            ),
          },
          {
            title: 'Salin Pixel Code',
            content: (
              <div>
                <p className="mb-3">
                  Setelah memilih metode instalasi, Meta akan menampilkan Pixel ID dan base code. Pixel
                  ID biasanya berupa angka 15-16 digit.
                </p>
                <p className="mb-3">Anda akan melihat code seperti ini:</p>
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
                <Callout type="info" title="Penting">
                  <p>
                    Simpan Pixel ID Anda dengan aman. Anda akan membutuhkannya untuk instalasi dan
                    konfigurasi selanjutnya. Pixel ID dapat dilihat kembali di Events Manager.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Verifikasi Pixel Created',
            content: (
              <div>
                <p className="mb-3">
                  Setelah pixel dibuat, Anda akan melihat pixel muncul di daftar Data Sources di Events
                  Manager. Status pixel akan menunjukkan <strong>"Not set up"</strong> atau{' '}
                  <strong>"No activity"</strong> sampai pixel diinstal dan mulai mengirim data.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pixel Anda sekarang siap untuk diinstal di website. Lanjutkan ke artikel berikutnya
                  untuk panduan instalasi.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Informasi Penting tentang Pixel ID</h2>
      <p>
        Pixel ID adalah identifier unik untuk pixel Anda. Berikut hal-hal penting yang perlu Anda
        ketahui:
      </p>

      <div className="my-8 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Format Pixel ID</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pixel ID biasanya berupa angka 15-16 digit (contoh: 1234567890123456). ID ini unik untuk
            setiap pixel dan tidak dapat diubah setelah dibuat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Multiple Pixels</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Anda dapat membuat multiple pixels untuk website yang berbeda atau untuk testing purposes.
            Setiap pixel memiliki ID sendiri.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Melihat Pixel ID Kembali</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pixel ID dapat dilihat kembali di Events Manager dengan mengklik pixel yang ingin Anda
            lihat. ID akan terlihat di bagian Settings atau di URL browser.
          </p>
        </div>
      </div>

      <h2>Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div>
          <h3 className="mb-2 font-semibold">Tidak bisa akses Events Manager</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan Anda memiliki akses ke Business Manager atau Ads Manager dengan permission untuk
            Events Manager. Hubungi admin Business Manager jika diperlukan.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Tombol "Connect Data Sources" tidak muncul</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan Anda berada di level Business Manager yang benar dan memiliki permission yang
            sesuai. Coba refresh halaman atau gunakan browser lain.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Error saat membuat pixel</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan URL website yang Anda masukkan valid dan dapat diakses. Jika masalah berlanjut,
            coba buat pixel dengan nama yang berbeda atau hubungi Meta Support.
          </p>
        </div>
      </div>

      <Callout type="success" title="Pixel Berhasil Dibuat!">
        <p>
          Setelah pixel berhasil dibuat, Anda siap untuk menginstalnya di website. Lanjutkan ke artikel
          berikutnya untuk panduan instalasi manual atau instalasi via partner integration.
        </p>
      </Callout>
    </DocLayout>
  )
}
