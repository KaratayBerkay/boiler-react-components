import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernInvite() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">📬</div>

        <div className="eyebrow">You've been invited</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>You've been invited</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; join the team on callapp</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="invite-card">
        <div className="invite-avatar">AK</div>
        <div className="invite-copy">
          <span className="invite-from">Ahmet Kaya</span>
          <span className="invite-email mono">ahmet@callapp.io</span>
        </div>
        <div className="invite-role mono">ADMIN</div>
      </div>
      <div className="field">
        <label>Set your password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-invite-invite-modern" placeholder="Create a password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-invite-modern'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-email">Accept Invite</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Not expecting this? <a href="#">Ignore</a></div>
      </div>
    </div>
  )
}
