import DocLayout from '@/components/DocLayout'

export default function Page() {
  return (
    <DocLayout
      title="Melihat Data di GA4"
      categoryHref="/whitelist/monitoring"
      categoryName="Monitoring"
      prevHref="/whitelist/monitoring/events-manager"
      prevTitle="Melihat Data di Events Manager"
      nextHref="/whitelist/monitoring/interpretasi-metrics"
      nextTitle="Interpretasi Metrics"
    >
      <h2>Melihat Data di Google Analytics 4</h2>
      <p>
        Google Analytics 4 menyediakan berbagai cara untuk melihat dan menganalisis data tracking. Memahami cara mengakses dan interpret data di GA4 sangat penting untuk monitoring dan optimization.
      </p>

      <h2>Standard Reports</h2>
      <h3>1. Realtime Report</h3>
      <p>Untuk melihat data secara real-time:</p>
      <ol>
        <li>Buka GA4 → <strong>"Reports"</strong> → <strong>"Realtime"</strong></li>
        <li>Lihat:
          <ul>
            <li>Users currently on site</li>
            <li>Events dalam 30 menit terakhir</li>
            <li>Top pages</li>
            <li>Traffic sources</li>
          </ul>
        </li>
      </ol>

      <h3>2. Acquisition Report</h3>
      <p>Untuk melihat traffic sources:</p>
      <ol>
        <li>Buka <strong>"Reports"</strong> → <strong>"Acquisition"</strong></li>
        <li>Lihat:
          <ul>
            <li>Session source/medium</li>
            <li>Campaign performance</li>
            <li>User acquisition</li>
          </ul>
        </li>
      </ol>

      <h3>3. Engagement Report</h3>
      <p>Untuk melihat user engagement:</p>
      <ul>
        <li>Events</li>
        <li>Conversions</li>
        <li>Pages and screens</li>
        <li>User engagement</li>
      </ul>

      <h3>4. Monetization Report</h3>
      <p>Untuk e-commerce data:</p>
      <ul>
        <li>E-commerce purchases</li>
        <li>Revenue</li>
        <li>Product performance</li>
      </ul>

      <h2>Exploration Reports</h2>
      <p>Untuk analisis yang lebih advanced:</p>
      <ol>
        <li>Buka <strong>"Explore"</strong></li>
        <li>Pilih template atau create custom exploration</li>
        <li>Add dimensions dan metrics</li>
        <li>Apply filters</li>
        <li>Analyze data</li>
      </ol>

      <h3>Exploration Templates</h3>
      <ul>
        <li><strong>Free Form:</strong> Custom analysis dengan tables dan charts</li>
        <li><strong>Cohort Exploration:</strong> Analyze user cohorts</li>
        <li><strong>Funnel Exploration:</strong> Analyze conversion funnels</li>
        <li><strong>Path Exploration:</strong> Analyze user paths</li>
        <li><strong>Segment Overlap:</strong> Compare user segments</li>
      </ul>

      <h2>Filtering Data</h2>
      <h3>Date Range</h3>
      <ul>
        <li>Pilih date range di top right</li>
        <li>Preset ranges: Today, Yesterday, Last 7 days, Last 30 days</li>
        <li>Custom date range</li>
        <li>Compare dengan previous period</li>
      </ul>

      <h3>Dimensions & Metrics</h3>
      <p>Filter berdasarkan:</p>
      <ul>
        <li>Source/Medium</li>
        <li>Campaign</li>
        <li>Event name</li>
        <li>User properties</li>
        <li>Custom dimensions</li>
      </ul>

      <h2>Key Metrics untuk Monitor</h2>
      <h3>1. Users</h3>
      <ul>
        <li>Total users</li>
        <li>New vs returning users</li>
        <li>Active users</li>
      </ul>

      <h3>2. Events</h3>
      <ul>
        <li>Total events</li>
        <li>Event count per event type</li>
        <li>Event value</li>
      </ul>

      <h3>3. Conversions</h3>
      <ul>
        <li>Total conversions</li>
        <li>Conversion rate</li>
        <li>Conversion value</li>
      </ul>

      <h3>4. Revenue</h3>
      <ul>
        <li>Total revenue</li>
        <li>Revenue per user</li>
        <li>Revenue by source/medium</li>
      </ul>

      <h2>Custom Reports</h2>
      <h3>Creating Custom Reports</h3>
      <ol>
        <li>Buka standard report</li>
        <li>Klik <strong>"Customize report"</strong> (ikon pensil)</li>
        <li>Modify dimensions, metrics, filters</li>
        <li>Save report</li>
        <li>Access dari <strong>"Library"</strong></li>
      </ol>

      <h2>Export Data</h2>
      <ol>
        <li>Buka report yang ingin di-export</li>
        <li>Klik <strong>"Share"</strong> atau <strong>"Export"</strong></li>
        <li>Pilih format: PDF, Google Sheets, CSV</li>
        <li>Download atau share</li>
      </ol>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Regular Monitoring:</strong> Check reports secara berkala</li>
        <li><strong>Set Up Dashboards:</strong> Create custom dashboards untuk key metrics</li>
        <li><strong>Use Explorations:</strong> Leverage Exploration untuk deep analysis</li>
        <li><strong>Compare Periods:</strong> Always compare dengan previous periods</li>
        <li><strong>Document Insights:</strong> Dokumentasikan findings dan insights</li>
      </ul>
    </DocLayout>
  )
}