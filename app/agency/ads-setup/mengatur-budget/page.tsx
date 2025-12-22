import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { DollarSign, TrendingUp, Calendar, AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Mengatur Budget"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/membuat-campaign"
      prevTitle="Membuat Campaign"
      nextHref="/agency/ads-setup/setup-audience"
      nextTitle="Setup Audience"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Pengaturan budget yang tepat adalah kunci sukses kampanye iklan. Panduan ini akan membantu
          Anda memahami berbagai jenis budget di Meta Ads dan cara mengaturnya dengan efektif.
        </p>
      </div>

      <h2>Jenis Budget di Meta Ads</h2>
      <p>
        Meta menyediakan dua jenis budget utama yang dapat Anda gunakan:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Calendar className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Daily Budget</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600">
            Budget yang dihabiskan per hari. Meta akan mencoba menghabiskan budget ini setiap hari
            selama campaign berjalan.
          </p>
          <ul className="text-sm text-gray-600">
            <li>• Lebih fleksibel untuk campaign jangka panjang</li>
            <li>• Cocok untuk testing dan optimasi</li>
            <li>• Meta dapat overspend hingga 25% per hari</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <DollarSign className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Lifetime Budget</h3>
          </div>
          <p className="mb-2 text-sm text-gray-600">
            Total budget yang dihabiskan selama seluruh durasi campaign. Meta akan mendistribusikan
            budget ini secara otomatis.
          </p>
          <ul className="text-sm text-gray-600">
            <li>• Cocok untuk campaign dengan durasi terbatas</li>
            <li>• Kontrol total spending yang lebih ketat</li>
            <li>• Perlu set schedule (start & end date)</li>
          </ul>
        </div>
      </div>

      <Callout type="info" title="Daily Budget vs Lifetime Budget">
        <p>
          Untuk campaign yang berjalan terus-menerus, gunakan Daily Budget. Untuk campaign dengan
          durasi terbatas (misalnya event atau promo), gunakan Lifetime Budget dengan schedule yang
          jelas.
        </p>
      </Callout>

      <h2>Campaign Budget Optimization (CBO)</h2>
      <p>
        Campaign Budget Optimization memungkinkan Meta mengalokasikan budget secara otomatis di
        semua Ad Sets dalam satu Campaign berdasarkan performa. Fitur ini sangat membantu untuk:
      </p>

      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Optimasi Otomatis:</strong> Meta akan memberikan lebih banyak budget ke Ad Set
            yang performa lebih baik
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Efisiensi Budget:</strong> Budget digunakan lebih efisien untuk hasil terbaik
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Menghemat Waktu:</strong> Tidak perlu manual adjust budget per Ad Set
          </div>
        </li>
      </ul>

      <Callout type="warning" title="Kapan Tidak Menggunakan CBO">
        <p>
          Jangan gunakan CBO jika Anda ingin kontrol penuh atas budget per Ad Set, atau jika Ad Sets
          memiliki tujuan yang sangat berbeda. Untuk testing awal, mungkin lebih baik nonaktifkan
          CBO terlebih dahulu.
        </p>
      </Callout>

      <h2>Langkah-langkah Mengatur Budget</h2>
      <StepGuide
        steps={[
          {
            title: 'Tentukan Total Budget',
            content: (
              <div>
                <p>
                  Tentukan total budget yang ingin Anda alokasikan untuk campaign. Pertimbangkan:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Durasi campaign (berapa lama akan berjalan)</li>
                  <li>Tujuan campaign (awareness, conversions, dll)</li>
                  <li>Ukuran audience target</li>
                  <li>Competitive landscape di niche Anda</li>
                </ul>
                <p className="mt-2">
                  Untuk testing awal, mulai dengan budget kecil ($10-50/hari) lalu scale up jika
                  performa bagus.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Jenis Budget',
            content: (
              <div>
                <p>
                  Di Ad Set level, pilih jenis budget:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Daily Budget:</strong> Jika campaign berjalan terus-menerus tanpa
                    end date
                  </li>
                  <li>
                    <strong>Lifetime Budget:</strong> Jika campaign memiliki durasi terbatas
                    (perlu set start & end date)
                  </li>
                </ul>
                <p className="mt-2">
                  Untuk pemula, kami merekomendasikan Daily Budget karena lebih fleksibel.
                </p>
              </div>
            ),
          },
          {
            title: 'Set Budget Amount',
            content: (
              <div>
                <p>
                  Masukkan jumlah budget. Untuk Daily Budget, ini adalah jumlah per hari. Untuk
                  Lifetime Budget, ini adalah total untuk seluruh durasi.
                </p>
                <Callout type="info" title="Minimum Budget">
                  <p>
                    Minimum budget adalah $1/hari untuk Daily Budget atau $1 total untuk Lifetime
                    Budget. Namun, untuk hasil yang berarti, disarankan minimal $5-10/hari.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Aktifkan CBO (Opsional)',
            content: (
              <div>
                <p>
                  Jika menggunakan Campaign Budget Optimization:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Set budget di Campaign level (bukan Ad Set level)</li>
                  <li>Aktifkan toggle "Campaign Budget Optimization"</li>
                  <li>Meta akan mengalokasikan budget secara otomatis ke Ad Sets</li>
                </ul>
                <p className="mt-2">
                  Jika tidak menggunakan CBO, set budget di setiap Ad Set secara individual.
                </p>
              </div>
            ),
            optional: true,
          },
          {
            title: 'Set Schedule (untuk Lifetime Budget)',
            content: (
              <div>
                <p>
                  Jika menggunakan Lifetime Budget, set schedule:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Start Date:</strong> Kapan campaign mulai berjalan
                  </li>
                  <li>
                    <strong>End Date:</strong> Kapan campaign berakhir
                  </li>
                  <li>
                    <strong>Ad Scheduling:</strong> Pilih jam/jari tertentu jika ingin iklan hanya
                    berjalan di waktu tertentu (opsional)
                  </li>
                </ul>
              </div>
            ),
            optional: true,
          },
          {
            title: 'Review Budget Distribution',
            content: (
              <div>
                <p>
                  Sebelum publish, review:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>Total budget sudah sesuai dengan rencana</li>
                  <li>Budget per Ad Set (jika tidak menggunakan CBO) sudah proporsional</li>
                  <li>Schedule sudah benar (untuk Lifetime Budget)</li>
                  <li>Budget cukup untuk mendapatkan data yang meaningful (minimal 3-7 hari)</li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <h2>Strategi Budget untuk Berbagai Tujuan</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Testing Phase</h3>
          <p className="text-sm text-gray-600">
            Mulai dengan $10-20/hari per Ad Set. Test selama 3-7 hari untuk mengumpulkan data
            yang cukup. Setelah ada winner, scale up budget 20-50% per hari.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Scaling Phase</h3>
          <p className="text-sm text-gray-600">
            Jika performa bagus, scale up secara bertahap (20-50% per hari) untuk menghindari
            learning phase reset. Jangan double budget sekaligus.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Maintenance Phase</h3>
          <p className="text-sm text-gray-600">
            Setelah mencapai target, maintain budget yang stabil. Lakukan optimasi creative dan
            audience secara berkala tanpa mengubah budget terlalu drastis.
          </p>
        </div>
      </div>

      <h2>Tips Mengatur Budget</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Mulai Kecil, Scale Up:</strong> Mulai dengan budget kecil untuk testing, lalu
          scale up jika performa bagus. Lebih baik scale up bertahap daripada langsung besar.
        </li>
        <li>
          <strong>Jangan Sering Ubah Budget:</strong> Mengubah budget terlalu sering dapat
          mengganggu learning phase algoritma. Tunggu minimal 3-7 hari sebelum adjust.
        </li>
        <li>
          <strong>Gunakan CBO untuk Multiple Ad Sets:</strong> Jika memiliki 3+ Ad Sets dengan
          tujuan sama, gunakan CBO untuk optimasi otomatis.
        </li>
        <li>
          <strong>Monitor Daily Spend:</strong> Meta dapat overspend hingga 25% per hari untuk Daily
          Budget. Pastikan Anda aware akan hal ini.
        </li>
        <li>
          <strong>Set Account Spend Limit:</strong> Untuk keamanan, set account-level spend limit di
          Account Settings sebagai safety net.
        </li>
      </ul>

      <Callout type="warning" title="Budget Overspend">
        <p>
          Meta dapat menghabiskan hingga 25% lebih dari Daily Budget per hari untuk mengoptimalkan
          delivery. Namun, total spending dalam satu bulan tidak akan melebihi (Daily Budget × 30.4).
          Ini adalah fitur normal dari sistem Meta.
        </p>
      </Callout>

      <h2>Masalah Umum</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Budget Tidak Terpakai</h3>
          <p className="text-sm text-gray-600">
            Jika budget tidak terpakai penuh, kemungkinan audience terlalu sempit, bid terlalu
            rendah, atau creative tidak engaging. Coba perlebar audience atau tingkatkan creative
            quality.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">Budget Habis Terlalu Cepat</h3>
          <p className="text-sm text-gray-600">
            Jika budget habis terlalu cepat, mungkin bid terlalu tinggi atau audience terlalu luas.
            Coba turunkan bid atau sempitkan audience targeting.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <h3 className="mb-2 font-semibold">CBO Tidak Optimal</h3>
          <p className="text-sm text-gray-600">
            Jika CBO tidak memberikan hasil optimal, pastikan semua Ad Sets memiliki objective yang
            sama dan sudah ada cukup data (minimal 3-7 hari). Jika masih tidak optimal, coba
            nonaktifkan CBO dan atur manual.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
