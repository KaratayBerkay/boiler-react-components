import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicSignup() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Create your account</div>
        <h1 className="title serif" >Create your account</h1>
        <p className="subtitle mono" >&gt; join callapp and start talking</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="field">
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />
      </div>
      <div className="field">
        <label>Email address</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label>Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-signup-classic" placeholder="Create a password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-signup-classic'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-login">Create Account</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Already have an account? <Link to="/login/classic">Sign In</Link></div>
      </div>
    </div>
  )
}
