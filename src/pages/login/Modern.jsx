import { Link } from 'react-router-dom'
import './Modern.css'

export default function ModernLogin() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: 'var(--sand)' }}>← Back</Link>

        <div className="icon-circle">🚀</div>
        <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--muted)' }}>Get Started</div>
        <h1 className="title serif" style={{ textAlign: 'center' }}>Choose your way in</h1>
        <p className="subtitle mono" style={{ textAlign: 'center' }}>&gt; sign in with your preferred method</p>

        <button className="btn-social">
          <span className="social-icon google">G</span>
          Continue with Google
        </button>

        <button className="btn-social">
          <span className="social-icon apple"></span>
          Continue with Apple
        </button>

        <button className="btn-social">
          <span className="social-icon microsoft">⊞</span>
          Continue with Microsoft
        </button>

        <button className="btn-biometric">
          <span style={{ fontSize: 20 }}>👆</span>
          Sign in with Face ID / Biometrics
        </button>

        <div className="divider mono"><span>or</span></div>

        <input type="email" className="email-input" placeholder="Email address" />
        <button className="btn-email">Continue with Email</button>

        <div className="terms mono">
          By continuing, you agree to our<br />
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}
