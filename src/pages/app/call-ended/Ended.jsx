import { Link } from 'react-router-dom'
import '../../components/Components.css'
import './Ended.css'

export default function CallEnded() {
  return (
    <div className="ended-page">
      <Link to="/" className="back-link mono" style={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.5)', zIndex: 10 }}>← Back</Link>

      <div className="ended-card">
        <div className="ended-icon-wrap">
          <span className="ended-icon">✅</span>
        </div>

        <h1 className="ended-title serif">Call Ended</h1>
        <p className="ended-sub mono">&gt; conversation with Ahmet Kaya</p>

        <div className="ended-stats">
          <div className="ended-stat">
            <span className="ended-stat-value serif">12:45</span>
            <span className="ended-stat-label mono">Duration</span>
          </div>
          <div className="ended-stat">
            <span className="ended-stat-value serif">HD</span>
            <span className="ended-stat-label mono">Quality</span>
          </div>
          <div className="ended-stat">
            <span className="ended-stat-value serif">4</span>
            <span className="ended-stat-label mono">Participants</span>
          </div>
        </div>

        <div className="ended-details">
          <div className="ended-detail-row">
            <span className="mono">Started</span>
            <span className="mono">14:30:12</span>
          </div>
          <div className="ended-detail-row">
            <span className="mono">Ended</span>
            <span className="mono">14:42:57</span>
          </div>
          <div className="ended-detail-row">
            <span className="mono">Type</span>
            <span className="mono">Video Call</span>
          </div>
          <div className="ended-detail-row">
            <span className="mono">Recording</span>
            <span className="mono" style={{ color: 'var(--gold)' }}>Available</span>
          </div>
        </div>

        <div className="ended-actions">
          <button className="ended-btn primary">📞 Call Again</button>
          <button className="ended-btn">💬 Send Message</button>
          <button className="ended-btn">📝 Add Note</button>
        </div>
      </div>
    </div>
  )
}
