import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Link2, Instagram, MessageCircle, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Instagram & WhatsApp Linking"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/whatsapp-ads"
      prevTitle="WhatsApp Ads"
      nextHref="/agency/ads-setup/creative-best-practices"
      nextTitle="Creative Best Practices"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Menautkan Instagram dan WhatsApp memungkinkan user menghubungi bisnis Anda langsung dari
          Instagram melalui WhatsApp. Fitur ini sangat efektif untuk meningkatkan engagement dan
          conversions.
        </p>
      </div>

      <h2>Mengapa Link Instagram & WhatsApp?</h2>
      <p>
        Menautkan Instagram dan WhatsApp memberikan berbagai keuntungan:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Link2 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Seamless Experience</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            User dapat langsung menghubungi bisnis dari Instagram tanpa perlu copy-paste nomor
            telepon.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Instagram className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Higher Engagement</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Button "Message" di Instagram profile memudahkan user untuk langsung chat via WhatsApp.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <MessageCircle className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Direct Sales</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Memudahkan proses sales dengan komunikasi langsung melalui WhatsApp dari Instagram.
          </p>
        </div>
      </div>

      <h2>Fitur yang Tersedia</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Contact Button di Instagram Profile</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Button "Message" atau "Contact" di Instagram profile yang langsung membuka WhatsApp
            dengan pre-filled message.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Muncul di Instagram Business/Creator profile</li>
            <li>• User klik → langsung buka WhatsApp</li>
            <li>• Dapat setup pre-filled message</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">WhatsApp Stickers di Instagram Stories</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Sticker WhatsApp di Instagram Stories yang memungkinkan user langsung chat via WhatsApp.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Tersedia di Instagram Stories</li>
            <li>• User tap sticker → langsung buka WhatsApp</li>
            <li>• Sangat efektif untuk engagement</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">WhatsApp Click-to-Message Ads</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Iklan dengan CTA "Send Message" yang mengarahkan ke WhatsApp (sudah dibahas di halaman
            WhatsApp Ads).
          </p>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum menautkan Instagram dan WhatsApp, pastikan:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Instagram account adalah Business atau Creator account (bukan Personal)</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Instagram account sudah ditautkan ke Business Manager</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Page Facebook sudah ditautkan ke Instagram (diperlukan untuk linking)</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>WhatsApp Business Account sudah dibuat dan verified</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>WhatsApp Business Account sudah ditautkan ke Business Manager</div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          Pastikan nomor telepon WhatsApp Business sama dengan nomor yang terdaftar di Instagram
          Business profile (jika ada). Jika berbeda, pastikan keduanya sudah verified.
        </p>
      </Callout>

      <h2>Langkah-langkah Menautkan Instagram & WhatsApp</h2>
      <StepGuide
        steps={[
          {
            title: 'Pastikan Instagram Business Account',
            content: (
              <div>
                <p>
                  Pastikan Instagram account Anda adalah Business atau Creator account:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka Instagram App → Settings → Account</li>
                  <li>Jika masih Personal account, pilih <strong>"Switch to Professional Account"</strong></li>
                  <li>Pilih <strong>"Business"</strong> atau <strong>"Creator"</strong></li>
                  <li>Ikuti proses setup (link ke Facebook Page jika diminta)</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Link Instagram ke Business Manager',
            content: (
              <div>
                <p>
                  Jika belum ditautkan, link Instagram ke Business Manager:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka Business Manager → Business Settings → Instagram Accounts</li>
                  <li>Klik <strong>"Add"</strong> → <strong>"Connect Your Instagram Account"</strong></li>
                  <li>Login ke Instagram account</li>
                  <li>Konfirmasi linking</li>
                </ul>
                <p className="mt-2">
                  Pastikan Instagram account sudah verified sebelum linking.
                </p>
              </div>
            ),
          },
          {
            title: 'Link WhatsApp ke Business Manager',
            content: (
              <div>
                <p>
                  Jika belum ditautkan, link WhatsApp ke Business Manager:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka Business Manager → Business Settings → WhatsApp Accounts</li>
                  <li>Klik <strong>"Add"</strong> → <strong>"Connect WhatsApp Business Account"</strong></li>
                  <li>Scan QR code menggunakan WhatsApp Business App</li>
                  <li>Konfirmasi linking</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Link Instagram & WhatsApp di Business Manager',
            content: (
              <div>
                <p>
                  Di Business Manager:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka <strong>Business Settings → Instagram Accounts</strong></li>
                  <li>Klik Instagram account yang ingin di-link</li>
                  <li>Di bagian <strong>"WhatsApp"</strong>, klik <strong>"Connect"</strong></li>
                  <li>Pilih WhatsApp Business Account yang sudah ditautkan</li>
                  <li>Konfirmasi linking</li>
                </ul>
                <p className="mt-2">
                  Setelah linking, Instagram dan WhatsApp akan terhubung.
                </p>
              </div>
            ),
          },
          {
            title: 'Setup Contact Button di Instagram',
            content: (
              <div>
                <p>
                  Di Instagram App:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka Instagram App → Profile → Edit Profile</li>
                  <li>Di bagian <strong>"Contact Options"</strong>, pilih <strong>"Add an action button"</strong></li>
                  <li>Pilih <strong>"WhatsApp"</strong></li>
                  <li>Pilih WhatsApp Business Account yang sudah ditautkan</li>
                  <li>Setup pre-filled message (opsional, tapi recommended)</li>
                  <li>Save changes</li>
                </ul>
                <p className="mt-2">
                  Setelah setup, button "Message" atau "Contact" akan muncul di Instagram profile.
                </p>
              </div>
            ),
          },
          {
            title: 'Setup Pre-filled Message',
            content: (
              <div>
                <p>
                  Pre-filled message akan muncul otomatis saat user klik button WhatsApp:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Di Instagram App → Profile → Edit Profile → Contact Options</li>
                  <li>Edit WhatsApp action button</li>
                  <li>Tulis pre-filled message yang jelas dan helpful</li>
                  <li>Contoh: "Halo, saya tertarik dengan produk Anda" atau "Saya ingin bertanya tentang [topik]"</li>
                </ul>
                <Callout type="info" title="Tips">
                  <p>
                    Pre-filled message yang baik adalah yang membantu user memulai percakapan dengan
                    mudah. Hindari message yang terlalu panjang atau terlalu sales-y.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Verifikasi Linking',
            content: (
              <div>
                <p>
                  Verifikasi bahwa linking sudah berhasil:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka Instagram profile di Instagram App</li>
                  <li>Pastikan button "Message" atau "Contact" muncul</li>
                  <li>Klik button untuk test (akan buka WhatsApp dengan pre-filled message)</li>
                  <li>Cek di Business Manager → Instagram Accounts → WhatsApp section bahwa status "Connected"</li>
                </ul>
                <p className="mt-2">
                  Jika button tidak muncul, pastikan semua requirements sudah terpenuhi dan coba
                  refresh Instagram App.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Menggunakan WhatsApp Stickers di Instagram Stories</h2>
      <p>
        Setelah Instagram dan WhatsApp ditautkan, Anda dapat menggunakan WhatsApp sticker di
        Instagram Stories:
      </p>

      <StepGuide
        steps={[
          {
            title: 'Buat Instagram Story',
            content: (
              <div>
                <p>
                  Buat Story seperti biasa di Instagram App.
                </p>
              </div>
            ),
          },
          {
            title: 'Tambahkan WhatsApp Sticker',
            content: (
              <div>
                <p>
                  Setelah upload foto/video:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Tap icon sticker di bagian atas</li>
                  <li>Scroll dan cari sticker <strong>"WhatsApp"</strong></li>
                  <li>Tap sticker untuk menambahkannya ke Story</li>
                  <li>Posisikan sticker di tempat yang menarik</li>
                </ul>
                <p className="mt-2">
                  Sticker WhatsApp hanya tersedia jika Instagram dan WhatsApp sudah ditautkan.
                </p>
              </div>
            ),
          },
          {
            title: 'Publish Story',
            content: (
              <div>
                <p>
                  Publish Story seperti biasa. User yang melihat Story dapat tap sticker WhatsApp
                  untuk langsung chat via WhatsApp.
                </p>
              </div>
            ),
          },
        ]}
        title="Setup WhatsApp Sticker"
      />

      <h2>Best Practices</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Gunakan Pre-filled Message</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pre-filled message membantu user memulai percakapan dengan lebih mudah. Buat message
              yang jelas dan helpful.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Promote di Bio</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tambahkan text di Instagram bio yang mengajak user untuk klik button "Message" untuk
              chat via WhatsApp.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Gunakan WhatsApp Stickers di Stories</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gunakan WhatsApp stickers di Instagram Stories secara berkala untuk meningkatkan
              awareness dan engagement.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Response Time Cepat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pastikan tim customer service siap merespons pesan dengan cepat (idealnya dalam 1
              jam) untuk meningkatkan conversion rate.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Linking Selesai">
        <p>
          Setelah Instagram dan WhatsApp ditautkan, user dapat dengan mudah menghubungi bisnis Anda
          langsung dari Instagram melalui WhatsApp. Fitur ini sangat efektif untuk meningkatkan
          engagement dan conversions.
        </p>
      </Callout>

      <h2>Masalah Umum</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Button Tidak Muncul</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan Instagram adalah Business/Creator account, sudah ditautkan ke Business Manager,
            dan WhatsApp sudah ditautkan. Coba refresh Instagram App atau unlink dan link ulang.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">WhatsApp Sticker Tidak Tersedia</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan Instagram dan WhatsApp sudah ditautkan di Business Manager. Sticker hanya
            tersedia setelah linking berhasil.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Linking Gagal</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan semua requirements terpenuhi (Business account, verified, ditautkan ke Business
            Manager). Coba unlink dan link ulang. Jika masih gagal, hubungi Meta Support.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
