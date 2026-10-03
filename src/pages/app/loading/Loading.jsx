import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../../sidebar/Sidebar.css'
import '../../dashboard/Dashboard.css'
import './Loading.css'

export default function LoadingPage() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="sb-brand">
          <span className="sb-logo">📞</span>
          <span className="sb-name">CallApp</span>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Main</span>
          <div className="skel-nav" />
          <div className="skel-nav" style={{ width: '80%' }} />
          <div className="skel-nav" style={{ width: '70%' }} />
          <div className="skel-nav" style={{ width: '85%' }} />
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Workspace</span>
          <div className="skel-nav" style={{ width: '75%' }} />
          <div className="skel-nav" style={{ width: '65%' }} />
        </div>
        <div className="sb-footer">
          <div className="skel-circle" />
          <div className="skel-lines">
            <div className="skel-line" style={{ width: 80 }} />
            <div className="skel-line" style={{ width: 50 }} />
          </div>
        </div>
      </aside>

      <main className="app-main">
        <div className="loading-header">
          <div>
            <div className="skel-line" style={{ width: 80, height: 12, marginBottom: 10 }} />
            <div className="skel-line" style={{ width: 220, height: 32 }} />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="skel-box" style={{ width: 220, height: 42 }} />
            <div className="skel-box" style={{ width: 120, height: 42 }} />
          </div>
        </div>

        <div className="loading-stats">
          {[...Array(4)].map((_, i) => (
            <div className="skel-card" key={i}>
              <div className="skel-circle" style={{ width: 44, height: 44 }} />
              <div className="skel-lines" style={{ flex: 1 }}>
                <div className="skel-line" style={{ width: '60%', height: 24 }} />
                <div className="skel-line" style={{ width: '40%', height: 12 }} />
              </div>
            </div>
          ))}
        </div>

        <div className="loading-panels">
          <div className="skel-panel">
            <div className="skel-line" style={{ width: 140, height: 20, marginBottom: 20 }} />
            {[...Array(5)].map((_, i) => (
              <div className="skel-row" key={i}>
                <div className="skel-circle" style={{ width: 36, height: 36 }} />
                <div className="skel-lines" style={{ flex: 1 }}>
                  <div className="skel-line" style={{ width: `${60 + i * 5}%`, height: 14 }} />
                  <div className="skel-line" style={{ width: `${40 + i * 3}%`, height: 10 }} />
                </div>
                <div className="skel-box" style={{ width: 60, height: 28, borderRadius: 14 }} />
              </div>
            ))}
          </div>

          <div className="skel-panel">
            <div className="skel-line" style={{ width: 120, height: 20, marginBottom: 20 }} />
            <div className="skel-chart">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="skel-bar" style={{ height: `${30 + Math.random() * 60}%` }} />
              ))}
            </div>
          </div>
        </div>

        <div className="loading-spinner-section">
          <div className="loading-spinner" />
          <span className="mono" style={{ color: 'var(--sand)', fontSize: 13 }}>Loading data...</span>
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
