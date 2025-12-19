import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { MessageCircle, Send, Users, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="WhatsApp Ads"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/instagram-ads"
      prevTitle="Instagram Ads"
      nextHref="/agency/ads-setup/instagram-whatsapp-linking"
      nextTitle="Instagram & WhatsApp Linking"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          WhatsApp Ads memungkinkan Anda mengarahkan pengguna langsung ke percakapan WhatsApp
          bisnis Anda. Format ini sangat efektif untuk customer service, lead generation, dan
          direct sales.
        </p>
      </div>

      <h2>Mengapa WhatsApp Ads?</h2>
      <p>
        WhatsApp Ads menawarkan berbagai keuntungan:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <MessageCircle className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Direct Communication</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Langsung terhubung dengan customer melalui WhatsApp untuk komunikasi personal dan
            real-time.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Send className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">High Intent</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            User yang klik WhatsApp ads biasanya memiliki intent tinggi karena langsung ingin
            berkomunikasi.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Users className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Popular di Indonesia</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            WhatsApp sangat populer di Indonesia, membuat format ini sangat efektif untuk market
            lokal.
          </p>
        </div>
      </div>

      <h2>Jenis WhatsApp Ads</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Click-to-WhatsApp Ads</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Iklan dengan CTA button "Send Message" yang mengarahkan user langsung ke percakapan
            WhatsApp. Format: Single Image, Video, atau Carousel.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Muncul di Facebook Feed, Instagram Feed, dan Stories</li>
            <li>• User klik button → langsung buka WhatsApp dengan pre-filled message</li>
            <li>• Sangat efektif untuk lead generation dan customer service</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">WhatsApp Business Directory</h3>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Listing di WhatsApp Business Directory yang memungkinkan user menemukan bisnis Anda
            melalui search di WhatsApp.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Perlu setup WhatsApp Business API</li>
            <li>• User dapat menemukan bisnis melalui search</li>
            <li>• Cocok untuk bisnis lokal</li>
          </ul>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum membuat WhatsApp Ads, pastikan:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>WhatsApp Business Account sudah dibuat dan verified</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>WhatsApp Business Account sudah ditautkan ke Business Manager</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Page Facebook sudah ditautkan (diperlukan untuk WhatsApp linking)</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Tim customer service siap untuk merespons pesan (24 jam pertama sangat penting)</div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          WhatsApp Ads akan menghasilkan banyak pesan masuk. Pastikan Anda memiliki tim atau sistem
          untuk merespons pesan dengan cepat (idealnya dalam 1 jam). Response time yang lambat akan
          mengurangi efektivitas iklan.
        </p>
      </Callout>

      <h2>Langkah-langkah Membuat WhatsApp Ads</h2>
      <StepGuide
        steps={[
          {
            title: 'Setup WhatsApp Business Account',
            content: (
              <div>
                <p>
                  Jika belum memiliki WhatsApp Business Account:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Download WhatsApp Business App di smartphone</li>
                  <li>Daftar menggunakan nomor telepon bisnis (bukan personal)</li>
                  <li>Setup business profile (nama, deskripsi, alamat, website)</li>
                  <li>Verifikasi nomor telepon</li>
                </ul>
                <p className="mt-2">
                  Untuk bisnis besar, pertimbangkan menggunakan WhatsApp Business API untuk fitur
                  yang lebih lengkap.
                </p>
              </div>
            ),
          },
          {
            title: 'Link WhatsApp ke Business Manager',
            content: (
              <div>
                <p>
                  Di Business Manager:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka <strong>Business Settings → WhatsApp Accounts</strong></li>
                  <li>Klik <strong>"Add"</strong> dan pilih <strong>"Connect WhatsApp Business Account"</strong></li>
                  <li>Scan QR code menggunakan WhatsApp Business App</li>
                  <li>Konfirmasi linking</li>
                </ul>
                <p className="mt-2">
                  Pastikan WhatsApp Business Account sudah verified sebelum linking.
                </p>
              </div>
            ),
          },
          {
            title: 'Buat Campaign dengan Messages Objective',
            content: (
              <div>
                <p>
                  Di Ads Manager, buat campaign baru:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Pilih objective <strong>"Messages"</strong></li>
                  <li>Atau gunakan objective lain (Traffic, Conversions) dengan WhatsApp sebagai destination</li>
                  <li>Beri nama campaign yang jelas</li>
                </ul>
                <p className="mt-2">
                  Objective "Messages" secara khusus dioptimalkan untuk mengarahkan user ke
                  percakapan WhatsApp.
                </p>
              </div>
            ),
          },
          {
            title: 'Setup Ad Set',
            content: (
              <div>
                <p>
                  Di Ad Set level, setup seperti biasa:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Audience:</strong> Target audience yang relevan (WhatsApp sangat efektif
                    untuk audience lokal)
                  </li>
                  <li>
                    <strong>Budget:</strong> Mulai dengan $10-20/hari untuk testing
                  </li>
                  <li>
                    <strong>Placements:</strong> WhatsApp ads muncul di Facebook Feed, Instagram
                    Feed, dan Stories
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Buat Ad dengan WhatsApp CTA',
            content: (
              <div>
                <p>
                  Di Ad level:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Format:</strong> Pilih Single Image, Video, atau Carousel
                  </li>
                  <li>
                    <strong>Creative:</strong> Upload creative yang menarik dengan CTA yang jelas
                    untuk WhatsApp
                  </li>
                  <li>
                    <strong>Destination:</strong> Pilih <strong>"WhatsApp"</strong>
                  </li>
                  <li>
                    <strong>WhatsApp Account:</strong> Pilih WhatsApp Business Account yang sudah
                    ditautkan
                  </li>
                  <li>
                    <strong>Pre-filled Message:</strong> Tulis pesan default yang akan muncul saat
                    user klik (opsional, tapi sangat recommended)
                  </li>
                </ul>
                <Callout type="info" title="Pre-filled Message">
                  <p>
                    Pre-filled message membantu user memulai percakapan dengan lebih mudah. Contoh:
                    "Halo, saya tertarik dengan produk [nama produk]" atau "Saya ingin bertanya
                    tentang [topik]".
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Tulis Copy yang Menarik',
            content: (
              <div>
                <p>
                  Tulis copy yang mendorong user untuk menghubungi via WhatsApp:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Primary Text:</strong> Jelaskan value proposition dan ajak user untuk
                    chat (misalnya: "Ada pertanyaan? Chat kami langsung via WhatsApp!")
                  </li>
                  <li>
                    <strong>Headline:</strong> CTA yang jelas (misalnya: "Chat Sekarang" atau "Tanya
                    via WhatsApp")
                  </li>
                  <li>
                    <strong>CTA Button:</strong> Otomatis menjadi "Send Message" untuk WhatsApp ads
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Setup Auto-Reply (Opsional)',
            content: (
              <div>
                <p>
                  Untuk meningkatkan response rate, setup auto-reply di WhatsApp Business:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka WhatsApp Business App</li>
                  <li>Settings → Business Tools → Away Message</li>
                  <li>Setup pesan otomatis yang akan dikirim saat tim tidak online</li>
                  <li>Atau gunakan WhatsApp Business API untuk auto-reply yang lebih advanced</li>
                </ul>
                <p className="mt-2">
                  Auto-reply membantu user tahu bahwa pesan mereka diterima dan akan direspon segera.
                </p>
              </div>
            ),
            optional: true,
          },
          {
            title: 'Review & Publish',
            content: (
              <div>
                <p>
                  Sebelum publish, pastikan:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>WhatsApp Business Account sudah ditautkan dengan benar</li>
                  <li>Pre-filled message sudah ditulis (jika digunakan)</li>
                  <li>Creative sudah menarik dan CTA jelas</li>
                  <li>Tim customer service siap merespons pesan</li>
                  <li>Auto-reply sudah setup (jika digunakan)</li>
                </ul>
                <p className="mt-2">
                  Setelah yakin, klik <strong>"Publish"</strong> dan tunggu review.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Best Practices untuk WhatsApp Ads</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Response Time Cepat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Respon pesan dalam 1 jam pertama sangat penting. Response time yang cepat meningkatkan
              conversion rate dan customer satisfaction.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Gunakan Pre-filled Message</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pre-filled message membantu user memulai percakapan dengan lebih mudah dan mengurangi
              friction.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Setup Business Hours</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Setup business hours di WhatsApp Business profile dan gunakan away message saat di
              luar jam kerja untuk manage expectations.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Track & Measure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Track metrics seperti click-to-message rate, response rate, dan conversion dari
              WhatsApp. Gunakan UTM parameters untuk tracking yang lebih detail.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Personal Touch</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              WhatsApp adalah platform personal. Gunakan tone yang friendly dan personal dalam
              percakapan, bukan formal seperti email.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="WhatsApp Ads Siap">
        <p>
          Setelah iklan dipublish, pastikan tim customer service siap merespons pesan dengan cepat.
          WhatsApp ads sangat efektif untuk lead generation dan direct sales, terutama di Indonesia.
        </p>
      </Callout>

      <h2>Masalah Umum</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">WhatsApp Account Tidak Muncul</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan WhatsApp Business Account sudah ditautkan ke Business Manager dan verified.
            Cek di Business Settings → WhatsApp Accounts.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Banyak Pesan Masuk</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jika terlalu banyak pesan masuk, pertimbangkan untuk turunkan budget atau sempitkan
            audience. Pastikan tim customer service siap untuk handle volume.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Low Click-to-Message Rate</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jika click-to-message rate rendah, perbaiki creative dan copy untuk membuat value
            proposition lebih jelas. Test berbagai creative dan copy.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Response Time Lambat</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Setup auto-reply untuk acknowledge pesan masuk. Pertimbangkan menggunakan WhatsApp
            Business API dengan chatbot untuk handle pesan otomatis di luar jam kerja.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
