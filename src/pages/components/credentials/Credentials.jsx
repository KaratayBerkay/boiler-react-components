import { Link } from 'react-router-dom'
import '../Components.css'

export default function CredentialsComponents() {
  return (
    <div className="comp-page">
      <Link to="/" className="back-link mono">← Back to Templates</Link>
      <div className="comp-header">
        <div className="eyebrow">Authentication Components</div>
        <h1 className="serif">Username / Password</h1>
        <p className="mono sub">&gt; input field variants for credential-based login</p>
      </div>

      <div className="comp-grid">

        <div className="comp-card">
          <div className="comp-label mono">01 · Classic Field Pair</div>
          <div className="comp-preview">
            <div className="field">
              <label>Username</label>
              <input type="text" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>Password</label>
              <div className="password-wrapper">
                <input type="password" placeholder="Enter password" />
                <button type="button" className="toggle-password">👁</button>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">02 · Floating Label</div>
          <div className="comp-preview">
            <div className="floating-field">
              <input type="text" id="float-user" placeholder=" " />
              <label htmlFor="float-user">Username or Email</label>
            </div>
            <div className="floating-field">
              <input type="password" id="float-pass" placeholder=" " />
              <label htmlFor="float-pass">Password</label>
              <button type="button" className="float-eye">👁</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">03 · Combined Input</div>
          <div className="comp-preview">
            <div className="combined-field">
              <span className="combined-icon">👤</span>
              <input type="text" placeholder="Username" />
            </div>
            <div className="combined-field">
              <span className="combined-icon">🔒</span>
              <input type="password" placeholder="Password" />
              <button type="button" className="combined-eye">👁</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">04 · Minimal Underline</div>
          <div className="comp-preview">
            <div className="underline-field">
              <input type="text" placeholder="Username" />
            </div>
            <div className="underline-field">
              <input type="password" placeholder="Password" />
              <button type="button" className="underline-eye">👁</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">05 · Stacked Pills</div>
          <div className="comp-preview">
            <input type="text" className="pill-input" placeholder="Username" />
            <input type="password" className="pill-input" placeholder="Password" />
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">06 · Password Strength</div>
          <div className="comp-preview">
            <div className="field">
              <label>Password</label>
              <div className="password-wrapper">
                <input type="text" defaultValue="MyP@ssw0rd!" />
                <span className="strength-badge mono strong">STRONG</span>
              </div>
            </div>
            <div className="strength-bar">
              <span className="strength-fill" />
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">07 · Show / Toggle</div>
          <div className="comp-preview">
            <div className="field">
              <label>Password</label>
              <div className="toggle-group">
                <input type="text" defaultValue="secretpass123" />
                <button type="button" className="toggle-chips">
                  <span className="chip active mono">Show</span>
                  <span className="chip mono">Hide</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">08 · Remember Me Row</div>
          <div className="comp-preview">
            <div className="field">
              <label>Username</label>
              <input type="text" placeholder="you@example.com" />
            </div>
            <div className="remember-row">
              <label className="remember">
                <input type="checkbox" defaultChecked />
                Remember me
              </label>
              <a href="#" className="forgot mono">Forgot?</a>
            </div>
            <button className="btn-login" style={{ height: 46, fontSize: 14 }}>Sign In</button>
          </div>
        </div>

      </div>
    </div>
  )
}
