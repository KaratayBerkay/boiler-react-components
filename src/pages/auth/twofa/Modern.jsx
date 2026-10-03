import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernTwofa() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">🛡️</div>

        <div className="eyebrow">Two-factor authentication</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Two-factor authentication</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; enter the code from your authenticator app</p>

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
          <button type="submit" className="btn-email">Verify</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Lost your device? <a href="#">Use a backup code</a></div>
      </div>
    </div>
  )
}
