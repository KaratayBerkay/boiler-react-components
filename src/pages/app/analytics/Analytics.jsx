import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../../sidebar/Sidebar.css'
import '../../dashboard/Dashboard.css'
import './Analytics.css'

const metrics = [
  { label: 'Total Minutes', value: '14,832', change: '+18%', up: true },
  { label: 'Calls Today', value: '247', change: '+12%', up: true },
  { label: 'Avg Call Length', value: '6:01', change: '+4%', up: true },
  { label: 'Answer Rate', value: '94%', change: '-2%', up: false },
]

const weeklyData = [65, 45, 80, 55, 90, 40, 70]
const monthlyData = [30, 55, 40, 75, 60, 85, 50, 95, 70, 60, 80, 45]

const topContacts = [
  { name: 'Ahmet Kaya', calls: 45, minutes: '8h 32m', avatar: 'AK', color: 'green' },
  { name: 'Elif Yılmaz', calls: 38, minutes: '6h 15m', avatar: 'EY', color: 'blue' },
  { name: 'Team Standup', calls: 32, minutes: '12h 40m', avatar: 'TS', color: 'purple' },
  { name: 'Mehmet Demir', calls: 28, minutes: '4h 22m', avatar: 'MD', color: 'red' },
  { name: 'Client Calls', calls: 22, minutes: '9h 10m', avatar: 'CC', color: 'green' },
]

export default function AnalyticsPage() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="sb-brand">
          <span className="sb-logo">📞</span>
          <span className="sb-name">CallApp</span>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Main</span>
          <a className="sb-item"><span className="sb-ico">🏠</span> Dashboard</a>
          <a className="sb-item"><span className="sb-ico">👥</span> Contacts</a>
          <a className="sb-item"><span className="sb-ico">📞</span> Calls</a>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Workspace</span>
          <a className="sb-item"><span className="sb-ico">📅</span> Calendar</a>
          <a className="sb-item active"><span className="sb-ico">📊</span> Analytics</a>
          <a className="sb-item"><span className="sb-ico">⚙️</span> Settings</a>
        </div>
        <div className="sb-footer">
          <div className="sb-avatar">BK</div>
          <div className="sb-user-info">
            <span className="sb-user-name">Berkay</span>
            <span className="sb-user-status mono">Online</span>
          </div>
        </div>
      </aside>

      <main className="app-main">
        <header className="app-header">
          <div>
            <div className="eyebrow">Analytics</div>
            <h1 className="serif">Call Analytics</h1>
          </div>
          <div className="app-header-actions">
            <button className="filter-btn mono">This Week</button>
            <button className="btn-gold">📥 Export</button>
          </div>
        </header>

        <div className="stats-grid" style={{ marginBottom: 24 }}>
          {metrics.map(m => (
            <div className="stat-card" key={m.label}>
              <div className="stat-copy">
                <span className="stat-value serif">{m.value}</span>
                <span className="stat-label mono">{m.label}</span>
              </div>
              <span className={`stat-change mono ${m.up ? 'up' : 'down'}`}>{m.change}</span>
            </div>
          ))}
        </div>

        <div className="dash-grid" style={{ marginBottom: 24 }}>
          <div className="dash-panel wide">
            <div className="panel-header">
              <span className="panel-title serif">Weekly Call Volume</span>
              <span className="panel-link mono">Last 7 days</span>
            </div>
            <div className="bar-chart" style={{ height: 160 }}>
              {weeklyData.map((h, i) => (
                <div className="bar-col" key={i}>
                  <div className="bar" style={{ height: `${h}%` }} />
                  <span className="bar-label mono">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-panel">
            <div className="panel-header">
              <span className="panel-title serif">Monthly Trend</span>
            </div>
            <div className="line-chart">
              <svg viewBox="0 0 300 120" preserveAspectRatio="none" style={{ width: '100%', height: 120 }}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`M0,${120 - monthlyData[0] * 1.1} ${monthlyData.map((v, i) => `L${(i / 11) * 300},${120 - v * 1.1}`).join(' ')} L300,120 L0,120 Z`}
                  fill="url(#areaGrad)"
                />
                <path
                  d={`M0,${120 - monthlyData[0] * 1.1} ${monthlyData.map((v, i) => `L${(i / 11) * 300},${120 - v * 1.1}`).join(' ')}`}
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {monthlyData.map((v, i) => (
                  <circle key={i} cx={(i / 11) * 300} cy={120 - v * 1.1} r="3" fill="var(--gold)" />
                ))}
              </svg>
            </div>
          </div>

          <div className="dash-panel">
            <div className="panel-header">
              <span className="panel-title serif">Top Contacts</span>
            </div>
            <div className="top-list">
              {topContacts.map((c, i) => (
                <div className="top-item" key={i}>
                  <span className="top-rank mono">#{i + 1}</span>
                  <div className={`contact-avatar ${c.color}`}>{c.avatar}</div>
                  <div className="top-info">
                    <span className="top-name">{c.name}</span>
                    <span className="top-detail mono">{c.calls} calls · {c.minutes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link to="/" className="back-link mono" style={{ display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
