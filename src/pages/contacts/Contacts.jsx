import { Link } from 'react-router-dom'
import '../components/Components.css'
import '../sidebar/Sidebar.css'
import '../dashboard/Dashboard.css'
import './Contacts.css'

const contacts = [
  { name: 'Ahmet Kaya', email: 'ahmet@callapp.io', status: 'online', group: 'Team', avatar: 'AK', color: 'green' },
  { name: 'Elif Yılmaz', email: 'elif@callapp.io', status: 'online', group: 'Team', avatar: 'EY', color: 'blue' },
  { name: 'Mehmet Demir', email: 'mehmet@gmail.com', status: 'offline', group: 'Friends', avatar: 'MD', color: 'purple' },
  { name: 'Zeynep Arslan', email: 'zeynep@company.com', status: 'away', group: 'Work', avatar: 'ZA', color: 'red' },
  { name: 'Can Öztürk', email: 'can@startup.io', status: 'online', group: 'Team', avatar: 'CÖ', color: 'green' },
  { name: 'Ayşe Şahin', email: 'ayse@design.co', status: 'offline', group: 'Friends', avatar: 'AŞ', color: 'blue' },
  { name: 'Burak Çelik', email: 'burak@dev.io', status: 'online', group: 'Work', avatar: 'BÇ', color: 'purple' },
  { name: 'Deniz Korkmaz', email: 'deniz@mail.com', status: 'away', group: 'Friends', avatar: 'DK', color: 'red' },
]

export default function ContactsPage() {
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
          <a className="sb-item active"><span className="sb-ico">👥</span> Contacts</a>
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
            <div className="eyebrow">Contacts</div>
            <h1 className="serif">Your Contacts</h1>
          </div>
          <div className="app-header-actions">
            <input className="search-input mono" placeholder="Search contacts..." />
            <button className="btn-gold">+ Add Contact</button>
          </div>
        </header>

        <div className="contacts-layout">
          <div className="contacts-filters">
            <button className="filter-btn active mono">All ({contacts.length})</button>
            <button className="filter-btn mono">Online (4)</button>
            <button className="filter-btn mono">Team (4)</button>
            <button className="filter-btn mono">Friends (3)</button>
            <button className="filter-btn mono">Work (3)</button>
          </div>

          <div className="contacts-grid">
            {contacts.map((c, i) => (
              <div className="contact-card" key={i}>
                <div className="contact-card-top">
                  <div className={`contact-card-avatar ${c.color}`}>
                    {c.avatar}
                    <span className={`status-dot ${c.status}`} />
                  </div>
                  <div className="contact-card-actions">
                    <button className="contact-action" title="Call">📞</button>
                    <button className="contact-action" title="Message">💬</button>
                    <button className="contact-action" title="More">⋯</button>
                  </div>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-name">{c.name}</span>
                  <span className="contact-card-email mono">{c.email}</span>
                </div>
                <div className="contact-card-footer">
                  <span className={`contact-status mono ${c.status}`}>{c.status}</span>
                  <span className="contact-group mono">{c.group}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
