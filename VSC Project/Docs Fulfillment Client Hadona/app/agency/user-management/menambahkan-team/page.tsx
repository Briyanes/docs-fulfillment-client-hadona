import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Users, Mail, Shield, CheckCircle2, AlertCircle, UserPlus } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Menambahkan Team Member"
      categoryHref="/agency/user-management"
      categoryName="User Management"
      nextHref="/agency/user-management/mengatur-akses"
      nextTitle="Mengatur Akses User"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Menambahkan anggota tim ke platform Hadona memungkinkan kolaborasi yang lebih baik dan
          distribusi tugas yang efisien. Halaman ini akan memandu Anda melalui proses menambahkan
          team member dengan benar.
        </p>
      </div>

      <Callout type="info" title="Penting">
        <p>
          Hanya Admin yang dapat menambahkan team member baru. Pastikan Anda memiliki akses Admin
          sebelum memulai proses ini.
        </p>
      </Callout>

      <h2>Persiapan Sebelum Menambahkan Team Member</h2>
      <p>
        Sebelum menambahkan anggota tim, pastikan Anda memiliki informasi berikut:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Mail className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Informasi yang Diperlukan</h3>
          </div>
          <ul className="ml-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>Email Aktif</strong> - Email bisnis yang aktif dan dapat diakses
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>Nama Lengkap</strong> - Nama sesuai identitas resmi
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>Role/Position</strong> - Jabatan di perusahaan
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <strong>Level Akses</strong> - Admin, Manager, atau Viewer
              </span>
            </li>
          </ul>
        </div>
      </div>

      <h2>Cara Menambahkan Team Member</h2>
      <p>
        Ikuti langkah-langkah berikut untuk menambahkan team member baru ke platform Hadona:
      </p>

      <StepGuide
        steps={[
          {
            title: 'Akses Menu User Management',
            content: (
              <div>
                <p className="mb-2">
                  Login ke platform Hadona dan navigasi ke menu <strong>User Management</strong> di
                  sidebar. Pastikan Anda memiliki akses Admin untuk mengakses menu ini.
                </p>
                <Callout type="warning" title="Catatan">
                  <p>
                    Jika menu User Management tidak terlihat, berarti akun Anda tidak memiliki
                    permission Admin. Hubungi Admin utama untuk memberikan akses.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Klik Tombol "Tambah User"',
            content: (
              <div>
                <p className="mb-2">
                  Di halaman User Management, klik tombol <strong>"Tambah User"</strong> atau{' '}
                  <strong>"Add Team Member"</strong> yang biasanya berada di pojok kanan atas.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tombol ini akan membuka form untuk menambahkan user baru.
                </p>
              </div>
            ),
          },
          {
            title: 'Isi Form Informasi User',
            content: (
              <div>
                <p className="mb-3">Isi semua field yang diperlukan dalam form:</p>
                <div className="my-4 space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-hadona-primary" />
                    <div>
                      <strong>Email (Wajib)</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Masukkan email bisnis yang aktif. Email ini akan digunakan untuk login dan
                        menerima notifikasi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-hadona-primary" />
                    <div>
                      <strong>Nama Lengkap (Wajib)</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Nama lengkap sesuai identitas resmi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-hadona-primary" />
                    <div>
                      <strong>Role/Position (Wajib)</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Pilih role yang sesuai: Admin, Manager, atau Viewer.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                    <div>
                      <strong>Nomor Telepon (Opsional)</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Nomor telepon untuk komunikasi darurat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: 'Pilih Level Akses',
            content: (
              <div>
                <p className="mb-3">
                  Tentukan level akses yang akan diberikan kepada user baru. Pilih salah satu:
                </p>
                <div className="my-4 space-y-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-500" />
                      <strong>Admin</strong>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Akses penuh termasuk menambah/menghapus user, mengubah settings, dan akses ke
                      semua fitur.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <strong>Manager</strong>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Dapat mengelola campaign, melihat laporan, dan mengatur budget. Tidak dapat
                      menambah/menghapus user.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="mb-2 flex items-center gap-2">
                      <UserPlus className="h-5 w-5 text-green-500" />
                      <strong>Viewer</strong>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hanya dapat melihat dashboard dan laporan. Tidak dapat melakukan perubahan
                      apapun.
                    </p>
                  </div>
                </div>
                <Callout type="warning" title="Penting">
                  <p>
                    Berhati-hati saat memberikan akses Admin. Pastikan user yang diberikan akses
                    Admin benar-benar dapat dipercaya dan memahami tanggung jawabnya.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Review dan Submit',
            content: (
              <div>
                <p className="mb-2">
                  Sebelum submit, pastikan semua informasi sudah benar. Setelah submit, email
                  undangan akan dikirim ke alamat email yang dimasukkan.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  User baru akan menerima email dengan link untuk setup password dan aktivasi akun.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Setelah User Ditambahkan</h2>
      <p>Setelah user berhasil ditambahkan, berikut yang akan terjadi:</p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Mail className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Email Undangan Terkirim</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              User baru akan menerima email undangan dengan instruksi untuk setup akun.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <CheckCircle2 className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Status Pending</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              User akan muncul di daftar dengan status "Pending" sampai mereka mengaktifkan akun.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="rounded-lg bg-hadona-primary/10 p-2">
            <Shield className="h-5 w-5 text-hadona-primary" />
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Akses Sesuai Role</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Setelah aktivasi, user akan memiliki akses sesuai dengan role yang ditentukan.
            </p>
          </div>
        </div>
      </div>

      <h2>Best Practices</h2>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Gunakan Email Bisnis</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Selalu gunakan email bisnis resmi, bukan email personal. Ini meningkatkan keamanan dan
              profesionalitas.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Prinsip Least Privilege</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Berikan akses minimal yang diperlukan. Jika user hanya perlu melihat laporan, berikan
              role Viewer, bukan Manager atau Admin.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Verifikasi Sebelum Menambahkan</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pastikan user yang akan ditambahkan sudah mengetahui dan setuju untuk bergabung. Ini
              menghindari email undangan yang tidak diinginkan.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Dokumentasi Akses</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Simpan catatan tentang siapa yang memiliki akses apa. Ini membantu dalam audit dan
              manajemen keamanan.
            </p>
          </div>
        </div>
      </div>

      <h2>Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Email undangan tidak terkirim</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Periksa apakah email yang dimasukkan sudah benar</li>
            <li>• Cek folder spam/junk di email penerima</li>
            <li>• Pastikan email tidak terblokir oleh firewall perusahaan</li>
            <li>• Hubungi support jika masalah berlanjut</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">User tidak bisa login setelah aktivasi</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Pastikan user sudah mengklik link aktivasi di email</li>
            <li>• Cek apakah password sudah di-set dengan benar</li>
            <li>• Pastikan email yang digunakan untuk login sama dengan email undangan</li>
            <li>• Coba reset password jika diperlukan</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Tidak bisa menambahkan user (tombol tidak muncul)</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• Pastikan akun Anda memiliki role Admin</li>
            <li>• Refresh halaman dan coba lagi</li>
            <li>• Hubungi Admin utama untuk memberikan akses</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="Tips">
        <p>
          Setelah menambahkan user, sebaiknya beri tahu mereka secara langsung (via chat/email) bahwa
          mereka akan menerima email undangan. Ini memastikan mereka tidak melewatkan email
          penting.
        </p>
      </Callout>
    </DocLayout>
  )
}
