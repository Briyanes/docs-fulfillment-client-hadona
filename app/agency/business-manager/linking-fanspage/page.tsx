import ArticleLayout from '@/components/ArticleLayout'
import StepGuide from '@/components/StepGuide'
import Callout from '@/components/Callout'
import Image from 'next/image'
import { Facebook, Instagram, Video, Users, Settings, ExternalLink } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Linking Fanspage',
  description: 'Tutorial lengkap cara menghubungkan Instagram Business ke Facebook Fanspage dan setup Advertiser Hadona',
  keywords: ['linking fanspage', 'hubungkan halaman', 'facebook page', 'fanspage', 'tutorial linked', 'agency', 'hadona'],
  openGraph: {
    title: 'Linking Fanspage | Hadona Docs',
    description: 'Tutorial lengkap cara menghubungkan Instagram Business ke Facebook Fanspage dan setup Advertiser Hadona',
    url: 'https://docs.hadona.id/agency/business-manager/linking-fanspage',
  },
}

export default function LinkingFanspagePage() {
  return (
    <ArticleLayout
      title="Linking Fanspage"
      categoryHref="/agency/business-manager"
      categoryName="Business Manager"
      description="Tutorial lengkap cara menghubungkan Instagram Business ke Facebook Fanspage dan setup Advertiser Hadona"
      prevHref="/agency/business-manager/menautkan-instagram"
      prevTitle="Menautkan Instagram Account"
      nextHref="/agency/business-manager/permission"
      nextTitle="Mengatur Permission"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          Menghubungkan Instagram Business ke Facebook Fanspage adalah langkah penting untuk mengelola
          akun Instagram secara terpusat dan mempersiapkannya untuk iklan. Tutorial ini juga mencakup
          cara mengundang Advertiser Hadona dan memberikan akses yang diperlukan.
        </p>
      </div>

      {/* ========================================
          SECTION 1: Cara Menghubungkan via Facebook
      ======================================== */}
      <h2 className="mt-8">Cara Menghubungkan Akun Instagram Business ke Fanspage</h2>

      <h3 className="mb-4 mt-6">1. Menghubungkan melalui Facebook</h3>
      <StepGuide
        steps={[
          {
            title: 'Masuk ke Fanspage',
            content: (
              <div>
                <p>
                  Log in ke akun Facebook Anda, lalu beralih ke Fanspage dengan mengklik foto profil
                  di kanan atas.
                </p>
              </div>
            ),
          },
          {
            title: 'Buka Settingan Fanspage',
            content: (
              <div>
                <p>
                  Klik ikon Fanspage di kanan atas, lalu pilih <strong>"Settings & Privacy"</strong> →{' '}
                  <strong>"Settings"</strong>
                </p>
              </div>
            ),
          },
          {
            title: 'Akses Menu Linked Accounts',
            content: (
              <div>
                <p>
                  Di menu Settings, pilih <strong>"Linked Accounts"</strong> untuk melihat akun yang
                  terhubung dengan Fanspage.
                </p>
                <div className="my-4">
                  <Image
                    src="/images/agency/business-manager/linking-fanspage/hubungkan-via-facebook-3-linked-accounts.png"
                    alt="Menu Linked Accounts di Settings Fanspage"
                    width={800}
                    height={500}
                    className="rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            ),
          },
          {
            title: 'Hubungkan Instagram Business',
            content: (
              <div>
                <p>
                  Sekarang hubungkan profil Instagram Anda. Klik akun yang terkoneksi dan ikuti
                  langkah-langkah yang tertera untuk menghubungkannya.
                </p>
                <div className="my-4">
                  <Image
                    src="/images/agency/business-manager/linking-fanspage/hubungkan-via-facebook-4-connect-instagram.png"
                    alt="Menghubungkan Instagram ke Fanspage"
                    width={800}
                    height={500}
                    className="rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            ),
          },
          {
            title: 'Verifikasi Koneksi',
            content: (
              <div>
                <p>
                  Apabila sudah terhubung, akan terlihat seperti ini di menu Linked Accounts:
                </p>
                <div className="my-4">
                  <Image
                    src="/images/agency/business-manager/linking-fanspage/hubungkan-via-facebook-5-terhubung.png"
                    alt="Tampilan setelah Instagram terhubung ke Fanspage"
                    width={800}
                    height={500}
                    className="rounded-lg border border-gray-200"
                  />
                </div>
                <Callout type="success" title="Berhasil!">
                  <p>
                    Sekarang Instagram Business Anda sudah terkoneksi dengan Fanspage Facebook!
                  </p>
                </Callout>
              </div>
            ),
          },
        ]}
      />

      {/* ========================================
          SECTION 2: Cara Menghubungkan via Instagram
      ======================================== */}
      <h3 className="mb-4 mt-8">2. Menghubungkan melalui Instagram</h3>
      <StepGuide
        steps={[
          {
            title: 'Buka Profil Instagram',
            content: (
              <div>
                <p>
                  Buka aplikasi Instagram dan masuk ke profil Anda.
                </p>
              </div>
            ),
          },
          {
            title: 'Pilih Edit Profil',
            content: (
              <div>
                <p>
                  Di bawah Instagram bio & dashboard profesional, pilih <strong>"Edit Profil"</strong>.
                  Lalu pada bagian <strong>"Public Business Information"</strong>, pilih{' '}
                  <strong>"Page"</strong> → <strong>"Connect"</strong> atau <strong>"Create"</strong>.
                </p>
                <div className="my-4">
                  <Image
                    src="/images/agency/business-manager/linking-fanspage/hubungkan-via-instagram-1-edit-profil.png"
                    alt="Menu Edit Profil di Instagram"
                    width={400}
                    height={700}
                    className="mx-auto rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            ),
          },
          {
            title: 'Hubungkan ke Fanspage',
            content: (
              <div>
                <p>
                  Klik <strong>Continue</strong> (Selanjutnya) lalu ikuti langkah yang sudah tertera
                  di layar untuk menghubungkan Fanspage dengan profil Instagram Anda!
                </p>
                <div className="my-4">
                  <Image
                    src="/images/agency/business-manager/linking-fanspage/hubungkan-via-instagram-2-connect-page.png"
                    alt="Menghubungkan Instagram ke Facebook Page"
                    width={400}
                    height={700}
                    className="mx-auto rounded-lg border border-gray-200"
                  />
                </div>
                <Callout type="success" title="Selesai!">
                  <p>
                    Sekarang Instagram Business Anda sudah terkoneksi dengan Fanspage!
                  </p>
                </Callout>
              </div>
            ),
          },
        ]}
      />

      {/* ========================================
          SECTION 3: Cara Invite Advertiser Hadona
      ======================================== */}
      <h2 className="mt-8">C. Cara Invite Advertiser Hadona</h2>
      <p>
        Setelah Fanspage dan Instagram terhubung, langkah selanjutnya adalah mengundang Advertiser
        Hadona untuk mengelola iklan Anda.
      </p>

      <Callout type="info" title="Video Tutorial">
        <p className="mb-3">
          Tonton video tutorial lengkap untuk melihat langkah-langkah invite Advertiser:
        </p>
        <a
          href="https://drive.google.com/file/d/1NHbczkpW7BQl0RMPOirKOimyfm9FI26N/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-blue-700 hover:bg-blue-100"
        >
          <Video className="h-5 w-5" />
          <span>Watch Video Tutorial</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </Callout>

      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-yellow-900">
          <Users className="h-6 w-6" />
          Informasi Advertiser Hadona
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Gilberth */}
          <div className="rounded-lg border border-yellow-300 bg-white p-4">
            <div className="mb-3 flex items-center gap-3">
              <Image
                src="/images/agency/business-manager/linking-fanspage/profil-gilberth.png"
                alt="Profil Gilberth"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-yellow-900">Gilberth</p>
                <p className="text-sm text-gray-600">Gilberth.smith.7</p>
              </div>
            </div>
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:Nurhadi.dwipranowo@gmail.com"
                className="underline hover:text-yellow-900"
              >
                Nurhadi.dwipranowo@gmail.com
              </a>
            </p>
          </div>

          {/* Siskas */}
          <div className="rounded-lg border border-yellow-300 bg-white p-4">
            <div className="mb-3 flex items-center gap-3">
              <Image
                src="/images/agency/business-manager/linking-fanspage/profil-siskas.png"
                alt="Profil Siskas"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-yellow-900">Siskas</p>
                <p className="text-sm text-gray-600">Siskas Widiastutia</p>
              </div>
            </div>
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:siskawidi99@outlook.com"
                className="underline hover:text-yellow-900"
              >
                siskawidi99@outlook.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ========================================
          SECTION 4: Cara Add Advertiser ke Business Manager
      ======================================== */}
      <h2 className="mt-8">D. Cara Add Advertiser Hadona ke Business Manager</h2>
      <p>
        Setelah mengundang Advertiser, Anda perlu menambahkannya ke Business Manager dengan
        permission yang sesuai.
      </p>

      <Callout type="info" title="Video Tutorial">
        <p className="mb-3">
          Video tutorial add ke Business Manager:
        </p>
        <a
          href="https://drive.google.com/file/d/1BS4OCvUWP4KQUjw8H6Tx_pMWygUjVJQj/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-blue-700 hover:bg-blue-100"
        >
          <Video className="h-5 w-5" />
          <span>Watch: Add to Business Manager</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </Callout>

      {/* ========================================
          SECTION 5: Cara Add Advertiser ke Ad Account
      ======================================== */}
      <h2 className="mt-8">E. Cara Add Advertiser Hadona ke Ad Account</h2>
      <p>
        Langkah terakhir adalah memberikan akses Advertiser ke Ad Account agar dapat membuat dan
        mengelola kampanye iklan.
      </p>

      <Callout type="info" title="Video Tutorial">
        <p className="mb-3">
          Video tutorial add ke Ad Account:
        </p>
        <a
          href="https://drive.google.com/file/d/124pJ_XGgkz7Ru7qMY8x_tvwRt5I5ICWd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-blue-700 hover:bg-blue-100"
        >
          <Video className="h-5 w-5" />
          <span>Watch: Add to Ad Account</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </Callout>

      {/* ========================================
          SUMMARY & TIPS
      ======================================== */}
      <h2 className="mt-8">Ringkasan Langkah</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-hadona-primary text-white font-bold">
            1
          </div>
          <div>
            <h4 className="font-semibold">Hubungkan Instagram ke Fanspage</h4>
            <p className="text-sm text-gray-600">
              Melalui Facebook Settings atau Instagram Edit Profile
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-hadona-primary text-white font-bold">
            2
          </div>
          <div>
            <h4 className="font-semibold">Invite Advertiser Hadona</h4>
            <p className="text-sm text-gray-600">
              Gunakan username atau email yang telah disediakan
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-hadona-primary text-white font-bold">
            3
          </div>
          <div>
            <h4 className="font-semibold">Add ke Business Manager</h4>
            <p className="text-sm text-gray-600">
              Berikan akses Advertiser di Business Manager
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-hadona-primary text-white font-bold">
            4
          </div>
          <div>
            <h4 className="font-semibold">Add ke Ad Account</h4>
            <p className="text-sm text-gray-600">
              Berikan akses Advertiser ke Ad Account untuk iklan
            </p>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Penting">
        <p>
          Pastikan untuk memberikan permission yang sesuai kepada Advertiser. Jangan memberikan
          akses admin jika tidak diperlukan. Gunakan permission <strong>Advertiser</strong> untuk
          pembuatan dan pengelolaan iklan tanpa akses penuh ke account.
        </p>
      </Callout>

      <Callout type="success" title="Langkah Selanjutnya">
        <p>
          Setelah Advertiser Hadona berhasil ditambahkan, langkah berikutnya adalah mengatur
          permission dan role untuk setiap anggota tim di Business Manager.
        </p>
      </Callout>
    </ArticleLayout>
  )
}
