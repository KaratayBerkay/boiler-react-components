import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernExpired() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">⏰</div>

        <div className="eyebrow">Session expired</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Session expired</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; your session timed out for security</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="lock-info">
        <span className="lock-icon">⏰</span>
        <p>Your session has expired. Please sign in again to continue.</p>
      </div>
          <button type="submit" className="btn-email">Sign In Again</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Your data is safe. <Link to="/login/modern">Sign In</Link></div>
      </div>
    </div>
  )
}
