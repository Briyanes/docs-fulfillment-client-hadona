import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Data Validation"
      categoryHref="/whitelist/data-sync"
      categoryName="Data Sync"
      prevHref="/whitelist/data-sync/mapping-events"
      prevTitle="Mapping Events"
      nextHref="/whitelist/data-sync/troubleshooting"
      nextTitle="Troubleshooting Sync"
    >
      <h2>Apa itu Data Validation?</h2>
      <p>
        Data validation adalah proses memverifikasi bahwa data yang di-sync dari Meta Pixel ke GA4 akurat, lengkap, dan sesuai dengan format yang diharapkan. Validation memastikan data quality dan reliability untuk decision making.
      </p>

      <h2>Mengapa Data Validation Penting?</h2>
      <ul>
        <li><strong>Data Accuracy:</strong> Memastikan data yang digunakan untuk analysis akurat</li>
        <li><strong>Decision Making:</strong> Keputusan bisnis berdasarkan data yang valid</li>
        <li><strong>Error Detection:</strong> Mendeteksi errors atau issues lebih awal</li>
        <li><strong>Compliance:</strong> Memastikan data sesuai dengan standards dan regulations</li>
        <li><strong>Trust:</strong> Membangun trust terhadap data dan reports</li>
      </ul>

      <h2>Jenis Data Validation</h2>
      <h3>1. Format Validation</h3>
      <p>Memastikan data dalam format yang benar:</p>
      <ul>
        <li>Event names sesuai dengan GA4 naming convention</li>
        <li>Parameters dalam format yang benar</li>
        <li>Data types sesuai (string, number, boolean)</li>
        <li>Timestamps dalam format yang valid</li>
      </ul>

      <h3>2. Completeness Validation</h3>
      <p>Memastikan data lengkap:</p>
      <ul>
        <li>Required parameters tidak missing</li>
        <li>Required fields terisi</li>
        <li>No null atau empty values untuk critical data</li>
      </ul>

      <h3>3. Accuracy Validation</h3>
      <p>Memastikan data akurat:</p>
      <ul>
        <li>Values dalam range yang reasonable</li>
        <li>No duplicate events</li>
        <li>Timestamps dalam timeframe yang valid</li>
        <li>Data konsisten dengan source</li>
      </ul>

      <h2>Validation Methods</h2>
      <h3>1. Real-Time Validation</h3>
      <p>Validate data saat di-sync:</p>
      <ul>
        <li>Validate sebelum send ke GA4</li>
        <li>Reject invalid data</li>
        <li>Log errors untuk debugging</li>
        <li>Send alerts untuk critical issues</li>
      </ul>

      <h3>2. Batch Validation</h3>
      <p>Validate data dalam batch:</p>
      <ul>
        <li>Run validation secara scheduled</li>
        <li>Compare data antara Meta Pixel dan GA4</li>
        <li>Generate validation reports</li>
        <li>Identify patterns atau trends</li>
      </ul>

      <h2>Validation Checklist</h2>
      <h3>Event Validation</h3>
      <ul>
        <li>✅ Event name valid dan sesuai GA4 standards</li>
        <li>✅ Event name tidak menggunakan reserved names</li>
        <li>✅ Event name dalam format yang benar (lowercase, underscores)</li>
        <li>✅ Event memiliki required parameters</li>
      </ul>

      <h3>Parameter Validation</h3>
      <ul>
        <li>✅ Parameter names valid</li>
        <li>✅ Parameter values dalam format yang benar</li>
        <li>✅ Required parameters tidak missing</li>
        <li>✅ Data types sesuai (string, number, array)</li>
        <li>✅ Values dalam range yang reasonable</li>
      </ul>

      <h3>E-commerce Validation</h3>
      <ul>
        <li>✅ Transaction ID unique</li>
        <li>✅ Value > 0 untuk purchase events</li>
        <li>✅ Currency code valid (ISO 4217)</li>
        <li>✅ Items array tidak kosong</li>
        <li>✅ Item properties lengkap (id, name, price, quantity)</li>
      </ul>

      <h2>Validation Tools</h2>
      <h3>1. GA4 DebugView</h3>
      <ol>
        <li>Enable debug mode</li>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"DebugView"</strong></li>
        <li>Monitor events secara real-time</li>
        <li>Check event parameters</li>
        <li>Verify data accuracy</li>
      </ol>

      <h3>2. Custom Validation Scripts</h3>
      <p>Buat scripts untuk validate data:</p>
      <pre><code>{`function validateEvent(event) {
  const errors = [];
  
  // Validate event name
  if (!event.name || typeof event.name !== 'string') {
    errors.push('Event name is required and must be a string');
  }
  
  // Validate parameters
  if (event.name === 'purchase') {
    if (!event.params.transaction_id) {
      errors.push('Purchase event requires transaction_id');
    }
    if (!event.params.value || event.params.value <= 0) {
      errors.push('Purchase event requires valid value');
    }
  }
  
  return errors;
}`}</code></pre>

      <h2>Data Comparison</h2>
      <h3>Compare Meta Pixel vs GA4</h3>
      <ol>
        <li>Export data dari Meta Events Manager</li>
        <li>Export data dari GA4</li>
        <li>Compare event counts</li>
        <li>Compare parameter values</li>
        <li>Identify discrepancies</li>
        <li>Investigate differences</li>
      </ol>

      <h2>Common Validation Issues</h2>
      <h3>1. Missing Parameters</h3>
      <ul>
        <li>Required parameters tidak terkirim</li>
        <li>Solution: Verify parameter mapping dan ensure semua required params terkirim</li>
      </ul>

      <h3>2. Invalid Format</h3>
      <ul>
        <li>Data dalam format yang salah</li>
        <li>Solution: Validate format sebelum send</li>
      </ul>

      <h3>3. Data Mismatch</h3>
      <ul>
        <li>Data berbeda antara Meta Pixel dan GA4</li>
        <li>Solution: Check mapping logic dan transformation</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Validate Early:</strong> Validate data sedini mungkin</li>
        <li><strong>Automate:</strong> Automate validation process</li>
        <li><strong>Monitor:</strong> Monitor validation results secara berkala</li>
        <li><strong>Document:</strong> Dokumentasikan validation rules</li>
        <li><strong>Alert:</strong> Setup alerts untuk validation failures</li>
      </ul>
    </DocLayout>
  )
}

      <h2>Mengapa Data Validation Penting?</h2>
      <ul>
        <li><strong>Data Accuracy:</strong> Memastikan data yang digunakan untuk analysis akurat</li>
        <li><strong>Decision Making:</strong> Keputusan bisnis berdasarkan data yang valid</li>
        <li><strong>Error Detection:</strong> Mendeteksi errors atau issues lebih awal</li>
        <li><strong>Compliance:</strong> Memastikan data sesuai dengan standards dan regulations</li>
        <li><strong>Trust:</strong> Membangun trust terhadap data dan reports</li>
      </ul>

      <h2>Jenis Data Validation</h2>
      <h3>1. Format Validation</h3>
      <p>Memastikan data dalam format yang benar:</p>
      <ul>
        <li>Event names sesuai dengan GA4 naming convention</li>
        <li>Parameters dalam format yang benar</li>
        <li>Data types sesuai (string, number, boolean)</li>
        <li>Timestamps dalam format yang valid</li>
      </ul>

      <h3>2. Completeness Validation</h3>
      <p>Memastikan data lengkap:</p>
      <ul>
        <li>Required parameters tidak missing</li>
        <li>Required fields terisi</li>
        <li>No null atau empty values untuk critical data</li>
      </ul>

      <h3>3. Accuracy Validation</h3>
      <p>Memastikan data akurat:</p>
      <ul>
        <li>Values dalam range yang reasonable</li>
        <li>No duplicate events</li>
        <li>Timestamps dalam timeframe yang valid</li>
        <li>Data konsisten dengan source</li>
      </ul>

      <h2>Validation Methods</h2>
      <h3>1. Real-Time Validation</h3>
      <p>Validate data saat di-sync:</p>
      <ul>
        <li>Validate sebelum send ke GA4</li>
        <li>Reject invalid data</li>
        <li>Log errors untuk debugging</li>
        <li>Send alerts untuk critical issues</li>
      </ul>

      <h3>2. Batch Validation</h3>
      <p>Validate data dalam batch:</p>
      <ul>
        <li>Run validation secara scheduled</li>
        <li>Compare data antara Meta Pixel dan GA4</li>
        <li>Generate validation reports</li>
        <li>Identify patterns atau trends</li>
      </ul>

      <h2>Validation Checklist</h2>
      <h3>Event Validation</h3>
      <ul>
        <li>✅ Event name valid dan sesuai GA4 standards</li>
        <li>✅ Event name tidak menggunakan reserved names</li>
        <li>✅ Event name dalam format yang benar (lowercase, underscores)</li>
        <li>✅ Event memiliki required parameters</li>
      </ul>

      <h3>Parameter Validation</h3>
      <ul>
        <li>✅ Parameter names valid</li>
        <li>✅ Parameter values dalam format yang benar</li>
        <li>✅ Required parameters tidak missing</li>
        <li>✅ Data types sesuai (string, number, array)</li>
        <li>✅ Values dalam range yang reasonable</li>
      </ul>

      <h3>E-commerce Validation</h3>
      <ul>
        <li>✅ Transaction ID unique</li>
        <li>✅ Value > 0 untuk purchase events</li>
        <li>✅ Currency code valid (ISO 4217)</li>
        <li>✅ Items array tidak kosong</li>
        <li>✅ Item properties lengkap (id, name, price, quantity)</li>
      </ul>

      <h2>Validation Tools</h2>
      <h3>1. GA4 DebugView</h3>
      <ol>
        <li>Enable debug mode</li>
        <li>Buka GA4 → <strong>"Admin"</strong> → <strong>"DebugView"</strong></li>
        <li>Monitor events secara real-time</li>
        <li>Check event parameters</li>
        <li>Verify data accuracy</li>
      </ol>

      <h3>2. Custom Validation Scripts</h3>
      <p>Buat scripts untuk validate data:</p>
      <pre><code>{`function validateEvent(event) {
  const errors = [];
  
  // Validate event name
  if (!event.name || typeof event.name !== 'string') {
    errors.push('Event name is required and must be a string');
  }
  
  // Validate parameters
  if (event.name === 'purchase') {
    if (!event.params.transaction_id) {
      errors.push('Purchase event requires transaction_id');
    }
    if (!event.params.value || event.params.value <= 0) {
      errors.push('Purchase event requires valid value');
    }
  }
  
  return errors;
}`}</code></pre>

      <h2>Data Comparison</h2>
      <h3>Compare Meta Pixel vs GA4</h3>
      <ol>
        <li>Export data dari Meta Events Manager</li>
        <li>Export data dari GA4</li>
        <li>Compare event counts</li>
        <li>Compare parameter values</li>
        <li>Identify discrepancies</li>
        <li>Investigate differences</li>
      </ol>

      <h2>Common Validation Issues</h2>
      <h3>1. Missing Parameters</h3>
      <ul>
        <li>Required parameters tidak terkirim</li>
        <li>Solution: Verify parameter mapping dan ensure semua required params terkirim</li>
      </ul>

      <h3>2. Invalid Format</h3>
      <ul>
        <li>Data dalam format yang salah</li>
        <li>Solution: Validate format sebelum send</li>
      </ul>

      <h3>3. Data Mismatch</h3>
      <ul>
        <li>Data berbeda antara Meta Pixel dan GA4</li>
        <li>Solution: Check mapping logic dan transformation</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Validate Early:</strong> Validate data sedini mungkin</li>
        <li><strong>Automate:</strong> Automate validation process</li>
        <li><strong>Monitor:</strong> Monitor validation results secara berkala</li>
        <li><strong>Document:</strong> Dokumentasikan validation rules</li>
        <li><strong>Alert:</strong> Setup alerts untuk validation failures</li>
      </ul>
    </DocLayout>
  )
}