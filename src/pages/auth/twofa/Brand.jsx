import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandTwofa() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">🛡️</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; enter the code from your authenticator app</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Two-factor authentication</div>
        <h1 className="form-title serif">Two-factor authentication</h1>
        <p className="form-sub mono">&gt; enter the code from your authenticator app</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="otp-row" style={{ margin: '8px 0' }}>
        {[null,null,null,null,null,null].map((_, i) => (
          <input key={i} type="text" className="otp-box" maxLength={1} />
        ))}
      </div>
      <label className="remember" style={{ marginTop: 8 }}>
        <input type="checkbox" />
        Trust this device for 30 days
      </label>
          <button type="submit" className="btn-login">Verify</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Lost your device? <a href="#">Use a backup code</a></div>
      </div>
      </div>
    </div>
  )
}
