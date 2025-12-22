import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { HelpCircle, ChevronDown } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="FAQ"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/troubleshooting-umum"
      prevTitle="Troubleshooting Umum"
      nextHref="/agency/best-practices/kontak-support"
      nextTitle="Kontak Support"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Berikut adalah pertanyaan yang sering diajukan tentang penggunaan platform Hadona dan
          pengelolaan kampanye iklan Meta. Jika pertanyaan Anda tidak ada di sini, silakan hubungi
          tim support kami.
        </p>
      </div>

      <h2>Pertanyaan Umum tentang Hadona</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Apa itu Hadona Digital Media?
          </h3>
          <p className="text-gray-700">
            Hadona Digital Media adalah platform terdepan untuk mengelola dan mengoptimalkan
            kampanye iklan digital Anda. Kami menyediakan solusi lengkap untuk Client Agency yang
            ingin mengoptimalkan performa iklan Meta (Facebook & Instagram) dengan tools dan
            dukungan yang komprehensif.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Bagaimana cara memulai dengan Hadona?
          </h3>
          <p className="text-gray-700">
            Untuk memulai, ikuti proses onboarding yang telah kami sediakan. Mulai dari halaman{' '}
            <strong>Selamat Datang</strong> di bagian Onboarding, lalu ikuti panduan setup Business
            Manager, verifikasi akun, dan setup kampanye pertama Anda. Tim support kami juga siap
            membantu Anda selama proses onboarding.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Apakah Hadona menyediakan support?
          </h3>
          <p className="text-gray-700">
            Ya, Hadona menyediakan support 24/7 untuk semua klien. Anda dapat menghubungi tim
            support melalui berbagai channel yang tersedia. Lihat halaman{' '}
            <strong>Kontak Support</strong> untuk informasi lengkap tentang cara menghubungi kami.
          </p>
        </div>
      </div>

      <h2>Pertanyaan tentang Business Manager</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Apakah saya perlu membuat Business Manager baru?
          </h3>
          <p className="text-gray-700">
            Jika Anda sudah memiliki Business Manager yang aktif dan terverifikasi, Anda tidak perlu
            membuat yang baru. Namun, jika Anda baru memulai atau Business Manager Anda memiliki
            masalah, membuat yang baru bisa menjadi solusi. Lihat panduan{' '}
            <strong>Membuat Business Manager</strong> untuk detail lengkap.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Berapa lama proses verifikasi Business Manager?
          </h3>
          <p className="text-gray-700">
            Proses verifikasi biasanya memakan waktu 1-3 hari kerja, tergantung pada kelengkapan
            dokumen yang Anda submit. Pastikan semua dokumen yang diperlukan sudah lengkap dan valid
            untuk mempercepat proses. Jika lebih dari 5 hari kerja, hubungi Meta Support atau tim
            Hadona.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Bagaimana cara menambahkan team member ke Business Manager?
          </h3>
          <p className="text-gray-700">
            Anda dapat menambahkan team member melalui Business Settings → People. Berikan permission
            yang sesuai dengan role mereka. Lihat panduan{' '}
            <strong>Menambahkan Team</strong> dan <strong>Mengatur Akses</strong> untuk detail
            lengkap tentang user management.
          </p>
        </div>
      </div>

      <h2>Pertanyaan tentang Kampanye Iklan</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Berapa budget minimum untuk kampanye iklan?
          </h3>
          <p className="text-gray-700">
            Tidak ada budget minimum absolut, namun untuk hasil optimal, kami merekomendasikan
            minimum $20-30 per hari per ad set untuk kampanye traffic/engagement, dan 5x target CPA
            untuk kampanye conversion. Budget yang terlalu kecil dapat membuat algoritma kesulitan
            belajar. Lihat panduan <strong>Budget Management</strong> untuk detail lebih lanjut.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Berapa lama waktu yang dibutuhkan untuk melihat hasil kampanye?
          </h3>
          <p className="text-gray-700">
            Algoritma Meta memerlukan learning phase selama 3-7 hari untuk belajar dan mengoptimalkan
            kampanye. Setelah learning phase, Anda akan mulai melihat performa yang lebih stabil.
            Namun, hasil dapat bervariasi tergantung pada budget, audience, dan tujuan kampanye.
            Bersabarlah selama learning phase dan jangan terlalu sering mengubah kampanye.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Kapan saya harus mengubah atau menghentikan kampanye?
          </h3>
          <p className="text-gray-700">
            Tunggu setidaknya 7 hari setelah learning phase selesai sebelum mengevaluasi kampanye.
            Hentikan atau ubah kampanye jika: (1) CPA/ROAS tidak mencapai target setelah learning
            phase, (2) Budget habis terlalu cepat tanpa konversi, (3) Ad fatigue terdeteksi
            (frequency tinggi, engagement turun). Lihat panduan <strong>Optimasi Performance</strong>{' '}
            untuk detail lebih lanjut.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Apa perbedaan antara Campaign Budget dan Ad Set Budget?
          </h3>
          <p className="text-gray-700">
            <strong>Campaign Budget</strong> adalah budget yang dialokasikan di level campaign dan
            dibagi otomatis ke semua ad sets. Cocok untuk multiple ad sets dengan tujuan sama.
            <strong>Ad Set Budget</strong> adalah budget yang ditetapkan untuk setiap ad set
            secara individual, memberikan kontrol lebih granular. Pilih sesuai kebutuhan strategi
            Anda.
          </p>
        </div>
      </div>

      <h2>Pertanyaan tentang Audience & Targeting</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Apa itu Lookalike Audience dan kapan menggunakannya?
          </h3>
          <p className="text-gray-700">
            Lookalike Audience adalah audience yang dibuat oleh Meta berdasarkan source audience
            (seperti customer list atau website visitors) yang mirip dengan mereka. Gunakan
            lookalike untuk menemukan audience baru yang mirip dengan customers terbaik Anda.
            Rekomendasi: gunakan source audience berkualitas tinggi (minimal 1000+ people) dan test
            berbagai persentase (1%, 2-3%, 4-5%).
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Seberapa besar ukuran audience yang ideal?
          </h3>
          <p className="text-gray-700">
            Ukuran audience ideal tergantung pada tujuan dan budget. Untuk kampanye conversion,
            audience 1-5 juta biasanya optimal. Untuk testing, audience lebih kecil (500K-1M) bisa
            bekerja. Hindari audience terlalu kecil (&lt;100K) karena dapat membatasi delivery, atau
            terlalu besar (&gt;50M) karena kurang spesifik. Test berbagai ukuran untuk menemukan
            yang terbaik untuk bisnis Anda.
          </p>
        </div>
      </div>

      <h2>Pertanyaan tentang Kreatif & Konten</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Format kreatif apa yang paling efektif?
          </h3>
          <p className="text-gray-700">
            Video ads umumnya paling efektif untuk engagement dan konversi, terutama format vertical
            (9:16) untuk Stories dan Reels. Namun, format terbaik tergantung pada tujuan, audience,
            dan produk Anda. Test berbagai format (video, image, carousel) untuk menemukan yang
            perform terbaik. Lihat panduan <strong>Content Strategy</strong> untuk detail lebih
            lanjut.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Berapa banyak text yang boleh ada di image ads?
          </h3>
          <p className="text-gray-700">
            Meta merekomendasikan text overlay maksimal 20% dari total area gambar. Text yang terlalu
            banyak dapat mengurangi reach dan bahkan menyebabkan ad rejection. Gunakan text overlay
            checker sebelum upload, atau lebih baik lagi, minimalkan text di image dan letakkan
            informasi penting di primary text atau headline.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Seberapa sering saya harus refresh kreatif?
          </h3>
          <p className="text-gray-700">
            Refresh kreatif ketika Anda melihat tanda-tanda ad fatigue: frequency tinggi (&gt;3-4),
            CTR menurun, engagement rate turun, atau CPA naik. Umumnya, refresh kreatif setiap 2-4
            minggu untuk kampanye yang berjalan terus-menerus. Namun, jika performa masih baik, tidak
            perlu refresh terlalu sering. Test variasi baru secara berkala untuk menemukan winner
            baru.
          </p>
        </div>
      </div>

      <h2>Pertanyaan tentang Tracking & Analytics</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Bagaimana cara memastikan pixel tracking dengan benar?
          </h3>
          <p className="text-gray-700">
            Gunakan Meta Pixel Helper browser extension untuk memverifikasi pixel installation. Test
            events menggunakan Events Manager Test Events. Pastikan pixel code ada di semua halaman
            yang relevan, dan events ter-fire dengan benar saat user melakukan action. Jika Anda
            menggunakan Hadona untuk Client Whitelist, lihat panduan Pixel Setup di bagian Whitelist.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Apa itu ROAS dan bagaimana menghitungnya?
          </h3>
          <p className="text-gray-700">
            ROAS (Return on Ad Spend) adalah metrik yang mengukur revenue yang dihasilkan untuk
            setiap dollar yang dihabiskan untuk iklan. Formula: ROAS = Revenue / Ad Spend. ROAS 3.0
            berarti setiap $1 yang dihabiskan menghasilkan $3 revenue. Target ROAS yang baik
            tergantung pada margin profit bisnis Anda, namun umumnya ROAS 2.0-4.0 dianggap baik
            untuk e-commerce.
          </p>
        </div>
      </div>

      <h2>Pertanyaan tentang Masalah & Troubleshooting</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Kampanye saya tidak menghabiskan budget, kenapa?
          </h3>
          <p className="text-gray-700">
            Beberapa kemungkinan penyebab: (1) Audience terlalu sempit - perluas targeting, (2) Bid
            terlalu rendah - naikkan bid atau gunakan lowest cost, (3) Masih dalam learning phase -
            beri waktu 24-48 jam, (4) Ad rejected atau limited - periksa ad review status, (5)
            Placement issues - test dengan automatic placements. Lihat panduan{' '}
            <strong>Troubleshooting Umum</strong> untuk solusi lengkap.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <HelpCircle className="h-5 w-5 text-hadona-primary" />
            Ad saya di-reject, apa yang harus dilakukan?
          </h3>
          <p className="text-gray-700">
            Baca reason rejection di Ads Manager dengan teliti. Perbaiki masalah sesuai dengan
            policy Meta (misalnya: kurangi text overlay, perbaiki misleading content, hapus
            prohibited content). Setelah diperbaiki, submit untuk review ulang. Jika Anda yakin ad
            tidak melanggar policy, Anda dapat submit appeal. Lihat panduan{' '}
            <strong>Troubleshooting Umum</strong> untuk detail lebih lanjut.
          </p>
        </div>
      </div>

      <Callout type="info" title="Pertanyaan Lain?">
        <p>
          Jika pertanyaan Anda tidak terjawab di FAQ ini, jangan ragu untuk menghubungi tim support
          Hadona. Kami siap membantu Anda 24/7 melalui berbagai channel yang tersedia.
        </p>
      </Callout>
    </DocLayout>
  )
}
