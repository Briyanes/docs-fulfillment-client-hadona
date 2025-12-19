import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Monitoring Sync Status"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      prevHref="/whitelist/data-sync/troubleshooting"
      prevTitle="Troubleshooting Sync"
      
      
    >
      <h2>Apa itu Monitoring Sync Status?</h2>
      <p>
        Monitoring sync status adalah proses memantau kesehatan dan performa data synchronization antara Meta Pixel dan Google Analytics 4. Monitoring yang baik memastikan data selalu up-to-date dan akurat.
      </p>

      <h2>Mengapa Monitoring Penting?</h2>
      <ul>
        <li><strong>Early Detection:</strong> Mendeteksi issues lebih awal</li>
        <li><strong>Data Quality:</strong> Memastikan data quality tetap tinggi</li>
        <li><strong>Reliability:</strong> Memastikan sync berjalan dengan reliable</li>
        <li><strong>Performance:</strong> Monitor performa sync process</li>
        <li><strong>Alerting:</strong> Mendapatkan alerts untuk critical issues</li>
      </ul>

      <h2>Key Metrics untuk Monitor</h2>
      <h3>1. Sync Success Rate</h3>
      <ul>
        <li>Percentage events yang berhasil di-sync</li>
        <li>Target: > 95%</li>
        <li>Monitor untuk drops atau anomalies</li>
      </ul>

      <h3>2. Event Count Comparison</h3>
      <ul>
        <li>Compare event counts antara Meta Pixel dan GA4</li>
        <li>Monitor untuk discrepancies</li>
        <li>Set threshold untuk acceptable variance</li>
      </ul>

      <h3>3. Latency</h3>
      <ul>
        <li>Time antara event di Meta Pixel dan muncul di GA4</li>
        <li>Target: < 5 minutes untuk real-time sync</li>
        <li>Monitor untuk delays</li>
      </ul>

      <h3>4. Error Rate</h3>
      <ul>
        <li>Percentage events yang gagal di-sync</li>
        <li>Monitor error types</li>
        <li>Track error trends</li>
      </ul>

      <h2>Monitoring Methods</h2>
      <h3>1. GA4 Realtime Reports</h3>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Realtime"</strong></li>
        <li>Monitor events secara real-time</li>
        <li>Check event counts</li>
        <li>Verify events muncul dengan benar</li>
      </ol>

      <h3>2. Custom Dashboards</h3>
      <p>Buat custom dashboard untuk monitoring:</p>
      <ul>
        <li>Event counts per hour/day</li>
        <li>Success/failure rates</li>
        <li>Comparison charts (Meta vs GA4)</li>
        <li>Error logs</li>
      </ul>

      <h3>3. Automated Monitoring Scripts</h3>
      <p>Setup automated scripts untuk monitor:</p>
      <pre><code>{`// Example: Check sync status
async function checkSyncStatus() {
  // Get events from Meta Pixel (via API)
  const metaEvents = await getMetaPixelEvents();
  
  // Get events from GA4 (via Reporting API)
  const ga4Events = await getGA4Events();
  
  // Compare
  const syncRate = (ga4Events.count / metaEvents.count) * 100;
  
  // Alert if below threshold
  if (syncRate < 95) {
    sendAlert('Sync rate below threshold: ' + syncRate + '%');
  }
}`}</code></pre>

      <h2>Setting Up Alerts</h2>
      <h3>1. GA4 Custom Alerts</h3>
      <ol>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"Custom Alerts"</strong></li>
        <li>Create alert untuk:
          <ul>
            <li>Sudden drop in events</li>
            <li>Missing events</li>
            <li>Data anomalies</li>
          </ul>
        </li>
        <li>Set threshold dan frequency</li>
        <li>Configure email notifications</li>
      </ol>

      <h3>2. External Monitoring Tools</h3>
      <p>Gunakan tools seperti:</p>
      <ul>
        <li>Google Cloud Monitoring</li>
        <li>Datadog</li>
        <li>New Relic</li>
        <li>Custom monitoring solutions</li>
      </ul>

      <h2>Daily Monitoring Checklist</h2>
      <ul>
        <li>✅ Check GA4 Realtime untuk verify events terkirim</li>
        <li>✅ Review error logs</li>
        <li>✅ Compare event counts dengan previous day</li>
        <li>✅ Check untuk anomalies atau spikes</li>
        <li>✅ Verify critical events (purchases, leads) terkirim</li>
      </ul>

      <h2>Weekly Review</h2>
      <ul>
        <li>Review sync performance metrics</li>
        <li>Compare data accuracy</li>
        <li>Review error patterns</li>
        <li>Update documentation jika ada changes</li>
        <li>Plan improvements jika diperlukan</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Automate:</strong> Automate monitoring sebanyak mungkin</li>
        <li><strong>Set Thresholds:</strong> Set clear thresholds untuk alerts</li>
        <li><strong>Regular Reviews:</strong> Review monitoring data secara berkala</li>
        <li><strong>Document Issues:</strong> Dokumentasikan semua issues dan resolutions</li>
        <li><strong>Continuous Improvement:</strong> Improve monitoring based on learnings</li>
      </ul>
    </DocLayout>
  )
}
