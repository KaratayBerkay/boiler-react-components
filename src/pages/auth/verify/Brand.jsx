import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandVerify() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">📧</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; we sent a verification code to your email</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Check your inbox</div>
        <h1 className="form-title serif">Check your inbox</h1>
        <p className="form-sub mono">&gt; we sent a verification code to your email</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="otp-row" style={{ margin: '8px 0' }}>
        {[null,null,null,null,null,null].map((_, i) => (
          <input key={i} type="text" className="otp-box" maxLength={1} />
        ))}
      </div>
      <span className="otp-hint mono" style={{ textAlign: 'center', display: 'block' }}>Code expires in 10:00</span>
          <button type="submit" className="btn-login">Verify Email</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Didn't receive it? <a href="#">Resend code</a></div>
      </div>
      </div>
    </div>
  )
}
