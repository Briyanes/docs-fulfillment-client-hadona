import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Auto-Sync Setup"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      prevHref="/whitelist/data-sync/import-ga4"
      prevTitle="Import Data ke GA4"
      nextHref="/whitelist/data-sync/mapping-events"
      nextTitle="Mapping Events"
    >
      <h2>Apa itu Auto-Sync?</h2>
      <p>
        Auto-sync adalah proses otomatis untuk menyinkronkan data antara Meta Pixel dan Google Analytics 4 secara real-time atau scheduled. Ini memastikan bahwa semua events dari Meta Pixel juga tercatat di GA4 tanpa perlu manual intervention.
      </p>

      <h2>Mengapa Auto-Sync Penting?</h2>
      <ul>
        <li><strong>Consistency:</strong> Memastikan data konsisten di kedua platform</li>
        <li><strong>Time Saving:</strong> Menghemat waktu dengan automation</li>
        <li><strong>Accuracy:</strong> Mengurangi human error dari manual sync</li>
        <li><strong>Real-Time:</strong> Data tersedia secara real-time di GA4</li>
        <li><strong>Unified Analytics:</strong> Satu source of truth untuk analytics</li>
      </ul>

      <h2>Metode Auto-Sync</h2>
      <h3>1. Google Tag Manager (GTM) Setup</h3>
      <p>Setup auto-sync menggunakan GTM:</p>
      <ol>
        <li>Buka Google Tag Manager</li>
        <li>Create trigger untuk Meta Pixel events</li>
        <li>Create GA4 Event tag yang fire ketika Meta Pixel event terjadi</li>
        <li>Map Meta Pixel parameters ke GA4 event parameters</li>
        <li>Test dan publish</li>
      </ol>

      <h3>2. Server-Side Tracking</h3>
      <p>Untuk lebih reliable dan privacy-compliant:</p>
      <ol>
        <li>Setup server endpoint untuk receive Meta Pixel events</li>
        <li>Transform events ke GA4 format</li>
        <li>Send ke GA4 via Measurement Protocol</li>
        <li>Setup error handling dan retry logic</li>
      </ol>

      <h3>3. Third-Party Integration Tools</h3>
      <p>Gunakan tools seperti:</p>
      <ul>
        <li>Zapier</li>
        <li>Make (Integromat)</li>
        <li>Custom webhook solutions</li>
      </ul>

      <h2>Setup Auto-Sync dengan GTM</h2>
      <h3>Step 1: Setup Meta Pixel Trigger</h3>
      <ol>
        <li>Buka GTM → <strong>"Triggers"</strong> → <strong>"New"</strong></li>
        <li>Trigger Type: <strong>"Custom Event"</strong></li>
        <li>Event name: <code>fbq</code> atau custom event name dari Meta Pixel</li>
        <li>Save trigger</li>
      </ol>

      <h3>Step 2: Create GA4 Event Tag</h3>
      <ol>
        <li>Buka <strong>"Tags"</strong> → <strong>"New"</strong></li>
        <li>Tag Type: <strong>"Google Analytics: GA4 Event"</strong></li>
        <li>Configuration Tag: Pilih GA4 Configuration tag</li>
        <li>Event Name: Map dari Meta Pixel event (contoh: <code>purchase</code>)</li>
        <li>Event Parameters: Map Meta Pixel parameters ke GA4</li>
        <li>Trigger: Pilih trigger yang dibuat di Step 1</li>
        <li>Save tag</li>
      </ol>

      <h3>Step 3: Parameter Mapping</h3>
      <p>Map Meta Pixel parameters ke GA4:</p>
      <table>
        <thead>
          <tr>
            <th>Meta Pixel Parameter</th>
            <th>GA4 Parameter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>value</code></td>
            <td><code>value</code></td>
          </tr>
          <tr>
            <td><code>currency</code></td>
            <td><code>currency</code></td>
          </tr>
          <tr>
            <td><code>content_ids</code></td>
            <td><code>items[].item_id</code></td>
          </tr>
          <tr>
            <td><code>contents</code></td>
            <td><code>items[]</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Server-Side Auto-Sync</h2>
      <h3>Architecture</h3>
      <pre><code>{`Meta Pixel → Server Endpoint → Transform → GA4 Measurement Protocol`}</code></pre>

      <h3>Example Implementation (Node.js)</h3>
      <pre><code>{`// Receive Meta Pixel event
app.post('/webhook/meta-pixel', async (req, res) => {
  const metaEvent = req.body;
  
  // Transform to GA4 format
  const ga4Event = {
    client_id: metaEvent.user_data?.client_user_id || generateClientId(),
    events: [{
      name: mapEventName(metaEvent.event_name),
      params: {
        transaction_id: metaEvent.custom_data?.order_id,
        value: metaEvent.custom_data?.value,
        currency: metaEvent.custom_data?.currency,
        // ... map other parameters
      }
    }]
  };
  
  // Send to GA4
  await sendToGA4(ga4Event);
  
  res.status(200).send('OK');
});`}</code></pre>

      <h2>Testing Auto-Sync</h2>
      <h3>1. Test di GTM Preview Mode</h3>
      <ol>
        <li>Enable GTM Preview mode</li>
        <li>Trigger Meta Pixel event di website</li>
        <li>Verify GA4 event tag fire</li>
        <li>Check event parameters sudah benar</li>
      </ol>

      <h3>2. Test di GA4 Realtime</h3>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Realtime"</strong></li>
        <li>Trigger event di website</li>
        <li>Pastikan event muncul di Realtime report</li>
        <li>Verify event parameters</li>
      </ol>

      <h2>Monitoring Auto-Sync</h2>
      <h3>1. GTM Debug</h3>
      <ul>
        <li>Use GTM Preview mode untuk debug</li>
        <li>Check tag firing status</li>
        <li>Verify data layer values</li>
      </ul>

      <h3>2. GA4 DebugView</h3>
      <ul>
        <li>Enable debug mode</li>
        <li>Monitor events di DebugView</li>
        <li>Check untuk errors atau missing data</li>
      </ul>

      <h3>3. Server Logs</h3>
      <ul>
        <li>Monitor server logs untuk errors</li>
        <li>Track success/failure rates</li>
        <li>Setup alerts untuk failures</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Error Handling:</strong> Implement proper error handling dan retry logic</li>
        <li><strong>Data Validation:</strong> Validate data sebelum sync</li>
        <li><strong>Rate Limiting:</strong> Respect rate limits untuk GA4 Measurement Protocol</li>
        <li><strong>Logging:</strong> Log semua sync activities untuk debugging</li>
        <li><strong>Testing:</strong> Test thoroughly sebelum production</li>
        <li><strong>Monitoring:</strong> Setup monitoring dan alerts</li>
      </ul>

      <h2>Common Issues</h2>
      <h3>Events Tidak Terkirim</h3>
      <ul>
        <li>Check trigger configuration di GTM</li>
        <li>Verify GA4 tag sudah aktif</li>
        <li>Check untuk JavaScript errors</li>
      </ul>

      <h3>Data Tidak Akurat</h3>
      <ul>
        <li>Verify parameter mapping sudah benar</li>
        <li>Check data transformation logic</li>
        <li>Validate data types dan formats</li>
      </ul>

      <h2>Next Steps</h2>
      <p>
        Setelah auto-sync setup, langkah selanjutnya adalah mapping events dengan benar untuk memastikan semua events ter-sync dengan akurat.
      </p>
    </DocLayout>
  )
}
