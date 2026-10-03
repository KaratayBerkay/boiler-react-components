import { Link } from 'react-router-dom'
import './Classic.css'

export default function ClassicLogin() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono">← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Sign In</div>
        <h1 className="title serif">Welcome back</h1>
        <p className="subtitle mono">&gt; sign in to your account to continue</p>

        <form onSubmit={e => e.preventDefault()}>
          <div className="field">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="field">
            <label>Password</label>
            <div className="password-wrapper">
              <input type="password" id="pw-classic" placeholder="Enter your password" />
              <button
                type="button"
                className="toggle-password"
                onClick={() => {
                  const el = document.getElementById('pw-classic')
                  el.type = el.type === 'password' ? 'text' : 'password'
                }}
              >👁</button>
            </div>
          </div>

          <div className="forgot-row">
            <a href="#" className="forgot mono">Forgot password?</a>
          </div>

          <button type="submit" className="btn-login">Sign In</button>
        </form>

        <div className="divider mono"><span>or continue with</span></div>

        <div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">f</button>
        </div>

        <div className="signup">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  )
}
