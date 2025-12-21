import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Conversions API"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      
      
      nextHref="/whitelist/advanced-setup/custom-events"
      nextTitle="Custom Events"
    >
      <h2>Apa itu Conversions API?</h2>
      <p>
        Conversions API (CAPI) adalah server-side API dari Meta yang memungkinkan Anda untuk mengirim events langsung dari server ke Meta, complementing Meta Pixel untuk better data quality dan privacy compliance.
      </p>

      <h2>Mengapa Menggunakan Conversions API?</h2>
      <ul>
        <li><strong>Better Data Quality:</strong> Server-side tracking lebih reliable</li>
        <li><strong>Privacy Compliance:</strong> Lebih compliant dengan privacy regulations</li>
        <li><strong>Ad Blocker Resistant:</strong> Tidak terpengaruh ad blockers</li>
        <li><strong>Complete Data:</strong> Capture events yang mungkin terlewat oleh browser tracking</li>
        <li><strong>Better Attribution:</strong> Improved match quality untuk better attribution</li>
      </ul>

      <h2>Setup Conversions API</h2>
      <h3>Step 1: Get Access Token</h3>
      <ol>
        <li>Buka Meta Events Manager</li>
        <li>Pilih Pixel</li>
        <li>Buka <strong>"Settings"</strong> → <strong>"Conversions API"</strong></li>
        <li>Klik <strong>"Generate Access Token"</strong></li>
        <li>Copy dan simpan access token dengan aman</li>
      </ol>

      <h3>Step 2: Setup Server Endpoint</h3>
      <p>Create endpoint untuk receive events dan forward ke Meta:</p>
      <pre><code>{`// Example: Node.js
app.post('/webhook/meta-conversions', async (req, res) => {
  const eventData = req.body;
  
  // Send to Meta Conversions API
  const response = await fetch('https://graph.facebook.com/v18.0/{pixel-id}/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [{
        event_name: eventData.event_name,
        event_time: Math.floor(Date.now() / 1000),
        user_data: hashUserData(eventData.user_data),
        custom_data: eventData.custom_data,
        action_source: 'website'
      }],
      access_token: process.env.META_ACCESS_TOKEN
    })
  });
  
  res.status(200).send('OK');
});`}</code></pre>

      <h2>Deduplication</h2>
      <p>Untuk avoid duplicate events, gunakan event_id:</p>
      <ul>
        <li>Generate unique event_id untuk setiap event</li>
        <li>Send same event_id di Meta Pixel dan Conversions API</li>
        <li>Meta akan automatically deduplicate</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use Conversions API bersama Meta Pixel (not replace)</li>
        <li>Implement proper deduplication</li>
        <li>Hash user data untuk privacy</li>
        <li>Handle errors dan retries</li>
        <li>Monitor API usage dan limits</li>
      </ul>
    </DocLayout>
  )
}
