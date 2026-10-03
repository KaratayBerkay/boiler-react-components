import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../../sidebar/Sidebar.css'
import '../../dashboard/Dashboard.css'
import './Search.css'

export default function SearchPage() {
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
        <div className="search-bar-large">
          <span className="search-icon">🔍</span>
          <input className="search-input mono" defaultValue="ahmet" style={{ flex: 1, border: 'none', background: 'none', fontSize: 16 }} />
          <kbd className="mono">ESC</kbd>
        </div>

        <div className="search-filters">
          <button className="filter-btn active mono">All (12)</button>
          <button className="filter-btn mono">👥 People (4)</button>
          <button className="filter-btn mono">📞 Calls (5)</button>
          <button className="filter-btn mono">💬 Messages (2)</button>
          <button className="filter-btn mono">📁 Files (1)</button>
        </div>

        <div className="search-results">
          <div className="search-section">
            <span className="search-section-label mono">People</span>
            <div className="search-result-item">
              <div className="contact-avatar green">AK</div>
              <div className="search-result-copy">
                <span className="search-result-title">Ahmet Kaya</span>
                <span className="search-result-sub mono">ahmet@callapp.io · Online</span>
              </div>
              <div className="search-result-actions">
                <button className="contact-action">📞</button>
                <button className="contact-action">💬</button>
              </div>
            </div>
            <div className="search-result-item">
              <div className="contact-avatar blue">EA</div>
              <div className="search-result-copy">
                <span className="search-result-title">Elif Arslan</span>
                <span className="search-result-sub mono">elif@company.com · Away</span>
              </div>
              <div className="search-result-actions">
                <button className="contact-action">📞</button>
                <button className="contact-action">💬</button>
              </div>
            </div>
          </div>

          <div className="search-section">
            <span className="search-section-label mono">Calls</span>
            <div className="search-result-item">
              <span className="search-result-icon">📞</span>
              <div className="search-result-copy">
                <span className="search-result-title">Call with Ahmet Kaya</span>
                <span className="search-result-sub mono">Today, 14:30 · 12:45 · Incoming</span>
              </div>
              <span className="call-type incoming">Incoming</span>
            </div>
            <div className="search-result-item">
              <span className="search-result-icon">🎥</span>
              <div className="search-result-copy">
                <span className="search-result-title">Video call — Ahmet & Team</span>
                <span className="search-result-sub mono">Yesterday, 10:00 · 45:00</span>
              </div>
              <span className="call-type video">Video</span>
            </div>
          </div>

          <div className="search-section">
            <span className="search-section-label mono">Messages</span>
            <div className="search-result-item">
              <span className="search-result-icon">💬</span>
              <div className="search-result-copy">
                <span className="search-result-title">"Hey Ahmet, can you review the PR?"</span>
                <span className="search-result-sub mono">Sent to Team Chat · Oct 2</span>
              </div>
            </div>
          </div>
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
