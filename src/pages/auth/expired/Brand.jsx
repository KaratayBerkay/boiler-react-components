import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandExpired() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">⏰</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; your session timed out for security</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Session expired</div>
        <h1 className="form-title serif">Session expired</h1>
        <p className="form-sub mono">&gt; your session timed out for security</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="lock-info">
        <span className="lock-icon">⏰</span>
        <p>Your session has expired. Please sign in again to continue.</p>
      </div>
          <button type="submit" className="btn-login">Sign In Again</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Your data is safe. <Link to="/login/brand">Sign In</Link></div>
      </div>
      </div>
    </div>
  )
}
