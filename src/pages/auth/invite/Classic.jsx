import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicInvite() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">You've been invited</div>
        <h1 className="title serif" >You've been invited</h1>
        <p className="subtitle mono" >&gt; join the team on callapp</p>

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
          <input type="password" id="pw-invite-invite-classic" placeholder="Create a password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-invite-classic'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-login">Accept Invite</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Not expecting this? <a href="#">Ignore</a></div>
      </div>
    </div>
  )
}
