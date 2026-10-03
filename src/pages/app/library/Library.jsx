import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../../sidebar/Sidebar.css'
import '../../dashboard/Dashboard.css'
import './Library.css'

const recordings = [
  { title: 'Client Review — Q4 Planning', duration: '45:12', date: 'Oct 3, 2026', size: '128 MB', type: 'video' },
  { title: 'Team Standup', duration: '15:30', date: 'Oct 3, 2026', size: '42 MB', type: 'audio' },
  { title: 'Design Sync — Mobile App', duration: '32:08', date: 'Oct 2, 2026', size: '95 MB', type: 'video' },
  { title: '1-on-1 with Elif', duration: '28:45', date: 'Oct 2, 2026', size: '82 MB', type: 'video' },
  { title: 'Sprint Retrospective', duration: '52:20', date: 'Oct 1, 2026', size: '156 MB', type: 'video' },
  { title: 'Quick Check-in', duration: '08:15', date: 'Oct 1, 2026', size: '24 MB', type: 'audio' },
]

export default function LibraryPage() {
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
          <a className="sb-item active"><span className="sb-ico">📁</span> Library</a>
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
            <div className="eyebrow">Library</div>
            <h1 className="serif">Recordings</h1>
          </div>
          <div className="app-header-actions">
            <input className="search-input mono" placeholder="Search recordings..." />
            <button className="btn-outline" style={{ height: 42 }}>📥 Upload</button>
          </div>
        </header>

        <div className="lib-filters">
          <button className="filter-btn active mono">All (6)</button>
          <button className="filter-btn mono">🎥 Video</button>
          <button className="filter-btn mono">🎙 Audio</button>
          <button className="filter-btn mono">📅 This Week</button>
        </div>

        <div className="lib-grid">
          {recordings.map((r, i) => (
            <div className="lib-card" key={i}>
              <div className={`lib-thumb ${r.type}`}>
                <span className="lib-thumb-icon">{r.type === 'video' ? '🎥' : '🎙'}</span>
                <span className="lib-duration mono">{r.duration}</span>
                <button className="lib-play">▶</button>
              </div>
              <div className="lib-info">
                <span className="lib-title">{r.title}</span>
                <div className="lib-meta mono">
                  <span>{r.date}</span>
                  <span>{r.size}</span>
                </div>
              </div>
              <div className="lib-actions">
                <button className="contact-action" title="Download">📥</button>
                <button className="contact-action" title="Share">🔗</button>
                <button className="contact-action" title="More">⋯</button>
              </div>
            </div>
          ))}
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
