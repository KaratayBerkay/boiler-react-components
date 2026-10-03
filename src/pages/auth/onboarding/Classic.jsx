import { Link } from 'react-router-dom'
import '../../reset-password/Reset.css'
import '../signup/Signup.css'

export default function ClassicOnboarding() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono" >← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Welcome to CallApp</div>
        <h1 className="title serif" >Welcome to CallApp</h1>
        <p className="subtitle mono" >&gt; let's get you set up in 3 quick steps</p>

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
          <button className="social-btn">f</button>
        </div>
        <div className="signup" >Step 2 of 3</div>
      </div>
    </div>
  )
}
