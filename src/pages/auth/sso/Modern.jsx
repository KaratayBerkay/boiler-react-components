import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernSso() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">🏢</div>

        <div className="eyebrow">Sign in with SSO</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Sign in with SSO</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; use your organization's identity provider</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="field">
        <label>Work Email</label>
        <input type="email" placeholder="you@company.com" />
      </div>
      <div className="sso-options">
        {['Okta', 'Azure AD', 'Google Workspace', 'OneLogin'].map(p => (
          <button key={p} className="sso-btn">
            <span className="sso-icon">🏢</span>
            Continue with {p}
          </button>
        ))}
      </div>
          <button type="submit" className="btn-email">Continue with SSO</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Or <Link to="/login/modern">Sign In</Link></div>
      </div>
    </div>
  )
}
