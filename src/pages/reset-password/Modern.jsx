import { Link } from 'react-router-dom'
import './Reset.css'

export default function ModernReset() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: 'var(--sand)' }}>← Back</Link>

        <div className="icon-circle">🔑</div>
        <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--muted)' }}>Account Recovery</div>
        <h1 className="title serif" style={{ textAlign: 'center' }}>Reset your password</h1>
        <p className="subtitle mono" style={{ textAlign: 'center' }}>&gt; we'll send you a secure reset link</p>

        <form onSubmit={e => e.preventDefault()}>
          <input type="email" className="email-input" placeholder="Email address" />
          <button type="submit" className="btn-email">Send Reset Link</button>
        </form>

        <div className="divider mono"><span>or</span></div>

        <button className="btn-biometric" style={{ marginBottom: 20 }}>
          <span style={{ fontSize: 20 }}>👆</span>
          Use Biometrics Instead
        </button>

        <div className="terms mono" style={{ marginTop: 0 }}>
          Remember your password? <Link to="/login/modern" style={{ color: 'var(--gold)', fontWeight: 600 }}>Sign In</Link>
        </div>
      </div>
    </div>
  )
}
