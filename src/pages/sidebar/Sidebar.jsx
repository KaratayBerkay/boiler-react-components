import { Link } from 'react-router-dom'
import '../components/Components.css'
import './Sidebar.css'

export default function SidebarComponents() {
  return (
    <div className="comp-page">
      <Link to="/" className="back-link mono">← Back to Templates</Link>
      <div className="comp-header">
        <div className="eyebrow">Layout Components</div>
        <h1 className="serif">Left Menu / Sidebar</h1>
        <p className="mono sub">&gt; navigation sidebar and menu variants</p>
      </div>

      <div className="comp-grid">

        <div className="comp-card wide">
          <div className="comp-label mono">01 · Full Sidebar with Sections</div>
          <div className="comp-preview sidebar-preview">
            <div className="sb-full">
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
            </div>
          </div>
        </div>

        <div className="comp-card wide">
          <div className="comp-label mono">02 · Compact Icon-Only Sidebar</div>
          <div className="comp-preview sidebar-preview">
            <div className="sb-compact">
              <span className="sb-compact-logo">📞</span>
              <a className="sb-compact-item active" title="Dashboard">🏠</a>
              <a className="sb-compact-item" title="Contacts">👥</a>
              <a className="sb-compact-item" title="Calls">📞</a>
              <a className="sb-compact-item" title="Messages">💬</a>
              <a className="sb-compact-item" title="Calendar">📅</a>
              <a className="sb-compact-item" title="Analytics">📊</a>
              <div className="sb-compact-spacer" />
              <a className="sb-compact-item" title="Settings">⚙️</a>
              <div className="sb-compact-avatar">BK</div>
            </div>
          </div>
        </div>

        <div className="comp-card wide">
          <div className="comp-label mono">03 · Collapsible Sidebar (Expanded)</div>
          <div className="comp-preview sidebar-preview">
            <div className="sb-collapsible">
              <div className="sb-col-header">
                <span className="sb-name">Navigation</span>
                <button className="sb-col-toggle">≡</button>
              </div>
              <a className="sb-col-item active">
                <span className="sb-ico">🏠</span>
                <span>Dashboard</span>
                <span className="sb-badge">12</span>
              </a>
              <a className="sb-col-item">
                <span className="sb-ico">👥</span>
                <span>Contacts</span>
              </a>
              <a className="sb-col-item">
                <span className="sb-ico">📞</span>
                <span>Recent Calls</span>
                <span className="sb-badge gold">3</span>
              </a>
              <a className="sb-col-item">
                <span className="sb-ico">💬</span>
                <span>Messages</span>
                <span className="sb-badge">8</span>
              </a>
              <a className="sb-col-item">
                <span className="sb-ico">📅</span>
                <span>Calendar</span>
              </a>
              <div className="sb-col-divider" />
              <a className="sb-col-item">
                <span className="sb-ico">⚙️</span>
                <span>Settings</span>
              </a>
              <a className="sb-col-item">
                <span className="sb-ico">❓</span>
                <span>Help & Support</span>
              </a>
            </div>
          </div>
        </div>

        <div className="comp-card wide">
          <div className="comp-label mono">04 · Collapsible Sidebar (Collapsed)</div>
          <div className="comp-preview sidebar-preview">
            <div className="sb-collapsed">
              <button className="sb-expand">→</button>
              <a className="sb-collapsed-item active" title="Dashboard">🏠</a>
              <a className="sb-collapsed-item" title="Contacts">👥</a>
              <a className="sb-collapsed-item" title="Calls">📞</a>
              <a className="sb-collapsed-item" title="Messages">💬</a>
              <a className="sb-collapsed-item" title="Calendar">📅</a>
              <div className="sb-collapsed-spacer" />
              <a className="sb-collapsed-item" title="Settings">⚙️</a>
            </div>
          </div>
        </div>

        <div className="comp-card wide">
          <div className="comp-label mono">05 · Floating Overlay Sidebar</div>
          <div className="comp-preview sidebar-preview dark-preview">
            <div className="sb-overlay-backdrop" />
            <div className="sb-overlay">
              <div className="sb-overlay-header">
                <span className="sb-name" style={{ color: 'var(--paper-2)' }}>Menu</span>
                <button className="sb-overlay-close">✕</button>
              </div>
              <a className="sb-overlay-item active"><span>🏠</span> Dashboard</a>
              <a className="sb-overlay-item"><span>👥</span> Contacts</a>
              <a className="sb-overlay-item"><span>📞</span> Calls</a>
              <a className="sb-overlay-item"><span>💬</span> Messages</a>
              <div className="sb-overlay-divider" />
              <a className="sb-overlay-item"><span>⚙️</span> Settings</a>
            </div>
          </div>
        </div>

        <div className="comp-card wide">
          <div className="comp-label mono">06 · Top-Down Navigation (No Sidebar)</div>
          <div className="comp-preview sidebar-preview">
            <div className="sb-topbar">
              <span className="sb-topbar-brand">📞 CallApp</span>
              <div className="sb-topbar-links">
                <a className="sb-topbar-link active">Dashboard</a>
                <a className="sb-topbar-link">Contacts</a>
                <a className="sb-topbar-link">Calls</a>
                <a className="sb-topbar-link">Messages</a>
                <a className="sb-topbar-link">Settings</a>
              </div>
              <div className="sb-topbar-actions">
                <span className="sb-topbar-dot" />
                <div className="sb-topbar-avatar">BK</div>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card wide">
          <div className="comp-label mono">07 · Nested Tree Menu</div>
          <div className="comp-preview sidebar-preview">
            <div className="sb-tree">
              <div className="sb-tree-item root open">
                <span className="sb-tree-arrow">▾</span> 📁 Calls
              </div>
              <div className="sb-tree-item child active">📞 Recent</div>
              <div className="sb-tree-item child">📱 Missed</div>
              <div className="sb-tree-item child">⭐ Favorites</div>
              <div className="sb-tree-item root">▸ 📁 Contacts</div>
              <div className="sb-tree-item root">▸ 📁 Messages</div>
              <div className="sb-tree-item root open">
                <span className="sb-tree-arrow">▾</span> 📁 Settings
              </div>
              <div className="sb-tree-item child">👤 Profile</div>
              <div className="sb-tree-item child">🔒 Privacy</div>
              <div className="sb-tree-item child">🔔 Notifications</div>
            </div>
          </div>
        </div>

        <div className="comp-card wide">
          <div className="comp-label mono">08 · Status Badge Sidebar</div>
          <div className="comp-preview sidebar-preview">
            <div className="sb-status">
              <div className="sb-status-item active">
                <span className="sb-ico">🏠</span>
                <span>Dashboard</span>
              </div>
              <div className="sb-status-item">
                <span className="sb-ico">📞</span>
                <span>Incoming</span>
                <span className="sb-status-dot green" />
              </div>
              <div className="sb-status-item">
                <span className="sb-ico">💬</span>
                <span>Messages</span>
                <span className="sb-status-badge">5</span>
              </div>
              <div className="sb-status-item">
                <span className="sb-ico">👥</span>
                <span>Team</span>
                <span className="sb-status-dot green" />
              </div>
              <div className="sb-status-item">
                <span className="sb-ico">📅</span>
                <span>Meetings</span>
                <span className="sb-status-dot yellow" />
              </div>
              <div className="sb-status-item">
                <span className="sb-ico">⚙️</span>
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
