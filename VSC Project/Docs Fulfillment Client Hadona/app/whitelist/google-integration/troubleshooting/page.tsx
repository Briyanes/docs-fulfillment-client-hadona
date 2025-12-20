import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Troubleshooting GA4"
      categoryHref="/whitelist/google-integration"
      categoryName="Google Integration"
      prevHref="/whitelist/google-integration/custom-dimensions"
      prevTitle="Custom Dimensions"
      nextHref="/whitelist/google-integration/best-practices"
      nextTitle="Best Practices"
    >
      <h2>Common Issues & Solutions</h2>
      
      <h3>1. No Data in GA4</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Realtime reports tidak menampilkan data</li>
        <li>Standard reports kosong</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Verify Installation:</strong>
          <ul>
            <li>Cek GA4 tag sudah terinstall di website</li>
            <li>Pastikan Measurement ID benar</li>
            <li>Gunakan browser DevTools untuk cek network requests</li>
          </ul>
        </li>
        <li><strong>Check Ad Blockers:</strong>
          <ul>
            <li>Disable ad blockers untuk testing</li>
            <li>Cek browser extensions yang mungkin memblokir tracking</li>
          </ul>
        </li>
        <li><strong>Verify Property Settings:</strong>
          <ul>
            <li>Pastikan property aktif</li>
            <li>Cek data stream status</li>
          </ul>
        </li>
      </ol>

      <h3>2. Events Tidak Terkirim</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Events tidak muncul di Realtime</li>
        <li>Custom events tidak terdeteksi</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Check Event Syntax:</strong>
          <pre><code>{`// Correct
gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 100.00
});

// Incorrect
gtag('event', 'Purchase'); // Wrong case`}</code></pre>
        </li>
        <li><strong>Verify GTM Setup (jika menggunakan GTM):</strong>
          <ul>
            <li>Cek trigger sudah benar</li>
            <li>Pastikan GA4 config tag fire sebelum event tag</li>
            <li>Use Preview mode untuk debug</li>
          </ul>
        </li>
        <li><strong>Check Event Names:</strong>
          <ul>
            <li>Pastikan sesuai dengan GA4 naming convention</li>
            <li>Hindari reserved event names tanpa prefix</li>
          </ul>
        </li>
      </ol>

      <h3>3. Duplicate Data</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Page views atau events terhitung dua kali</li>
        <li>User count tidak akurat</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Check for Duplicate Tags:</strong>
          <ul>
            <li>Pastikan GA4 tag hanya diinstall sekali</li>
            <li>Cek tidak ada duplicate di GTM</li>
            <li>Verify tidak ada hardcoded tag + GTM tag bersamaan</li>
          </ul>
        </li>
        <li><strong>Review Page Load:</strong>
          <ul>
            <li>Pastikan tag tidak fire multiple times pada page load</li>
            <li>Cek untuk SPA (Single Page App) issues</li>
          </ul>
        </li>
      </ol>

      <h3>4. Data Sampling</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Report menunjukkan "This report is based on sampled data"</li>
        <li>Data tidak 100% akurat</li>
      </ul>
      <h4>Solutions:</h4>
      <ul>
        <li><strong>Use Realtime Reports:</strong> Realtime tidak di-sample</li>
        <li><strong>Reduce Date Range:</strong> Semakin pendek date range, semakin kecil kemungkinan sampling</li>
        <li><strong>Use Exploration Reports:</strong> Lebih sedikit sampling dibanding standard reports</li>
        <li><strong>Upgrade to GA4 360:</strong> Untuk unsampled data (paid)</li>
      </ul>

      <h3>5. Conversion Events Tidak Terhitung</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Conversions tidak muncul di reports</li>
        <li>Conversion count 0 meskipun events terkirim</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Verify Event Marked as Conversion:</strong>
          <ul>
            <li>Buka <strong>"Admin"</strong> → <strong>"Events"</strong></li>
            <li>Pastikan toggle "Mark as conversion" aktif</li>
          </ul>
        </li>
        <li><strong>Check Event Parameters:</strong>
          <ul>
            <li>Pastikan event dikirim dengan benar</li>
            <li>Verify event name exact match</li>
          </ul>
        </li>
        <li><strong>Wait for Processing:</strong>
          <ul>
            <li>Conversions mungkin delay 24-48 jam</li>
            <li>Cek Realtime untuk immediate verification</li>
          </ul>
        </li>
      </ol>

      <h3>6. Missing E-commerce Data</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Purchase events tidak menampilkan product details</li>
        <li>Revenue tidak terhitung</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Verify Purchase Event Parameters:</strong>
          <pre><code>{`gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 100.00,
  'currency': 'USD',
  'items': [{
    'item_id': 'SKU123',
    'item_name': 'Product Name',
    'category': 'Category',
    'quantity': 1,
    'price': 100.00
  }]
});`}</code></pre>
        </li>
        <li><strong>Check Items Array:</strong>
          <ul>
            <li>Pastikan items array tidak kosong</li>
            <li>Verify semua required fields terisi</li>
          </ul>
        </li>
      </ol>

      <h2>Debugging Tools</h2>
      <h3>1. GA4 DebugView</h3>
      <ol>
        <li>Enable debug mode di GTM atau tambahkan <code>debug_mode: true</code></li>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"DebugView"</strong></li>
        <li>Lihat events secara real-time dengan detail lengkap</li>
      </ol>

      <h3>2. Browser DevTools</h3>
      <ol>
        <li>Buka DevTools (F12)</li>
        <li>Tab <strong>"Network"</strong></li>
        <li>Filter: <code>collect</code> atau <code>gtag</code></li>
        <li>Lihat requests ke Google Analytics</li>
        <li>Cek payload untuk verify parameters</li>
      </ol>

      <h3>3. GA Debugger Extension</h3>
      <ol>
        <li>Install <a href="https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna" target="_blank" rel="noopener noreferrer">GA Debugger</a></li>
        <li>Aktifkan extension</li>
        <li>Buka Console (F12)</li>
        <li>Lihat debug messages untuk semua GA4 calls</li>
      </ol>

      <h3>4. Google Tag Assistant</h3>
      <ol>
        <li>Install <a href="https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk" target="_blank" rel="noopener noreferrer">Tag Assistant Legacy</a></li>
        <li>Enable recording</li>
        <li>Navigate website</li>
        <li>Lihat summary dan errors</li>
      </ol>

      <h2>Prevention Tips</h2>
      <ul>
        <li><strong>Test Before Production:</strong> Selalu test di staging environment</li>
        <li><strong>Document Setup:</strong> Dokumentasikan semua tracking setup</li>
        <li><strong>Regular Audits:</strong> Lakukan audit tracking secara berkala</li>
        <li><strong>Monitor Realtime:</strong> Cek Realtime reports secara rutin</li>
        <li><strong>Use GTM:</strong> GTM memudahkan debugging dan maintenance</li>
      </ul>

      <h2>Getting Help</h2>
      <p>Jika masalah masih belum teratasi:</p>
      <ul>
        <li><strong>GA4 Help Center:</strong> <a href="https://support.google.com/analytics" target="_blank" rel="noopener noreferrer">support.google.com/analytics</a></li>
        <li><strong>GA4 Community:</strong> <a href="https://support.google.com/analytics/community" target="_blank" rel="noopener noreferrer">Analytics Community Forum</a></li>
        <li><strong>Contact Support:</strong> Jika menggunakan GA4 360, contact support team</li>
      </ul>
    </DocLayout>
  )
}

        <li>Realtime reports tidak menampilkan data</li>
        <li>Standard reports kosong</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Verify Installation:</strong>
          <ul>
            <li>Cek GA4 tag sudah terinstall di website</li>
            <li>Pastikan Measurement ID benar</li>
            <li>Gunakan browser DevTools untuk cek network requests</li>
          </ul>
        </li>
        <li><strong>Check Ad Blockers:</strong>
          <ul>
            <li>Disable ad blockers untuk testing</li>
            <li>Cek browser extensions yang mungkin memblokir tracking</li>
          </ul>
        </li>
        <li><strong>Verify Property Settings:</strong>
          <ul>
            <li>Pastikan property aktif</li>
            <li>Cek data stream status</li>
          </ul>
        </li>
      </ol>

      <h3>2. Events Tidak Terkirim</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Events tidak muncul di Realtime</li>
        <li>Custom events tidak terdeteksi</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Check Event Syntax:</strong>
          <pre><code>{`// Correct
gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 100.00
});

// Incorrect
gtag('event', 'Purchase'); // Wrong case`}</code></pre>
        </li>
        <li><strong>Verify GTM Setup (jika menggunakan GTM):</strong>
          <ul>
            <li>Cek trigger sudah benar</li>
            <li>Pastikan GA4 config tag fire sebelum event tag</li>
            <li>Use Preview mode untuk debug</li>
          </ul>
        </li>
        <li><strong>Check Event Names:</strong>
          <ul>
            <li>Pastikan sesuai dengan GA4 naming convention</li>
            <li>Hindari reserved event names tanpa prefix</li>
          </ul>
        </li>
      </ol>

      <h3>3. Duplicate Data</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Page views atau events terhitung dua kali</li>
        <li>User count tidak akurat</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Check for Duplicate Tags:</strong>
          <ul>
            <li>Pastikan GA4 tag hanya diinstall sekali</li>
            <li>Cek tidak ada duplicate di GTM</li>
            <li>Verify tidak ada hardcoded tag + GTM tag bersamaan</li>
          </ul>
        </li>
        <li><strong>Review Page Load:</strong>
          <ul>
            <li>Pastikan tag tidak fire multiple times pada page load</li>
            <li>Cek untuk SPA (Single Page App) issues</li>
          </ul>
        </li>
      </ol>

      <h3>4. Data Sampling</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Report menunjukkan "This report is based on sampled data"</li>
        <li>Data tidak 100% akurat</li>
      </ul>
      <h4>Solutions:</h4>
      <ul>
        <li><strong>Use Realtime Reports:</strong> Realtime tidak di-sample</li>
        <li><strong>Reduce Date Range:</strong> Semakin pendek date range, semakin kecil kemungkinan sampling</li>
        <li><strong>Use Exploration Reports:</strong> Lebih sedikit sampling dibanding standard reports</li>
        <li><strong>Upgrade to GA4 360:</strong> Untuk unsampled data (paid)</li>
      </ul>

      <h3>5. Conversion Events Tidak Terhitung</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Conversions tidak muncul di reports</li>
        <li>Conversion count 0 meskipun events terkirim</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Verify Event Marked as Conversion:</strong>
          <ul>
            <li>Buka <strong>"Admin"</strong> → <strong>"Events"</strong></li>
            <li>Pastikan toggle "Mark as conversion" aktif</li>
          </ul>
        </li>
        <li><strong>Check Event Parameters:</strong>
          <ul>
            <li>Pastikan event dikirim dengan benar</li>
            <li>Verify event name exact match</li>
          </ul>
        </li>
        <li><strong>Wait for Processing:</strong>
          <ul>
            <li>Conversions mungkin delay 24-48 jam</li>
            <li>Cek Realtime untuk immediate verification</li>
          </ul>
        </li>
      </ol>

      <h3>6. Missing E-commerce Data</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Purchase events tidak menampilkan product details</li>
        <li>Revenue tidak terhitung</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Verify Purchase Event Parameters:</strong>
          <pre><code>{`gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 100.00,
  'currency': 'USD',
  'items': [{
    'item_id': 'SKU123',
    'item_name': 'Product Name',
    'category': 'Category',
    'quantity': 1,
    'price': 100.00
  }]
});`}</code></pre>
        </li>
        <li><strong>Check Items Array:</strong>
          <ul>
            <li>Pastikan items array tidak kosong</li>
            <li>Verify semua required fields terisi</li>
          </ul>
        </li>
      </ol>

      <h2>Debugging Tools</h2>
      <h3>1. GA4 DebugView</h3>
      <ol>
        <li>Enable debug mode di GTM atau tambahkan <code>debug_mode: true</code></li>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"DebugView"</strong></li>
        <li>Lihat events secara real-time dengan detail lengkap</li>
      </ol>

      <h3>2. Browser DevTools</h3>
      <ol>
        <li>Buka DevTools (F12)</li>
        <li>Tab <strong>"Network"</strong></li>
        <li>Filter: <code>collect</code> atau <code>gtag</code></li>
        <li>Lihat requests ke Google Analytics</li>
        <li>Cek payload untuk verify parameters</li>
      </ol>

      <h3>3. GA Debugger Extension</h3>
      <ol>
        <li>Install <a href="https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna" target="_blank" rel="noopener noreferrer">GA Debugger</a></li>
        <li>Aktifkan extension</li>
        <li>Buka Console (F12)</li>
        <li>Lihat debug messages untuk semua GA4 calls</li>
      </ol>

      <h3>4. Google Tag Assistant</h3>
      <ol>
        <li>Install <a href="https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk" target="_blank" rel="noopener noreferrer">Tag Assistant Legacy</a></li>
        <li>Enable recording</li>
        <li>Navigate website</li>
        <li>Lihat summary dan errors</li>
      </ol>

      <h2>Prevention Tips</h2>
      <ul>
        <li><strong>Test Before Production:</strong> Selalu test di staging environment</li>
        <li><strong>Document Setup:</strong> Dokumentasikan semua tracking setup</li>
        <li><strong>Regular Audits:</strong> Lakukan audit tracking secara berkala</li>
        <li><strong>Monitor Realtime:</strong> Cek Realtime reports secara rutin</li>
        <li><strong>Use GTM:</strong> GTM memudahkan debugging dan maintenance</li>
      </ul>

      <h2>Getting Help</h2>
      <p>Jika masalah masih belum teratasi:</p>
      <ul>
        <li><strong>GA4 Help Center:</strong> <a href="https://support.google.com/analytics" target="_blank" rel="noopener noreferrer">support.google.com/analytics</a></li>
        <li><strong>GA4 Community:</strong> <a href="https://support.google.com/analytics/community" target="_blank" rel="noopener noreferrer">Analytics Community Forum</a></li>
        <li><strong>Contact Support:</strong> Jika menggunakan GA4 360, contact support team</li>
      </ul>
    </DocLayout>
  )
}