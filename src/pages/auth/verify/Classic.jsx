import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicVerify() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Check your inbox</div>
        <h1 className="title serif" >Check your inbox</h1>
        <p className="subtitle mono" >&gt; we sent a verification code to your email</p>

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
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Didn't receive it? <a href="#">Resend code</a></div>
      </div>
    </div>
  )
}
