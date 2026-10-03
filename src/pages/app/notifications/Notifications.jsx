import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../../sidebar/Sidebar.css'
import '../../dashboard/Dashboard.css'
import './Notifications.css'

const notifications = [
  { icon: '📞', title: 'Missed call from Mehmet Demir', time: '2 min ago', type: 'call', unread: true },
  { icon: '💬', title: 'New message from Elif Yılmaz', time: '15 min ago', type: 'message', unread: true },
  { icon: '📅', title: 'Meeting reminder: Team Standup in 30 min', time: '30 min ago', type: 'calendar', unread: true },
  { icon: '👥', title: 'Ahmet Kaya joined your workspace', time: '1 hr ago', type: 'team', unread: false },
  { icon: '📧', title: 'Your verification code is 482916', time: '2 hr ago', type: 'security', unread: false },
  { icon: '📊', title: 'Weekly report is ready', time: '5 hr ago', type: 'report', unread: false },
  { icon: '📞', title: 'Call recording available: Client Review', time: 'Yesterday', type: 'call', unread: false },
  { icon: '🔔', title: 'Zeynep Arslan mentioned you in a message', time: 'Yesterday', type: 'message', unread: false },
  { icon: '⚙️', title: 'Password changed successfully', time: '2 days ago', type: 'security', unread: false },
]

export default function NotificationsPage() {
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
          <a className="sb-item"><span className="sb-ico">💬</span> Messages</a>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Workspace</span>
          <a className="sb-item"><span className="sb-ico">📅</span> Calendar</a>
          <a className="sb-item active"><span className="sb-ico">🔔</span> Notifications</a>
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
            <div className="eyebrow">Notifications</div>
            <h1 className="serif">Notifications</h1>
          </div>
          <div className="app-header-actions">
            <button className="btn-outline" style={{ height: 42 }}>Mark all read</button>
            <button className="btn-outline" style={{ height: 42 }}>⚙️ Preferences</button>
          </div>
        </header>

        <div className="notif-filters">
          <button className="filter-btn active mono">All (9)</button>
          <button className="filter-btn mono">📞 Calls</button>
          <button className="filter-btn mono">💬 Messages</button>
          <button className="filter-btn mono">📅 Calendar</button>
          <button className="filter-btn mono">🔒 Security</button>
        </div>

        <div className="notif-list">
          {notifications.map((n, i) => (
            <div key={i} className={`notif-item ${n.unread ? 'unread' : ''}`}>
              <div className={`notif-icon ${n.type}`}>{n.icon}</div>
              <div className="notif-copy">
                <span className="notif-title">{n.title}</span>
                <span className="notif-time mono">{n.time}</span>
              </div>
              {n.unread && <span className="notif-dot" />}
              <button className="notif-dismiss">✕</button>
            </div>
          ))}
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
