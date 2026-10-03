import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernChangePassword() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">🔑</div>

        <div className="eyebrow">Change password</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Change password</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; choose a strong password you haven't used before</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="field">
        <label>Current Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-cur-change-password-modern" placeholder="Enter current password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-modern'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
      <div className="field">
        <label>New Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-new-change-password-modern" placeholder="Enter new password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-modern'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
      <div className="field">
        <label>Confirm New Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-conf-change-password-modern" placeholder="Re-enter new password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-modern'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-email">Update Password</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}><a href="#">Forgot current password?</a></div>
      </div>
    </div>
  )
}
