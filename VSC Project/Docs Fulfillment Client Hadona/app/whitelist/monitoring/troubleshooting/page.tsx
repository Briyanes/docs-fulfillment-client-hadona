import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Troubleshooting Monitoring"
      categoryHref="/whitelist/monitoring"
      categoryName="Monitoring"
      prevHref="/whitelist/monitoring/data-export"
      prevTitle="Data Export"
      
      
    >
      <h2>Common Monitoring Issues</h2>
      
      <h3>1. Data Tidak Muncul</h3>
      <ul>
        <li>Check tracking setup masih aktif</li>
        <li>Verify tidak ada changes di code</li>
        <li>Check untuk ad blockers</li>
        <li>Verify date range sudah benar</li>
      </ul>

      <h3>2. Data Tidak Akurat</h3>
      <ul>
        <li>Compare dengan source data (Meta Pixel)</li>
        <li>Check untuk duplicate tracking</li>
        <li>Verify filters tidak terlalu restrictive</li>
        <li>Check data sampling</li>
      </ul>

      <h3>3. Reports Tidak Load</h3>
      <ul>
        <li>Check internet connection</li>
        <li>Try different browser</li>
        <li>Clear browser cache</li>
        <li>Check GA4 service status</li>
      </ul>

      <h2>Debugging Steps</h2>
      <ol>
        <li>Verify tracking masih aktif</li>
        <li>Check Realtime reports</li>
        <li>Compare dengan previous periods</li>
        <li>Review filters dan segments</li>
        <li>Check untuk errors di browser console</li>
      </ol>
    </DocLayout>
  )
}

        <li>Verify tidak ada changes di code</li>
        <li>Check untuk ad blockers</li>
        <li>Verify date range sudah benar</li>
      </ul>

      <h3>2. Data Tidak Akurat</h3>
      <ul>
        <li>Compare dengan source data (Meta Pixel)</li>
        <li>Check untuk duplicate tracking</li>
        <li>Verify filters tidak terlalu restrictive</li>
        <li>Check data sampling</li>
      </ul>

      <h3>3. Reports Tidak Load</h3>
      <ul>
        <li>Check internet connection</li>
        <li>Try different browser</li>
        <li>Clear browser cache</li>
        <li>Check GA4 service status</li>
      </ul>

      <h2>Debugging Steps</h2>
      <ol>
        <li>Verify tracking masih aktif</li>
        <li>Check Realtime reports</li>
        <li>Compare dengan previous periods</li>
        <li>Review filters dan segments</li>
        <li>Check untuk errors di browser console</li>
      </ol>
    </DocLayout>
  )
}