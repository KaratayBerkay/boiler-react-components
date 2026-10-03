import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicExpired() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Session expired</div>
        <h1 className="title serif" >Session expired</h1>
        <p className="subtitle mono" >&gt; your session timed out for security</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="lock-info">
        <span className="lock-icon">⏰</span>
        <p>Your session has expired. Please sign in again to continue.</p>
      </div>
          <button type="submit" className="btn-login">Sign In Again</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Your data is safe. <Link to="/login/classic">Sign In</Link></div>
      </div>
    </div>
  )
}
