import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Trash2, AlertTriangle, Shield, UserX, CheckCircle2, XCircle, Lock } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Menghapus User"
      categoryHref="/agency/user-management"
      categoryName="User Management"
      prevHref="/agency/user-management/monitoring"
      prevTitle="Monitoring Aktivitas"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Menghapus user dari platform Hadona adalah tindakan permanen yang harus dilakukan dengan
          hati-hati. Halaman ini akan memandu Anda melalui proses menghapus user dengan benar dan
          aman.
        </p>
      </div>

      <Callout type="warning" title="Peringatan Penting">
        <p>
          Menghapus user adalah tindakan permanen. Pastikan Anda benar-benar ingin menghapus user
          sebelum melanjutkan. Pertimbangkan untuk menonaktifkan user terlebih dahulu jika Anda
          hanya ingin membatasi akses sementara.
        </p>
      </Callout>

      <h2>Kapan Menghapus User?</h2>
      <p>
        Berikut adalah situasi di mana menghapus user adalah tindakan yang tepat:
      </p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong>Karyawan yang Sudah Tidak Bekerja</strong>
            <p className="text-sm text-gray-600">
              Karyawan yang sudah resign atau dipecat dan tidak akan lagi mengakses platform.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong>User yang Tidak Aktif</strong>
            <p className="text-sm text-gray-600">
              User yang sudah tidak aktif dalam waktu lama (misalnya lebih dari 6 bulan) dan
              dipastikan tidak akan digunakan lagi.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong>Akun Duplikat atau Salah</strong>
            <p className="text-sm text-gray-600">
              Akun yang dibuat secara tidak sengaja atau duplikat dari akun yang sudah ada.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
          <div>
            <strong>Permintaan Khusus</strong>
            <p className="text-sm text-gray-600">
              User yang secara eksplisit meminta untuk dihapus atau sesuai dengan kebijakan
              perusahaan.
            </p>
          </div>
        </div>
      </div>

      <h2>Alternatif Sebelum Menghapus</h2>
      <p>
        Sebelum menghapus user, pertimbangkan alternatif berikut yang mungkin lebih sesuai:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2">
              <Lock className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Menonaktifkan User (Disable)</h3>
          </div>
          <p className="mb-2 text-sm text-gray-700">
            Jika Anda hanya ingin membatasi akses sementara, pertimbangkan untuk menonaktifkan user
            daripada menghapusnya. User yang dinonaktifkan:
          </p>
          <ul className="ml-4 space-y-1 text-sm text-gray-700">
            <li>• Tidak dapat login ke platform</li>
            <li>• Masih terdaftar dalam sistem</li>
            <li>• Dapat diaktifkan kembali kapan saja</li>
            <li>• Data dan history tetap tersimpan</li>
          </ul>
          <Callout type="info" title="Kapan Menggunakan">
            <p>
              Gunakan disable jika user mungkin akan kembali (cuti panjang, project sementara
              selesai, dll) atau jika Anda ingin mempertahankan history aktivitas user.
            </p>
          </Callout>
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-yellow-100 p-2">
              <Shield className="h-5 w-5 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold">Mengubah Role ke Viewer</h3>
          </div>
          <p className="mb-2 text-sm text-gray-700">
            Jika user masih perlu melihat data tetapi tidak perlu melakukan perubahan, ubah role
            mereka menjadi Viewer. Ini memberikan akses read-only tanpa perlu menghapus user.
          </p>
        </div>
      </div>

      <h2>Persiapan Sebelum Menghapus User</h2>
      <p>
        Sebelum menghapus user, lakukan persiapan berikut:
      </p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <strong>Verifikasi Identitas User</strong>
          </div>
          <p className="text-sm text-gray-600">
            Pastikan Anda menghapus user yang benar. Periksa nama, email, dan role user sebelum
            menghapus.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <strong>Periksa Dependencies</strong>
          </div>
          <p className="text-sm text-gray-600">
            Periksa apakah user memiliki campaign aktif, task yang belum selesai, atau tanggung
            jawab lain yang perlu dialihkan sebelum dihapus.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <strong>Backup Data (Jika Diperlukan)</strong>
          </div>
          <p className="text-sm text-gray-600">
            Jika perlu, ekspor data atau history aktivitas user sebelum menghapus. Setelah dihapus,
            beberapa data mungkin tidak dapat diakses lagi.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <strong>Alihkan Tanggung Jawab</strong>
          </div>
          <p className="text-sm text-gray-600">
            Jika user memiliki campaign atau task aktif, alihkan ke user lain sebelum menghapus.
            Pastikan tidak ada campaign yang menjadi "orphan" tanpa owner.
          </p>
        </div>
      </div>

      <h2>Cara Menghapus User</h2>
      <p>
        Ikuti langkah-langkah berikut untuk menghapus user dengan benar:
      </p>

      <StepGuide
        steps={[
          {
            title: 'Akses Menu User Management',
            content: (
              <div>
                <p className="mb-2">
                  Login sebagai Admin dan navigasi ke menu <strong>User Management</strong>. Pastikan
                  Anda memiliki akses Admin untuk menghapus user.
                </p>
                <Callout type="warning" title="Penting">
                  <p>
                    Hanya Admin yang dapat menghapus user. Anda tidak dapat menghapus akun sendiri.
                    Jika perlu menghapus akun sendiri, minta Admin lain untuk melakukannya.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Pilih User yang Akan Dihapus',
            content: (
              <div>
                <p className="mb-2">
                  Di halaman User Management, cari dan pilih user yang ingin dihapus. Klik pada user
                  untuk membuka detail atau menu dropdown.
                </p>
                <p className="text-sm text-gray-600">
                  Pastikan Anda memilih user yang benar. Periksa nama dan email dengan teliti.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik Opsi "Delete" atau "Hapus User"',
            content: (
              <div>
                <p className="mb-2">
                  Klik tombol <strong>"Delete"</strong>, <strong>"Remove User"</strong>, atau{' '}
                  <strong>"Hapus User"</strong>. Tombol ini biasanya berwarna merah dan berada di
                  menu dropdown atau di bagian detail user.
                </p>
              </div>
            ),
          },
          {
            title: 'Konfirmasi Penghapusan',
            content: (
              <div>
                <p className="mb-2">
                  Sistem akan menampilkan dialog konfirmasi. Dialog ini biasanya menampilkan:
                </p>
                <ul className="ml-4 space-y-1 text-sm text-gray-600">
                  <li>• Nama dan email user yang akan dihapus</li>
                  <li>• Peringatan bahwa tindakan ini permanen</li>
                  <li>• Dampak penghapusan (campaign yang akan terpengaruh, dll)</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">
                  Baca dengan teliti dan pastikan Anda benar-benar ingin menghapus user ini.
                </p>
              </div>
            ),
          },
          {
            title: 'Masukkan Konfirmasi Tambahan',
            content: (
              <div>
                <p className="mb-2">
                  Beberapa sistem memerlukan konfirmasi tambahan untuk keamanan, seperti:
                </p>
                <ul className="ml-4 space-y-1 text-sm text-gray-600">
                  <li>• Mengetik nama user atau email untuk konfirmasi</li>
                  <li>• Memasukkan password Admin</li>
                  <li>• Memilih alasan penghapusan</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">
                  Ikuti instruksi yang ditampilkan di layar.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik "Confirm Delete" atau "Hapus"',
            content: (
              <div>
                <p className="mb-2">
                  Setelah semua konfirmasi selesai, klik tombol <strong>"Confirm Delete"</strong> atau{' '}
                  <strong>"Hapus"</strong> untuk menyelesaikan proses penghapusan.
                </p>
                <Callout type="error" title="Peringatan">
                  <p>
                    Setelah dikonfirmasi, penghapusan tidak dapat dibatalkan. Pastikan Anda sudah
                    yakin sebelum mengklik tombol konfirmasi.
                  </p>
                </Callout>
              </div>
            ),
          },
        ]}
      />

      <h2>Dampak Penghapusan User</h2>
      <p>
        Setelah user dihapus, berikut adalah dampak yang akan terjadi:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-red-200 bg-red-50 p-5">
          <h3 className="mb-3 font-semibold text-red-900">
            Data yang Akan Dihapus
          </h3>
          <ul className="ml-4 space-y-1 text-sm text-red-800">
            <li>• Akun user dan semua informasi pribadi</li>
            <li>• Akses dan permission user</li>
            <li>• Session dan token autentikasi</li>
            <li>• Notifikasi dan preferensi user</li>
          </ul>
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-5">
          <h3 className="mb-3 font-semibold text-yellow-900">
            Data yang Tetap Tersimpan
          </h3>
          <ul className="ml-4 space-y-1 text-sm text-yellow-800">
            <li>• History aktivitas di Audit Log (tetap mencatat nama user)</li>
            <li>• Campaign yang dibuat user (akan menjadi "unassigned" atau dialihkan)</li>
            <li>• Laporan dan analytics yang sudah di-generate</li>
            <li>• Data transaksi dan billing (untuk compliance)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
          <h3 className="mb-3 font-semibold text-blue-900">
            Tindakan yang Perlu Dilakukan Setelah Penghapusan
          </h3>
          <ul className="ml-4 space-y-1 text-sm text-blue-800">
            <li>• Alihkan ownership campaign ke user lain (jika ada)</li>
            <li>• Update dokumentasi internal tentang perubahan tim</li>
            <li>• Informasikan tim tentang penghapusan user</li>
            <li>• Periksa apakah ada task atau reminder yang perlu diupdate</li>
          </ul>
        </div>
      </div>

      <h2>Best Practices</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Pertimbangkan Disable Terlebih Dahulu</strong>
            <p className="text-sm text-gray-600">
              Sebelum menghapus, pertimbangkan untuk menonaktifkan user terlebih dahulu selama
              periode tertentu (misalnya 30 hari). Jika tidak ada masalah, baru hapus secara
              permanen.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Dokumentasi Penghapusan</strong>
            <p className="text-sm text-gray-600">
              Catat alasan penghapusan user dan tanggal penghapusan. Ini penting untuk audit dan
              compliance.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Komunikasi dengan Tim</strong>
            <p className="text-sm text-gray-600">
              Beri tahu tim yang relevan sebelum menghapus user, terutama jika user tersebut
              memiliki tanggung jawab yang perlu dialihkan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Review Dampak Sebelum Menghapus</strong>
            <p className="text-sm text-gray-600">
              Periksa semua campaign, task, dan tanggung jawab user sebelum menghapus. Pastikan
              semuanya sudah dialihkan atau ditangani dengan benar.
            </p>
          </div>
        </div>
      </div>

      <h2>Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">Tidak bisa menghapus user (tombol tidak muncul)</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Pastikan Anda memiliki role Admin</li>
            <li>• Pastikan user yang akan dihapus bukan super admin</li>
            <li>• Refresh halaman dan coba lagi</li>
            <li>• Hubungi support jika masalah berlanjut</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">Error saat menghapus user</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Periksa apakah user memiliki campaign aktif yang perlu dialihkan terlebih dahulu</li>
            <li>• Periksa apakah user memiliki task atau reminder aktif</li>
            <li>• Coba nonaktifkan user terlebih dahulu, kemudian hapus setelah beberapa saat</li>
            <li>• Hubungi support dengan detail error message</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="mb-2 font-semibold">User masih muncul setelah dihapus</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600">
            <li>• Refresh halaman dan tunggu beberapa saat</li>
            <li>• Periksa apakah penghapusan benar-benar berhasil (cek konfirmasi)</li>
            <li>• Clear cache browser</li>
            <li>• Hubungi support jika user masih muncul setelah 24 jam</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="Tips">
        <p>
          Sebelum menghapus user, pastikan untuk mengekspor data penting jika diperlukan. Setelah
          dihapus, beberapa data mungkin tidak dapat diakses lagi.
        </p>
      </Callout>
    </DocLayout>
  )
}
