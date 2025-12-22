import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { AlertCircle, XCircle, Clock, TrendingDown } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Troubleshooting Ads"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/reporting-analytics"
      prevTitle="Reporting & Analytics"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Masalah teknis dan performa dapat terjadi pada campaign. Panduan ini akan membantu Anda
          mengidentifikasi dan mengatasi masalah umum yang sering terjadi di Meta Ads.
        </p>
      </div>

      <h2>Masalah Umum dan Solusinya</h2>

      <div className="my-6 space-y-6">
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <XCircle className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-800">
              Campaign/Ad Ditolak (Rejected)
            </h3>
          </div>
          <p className="mb-3 text-sm text-red-700">
            <strong>Penyebab Umum:</strong>
          </p>
          <ul className="mb-3 space-y-1 text-sm text-red-700">
            <li>• Melanggar Advertising Policies (prohibited content, misleading claims, dll)</li>
            <li>• Text overlay lebih dari 20% di gambar</li>
            <li>• Landing page tidak berfungsi atau melanggar policy</li>
            <li>• Creative tidak jelas atau low quality</li>
            <li>• Before/After claims tanpa disclaimer</li>
          </ul>
          <p className="mb-2 text-sm font-semibold text-red-800">
            Solusi:
          </p>
          <ul className="space-y-1 text-sm text-red-700">
            <li>1. Cek email atau notification untuk detail penolakan</li>
            <li>2. Review{' '}
              <a
                href="https://www.facebook.com/policies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Facebook Advertising Policies
              </a>
            </li>
            <li>3. Perbaiki issue yang disebutkan (ganti creative, edit copy, fix landing page)</li>
            <li>4. Request Review jika yakin tidak melanggar policy</li>
            <li>5. Jika ditolak lagi, contact Meta Support untuk klarifikasi</li>
          </ul>
        </div>

        <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Clock className="h-6 w-6 text-orange-600" />
            <h3 className="text-lg font-semibold text-orange-800">
              Campaign Tidak Berjalan (Tidak Ada Impressions)
            </h3>
          </div>
          <p className="mb-3 text-sm text-orange-700">
            <strong>Penyebab Umum:</strong>
          </p>
          <ul className="mb-3 space-y-1 text-sm text-orange-700">
            <li>• Campaign masih dalam review (tunggu 15 menit - 24 jam)</li>
            <li>• Metode pembayaran tidak valid atau ditolak</li>
            <li>• Audience targeting terlalu sempit (estimated reach &lt; 1000)</li>
            <li>• Bid terlalu rendah atau budget terlalu kecil</li>
            <li>• Ad Account dalam status restricted atau disabled</li>
            <li>• Campaign schedule belum mulai atau sudah berakhir</li>
          </ul>
          <p className="mb-2 text-sm font-semibold text-orange-800">
            Solusi:
          </p>
          <ul className="space-y-1 text-sm text-orange-700">
            <li>1. Cek status campaign (Active, In Review, Paused, dll)</li>
            <li>2. Verifikasi metode pembayaran di Billing → Payment Methods</li>
            <li>3. Perlebar audience targeting (estimated reach minimal 100K-500K)</li>
            <li>4. Tingkatkan budget atau bid</li>
            <li>5. Cek Ad Account status di Account Quality</li>
            <li>6. Verifikasi schedule di Ad Set settings</li>
          </ul>
        </div>

        <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <TrendingDown className="h-6 w-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-800">
              Low CTR (&lt; 0.5%)
            </h3>
          </div>
          <p className="mb-3 text-sm text-yellow-700">
            <strong>Penyebab Umum:</strong>
          </p>
          <ul className="mb-3 space-y-1 text-sm text-yellow-700">
            <li>• Creative tidak menarik atau tidak relevan</li>
            <li>• Audience targeting tidak tepat</li>
            <li>• Copy tidak engaging atau value proposition tidak jelas</li>
            <li>• Ad fatigue (frequency terlalu tinggi)</li>
          </ul>
          <p className="mb-2 text-sm font-semibold text-yellow-800">
            Solusi:
          </p>
          <ul className="space-y-1 text-sm text-yellow-700">
            <li>1. Test creative baru yang lebih engaging (video, carousel, dll)</li>
            <li>2. Perbaiki copy dengan hook yang lebih kuat</li>
            <li>3. Sempitkan audience untuk lebih relevan</li>
            <li>4. Refresh creative jika frequency &gt; 3</li>
            <li>5. A/B test berbagai creative variations</li>
          </ul>
        </div>

        <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-purple-800">
              High CPC (Cost Per Click Tinggi)
            </h3>
          </div>
          <p className="mb-3 text-sm text-purple-700">
            <strong>Penyebab Umum:</strong>
          </p>
          <ul className="mb-3 space-y-1 text-sm text-purple-700">
            <li>• Kompetisi tinggi di audience target</li>
            <li>• Relevance score rendah</li>
            <li>• Audience terlalu sempit</li>
            <li>• Bid strategy tidak optimal</li>
          </ul>
          <p className="mb-2 text-sm font-semibold text-purple-800">
            Solusi:
          </p>
          <ul className="space-y-1 text-sm text-purple-700">
            <li>1. Perlebar audience untuk mengurangi kompetisi</li>
            <li>2. Perbaiki creative untuk meningkatkan relevance score</li>
            <li>3. Test placement yang berbeda (Automatic vs Manual)</li>
            <li>4. Gunakan bid cap atau cost cap untuk kontrol CPC</li>
            <li>5. Test audience yang berbeda (Custom, Lookalike, Saved)</li>
          </ul>
        </div>

        <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <XCircle className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-800">
              Low Conversion Rate
            </h3>
          </div>
          <p className="mb-3 text-sm text-blue-700">
            <strong>Penyebab Umum:</strong>
          </p>
          <ul className="mb-3 space-y-1 text-sm text-blue-700">
            <li>• Landing page tidak optimal (slow, bad UX, tidak mobile-friendly)</li>
            <li>• Mismatch antara ad dan landing page</li>
            <li>• Audience tidak qualified</li>
            <li>• Value proposition tidak jelas</li>
            <li>• Funnel terlalu panjang atau complicated</li>
          </ul>
          <p className="mb-2 text-sm font-semibold text-blue-800">
            Solusi:
          </p>
          <ul className="space-y-1 text-sm text-blue-700">
            <li>1. Optimize landing page (speed, UX, mobile-friendliness)</li>
            <li>2. Pastikan message consistency antara ad dan landing page</li>
            <li>3. Gunakan Lookalike atau Custom Audience yang lebih qualified</li>
            <li>4. Simplify funnel dan reduce friction</li>
            <li>5. Test berbagai offers atau value propositions</li>
          </ul>
        </div>

        <div className="rounded-lg border-2 border-pink-200 bg-pink-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <TrendingDown className="h-6 w-6 text-pink-600" />
            <h3 className="text-lg font-semibold text-pink-800">
              Budget Tidak Terpakai
            </h3>
          </div>
          <p className="mb-3 text-sm text-pink-700">
            <strong>Penyebab Umum:</strong>
          </p>
          <ul className="mb-3 space-y-1 text-sm text-pink-700">
            <li>• Audience terlalu sempit</li>
            <li>• Bid terlalu rendah</li>
            <li>• Creative quality rendah atau tidak engaging</li>
            <li>• Placement restrictions terlalu banyak</li>
          </ul>
          <p className="mb-2 text-sm font-semibold text-pink-800">
            Solusi:
          </p>
          <ul className="space-y-1 text-sm text-pink-700">
            <li>1. Perlebar audience targeting</li>
            <li>2. Gunakan Automatic Bidding atau tingkatkan bid</li>
            <li>3. Improve creative quality dan test variations</li>
            <li>4. Gunakan Automatic Placements untuk reach lebih luas</li>
            <li>5. Hapus restrictions yang tidak perlu</li>
          </ul>
        </div>
      </div>

      <h2>Account-Level Issues</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Ad Account Disabled</h3>
          <p className="mb-2 text-sm text-gray-600">
            <strong>Penyebab:</strong> Melanggar policy berulang kali, payment issues, atau suspicious activity.
          </p>
          <p className="mb-1 text-sm font-semibold text-gray-700">Solusi:</p>
          <ul className="text-sm text-gray-600">
            <li>1. Cek notification untuk alasan disable</li>
            <li>2. Request Review di Account Quality</li>
            <li>3. Perbaiki semua violations sebelum request review</li>
            <li>4. Jika ditolak, contact Meta Support dengan detail lengkap</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Payment Method Declined</h3>
          <p className="mb-2 text-sm text-gray-600">
            <strong>Penyebab:</strong> Kartu expired, insufficient funds, atau fraud detection.
          </p>
          <p className="mb-1 text-sm font-semibold text-gray-700">Solusi:</p>
          <ul className="text-sm text-gray-600">
            <li>1. Cek billing information dan update jika perlu</li>
            <li>2. Contact bank untuk memastikan tidak ada blocks</li>
            <li>3. Tambahkan backup payment method</li>
            <li>4. Gunakan payment method alternatif (PayPal, dll)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Pixel Not Firing</h3>
          <p className="mb-2 text-sm text-gray-600">
            <strong>Penyebab:</strong> Pixel tidak terinstall dengan benar, script error, atau ad blockers.
          </p>
          <p className="mb-1 text-sm font-semibold text-gray-700">Solusi:</p>
          <ul className="text-sm text-gray-600">
            <li>1. Test Pixel menggunakan Facebook Pixel Helper extension</li>
            <li>2. Verifikasi Pixel code terinstall di semua pages</li>
            <li>3. Cek untuk JavaScript errors di browser console</li>
            <li>4. Pastikan Pixel ID benar</li>
            <li>5. Test dari browser tanpa ad blockers</li>
          </ul>
        </div>
      </div>

      <h2>Performance Issues</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Learning Phase Stuck</h3>
          <p className="mb-2 text-sm text-gray-600">
            <strong>Issue:</strong> Ad Set stuck di learning phase lebih dari 7 hari.
          </p>
          <p className="mb-1 text-sm font-semibold text-gray-700">Solusi:</p>
          <ul className="text-sm text-gray-600">
            <li>• Tingkatkan budget untuk mendapatkan 50+ conversions per week</li>
            <li>• Perlebar audience jika terlalu sempit</li>
            <li>• Consolidate multiple Ad Sets menjadi satu dengan CBO</li>
            <li>• Hindari perubahan yang frequent</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Ad Fatigue</h3>
          <p className="mb-2 text-sm text-gray-600">
            <strong>Issue:</strong> Performa menurun setelah beberapa minggu, frequency &gt; 3.
          </p>
          <p className="mb-1 text-sm font-semibold text-gray-700">Solusi:</p>
          <ul className="text-sm text-gray-600">
            <li>• Refresh creative dengan variations baru</li>
            <li>• Perlebar audience untuk reduce frequency</li>
            <li>• Pause campaign sementara lalu restart dengan creative baru</li>
            <li>• Setup frequency cap di Ad Set settings</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Sudden Performance Drop</h3>
          <p className="mb-2 text-sm text-gray-600">
            <strong>Issue:</strong> Performa tiba-tiba drop significantly tanpa perubahan.
          </p>
          <p className="mb-1 text-sm font-semibold text-gray-700">Solusi:</p>
          <ul className="text-sm text-gray-600">
            <li>• Cek untuk external factors (seasonality, competitors, market changes)</li>
            <li>• Verifikasi Pixel masih firing dengan benar</li>
            <li>• Cek landing page speed dan functionality</li>
            <li>• Review recent changes di campaign/website</li>
            <li>• Test creative baru untuk combat ad fatigue</li>
          </ul>
        </div>
      </div>

      <Callout type="warning" title="When to Contact Meta Support">
        <p>
          Jika sudah mencoba semua solusi di atas dan issue masih berlanjut, contact Meta Support
          melalui:
        </p>
        <ul className="mt-2 text-sm">
          <li>• Help Center di Business Manager</li>
          <li>• Live Chat (jika tersedia untuk account Anda)</li>
          <li>• Meta Business Help Community</li>
        </ul>
        <p className="mt-2 text-sm">
          Siapkan detail lengkap: Ad Account ID, Campaign ID, screenshots, dan langkah yang sudah
          dicoba.
        </p>
      </Callout>

      <h2>Preventive Measures</h2>
      <p>
        Untuk menghindari masalah di masa depan:
      </p>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Follow Policies:</strong> Selalu review dan follow Facebook Advertising Policies
        </li>
        <li>
          <strong>Regular Monitoring:</strong> Monitor campaign performance dan account health
          secara berkala
        </li>
        <li>
          <strong>Backup Payment:</strong> Setup backup payment method untuk menghindari billing
          issues
        </li>
        <li>
          <strong>Test Before Scale:</strong> Test dengan budget kecil sebelum scale untuk catch
          issues early
        </li>
        <li>
          <strong>Documentation:</strong> Document semua changes dan issues untuk future reference
        </li>
      </ul>
    </DocLayout>
  )
}
