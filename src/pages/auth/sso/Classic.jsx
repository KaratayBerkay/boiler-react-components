import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicSso() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Sign in with SSO</div>
        <h1 className="title serif" >Sign in with SSO</h1>
        <p className="subtitle mono" >&gt; use your organization's identity provider</p>

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
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Or <Link to="/login/classic">Sign In</Link></div>
      </div>
    </div>
  )
}
