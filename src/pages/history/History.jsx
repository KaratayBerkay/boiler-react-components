import { Link } from 'react-router-dom'
import '../components/Components.css'
import '../sidebar/Sidebar.css'
import '../dashboard/Dashboard.css'
import './History.css'

const calls = [
  { name: 'Ahmet Kaya', number: '+90 532 123 4567', type: 'Incoming', duration: '12:45', time: 'Today, 14:30', date: 'Today', status: 'green' },
  { name: 'Elif Yılmaz', number: '+90 555 987 6543', type: 'Outgoing', duration: '5:23', time: 'Today, 11:15', date: 'Today', status: 'blue' },
  { name: 'Mehmet Demir', number: '+90 542 111 2233', type: 'Missed', duration: '—', time: 'Today, 09:45', date: 'Today', status: 'red' },
  { name: 'Zeynep Arslan', number: '+90 533 444 5566', type: 'Video', duration: '32:10', time: 'Yesterday, 16:20', date: 'Yesterday', status: 'purple' },
  { name: 'Can Öztürk', number: '+90 505 777 8899', type: 'Incoming', duration: '45:00', time: 'Yesterday, 10:00', date: 'Yesterday', status: 'green' },
  { name: 'Ayşe Şahin', number: '+90 546 222 3344', type: 'Outgoing', duration: '2:15', time: 'Yesterday, 08:30', date: 'Yesterday', status: 'blue' },
  { name: 'Burak Çelik', number: '+90 551 666 7788', type: 'Missed', duration: '—', time: 'Oct 1, 19:45', date: 'Oct 1', status: 'red' },
  { name: 'Deniz Korkmaz', number: '+90 536 999 0011', type: 'Incoming', duration: '18:33', time: 'Oct 1, 14:12', date: 'Oct 1', status: 'green' },
]

export default function HistoryPage() {
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
          <a className="sb-item active"><span className="sb-ico">📞</span> Calls</a>
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
            <div className="eyebrow">Call History</div>
            <h1 className="serif">Recent Calls</h1>
          </div>
          <div className="app-header-actions">
            <input className="search-input mono" placeholder="Search calls..." />
            <button className="btn-gold">📞 New Call</button>
          </div>
        </header>

        <div className="history-filters">
          <button className="filter-btn active mono">All</button>
          <button className="filter-btn mono">📥 Incoming</button>
          <button className="filter-btn mono">📤 Outgoing</button>
          <button className="filter-btn mono">📵 Missed</button>
          <button className="filter-btn mono">🎥 Video</button>
        </div>

        <div className="history-list">
          {calls.map((c, i) => (
            <div className="history-item" key={i}>
              <div className={`history-avatar ${c.status}`}>{c.name[0]}</div>
              <div className="history-info">
                <span className="history-name">{c.name}</span>
                <span className="history-number mono">{c.number}</span>
              </div>
              <span className={`call-type ${c.type.toLowerCase()}`}>{c.type}</span>
              <span className="history-duration mono">{c.duration}</span>
              <span className="history-time mono">{c.time}</span>
              <div className="history-actions">
                <button className="contact-action" title="Call back">📞</button>
                <button className="contact-action" title="Video">🎥</button>
                <button className="contact-action" title="Info">ℹ</button>
              </div>
            </div>
          ))}
        </div>

        <div className="history-footer">
          <button className="load-more mono">Load more calls</button>
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
