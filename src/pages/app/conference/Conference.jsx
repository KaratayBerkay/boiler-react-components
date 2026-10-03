import { Link } from 'react-router-dom'
import '../../components/Components.css'
import '../call/Call.css'
import './Conference.css'

const participants = [
  { name: 'Ahmet Kaya', initials: 'AK', speaking: true, muted: false, color: 'green' },
  { name: 'Elif Yılmaz', initials: 'EY', speaking: false, muted: true, color: 'blue' },
  { name: 'Mehmet Demir', initials: 'MD', speaking: false, muted: false, color: 'purple' },
  { name: 'Zeynep Arslan', initials: 'ZA', speaking: false, muted: false, color: 'red' },
  { name: 'Can Öztürk', initials: 'CÖ', speaking: false, muted: true, color: 'green' },
  { name: 'Berkay (You)', initials: 'BK', speaking: false, muted: false, color: 'gold' },
]

export default function ConferencePage() {
  return (
    <div className="conf-page">
      <Link to="/" className="back-link mono" style={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.5)', zIndex: 10 }}>← Back</Link>

      <div className="conf-header">
        <span className="conf-title mono">Design Sprint — Weekly Sync</span>
        <div className="conf-meta">
          <span className="conf-timer mono">24:18</span>
          <span className="conf-rec mono">● REC</span>
          <span className="conf-count mono">6 participants</span>
        </div>
      </div>

      <div className="conf-grid">
        {participants.map((p, i) => (
          <div key={i} className={`conf-tile ${p.speaking ? 'speaking' : ''} ${p.color}`}>
            <div className="conf-tile-avatar">{p.initials}</div>
            <div className="conf-tile-footer">
              <span className="conf-tile-name">{p.name}</span>
              <span className={`conf-tile-mic ${p.muted ? 'muted' : ''}`}>
                {p.muted ? '🔇' : '🎤'}
              </span>
            </div>
            {p.speaking && <span className="speaking-indicator" />}
          </div>
        ))}
      </div>

      <div className="call-controls" style={{ background: 'rgba(0,0,0,0.7)' }}>
        <button className="call-ctrl" title="Mute"><span className="ctrl-icon">🎤</span><span className="ctrl-label mono">Mute</span></button>
        <button className="call-ctrl" title="Camera"><span className="ctrl-icon">🎥</span><span className="ctrl-label mono">Camera</span></button>
        <button className="call-ctrl" title="Share"><span className="ctrl-icon">🖥</span><span className="ctrl-label mono">Share</span></button>
        <button className="call-ctrl" title="Chat"><span className="ctrl-icon">💬</span><span className="ctrl-label mono">Chat</span></button>
        <button className="call-ctrl" title="Layout"><span className="ctrl-icon">⊞</span><span className="ctrl-label mono">Layout</span></button>
        <button className="call-ctrl end" title="Leave"><span className="ctrl-icon">📵</span><span className="ctrl-label mono">Leave</span></button>
      </div>
    </div>
  )
}
