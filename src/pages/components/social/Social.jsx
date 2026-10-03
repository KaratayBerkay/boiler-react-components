import { Link } from 'react-router-dom'
import '../Components.css'

const providers = [
  { name: 'Google', icon: 'G', color: '#ea4335' },
  { name: 'Apple', icon: '', color: '#000' },
  { name: 'Microsoft', icon: '⊞', color: '#00a4ef' },
  { name: 'Facebook', icon: 'f', color: '#1877f2' },
  { name: 'GitHub', icon: '⌥', color: '#333' },
  { name: 'X / Twitter', icon: '𝕏', color: '#000' },
  { name: 'LinkedIn', icon: 'in', color: '#0a66c2' },
  { name: 'Discord', icon: '🎮', color: '#5865f2' },
]

export default function SocialComponents() {
  return (
    <div className="comp-page">
      <Link to="/" className="back-link mono">← Back to Templates</Link>
      <div className="comp-header">
        <div className="eyebrow">Authentication Components</div>
        <h1 className="serif">Social Login Buttons</h1>
        <p className="mono sub">&gt; OAuth provider button variants</p>
      </div>

      <div className="comp-grid">

        <div className="comp-card">
          <div className="comp-label mono">01 · Full Width Row</div>
          <div className="comp-preview">
            {providers.slice(0, 4).map(p => (
              <button key={p.name} className="social-row-btn">
                <span className="social-dot" style={{ background: p.color }}>{p.icon}</span>
                Continue with {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">02 · Icon Only Grid</div>
          <div className="comp-preview">
            <div className="icon-grid">
              {providers.map(p => (
                <button key={p.name} className="icon-only-btn" title={p.name}>
                  <span className="social-dot" style={{ background: p.color }}>{p.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">03 · Compact Chips</div>
          <div className="comp-preview">
            <div className="chip-row">
              {providers.slice(0, 6).map(p => (
                <button key={p.name} className="provider-chip">
                  <span className="chip-dot" style={{ background: p.color }}>{p.icon}</span>
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">04 · Border Style</div>
          <div className="comp-preview">
            {providers.slice(0, 3).map(p => (
              <button key={p.name} className="outline-social-btn">
                <span className="social-dot outline" style={{ color: p.color, borderColor: p.color }}>{p.icon}</span>
                Sign in with {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">05 · Dark Solid</div>
          <div className="comp-preview dark-preview">
            {providers.slice(0, 3).map(p => (
              <button key={p.name} className="dark-social-btn">
                <span className="social-dot" style={{ background: p.color }}>{p.icon}</span>
                Continue with {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">06 · Vertical Stack w/ Label</div>
          <div className="comp-preview">
            <div className="stacked-social">
              {providers.slice(0, 4).map(p => (
                <button key={p.name} className="stacked-social-btn">
                  <span className="social-dot" style={{ background: p.color }}>{p.icon}</span>
                  <span className="stacked-copy">
                    <span className="stacked-title">{p.name}</span>
                    <span className="stacked-sub mono">OAuth 2.0</span>
                  </span>
                  <span className="stacked-arrow mono">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">07 · Split Row + Divider</div>
          <div className="comp-preview">
            <div className="split-social">
              <button className="split-btn half">
                <span className="social-dot" style={{ background: '#ea4335' }}>G</span>
                Google
              </button>
              <button className="split-btn half">
                <span className="social-dot" style={{ background: '#000' }}></span>
                Apple
              </button>
            </div>
            <div className="divider mono"><span>or</span></div>
            <div className="split-social">
              <button className="split-btn half">
                <span className="social-dot" style={{ background: '#1877f2' }}>f</span>
                Facebook
              </button>
              <button className="split-btn half">
                <span className="social-dot" style={{ background: '#333' }}>⌥</span>
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">08 · Ghost / Text Only</div>
          <div className="comp-preview">
            {providers.slice(0, 4).map(p => (
              <button key={p.name} className="ghost-social-btn">
                <span style={{ color: p.color, fontWeight: 800 }}>{p.icon}</span>
                Continue with {p.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
