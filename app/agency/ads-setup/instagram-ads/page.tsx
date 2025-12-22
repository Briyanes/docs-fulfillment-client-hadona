import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Instagram, Image, Video, CheckCircle2, TrendingUp } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Instagram Ads"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/setup-audience"
      prevTitle="Setup Audience"
      nextHref="/agency/ads-setup/whatsapp-ads"
      nextTitle="WhatsApp Ads"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Instagram adalah platform visual yang sangat powerful untuk iklan. Panduan ini akan
          membantu Anda membuat dan mengoptimalkan iklan Instagram yang efektif.
        </p>
      </div>

      <h2>Mengapa Instagram Ads?</h2>
      <p>
        Instagram menawarkan berbagai keuntungan untuk iklan:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Image className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Visual Platform</h3>
          </div>
          <p className="text-sm text-gray-600">
            Platform yang sangat cocok untuk visual content dan storytelling brand.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <TrendingUp className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Engagement Tinggi</h3>
          </div>
          <p className="text-sm text-gray-600">
            Engagement rate di Instagram umumnya lebih tinggi dibanding platform lain.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Instagram className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Diverse Formats</h3>
          </div>
          <p className="text-sm text-gray-600">
            Berbagai format iklan: Feed, Stories, Reels, Explore, dan Shopping.
          </p>
        </div>
      </div>

      <h2>Format Iklan Instagram</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Instagram Feed Ads</h3>
          <p className="mb-2 text-sm text-gray-600">
            Iklan yang muncul di feed Instagram, terlihat seperti post organik. Format: Single
            Image, Video, Carousel, atau Collection.
          </p>
          <ul className="text-sm text-gray-600">
            <li>• Ukuran: 1080x1080px (square) atau 1080x1350px (portrait)</li>
            <li>• Video: Max 60 detik untuk Feed</li>
            <li>• Sangat efektif untuk brand awareness dan conversions</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Instagram Stories Ads</h3>
          <p className="mb-2 text-sm text-gray-600">
            Iklan full-screen yang muncul di antara Stories. Format: Image atau Video (vertical).
          </p>
          <ul className="text-sm text-gray-600">
            <li>• Ukuran: 1080x1920px (9:16 aspect ratio)</li>
            <li>• Video: Max 15 detik</li>
            <li>• Sangat efektif untuk engagement dan reach</li>
            <li>• Dapat menggunakan interactive stickers (poll, quiz, dll)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Instagram Reels Ads</h3>
          <p className="mb-2 text-sm text-gray-600">
            Iklan yang muncul di antara Reels. Format: Video vertical yang engaging.
          </p>
          <ul className="text-sm text-gray-600">
            <li>• Ukuran: 1080x1920px (9:16 aspect ratio)</li>
            <li>• Video: 15-30 detik (optimal)</li>
            <li>• Sangat efektif untuk reach dan engagement</li>
            <li>• Harus engaging dari detik pertama</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Instagram Shopping Ads</h3>
          <p className="mb-2 text-sm text-gray-600">
            Iklan yang menampilkan produk dengan tag produk. Format: Single Image, Video, atau
            Carousel.
          </p>
          <ul className="text-sm text-gray-600">
            <li>• Perlu setup Instagram Shopping terlebih dahulu</li>
            <li>• Tag produk langsung di iklan</li>
            <li>• Sangat efektif untuk e-commerce</li>
          </ul>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum membuat iklan Instagram, pastikan:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Akun Instagram sudah ditautkan ke Business Manager</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Akun Instagram adalah Business atau Creator account (bukan Personal)</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Page Facebook sudah ditautkan (diperlukan untuk beberapa format)</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Creative sudah siap dengan spesifikasi yang benar</div>
        </li>
      </ul>

      <h2>Langkah-langkah Membuat Instagram Ads</h2>
      <StepGuide
        steps={[
          {
            title: 'Buat Campaign Baru',
            content: (
              <div>
                <p>
                  Di Ads Manager, klik <strong>"Create"</strong> dan pilih objective yang sesuai.
                  Untuk Instagram, objectives yang umum digunakan:
                </p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Traffic:</strong> Untuk mengarahkan ke website</li>
                  <li><strong>Engagement:</strong> Untuk likes, comments, saves</li>
                  <li><strong>Conversions:</strong> Untuk sales atau aksi spesifik</li>
                  <li><strong>Reach:</strong> Untuk brand awareness</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Pilih Placements',
            content: (
              <div>
                <p>
                  Di Ad Set level, di bagian <strong>"Placements"</strong>:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    Pilih <strong>"Manual Placements"</strong> jika ingin kontrol penuh
                  </li>
                  <li>
                    Pilih <strong>"Instagram Feed"</strong> untuk Feed ads
                  </li>
                  <li>
                    Pilih <strong>"Instagram Stories"</strong> untuk Stories ads
                  </li>
                  <li>
                    Pilih <strong>"Instagram Reels"</strong> untuk Reels ads
                  </li>
                  <li>
                    Atau pilih <strong>"Automatic Placements"</strong> untuk biarkan Meta memilih
                    (recommended)
                  </li>
                </ul>
                <Callout type="info" title="Tips">
                  <p>
                    Untuk testing awal, gunakan Automatic Placements. Setelah tahu format mana yang
                    performa terbaik, gunakan Manual Placements untuk fokus ke format tersebut.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Setup Audience & Budget',
            content: (
              <div>
                <p>
                  Setup audience targeting dan budget seperti biasa. Untuk Instagram:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    Audience targeting sama seperti Facebook (demographics, interests, behaviors)
                  </li>
                  <li>
                    Instagram cenderung lebih efektif untuk audience yang lebih muda (18-34)
                  </li>
                  <li>
                    Budget bisa mulai dari $5-10/hari untuk testing
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Buat Creative untuk Instagram',
            content: (
              <div>
                <p>
                  Di Ad level, buat creative yang sesuai dengan format Instagram:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Feed Ads:</strong>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>Square: 1080x1080px</li>
                      <li>Portrait: 1080x1350px</li>
                      <li>Video: Max 60 detik, square atau portrait</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Stories Ads:</strong>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>1080x1920px (9:16)</li>
                      <li>Video: Max 15 detik</li>
                      <li>Pastikan text tidak di area yang akan tertutup profile/sticker</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Reels Ads:</strong>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>1080x1920px (9:16)</li>
                      <li>Video: 15-30 detik (optimal)</li>
                      <li>Harus engaging dari detik pertama</li>
                    </ul>
                  </li>
                </ul>
                <Callout type="warning" title="Penting">
                  <p>
                    Pastikan creative memenuhi{' '}
                    <a
                      href="https://www.facebook.com/policies/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hadona-primary hover:underline"
                    >
                      Instagram Advertising Policies
                    </a>
                    . Text overlay maksimal 20% dari area gambar.
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
                  Tulis copy yang sesuai dengan style Instagram:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Primary Text:</strong> Maksimal 125 karakter, gunakan emoji dengan
                    bijak, tone yang friendly dan authentic
                  </li>
                  <li>
                    <strong>Headline:</strong> Maksimal 40 karakter, catchy dan clear
                  </li>
                  <li>
                    <strong>CTA:</strong> Pilih yang sesuai (Learn More, Shop Now, Sign Up, dll)
                  </li>
                </ul>
                <p className="mt-2">
                  Instagram audience lebih menyukai copy yang authentic dan tidak terlalu
                  sales-y. Gunakan storytelling dan value proposition yang jelas.
                </p>
              </div>
            ),
          },
          {
            title: 'Link Instagram Account',
            content: (
              <div>
                <p>
                  Pastikan iklan menggunakan Instagram account yang benar:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    Di Ad level, di bagian <strong>"Identity"</strong>, pilih Instagram account
                  </li>
                  <li>
                    Pastikan account sudah ditautkan ke Business Manager
                  </li>
                  <li>
                    Iklan akan muncul dengan username dan profile picture dari account tersebut
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Review & Publish',
            content: (
              <div>
                <p>
                  Sebelum publish, review:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Creative sudah sesuai spesifikasi format</li>
                  <li>Copy sudah menarik dan sesuai policy</li>
                  <li>Instagram account sudah dipilih dengan benar</li>
                  <li>Placements sudah sesuai</li>
                  <li>Landing page (jika ada) sudah mobile-friendly</li>
                </ul>
                <p className="mt-2">
                  Setelah yakin, klik <strong>"Publish"</strong> dan tunggu review dari Meta.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Best Practices untuk Instagram Ads</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Visual First</h3>
            <p className="text-sm text-gray-600">
              Instagram adalah platform visual. Prioritaskan kualitas visual yang tinggi, warna
              yang menarik, dan komposisi yang baik.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Mobile-Optimized</h3>
            <p className="text-sm text-gray-600">
              Sebagian besar pengguna Instagram menggunakan mobile. Pastikan creative terlihat bagus
              di layar kecil dan vertical format.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Authentic Content</h3>
            <p className="text-sm text-gray-600">
              Instagram audience lebih menyukai content yang authentic dan tidak terlalu polished.
              Gunakan user-generated content atau behind-the-scenes jika memungkinkan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Use Stories & Reels</h3>
            <p className="text-sm text-gray-600">
              Stories dan Reels biasanya memiliki engagement rate yang lebih tinggi. Prioritaskan
              format ini untuk reach dan engagement.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Test Multiple Formats</h3>
            <p className="text-sm text-gray-600">
              Test Feed, Stories, dan Reels untuk melihat format mana yang paling efektif untuk
              brand Anda.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Instagram Ads Siap">
        <p>
          Setelah iklan dipublish dan approved, monitor performa secara berkala. Instagram ads
          biasanya memiliki engagement rate yang lebih tinggi dibanding Facebook ads.
        </p>
      </Callout>

      <h2>Masalah Umum</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Instagram Account Tidak Muncul</h3>
          <p className="text-sm text-gray-600">
            Pastikan Instagram account sudah ditautkan ke Business Manager dan memiliki status
            aktif. Cek di Business Settings → Instagram Accounts.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Creative Ditolak</h3>
          <p className="text-sm text-gray-600">
            Pastikan text overlay tidak melebihi 20% dari area gambar, dan creative memenuhi
            Instagram Advertising Policies. Cek email untuk detail penolakan.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Low Engagement</h3>
          <p className="text-sm text-gray-600">
            Jika engagement rendah, coba perbaiki creative quality, gunakan format Stories/Reels,
            atau test audience yang berbeda. Instagram membutuhkan creative yang sangat engaging.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
