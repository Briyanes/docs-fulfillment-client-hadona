import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Users, Target, Eye, RefreshCw, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Setup Audience"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/mengatur-budget"
      prevTitle="Mengatur Budget"
      nextHref="/agency/ads-setup/instagram-ads"
      nextTitle="Instagram Ads"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Audience targeting yang tepat adalah kunci untuk mencapai target pasar yang relevan dan
          meningkatkan ROI kampanye. Panduan ini akan membantu Anda memahami berbagai jenis audience
          dan cara mengaturnya.
        </p>
      </div>

      <h2>Jenis Audience di Meta Ads</h2>
      <p>
        Meta menyediakan berbagai jenis audience yang dapat Anda gunakan untuk targeting:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Target className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Custom Audience</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Audience yang dibuat dari data Anda sendiri (customer list, website visitors, app users,
            dll).
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Customer List</li>
            <li>• Website Visitors (via Pixel)</li>
            <li>• App Users</li>
            <li>• Engagement on Facebook/Instagram</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Users className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Lookalike Audience</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Audience yang mirip dengan Custom Audience Anda. Dibuat oleh Meta menggunakan machine
            learning.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• 1-10% similarity</li>
            <li>• Berdasarkan Custom Audience</li>
            <li>• Sangat efektif untuk scaling</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Eye className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Saved Audience</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Audience yang dibuat berdasarkan demographics, interests, behaviors, dan location.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Demographics (age, gender)</li>
            <li>• Interests</li>
            <li>• Behaviors</li>
            <li>• Location</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <RefreshCw className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Retargeting Audience</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Audience yang pernah berinteraksi dengan brand Anda (website visitors, video viewers,
            dll).
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Website Visitors</li>
            <li>• Video Viewers</li>
            <li>• Engagers</li>
            <li>• Add to Cart (tidak checkout)</li>
          </ul>
        </div>
      </div>

      <h2>Langkah-langkah Setup Audience</h2>
      <StepGuide
        steps={[
          {
            title: 'Akses Audience Manager',
            content: (
              <div>
                <p>
                  Di Ads Manager, klik menu <strong>"Audiences"</strong> di sidebar kiri, atau
                  kunjungi{' '}
                  <a
                    href="https://business.facebook.com/adsmanager/audiences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline"
                  >
                    business.facebook.com/adsmanager/audiences
                  </a>
                  .
                </p>
                <p className="mt-2">
                  Di sini Anda dapat melihat semua audience yang sudah dibuat dan membuat audience
                  baru.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Jenis Audience',
            content: (
              <div>
                <p>
                  Klik tombol <strong>"Create Audience"</strong> dan pilih jenis audience yang ingin
                  dibuat:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Custom Audience:</strong> Dari data Anda sendiri (customer list, Pixel,
                    dll)
                  </li>
                  <li>
                    <strong>Lookalike Audience:</strong> Berdasarkan Custom Audience yang sudah ada
                  </li>
                  <li>
                    <strong>Saved Audience:</strong> Berdasarkan demographics, interests, behaviors
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Buat Custom Audience (dari Pixel)',
            content: (
              <div>
                <p>
                  Untuk membuat Custom Audience dari website visitors:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Pilih <strong>"Website"</strong> sebagai source</li>
                  <li>Pilih Pixel yang sudah diinstall</li>
                  <li>Pilih event atau time range (misalnya: All Website Visitors dalam 30 hari)</li>
                  <li>Beri nama audience yang jelas (misalnya: "Website Visitors - 30 Days")</li>
                  <li>Klik <strong>"Create Audience"</strong></li>
                </ul>
                <Callout type="info" title="Minimum Size">
                  <p>
                    Custom Audience memerlukan minimal 100 orang untuk bisa digunakan. Pastikan
                    website Anda sudah memiliki traffic yang cukup.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Buat Lookalike Audience',
            content: (
              <div>
                <p>
                  Untuk membuat Lookalike Audience:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Pilih <strong>"Lookalike Audience"</strong></li>
                  <li>Pilih source (Custom Audience yang sudah ada)</li>
                  <li>Pilih location (negara atau region)</li>
                  <li>Pilih similarity (1% = paling mirip tapi kecil, 10% = lebih luas tapi kurang
                    mirip)</li>
                  <li>Beri nama audience</li>
                  <li>Klik <strong>"Create Audience"</strong></li>
                </ul>
                <Callout type="warning" title="Source Quality">
                  <p>
                    Kualitas Lookalike sangat bergantung pada kualitas source audience. Gunakan
                    Custom Audience yang relevan dan berkualitas tinggi (misalnya: customers yang
                    sudah purchase, bukan hanya website visitors).
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Buat Saved Audience',
            content: (
              <div>
                <p>
                  Untuk membuat Saved Audience berdasarkan demographics:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Location:</strong> Pilih negara, kota, atau radius tertentu
                  </li>
                  <li>
                    <strong>Age:</strong> Pilih range usia (misalnya: 25-45)
                  </li>
                  <li>
                    <strong>Gender:</strong> Pilih All, Men, atau Women
                  </li>
                  <li>
                    <strong>Detailed Targeting:</strong>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>Interests: Minat spesifik (misalnya: "Digital Marketing")</li>
                      <li>Behaviors: Perilaku (misalnya: "Small Business Owners")</li>
                      <li>Demographics: Demografis tambahan</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Audience Size:</strong> Lihat estimated reach di sidebar kanan
                  </li>
                  <li>Beri nama audience</li>
                  <li>Klik <strong>"Create Audience"</strong></li>
                </ul>
                <Callout type="info" title="Audience Size">
                  <p>
                    Idealnya, audience size antara 1-5 juta untuk hasil optimal. Terlalu kecil (&lt;
                    100K) akan sulit untuk delivery, terlalu besar (&gt; 10M) kurang targeted.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Gunakan Audience di Ad Set',
            content: (
              <div>
                <p>
                  Setelah audience dibuat, gunakan di Ad Set:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Buka Ad Set yang ingin di-edit</li>
                  <li>Di bagian <strong>"Audience"</strong>, klik <strong>"Edit"</strong></li>
                  <li>Pilih audience yang sudah dibuat dari dropdown</li>
                  <li>Atau buat audience baru langsung di sini</li>
                  <li>Review estimated reach dan audience size</li>
                  <li>Save changes</li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <h2>Best Practices untuk Audience Targeting</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Gunakan Layered Targeting</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kombinasikan demographics, interests, dan behaviors untuk targeting yang lebih tepat.
              Hindari targeting terlalu sempit atau terlalu luas.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Test Multiple Audiences</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Test 3-5 audience berbeda dalam satu campaign untuk menemukan audience yang paling
              efektif. Gunakan CBO untuk optimasi otomatis.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Prioritaskan Custom & Lookalike</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Custom Audience dan Lookalike biasanya performa lebih baik daripada Saved Audience
              karena lebih relevan dengan brand Anda.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Refresh Audience Secara Berkala</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Custom Audience dan Lookalike perlu di-refresh secara berkala (setiap 30-90 hari)
              untuk menjaga relevansi dan kualitas.
            </p>
          </div>
        </div>
      </div>

      <h2>Strategi Audience untuk Funnel</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Top of Funnel (Awareness)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gunakan Lookalike 2-5% atau Saved Audience dengan interests yang relevan. Tujuan:
            reach yang luas untuk brand awareness.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Middle of Funnel (Consideration)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gunakan Lookalike 1-2% atau Custom Audience dari website visitors. Tujuan: engagement
            dan consideration.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Bottom of Funnel (Conversion)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gunakan Custom Audience dari customers atau retargeting (Add to Cart, View Content).
            Tujuan: conversions dan sales.
          </p>
        </div>
      </div>

      <Callout type="success" title="Audience Setup Selesai">
        <p>
          Setelah audience dibuat dan digunakan di Ad Set, campaign siap berjalan. Monitor
          performa audience dan lakukan optimasi sesuai kebutuhan.
        </p>
      </Callout>

      <h2>Masalah Umum</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Audience Terlalu Kecil</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jika estimated reach &lt; 100K, perlebar targeting dengan menambah interests, menghapus
            beberapa restrictions, atau menggunakan Lookalike yang lebih besar (5-10%).
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Custom Audience Tidak Cukup</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Custom Audience memerlukan minimal 100 orang. Jika belum cukup, gunakan Saved Audience
            terlebih dahulu sambil membangun Custom Audience dari Pixel data.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Lookalike Tidak Tersedia</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lookalike memerlukan Custom Audience dengan minimal 100 orang dari satu negara. Pastikan
            source audience sudah memenuhi syarat.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Audience Overlap</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jika menggunakan multiple Ad Sets dengan audience yang overlap, gunakan "Audience
            Overlap" tool di Audience Manager untuk menghindari kompetisi internal.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
