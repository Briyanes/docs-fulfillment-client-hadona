import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Authentication & Access"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      prevHref="/whitelist/google-integration/linking-google-ads"
      prevTitle="Linking Google Ads"
      nextHref="/whitelist/google-integration/event-mapping"
      nextTitle="Event Mapping"
    >
      <h2>Mengatur Authentication & Access di GA4</h2>
      <p>
        Mengatur authentication dan access control yang tepat sangat penting untuk keamanan data dan memastikan hanya orang yang berwenang yang dapat mengakses Google Analytics.
      </p>

      <h2>Level Access di GA4</h2>
      <h3>Account Level</h3>
      <p>Access di level account mempengaruhi semua properties di bawahnya:</p>
      <ul>
        <li><strong>No access:</strong> Tidak memiliki akses</li>
        <li><strong>Viewer:</strong> Hanya dapat melihat reports</li>
        <li><strong>Analyst:</strong> Dapat melihat reports dan membuat custom reports</li>
        <li><strong>Editor:</strong> Dapat mengedit konfigurasi dan melihat data</li>
        <li><strong>Administrator:</strong> Full access termasuk manage users</li>
      </ul>

      <h3>Property Level</h3>
      <p>Access di level property hanya mempengaruhi property tertentu:</p>
      <ul>
        <li><strong>No access:</strong> Tidak memiliki akses</li>
        <li><strong>Viewer:</strong> Hanya dapat melihat reports</li>
        <li><strong>Analyst:</strong> Dapat melihat dan membuat custom reports</li>
        <li><strong>Editor:</strong> Dapat mengedit konfigurasi property</li>
        <li><strong>Administrator:</strong> Full access untuk property tersebut</li>
      </ul>

      <h2>Menambahkan User</h2>
      <h3>Di Account Level</h3>
      <ol>
        <li>Login ke Google Analytics</li>
        <li>Klik <strong>"Admin"</strong> (ikon gear)</li>
        <li>Di kolom <strong>"Account"</strong>, klik <strong>"Account Access Management"</strong></li>
        <li>Klik <strong>"+"</strong> → <strong>"Add users"</strong></li>
        <li>Masukkan email address user</li>
        <li>Pilih role (Viewer, Analyst, Editor, atau Administrator)</li>
        <li>Klik <strong>"Add"</strong></li>
      </ol>

      <h3>Di Property Level</h3>
      <ol>
        <li>Di halaman Admin, di kolom <strong>"Property"</strong>, klik <strong>"Property Access Management"</strong></li>
        <li>Klik <strong>"+"</strong> → <strong>"Add users"</strong></li>
        <li>Masukkan email address</li>
        <li>Pilih role untuk property tersebut</li>
        <li>Klik <strong>"Add"</strong></li>
      </ol>

      <h2>Best Practices untuk Access Management</h2>
      <h3>Principle of Least Privilege</h3>
      <p>Berikan akses minimal yang diperlukan untuk setiap user:</p>
      <ul>
        <li>Marketing team: <strong>Viewer</strong> atau <strong>Analyst</strong></li>
        <li>Developers: <strong>Editor</strong> untuk property tertentu</li>
        <li>Managers: <strong>Analyst</strong> atau <strong>Editor</strong></li>
        <li>Admins: <strong>Administrator</strong> (minimal jumlahnya)</li>
      </ul>

      <h3>Regular Audit</h3>
      <ul>
        <li>Review access secara berkala (minimal setiap 3 bulan)</li>
        <li>Hapus access untuk user yang sudah tidak aktif</li>
        <li>Update role jika kebutuhan berubah</li>
      </ul>

      <h3>Group Management</h3>
      <p>Untuk organisasi besar, pertimbangkan menggunakan Google Groups:</p>
      <ul>
        <li>Buat Google Group untuk setiap team (contoh: marketing@company.com)</li>
        <li>Tambahkan group ke GA4 instead of individual emails</li>
        <li>Lebih mudah untuk manage access secara kolektif</li>
      </ul>

      <h2>Service Account untuk API Access</h2>
      <p>Jika Anda perlu mengakses GA4 via API (untuk automation atau integration):</p>
      <ol>
        <li>Buka <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer">Google Cloud Console</a></li>
        <li>Pilih project yang terkait dengan GA4 property</li>
        <li>Buka <strong>"IAM & Admin"</strong> → <strong>"Service Accounts"</strong></li>
        <li>Klik <strong>"Create Service Account"</strong></li>
        <li>Isi nama dan deskripsi</li>
        <li>Grant role: <strong>"Viewer"</strong> atau sesuai kebutuhan</li>
        <li>Create key (JSON) untuk authentication</li>
        <li>Tambahkan service account email ke GA4 property access</li>
      </ol>

      <h2>Two-Factor Authentication (2FA)</h2>
      <p>Untuk keamanan ekstra, pastikan semua admin accounts menggunakan 2FA:</p>
      <ol>
        <li>Buka <a href="https://myaccount.google.com/security" target="_blank" rel="noopener noreferrer">Google Account Security</a></li>
        <li>Aktifkan <strong>"2-Step Verification"</strong></li>
        <li>Setup authenticator app atau SMS verification</li>
      </ol>

      <h2>Removing Access</h2>
      <p>Untuk menghapus access user:</p>
      <ol>
        <li>Buka <strong>"Account Access Management"</strong> atau <strong>"Property Access Management"</strong></li>
        <li>Cari user yang ingin dihapus</li>
        <li>Klik ikon <strong>"Remove"</strong> (trash icon)</li>
        <li>Konfirmasi penghapusan</li>
      </ol>

      <h2>Troubleshooting</h2>
      <h3>User Tidak Menerima Invitation</h3>
      <ul>
        <li>Pastikan email address benar</li>
        <li>Cek spam folder</li>
        <li>Pastikan user memiliki Google account dengan email tersebut</li>
      </ul>

      <h3>Access Tidak Berfungsi</h3>
      <ul>
        <li>Pastikan user sudah logout dan login kembali</li>
        <li>Clear browser cache</li>
        <li>Pastikan tidak ada conflict dengan organization policies</li>
      </ul>
    </DocLayout>
  )
}
