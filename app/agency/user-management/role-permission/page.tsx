import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Shield, Users, Eye, Settings, Lock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Role & Permission"
      categoryHref="/agency/user-management"
      categoryName="User Management"
      prevHref="/agency/user-management/mengatur-akses"
      prevTitle="Mengatur Akses User"
      nextHref="/agency/user-management/audit-log"
      nextTitle="Audit Log"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Role dan Permission adalah sistem kontrol akses yang menentukan apa yang dapat dilakukan
          oleh setiap user di platform Hadona. Memahami sistem ini penting untuk keamanan dan
          efisiensi manajemen tim.
        </p>
      </div>

      <Callout type="info" title="Penting">
        <p>
          Role dan Permission menentukan tingkat akses user. Pastikan Anda memahami perbedaan setiap
          role sebelum memberikan akses kepada anggota tim.
        </p>
      </Callout>

      <h2>Role yang Tersedia di Platform Hadona</h2>
      <p>
        Platform Hadona memiliki tiga role utama dengan tingkat akses yang berbeda:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border-2 border-red-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-red-100 p-3">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Admin</h3>
              <p className="text-sm text-gray-600">Akses Penuh</p>
            </div>
          </div>
          <p className="mb-4 text-gray-700">
            Role dengan akses tertinggi. Admin memiliki kontrol penuh atas semua fitur dan
            pengaturan platform.
          </p>

          <div className="mb-4">
            <h4 className="mb-2 font-semibold">Permission yang Dimiliki:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengelola semua user (tambah, edit, hapus)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengubah semua settings dan konfigurasi</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Membuat, mengedit, dan menghapus campaign</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengatur budget dan billing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengakses semua laporan dan analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengakses audit log dan monitoring</span>
              </div>
            </div>
          </div>

          <Callout type="warning" title="Peringatan">
            <p>
              Role Admin harus diberikan dengan hati-hati. Hanya berikan kepada orang yang benar-benar
              dapat dipercaya dan memahami tanggung jawabnya.
            </p>
          </Callout>
        </div>

        <div className="rounded-lg border-2 border-blue-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Manager</h3>
              <p className="text-sm text-gray-600">Akses Operasional</p>
            </div>
          </div>
          <p className="mb-4 text-gray-700">
            Role untuk user yang perlu mengelola campaign dan melihat laporan, tetapi tidak perlu
            akses ke pengaturan sistem atau user management.
          </p>

          <div className="mb-4">
            <h4 className="mb-2 font-semibold">Permission yang Dimiliki:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Membuat, mengedit, dan menghapus campaign</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengatur budget campaign (dalam batas tertentu)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengakses semua laporan dan analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengelola audience dan targeting</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span className="text-sm">Tidak dapat menambah/menghapus user</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span className="text-sm">Tidak dapat mengubah settings sistem</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span className="text-sm">Tidak dapat mengakses audit log</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-green-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <Eye className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Viewer</h3>
              <p className="text-sm text-gray-600">Akses Read-Only</p>
            </div>
          </div>
          <p className="mb-4 text-gray-700">
            Role untuk user yang hanya perlu melihat dashboard dan laporan, tanpa kemampuan untuk
            melakukan perubahan apapun.
          </p>

          <div className="mb-4">
            <h4 className="mb-2 font-semibold">Permission yang Dimiliki:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Melihat dashboard dan metrik</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Mengakses laporan dan analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm">Melihat detail campaign</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span className="text-sm">Tidak dapat membuat atau mengedit campaign</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span className="text-sm">Tidak dapat mengubah budget</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span className="text-sm">Tidak dapat mengakses settings</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span className="text-sm">Tidak dapat melihat user management</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Permission Matrix</h2>
      <p>
        Tabel berikut menunjukkan perbandingan permission untuk setiap role:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="px-4 py-3 text-left font-semibold">Permission</th>
              <th className="px-4 py-3 text-center font-semibold">Admin</th>
              <th className="px-4 py-3 text-center font-semibold">Manager</th>
              <th className="px-4 py-3 text-center font-semibold">Viewer</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Melihat Dashboard</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Membuat Campaign</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Mengedit Campaign</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Menghapus Campaign</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Mengatur Budget</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Mengakses Laporan</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Mengelola User</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Mengubah Settings</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Mengakses Audit Log</td>
              <td className="px-4 py-3 text-center">
                <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
              <td className="px-4 py-3 text-center">
                <XCircle className="mx-auto h-5 w-5 text-red-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Memilih Role yang Tepat</h2>
      <p>
        Berikut panduan untuk memilih role yang tepat untuk setiap anggota tim:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">Kapan Memberikan Role Admin?</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Pemilik bisnis atau direktur yang perlu kontrol penuh</li>
            <li>• IT Manager yang bertanggung jawab atas sistem</li>
            <li>• Account Manager senior yang mengelola multiple client</li>
            <li>• Maksimal 2-3 Admin per account untuk keamanan</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">Kapan Memberikan Role Manager?</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Digital Marketing Manager yang mengelola campaign</li>
            <li>• Campaign Manager yang membuat dan mengoptimasi iklan</li>
            <li>• Media Buyer yang mengatur budget dan targeting</li>
            <li>• Siapa pun yang perlu membuat perubahan tetapi tidak perlu akses sistem</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">Kapan Memberikan Role Viewer?</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Client atau stakeholder yang hanya perlu melihat hasil</li>
            <li>• Finance team yang perlu melihat laporan budget</li>
            <li>• Intern atau trainee yang sedang belajar</li>
            <li>• Siapa pun yang hanya perlu melihat data tanpa melakukan perubahan</li>
          </ul>
        </div>
      </div>

      <h2>Best Practices</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Minimal Admin</strong>
            <p className="text-sm text-gray-600">
              Batasi jumlah Admin seminimal mungkin. Setiap Admin adalah risiko keamanan potensial.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Review Role Secara Berkala</strong>
            <p className="text-sm text-gray-600">
              Lakukan review setiap 3-6 bulan untuk memastikan role masih sesuai dengan
              tanggung jawab user.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Dokumentasi</strong>
            <p className="text-sm text-gray-600">
              Catat alasan pemberian role tertentu untuk setiap user. Ini membantu dalam audit dan
              review.
            </p>
          </div>
        </div>
      </div>

      <Callout type="success" title="Tips Keamanan">
        <p>
          Jika ragu tentang role yang tepat, mulailah dengan role yang lebih rendah (Viewer atau
          Manager). Anda selalu dapat meningkatkan role nanti jika diperlukan.
        </p>
      </Callout>
    </DocLayout>
  )
}
