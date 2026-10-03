import { Link } from 'react-router-dom'
import '../../components/Components.css'
import './Onboarding.css'

const slides = [
  {
    icon: '📞',
    title: 'Crystal Clear Calls',
    desc: 'HD voice and video calling with noise cancellation and adaptive bitrate.',
    tag: 'Step 1 of 3',
  },
  {
    icon: '🛡️',
    title: 'Secure by Default',
    desc: 'End-to-end encryption on every call, message, and recording.',
    tag: 'Step 2 of 3',
  },
  {
    icon: '🚀',
    title: 'Ready to Go',
    desc: 'Invite your team and start making calls in seconds.',
    tag: 'Step 3 of 3',
  },
]

export default function OnboardingCarousel() {
  return (
    <div className="onboard-page">
      <Link to="/" className="back-link mono" style={{ position: 'absolute', top: 24, left: 24, color: 'var(--sand)' }}>← Back to Templates</Link>

      <div className="onboard-card">
        <div className="onboard-progress">
          <span className="onboard-dot active" />
          <span className="onboard-dot" />
          <span className="onboard-dot" />
        </div>

        <div className="onboard-slides">
          {slides.map((s, i) => (
            <div key={i} className={`onboard-slide ${i === 0 ? 'active' : ''}`}>
              <div className="onboard-icon-wrap">
                <div className="onboard-icon">{s.icon}</div>
              </div>
              <span className="onboard-tag mono">{s.tag}</span>
              <h1 className="onboard-title serif">{s.title}</h1>
              <p className="onboard-desc mono">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="onboard-actions">
          <button className="onboard-btn ghost">Skip</button>
          <button className="onboard-btn primary">Next →</button>
        </div>

        <div className="onboard-footer mono">
          Already have an account? <Link to="/login/classic">Sign In</Link>
        </div>
      </div>

      <div className="onboard-bg-circle c1" />
      <div className="onboard-bg-circle c2" />
      <div className="onboard-bg-circle c3" />
    </div>
  )
}
