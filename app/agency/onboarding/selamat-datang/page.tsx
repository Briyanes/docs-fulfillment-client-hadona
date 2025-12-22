import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { CheckCircle2, Rocket, Users, BarChart3, Shield } from 'lucide-react'

export default function SelamatDatangPage() {
  return (
    <DocLayout
      title="Selamat Datang"
      categoryHref="/agency/onboarding"
      categoryName="Onboarding"
      nextHref="/agency/onboarding/mengapa-hadona"
      nextTitle="Mengapa Hadona"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Selamat datang di Hadona Digital Media! Kami senang Anda bergabung dengan kami. Panduan
          ini akan membantu Anda memulai perjalanan digital marketing yang sukses bersama Hadona.
        </p>
      </div>

      <h2>Tentang Hadona Digital Media</h2>
      <p>
        Hadona Digital Media adalah platform terdepan untuk mengelola dan mengoptimalkan kampanye
        iklan digital Anda. Kami menyediakan solusi lengkap untuk Client Agency yang ingin
        mengoptimalkan performa iklan Meta (Facebook & Instagram) dengan tools dan dukungan yang
        komprehensif.
      </p>

      <h2>Apa yang Akan Anda Pelajari</h2>
      <p>
        Dalam dokumentasi ini, Anda akan mempelajari cara menggunakan platform Hadona untuk:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Users className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Business Manager</h3>
          </div>
          <p className="text-sm text-gray-600">
            Setup dan kelola Business Manager, verifikasi akun, dan tautkan aset digital Anda
            (Page, Instagram, Ad Account).
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Rocket className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Ads Setup</h3>
          </div>
          <p className="text-sm text-gray-600">
            Buat dan optimalkan kampanye iklan, setup audience, kelola budget, dan monitor
            performa iklan Anda.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <BarChart3 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">User Management</h3>
          </div>
          <p className="text-sm text-gray-600">
            Kelola tim Anda, atur permission dan akses, serta monitor aktivitas pengguna dengan
            audit log.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Best Practices</h3>
          </div>
          <p className="text-sm text-gray-600">
            Pelajari tips keamanan, optimasi performa, troubleshooting, dan best practices untuk
            hasil maksimal.
          </p>
        </div>
      </div>

      <h2>Memulai Perjalanan Anda</h2>
      <p>
        Untuk memulai, kami merekomendasikan Anda mengikuti urutan panduan berikut:
      </p>

      <ol className="my-6 space-y-3">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Onboarding</strong> - Pelajari tentang Hadona dan proses onboarding
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Business Manager</strong> - Setup Business Manager dan verifikasi akun
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Ads Setup</strong> - Konfigurasi Ads Manager dan buat kampanye pertama Anda
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>User Management</strong> - Tambahkan tim dan atur permission
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Best Practices</strong> - Optimalkan performa dengan tips dan trik terbaik
          </div>
        </li>
      </ol>

      <Callout type="info" title="Butuh Bantuan?">
        <p>
          Jika Anda memiliki pertanyaan atau membutuhkan bantuan selama proses onboarding, jangan
          ragu untuk menghubungi tim support kami. Kami siap membantu Anda 24/7.
        </p>
      </Callout>

      <h2>Persyaratan Sistem</h2>
      <p>Sebelum memulai, pastikan Anda memiliki:</p>
      <ul className="my-4 space-y-2">
        <li>Akun Facebook Business yang aktif</li>
        <li>Akses ke Business Manager (atau izin untuk membuatnya)</li>
        <li>Page Facebook dan/atau akun Instagram yang akan digunakan untuk iklan</li>
        <li>Email bisnis yang valid untuk verifikasi</li>
        <li>Dokumen verifikasi bisnis (jika diperlukan)</li>
      </ul>

      <Callout type="success" title="Siap Memulai?">
        <p>
          Setelah membaca panduan ini, lanjutkan ke halaman berikutnya untuk mempelajari lebih
          lanjut tentang mengapa Hadona adalah pilihan terbaik untuk bisnis Anda.
        </p>
      </Callout>
    </DocLayout>
  )
}

