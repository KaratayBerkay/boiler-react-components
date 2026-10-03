import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../../sidebar/Sidebar.css'
import '../../dashboard/Dashboard.css'
import './Team.css'

const members = [
  { name: 'Ahmet Kaya', email: 'ahmet@callapp.io', role: 'Owner', status: 'online', avatar: 'AK', color: 'green' },
  { name: 'Berkay Kaya', email: 'berkay@callapp.io', role: 'Admin', status: 'online', avatar: 'BK', color: 'gold' },
  { name: 'Elif Yılmaz', email: 'elif@callapp.io', role: 'Member', status: 'online', avatar: 'EY', color: 'blue' },
  { name: 'Mehmet Demir', email: 'mehmet@callapp.io', role: 'Member', status: 'offline', avatar: 'MD', color: 'purple' },
  { name: 'Zeynep Arslan', email: 'zeynep@callapp.io', role: 'Editor', status: 'away', avatar: 'ZA', color: 'red' },
  { name: 'Can Öztürk', email: 'can@callapp.io', role: 'Member', status: 'online', avatar: 'CÖ', color: 'green' },
  { name: 'Ayşe Şahin', email: 'ayse@callapp.io', role: 'Viewer', status: 'offline', avatar: 'AŞ', color: 'blue' },
  { name: 'Burak Çelik', email: 'burak@callapp.io', role: 'Pending', status: 'offline', avatar: 'BÇ', color: 'purple' },
]

export default function TeamPage() {
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
          <a className="sb-item active"><span className="sb-ico">👥</span> Team</a>
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
        <header className="app-header">
          <div>
            <div className="eyebrow">Team</div>
            <h1 className="serif">Team Members</h1>
          </div>
          <div className="app-header-actions">
            <input className="search-input mono" placeholder="Search members..." />
            <button className="btn-gold">+ Invite Member</button>
          </div>
        </header>

        <div className="team-stats">
          <div className="team-stat-card">
            <span className="team-stat-value serif">8</span>
            <span className="team-stat-label mono">Total Members</span>
          </div>
          <div className="team-stat-card">
            <span className="team-stat-value serif">4</span>
            <span className="team-stat-label mono">Online Now</span>
          </div>
          <div className="team-stat-card">
            <span className="team-stat-value serif">1</span>
            <span className="team-stat-label mono">Pending Invite</span>
          </div>
          <div className="team-stat-card">
            <span className="team-stat-value serif">3</span>
            <span className="team-stat-label mono">Roles</span>
          </div>
        </div>

        <div className="team-table-wrap">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <tr key={i}>
                  <td>
                    <div className="contact-cell">
                      <div className={`contact-avatar ${m.color}`} style={{ position: 'relative' }}>
                        {m.avatar}
                        <span className={`status-dot ${m.status}`} style={{ position: 'absolute', bottom: -1, right: -1 }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{m.name}</div>
                        <div className="mono" style={{ fontSize: 11, color: 'var(--sand)' }}>{m.email}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className={`role-badge mono ${m.role.toLowerCase()}`}>{m.role}</span></td>
                  <td><span className={`contact-status mono ${m.status}`}>{m.status}</span></td>
                  <td className="mono dim">2 hr ago</td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="contact-action" title="Message">💬</button>
                      <button className="contact-action" title="More">⋯</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
