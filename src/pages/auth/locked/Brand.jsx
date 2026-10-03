import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandLocked() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">🔒</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; too many failed attempts — try again later</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Account locked</div>
        <h1 className="form-title serif">Account locked</h1>
        <p className="form-sub mono">&gt; too many failed attempts — try again later</p>

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
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Need help? <a href="#">Contact support</a></div>
      </div>
      </div>
    </div>
  )
}
