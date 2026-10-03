import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandChangePassword() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">🔑</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; choose a strong password you haven't used before</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Change password</div>
        <h1 className="form-title serif">Change password</h1>
        <p className="form-sub mono">&gt; choose a strong password you haven't used before</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="field">
        <label>Current Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-cur-change-password-brand" placeholder="Enter current password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-brand'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
      <div className="field">
        <label>New Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-new-change-password-brand" placeholder="Enter new password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-brand'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
      <div className="field">
        <label>Confirm New Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-conf-change-password-brand" placeholder="Re-enter new password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-brand'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-login">Update Password</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup"><a href="#">Forgot current password?</a></div>
      </div>
      </div>
    </div>
  )
}
