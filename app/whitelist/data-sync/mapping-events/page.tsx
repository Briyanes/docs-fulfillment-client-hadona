import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Mapping Events"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      description="Panduan mapping events untuk sinkronisasi data yang tepat"
      prevHref="/whitelist/data-sync/auto-sync"
      prevTitle="Auto-Sync Setup"
      nextHref="/whitelist/data-sync/data-validation"
      nextTitle="Data Validation"
    >
      <h2>Apa itu Event Mapping?</h2>
      <p>
        Event mapping adalah proses memetakan events dan parameters dari Meta Pixel ke format Google Analytics 4. Mapping yang benar memastikan data dari Meta Pixel dapat diinterpretasikan dengan benar di GA4 dan memberikan insights yang akurat.
      </p>

      <h2>Standard Event Mapping</h2>
      <table>
        <thead>
          <tr>
            <th>Meta Pixel Event</th>
            <th>GA4 Event</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>PageView</code></td>
            <td><code>page_view</code></td>
            <td>Automatic, tidak perlu mapping manual</td>
          </tr>
          <tr>
            <td><code>ViewContent</code></td>
            <td><code>view_item</code></td>
            <td>User melihat konten atau produk</td>
          </tr>
          <tr>
            <td><code>AddToCart</code></td>
            <td><code>add_to_cart</code></td>
            <td>User menambahkan item ke cart</td>
          </tr>
          <tr>
            <td><code>InitiateCheckout</code></td>
            <td><code>begin_checkout</code></td>
            <td>User memulai checkout process</td>
          </tr>
          <tr>
            <td><code>Purchase</code></td>
            <td><code>purchase</code></td>
            <td>User menyelesaikan purchase</td>
          </tr>
          <tr>
            <td><code>Lead</code></td>
            <td><code>generate_lead</code></td>
            <td>User mengisi form lead</td>
          </tr>
          <tr>
            <td><code>CompleteRegistration</code></td>
            <td><code>sign_up</code></td>
            <td>User menyelesaikan registrasi</td>
          </tr>
          <tr>
            <td><code>Search</code></td>
            <td><code>search</code></td>
            <td>User melakukan search</td>
          </tr>
        </tbody>
      </table>

      <h2>Parameter Mapping</h2>
      <h3>Purchase Event Example</h3>
      <p>Meta Pixel:</p>
      <pre><code>{`fbq('track', 'Purchase', {
  value: 100.00,
  currency: 'USD',
  content_ids: ['SKU123', 'SKU456'],
  contents: [
    {id: 'SKU123', quantity: 1, item_price: 50.00},
    {id: 'SKU456', quantity: 2, item_price: 25.00}
  ]
});`}</code></pre>

      <p>GA4 Equivalent:</p>
      <pre><code>{`gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 100.00,
  currency: 'USD',
  items: [
    {
      item_id: 'SKU123',
      item_name: 'Product 1',
      quantity: 1,
      price: 50.00
    },
    {
      item_id: 'SKU456',
      item_name: 'Product 2',
      quantity: 2,
      price: 25.00
    }
  ]
});`}</code></pre>

      <h2>Mapping di Google Tag Manager</h2>
      <h3>Step 1: Create Data Layer Variables</h3>
      <ol>
        <li>Buka GTM → <strong>"Variables"</strong></li>
        <li>Create variables untuk Meta Pixel data:
          <ul>
            <li><code>Meta Pixel Event Name</code></li>
            <li><code>Meta Pixel Value</code></li>
            <li><code>Meta Pixel Currency</code></li>
            <li><code>Meta Pixel Content IDs</code></li>
          </ul>
        </li>
      </ol>

      <h3>Step 2: Create GA4 Event Tag</h3>
      <ol>
        <li>Create GA4 Event tag</li>
        <li>Event Name: Use lookup table untuk map Meta Pixel event ke GA4 event</li>
        <li>Event Parameters: Map Meta Pixel parameters ke GA4 parameters</li>
        <li>Use variables yang sudah dibuat</li>
      </ol>

      <h3>Step 3: Setup Lookup Table</h3>
      <p>Create lookup table untuk event name mapping:</p>
      <table>
        <thead>
          <tr>
            <th>Input Variable</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Purchase</td>
            <td>purchase</td>
          </tr>
          <tr>
            <td>AddToCart</td>
            <td>add_to_cart</td>
          </tr>
          <tr>
            <td>ViewContent</td>
            <td>view_item</td>
          </tr>
        </tbody>
      </table>

      <h2>Custom Events Mapping</h2>
      <p>Untuk custom events, buat mapping manual:</p>
      <ol>
        <li>Identifikasi custom event dari Meta Pixel</li>
        <li>Tentukan GA4 event name yang sesuai</li>
        <li>Map semua parameters</li>
        <li>Test mapping</li>
        <li>Dokumentasikan mapping</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Use Standard Events:</strong> Gunakan GA4 standard events ketika memungkinkan</li>
        <li><strong>Consistent Naming:</strong> Gunakan naming convention yang konsisten</li>
        <li><strong>Parameter Mapping:</strong> Map semua parameters yang relevan</li>
        <li><strong>Documentation:</strong> Dokumentasikan semua custom mappings</li>
        <li><strong>Testing:</strong> Test semua mappings sebelum production</li>
      </ul>

      <h2>Verification</h2>
      <ol>
        <li>Trigger events di website</li>
        <li>Check di GA4 Realtime</li>
        <li>Verify event names sudah benar</li>
        <li>Check event parameters sudah ter-map dengan benar</li>
        <li>Compare data dengan Meta Pixel Events Manager</li>
      </ol>
    </ArticleLayout>
  )
}
