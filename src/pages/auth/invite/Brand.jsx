import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandInvite() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">📬</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; join the team on callapp</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">You've been invited</div>
        <h1 className="form-title serif">You've been invited</h1>
        <p className="form-sub mono">&gt; join the team on callapp</p>

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
          <input type="password" id="pw-invite-invite-brand" placeholder="Create a password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-invite-brand'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-login">Accept Invite</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Not expecting this? <a href="#">Ignore</a></div>
      </div>
      </div>
    </div>
  )
}
