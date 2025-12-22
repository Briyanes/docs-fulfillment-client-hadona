import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { AlertTriangle, Search, Wrench, CheckCircle2, XCircle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Troubleshooting Umum"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/content-strategy"
      prevTitle="Content Strategy"
      nextHref="/agency/best-practices/faq"
      nextTitle="FAQ"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Panduan troubleshooting ini akan membantu Anda mengidentifikasi dan menyelesaikan masalah
          umum yang mungkin terjadi saat mengelola kampanye iklan Meta.
        </p>
      </div>

      <h2>Pendekatan Troubleshooting yang Sistematis</h2>
      <p>
        Sebelum mencari solusi spesifik, ikuti pendekatan sistematis berikut untuk mengidentifikasi
        masalah:
      </p>
      <ol>
        <li>
          <strong>Identifikasi Gejala</strong> - Apa yang sebenarnya terjadi? Kumpulkan data dan
          screenshots.
        </li>
        <li>
          <strong>Periksa Timeline</strong> - Kapan masalah mulai terjadi? Apakah ada perubahan
          baru-baru ini?
        </li>
        <li>
          <strong>Isolasi Masalah</strong> - Apakah masalah terjadi di semua kampanye atau hanya
          spesifik?
        </li>
        <li>
          <strong>Check Documentation</strong> - Periksa dokumentasi dan error messages
        </li>
        <li>
          <strong>Test Solutions</strong> - Coba solusi satu per satu dan dokumentasikan hasilnya
        </li>
      </ol>

      <h2>Masalah Umum & Solusi</h2>

      <h3>1. Kampanye Tidak Menghabiskan Budget</h3>
      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <strong className="text-yellow-800">Gejala:</strong>
        </div>
        <ul className="ml-7 text-sm text-yellow-700">
          <li>• Budget tidak terpakai atau terpakai sangat sedikit</li>
          <li>• Impressions sangat rendah</li>
          <li>• Status kampanye "Active" tapi tidak ada delivery</li>
        </ul>
      </div>

      <p>
        <strong>Kemungkinan Penyebab & Solusi:</strong>
      </p>
      <ul>
        <li>
          <strong>Audience Terlalu Sempit</strong>
          <ul>
            <li>Perluas audience targeting atau tambah interest/behavior</li>
            <li>Kurangi exclusions yang terlalu ketat</li>
            <li>Test lookalike dengan persentase lebih besar</li>
          </ul>
        </li>
        <li>
          <strong>Bid Terlalu Rendah</strong>
          <ul>
            <li>Naikkan bid cap atau gunakan lowest cost</li>
            <li>Periksa cost cap apakah terlalu rendah</li>
          </ul>
        </li>
        <li>
          <strong>Learning Phase</strong>
          <ul>
            <li>Beri waktu 24-48 jam untuk algoritma belajar</li>
            <li>Pastikan budget cukup untuk learning phase</li>
          </ul>
        </li>
        <li>
          <strong>Ad Disapproved atau Limited</strong>
          <ul>
            <li>Periksa Ad Review Status di Ads Manager</li>
            <li>Perbaiki ad yang rejected dan submit untuk review ulang</li>
          </ul>
        </li>
        <li>
          <strong>Placement Issues</strong>
          <ul>
            <li>Periksa apakah placement yang dipilih tersedia</li>
            <li>Test dengan automatic placements</li>
          </ul>
        </li>
      </ul>

      <h3>2. CPA Terlalu Tinggi</h3>
      <div className="my-6 rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <XCircle className="h-5 w-5 text-red-600" />
          <strong className="text-red-800">Gejala:</strong>
        </div>
        <ul className="ml-7 text-sm text-red-700">
          <li>• Cost per conversion melebihi target</li>
          <li>• ROAS di bawah target</li>
          <li>• Budget habis dengan konversi sedikit</li>
        </ul>
      </div>

      <p>
        <strong>Kemungkinan Penyebab & Solusi:</strong>
      </p>
      <ul>
        <li>
          <strong>Audience Tidak Relevan</strong>
          <ul>
            <li>Review dan refine audience targeting</li>
            <li>Test audience baru yang lebih spesifik</li>
            <li>Gunakan custom audiences dari converters</li>
          </ul>
        </li>
        <li>
          <strong>Kreatif Tidak Menarik</strong>
          <ul>
            <li>Test kreatif baru dengan angle berbeda</li>
            <li>Perbaiki copy dan CTA</li>
            <li>Gunakan format yang lebih engaging (video)</li>
          </ul>
        </li>
        <li>
          <strong>Landing Page Issues</strong>
          <ul>
            <li>Periksa apakah landing page relevan dengan ad</li>
            <li>Optimize landing page untuk conversion</li>
            <li>Test loading speed dan mobile experience</li>
          </ul>
        </li>
        <li>
          <strong>Bidding Strategy</strong>
          <ul>
            <li>Review bidding strategy - mungkin perlu adjust</li>
            <li>Test cost cap atau target cost</li>
            <li>Pastikan bid cukup kompetitif</li>
          </ul>
        </li>
        <li>
          <strong>Competition</strong>
          <ul>
            <li>CPM mungkin tinggi karena kompetisi</li>
            <li>Test waktu dan placement yang berbeda</li>
            <li>Consider niche targeting untuk mengurangi kompetisi</li>
          </ul>
        </li>
      </ul>

      <h3>3. Ad Disapproved atau Rejected</h3>
      <div className="my-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-600" />
          <strong className="text-orange-800">Gejala:</strong>
        </div>
        <ul className="ml-7 text-sm text-orange-700">
          <li>• Ad status menunjukkan "Disapproved" atau "Rejected"</li>
          <li>• Notifikasi dari Meta tentang policy violation</li>
          <li>• Ad tidak bisa diaktifkan</li>
        </ul>
      </div>

      <p>
        <strong>Kemungkinan Penyebab & Solusi:</strong>
      </p>
      <ul>
        <li>
          <strong>Policy Violation</strong>
          <ul>
            <li>Baca reason rejection di Ads Manager</li>
            <li>Perbaiki sesuai dengan policy Meta</li>
            <li>Submit untuk review ulang setelah diperbaiki</li>
          </ul>
        </li>
        <li>
          <strong>Too Much Text in Image</strong>
          <ul>
            <li>Kurangi text overlay pada image (maksimal 20%)</li>
            <li>Gunakan text overlay checker sebelum upload</li>
          </ul>
        </li>
        <li>
          <strong>Misleading Content</strong>
          <ul>
            <li>Pastikan claims di ad dapat dibuktikan</li>
            <li>Hindari before/after yang misleading</li>
            <li>Gunakan disclaimers jika diperlukan</li>
          </ul>
        </li>
        <li>
          <strong>Prohibited Content</strong>
          <ul>
            <li>Review Meta Advertising Policies</li>
            <li>Pastikan produk/layanan tidak prohibited</li>
            <li>Hapus konten yang melanggar policy</li>
          </ul>
        </li>
      </ul>

      <h3>4. Account Restricted atau Disabled</h3>
      <Callout type="error" title="Masalah Serius">
        <p>
          Jika akun Anda di-restrict atau disabled, ini adalah masalah serius yang memerlukan
          tindakan segera.
        </p>
      </Callout>

      <p>
        <strong>Langkah-langkah yang Harus Dilakukan:</strong>
      </p>
      <ol>
        <li>
          <strong>Baca Notifikasi</strong> - Baca email dan notifikasi dari Meta dengan teliti untuk
          memahami alasan
        </li>
        <li>
          <strong>Review Policy Violations</strong> - Identifikasi kampanye atau ads yang melanggar
          policy
        </li>
        <li>
          <strong>Submit Appeal</strong> - Jika Anda yakin tidak melanggar, submit appeal melalui
          Ads Manager
        </li>
        <li>
          <strong>Fix Issues</strong> - Jika memang ada violation, perbaiki semua masalah sebelum
          appeal
        </li>
        <li>
          <strong>Contact Support</strong> - Hubungi Meta Support dan Hadona Support untuk bantuan
        </li>
      </ol>

      <h3>5. Pixel Tidak Tracking dengan Benar</h3>
      <p>
        <strong>Kemungkinan Penyebab & Solusi:</strong>
      </p>
      <ul>
        <li>
          <strong>Pixel Tidak Terinstall</strong>
          <ul>
            <li>Verifikasi pixel installation menggunakan Meta Pixel Helper</li>
            <li>Pastikan pixel code ada di semua halaman yang relevan</li>
            <li>Check untuk duplicate pixels</li>
          </ul>
        </li>
        <li>
          <strong>Events Tidak Terfire</strong>
          <ul>
            <li>Test events menggunakan Events Manager Test Events</li>
            <li>Periksa event code di website</li>
            <li>Pastikan events ter-trigger dengan benar</li>
          </ul>
        </li>
        <li>
          <strong>Attribution Issues</strong>
          <ul>
            <li>Periksa attribution window settings</li>
            <li>Review conversion tracking setup</li>
            <li>Pastikan value tracking setup dengan benar</li>
          </ul>
        </li>
      </ul>

      <h3>6. Performance Drop Tiba-tiba</h3>
      <p>
        <strong>Kemungkinan Penyebab & Solusi:</strong>
      </p>
      <ul>
        <li>
          <strong>Algorithm Changes</strong>
          <ul>
            <li>Meta secara berkala update algoritma</li>
            <li>Beri waktu untuk adaptasi (3-7 hari)</li>
            <li>Jangan terlalu cepat mengubah kampanye</li>
          </ul>
        </li>
        <li>
          <strong>Ad Fatigue</strong>
          <ul>
            <li>Frequency mungkin terlalu tinggi</li>
            <li>Refresh kreatif dengan variasi baru</li>
            <li>Pause ad yang sudah terlalu lama running</li>
          </ul>
        </li>
        <li>
          <strong>Competition Changes</strong>
          <ul>
            <li>Competitor mungkin meningkatkan spend</li>
            <li>CPM mungkin naik karena kompetisi</li>
            <li>Test audience atau placement baru</li>
          </ul>
        </li>
        <li>
          <strong>Seasonal Factors</strong>
          <ul>
            <li>Periksa apakah ada seasonal trends</li>
            <li>Adjust strategy sesuai season</li>
            <li>Plan untuk seasonal fluctuations</li>
          </ul>
        </li>
      </ul>

      <h2>Tools untuk Troubleshooting</h2>
      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Meta Ads Manager</h4>
          <ul className="text-sm text-gray-600">
            <li>• Campaign diagnostics</li>
            <li>• Ad review status</li>
            <li>• Account quality</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Meta Pixel Helper</h4>
          <ul className="text-sm text-gray-600">
            <li>• Verify pixel installation</li>
            <li>• Check events firing</li>
            <li>• Debug tracking issues</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Events Manager</h4>
          <ul className="text-sm text-gray-600">
            <li>• Test events</li>
            <li>• View event data</li>
            <li>• Debug conversions</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h4 className="mb-2 font-semibold">Business Manager</h4>
          <ul className="text-sm text-gray-600">
            <li>• Account status</li>
            <li>• Policy violations</li>
            <li>• Security settings</li>
          </ul>
        </div>
      </div>

      <h2>Best Practices untuk Mencegah Masalah</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Regular Monitoring</strong>
            <p className="text-sm text-gray-600">
              Monitor kampanye secara rutin untuk mendeteksi masalah lebih awal.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Follow Policies</strong>
            <p className="text-sm text-gray-600">
              Selalu ikuti Meta Advertising Policies untuk menghindari rejections.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Test Before Scale</strong>
            <p className="text-sm text-gray-600">
              Test kampanye dengan budget kecil sebelum scale up.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <strong>Document Changes</strong>
            <p className="text-sm text-gray-600">
              Catat semua perubahan untuk membantu troubleshooting di masa depan.
            </p>
          </div>
        </div>
      </div>

      <Callout type="info" title="Butuh Bantuan Lebih Lanjut?">
        <p>
          Jika masalah Anda tidak teratasi dengan panduan ini, jangan ragu untuk menghubungi tim
          support Hadona. Kami siap membantu Anda menyelesaikan masalah kampanye iklan Anda.
        </p>
      </Callout>
    </DocLayout>
  )
}
