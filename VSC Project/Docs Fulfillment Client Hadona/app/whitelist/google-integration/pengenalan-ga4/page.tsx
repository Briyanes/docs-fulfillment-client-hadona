import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Pengenalan GA4"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      
      
      nextHref="/whitelist/google-integration/setup-ga4"
      nextTitle="Setup GA4 Property"
    >
      <h2>Apa itu Google Analytics 4 (GA4)?</h2>
      <p>
        Google Analytics 4 (GA4) adalah platform analitik generasi terbaru dari Google yang dirancang untuk memberikan insights yang lebih mendalam tentang perilaku pengguna di website dan aplikasi. GA4 menggantikan Universal Analytics (UA) dan menawarkan pendekatan yang lebih modern dalam tracking dan analisis data.
      </p>

      <h2>Keunggulan GA4</h2>
      <ul>
        <li><strong>Event-Based Tracking:</strong> GA4 menggunakan model event-based yang lebih fleksibel dibandingkan session-based di Universal Analytics</li>
        <li><strong>Cross-Platform Tracking:</strong> Dapat melacak pengguna di berbagai platform (web, iOS, Android) dalam satu property</li>
        <li><strong>Machine Learning:</strong> Menggunakan AI untuk memberikan insights otomatis dan prediksi perilaku pengguna</li>
        <li><strong>Privacy-First:</strong> Dibangun dengan fokus pada privasi dan compliance dengan regulasi seperti GDPR dan CCPA</li>
        <li><strong>Real-Time Reporting:</strong> Data tersedia secara real-time untuk analisis yang lebih cepat</li>
      </ul>

      <h2>Mengapa Penting untuk Client Whitelist?</h2>
      <p>
        Untuk Client Whitelist, integrasi GA4 sangat penting karena:
      </p>
      <ul>
        <li>Memungkinkan tracking yang lebih akurat untuk campaign Meta Ads</li>
        <li>Memberikan data yang lebih detail tentang conversion dan user journey</li>
        <li>Mendukung pengambilan keputusan berbasis data yang lebih baik</li>
        <li>Memungkinkan sinkronisasi data antara Meta Pixel dan GA4 untuk analisis yang lebih komprehensif</li>
      </ul>

      <h2>Konsep Dasar GA4</h2>
      <h3>Events</h3>
      <p>
        Events adalah interaksi pengguna dengan website atau aplikasi. GA4 secara default melacak beberapa events seperti page_view, scroll, click, dan lainnya. Anda juga dapat membuat custom events sesuai kebutuhan.
      </p>

      <h3>Parameters</h3>
      <p>
        Parameters adalah informasi tambahan yang dikirim bersama events. Contohnya: value, currency, item_name, dan lainnya.
      </p>

      <h3>Dimensions & Metrics</h3>
      <p>
        Dimensions adalah atribut deskriptif (seperti country, device category), sedangkan metrics adalah pengukuran numerik (seperti sessions, users, revenue).
      </p>

      <h2>Persiapan Sebelum Setup</h2>
      <p>
        Sebelum memulai setup GA4, pastikan Anda memiliki:
      </p>
      <ul>
        <li>Akses ke Google Analytics account</li>
        <li>Akses ke Google Tag Manager (jika menggunakan GTM)</li>
        <li>Informasi website yang akan di-track</li>
        <li>Daftar goals/conversions yang ingin diukur</li>
      </ul>

      <p>
        Setelah memahami dasar-dasar GA4, langkah selanjutnya adalah melakukan setup GA4 Property. Mari kita lanjutkan ke artikel berikutnya untuk panduan setup yang lebih detail.
      </p>
    </DocLayout>
  )
}

      <h2>Keunggulan GA4</h2>
      <ul>
        <li><strong>Event-Based Tracking:</strong> GA4 menggunakan model event-based yang lebih fleksibel dibandingkan session-based di Universal Analytics</li>
        <li><strong>Cross-Platform Tracking:</strong> Dapat melacak pengguna di berbagai platform (web, iOS, Android) dalam satu property</li>
        <li><strong>Machine Learning:</strong> Menggunakan AI untuk memberikan insights otomatis dan prediksi perilaku pengguna</li>
        <li><strong>Privacy-First:</strong> Dibangun dengan fokus pada privasi dan compliance dengan regulasi seperti GDPR dan CCPA</li>
        <li><strong>Real-Time Reporting:</strong> Data tersedia secara real-time untuk analisis yang lebih cepat</li>
      </ul>

      <h2>Mengapa Penting untuk Client Whitelist?</h2>
      <p>
        Untuk Client Whitelist, integrasi GA4 sangat penting karena:
      </p>
      <ul>
        <li>Memungkinkan tracking yang lebih akurat untuk campaign Meta Ads</li>
        <li>Memberikan data yang lebih detail tentang conversion dan user journey</li>
        <li>Mendukung pengambilan keputusan berbasis data yang lebih baik</li>
        <li>Memungkinkan sinkronisasi data antara Meta Pixel dan GA4 untuk analisis yang lebih komprehensif</li>
      </ul>

      <h2>Konsep Dasar GA4</h2>
      <h3>Events</h3>
      <p>
        Events adalah interaksi pengguna dengan website atau aplikasi. GA4 secara default melacak beberapa events seperti page_view, scroll, click, dan lainnya. Anda juga dapat membuat custom events sesuai kebutuhan.
      </p>

      <h3>Parameters</h3>
      <p>
        Parameters adalah informasi tambahan yang dikirim bersama events. Contohnya: value, currency, item_name, dan lainnya.
      </p>

      <h3>Dimensions & Metrics</h3>
      <p>
        Dimensions adalah atribut deskriptif (seperti country, device category), sedangkan metrics adalah pengukuran numerik (seperti sessions, users, revenue).
      </p>

      <h2>Persiapan Sebelum Setup</h2>
      <p>
        Sebelum memulai setup GA4, pastikan Anda memiliki:
      </p>
      <ul>
        <li>Akses ke Google Analytics account</li>
        <li>Akses ke Google Tag Manager (jika menggunakan GTM)</li>
        <li>Informasi website yang akan di-track</li>
        <li>Daftar goals/conversions yang ingin diukur</li>
      </ul>

      <p>
        Setelah memahami dasar-dasar GA4, langkah selanjutnya adalah melakukan setup GA4 Property. Mari kita lanjutkan ke artikel berikutnya untuk panduan setup yang lebih detail.
      </p>
    </DocLayout>
  )
}