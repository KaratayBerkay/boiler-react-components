import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandSignup() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">✨</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; join callapp and start talking</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Create your account</div>
        <h1 className="form-title serif">Create your account</h1>
        <p className="form-sub mono">&gt; join callapp and start talking</p>

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
          <input type="password" id="pw-signup-brand" placeholder="Create a password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-signup-brand'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-login">Create Account</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Already have an account? <Link to="/login/brand">Sign In</Link></div>
      </div>
      </div>
    </div>
  )
}
