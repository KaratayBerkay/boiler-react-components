import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../call/Call.css'
import './Incoming.css'

export default function CallIncoming() {
  return (
    <div className="incoming-page">
      <Link to="/" className="back-link mono" style={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.5)', zIndex: 10 }}>← Back</Link>

      <div className="incoming-content">
        <span className="incoming-label mono">Incoming Call</span>

        <div className="incoming-avatar-wrap">
          <div className="incoming-pulse" />
          <div className="incoming-pulse delay" />
          <div className="incoming-avatar">EY</div>
        </div>

        <h1 className="incoming-name serif">Elif Yılmaz</h1>
        <span className="incoming-number mono">+90 555 987 6543</span>

        <div className="incoming-actions">
          <button className="incoming-btn reject">
            <span className="ib-icon">📵</span>
            <span className="ib-label mono">Decline</span>
          </button>
          <button className="incoming-btn accept">
            <span className="ib-icon">📞</span>
            <span className="ib-label mono">Accept</span>
          </button>
          <button className="incoming-btn message">
            <span className="ib-icon">💬</span>
            <span className="ib-label mono">Message</span>
          </button>
        </div>

        <div className="incoming-options">
          <button className="incoming-option mono">🔇 Mute</button>
          <button className="incoming-option mono">🎥 Video Call</button>
        </div>
      </div>
    </div>
  )
}
