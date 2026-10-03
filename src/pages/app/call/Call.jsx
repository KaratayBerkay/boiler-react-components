import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../../sidebar/Sidebar.css'
import '../../dashboard/Dashboard.css'
import './Call.css'

export default function CallPage() {
  return (
    <div className="call-page">
      <div className="call-video-area">
        <div className="call-partner-main">
          <div className="call-avatar-large">AK</div>
          <span className="call-partner-name">Ahmet Kaya</span>
        </div>
        <div className="call-self-view">
          <div className="call-avatar-small">BK</div>
          <span className="call-self-label mono">You</span>
        </div>
        <div className="call-timer mono">12:45</div>
        <div className="call-quality mono">
          <span className="quality-dot" />
          HD · 1080p · 60fps
        </div>
      </div>

      <div className="call-controls">
        <button className="call-ctrl" title="Mute">
          <span className="ctrl-icon">🎤</span>
          <span className="ctrl-label mono">Mute</span>
        </button>
        <button className="call-ctrl" title="Camera">
          <span className="ctrl-icon">🎥</span>
          <span className="ctrl-label mono">Camera</span>
        </button>
        <button className="call-ctrl" title="Screen Share">
          <span className="ctrl-icon">🖥</span>
          <span className="ctrl-label mono">Share</span>
        </button>
        <button className="call-ctrl" title="Chat">
          <span className="ctrl-icon">💬</span>
          <span className="ctrl-label mono">Chat</span>
        </button>
        <button className="call-ctrl" title="Participants">
          <span className="ctrl-icon">👥</span>
          <span className="ctrl-label mono">People</span>
        </button>
        <button className="call-ctrl" title="More">
          <span className="ctrl-icon">⋯</span>
          <span className="ctrl-label mono">More</span>
        </button>
        <button className="call-ctrl end" title="End Call">
          <span className="ctrl-icon">📵</span>
          <span className="ctrl-label mono">End</span>
        </button>
      </div>

      <Link to="/" className="back-link mono" style={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.5)', zIndex: 10 }}>← Back</Link>
    </div>
  )
}
