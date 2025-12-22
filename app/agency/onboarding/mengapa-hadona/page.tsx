import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Zap, Shield, TrendingUp, HeadphonesIcon, Globe, BarChart3 } from 'lucide-react'

export default function MengapaHadonaPage() {
  return (
    <DocLayout
      title="Mengapa Hadona"
      categoryHref="/agency/onboarding"
      categoryName="Onboarding"
      prevHref="/agency/onboarding/selamat-datang"
      prevTitle="Selamat Datang"
      nextHref="/agency/onboarding/proses-onboarding"
      nextTitle="Proses Onboarding"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Hadona Digital Media hadir untuk memberikan solusi terbaik dalam mengelola kampanye iklan
          digital Anda. Berikut adalah alasan mengapa ribuan agency mempercayai Hadona sebagai
          partner mereka.
        </p>
      </div>

      <h2>Keunggulan Hadona</h2>

      <div className="my-8 space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Zap className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-xl font-semibold">Setup Cepat dan Mudah</h3>
          </div>
          <p className="text-gray-600">
            Proses onboarding yang sederhana dan panduan step-by-step yang jelas memungkinkan Anda
            untuk mulai beriklan dalam waktu singkat. Tidak perlu pengetahuan teknis yang mendalam,
            kami akan memandu Anda di setiap langkah.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-xl font-semibold">Keamanan Terjamin</h3>
          </div>
          <p className="text-gray-600">
            Keamanan data dan akun Anda adalah prioritas utama kami. Dengan sistem permission yang
            granular, 2FA, dan audit log lengkap, Anda memiliki kontrol penuh atas akses dan
            aktivitas di akun Anda.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <TrendingUp className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-xl font-semibold">Optimasi Performa</h3>
          </div>
          <p className="text-gray-600">
            Tools dan fitur yang dirancang khusus untuk membantu Anda mengoptimalkan kampanye iklan.
            Dari A/B testing hingga budget optimization, semua yang Anda butuhkan ada di satu
            platform.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <HeadphonesIcon className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-xl font-semibold">Support 24/7</h3>
          </div>
          <p className="text-gray-600">
            Tim support kami siap membantu Anda kapan saja. Dari pertanyaan teknis hingga
            troubleshooting, kami akan memastikan masalah Anda terselesaikan dengan cepat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Globe className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-xl font-semibold">Integrasi Lengkap</h3>
          </div>
          <p className="text-gray-600">
            Terintegrasi dengan berbagai platform dan tools yang Anda gunakan sehari-hari. Dari Meta
            Ads Manager hingga Google Analytics, semua terhubung dengan mulus.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <BarChart3 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-xl font-semibold">Analytics & Reporting</h3>
          </div>
          <p className="text-gray-600">
            Dashboard analytics yang komprehensif memberikan insight mendalam tentang performa
            kampanye Anda. Buat custom report dan monitor KPI dengan mudah.
          </p>
        </div>
      </div>

      <h2>Statistik Kepercayaan</h2>
      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-hadona-primary">1000+</div>
          <div className="text-sm text-gray-600">Client Agency Aktif</div>
        </div>
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-hadona-primary">99.9%</div>
          <div className="text-sm text-gray-600">Uptime Platform</div>
        </div>
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-hadona-primary">24/7</div>
          <div className="text-sm text-gray-600">Support Available</div>
        </div>
      </div>

      <h2>Fitur Unggulan</h2>
      <ul className="my-4 space-y-2">
        <li>✅ Business Manager setup dan verifikasi otomatis</li>
        <li>✅ Multi-account management dalam satu dashboard</li>
        <li>✅ Advanced audience targeting dan segmentation</li>
        <li>✅ Budget optimization dan bid management</li>
        <li>✅ Real-time campaign monitoring dan alerts</li>
        <li>✅ Comprehensive reporting dan analytics</li>
        <li>✅ Team collaboration dengan role-based access</li>
        <li>✅ API integration untuk workflow automation</li>
      </ul>

      <Callout type="info" title="Ingin Tahu Lebih Lanjut?">
        <p>
          Pelajari lebih detail tentang fitur-fitur Hadona di bagian dokumentasi lainnya. Setiap
          fitur dirancang untuk membantu Anda mencapai tujuan marketing dengan lebih efisien.
        </p>
      </Callout>

      <h2>Testimoni Client</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border-l-4 border-hadona-primary bg-gray-50 p-4">
          <p className="mb-2 italic text-gray-700">
            "Hadona membantu kami menghemat waktu setup hingga 70%. Proses onboarding yang jelas
            dan support yang responsif membuat kami langsung bisa fokus ke kampanye."
          </p>
          <p className="text-sm font-semibold text-gray-900">
            — Marketing Director, Digital Agency Jakarta
          </p>
        </div>
        <div className="rounded-lg border-l-4 border-hadona-primary bg-gray-50 p-4">
          <p className="mb-2 italic text-gray-700">
            "Platform yang sangat user-friendly. Tim kami bisa langsung produktif tanpa training
            yang panjang. ROI kampanye kami meningkat 40% setelah menggunakan Hadona."
          </p>
          <p className="text-sm font-semibold text-gray-900">
            — CEO, Creative Agency Bandung
          </p>
        </div>
      </div>

      <Callout type="success" title="Siap Bergabung?">
        <p>
          Sekarang Anda sudah tahu mengapa Hadona adalah pilihan terbaik. Mari lanjutkan ke proses
          onboarding untuk memulai perjalanan Anda bersama kami.
        </p>
      </Callout>
    </DocLayout>
  )
}

