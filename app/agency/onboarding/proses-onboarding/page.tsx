import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ProsesOnboardingPage() {
  return (
    <DocLayout
      title="Proses Onboarding"
      categoryHref="/agency/onboarding"
      categoryName="Onboarding"
      prevHref="/agency/onboarding/mengapa-hadona"
      prevTitle="Mengapa Hadona"
      nextHref="/agency/onboarding/persiapan"
      nextTitle="Persiapan"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Proses onboarding Hadona dirancang untuk memudahkan Anda memulai dengan cepat dan efisien.
          Panduan ini akan menjelaskan langkah-langkah yang perlu Anda lakukan dari awal hingga
          siap menjalankan kampanye pertama.
        </p>
      </div>

      <h2>Gambaran Umum Proses</h2>
      <p>
        Proses onboarding Hadona terdiri dari beberapa tahap yang dirancang untuk memastikan Anda
        memiliki semua yang diperlukan untuk sukses. Rata-rata, proses ini memakan waktu 3-5 hari
        kerja, tergantung pada kompleksitas setup dan responsivitas tim Anda.
      </p>

      <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-start gap-3">
          <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">
              Estimasi Waktu
            </h3>
            <p className="text-sm text-gray-600">
              Total waktu yang dibutuhkan: <strong>3-5 hari kerja</strong>
              <br />
              Waktu aktif yang diperlukan dari Anda: <strong>2-3 jam</strong>
            </p>
          </div>
        </div>
      </div>

      <StepGuide
        title="Tahapan Onboarding"
        steps={[
          {
            title: 'Registrasi dan Aktivasi Akun',
            content: (
              <div>
                <p className="mb-3">
                  Setelah mendaftar, Anda akan menerima email aktivasi. Klik link aktivasi dan
                  lengkapi profil akun Anda. Pastikan informasi yang Anda berikan akurat karena
                  akan digunakan untuk verifikasi.
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Verifikasi email Anda</li>
                  <li>Lengkapi profil perusahaan</li>
                  <li>Upload logo perusahaan (opsional)</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Kickoff Meeting',
            content: (
              <div>
                <p className="mb-3">
                  Tim Hadona akan menjadwalkan kickoff meeting untuk memperkenalkan platform,
                  menjawab pertanyaan Anda, dan menyusun rencana setup. Meeting ini biasanya
                  berlangsung selama 30-45 menit.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Yang akan dibahas:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Overview platform dan fitur utama</li>
                  <li>Struktur akun dan organisasi</li>
                  <li>Timeline dan milestone</li>
                  <li>Q&A session</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Persiapan Dokumen dan Akses',
            content: (
              <div>
                <p className="mb-3">
                  Siapkan semua dokumen dan akses yang diperlukan sebelum memulai setup. Ini akan
                  mempercepat proses verifikasi dan konfigurasi.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Dokumen yang perlu disiapkan:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Dokumen verifikasi bisnis (SIUP, NPWP, atau sejenisnya)</li>
                  <li>Akses ke Business Manager Facebook</li>
                  <li>Informasi Page dan Instagram yang akan digunakan</li>
                  <li>Daftar email tim yang akan diberikan akses</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Setup Business Manager',
            content: (
              <div>
                <p className="mb-3">
                  Tim Hadona akan membantu Anda setup Business Manager, termasuk verifikasi akun
                  dan penautan aset digital (Page, Instagram, Ad Account). Proses ini memerlukan
                  akses dari Anda untuk beberapa langkah.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Langkah-langkah:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Membuat atau menghubungkan Business Manager</li>
                  <li>Verifikasi Business Manager</li>
                  <li>Menautkan Page Facebook</li>
                  <li>Menautkan akun Instagram</li>
                  <li>Menautkan Ad Account</li>
                  <li>Setup permission dan akses</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Konfigurasi Ads Manager',
            content: (
              <div>
                <p className="mb-3">
                  Setelah Business Manager siap, langkah berikutnya adalah konfigurasi Ads Manager.
                  Ini termasuk setup pixel, audience, dan struktur kampanye dasar.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Konfigurasi yang dilakukan:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Setup Meta Pixel (jika diperlukan)</li>
                  <li>Konfigurasi audience dasar</li>
                  <li>Setup conversion tracking</li>
                  <li>Struktur kampanye dan ad set</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'User Management Setup',
            content: (
              <div>
                <p className="mb-3">
                  Tambahkan anggota tim Anda ke platform dan atur permission sesuai dengan role
                  mereka. Ini memastikan setiap orang memiliki akses yang tepat.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Aktivitas:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Menambahkan user ke platform</li>
                  <li>Mengatur role dan permission</li>
                  <li>Setup 2FA untuk keamanan</li>
                  <li>Memberikan akses ke Business Manager</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Training dan Dokumentasi',
            content: (
              <div>
                <p className="mb-3">
                  Tim Hadona akan memberikan training singkat tentang penggunaan platform dan
                  memberikan akses ke dokumentasi lengkap. Anda juga akan mendapatkan best practices
                  untuk optimasi kampanye.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Materi training:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Navigasi platform</li>
                  <li>Membuat kampanye pertama</li>
                  <li>Monitoring dan reporting</li>
                  <li>Best practices dan tips</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Go Live dan Support',
            content: (
              <div>
                <p className="mb-3">
                  Setelah semua setup selesai, Anda siap untuk menjalankan kampanye pertama! Tim
                  Hadona akan terus memberikan support selama periode onboarding dan seterusnya.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Dukungan yang tersedia:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Support 24/7 via email dan chat</li>
                  <li>Dokumentasi lengkap dan FAQ</li>
                  <li>Community forum</li>
                  <li>Regular check-in dari account manager</li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <h2>Checklist Onboarding</h2>
      <p>Gunakan checklist ini untuk memastikan Anda tidak melewatkan langkah penting:</p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <div className="font-semibold">Akun Aktif</div>
            <div className="text-sm text-gray-600">
              Email terverifikasi dan profil lengkap
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <div className="font-semibold">Kickoff Meeting Selesai</div>
            <div className="text-sm text-gray-600">
              Meeting dengan tim Hadona telah dilakukan
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <div className="font-semibold">Dokumen Siap</div>
            <div className="text-sm text-gray-600">
              Semua dokumen verifikasi telah disiapkan
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <div className="font-semibold">Business Manager Terverifikasi</div>
            <div className="text-sm text-gray-600">
              BM sudah diverifikasi dan aset tertaut
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <div className="font-semibold">Ads Manager Terkonfigurasi</div>
            <div className="text-sm text-gray-600">
              Pixel, audience, dan tracking sudah setup
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <div className="font-semibold">Tim Terdaftar</div>
            <div className="text-sm text-gray-600">
              Semua anggota tim sudah ditambahkan dengan permission yang tepat
            </div>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Penting: Responsivitas">
        <p>
          Kecepatan proses onboarding sangat bergantung pada responsivitas tim Anda. Pastikan untuk
          merespons email dan request akses dengan cepat agar proses dapat berjalan lancar.
        </p>
      </Callout>

      <h2>Timeline Rinci</h2>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left font-semibold">Hari</th>
              <th className="px-4 py-3 text-left font-semibold">Aktivitas</th>
              <th className="px-4 py-3 text-left font-semibold">Pihak Terlibat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3">Hari 1</td>
              <td className="px-4 py-3">Registrasi, aktivasi, dan kickoff meeting</td>
              <td className="px-4 py-3">Client + Hadona</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3">Hari 2</td>
              <td className="px-4 py-3">Persiapan dokumen dan setup Business Manager</td>
              <td className="px-4 py-3">Client + Hadona</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3">Hari 3</td>
              <td className="px-4 py-3">Verifikasi dan konfigurasi Ads Manager</td>
              <td className="px-4 py-3">Hadona (dengan akses Client)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3">Hari 4</td>
              <td className="px-4 py-3">User management dan training</td>
              <td className="px-4 py-3">Client + Hadona</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Hari 5</td>
              <td className="px-4 py-3">Finalisasi dan go live</td>
              <td className="px-4 py-3">Client + Hadona</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info" title="Fleksibilitas Timeline">
        <p>
          Timeline di atas adalah estimasi standar. Proses dapat dipercepat atau diperpanjang
          tergantung pada kompleksitas kebutuhan dan ketersediaan tim. Tim Hadona akan
          menyesuaikan dengan kebutuhan Anda.
        </p>
      </Callout>

      <h2>Pertanyaan Umum</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Berapa lama proses onboarding?</h3>
          <p className="text-sm text-gray-600">
            Rata-rata 3-5 hari kerja, tergantung kompleksitas dan responsivitas tim.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Apakah saya perlu pengetahuan teknis?</h3>
          <p className="text-sm text-gray-600">
            Tidak perlu. Tim Hadona akan memandu Anda di setiap langkah. Namun, pemahaman dasar
            tentang Facebook Ads akan membantu.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Bagaimana jika saya sudah punya Business Manager?</h3>
          <p className="text-sm text-gray-600">
            Tidak masalah! Kami akan menghubungkan Business Manager yang sudah ada ke platform
            Hadona.
          </p>
        </div>
      </div>

      <Callout type="success" title="Siap untuk Persiapan?">
        <p>
          Sekarang Anda sudah memahami proses onboarding. Mari lanjutkan ke halaman berikutnya untuk
          mempelajari apa saja yang perlu Anda persiapkan sebelum memulai.
        </p>
      </Callout>
    </DocLayout>
  )
}

