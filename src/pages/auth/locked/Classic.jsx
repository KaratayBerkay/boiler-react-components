import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicLocked() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Account locked</div>
        <h1 className="title serif" >Account locked</h1>
        <p className="subtitle mono" >&gt; too many failed attempts — try again later</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="lock-info">
        <span className="lock-icon">🔒</span>
        <p>Your account has been temporarily locked for security.</p>
        <p className="mono lock-timer">Unlock in 14:32</p>
      </div>
          <button type="submit" className="btn-login">Try Again Later</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Need help? <a href="#">Contact support</a></div>
      </div>
    </div>
  )
}
