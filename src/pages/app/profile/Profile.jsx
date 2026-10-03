import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../../sidebar/Sidebar.css'
import '../../dashboard/Dashboard.css'
import './Profile.css'

export default function ProfilePage() {
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
        <Link to="/" className="back-link mono" style={{ display: 'inline-block', marginBottom: 20, color: 'var(--sand)' }}>← Back</Link>

        <div className="profile-cover" />

        <div className="profile-header">
          <div className="profile-avatar">BK</div>
          <div className="profile-info">
            <h1 className="serif">Berkay Kaya</h1>
            <p className="profile-handle mono">@berkay · Online</p>
            <p className="profile-bio">Building things that shouldn't exist. Product designer & developer.</p>
          </div>
          <div className="profile-actions">
            <button className="btn-gold">📞 Call</button>
            <button className="btn-outline" style={{ height: 42 }}>💬 Message</button>
            <button className="btn-outline" style={{ height: 42 }}>⋯</button>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-value serif">248</span>
            <span className="profile-stat-label mono">Calls Made</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-value serif">1.2k</span>
            <span className="profile-stat-label mono">Contacts</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-value serif">56</span>
            <span className="profile-stat-label mono">Meetings</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-value serif">98%</span>
            <span className="profile-stat-label mono">Response Rate</span>
          </div>
        </div>

        <div className="profile-grid">
          <div className="profile-panel">
            <h3 className="serif">About</h3>
            <div className="profile-about">
              <div className="about-row"><span className="mono">Role</span><span>Product Designer</span></div>
              <div className="about-row"><span className="mono">Company</span><span>CallApp</span></div>
              <div className="about-row"><span className="mono">Location</span><span>Istanbul, TR</span></div>
              <div className="about-row"><span className="mono">Timezone</span><span>GMT+3</span></div>
              <div className="about-row"><span className="mono">Joined</span><span>Jan 2026</span></div>
            </div>
          </div>

          <div className="profile-panel">
            <h3 className="serif">Recent Activity</h3>
            <div className="profile-activity">
              <div className="activity-item"><span>📞</span><div><span>Called Ahmet Kaya</span><span className="mono">12 min ago</span></div></div>
              <div className="activity-item"><span>💬</span><div><span>Sent message to Team Chat</span><span className="mono">1 hr ago</span></div></div>
              <div className="activity-item"><span>📅</span><div><span>Scheduled Design Sync</span><span className="mono">3 hr ago</span></div></div>
              <div className="activity-item"><span>👥</span><div><span>Added Can Öztürk</span><span className="mono">Yesterday</span></div></div>
            </div>
          </div>

          <div className="profile-panel">
            <h3 className="serif">Skills / Tags</h3>
            <div className="profile-tags">
              {['Design', 'Flutter', 'React', 'UI/UX', 'Figma', 'Prototyping', 'Research', 'Agile'].map(t => (
                <span key={t} className="profile-tag mono">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
