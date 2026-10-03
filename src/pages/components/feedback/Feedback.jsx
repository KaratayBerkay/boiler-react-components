import { Link } from 'react-router-dom'
import '../Components.css'
import './Feedback.css'

export default function FeedbackComponents() {
  return (
    <div className="comp-page">
      <Link to="/" className="back-link mono">← Back to Templates</Link>
      <div className="comp-header">
        <div className="eyebrow">UI Components</div>
        <h1 className="serif">Feedback & Overlays</h1>
        <p className="mono sub">&gt; modals, toasts, alerts, tooltips, dropdowns, tabs</p>
      </div>

      <div className="comp-grid">

        <div className="comp-card wide">
          <div className="comp-label mono">01 · Confirmation Modal</div>
          <div className="comp-preview">
            <div className="fb-modal">
              <div className="fb-modal-icon">🗑️</div>
              <div className="fb-modal-title serif">Delete this recording?</div>
              <div className="fb-modal-desc mono">"Client Review — Q4 Planning" will be permanently removed. This can't be undone.</div>
              <div className="fb-modal-actions">
                <button className="fb-btn ghost">Cancel</button>
                <button className="fb-btn danger">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card wide">
          <div className="comp-label mono">02 · Success Modal</div>
          <div className="comp-preview">
            <div className="fb-modal">
              <div className="fb-modal-icon success">✅</div>
              <div className="fb-modal-title serif">Payment Successful</div>
              <div className="fb-modal-desc mono">Your Pro plan renews on Nov 3, 2026. A receipt was sent to your email.</div>
              <div className="fb-modal-actions">
                <button className="fb-btn ghost">Close</button>
                <button className="fb-btn primary">View Receipt</button>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">03 · Toast Stack</div>
          <div className="comp-preview">
            <div className="fb-toast success">
              <span className="fb-toast-ico">✅</span>
              <div className="fb-toast-copy">
                <span className="fb-toast-title">Contact saved</span>
                <span className="fb-toast-sub mono">Ahmet Kaya added to Favorites</span>
              </div>
              <button className="fb-toast-x">✕</button>
            </div>
            <div className="fb-toast error">
              <span className="fb-toast-ico">⚠️</span>
              <div className="fb-toast-copy">
                <span className="fb-toast-title">Call failed</span>
                <span className="fb-toast-sub mono">No answer from +1 *** 4821</span>
              </div>
              <button className="fb-toast-x">✕</button>
            </div>
            <div className="fb-toast info">
              <span className="fb-toast-ico">ℹ️</span>
              <div className="fb-toast-copy">
                <span className="fb-toast-title">Recording saved</span>
                <span className="fb-toast-sub mono">Available in your Library</span>
              </div>
              <button className="fb-toast-x">✕</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">04 · Inline Alerts</div>
          <div className="comp-preview">
            <div className="fb-alert warn">
              <span className="fb-alert-ico">⚠️</span>
              <div>
                <div className="fb-alert-title">Storage almost full</div>
                <div className="fb-alert-sub mono">You've used 92% of your 10 GB quota.</div>
              </div>
            </div>
            <div className="fb-alert error">
              <span className="fb-alert-ico">⛔</span>
              <div>
                <div className="fb-alert-title">Payment declined</div>
                <div className="fb-alert-sub mono">Card ending 4242 was rejected.</div>
              </div>
            </div>
            <div className="fb-alert ok">
              <span className="fb-alert-ico">🎉</span>
              <div>
                <div className="fb-alert-title">Upgrade complete</div>
                <div className="fb-alert-sub mono">Team plan features are now active.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">05 · Tooltip States</div>
          <div className="comp-preview" style={{ alignItems: 'center', justifyContent: 'center', gap: 28 }}>
            <div className="fb-tip-row">
              <div className="fb-tip-anchor">
                <button className="fb-btn primary small">Hover me</button>
                <div className="fb-tooltip top">Copy invite link</div>
              </div>
              <div className="fb-tip-anchor">
                <button className="fb-btn ghost small">Hover me</button>
                <div className="fb-tooltip bottom">Only admins can edit</div>
              </div>
            </div>
            <span className="otp-hint mono">Tooltips: top / bottom placement</span>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">06 · Dropdown Menu</div>
          <div className="comp-preview">
            <div className="fb-dropdown">
              <button className="fb-dropdown-trigger mono">Account ▾</button>
              <div className="fb-dropdown-menu">
                <div className="fb-dd-item">👤 Profile</div>
                <div className="fb-dd-item">⚙️ Settings</div>
                <div className="fb-dd-item">📊 Billing</div>
                <div className="fb-dd-divider" />
                <div className="fb-dd-item danger">🚪 Sign out</div>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">07 · Tabs</div>
          <div className="comp-preview">
            <div className="fb-tabs">
              <button className="fb-tab active">Overview</button>
              <button className="fb-tab">Activity</button>
              <button className="fb-tab">Billing</button>
              <button className="fb-tab">API</button>
            </div>
            <div className="fb-tab-panel">
              <span className="mono">Plan usage, seats, and renewal date appear here.</span>
            </div>
            <div className="fb-tabs pills">
              <button className="fb-tab active">All</button>
              <button className="fb-tab">Missed</button>
              <button className="fb-tab">Voicemail</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">08 · Progress & Spinner</div>
          <div className="comp-preview">
            <div className="fb-progress-block">
              <div className="fb-progress-head">
                <span className="mono">Uploading recording.mp4</span>
                <span className="mono fb-progress-num">72%</span>
              </div>
              <div className="fb-progress"><span style={{ width: '72%' }} /></div>
            </div>
            <div className="fb-progress-block">
              <div className="fb-progress-head">
                <span className="mono">Indeterminate</span>
                <span className="mono fb-progress-num">…</span>
              </div>
              <div className="fb-progress indeterminate"><span /></div>
            </div>
            <div className="fb-spin-row">
              <div className="fb-spinner" />
              <div className="fb-spinner pulse" />
              <div className="fb-spinner dots"><i /><i /><i /></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
