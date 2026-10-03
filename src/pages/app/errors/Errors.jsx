import { Link } from 'react-router-dom'
import '../../components/Components.css'
import './Errors.css'

export default function ErrorsPage() {
  return (
    <div className="errors-page">
      <Link to="/" className="back-link mono" style={{ position: 'absolute', top: 24, left: 24, color: 'var(--sand)' }}>← Back to Templates</Link>

      <div className="errors-grid">

        <div className="error-card">
          <span className="error-code serif">404</span>
          <span className="error-icon">🧭</span>
          <h2 className="serif">Page Not Found</h2>
          <p className="mono">The page you're looking for doesn't exist or has been moved.</p>
          <div className="error-actions">
            <button className="error-btn primary">Go Home</button>
            <button className="error-btn">Report Issue</button>
          </div>
        </div>

        <div className="error-card">
          <span className="error-code serif">403</span>
          <span className="error-icon">🔒</span>
          <h2 className="serif">Access Denied</h2>
          <p className="mono">You don't have permission to view this resource.</p>
          <div className="error-actions">
            <button className="error-btn primary">Request Access</button>
            <button className="error-btn">Go Back</button>
          </div>
        </div>

        <div className="error-card">
          <span className="error-code serif">500</span>
          <span className="error-icon">💥</span>
          <h2 className="serif">Server Error</h2>
          <p className="mono">Something went wrong on our end. We're working on it.</p>
          <div className="error-actions">
            <button className="error-btn primary">Retry</button>
            <button className="error-btn">Contact Support</button>
          </div>
        </div>

        <div className="error-card">
          <span className="error-code serif">⚠</span>
          <span className="error-icon">📡</span>
          <h2 className="serif">Connection Lost</h2>
          <p className="mono">Unable to reach the server. Check your internet connection.</p>
          <div className="error-actions">
            <button className="error-btn primary">Reconnect</button>
            <button className="error-btn">Retry</button>
          </div>
        </div>

        <div className="error-card empty">
          <span className="error-icon big">📭</span>
          <h2 className="serif">No Results</h2>
          <p className="mono">We couldn't find anything matching your search.</p>
          <div className="error-actions">
            <button className="error-btn primary">Clear Search</button>
          </div>
        </div>

        <div className="error-card empty">
          <span className="error-icon big">🚀</span>
          <h2 className="serif">Nothing Here Yet</h2>
          <p className="mono">Get started by creating your first item.</p>
          <div className="error-actions">
            <button className="error-btn primary">+ Create New</button>
          </div>
        </div>

      </div>
    </div>
  )
}
