import { Link } from 'react-router-dom'
import '../components/Components.css'
import './Dashboard.css'

const stats = [
  { label: 'Total Calls', value: '2,847', change: '+12%', up: true, icon: '📞' },
  { label: 'Active Users', value: '1,203', change: '+8%', up: true, icon: '👥' },
  { label: 'Avg Duration', value: '4:32', change: '-3%', up: false, icon: '⏱' },
  { label: 'Missed Calls', value: '47', change: '-15%', up: true, icon: '📵' },
]

const recentCalls = [
  { name: 'Ahmet Kaya', type: 'Incoming', duration: '12:45', time: '2 min ago', status: 'green' },
  { name: 'Elif Yılmaz', type: 'Outgoing', duration: '5:23', time: '18 min ago', status: 'blue' },
  { name: 'Mehmet Demir', type: 'Missed', duration: '—', time: '1 hr ago', status: 'red' },
  { name: 'Zeynep Arslan', type: 'Incoming', duration: '32:10', time: '3 hr ago', status: 'green' },
  { name: 'Can Öztürk', type: 'Video', duration: '45:00', time: '5 hr ago', status: 'purple' },
]

const upcomingMeetings = [
  { title: 'Team Standup', time: '09:00', participants: 5 },
  { title: 'Client Review', time: '14:30', participants: 3 },
  { title: 'Design Sync', time: '16:00', participants: 8 },
]

export default function DashboardPage() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="sb-brand">
          <span className="sb-logo">📞</span>
          <span className="sb-name">CallApp</span>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Main</span>
          <a className="sb-item active"><span className="sb-ico">🏠</span> Dashboard</a>
          <a className="sb-item"><span className="sb-ico">👥</span> Contacts</a>
          <a className="sb-item"><span className="sb-ico">📞</span> Calls</a>
          <a className="sb-item"><span className="sb-ico">💬</span> Messages</a>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Workspace</span>
          <a className="sb-item"><span className="sb-ico">📅</span> Calendar</a>
          <a className="sb-item"><span className="sb-ico">📊</span> Analytics</a>
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
            <div className="eyebrow">Dashboard</div>
            <h1 className="serif">Good morning, Berkay</h1>
          </div>
          <div className="app-header-actions">
            <input className="search-input mono" placeholder="Search..." />
            <button className="btn-gold">+ New Call</button>
          </div>
        </header>

        <div className="stats-grid">
          {stats.map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-copy">
                <span className="stat-value serif">{s.value}</span>
                <span className="stat-label mono">{s.label}</span>
              </div>
              <span className={`stat-change mono ${s.up ? 'up' : 'down'}`}>{s.change}</span>
            </div>
          ))}
        </div>

        <div className="dash-grid">
          <div className="dash-panel wide">
            <div className="panel-header">
              <span className="panel-title serif">Recent Calls</span>
              <a className="panel-link mono">View all →</a>
            </div>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Type</th>
                  <th>Duration</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {recentCalls.map((c, i) => (
                  <tr key={i}>
                    <td>
                      <div className="contact-cell">
                        <span className={`contact-avatar ${c.status}`}>{c.name[0]}</span>
                        {c.name}
                      </div>
                    </td>
                    <td><span className={`call-type ${c.type.toLowerCase()}`}>{c.type}</span></td>
                    <td className="mono">{c.duration}</td>
                    <td className="mono dim">{c.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dash-panel">
            <div className="panel-header">
              <span className="panel-title serif">Upcoming</span>
              <a className="panel-link mono">Calendar →</a>
            </div>
            <div className="meeting-list">
              {upcomingMeetings.map((m, i) => (
                <div className="meeting-item" key={i}>
                  <span className="meeting-time mono">{m.time}</span>
                  <div className="meeting-info">
                    <span className="meeting-title">{m.title}</span>
                    <span className="meeting-participants mono">{m.participants} participants</span>
                  </div>
                  <span className="meeting-dot" />
                </div>
              ))}
            </div>
          </div>

          <div className="dash-panel">
            <div className="panel-header">
              <span className="panel-title serif">Call Volume</span>
              <span className="panel-link mono">This week</span>
            </div>
            <div className="bar-chart">
              {[65, 45, 80, 55, 90, 40, 70].map((h, i) => (
                <div className="bar-col" key={i}>
                  <div className="bar" style={{ height: `${h}%` }} />
                  <span className="bar-label mono">{['M','T','W','T','F','S','S'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
