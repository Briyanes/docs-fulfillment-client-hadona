import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import StepGuide from '@/components/StepGuide'
import { Video, Users, Calendar, FileText, CheckCircle2, MessageSquare } from 'lucide-react'

export default function KickoffMeetingPage() {
  return (
    <DocLayout
      title="Kickoff Meeting"
      categoryHref="/agency/onboarding"
      categoryName="Onboarding"
      prevHref="/agency/onboarding/persiapan"
      prevTitle="Persiapan"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Kickoff meeting adalah langkah penting dalam proses onboarding Hadona. Meeting ini
          dirancang untuk memperkenalkan platform, menyelaraskan ekspektasi, dan memulai proses
          setup dengan pemahaman yang jelas. Panduan ini akan membantu Anda mempersiapkan dan
          memaksimalkan manfaat dari kickoff meeting.
        </p>
      </div>

      <h2>Tujuan Kickoff Meeting</h2>
      <p>
        Kickoff meeting memiliki beberapa tujuan penting yang akan memastikan kesuksesan onboarding
        Anda:
      </p>

      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Users className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="font-semibold">Perkenalan Tim</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mengenal tim Hadona yang akan mendampingi Anda dan memahami struktur support yang
            tersedia.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Video className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="font-semibold">Platform Overview</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Demo platform dan penjelasan fitur-fitur utama yang akan Anda gunakan sehari-hari.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <FileText className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="font-semibold">Rencana Setup</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Menyusun timeline dan rencana setup yang disesuaikan dengan kebutuhan dan situasi Anda.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <MessageSquare className="h-5 w-5 text-hadona-primary" />
            </div>
            <h3 className="font-semibold">Q&A Session</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kesempatan untuk bertanya dan mengklarifikasi hal-hal yang belum jelas atau menjadi
            concern Anda.
          </p>
        </div>
      </div>

      <h2>Persiapan Sebelum Meeting</h2>
      <p>
        Agar kickoff meeting berjalan efektif, pastikan Anda sudah mempersiapkan hal-hal berikut:
      </p>

      <StepGuide
        steps={[
          {
            title: 'Konfirmasi Jadwal',
            content: (
              <div>
                <p className="mb-2">
                  Pastikan Anda sudah mengkonfirmasi jadwal meeting dan menyediakan waktu 45-60
                  menit tanpa gangguan. Meeting biasanya dilakukan via video call (Google Meet atau
                  Zoom).
                </p>
                <Callout type="info" title="Catatan">
                  <p>
                    Jika perlu mengubah jadwal, beri tahu tim Hadona minimal 24 jam sebelumnya.
                  </p>
                </Callout>
              </div>
            ),
          },
          {
            title: 'Siapkan Dokumen',
            content: (
              <div>
                <p className="mb-2">
                  Pastikan semua dokumen yang sudah disiapkan (sesuai halaman Persiapan) mudah
                  diakses. Anda mungkin perlu membagikan layar atau mengirim file selama meeting.
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Dokumen legal bisnis</li>
                  <li>Informasi akses Business Manager</li>
                  <li>Daftar anggota tim</li>
                  <li>Informasi Page dan Instagram</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Siapkan Pertanyaan',
            content: (
              <div>
                <p className="mb-2">
                  Tuliskan pertanyaan atau concern yang ingin Anda diskusikan. Ini akan membantu
                  memastikan semua hal penting terbahas.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Contoh pertanyaan:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Bagaimana struktur permission yang direkomendasikan?</li>
                  <li>Apakah ada best practices untuk setup pertama kali?</li>
                  <li>Bagaimana proses verifikasi Business Manager?</li>
                  <li>Kapan timeline setup akan dimulai?</li>
                </ul>
              </div>
            ),
          },
          {
            title: 'Test Koneksi dan Peralatan',
            content: (
              <div>
                <p className="mb-2">
                  Pastikan koneksi internet stabil, kamera dan mikrofon berfungsi, serta aplikasi
                  video call sudah terinstall dan siap digunakan.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Tips:</strong> Test koneksi 15 menit sebelum meeting dimulai.
                </p>
              </div>
            ),
          },
          {
            title: 'Undang Tim yang Relevan',
            content: (
              <div>
                <p className="mb-2">
                  Undang anggota tim yang akan terlibat dalam setup atau penggunaan platform.
                  Biasanya termasuk decision maker, admin, dan person yang akan mengoperasikan
                  platform sehari-hari.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Rekomendasi:</strong> Maksimal 3-4 orang untuk menjaga efektivitas
                  meeting.
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>Agenda Meeting</h2>
      <p>
        Berikut adalah agenda standar kickoff meeting. Tim Hadona akan menyesuaikan sesuai kebutuhan
        Anda:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border-l-4 border-hadona-primary bg-gray-50 p-5 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
              1
            </div>
            <h3 className="text-lg font-semibold">Pembukaan & Perkenalan (5 menit)</h3>
          </div>
          <ul className="ml-10 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>Perkenalan tim Hadona</li>
            <li>Perkenalan tim Client</li>
            <li>Overview tujuan meeting</li>
          </ul>
        </div>

        <div className="rounded-lg border-l-4 border-hadona-primary bg-gray-50 p-5 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
              2
            </div>
            <h3 className="text-lg font-semibold">Platform Overview & Demo (15 menit)</h3>
          </div>
          <ul className="ml-10 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>Demo dashboard dan fitur utama</li>
            <li>Penjelasan workflow umum</li>
            <li>Highlight fitur unggulan</li>
          </ul>
        </div>

        <div className="rounded-lg border-l-4 border-hadona-primary bg-gray-50 p-5 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
              3
            </div>
            <h3 className="text-lg font-semibold">Review Kebutuhan & Setup Plan (15 menit)</h3>
          </div>
          <ul className="ml-10 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>Review dokumen dan akses yang sudah disiapkan</li>
            <li>Diskusi kebutuhan spesifik</li>
            <li>Penyusunan timeline dan milestone</li>
            <li>Penetapan next steps</li>
          </ul>
        </div>

        <div className="rounded-lg border-l-4 border-hadona-primary bg-gray-50 p-5 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
              4
            </div>
            <h3 className="text-lg font-semibold">Q&A Session (10 menit)</h3>
          </div>
          <ul className="ml-10 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>Jawaban pertanyaan dari Client</li>
            <li>Diskusi concern atau hal spesifik</li>
            <li>Klarifikasi proses dan timeline</li>
          </ul>
        </div>

        <div className="rounded-lg border-l-4 border-hadona-primary bg-gray-50 p-5 dark:bg-gray-900">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
              5
            </div>
            <h3 className="text-lg font-semibold">Penutup & Next Steps (5 menit)</h3>
          </div>
          <ul className="ml-10 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>Rangkuman action items</li>
            <li>Konfirmasi timeline</li>
            <li>Kontak untuk follow-up</li>
          </ul>
        </div>
      </div>

      <h2>Yang Akan Dibahas</h2>
      <p>
        Berikut adalah topik-topik yang biasanya dibahas dalam kickoff meeting:
      </p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <div className="font-semibold">Struktur Akun dan Organisasi</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Bagaimana mengorganisir Business Manager, Ad Account, dan aset digital Anda
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <div className="font-semibold">User Management dan Permission</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Strategi memberikan akses ke tim dan best practices untuk keamanan
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <div className="font-semibold">Proses Verifikasi</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Langkah-langkah verifikasi Business Manager dan dokumen yang diperlukan
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <div className="font-semibold">Timeline dan Milestone</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Rencana waktu untuk setiap tahap setup dan kapan Anda bisa mulai beriklan
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <div className="font-semibold">Support dan Komunikasi</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Cara menghubungi support, channel komunikasi, dan SLA response time
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <div className="font-semibold">Best Practices</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Tips dan trik untuk memaksimalkan penggunaan platform dan hasil kampanye
            </div>
          </div>
        </div>
      </div>

      <h2>Setelah Meeting</h2>
      <p>
        Setelah kickoff meeting selesai, berikut adalah hal-hal yang akan terjadi:
      </p>

      <StepGuide
        steps={[
          {
            title: 'Summary Email',
            content: (
              <div>
                <p className="mb-2">
                  Tim Hadona akan mengirimkan summary email yang berisi rangkuman meeting, action
                  items, dan timeline yang telah disepakati. Simpan email ini sebagai referensi.
                </p>
              </div>
            ),
          },
          {
            title: 'Action Items',
            content: (
              <div>
                <p className="mb-2">
                  Anda akan menerima daftar action items yang perlu dilakukan, seperti memberikan
                  akses, mengirim dokumen, atau konfirmasi informasi tertentu. Selesaikan action
                  items ini secepat mungkin untuk mempercepat proses setup.
                </p>
              </div>
            ),
          },
          {
            title: 'Mulai Setup',
            content: (
              <div>
                <p className="mb-2">
                  Setelah semua action items selesai, tim Hadona akan mulai proses setup. Anda akan
                  diupdate secara berkala tentang progress dan mungkin diminta untuk memberikan
                  akses atau konfirmasi pada beberapa langkah.
                </p>
              </div>
            ),
          },
          {
            title: 'Follow-up Meeting (Jika Diperlukan)',
            content: (
              <div>
                <p className="mb-2">
                  Jika ada hal kompleks atau memerlukan diskusi lebih lanjut, tim Hadona mungkin
                  akan menjadwalkan follow-up meeting. Pastikan untuk hadir atau memberikan
                  feedback yang diperlukan.
                </p>
              </div>
            ),
          },
        ]}
      />

      <Callout type="info" title="Tips Memaksimalkan Meeting">
        <ul className="space-y-1">
          <li>• Aktif bertanya dan berdiskusi - tidak ada pertanyaan yang terlalu sederhana</li>
          <li>• Catat poin-poin penting untuk referensi nanti</li>
          <li>• Jangan ragu untuk meminta demo ulang jika ada yang kurang jelas</li>
          <li>• Diskusikan concern atau kebutuhan spesifik Anda</li>
          <li>• Pastikan semua action items jelas dan timeline disepakati</li>
        </ul>
      </Callout>

      <h2>Pertanyaan yang Sering Diajukan</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Apakah meeting bisa direkam?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ya, Anda bisa meminta rekaman meeting. Tim Hadona juga biasanya akan mengirimkan
            summary tertulis setelah meeting.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Bagaimana jika saya tidak bisa hadir?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Beri tahu tim Hadona sesegera mungkin untuk reschedule. Pastikan ada minimal 1 orang
            dari tim Anda yang hadir yang memiliki authority untuk membuat keputusan.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Apakah saya perlu menyiapkan presentasi?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tidak perlu. Tim Hadona yang akan mempresentasikan platform. Anda cukup menyiapkan
            dokumen dan pertanyaan seperti yang disebutkan di atas.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Kapan setup akan dimulai setelah meeting?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Biasanya setup dimulai dalam 1-2 hari kerja setelah semua action items dari meeting
            selesai. Timeline spesifik akan dibahas di meeting.
          </p>
        </div>
      </div>

      <Callout type="success" title="Selamat!">
        <p>
          Setelah kickoff meeting, Anda sudah siap untuk memulai perjalanan dengan Hadona! Proses
          setup akan dimulai segera setelah semua persiapan selesai. Tim Hadona akan mendampingi
          Anda di setiap langkah.
        </p>
      </Callout>

      <div className="mt-8 rounded-lg border border-hadona-primary bg-hadona-primary/5 p-6">
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-hadona-primary">
          <Calendar className="h-5 w-5" />
          Siap untuk Kickoff Meeting?
        </h3>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          Jika Anda sudah menyelesaikan semua persiapan dan siap untuk kickoff meeting, silakan
          konfirmasi jadwal dengan tim Hadona. Kami akan memastikan meeting berjalan produktif dan
          semua pertanyaan Anda terjawab.
        </p>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Selamat memulai perjalanan digital marketing Anda bersama Hadona! 🚀
        </p>
      </div>
    </DocLayout>
  )
}

