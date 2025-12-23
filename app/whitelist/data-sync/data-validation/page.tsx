import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Data Validation"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      description="Tutorial validasi data untuk memastikan akurasi sinkronisasi"
      prevHref="/whitelist/data-sync/mapping-events"
      prevTitle="Mapping Events"
      nextHref="/whitelist/data-sync/troubleshooting"
      nextTitle="Troubleshooting Sync"
    >
      <h2>Apa itu Data Validation?</h2>
      <p>
        Data validation adalah proses memverifikasi bahwa data yang disinkronkan antara Meta Pixel dan Google Analytics 4 akurat, lengkap, dan konsisten. Validation yang proper memastikan bahwa keputusan bisnis dibuat berdasarkan data yang valid.
      </p>

      <h2>Mengapa Data Validation Penting?</h2>
      <ul>
        <li><strong>Data Accuracy:</strong> Memastikan data yang dilaporkan akurat</li>
        <li><strong>Trustworthy Insights:</strong> Keputusan bisnis berdasarkan data yang valid</li>
        <li><strong>Early Detection:</strong> Mendeteksi issues sejak dini</li>
        <li><strong>Cost Optimization:</strong> Mengoptimalkan ad spend berdasarkan data valid</li>
        <li><strong>Performance Tracking:</strong> Mengukur performa dengan akurat</li>
      </ul>

      <h2>Types of Data Validation</h2>
      <h3>1. Quantitative Validation</h3>
      <p>Validasi berdasarkan jumlah data:</p>
      <ul>
        <li><strong>Event Counts:</strong> Compare jumlah events antara Meta dan GA4</li>
        <li><strong>User Counts:</strong> Compare jumlah users</li>
        <li><strong>Session Counts:</strong> Compare jumlah sessions</li>
        <li><strong>Conversion Counts:</strong> Compare jumlah conversions</li>
      </ul>

      <h3>2. Qualitative Validation</h3>
      <p>Validasi berdasarkan kualitas data:</p>
      <ul>
        <li><strong>Data Completeness:</strong> Semua required parameters terisi</li>
        <li><strong>Data Consistency:</strong> Data konsisten antar platforms</li>
        <li><strong>Data Format:</strong> Format data sesuai specification</li>
        <li><strong>Data Accuracy:</strong> Value data akurat</li>
      </ul>

      <h2>Validation Methods</h2>
      <h3>1. Manual Validation</h3>
      <h4>Realtime Comparison</h4>
      <ol>
        <li>Buka Meta Events Manager → <strong>"Test Events"</strong></li>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Realtime"</strong></li>
        <li>Trigger event di website</li>
        <li>Compare event muncul di kedua platforms</li>
        <li>Check event parameters sama</li>
      </ol>

      <h4>Side-by-Side Report Comparison</h4>
      <ol>
        <li>Export data dari Meta Events Manager (24-48 jam period)</li>
        <li>Export data dari GA4 (period yang sama)</li>
        <li>Compare metrics:
          <ul>
            <li>Page views</li>
            <li>Events</li>
            <li>Purchases</li>
            <li>Revenue</li>
          </ul>
        </li>
        <li>Identify discrepancies</li>
        <li>Investigate causes</li>
      </ol>

      <h3>2. Automated Validation</h3>
      <p>Setup automated validation scripts:</p>
      <pre><code>{`// Example: Automated validation script
async function validateData() {
  const dateRange = 'yesterday';

  // Get data from Meta
  const metaData = await getMetaInsights(dateRange);

  // Get data from GA4
  const ga4Data = await getGA4Data(dateRange);

  // Compare
  const comparison = {
    eventCount: {
      meta: metaData.events,
      ga4: ga4Data.events,
      variance: calculateVariance(metaData.events, ga4Data.events)
    },
    revenue: {
      meta: metaData.revenue,
      ga4: ga4Data.revenue,
      variance: calculateVariance(metaData.revenue, ga4Data.revenue)
    }
  };

  // Alert jika variance di atas threshold
  if (comparison.eventCount.variance > 10) {
    sendAlert('High variance in event counts');
  }

  return comparison;
}`}</code></pre>

      <h2>Validation Checklist</h2>
      <h3>Initial Validation (Setelah Setup)</h3>
      <ul>
        <li>✅ Pixel terdeteksi oleh Meta Pixel Helper</li>
        <li>✅ GA4 tag terdeteksi oleh Tag Assistant</li>
        <li>✅ Test events muncul di Meta Events Manager</li>
        <li>✅ Test events muncul di GA4 Realtime</li>
        <li>✅ Event parameters terkirim dengan benar</li>
        <li>✅ Conversion events ter-track</li>
      </ul>

      <h3>Daily Validation</h3>
      <ul>
        <li>✅ Check Realtime reports untuk verify tracking aktif</li>
        <li>✅ Verify critical events (purchases, leads) terkirim</li>
        <li>✅ Check untuk anomalies atau spikes</li>
        <li>✅ Review error logs</li>
      </ul>

      <h3>Weekly Validation</h3>
      <ul>
        <li>✅ Compare event counts dengan previous week</li>
        <li>✅ Side-by-side comparison Meta vs GA4</li>
        <li>✅ Check data accuracy</li>
        <li>✅ Review parameter mapping</li>
        <li>✅ Verify revenue tracking</li>
      </ul>

      <h2>Acceptable Variance Thresholds</h2>
      <p>Beberapa variance antar platforms adalah normal:</p>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Acceptable Variance</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Page Views</td>
            <td>&lt; 10%</td>
            <td>Bisa lebih tinggi karena ad blockers</td>
          </tr>
          <tr>
            <td>Sessions</td>
            <td>&lt; 15%</td>
            <td>Session definition berbeda</td>
          </tr>
          <tr>
            <td>Users</td>
            <td>&lt; 20%</td>
            <td>User identification methods berbeda</td>
          </tr>
          <tr>
            <td>Events</td>
            <td>&lt; 10%</td>
            <td>Should match closely</td>
          </tr>
          <tr>
            <td>Purchases</td>
            <td>&lt; 5%</td>
            <td>Should match sangat closely</td>
          </tr>
          <tr>
            <td>Revenue</td>
            <td>&lt; 2%</td>
            <td>Should match hampir persis</td>
          </tr>
        </tbody>
      </table>

      <h2>Common Validation Issues</h2>
      <h3>1. High Variance in Event Counts</h3>
      <h4>Possible Causes:</h4>
      <ul>
        <li>Events tidak ter-track di salah satu platform</li>
        <li>Trigger conditions berbeda</li>
        <li>Filter atau exclusion rules</li>
        <li>Time zone differences</li>
      </ul>
      <h4>Solutions:</h4>
      <ul>
        <li>Verify event tracking setup di kedua platforms</li>
        <li>Check trigger configurations</li>
        <li>Review filter settings</li>
        <li>Use same time zone untuk comparison</li>
      </ul>

      <h3>2. Missing Parameters</h3>
      <h4>Possible Causes:</h4>
      <ul>
        <li>Parameter mapping tidak lengkap</li>
        <li>Data tidak tersedia di source</li>
        <li>Incorrect parameter names</li>
      </ul>
      <h4>Solutions:</h4>
      <ul>
        <li>Verify parameter mapping complete</li>
        <li>Check data layer variables</li>
        <li>Validate parameter names match</li>
      </ul>

      <h3>3. Revenue Mismatch</h3>
      <h4>Possible Causes:</h4>
      <ul>
        <li>Tax/shipping included di satu platform tapi tidak di lainnya</li>
        <li>Currency conversion issues</li>
        <li>Refunds tidak di-handle sama</li>
        <li>Time zone differences (orders counted di different days)</li>
      </ul>
      <h4>Solutions:</h4>
      <ul>
        <li>Ensure revenue calculation sama</li>
        <li>Use consistent currency</li>
        <li>Handle refunds consistently</li>
        <li>Use same time zone</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Regular Validation:</strong> Lakukan validation secara berkala (daily/weekly)</li>
        <li><strong>Document Discrepancies:</strong> Catat semua discrepancies dan investigations</li>
        <li><strong>Set Thresholds:</strong> Tentukan acceptable variance thresholds</li>
        <li><strong>Automate:</strong> Automate validation sebanyak mungkin</li>
        <li><strong>Investigate Anomalies:</strong> Investigate perbedaan yang signifikan</li>
        <li><strong>Continuous Monitoring:</strong> Monitor data quality secara continuous</li>
      </ul>

      <h2>Validation Tools</h2>
      <h3>1. Meta Pixel Helper</h3>
      <ul>
        <li>Chrome extension untuk verify Pixel</li>
        <li>Check Pixel firing</li>
        <li>Verify event parameters</li>
      </ul>

      <h3>2. GA4 DebugView</h3>
      <ul>
        <li>Real-time event debugging</li>
        <li>Verify event parameters</li>
        <li>Check event firing</li>
      </ul>

      <h3>3. Tag Assistant</h3>
      <ul>
        <li>Verify tag firing</li>
        <li>Check untuk errors</li>
        <li>Debug tag configuration</li>
      </ul>

      <h3>4. Custom Scripts</h3>
      <ul>
        <li>Automated data comparison</li>
        <li>Alerts untuk discrepancies</li>
        <li>Scheduled validation reports</li>
      </ul>

      <h2>Next Steps</h2>
      <p>
        Setelah data validation setup, langkah selanjutnya adalah memahami troubleshooting untuk mengatasi issues yang mungkin muncul selama proses sync.
      </p>
    </ArticleLayout>
  )
}
