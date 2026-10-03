import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicMagicLink() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Magic link sign-in</div>
        <h1 className="title serif" >Magic link sign-in</h1>
        <p className="subtitle mono" >&gt; no password needed — we'll email you a secure link</p>

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
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Prefer password? <Link to="/login/classic">Sign In</Link></div>
      </div>
    </div>
  )
}
