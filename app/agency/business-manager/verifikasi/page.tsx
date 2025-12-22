import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Shield, FileText, Clock, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Verifikasi Business Manager"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      prevHref="/agency/business-manager/membuat-business-manager"
      prevTitle="Membuat Business Manager"
      nextHref="/agency/business-manager/menautkan-page"
      nextTitle="Menautkan Facebook Page"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Verifikasi Business Manager adalah proses penting untuk membuktikan bahwa bisnis Anda
          sah dan meningkatkan keamanan akun. Business Manager yang terverifikasi memberikan akses
          ke fitur-fitur premium dan mengurangi risiko pembatasan akun.
        </p>
      </div>

      <h2>Mengapa Perlu Verifikasi?</h2>
      <p>Verifikasi Business Manager memberikan beberapa manfaat penting:</p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Shield className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Keamanan</h3>
          </div>
          <p className="text-sm text-gray-600">
            Meningkatkan keamanan akun dan mengurangi risiko pembatasan atau penangguhan akun oleh
            Meta.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <CheckCircle2 className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Kredibilitas</h3>
          </div>
          <p className="text-sm text-gray-600">
            Meningkatkan kredibilitas bisnis Anda di mata Meta dan mengurangi risiko iklan ditolak.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <FileText className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Fitur Premium</h3>
          </div>
          <p className="text-sm text-gray-600">
            Mengakses fitur-fitur premium seperti advanced targeting dan reporting yang lebih
            detail.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Clock className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Prioritas Support</h3>
          </div>
          <p className="text-sm text-gray-600">
            Mendapatkan prioritas dalam proses review dan dukungan dari tim Meta.
          </p>
        </div>
      </div>

      <h2>Dokumen yang Diperlukan</h2>
      <p>Untuk verifikasi, Anda perlu menyiapkan dokumen berikut:</p>
      <ul className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Dokumen Legal Bisnis:</strong> SIUP, NPWP, atau dokumen legal lainnya yang
            membuktikan keberadaan bisnis Anda
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Bukti Alamat:</strong> Dokumen yang menunjukkan alamat bisnis (tagihan listrik,
            sewa, atau dokumen legal)
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Identitas Admin:</strong> KTP atau identitas resmi admin Business Manager
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Informasi Kontak:</strong> Nomor telepon bisnis yang dapat dihubungi
          </div>
        </li>
      </ul>

      <Callout type="warning" title="Penting">
        <p>
          Pastikan semua dokumen yang Anda upload jelas, lengkap, dan masih berlaku. Dokumen yang
          tidak jelas atau tidak lengkap dapat menyebabkan proses verifikasi ditolak.
        </p>
      </Callout>

      <h2>Langkah-langkah Verifikasi</h2>
      <StepGuide
        steps={[
          {
            title: 'Akses Business Settings',
            content: (
              <div>
                <p>
                  Login ke Business Manager Anda, lalu klik menu{' '}
                  <strong>"Business Settings"</strong> di pojok kiri atas.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Security Center',
            content: (
              <div>
                <p>
                  Di menu sebelah kiri, pilih <strong>"Security Center"</strong> atau{' '}
                  <strong>"Pusat Keamanan"</strong>.
                </p>
              </div>
            ),
          },
          {
            title: 'Mulai Proses Verifikasi',
            content: (
              <div>
                <p>
                  Klik tombol <strong>"Start Verification"</strong> atau{' '}
                  <strong>"Mulai Verifikasi"</strong>. Anda akan diminta untuk memilih negara dan
                  jenis bisnis Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Isi Informasi Bisnis',
            content: (
              <div>
                <p>Isi semua informasi yang diminta dengan akurat:</p>
                <ul className="mt-2 space-y-1">
                  <li>Nama bisnis (harus sesuai dengan dokumen legal)</li>
                  <li>Alamat bisnis lengkap</li>
                  <li>Nomor telepon bisnis</li>
                  <li>Website bisnis (jika ada)</li>
                  <li>Kategori bisnis</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Upload Dokumen',
            content: (
              <div>
                <p>
                  Upload dokumen yang diminta. Pastikan dokumen dalam format JPG, PNG, atau PDF,
                  dan ukuran file tidak melebihi 5MB.
                </p>
                <Callout type="info" title="Tips Upload Dokumen">
                  <ul className="space-y-1">
                    <li>Pastikan foto dokumen jelas dan tidak blur</li>
                    <li>Semua teks harus dapat dibaca dengan jelas</li>
                    <li>Dokumen harus masih berlaku (tidak expired)</li>
                    <li>Gunakan format PDF jika memungkinkan untuk kualitas terbaik</li>
                  </ul>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Verifikasi Nomor Telepon',
            content: (
              <div>
                <p>
                  Meta akan mengirimkan kode verifikasi ke nomor telepon bisnis yang Anda masukkan.
                  Masukkan kode tersebut untuk melanjutkan proses.
                </p>
                <p className="mt-2">
                  Jika kode tidak diterima, pastikan nomor telepon aktif dan dapat menerima SMS.
                </p>
              </div>
            ),
          },
          {
            title: 'Tunggu Review',
            content: (
              <div>
                <p>
                  Setelah semua dokumen diupload, Meta akan melakukan review. Proses ini biasanya
                  memakan waktu 1-3 hari kerja, namun bisa lebih lama tergantung volume permintaan.
                </p>
                <p className="mt-2">
                  Anda akan menerima notifikasi email ketika status verifikasi berubah.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Status Verifikasi</h2>
      <p>Setelah mengirimkan dokumen, status verifikasi Anda akan berubah:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div>
              <h4 className="font-semibold text-yellow-800">
                Pending Review
              </h4>
              <p className="mt-1 text-sm text-yellow-700">
                Dokumen Anda sedang direview oleh tim Meta. Tunggu notifikasi email untuk update
                status.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <h4 className="font-semibold text-green-800">Verified</h4>
              <p className="mt-1 text-sm text-green-700">
                Business Manager Anda telah terverifikasi. Anda sekarang dapat mengakses fitur-fitur
                premium.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div>
              <h4 className="font-semibold text-red-800">Rejected</h4>
              <p className="mt-1 text-sm text-red-700">
                Verifikasi ditolak. Periksa email untuk alasan penolakan dan perbaiki dokumen yang
                diperlukan, lalu ajukan ulang.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Jika Verifikasi Ditolak</h2>
      <p>Jika verifikasi Anda ditolak, lakukan langkah berikut:</p>
      <ol className="my-4 space-y-2">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Baca Alasan Penolakan:</strong> Periksa email dari Meta untuk mengetahui alasan
            spesifik penolakan
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Perbaiki Masalah:</strong> Perbaiki dokumen atau informasi yang tidak sesuai
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <strong>Ajukan Ulang:</strong> Upload dokumen yang sudah diperbaiki dan ajukan
            verifikasi ulang
          </div>
        </li>
      </ol>

      <Callout type="info" title="Butuh Bantuan?">
        <p>
          Jika verifikasi Anda ditolak berulang kali atau Anda memiliki pertanyaan tentang proses
          verifikasi, hubungi tim support Meta atau konsultasikan dengan tim Hadona untuk bantuan
          lebih lanjut.
        </p>
      </Callout>

      <h2>Tips & Best Practices</h2>
      <ul className="my-4 space-y-2">
        <li>
          <strong>Dokumen Lengkap:</strong> Pastikan semua dokumen yang diminta sudah lengkap dan
          jelas sebelum upload
        </li>
        <li>
          <strong>Konsistensi Informasi:</strong> Pastikan informasi yang Anda masukkan konsisten
          dengan dokumen legal bisnis
        </li>
        <li>
          <strong>Nomor Telepon Aktif:</strong> Gunakan nomor telepon bisnis yang aktif dan dapat
          menerima SMS untuk verifikasi
        </li>
        <li>
          <strong>Kesabaran:</strong> Proses review membutuhkan waktu, jangan mengajukan ulang
          sebelum mendapatkan hasil review pertama
        </li>
      </ul>
    </DocLayout>
  )
}
