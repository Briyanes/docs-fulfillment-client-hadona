import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Import Data ke GA4"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      
      
      nextHref="/whitelist/data-sync/auto-sync"
      nextTitle="Auto-Sync Setup"
    >
      <h2>Apa itu Import Data ke GA4?</h2>
      <p>
        Import data ke GA4 memungkinkan Anda untuk mengimpor data dari sumber eksternal (seperti Meta Pixel, CRM, atau data offline) ke Google Analytics 4. Ini membantu mendapatkan view yang lebih lengkap tentang user behavior dan campaign performance.
      </p>

      <h2>Jenis Data yang Dapat Diimport</h2>
      <h3>1. Measurement Protocol Data</h3>
      <ul>
        <li>Data dari server-side tracking</li>
        <li>Offline conversions</li>
        <li>Backend events</li>
        <li>Data dari systems yang tidak bisa install GA4 tag</li>
      </ul>

      <h3>2. User Data</h3>
      <ul>
        <li>User properties dari CRM</li>
        <li>Customer lifetime value</li>
        <li>User segments</li>
        <li>Demographic data</li>
      </ul>

      <h3>3. Item Data</h3>
      <ul>
        <li>Product catalog information</li>
        <li>Inventory data</li>
        <li>Product attributes</li>
      </ul>

      <h2>Metode Import</h2>
      <h3>1. Measurement Protocol</h3>
      <p>Untuk mengirim events secara langsung ke GA4:</p>
      <ol>
        <li>Dapatkan Measurement ID dan API Secret</li>
        <li>Setup HTTP POST request ke GA4 endpoint</li>
        <li>Format data sesuai dengan GA4 event structure</li>
        <li>Send events dengan proper authentication</li>
      </ol>

      <h3>2. Google Analytics Data Import</h3>
      <p>Untuk import data dalam batch:</p>
      <ol>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"Data Import"</strong></li>
        <li>Klik <strong>"Create Data Source"</strong></li>
        <li>Pilih jenis data yang ingin diimport</li>
        <li>Upload file atau setup API connection</li>
        <li>Map fields dari source ke GA4 dimensions</li>
      </ol>

      <h2>Setup Measurement Protocol</h2>
      <h3>Step 1: Get API Secret</h3>
      <ol>
        <li>Buka GA4 → <strong>"Admin"</strong></li>
        <li>Di kolom <strong>"Property"</strong>, klik <strong>"Data Streams"</strong></li>
        <li>Klik pada stream yang ingin digunakan</li>
        <li>Scroll ke <strong>"Measurement Protocol API secrets"</strong></li>
        <li>Klik <strong>"Create"</strong></li>
        <li>Berikan nickname untuk secret</li>
        <li>Copy API secret (hanya muncul sekali!)</li>
      </ol>

      <h3>Step 2: Send Event via Measurement Protocol</h3>
      <p>Contoh menggunakan cURL:</p>
      <pre><code>{`curl -X POST https://www.google-analytics.com/mp/collect?measurement_id=G-XXXXXXXXXX&api_secret=YOUR_API_SECRET \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "12345.1234567890",
    "events": [{
      "name": "purchase",
      "params": {
        "transaction_id": "T12345",
        "value": 100.00,
        "currency": "USD",
        "items": [{
          "item_id": "SKU123",
          "item_name": "Product Name",
          "quantity": 1,
          "price": 100.00
        }]
      }
    }]
  }'`}</code></pre>

      <h2>Import Meta Pixel Data</h2>
      <h3>Setup Server-Side Tracking</h3>
      <p>Untuk mengirim Meta Pixel events ke GA4:</p>
      <ol>
        <li>Setup Conversions API di Meta</li>
        <li>Receive events di server</li>
        <li>Transform events ke GA4 format</li>
        <li>Send ke GA4 via Measurement Protocol</li>
      </ol>

      <h3>Event Mapping Example</h3>
      <pre><code>{`// Meta Pixel Event
{
  "event_name": "Purchase",
  "event_time": 1234567890,
  "user_data": {...},
  "custom_data": {
    "value": 100.00,
    "currency": "USD"
  }
}`}</code></pre>
    </DocLayout>
  )
}
