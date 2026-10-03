import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicChangePassword() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Change password</div>
        <h1 className="title serif" >Change password</h1>
        <p className="subtitle mono" >&gt; choose a strong password you haven't used before</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="field">
        <label>Current Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-cur-change-password-classic" placeholder="Enter current password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-classic'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
      <div className="field">
        <label>New Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-new-change-password-classic" placeholder="Enter new password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-classic'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
      <div className="field">
        <label>Confirm New Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-conf-change-password-classic" placeholder="Re-enter new password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-change-password-classic'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-login">Update Password</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">f</button>
        </div>
        <div className="signup" ><a href="#">Forgot current password?</a></div>
      </div>
    </div>
  )
}
