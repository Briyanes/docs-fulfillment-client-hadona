import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Troubleshooting Sync"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      description="Panduan mengatasi masalah sinkronisasi data ke GA4"
      prevHref="/whitelist/data-sync/data-validation"
      prevTitle="Data Validation"
      nextHref="/whitelist/data-sync/monitoring"
      nextTitle="Monitoring Sync Status"
    >
      <h2>Common Sync Issues & Solutions</h2>
      
      <h3>1. Events Tidak Terkirim ke GA4</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Events dari Meta Pixel tidak muncul di GA4</li>
        <li>Data tidak sinkron antara platforms</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Check GTM Setup:</strong>
          <ul>
            <li>Verify trigger sudah benar</li>
            <li>Check GA4 tag sudah aktif</li>
            <li>Verify tag firing order</li>
          </ul>
        </li>
        <li><strong>Check Meta Pixel:</strong>
          <ul>
            <li>Verify Meta Pixel terinstall dengan benar</li>
            <li>Check events terkirim di Meta Events Manager</li>
            <li>Verify event names dan parameters</li>
          </ul>
        </li>
        <li><strong>Check Browser Console:</strong>
          <ul>
            <li>Look for JavaScript errors</li>
            <li>Check network requests ke GA4</li>
            <li>Verify requests successful</li>
          </ul>
        </li>
      </ol>

      <h3>2. Data Tidak Akurat</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Values berbeda antara Meta Pixel dan GA4</li>
        <li>Event counts tidak match</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Verify Parameter Mapping:</strong>
          <ul>
            <li>Check parameter mapping sudah benar</li>
            <li>Verify data transformation logic</li>
            <li>Test dengan sample data</li>
          </ul>
        </li>
        <li><strong>Check Data Types:</strong>
          <ul>
            <li>Verify data types sesuai (string, number)</li>
            <li>Check untuk type conversion issues</li>
          </ul>
        </li>
        <li><strong>Compare Data:</strong>
          <ul>
            <li>Export data dari kedua platforms</li>
            <li>Compare values side-by-side</li>
            <li>Identify discrepancies</li>
          </ul>
        </li>
      </ol>

      <h3>3. Duplicate Events</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Events terhitung dua kali di GA4</li>
        <li>Data inflated</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Check for Multiple Tags:</strong>
          <ul>
            <li>Verify tidak ada duplicate GA4 tags</li>
            <li>Check tidak ada hardcoded + GTM tags bersamaan</li>
          </ul>
        </li>
        <li><strong>Check Trigger Logic:</strong>
          <ul>
            <li>Verify trigger tidak fire multiple times</li>
            <li>Check untuk SPA (Single Page App) issues</li>
          </ul>
        </li>
        <li><strong>Use Transaction ID:</strong>
          <ul>
            <li>Untuk purchase events, gunakan transaction_id untuk deduplication</li>
            <li>GA4 akan automatically deduplicate berdasarkan transaction_id</li>
          </ul>
        </li>
      </ol>

      <h3>4. Missing Parameters</h3>
      <h4>Symptoms:</h4>
      <ul>
        <li>Parameters tidak muncul di GA4</li>
        <li>Data incomplete</li>
      </ul>
      <h4>Solutions:</h4>
      <ol>
        <li><strong>Check Parameter Mapping:</strong>
          <ul>
            <li>Verify semua parameters ter-map</li>
            <li>Check parameter names sudah benar</li>
          </ul>
        </li>
        <li><strong>Check Data Layer:</strong>
          <ul>
            <li>Verify data layer variables sudah benar</li>
            <li>Check values tidak null atau undefined</li>
          </ul>
        </li>
        <li><strong>Test Parameters:</strong>
          <ul>
            <li>Test dengan hardcoded values</li>
            <li>Verify parameters terkirim</li>
          </ul>
        </li>
      </ol>

      <h2>Debugging Tools</h2>
      <h3>1. GTM Preview Mode</h3>
      <ol>
        <li>Enable GTM Preview mode</li>
        <li>Trigger events di website</li>
        <li>Check tag firing status</li>
        <li>Verify data layer values</li>
        <li>Check untuk errors</li>
      </ol>

      <h3>2. GA4 DebugView</h3>
      <ol>
        <li>Enable debug mode</li>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"DebugView"</strong></li>
        <li>Monitor events secara real-time</li>
        <li>Check event parameters</li>
        <li>Verify data accuracy</li>
      </ol>

      <h3>3. Browser DevTools</h3>
      <ol>
        <li>Buka DevTools (F12)</li>
        <li>Tab <strong>"Network"</strong></li>
        <li>Filter: <code>collect</code> atau <code>gtag</code></li>
        <li>Check requests ke GA4</li>
        <li>Inspect payload</li>
      </ol>

      <h2>Prevention Tips</h2>
      <ul>
        <li><strong>Test Before Production:</strong> Selalu test di staging environment</li>
        <li><strong>Document Setup:</strong> Dokumentasikan semua sync setup</li>
        <li><strong>Regular Monitoring:</strong> Monitor sync status secara berkala</li>
        <li><strong>Error Handling:</strong> Implement proper error handling</li>
        <li><strong>Alerts:</strong> Setup alerts untuk sync failures</li>
      </ul>
    </ArticleLayout>
  )
}
