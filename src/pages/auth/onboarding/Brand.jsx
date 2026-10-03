import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function BrandOnboarding() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">🚀</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; let's get you set up in 3 quick steps</div>
        </div>

      <div className="form-card">
        <div className="eyebrow">Welcome to CallApp</div>
        <h1 className="form-title serif">Welcome to CallApp</h1>
        <p className="form-sub mono">&gt; let's get you set up in 3 quick steps</p>

        <form onSubmit={e => e.preventDefault()}>
          
      <div className="onboarding-steps">
        {[
          { n: 1, title: 'Create your profile', done: true },
          { n: 2, title: 'Verify your email', active: true },
          { n: 3, title: 'Invite your team' },
        ].map(s => (
          <div key={s.n} className={`step ${s.done ? 'done' : ''} ${s.active ? 'active' : ''}`}>
            <span className="step-num">{s.done ? '✓' : s.n}</span>
            <span className="step-title">{s.title}</span>
          </div>
        ))}
      </div>
          <button type="submit" className="btn-login">Continue</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>
        <div className="signup">Step 2 of 3</div>
      </div>
      </div>
    </div>
  )
}
