import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandMagicLink() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">✨</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; no password needed — we'll email you a secure link</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Magic link sign-in</div>
        <h1 className="form-title serif">Magic link sign-in</h1>
        <p className="form-sub mono">&gt; no password needed — we'll email you a secure link</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="field">
        <label>Email address</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="magic-info">
        <span>🔗</span>
        <p>We'll send you a one-time link that signs you in instantly. No password required.</p>
      </div>
          <button type="submit" className="btn-login">Send Magic Link</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Prefer password? <Link to="/login/brand">Sign In</Link></div>
      </div>
      </div>
    </div>
  )
}
