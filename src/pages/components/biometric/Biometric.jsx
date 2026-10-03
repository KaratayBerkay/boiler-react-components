import { Link } from 'react-router-dom'
import '../Components.css'

export default function BiometricComponents() {
  return (
    <div className="comp-page">
      <Link to="/" className="back-link mono">← Back to Templates</Link>
      <div className="comp-header">
        <div className="eyebrow">Authentication Components</div>
        <h1 className="serif">Biometric</h1>
        <p className="mono sub">&gt; fingerprint, face ID, and hardware auth components</p>
      </div>

      <div className="comp-grid">

        <div className="comp-card">
          <div className="comp-label mono">01 · Fingerprint Button</div>
          <div className="comp-preview">
            <button className="bio-btn">
              <span className="bio-icon">☝️</span>
              <span className="bio-copy">
                <span className="bio-title">Touch to authenticate</span>
                <span className="bio-sub mono">Place finger on sensor</span>
              </span>
            </button>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">02 · Face ID Button</div>
          <div className="comp-preview">
            <button className="bio-btn face">
              <span className="bio-icon">🙂</span>
              <span className="bio-copy">
                <span className="bio-title">Sign in with Face ID</span>
                <span className="bio-sub mono">Look at the camera</span>
              </span>
            </button>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">03 · Circular Scanner</div>
          <div className="comp-preview">
            <button className="circle-scanner">
              <span className="scanner-ring" />
              <span className="scanner-inner">☝️</span>
            </button>
            <span className="scanner-label mono">Scan fingerprint</span>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">04 · Animated Prompt</div>
          <div className="comp-preview dark-preview">
            <div className="bio-prompt">
              <div className="pulse-ring" />
              <span className="pulse-icon">👆</span>
              <span className="pulse-title mono">Touch sensor</span>
              <span className="pulse-sub mono">Waiting for fingerprint...</span>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">05 · Hardware Key (YubiKey)</div>
          <div className="comp-preview">
            <button className="hardware-btn">
              <span className="hw-icon">🔑</span>
              <span className="hw-copy">
                <span className="hw-title">Security Key</span>
                <span className="hw-sub mono">Insert & tap your key</span>
              </span>
              <span className="hw-arrow mono">→</span>
            </button>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">06 · Platform Auth (WebAuthn)</div>
          <div className="comp-preview">
            <button className="webauthn-btn">
              <span className="wa-icon">🛡️</span>
              Continue with passkey
            </button>
            <span className="wa-hint mono">Uses your device's built-in auth</span>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">07 · Icon Row Selector</div>
          <div className="comp-preview">
            <div className="bio-selector">
              {[
                { icon: '☝️', label: 'Fingerprint' },
                { icon: '🙂', label: 'Face ID' },
                { icon: '🔑', label: 'Security Key' },
                { icon: '🛡️', label: 'Passkey' },
              ].map(o => (
                <button key={o.label} className="bio-option">
                  <span className="bio-option-icon">{o.icon}</span>
                  <span className="bio-option-label mono">{o.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">08 · Scanning State</div>
          <div className="comp-preview">
            <div className="scan-state">
              <div className="scan-progress">
                <div className="scan-fill" />
              </div>
              <span className="scan-text mono">Scanning fingerprint...</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
