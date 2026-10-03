import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernLocked() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">🔒</div>

        <div className="eyebrow">Account locked</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Account locked</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; too many failed attempts — try again later</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="lock-info">
        <span className="lock-icon">🔒</span>
        <p>Your account has been temporarily locked for security.</p>
        <p className="mono lock-timer">Unlock in 14:32</p>
      </div>
          <button type="submit" className="btn-email">Try Again Later</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Need help? <a href="#">Contact support</a></div>
      </div>
    </div>
  )
}
