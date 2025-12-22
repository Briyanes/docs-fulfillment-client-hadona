import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { FileText, Users, Shield, Globe, CheckCircle2, AlertCircle } from 'lucide-react'

export default function PersiapanPage() {
  return (
    <DocLayout
      title="Persiapan"
      categoryHref="/agency/onboarding"
      categoryName="Onboarding"
      prevHref="/agency/onboarding/proses-onboarding"
      prevTitle="Proses Onboarding"
      nextHref="/agency/onboarding/kickoff-meeting"
      nextTitle="Kickoff Meeting"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Persiapan yang baik adalah kunci sukses onboarding yang cepat dan lancar. Halaman ini
          akan membantu Anda menyiapkan semua dokumen, akses, dan informasi yang diperlukan sebelum
          memulai proses setup.
        </p>
      </div>

      <Callout type="info" title="Tips Persiapan">
        <p>
          Siapkan semua item di bawah ini sebelum kickoff meeting. Ini akan mempercepat proses
          setup hingga 50% dan memastikan tidak ada delay karena menunggu dokumen atau akses.
        </p>
      </Callout>

      <h2>Dokumen yang Diperlukan</h2>
      <p>
        Pastikan Anda memiliki dokumen-dokumen berikut dalam format digital (PDF atau JPG) dan
        mudah diakses:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <FileText className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Dokumen Verifikasi Bisnis</h3>
          </div>
          <ul className="ml-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>SIUP (Surat Izin Usaha Perdagangan)</strong> atau dokumen legal bisnis
                lainnya
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>NPWP (Nomor Pokok Wajib Pajak)</strong> perusahaan
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>Akta Pendirian</strong> atau dokumen legalitas perusahaan
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>KTP Direktur/Pemilik</strong> yang tertera di dokumen legal
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Globe className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Informasi Digital Assets</h3>
          </div>
          <ul className="ml-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>URL Page Facebook</strong> yang akan digunakan untuk iklan
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>Username Instagram</strong> yang akan ditautkan
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>Ad Account ID</strong> (jika sudah memiliki)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>Website URL</strong> (jika akan menggunakan pixel tracking)
              </span>
            </li>
          </ul>
        </div>
      </div>

      <h2>Akses yang Diperlukan</h2>
      <p>
        Pastikan Anda memiliki akses penuh atau dapat memberikan akses untuk hal-hal berikut:
      </p>

      <StepGuide
        steps={[
          {
            title: 'Akses Business Manager',
            content: (
              <div>
                <p className="mb-2">
                  Anda perlu memiliki akses sebagai <strong>Admin</strong> ke Business Manager yang
                  akan digunakan. Jika belum memiliki Business Manager, kami akan membantu membuatkannya.
                </p>
                <Callout type="warning" title="Penting">
                  <p>
                    Pastikan akun Facebook yang digunakan untuk Business Manager adalah akun bisnis
                    resmi, bukan akun personal. Jika perlu, buat akun Facebook bisnis terlebih dahulu.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Akses Page Facebook',
            content: (
              <div>
                <p className="mb-2">
                  Pastikan Anda memiliki akses sebagai <strong>Admin</strong> atau{' '}
                  <strong>Editor</strong> ke Page Facebook yang akan digunakan untuk iklan. Page
                  harus sudah aktif dan terverifikasi.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Cara cek:</strong> Buka Page Settings → Page Roles, pastikan email Anda
                  terdaftar dengan role Admin atau Editor.
                </p>
              </div>
            ),
          },
          {
            title: 'Akses Instagram Business',
            content: (
              <div>
                <p className="mb-2">
                  Jika akan menggunakan Instagram Ads, pastikan akun Instagram sudah dikonversi ke
                  <strong> Instagram Business</strong> atau <strong>Creator Account</strong> dan
                  terhubung dengan Page Facebook.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Catatan:</strong> Akun Instagram personal tidak dapat digunakan untuk
                  iklan berbayar.
                </p>
              </div>
            ),
          },
          {
            title: 'Akses Ad Account',
            content: (
              <div>
                <p className="mb-2">
                  Jika sudah memiliki Ad Account, pastikan Anda memiliki akses sebagai{' '}
                  <strong>Admin</strong> atau <strong>Advertiser</strong>. Jika belum memiliki, kami
                  akan membantu membuatkannya.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Info yang diperlukan:</strong> Ad Account ID dan nama Ad Account (jika
                  sudah ada).
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Informasi Tim</h2>
      <p>
        Siapkan daftar anggota tim yang akan diberikan akses ke platform Hadona. Informasi yang
        diperlukan:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-white p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Users className="h-5 w-5 text-hadona-primary" />
          </div>
          <h3 className="text-lg font-semibold">Data Tim yang Diperlukan</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 text-left font-semibold">Informasi</th>
                <th className="px-3 py-2 text-left font-semibold">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-3 py-2 font-medium">Nama Lengkap</td>
                <td className="px-3 py-2">Nama sesuai KTP atau identitas resmi</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-3 py-2 font-medium">Email</td>
                <td className="px-3 py-2">Email bisnis yang aktif (bukan personal email)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-3 py-2 font-medium">Role/Position</td>
                <td className="px-3 py-2">Jabatan di perusahaan (untuk menentukan permission)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-3 py-2 font-medium">Level Akses</td>
                <td className="px-3 py-2">
                  Admin, Manager, atau Viewer (akan dibahas di kickoff meeting)
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">No. Telepon</td>
                <td className="px-3 py-2">Nomor aktif untuk komunikasi (opsional)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Informasi Bisnis</h2>
      <p>Informasi berikut akan digunakan untuk setup dan verifikasi:</p>

      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Nama Perusahaan Resmi</strong>
            <p className="text-sm text-gray-600">
              Sesuai dengan dokumen legal (SIUP/Akta)
            </p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Alamat Lengkap</strong>
            <p className="text-sm text-gray-600">
              Alamat kantor sesuai dokumen legal
            </p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Nomor Telepon Bisnis</strong>
            <p className="text-sm text-gray-600">
              Nomor yang dapat dihubungi untuk verifikasi
            </p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Website Perusahaan</strong>
            <p className="text-sm text-gray-600">
              URL website resmi (jika ada)
            </p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Kategori Bisnis</strong>
            <p className="text-sm text-gray-600">
              Kategori industri atau sektor bisnis
            </p>
          </div>
        </li>
      </ul>

      <h2>Checklist Persiapan</h2>
      <p>
        Gunakan checklist ini untuk memastikan semua sudah siap sebelum kickoff meeting:
      </p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-hadona-primary focus:ring-hadona-primary"
          />
          <div>
            <div className="font-semibold">Dokumen Legal Siap</div>
            <div className="text-sm text-gray-600">
              SIUP, NPWP, Akta, dan KTP sudah dalam format digital
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-hadona-primary focus:ring-hadona-primary"
          />
          <div>
            <div className="font-semibold">Akses Business Manager</div>
            <div className="text-sm text-gray-600">
              Memiliki akses Admin ke BM atau siap membuat yang baru
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-hadona-primary focus:ring-hadona-primary"
          />
          <div>
            <div className="font-semibold">Page & Instagram Siap</div>
            <div className="text-sm text-gray-600">
              Page Facebook aktif dan Instagram sudah Business account
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-hadona-primary focus:ring-hadona-primary"
          />
          <div>
            <div className="font-semibold">Daftar Tim Lengkap</div>
            <div className="text-sm text-gray-600">
              Semua data anggota tim sudah dikumpulkan
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-hadona-primary focus:ring-hadona-primary"
          />
          <div>
            <div className="font-semibold">Informasi Bisnis Lengkap</div>
            <div className="text-sm text-gray-600">
              Semua informasi perusahaan sudah disiapkan
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-hadona-primary focus:ring-hadona-primary"
          />
          <div>
            <div className="font-semibold">Jadwal Kickoff Meeting</div>
            <div className="text-sm text-gray-600">
              Sudah mengkonfirmasi jadwal dengan tim Hadona
            </div>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Penting: Verifikasi Email">
        <p>
          Pastikan semua email yang akan digunakan untuk akses sudah aktif dan dapat diakses. Email
          bisnis lebih disarankan daripada email personal untuk keamanan dan profesionalitas.
        </p>
      </Callout>

      <h2>Tips Tambahan</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Backup Dokumen</strong>
            <p className="text-sm text-gray-600">
              Simpan salinan digital semua dokumen di tempat yang mudah diakses. Format PDF lebih
              disarankan untuk dokumen legal.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Koordinasi dengan Tim</strong>
            <p className="text-sm text-gray-600">
              Pastikan semua anggota tim yang akan diberikan akses sudah mengetahui dan setuju.
              Koordinasi sebelumnya akan mempercepat proses.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Siapkan Pertanyaan</strong>
            <p className="text-sm text-gray-600">
              Tuliskan pertanyaan atau concern yang ingin dibahas di kickoff meeting. Ini akan
              membuat meeting lebih produktif.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Siap untuk Kickoff Meeting?">
        <p>
          Setelah semua persiapan selesai, Anda siap untuk kickoff meeting! Di meeting tersebut,
          tim Hadona akan memandu Anda melalui proses setup dan menjawab semua pertanyaan Anda.
        </p>
      </Callout>
    </DocLayout>
  )
}

