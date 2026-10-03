import { useTheme } from '../ThemeContext'
import { themes } from '../theme'
import { Link } from 'react-router-dom'
import './Home.css'

const componentCategories = [
  {
    path: '/components/credentials',
    name: 'Credentials',
    title: 'Username / Password',
    desc: 'Classic fields, floating labels, underline style, password strength, toggle visibility.',
    icon: '🔑',
    badge: 'badge-classic',
  },
  {
    path: '/components/social',
    name: 'Social',
    title: 'Social Login Buttons',
    desc: 'OAuth buttons, icon grids, chips, outline style, dark variants, split rows.',
    icon: '🌐',
    badge: 'badge-modern',
  },
  {
    path: '/components/biometric',
    name: 'Biometric',
    title: 'Fingerprint & Face ID',
    desc: 'Touch sensor, Face ID prompt, WebAuthn passkey, security key, scanning states.',
    icon: '☝️',
    badge: 'badge-brand',
  },
  {
    path: '/components/mfa',
    name: 'MFA',
    title: 'Multi-Factor Auth',
    desc: 'OTP boxes, verification codes, resend timer, authenticator prompts, backup codes.',
    icon: '🛡️',
    badge: 'badge-classic',
  },
  {
    path: '/components/sidebar',
    name: 'Layout',
    title: 'Left Menu / Sidebar',
    desc: 'Full sidebar, icon-only, collapsible, overlay, topbar, tree menu, status badges.',
    icon: '📂',
    badge: 'badge-modern',
  },
  {
    path: '/components/feedback',
    name: 'Feedback',
    title: 'Modals, Toasts & Overlays',
    desc: 'Confirmation modals, toast stack, alerts, tooltips, dropdown menus, tabs.',
    icon: '🔔',
    badge: 'badge-brand',
  },
  {
    path: '/components/table',
    name: 'Data',
    title: 'Data Table',
    desc: 'Sortable columns, row selection, pagination, empty and loading states.',
    icon: '📋',
    badge: 'badge-classic',
  },
  {
    path: '/components/forms',
    name: 'Inputs',
    title: 'Form Controls',
    desc: 'Multi-step wizard, file upload, selects, toggles, sliders, date pickers.',
    icon: '🧩',
    badge: 'badge-modern',
  },
]

const pageTemplates = [
  { path: '/login/classic', name: 'Classic', title: 'Traditional Login', desc: 'Email/password form with social login options.', badge: 'badge-classic' },
  { path: '/login/modern', name: 'Modern', title: 'Social & Biometric', desc: 'Passwordless-first with Google, Apple, Face ID.', badge: 'badge-modern' },
  { path: '/login/brand', name: 'Brand', title: 'Dark Branded Theme', desc: 'CallApp identity with offset shadows and serif headings.', badge: 'badge-brand' },
  { path: '/reset/classic', name: 'Classic', title: 'Reset Password', desc: 'Simple email input to request a password reset link.', badge: 'badge-classic' },
  { path: '/reset/modern', name: 'Modern', title: 'Recovery Options', desc: 'Reset link with biometric fallback option.', badge: 'badge-modern' },
  { path: '/reset/brand', name: 'Brand', title: 'Full Reset Flow', desc: 'Verification code + new password fields.', badge: 'badge-brand' },
]

const authTemplates = [
  { base: '/auth/signup', icon: '✨', name: 'Sign Up', title: 'Registration', desc: 'Account creation form with name, email, password.' },
  { base: '/auth/verify', icon: '📧', name: 'Verify', title: 'Email Verification', desc: '6-digit OTP with countdown timer and resend.' },
  { base: '/auth/twofa', icon: '🛡️', name: '2FA', title: 'Two-Factor Auth', desc: 'OTP challenge with trust device checkbox.' },
  { base: '/auth/locked', icon: '🔒', name: 'Locked', title: 'Account Locked', desc: 'Locked state with countdown timer.' },
  { base: '/auth/expired', icon: '⏰', name: 'Expired', title: 'Session Expired', desc: 'Timeout notice with re-authentication CTA.' },
  { base: '/auth/onboarding', icon: '🚀', name: 'Onboarding', title: 'Welcome Flow', desc: '3-step onboarding with progress indicator.' },
  { base: '/auth/change-password', icon: '🔑', name: 'Change PW', title: 'Change Password', desc: 'Current + new + confirm password fields.' },
  { base: '/auth/invite', icon: '📬', name: 'Invite', title: 'Team Invite', desc: 'Invitation acceptance with sender info.' },
  { base: '/auth/sso', icon: '🏢', name: 'SSO', title: 'Enterprise SSO', desc: 'Okta, Azure AD, Google Workspace, OneLogin.' },
  { base: '/auth/magic-link', icon: '✨', name: 'Magic Link', title: 'Magic Link', desc: 'Passwordless email-only sign-in request.' },
]

const variants = ['classic', 'modern', 'brand']

const appPages = [
  { path: '/app/dashboard', icon: '📊', name: 'Dashboard', title: 'Analytics Dashboard', desc: 'Stats cards, recent calls table, upcoming meetings, bar chart.', badge: 'badge-brand' },
  { path: '/app/contacts', icon: '👥', name: 'Contacts', title: 'Contacts Directory', desc: 'Contact grid with status, filters, action buttons, groups.', badge: 'badge-classic' },
  { path: '/app/history', icon: '📞', name: 'History', title: 'Call History', desc: 'Detailed call log with type badges, filters, durations, actions.', badge: 'badge-modern' },
  { path: '/app/chat', icon: '💬', name: 'Chat', title: 'Messaging', desc: 'Conversation list, message bubbles, input bar, online status.', badge: 'badge-brand' },
  { path: '/app/calendar', icon: '📅', name: 'Calendar', title: 'Calendar Week View', desc: 'Time grid with events, sidebar schedule, quick actions.', badge: 'badge-classic' },
  { path: '/app/settings', icon: '⚙️', name: 'Settings', title: 'Account Settings', desc: 'Sidebar nav, profile form, toggles, save actions.', badge: 'badge-modern' },
  { path: '/app/call', icon: '📹', name: 'Active Call', title: 'In-Progress Call', desc: 'Video grid, control bar, timer, participants, mute states.', badge: 'badge-brand' },
  { path: '/app/call-incoming', icon: '📲', name: 'Incoming Call', title: 'Incoming Call', desc: 'Caller card, accept/decline, snooze, quick message.', badge: 'badge-classic' },
  { path: '/app/call-ended', icon: '📵', name: 'Call Ended', title: 'Call Summary', desc: 'Duration, recording, transcript, rate & follow-up actions.', badge: 'badge-modern' },
  { path: '/app/conference', icon: '👥', name: 'Conference', title: 'Group Conference', desc: 'Speaker tiles, reactions, chat sidebar, host controls.', badge: 'badge-brand' },
  { path: '/app/notifications', icon: '🔔', name: 'Notifications', title: 'Notification Center', desc: 'Grouped alerts, unread counts, per-type filters, actions.', badge: 'badge-classic' },
  { path: '/app/profile', icon: '👤', name: 'Profile', title: 'User Profile', desc: 'Avatar, stats, activity feed, edit & privacy panels.', badge: 'badge-modern' },
  { path: '/app/team', icon: '🏢', name: 'Team', title: 'Team Members', desc: 'Member table, roles, statuses, invite, bulk actions.', badge: 'badge-brand' },
  { path: '/app/analytics', icon: '📈', name: 'Analytics', title: 'Call Analytics', desc: 'Metric cards, bar chart, line trend, top contacts.', badge: 'badge-classic' },
  { path: '/app/library', icon: '📁', name: 'Library', title: 'Recordings Library', desc: 'Media grid, thumbnails, duration, filters, playback.', badge: 'badge-modern' },
  { path: '/app/search', icon: '🔍', name: 'Search', title: 'Search Results', desc: 'Global search bar, filters, grouped result sections.', badge: 'badge-brand' },
  { path: '/app/errors', icon: '⚠️', name: 'Errors', title: 'Error & Empty States', desc: '404, 403, 500, offline, empty state, no results.', badge: 'badge-classic' },
  { path: '/app/loading', icon: '⏳', name: 'Loading', title: 'Skeletons & Spinners', desc: 'Skeleton nav, cards, table rows, chart, spinner.', badge: 'badge-modern' },
  { path: '/app/onboarding', icon: '🚀', name: 'Onboarding', title: 'Onboarding Carousel', desc: 'Progress dots, slides, skip/next, signup footer.', badge: 'badge-brand' },
]

export default function Home() {
  const { themeKey, setThemeKey } = useTheme()

  return (
    <div className="home">
      <header className="home-header">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>CallApp</div>
        <h1 className="serif">Design <span style={{ color: 'var(--gold)' }}>Templates</span></h1>
        <p className="mono">&gt; component examples and page templates</p>
      </header>

      <div className="palette-section">
        <div className="section-title mono">
          <span className="accent-bar" />
          Color Palette
        </div>
        <div className="palette-grid">
          {Object.entries(themes).map(([key, t]) => (
            <button
              key={key}
              className={`palette-swatch ${themeKey === key ? 'active' : ''}`}
              onClick={() => setThemeKey(key)}
            >
              <div className="swatch-colors">
                <span style={{ background: t.ink }} />
                <span style={{ background: t.gold }} />
                <span style={{ background: t.paper }} />
              </div>
              <span className="swatch-name mono">{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title mono">
          <span className="accent-bar" />
          Authentication Components
        </div>
        <div className="grid">
          {componentCategories.map(c => (
            <Link to={c.path} className="card" key={c.path}>
              <div className="card-preview preview-classic">
                <span className="comp-icon">{c.icon}</span>
                <div className="card-arrow mono">→</div>
              </div>
              <div className="card-body">
                <span className={`card-badge mono ${c.badge}`}>{c.name}</span>
                <div className="card-title serif">{c.title}</div>
                <div className="card-desc mono">{c.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title mono">
          <span className="accent-bar" />
          Page Templates
        </div>
        <div className="grid">
          {pageTemplates.map(t => (
            <Link to={t.path} className="card" key={t.path}>
              <div className={`card-preview preview-${t.name.toLowerCase()}`}>
                <div className="mini-form">
                  <div className="mini-line" style={{ width: '60%' }} />
                  <div className="mini-line" />
                  <div className="mini-line" />
                  <div className="mini-btn" />
                  <div className="mini-line" style={{ width: '40%', marginTop: 4 }} />
                </div>
                <div className="card-arrow mono">→</div>
              </div>
              <div className="card-body">
                <span className={`card-badge mono ${t.badge}`}>{t.name}</span>
                <div className="card-title serif">{t.title}</div>
                <div className="card-desc mono">{t.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title mono">
          <span className="accent-bar" />
          Auth Flow Pages
        </div>
        <div className="grid">
          {authTemplates.map(a => (
            <Link to={`${a.base}/classic`} className="card" key={a.base}>
              <div className="card-preview preview-classic">
                <span className="comp-icon">{a.icon}</span>
                <div className="card-arrow mono">→</div>
              </div>
              <div className="card-body">
                <span className="card-badge mono badge-classic">{a.name}</span>
                <div className="card-title serif">{a.title}</div>
                <div className="card-desc mono">{a.desc}</div>
                <div className="variant-row">
                  {variants.map(v => (
                    <span key={v} className={`variant-chip mono`}>{v}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title mono">
          <span className="accent-bar" />
          App Pages (Full Layouts)
        </div>
        <div className="grid">
          {appPages.map(a => (
            <Link to={a.path} className="card" key={a.path}>
              <div className="card-preview preview-classic">
                <span className="comp-icon">{a.icon}</span>
                <div className="card-arrow mono">→</div>
              </div>
              <div className="card-body">
                <span className={`card-badge mono ${a.badge}`}>{a.name}</span>
                <div className="card-title serif">{a.title}</div>
                <div className="card-desc mono">{a.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="home-footer mono">
        <span style={{ color: 'var(--gold)' }}>🍋</span> Design Templates · CallApp · 2026
      </footer>
    </div>
  )
}
