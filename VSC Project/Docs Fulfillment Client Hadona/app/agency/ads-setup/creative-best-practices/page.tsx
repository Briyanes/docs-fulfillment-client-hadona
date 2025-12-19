import DocLayout from '@/components/DocLayout'
import Callout from '@/components/Callout'
import { Image, Video, Palette, Type, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function Page() {
  return (
    <DocLayout
      title="Creative Best Practices"
      categoryHref="/agency/ads-setup"
      categoryName="Ads Setup"
      prevHref="/agency/ads-setup/instagram-whatsapp-linking"
      prevTitle="Instagram & WhatsApp Linking"
      nextHref="/agency/ads-setup/optimasi-campaign"
      nextTitle="Optimasi Campaign"
    >
      <div className="mb-8">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Creative yang menarik dan efektif adalah kunci sukses kampanye iklan. Panduan ini akan
          membantu Anda membuat creative yang memenuhi best practices Meta dan menghasilkan hasil
          optimal.
        </p>
      </div>

      <h2>Prinsip Dasar Creative yang Efektif</h2>
      <p>
        Creative yang efektif memiliki beberapa karakteristik utama:
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Image className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Visual Quality</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kualitas visual yang tinggi, resolusi yang tepat, dan komposisi yang menarik.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Type className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Clear Message</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pesan yang jelas, value proposition yang kuat, dan CTA yang jelas.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-hadona-primary/10 p-2">
              <Video className="h-6 w-6 text-hadona-primary" />
            </div>
            <h3 className="text-lg font-semibold">Engaging Content</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Konten yang menarik perhatian dalam 3 detik pertama dan mempertahankan engagement.
          </p>
        </div>
      </div>

      <h2>Spesifikasi Creative</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Facebook Feed Ads</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• <strong>Image:</strong> 1200x628px (1.91:1) atau 1080x1080px (1:1)</li>
            <li>• <strong>Video:</strong> 1280x720px (16:9) atau 1080x1080px (1:1), max 240 menit</li>
            <li>• <strong>Text Overlay:</strong> Maksimal 20% dari area gambar</li>
            <li>• <strong>File Size:</strong> Max 30MB untuk image, max 4GB untuk video</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Instagram Feed Ads</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• <strong>Image:</strong> 1080x1080px (1:1) atau 1080x1350px (4:5)</li>
            <li>• <strong>Video:</strong> 1080x1080px (1:1) atau 1080x1350px (4:5), max 60 detik</li>
            <li>• <strong>Text Overlay:</strong> Maksimal 20% dari area gambar</li>
            <li>• <strong>File Size:</strong> Max 30MB untuk image, max 4GB untuk video</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Stories Ads (Facebook & Instagram)</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• <strong>Image:</strong> 1080x1920px (9:16)</li>
            <li>• <strong>Video:</strong> 1080x1920px (9:16), max 15 detik</li>
            <li>• <strong>Text Safe Area:</strong> Hindari area atas dan bawah (untuk profile/sticker)</li>
            <li>• <strong>File Size:</strong> Max 30MB untuk image, max 4GB untuk video</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Reels Ads</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• <strong>Video:</strong> 1080x1920px (9:16), 15-30 detik (optimal)</li>
            <li>• <strong>Audio:</strong> Gunakan audio yang trending atau original</li>
            <li>• <strong>Engagement:</strong> Harus engaging dari detik pertama</li>
            <li>• <strong>File Size:</strong> Max 4GB</li>
          </ul>
        </div>
      </div>

      <Callout type="warning" title="Text Overlay Policy">
        <p>
          Meta membatasi text overlay maksimal 20% dari area gambar. Iklan dengan text overlay lebih
          dari 20% akan memiliki reach yang lebih terbatas atau ditolak. Gunakan text overlay
          dengan bijak atau hindari sama sekali.
        </p>
      </Callout>

      <h2>Best Practices untuk Image Ads</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Gunakan High-Quality Images</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gunakan gambar dengan resolusi tinggi dan kualitas yang baik. Hindari gambar yang
              blur, pixelated, atau low resolution.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Fokus pada Product/Service</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pastikan product atau service menjadi fokus utama dalam gambar. Gunakan komposisi
              yang jelas dan tidak terlalu ramai.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Gunakan Warna yang Menarik</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gunakan warna yang menarik dan sesuai dengan brand. Warna yang kontras membantu
              creative menonjol di feed.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Hindari Text Overlay Berlebihan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hindari text overlay yang berlebihan. Gunakan text overlay maksimal 20% atau hindari
              sama sekali. Letakkan pesan utama di copy text.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Test Multiple Variations</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Test 3-5 variasi creative berbeda untuk menemukan yang paling efektif. Variasi bisa
              berbeda warna, angle, atau komposisi.
            </p>
          </div>
        </div>
      </div>

      <h2>Best Practices untuk Video Ads</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Hook di 3 Detik Pertama</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Video harus menarik perhatian dalam 3 detik pertama. Gunakan hook yang kuat (visual
              menarik, pertanyaan, atau value proposition yang jelas).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Optimasi untuk Silent Viewing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sebagian besar video ditonton tanpa suara. Pastikan video dapat dipahami tanpa audio
              dengan menggunakan text overlay atau visual yang jelas.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Durasi yang Tepat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Untuk Feed: 15-60 detik optimal. Untuk Stories: 15 detik. Untuk Reels: 15-30 detik.
              Buat video yang concise dan to the point.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Gunakan Captions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tambahkan captions atau subtitles untuk meningkatkan accessibility dan engagement,
              terutama untuk silent viewing.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Show, Don't Tell</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tunjukkan product atau service dalam aksi, bukan hanya menjelaskan. Visual demonstration
              lebih efektif daripada text-heavy video.
            </p>
          </div>
        </div>
      </div>

      <h2>Best Practices untuk Copy Text</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Primary Text</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Maksimal 125 karakter untuk optimal (bisa lebih panjang, tapi akan di-truncate)</li>
            <li>• Buka dengan hook yang menarik (pertanyaan, statistik, atau value proposition)</li>
            <li>• Jelaskan benefit, bukan hanya feature</li>
            <li>• Gunakan tone yang sesuai dengan brand dan audience</li>
            <li>• Include clear CTA di akhir</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Headline</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Maksimal 40 karakter</li>
            <li>• Harus catchy dan clear</li>
            <li>• Bisa mengulang value proposition atau menambahkan detail</li>
            <li>• Hindari duplikasi dengan primary text</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Description</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Maksimal 125 karakter</li>
            <li>• Opsional, tapi bisa menambahkan detail atau urgency</li>
            <li>• Gunakan untuk menambahkan context atau detail tambahan</li>
          </ul>
        </div>
      </div>

      <h2>Color & Design Guidelines</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <Palette className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Brand Consistency</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gunakan warna dan style yang konsisten dengan brand identity. Ini membantu brand
              recognition dan trust building.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Palette className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Contrast & Readability</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pastikan kontras yang cukup antara text dan background untuk readability yang baik,
              terutama di mobile.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Palette className="mt-1 h-5 w-5 flex-shrink-0 text-hadona-primary" />
          <div>
            <h3 className="font-semibold">Mobile-First Design</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sebagian besar iklan dilihat di mobile. Pastikan creative terlihat bagus di layar
              kecil dan vertical format.
            </p>
          </div>
        </div>
      </div>

      <h2>Format-Specific Tips</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Stories Ads</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Gunakan vertical format (9:16)</li>
            <li>• Hindari text di area atas dan bawah (untuk profile/sticker)</li>
            <li>• Buat content yang immersive dan full-screen</li>
            <li>• Gunakan interactive elements jika memungkinkan</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Reels Ads</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Harus engaging dari detik pertama</li>
            <li>• Gunakan trending audio atau original audio yang catchy</li>
            <li>• Buat content yang native dan tidak terlalu sales-y</li>
            <li>• Test berbagai durasi (15, 30 detik)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-2 font-semibold">Carousel Ads</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li>• Gunakan untuk showcase multiple products atau features</li>
            <li>• Setiap card harus menarik dan konsisten</li>
            <li>• Gunakan first card sebagai hook</li>
            <li>• Optimal 3-5 cards (tidak terlalu banyak)</li>
          </ul>
        </div>
      </div>

      <Callout type="success" title="Creative Testing">
        <p>
          Selalu test multiple creative variations untuk menemukan yang paling efektif. Meta
          algorithm akan belajar dari performa creative dan mengoptimalkan delivery. Test secara
          berkala untuk menjaga performa optimal.
        </p>
      </Callout>

      <h2>Common Mistakes to Avoid</h2>
      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <h3 className="mb-2 font-semibold text-red-800 dark:text-red-200">Text Overlay Berlebihan</h3>
          <p className="text-sm text-red-700 dark:text-red-300">
            Text overlay lebih dari 20% akan mengurangi reach atau menyebabkan iklan ditolak.
            Hindari text overlay yang berlebihan.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <h3 className="mb-2 font-semibold text-red-800 dark:text-red-200">Low Quality Creative</h3>
          <p className="text-sm text-red-700 dark:text-red-300">
            Creative yang blur, pixelated, atau low resolution akan mengurangi engagement dan
            performa. Gunakan creative dengan kualitas tinggi.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <h3 className="mb-2 font-semibold text-red-800 dark:text-red-200">Tidak Mobile-Optimized</h3>
          <p className="text-sm text-red-700 dark:text-red-300">
            Creative yang tidak terlihat bagus di mobile akan mengurangi performa. Pastikan
            creative terlihat bagus di layar kecil.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <h3 className="mb-2 font-semibold text-red-800 dark:text-red-200">Copy yang Terlalu Sales-y</h3>
          <p className="text-sm text-red-700 dark:text-red-300">
            Copy yang terlalu sales-y atau spammy akan mengurangi engagement. Gunakan tone yang
            authentic dan value-driven.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
