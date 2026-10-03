import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandSso() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">🏢</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; use your organization's identity provider</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Sign in with SSO</div>
        <h1 className="form-title serif">Sign in with SSO</h1>
        <p className="form-sub mono">&gt; use your organization's identity provider</p>

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
          <button type="submit" className="btn-login">Continue with SSO</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Or <Link to="/login/brand">Sign In</Link></div>
      </div>
      </div>
    </div>
  )
}
