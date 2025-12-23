import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Melihat Data di Events Manager"
      categoryHref="/whitelist/monitoring"
      categoryName="Monitoring"
      description="Tutorial melihat dan menganalisis data di Meta Events Manager"
      nextHref="/whitelist/monitoring/ga4-data"
      nextTitle="Melihat Data di GA4"
    >
      <h2>Apa itu Meta Events Manager?</h2>
      <p>
        Meta Events Manager adalah tool dari Meta (Facebook) yang memungkinkan Anda untuk melihat, mengelola, dan memonitor events yang dikirim dari Meta Pixel. Ini adalah central hub untuk semua tracking activities di Meta platform.
      </p>

      <h2>Akses Events Manager</h2>
      <ol>
        <li>Login ke <a href="https://business.facebook.com" target="_blank" rel="noopener noreferrer">Meta Business Suite</a></li>
        <li>Buka <strong>"Events Manager"</strong> dari menu</li>
        <li>Atau akses langsung: <a href="https://business.facebook.com/events_manager" target="_blank" rel="noopener noreferrer">business.facebook.com/events_manager</a></li>
      </ol>

      <h2>Navigasi Events Manager</h2>
      <h3>1. Overview Tab</h3>
      <p>Menampilkan summary events:</p>
      <ul>
        <li>Total events dalam periode tertentu</li>
        <li>Event breakdown per event type</li>
        <li>Trends dan graphs</li>
        <li>Top events</li>
      </ul>

      <h3>2. Test Events Tab</h3>
      <p>Untuk testing dan debugging:</p>
      <ul>
        <li>Lihat events secara real-time</li>
        <li>Test events dari website</li>
        <li>Verify events terkirim dengan benar</li>
        <li>Debug event parameters</li>
      </ul>

      <h3>3. Data Sources Tab</h3>
      <p>Manage data sources (Pixels, Conversions API):</p>
      <ul>
        <li>View semua pixels</li>
        <li>Setup Conversions API</li>
        <li>Configure data sources</li>
        <li>Manage access</li>
      </ul>

      <h2>Melihat Event Data</h2>
      <h3>Event Details</h3>
      <ol>
        <li>Klik pada event name di Overview</li>
        <li>Lihat event details:
          <ul>
            <li>Event count</li>
            <li>Parameters yang dikirim</li>
            <li>Timestamps</li>
            <li>Source information</li>
          </ul>
        </li>
      </ol>

      <h3>Filter Events</h3>
      <p>Gunakan filters untuk melihat events spesifik:</p>
      <ul>
        <li>Filter by date range</li>
        <li>Filter by event type</li>
        <li>Filter by source</li>
        <li>Filter by parameters</li>
      </ul>

      <h2>Key Metrics di Events Manager</h2>
      <h3>1. Event Count</h3>
      <ul>
        <li>Total jumlah events yang terkirim</li>
        <li>Breakdown per event type</li>
        <li>Trends over time</li>
      </ul>

      <h3>2. Event Value</h3>
      <ul>
        <li>Total value dari events (untuk purchase events)</li>
        <li>Average value per event</li>
        <li>Value trends</li>
      </ul>

      <h3>3. Event Quality</h3>
      <ul>
        <li>Data quality score</li>
        <li>Match quality</li>
        <li>Attribution quality</li>
      </ul>

      <h2>Test Events</h2>
      <h3>Menggunakan Test Events</h3>
      <ol>
        <li>Buka <strong>"Test Events"</strong> tab</li>
        <li>Pilih pixel yang ingin di-test</li>
        <li>Trigger event di website</li>
        <li>Lihat event muncul di Test Events secara real-time</li>
        <li>Verify event parameters</li>
      </ol>

      <h3>Event Debugging</h3>
      <p>Gunakan Test Events untuk debug:</p>
      <ul>
        <li>Verify events terkirim</li>
        <li>Check event parameters</li>
        <li>Identify issues</li>
        <li>Test fixes</li>
      </ul>

      <h2>Data Quality</h2>
      <h3>Data Quality Score</h3>
      <p>Events Manager menampilkan data quality score:</p>
      <ul>
        <li><strong>Good:</strong> Data quality tinggi, reliable untuk optimization</li>
        <li><strong>Fair:</strong> Data quality sedang, beberapa improvements diperlukan</li>
        <li><strong>Poor:</strong> Data quality rendah, improvements critical</li>
      </ul>

      <h3>Improving Data Quality</h3>
      <ul>
        <li>Setup Conversions API untuk better match quality</li>
        <li>Send complete user data</li>
        <li>Use server-side tracking</li>
        <li>Implement proper deduplication</li>
      </ul>

      <h2>Export Data</h2>
      <ol>
        <li>Pilih events yang ingin di-export</li>
        <li>Klik <strong>"Export"</strong></li>
        <li>Pilih format (CSV, JSON)</li>
        <li>Download file</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Regular Monitoring:</strong> Check Events Manager secara berkala</li>
        <li><strong>Test Events:</strong> Gunakan Test Events untuk verify setup</li>
        <li><strong>Data Quality:</strong> Monitor dan improve data quality score</li>
        <li><strong>Documentation:</strong> Dokumentasikan semua events dan parameters</li>
      </ul>
    </ArticleLayout>
  )
}