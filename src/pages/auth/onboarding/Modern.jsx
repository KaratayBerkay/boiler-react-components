import { Link } from 'react-router-dom'
import '../signup/Signup.css'

export default function ModernOnboarding() {
  return (
    <div className="login-page modern-page">
      <div className="login-container modern-container">
        <Link to="/" className="back-link mono" style={{ color: "var(--sand)" }}>← Back</Link>

        <div className="icon-circle">🚀</div>

        <div className="eyebrow">Welcome to CallApp</div>
        <h1 className="title serif" style={{ textAlign: "center" }}>Welcome to CallApp</h1>
        <p className="subtitle mono" style={{ textAlign: "center" }}>&gt; let's get you set up in 3 quick steps</p>

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
          <button type="submit" className="btn-email">Continue</button>
        </form>

        <div className="divider mono"><span>or</span></div>
        
        <div className="signup" style={{ textAlign: "center" }}>Step 2 of 3</div>
      </div>
    </div>
  )
}
