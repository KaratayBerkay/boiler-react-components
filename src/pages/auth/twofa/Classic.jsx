import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicTwofa() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Two-factor authentication</div>
        <h1 className="title serif" >Two-factor authentication</h1>
        <p className="subtitle mono" >&gt; enter the code from your authenticator app</p>

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
          <button type="submit" className="btn-login">Verify</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Lost your device? <a href="#">Use a backup code</a></div>
      </div>
    </div>
  )
}
