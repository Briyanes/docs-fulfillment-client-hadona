import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Building2, Shield, Users, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Membuat Business Manager"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      nextHref="/agency/business-manager/verifikasi"
      nextTitle="Verifikasi Business Manager"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Business Manager adalah pusat kontrol untuk mengelola semua aset bisnis Anda di Meta
          (Facebook & Instagram). Panduan ini akan membantu Anda membuat Business Manager baru
          dengan langkah-langkah yang jelas.
        </p>
      </div>

      <h2>Apa itu Business Manager?</h2>
      <p>
        Business Manager adalah tool gratis dari Meta yang memungkinkan Anda mengelola halaman
        Facebook, akun Instagram, dan akun iklan dalam satu tempat. Dengan Business Manager, Anda
        dapat:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Building2 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Kelola Aset</h3>
          </div>
          <p className="text-sm text-gray-600">
            Kelola semua halaman, akun Instagram, dan akun iklan dalam satu dashboard terpusat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Users className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Kelola Tim</h3>
          </div>
          <p className="text-sm text-gray-600">
            Tambahkan anggota tim dan atur permission yang berbeda untuk setiap orang.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Keamanan</h3>
          </div>
          <p className="text-sm text-gray-600">
            Kontrol akses yang lebih baik dan keamanan yang lebih kuat untuk aset bisnis Anda.
          </p>
        </div>
      </div>

      <h2>Persyaratan</h2>
      <p>Sebelum membuat Business Manager, pastikan Anda memiliki:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Akun Facebook pribadi yang aktif</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Email bisnis yang valid (disarankan menggunakan email perusahaan)</div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>Informasi bisnis dasar (nama bisnis, alamat, nomor telepon)</div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          Setiap akun Facebook hanya dapat membuat maksimal 2 Business Manager. Pastikan Anda
          menggunakan email bisnis yang valid dan dapat diakses untuk verifikasi.
        </p>
      </Callout>

      <h2>Langkah-langkah Membuat Business Manager</h2>
      <StepGuide
        steps={[
          {
            title: 'Akses Business Manager',
            content: (
              <div>
                <p>
                  Kunjungi{' '}
                  <a
                    href="https://business.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hadona-primary hover:underline"
                  >
                    business.facebook.com
                  </a>{' '}
                  dan login menggunakan akun Facebook pribadi Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Klik "Create Account"',
            content: (
              <div>
                <p>
                  Jika ini adalah Business Manager pertama Anda, klik tombol{' '}
                  <strong>"Create Account"</strong> atau{' '}
                  <strong>"Buat Akun"</strong> yang muncul di halaman utama.
                </p>
                <p className="mt-2">
                  Jika Anda sudah memiliki Business Manager, klik menu di pojok kiri atas, lalu
                  pilih <strong>"Create Business"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Isi Informasi Bisnis',
            content: (
              <div>
                <p>Isi formulir dengan informasi berikut:</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Nama Bisnis:</strong> Masukkan nama bisnis atau perusahaan Anda
                  </li>
                  <li>
                    <strong>Nama Anda:</strong> Masukkan nama lengkap Anda (sebagai admin)
                  </li>
                  <li>
                    <strong>Email Bisnis:</strong> Gunakan email bisnis yang valid dan dapat
                    diakses
                  </li>
                </ul>
                <Callout type="info" title="Tips">
                  <p>
                    Gunakan nama bisnis yang jelas dan profesional. Nama ini akan terlihat oleh
                    semua orang yang memiliki akses ke Business Manager Anda.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Verifikasi Email',
            content: (
              <div>
                <p>
                  Setelah mengisi formulir, Meta akan mengirimkan email verifikasi ke alamat email
                  yang Anda masukkan. Buka email tersebut dan klik link verifikasi.
                </p>
                <p className="mt-2">
                  Jika email tidak muncul, periksa folder spam atau junk mail Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Selesai',
            content: (
              <div>
                <p>
                  Setelah email diverifikasi, Business Manager Anda akan aktif. Anda akan diarahkan
                  ke dashboard Business Manager.
                </p>
                <p className="mt-2">
                  Selamat! Business Manager Anda telah berhasil dibuat. Langkah selanjutnya adalah
                  melakukan verifikasi Business Manager untuk meningkatkan keamanan dan
                  kredibilitas akun Anda.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Setelah Business Manager Dibuat</h2>
      <p>Setelah Business Manager berhasil dibuat, Anda dapat:</p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Menambahkan Aset:</strong> Tautkan halaman Facebook, akun Instagram, dan akun
            iklan ke Business Manager
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Menambahkan Anggota Tim:</strong> Undang anggota tim dan atur permission mereka
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Mengatur Keamanan:</strong> Aktifkan Two-Factor Authentication dan pengaturan
            keamanan lainnya
          </div>
        </li>
      </ol>

      <Callout type="success" title="Langkah Selanjutnya">
        <p>
          Setelah Business Manager dibuat, langkah penting berikutnya adalah melakukan verifikasi
          Business Manager. Verifikasi akan meningkatkan keamanan akun dan memberikan akses ke
          fitur-fitur premium Meta.
        </p>
      </Callout>

      <h2>Tips & Best Practices</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Gunakan Email Bisnis:</strong> Hindari menggunakan email pribadi untuk Business
          Manager. Gunakan email perusahaan yang dapat diakses oleh tim.
        </li>
        <li>
          <strong>Nama yang Jelas:</strong> Gunakan nama bisnis yang jelas dan mudah dikenali untuk
          memudahkan identifikasi.
        </li>
        <li>
          <strong>Simpan Informasi Login:</strong> Pastikan Anda menyimpan informasi login dengan
          aman dan dapat diakses oleh admin yang berwenang.
        </li>
        <li>
          <strong>Verifikasi Segera:</strong> Lakukan verifikasi Business Manager segera setelah
          pembuatan untuk menghindari pembatasan fitur.
        </li>
      </ul>
    </DocLayout>
  )
}
