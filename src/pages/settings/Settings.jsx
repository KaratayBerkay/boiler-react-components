import { Link } from 'react-router-dom'
import '../components/Components.css'
import '../sidebar/Sidebar.css'
import '../dashboard/Dashboard.css'
import './Settings.css'

const settingsNav = [
  { icon: '👤', label: 'Profile', active: true },
  { icon: '🔒', label: 'Security' },
  { icon: '🔔', label: 'Notifications' },
  { icon: '🎨', label: 'Appearance' },
  { icon: '🎙️', label: 'Audio & Video' },
  { icon: '🌍', label: 'Language' },
  { icon: '💳', label: 'Billing' },
  { icon: '🔌', label: 'Integrations' },
]

export default function SettingsPage() {
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
          <a className="sb-item"><span className="sb-ico">📊</span> Analytics</a>
          <a className="sb-item active"><span className="sb-ico">⚙️</span> Settings</a>
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
            <div className="eyebrow">Settings</div>
            <h1 className="serif">Account Settings</h1>
          </div>
        </header>

        <div className="settings-layout">
          <nav className="settings-nav">
            {settingsNav.map(s => (
              <button key={s.label} className={`settings-nav-item ${s.active ? 'active' : ''}`}>
                <span>{s.icon}</span> {s.label}
              </button>
            ))}
          </nav>

          <div className="settings-content">
            <div className="settings-section">
              <h2 className="settings-title serif">Profile Information</h2>
              <p className="settings-sub mono">&gt; update your personal details</p>

              <div className="settings-avatar-row">
                <div className="settings-avatar">BK</div>
                <div className="settings-avatar-actions">
                  <button className="btn-gold" style={{ height: 36, fontSize: 13 }}>Upload Photo</button>
                  <button className="btn-outline" style={{ height: 36, fontSize: 13 }}>Remove</button>
                </div>
              </div>

              <div className="settings-form">
                <div className="settings-field">
                  <label>Full Name</label>
                  <input type="text" defaultValue="Berkay Kaya" />
                </div>
                <div className="settings-field">
                  <label>Email</label>
                  <input type="email" defaultValue="berkay@callapp.io" />
                </div>
                <div className="settings-field">
                  <label>Phone</label>
                  <input type="tel" defaultValue="+90 532 123 4567" />
                </div>
                <div className="settings-field full">
                  <label>Bio</label>
                  <textarea rows={3} defaultValue="Building things that shouldn't exist." />
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h2 className="settings-title serif">Preferences</h2>
              <p className="settings-sub mono">&gt; customize your experience</p>

              <div className="toggle-list">
                <div className="toggle-item">
                  <div className="toggle-copy">
                    <span className="toggle-title">Email notifications</span>
                    <span className="toggle-desc mono">Receive email updates about calls</span>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider" />
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-copy">
                    <span className="toggle-title">Auto-answer calls</span>
                    <span className="toggle-desc mono">Automatically accept incoming calls</span>
                  </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-copy">
                    <span className="toggle-title">Dark mode</span>
                    <span className="toggle-desc mono">Switch to dark theme</span>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider" />
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-copy">
                    <span className="toggle-title">Read receipts</span>
                    <span className="toggle-desc mono">Let others see when you read messages</span>
                  </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                  </label>
                </div>
              </div>
            </div>

            <div className="settings-actions">
              <button className="btn-outline" style={{ height: 44 }}>Cancel</button>
              <button className="btn-gold" style={{ height: 44 }}>Save Changes</button>
            </div>
          </div>
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
