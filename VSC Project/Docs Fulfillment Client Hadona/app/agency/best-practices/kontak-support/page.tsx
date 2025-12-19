import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Mail, MessageCircle, Phone, Clock, Headphones } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Kontak Support"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/faq"
      prevTitle="FAQ"
      nextHref="/agency/best-practices/resources"
      nextTitle="Resources"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Tim support Hadona siap membantu Anda 24/7. Pilih channel yang paling nyaman untuk Anda
          dan kami akan merespons secepat mungkin.
        </p>
      </div>

      <h2>Channel Support yang Tersedia</h2>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <MessageCircle className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Live Chat</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Dapatkan bantuan instan melalui live chat di platform Hadona. Tersedia 24/7 untuk
            pertanyaan dan masalah urgent.
          </p>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Response Time:</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Rata-rata &lt; 5 menit</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Mail className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Email Support</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Kirim email untuk pertanyaan detail, dokumentasi masalah, atau request fitur. Cocok
            untuk masalah non-urgent yang memerlukan penjelasan lengkap.
          </p>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Email:</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">support@hadona.id</p>
          <p className="mt-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            Response Time:
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Rata-rata &lt; 4 jam</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Phone className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Phone Support</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Hubungi kami langsung untuk masalah urgent atau konsultasi strategi. Tersedia untuk
            klien dengan paket premium.
          </p>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Phone:</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">+62 XXX-XXXX-XXXX</p>
          <p className="mt-2 text-xs font-semibold text-gray-700 dark:text-gray-300">Jam Operasi:</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Senin - Jumat, 09:00 - 18:00 WIB</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Headphones className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Support Ticket</h3>
          </div>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Buat support ticket melalui dashboard Hadona untuk tracking masalah yang lebih terstruktur.
            Ideal untuk masalah kompleks yang memerlukan follow-up.
          </p>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Response Time:</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Rata-rata &lt; 2 jam</p>
        </div>
      </div>

      <h2>Kapan Menggunakan Setiap Channel</h2>

      <div className="my-6 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Kapan Digunakan</th>
              <th>Contoh Masalah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Live Chat</strong>
              </td>
              <td>Masalah urgent, pertanyaan cepat</td>
              <td>Kampanye tidak running, ad rejected, login issues</td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong>
              </td>
              <td>Pertanyaan detail, dokumentasi, request fitur</td>
              <td>Strategi optimasi, best practices, feature requests</td>
            </tr>
            <tr>
              <td>
                <strong>Phone</strong>
              </td>
              <td>Masalah kompleks, konsultasi strategi</td>
              <td>Account issues, strategic planning, urgent escalations</td>
            </tr>
            <tr>
              <td>
                <strong>Support Ticket</strong>
              </td>
              <td>Masalah yang memerlukan tracking</td>
              <td>Bug reports, technical issues, billing questions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Informasi yang Perlu Disiapkan</h2>
      <p>
        Untuk membantu tim support merespons lebih cepat, siapkan informasi berikut sebelum
        menghubungi:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Informasi Akun</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Business Manager ID atau nama akun</li>
            <li>• Email yang terdaftar</li>
            <li>• Nama perusahaan/agency</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Detail Masalah</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Deskripsi masalah yang jelas</li>
            <li>• Kapan masalah mulai terjadi</li>
            <li>• Langkah-langkah yang sudah dicoba</li>
            <li>• Screenshots atau error messages</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Konteks Kampanye (jika relevan)</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Campaign ID atau nama kampanye</li>
            <li>• Ad Set atau Ad ID yang bermasalah</li>
            <li>• Timeline masalah (tanggal dan waktu)</li>
            <li>• Impact pada bisnis (budget, conversions, dll)</li>
          </ul>
        </div>
      </div>

      <h2>Jam Operasi & Response Time</h2>

      <div className="my-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <Clock className="h-6 w-6 text-hadona-primary" />
            <h3 className="text-lg font-semibold">Live Chat & Support Ticket</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>24/7</strong> - Tersedia sepanjang waktu untuk semua klien
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
            Response time rata-rata: &lt; 5 menit (Live Chat), &lt; 2 jam (Support Ticket)
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <Clock className="h-6 w-6 text-hadona-primary" />
            <h3 className="text-lg font-semibold">Email & Phone</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Senin - Jumat</strong>: 09:00 - 18:00 WIB
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
            Response time rata-rata: &lt; 4 jam (Email), Immediate (Phone)
          </p>
        </div>
      </div>

      <h2>Escalation Process</h2>
      <p>
        Jika masalah Anda tidak teratasi melalui channel standar, berikut proses escalation yang
        tersedia:
      </p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
            1
          </div>
          <div>
            <strong>Level 1: Standard Support</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kontak melalui Live Chat, Email, atau Support Ticket. Tim support akan merespons
              sesuai SLA.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
            2
          </div>
          <div>
            <strong>Level 2: Senior Support</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jika masalah tidak teratasi dalam 24 jam, akan di-escalate ke Senior Support Team.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
            3
          </div>
          <div>
            <strong>Level 3: Account Manager</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Untuk masalah kompleks atau urgent, Account Manager akan terlibat langsung.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
            4
          </div>
          <div>
            <strong>Level 4: Management</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Untuk masalah kritis yang mempengaruhi bisnis, management team akan terlibat.
            </p>
          </div>
        </div>
      </div>

      <h2>Tips untuk Mendapatkan Bantuan yang Efektif</h2>
      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">1. Jelaskan Masalah dengan Jelas</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sertakan konteks lengkap: apa yang terjadi, kapan, dan apa yang sudah dicoba. Semakin
            detail, semakin cepat masalah teratasi.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">2. Sertakan Screenshots</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Screenshot sangat membantu tim support memahami masalah. Sertakan error messages,
            campaign settings, atau apapun yang relevan.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">3. Gunakan Channel yang Tepat</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pilih channel sesuai urgency dan kompleksitas masalah. Live chat untuk urgent, email
            untuk detail.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">4. Bersabarlah</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tim support akan merespons secepat mungkin sesuai SLA. Hindari mengirim multiple
            messages di channel yang sama.
          </p>
        </div>
      </div>

      <h2>Kontak Darurat</h2>
      <Callout type="warning" title="Masalah Kritis">
        <p>
          Untuk masalah kritis yang mempengaruhi bisnis (seperti account disabled, security breach,
          atau masalah billing besar), hubungi kami segera melalui:
        </p>
        <ul className="mt-2">
          <li>
            <strong>Phone (Urgent)</strong>: +62 XXX-XXXX-XXXX (24/7 untuk emergency)
          </li>
          <li>
            <strong>Email (Urgent)</strong>: urgent@hadona.id (subject: [URGENT])
          </li>
        </ul>
      </Callout>

      <h2>Feedback & Saran</h2>
      <p>
        Kami selalu berusaha meningkatkan kualitas support. Jika Anda memiliki feedback atau saran
        tentang layanan support kami, silakan kirim ke:
      </p>
      <ul>
        <li>
          <strong>Email</strong>: feedback@hadona.id
        </li>
        <li>
          <strong>Survey</strong>: Setelah setiap interaksi support, Anda akan menerima survey
          singkat untuk menilai kualitas layanan
        </li>
      </ul>

      <Callout type="info" title="Kami Siap Membantu">
        <p>
          Tim support Hadona berkomitmen memberikan layanan terbaik untuk membantu kesuksesan
          kampanye iklan Anda. Jangan ragu untuk menghubungi kami kapan saja Anda membutuhkan
          bantuan.
        </p>
      </Callout>
    </DocLayout>
  )
}
