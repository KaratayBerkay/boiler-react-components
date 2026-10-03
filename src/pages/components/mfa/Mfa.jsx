import { Link } from 'react-router-dom'
import '../Components.css'

export default function MfaComponents() {
  return (
    <div className="comp-page">
      <Link to="/" className="back-link mono">← Back to Templates</Link>
      <div className="comp-header">
        <div className="eyebrow">Authentication Components</div>
        <h1 className="serif">Multi-Factor Auth</h1>
        <p className="mono sub">&gt; OTP inputs, verification codes, and 2FA components</p>
      </div>

      <div className="comp-grid">

        <div className="comp-card">
          <div className="comp-label mono">01 · 6-Digit OTP Boxes</div>
          <div className="comp-preview">
            <div className="otp-row">
              {[4, 7, 1, 9, 2, 0].map((d, i) => (
                <input key={i} type="text" className="otp-box" defaultValue={d} maxLength={1} />
              ))}
            </div>
            <span className="otp-hint mono">Verification code sent to +1 *** 4821</span>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">02 · 4-Digit Compact</div>
          <div className="comp-preview">
            <div className="otp-row compact">
              {[8, 3, 5, null].map((d, i) => (
                <input key={i} type="text" className="otp-box" defaultValue={d ?? ''} maxLength={1} />
              ))}
            </div>
            <span className="otp-hint mono">Enter the 4-digit PIN</span>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">03 · Single Input (Paste-Friendly)</div>
          <div className="comp-preview">
            <div className="field">
              <label>Verification Code</label>
              <input
                type="text"
                placeholder="XXXXXX"
                maxLength={6}
                style={{ letterSpacing: '0.4em', textAlign: 'center', fontSize: '20px', fontWeight: 700 }}
              />
            </div>
            <span className="otp-hint mono">Paste or type the code</span>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">04 · Resend Timer</div>
          <div className="comp-preview">
            <div className="otp-row">
              {[1, 2, 3, 4, 5, null].map((d, i) => (
                <input key={i} type="text" className="otp-box" defaultValue={d ?? ''} maxLength={1} />
              ))}
            </div>
            <div className="resend-row">
              <span className="otp-hint mono">Code expires in 02:45</span>
              <button className="resend-btn mono">Resend</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">05 · Authenticator App Prompt</div>
          <div className="comp-preview">
            <div className="auth-app-prompt">
              <div className="auth-app-icon">📱</div>
              <div className="auth-app-copy">
                <span className="auth-app-title">Open your authenticator app</span>
                <span className="auth-app-sub mono">Enter the 6-digit code from Google Authenticator, Authy, or 1Password</span>
              </div>
            </div>
            <div className="otp-row" style={{ marginTop: 16 }}>
              {Array(6).fill(null).map((_, i) => (
                <input key={i} type="text" className="otp-box" maxLength={1} />
              ))}
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">06 · SMS / Email Delivery Toggle</div>
          <div className="comp-preview">
            <div className="delivery-toggle">
              <button className="delivery-opt active mono">📱 SMS</button>
              <button className="delivery-opt mono">✉️ Email</button>
              <button className="delivery-opt mono">📞 Call</button>
            </div>
            <span className="otp-hint mono">Code will be sent to your phone</span>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">07 · Trusted Device Checkbox</div>
          <div className="comp-preview">
            <div className="otp-row">
              {Array(6).fill(null).map((_, i) => (
                <input key={i} type="text" className="otp-box" maxLength={1} />
              ))}
            </div>
            <label className="remember" style={{ marginTop: 14 }}>
              <input type="checkbox" />
              Trust this device for 30 days
            </label>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">08 · Error / Invalid Code</div>
          <div className="comp-preview">
            <div className="otp-row error">
              {[9, 1, 2, 7, 4, 8].map((d, i) => (
                <input key={i} type="text" className="otp-box" defaultValue={d} maxLength={1} />
              ))}
            </div>
            <span className="otp-error mono">✕ Code expired — request a new one</span>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">09 · Backup Codes</div>
          <div className="comp-preview">
            <div className="backup-codes">
              {['a1b2-c3d4', 'e5f6-g7h8', 'i9j0-k1l2', 'm3n4-o5p6'].map(c => (
                <span key={c} className="backup-code mono">{c}</span>
              ))}
            </div>
            <span className="otp-hint mono">Save these codes — each works once</span>
          </div>
        </div>

      </div>
    </div>
  )
}
