import { Link } from 'react-router-dom'
import './Reset.css'

export default function BrandReset() {
  return (
    <div className="login-page brand-page">
      <div className="brand-wrapper">
        <Link to="/" className="back-link mono" style={{ color: 'var(--sand)' }}>← Back</Link>

        <div className="brand">
          <div className="brand-icon">🔑</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; account recovery</div>
        </div>

        <div className="form-card">
          <div className="eyebrow">Reset Password</div>
          <h1 className="form-title serif">Forgot your password?</h1>
          <p className="form-sub mono">&gt; enter your email and we'll send a reset link</p>

          <form onSubmit={e => e.preventDefault()}>
            <div className="field">
              <label>Email address</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className="field">
              <label>Verification Code</label>
              <input type="text" placeholder="000 000" maxLength={6} style={{ letterSpacing: '0.3em', textAlign: 'center', fontSize: '18px', fontWeight: 700 }} />
            </div>

            <div className="field">
              <label>New Password</label>
              <div className="password-wrapper">
                <input type="password" id="pw-reset-brand" placeholder="Enter new password" />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => {
                    const el = document.getElementById('pw-reset-brand')
                    el.type = el.type === 'password' ? 'text' : 'password'
                  }}
                >👁</button>
              </div>
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <div className="password-wrapper">
                <input type="password" id="pw-reset-brand2" placeholder="Re-enter new password" />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => {
                    const el = document.getElementById('pw-reset-brand2')
                    el.type = el.type === 'password' ? 'text' : 'password'
                  }}
                >👁</button>
              </div>
            </div>

            <button type="submit" className="btn-login">Reset Password</button>
          </form>

          <div className="divider mono"><span>or</span></div>

          <div className="signup">
            Remember your password? <Link to="/login/brand">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
