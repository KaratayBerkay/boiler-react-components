import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernSignup() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">✨</div>

        <div className="eyebrow">Create your account</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Create your account</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; join callapp and start talking</p>

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
          <input type="password" id="pw-signup-modern" placeholder="Create a password" />
          <button type="button" className="toggle-password" onClick={() => { const el = document.getElementById('pw-signup-modern'); el.type = el.type === 'password' ? 'text' : 'password' }}>👁</button>
        </div>
      </div>
          <button type="submit" className="btn-email">Create Account</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Already have an account? <Link to="/login/modern">Sign In</Link></div>
      </div>
    </div>
  )
}
