import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Users, MessageSquare, Award, Calendar, BookOpen, Heart } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Community"
      categoryHref="/agency/best-practices"
      categoryName="Best Practices"
      prevHref="/agency/best-practices/updates"
      prevTitle="Updates & Changelog"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Bergabunglah dengan komunitas Hadona! Terhubung dengan advertisers lain, berbagi
          pengalaman, belajar bersama, dan tumbuh sebagai digital marketer.
        </p>
      </div>

      <h2>Mengapa Bergabung dengan Komunitas?</h2>
      <p>
        Komunitas Hadona adalah tempat untuk belajar, berbagi, dan berkembang bersama. Berikut
        manfaat yang bisa Anda dapatkan:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Users className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Networking</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Terhubung dengan digital marketers, agency owners, dan advertisers dari berbagai
            industri. Bangun network profesional yang kuat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <BookOpen className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Learning</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Akses ke knowledge base, case studies, dan best practices dari advertisers berpengalaman.
            Belajar dari success stories dan failures.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <MessageSquare className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Support</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Dapatkan bantuan dari komunitas untuk masalah yang Anda hadapi. Komunitas saling
            membantu dengan pengalaman dan expertise mereka.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Award className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Recognition</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Dapatkan recognition untuk kontribusi Anda. Top contributors mendapatkan akses eksklusif
            dan benefits khusus.
          </p>
        </div>
      </div>

      <h2>Ways to Get Involved</h2>

      <h3>1. Community Forum</h3>
      <p>
        Forum diskusi utama untuk bertanya, berbagi tips, dan berdiskusi tentang digital
        advertising:
      </p>
      <ul>
        <li>
          <strong>Q&A Section</strong> - Tanyakan pertanyaan dan dapatkan jawaban dari komunitas
        </li>
        <li>
          <strong>Tips & Tricks</strong> - Berbagi tips dan trik yang telah Anda pelajari
        </li>
        <li>
          <strong>Case Studies</strong> - Share success stories dan learnings dari kampanye Anda
        </li>
        <li>
          <strong>General Discussion</strong> - Diskusi umum tentang industry trends dan updates
        </li>
      </ul>

      <div className="my-6 rounded-lg border border-hadona-primary/20 bg-hadona-primary/5 p-4 dark:border-hadona-primary/30 dark:bg-hadona-primary/10">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Join Forum:</strong> Akses forum melalui dashboard Hadona atau kunjungi{' '}
          <a href="#" className="text-hadona-primary hover:underline">
            community.hadona.id
          </a>
        </p>
      </div>

      <h3>2. Monthly Meetups</h3>
      <p>
        Bergabung dengan monthly meetups untuk networking dan learning langsung dari experts:
      </p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <Calendar className="h-5 w-5 text-hadona-primary" />
            <h4 className="font-semibold">Virtual Meetups</h4>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Online meetups setiap bulan dengan topik berbeda. Cocok untuk yang tidak bisa hadir
            secara fisik.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Setiap Sabtu pertama bulan, 14:00 WIB
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-3 flex items-center gap-3">
            <Calendar className="h-5 w-5 text-hadona-primary" />
            <h4 className="font-semibold">In-Person Events</h4>
          </div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Meetups offline di berbagai kota untuk networking yang lebih personal dan hands-on
            workshops.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Jakarta, Surabaya, Bandung - Jadwal bervariasi
          </p>
        </div>
      </div>

      <h3>3. Community Challenges</h3>
      <p>
        Ikuti monthly challenges untuk mengasah skills dan memenangkan hadiah:
      </p>
      <ul>
        <li>
          <strong>Campaign Optimization Challenge</strong> - Optimize kampanye dan compete dengan
          advertisers lain
        </li>
        <li>
          <strong>Creative Contest</strong> - Submit kreatif terbaik dan dapatkan recognition
        </li>
        <li>
          <strong>Case Study Competition</strong> - Share case study terbaik dan menangkan prizes
        </li>
      </ul>

      <h3>4. Mentorship Program</h3>
      <p>
        Program mentorship untuk membantu Anda berkembang:
      </p>
      <div className="my-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h4 className="mb-2 font-semibold">How It Works:</h4>
        <ol className="ml-4 list-decimal space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>Apply untuk menjadi mentee atau mentor</li>
          <li>Get matched berdasarkan goals dan expertise</li>
          <li>Regular check-ins dan guidance sessions</li>
          <li>Track progress dan celebrate milestones</li>
        </ol>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          <strong>Apply Now:</strong>{' '}
          <a href="#" className="text-hadona-primary hover:underline">
            mentorship.hadona.id
          </a>
        </p>
      </div>

      <h2>Community Guidelines</h2>
      <p>
        Untuk menjaga komunitas yang positif dan produktif, harap ikuti guidelines berikut:
      </p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Be Respectful</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hormati semua anggota komunitas. Tidak ada toleransi untuk harassment, bullying, atau
            diskriminasi.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Share Knowledge</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Berbagi pengetahuan dan pengalaman dengan tulus. Komunitas tumbuh ketika semua anggota
            berkontribusi.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">No Spam or Self-Promotion</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hindari spam dan self-promotion yang berlebihan. Promosi yang relevan dan bermanfaat
            diperbolehkan di section yang tepat.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Stay On Topic</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pastikan diskusi relevan dengan digital marketing dan advertising. Off-topic discussions
            dapat dipindahkan atau dihapus.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Give Credit</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jika Anda share konten dari sumber lain, berikan credit yang sesuai. Respect intellectual
            property.
          </p>
        </div>
      </div>

      <h2>Community Leaders & Moderators</h2>
      <p>
        Komunitas dikelola oleh team moderators dan community leaders yang berpengalaman:
      </p>

      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Moderators</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tim moderators memastikan komunitas tetap positif dan produktif. Mereka membantu
            menjawab pertanyaan dan menjaga kualitas diskusi.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-2 font-semibold">Community Leaders</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Community leaders adalah top contributors yang secara aktif membantu anggota lain dan
            berkontribusi pada growth komunitas.
          </p>
        </div>
      </div>

      <h2>Recognition & Rewards</h2>
      <p>
        Kami menghargai kontribusi aktif anggota komunitas dengan sistem recognition:
      </p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <Heart className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
          <div>
            <strong>Top Contributor Badge</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Badge khusus untuk anggota yang aktif membantu dan berkontribusi di forum.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Award className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <strong>Exclusive Access</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Akses eksklusif ke beta features, early access updates, dan special events.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Users className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
          <div>
            <strong>Community Leader Program</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kesempatan menjadi community leader dengan benefits tambahan dan recognition.
            </p>
          </div>
        </div>
      </div>

      <h2>Get Started</h2>
      <p>Bergabung dengan komunitas Hadona sangat mudah:</p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
            1
          </div>
          <div>
            <strong>Create Account</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Daftar di platform Hadona jika belum memiliki akun.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
            2
          </div>
          <div>
            <strong>Join Forum</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Akses community forum melalui dashboard atau kunjungi community.hadona.id.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
            3
          </div>
          <div>
            <strong>Introduce Yourself</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Buat post introduction di forum untuk memperkenalkan diri dan goals Anda.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-hadona-primary text-sm font-semibold text-white">
            4
          </div>
          <div>
            <strong>Start Engaging</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mulai berpartisipasi: jawab pertanyaan, share tips, atau ajukan pertanyaan Anda
              sendiri.
            </p>
          </div>
        </div>
      </div>

      <Callout type="info" title="Selamat Datang di Komunitas Hadona!">
        <p>
          Kami senang Anda bergabung! Komunitas Hadona adalah tempat yang ramah dan supportive untuk
          belajar dan berkembang bersama. Jangan ragu untuk berpartisipasi dan berkontribusi.
        </p>
      </Callout>
    </DocLayout>
  )
}
