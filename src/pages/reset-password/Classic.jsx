import { Link } from 'react-router-dom'
import './Reset.css'

export default function ClassicReset() {
  return (
    <div className="login-page classic-page">
      <div className="login-container">
        <Link to="/" className="back-link mono">← Back</Link>

        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>

        <div className="eyebrow">Reset Password</div>
        <h1 className="title serif">Forgot password?</h1>
        <p className="subtitle mono">&gt; enter your email to receive a reset link</p>

        <form onSubmit={e => e.preventDefault()}>
          <div className="field">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <button type="submit" className="btn-login">Send Reset Link</button>
        </form>

        <div className="divider mono"><span>or</span></div>

        <div className="back-login">
          Remember your password? <Link to="/login/classic">Sign In</Link>
        </div>
      </div>
    </div>
  )
}
