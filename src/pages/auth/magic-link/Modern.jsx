import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernMagicLink() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">✨</div>

        <div className="eyebrow">Magic link sign-in</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Magic link sign-in</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; no password needed — we'll email you a secure link</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="field">
        <label>Email address</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="magic-info">
        <span>🔗</span>
        <p>We'll send you a one-time link that signs you in instantly. No password required.</p>
      </div>
          <button type="submit" className="btn-email">Send Magic Link</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Prefer password? <Link to="/login/modern">Sign In</Link></div>
      </div>
    </div>
  )
}
