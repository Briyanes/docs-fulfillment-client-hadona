import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { ShoppingBag, Store, Globe, Package, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Instalasi via Partner"
      categoryHref="/whitelist/pixel-setup"
      categoryName="Pixel Setup"
      prevHref="/whitelist/pixel-setup/instalasi-manual"
      prevTitle="Instalasi Manual"
      nextHref="/whitelist/pixel-setup/verifikasi"
      nextTitle="Verifikasi Instalasi"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Meta menyediakan integrasi partner untuk platform e-commerce dan CMS populer. Metode ini
          lebih mudah dan otomatis dibanding instalasi manual, dengan fitur tambahan seperti automatic
          event tracking untuk e-commerce.
        </p>
      </div>

      <Callout type="info" title="Keuntungan Partner Integration">
        <p>
          Partner integration memberikan keuntungan seperti automatic event tracking, setup yang lebih
          mudah, dan dukungan untuk advanced e-commerce features seperti product catalog sync.
        </p>
      </Callout>

      <h2>Platform yang Didukung</h2>
      <p>
        Meta mendukung integrasi dengan berbagai platform. Berikut adalah platform populer yang
        didukung:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <ShoppingBag className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Shopify</h3>
          <p className="mb-3 text-sm text-gray-600">
            Platform e-commerce terpopuler dengan integrasi native Meta Pixel dan Conversions API.
          </p>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
            <li>Automatic event tracking</li>
            <li>Product catalog sync</li>
            <li>Dynamic ads support</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Store className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">WooCommerce</h3>
          <p className="mb-3 text-sm text-gray-600">
            Plugin e-commerce untuk WordPress dengan dukungan Meta Pixel.
          </p>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
            <li>WordPress integration</li>
            <li>E-commerce event tracking</li>
            <li>Easy setup via plugin</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Globe className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">WordPress</h3>
          <p className="mb-3 text-sm text-gray-600">
            CMS populer dengan berbagai plugin Meta Pixel.
          </p>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
            <li>Official Meta plugin</li>
            <li>Third-party plugins</li>
            <li>Custom integration</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <Package className="mb-3 h-8 w-8 text-hadona-primary" />
          <h3 className="mb-2 text-lg font-semibold">Platform Lain</h3>
          <p className="mb-3 text-sm text-gray-600">
            BigCommerce, Magento, PrestaShop, dan platform lainnya.
          </p>
          <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
            <li>Check Meta documentation</li>
            <li>Platform-specific guides</li>
            <li>API integration options</li>
          </ul>
        </div>
      </div>

      <h2>Setup via Shopify</h2>
      <p>
        Shopify adalah salah satu platform yang paling mudah untuk setup Meta Pixel. Berikut
        langkah-langkahnya:
      </p>

      <StepGuide
        title="Instalasi Meta Pixel di Shopify"
        steps={[
          {
            title: 'Akses Shopify Admin',
            content: (
              <div>
                <p className="mb-3">
                  Login ke Shopify Admin dan navigasi ke <strong>Settings</strong> →{' '}
                  <strong>Customer events</strong>.
                </p>
                <p className="text-sm text-gray-600">
                  Atau akses langsung melalui Settings → Apps and sales channels → Facebook.
                </p>
              </div>
            ),
          },
          {
            title: 'Connect Facebook Account',
            content: (
              <div>
                <p className="mb-3">
                  Klik <strong>"Connect Facebook"</strong> atau <strong>"Set up Facebook"</strong>.
                  Anda akan diminta untuk login ke Facebook dan memberikan permission.
                </p>
                <p className="text-sm text-gray-600">
                  Pastikan Anda menggunakan akun Facebook yang memiliki akses ke Business Manager
                  atau Ads Manager.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Pixel atau Buat Baru',
            content: (
              <div>
                <p className="mb-3">
                  Shopify akan menampilkan daftar pixel yang tersedia di akun Facebook Anda. Pilih
                  pixel yang ingin digunakan atau buat pixel baru.
                </p>
                <p className="text-sm text-gray-600">
                  Jika membuat pixel baru, Shopify akan otomatis membuat dan mengonfigurasi pixel
                  untuk Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Konfirmasi Setup',
            content: (
              <div>
                <p className="mb-3">
                  Setelah memilih pixel, Shopify akan otomatis menginstal pixel code dan mengonfigurasi
                  automatic event tracking.
                </p>
                <p className="text-sm text-gray-600">
                  Shopify akan otomatis track event seperti ViewContent, AddToCart, InitiateCheckout,
                  dan Purchase.
                </p>
              </div>
            ),
          },
          {
            title: 'Verifikasi Instalasi',
            content: (
              <div>
                <p className="mb-3">
                  Setelah setup selesai, verifikasi dengan:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Cek Events Manager untuk melihat pixel activity</li>
                  <li>Test dengan melakukan action di website (view product, add to cart)</li>
                  <li>Gunakan Meta Pixel Helper untuk verifikasi visual</li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <h2>Setup via WooCommerce (WordPress)</h2>
      <p>
        Untuk WordPress dengan WooCommerce, Anda dapat menggunakan plugin resmi Meta atau plugin
        pihak ketiga:
      </p>

      <StepGuide
        title="Instalasi via Meta Plugin untuk WordPress"
        steps={[
          {
            title: 'Install Meta Plugin',
            content: (
              <div>
                <p className="mb-3">
                  Di WordPress Admin, navigasi ke <strong>Plugins</strong> → <strong>Add New</strong>.
                  Cari <strong>"Meta Pixel for WordPress"</strong> atau <strong>"Facebook for
                  WooCommerce"</strong>.
                </p>
                <p className="text-sm text-gray-600">
                  Install dan activate plugin yang dipilih.
                </p>
              </div>
            ),
          },
          {
            title: 'Konfigurasi Plugin',
            content: (
              <div>
                <p className="mb-3">
                  Setelah plugin diaktifkan, buka menu plugin di sidebar WordPress. Masukkan Pixel ID
                  Anda atau connect dengan Facebook account.
                </p>
                <p className="text-sm text-gray-600">
                  Plugin akan meminta permission untuk akses ke Facebook account Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Enable Automatic Events',
            content: (
              <div>
                <p className="mb-3">
                  Aktifkan automatic event tracking untuk WooCommerce events seperti:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>ViewContent (product pages)</li>
                  <li>AddToCart</li>
                  <li>InitiateCheckout</li>
                  <li>Purchase</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Save dan Test',
            content: (
              <div>
                <p className="mb-3">
                  Simpan konfigurasi dan test dengan mengunjungi website dan melakukan beberapa action.
                </p>
                <p className="text-sm text-gray-600">
                  Cek Events Manager untuk memastikan events terkirim dengan benar.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Setup via Platform Lain</h2>
      <p>
        Untuk platform lain seperti BigCommerce, Magento, atau PrestaShop:
      </p>

      <div className="my-6 space-y-4">
        <div>
          <h3 className="mb-2 font-semibold">1. Cek Meta Partner Directory</h3>
          <p className="text-sm text-gray-600">
            Kunjungi{' '}
            <a
              href="https://www.facebook.com/business/help/120325381656392"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hadona-primary hover:underline"
            >
              Meta Partner Directory
            </a>{' '}
            untuk melihat daftar platform yang didukung dan panduan spesifik untuk setiap platform.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">2. Ikuti Panduan Platform Spesifik</h3>
          <p className="text-sm text-gray-600">
            Setiap platform memiliki panduan setup yang berbeda. Ikuti dokumentasi resmi dari Meta
            untuk platform Anda.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">3. Gunakan Meta Pixel Helper</h3>
          <p className="text-sm text-gray-600">
            Setelah setup, gunakan Meta Pixel Helper browser extension untuk verifikasi bahwa pixel
            bekerja dengan benar.
          </p>
        </div>
      </div>

      <h2>Keuntungan Partner Integration</h2>

      <div className="my-8 space-y-4">
        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Automatic Event Tracking</h3>
            <p className="text-sm text-gray-600">
              Platform partner otomatis track standard e-commerce events tanpa perlu setup manual
              untuk setiap event.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Product Catalog Sync</h3>
            <p className="text-sm text-gray-600">
              Beberapa platform (seperti Shopify) mendukung automatic product catalog sync untuk
              Dynamic Product Ads.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Easy Setup</h3>
            <p className="text-sm text-gray-600">
              Setup lebih mudah dengan wizard atau plugin yang user-friendly, tidak perlu edit code
              manual.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-1 font-semibold">Automatic Updates</h3>
            <p className="text-sm text-gray-600">
              Platform partner biasanya update pixel code secara otomatis ketika ada perubahan dari
              Meta.
            </p>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Penting untuk Diketahui">
        <p>
          Meskipun partner integration lebih mudah, pastikan untuk verifikasi bahwa semua event yang
          Anda butuhkan ter-track dengan benar. Beberapa platform mungkin tidak support semua event
          atau memerlukan konfigurasi tambahan.
        </p>
      </Callout>

      <h2>Kapan Menggunakan Partner Integration vs Manual</h2>

      <div className="my-8 overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">Kriteria</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Partner Integration</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Manual Installation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium">Platform Support</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Jika platform didukung
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Semua platform
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium">Ease of Setup</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Sangat mudah (wizard/plugin)
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Memerlukan akses code
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium">Custom Events</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Terbatas pada standard events
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Full control, custom events
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium">Maintenance</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Automatic updates
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Manual updates
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium">E-commerce Features</td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Automatic catalog sync
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                Manual setup required
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div>
          <h3 className="mb-2 font-semibold">Plugin tidak terdeteksi</h3>
          <p className="text-sm text-gray-600">
            Pastikan plugin terinstall dan diaktifkan dengan benar. Cek WordPress/Shopify admin untuk
            status plugin.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Events tidak terkirim</h3>
          <p className="text-sm text-gray-600">
            Verifikasi Pixel ID sudah benar di konfigurasi plugin. Test dengan Meta Pixel Helper dan
            cek Events Manager.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Permission error</h3>
          <p className="text-sm text-gray-600">
            Pastikan akun Facebook yang digunakan memiliki akses ke Business Manager dan Events
            Manager dengan permission yang sesuai.
          </p>
        </div>
      </div>

      <Callout type="success" title="Partner Integration Selesai!">
        <p>
          Setelah pixel terpasang via partner integration, lanjutkan ke artikel Verifikasi Instalasi
          untuk memastikan pixel bekerja dengan benar dan semua event ter-track dengan baik.
        </p>
      </Callout>
    </DocLayout>
  )
}
