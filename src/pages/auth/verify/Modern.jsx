import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernVerify() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">📧</div>

        <div className="eyebrow">Check your inbox</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Check your inbox</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; we sent a verification code to your email</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="otp-row" style={{ margin: '8px 0' }}>
        {[null,null,null,null,null,null].map((_, i) => (
          <input key={i} type="text" className="otp-box" maxLength={1} />
        ))}
      </div>
      <span className="otp-hint mono" style={{ textAlign: 'center', display: 'block' }}>Code expires in 10:00</span>
          <button type="submit" className="btn-email">Verify Email</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Didn't receive it? <a href="#">Resend code</a></div>
      </div>
    </div>
  )
}
