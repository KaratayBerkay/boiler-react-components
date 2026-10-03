import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const base = join(import.meta.dirname, 'src/pages/auth')

const pages = {
  signup: {
    title: 'Create your account',
    subtitle: 'join callapp and start talking',
    icon: '✨',
    fields: `
      <div className="field">
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />
      </div>
      <div className="field">
        <label>Email address</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label>Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-{ID}" placeholder="Create a password" />
          <button type="button" className="toggle-password" onClick={{{TOGGLE}}}>👁</button>
        </div>
      </div>`,
    button: 'Create Account',
    footer: `Already have an account? {LINK_LOGIN}`,
  },
  verify: {
    title: 'Check your inbox',
    subtitle: 'we sent a verification code to your email',
    icon: '📧',
    fields: `
      <div className="otp-row" style={{ margin: '8px 0' }}>
        {[null,null,null,null,null,null].map((_, i) => (
          <input key={i} type="text" className="otp-box" maxLength={1} />
        ))}
      </div>
      <span className="otp-hint mono" style={{ textAlign: 'center', display: 'block' }}>Code expires in 10:00</span>`,
    button: 'Verify Email',
    footer: `Didn't receive it? <a href="#">Resend code</a>`,
  },
  twofa: {
    title: 'Two-factor authentication',
    subtitle: 'enter the code from your authenticator app',
    icon: '🛡️',
    fields: `
      <div className="otp-row" style={{ margin: '8px 0' }}>
        {[null,null,null,null,null,null].map((_, i) => (
          <input key={i} type="text" className="otp-box" maxLength={1} />
        ))}
      </div>
      <label className="remember" style={{ marginTop: 8 }}>
        <input type="checkbox" />
        Trust this device for 30 days
      </label>`,
    button: 'Verify',
    footer: `Lost your device? <a href="#">Use a backup code</a>`,
  },
  locked: {
    title: 'Account locked',
    subtitle: 'too many failed attempts — try again later',
    icon: '🔒',
    fields: `
      <div className="lock-info">
        <span className="lock-icon">🔒</span>
        <p>Your account has been temporarily locked for security.</p>
        <p className="mono lock-timer">Unlock in 14:32</p>
      </div>`,
    button: 'Try Again Later',
    footer: `Need help? <a href="#">Contact support</a>`,
  },
  expired: {
    title: 'Session expired',
    subtitle: 'your session timed out for security',
    icon: '⏰',
    fields: `
      <div className="lock-info">
        <span className="lock-icon">⏰</span>
        <p>Your session has expired. Please sign in again to continue.</p>
      </div>`,
    button: 'Sign In Again',
    footer: `Your data is safe. {LINK_LOGIN}`,
  },
  onboarding: {
    title: 'Welcome to CallApp',
    subtitle: 'let\'s get you set up in 3 quick steps',
    icon: '🚀',
    fields: `
      <div className="onboarding-steps">
        {[
          { n: 1, title: 'Create your profile', done: true },
          { n: 2, title: 'Verify your email', active: true },
          { n: 3, title: 'Invite your team' },
        ].map(s => (
          <div key={s.n} className={\`step \${s.done ? 'done' : ''} \${s.active ? 'active' : ''}\`}>
            <span className="step-num">{s.done ? '✓' : s.n}</span>
            <span className="step-title">{s.title}</span>
          </div>
        ))}
      </div>`,
    button: 'Continue',
    footer: `Step 2 of 3`,
  },
  'change-password': {
    title: 'Change password',
    subtitle: 'choose a strong password you haven\'t used before',
    icon: '🔑',
    fields: `
      <div className="field">
        <label>Current Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-cur-{ID}" placeholder="Enter current password" />
          <button type="button" className="toggle-password" onClick={{{TOGGLE}}}>👁</button>
        </div>
      </div>
      <div className="field">
        <label>New Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-new-{ID}" placeholder="Enter new password" />
          <button type="button" className="toggle-password" onClick={{{TOGGLE}}}>👁</button>
        </div>
      </div>
      <div className="field">
        <label>Confirm New Password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-conf-{ID}" placeholder="Re-enter new password" />
          <button type="button" className="toggle-password" onClick={{{TOGGLE}}}>👁</button>
        </div>
      </div>`,
    button: 'Update Password',
    footer: `<a href="#">Forgot current password?</a>`,
  },
  invite: {
    title: 'You\'ve been invited',
    subtitle: 'join the team on callapp',
    icon: '📬',
    fields: `
      <div className="invite-card">
        <div className="invite-avatar">AK</div>
        <div className="invite-copy">
          <span className="invite-from">Ahmet Kaya</span>
          <span className="invite-email mono">ahmet@callapp.io</span>
        </div>
        <div className="invite-role mono">ADMIN</div>
      </div>
      <div className="field">
        <label>Set your password</label>
        <div className="password-wrapper">
          <input type="password" id="pw-invite-{ID}" placeholder="Create a password" />
          <button type="button" className="toggle-password" onClick={{{TOGGLE}}}>👁</button>
        </div>
      </div>`,
    button: 'Accept Invite',
    footer: `Not expecting this? <a href="#">Ignore</a>`,
  },
  sso: {
    title: 'Sign in with SSO',
    subtitle: 'use your organization\'s identity provider',
    icon: '🏢',
    fields: `
      <div className="field">
        <label>Work Email</label>
        <input type="email" placeholder="you@company.com" />
      </div>
      <div className="sso-options">
        {['Okta', 'Azure AD', 'Google Workspace', 'OneLogin'].map(p => (
          <button key={p} className="sso-btn">
            <span className="sso-icon">🏢</span>
            Continue with {p}
          </button>
        ))}
      </div>`,
    button: 'Continue with SSO',
    footer: `Or {LINK_LOGIN}`,
  },
  'magic-link': {
    title: 'Magic link sign-in',
    subtitle: 'no password needed — we\'ll email you a secure link',
    icon: '✨',
    fields: `
      <div className="field">
        <label>Email address</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="magic-info">
        <span>🔗</span>
        <p>We'll send you a one-time link that signs you in instantly. No password required.</p>
      </div>`,
    button: 'Send Magic Link',
    footer: `Prefer password? {LINK_LOGIN}`,
  },
}

function toggleFn(id) {
  return `() => { const el = document.getElementById('pw-${id}'); el.type = el.type === 'password' ? 'text' : 'password' }`
}

const variants = {
  Classic: {
    pageClass: 'login-page classic-page',
    wrapper: 'login-container',
    extra: `
        <div className="logo">
          <span className="logo-icon">📞</span>
          Call<span className="accent">App</span>
        </div>
`,
    eyebrow: true,
    titleClass: 'title serif',
    subClass: 'subtitle mono',
    btnClass: 'btn-login',
    divider: `<div className="divider mono"><span>or</span></div>`,
    social: `<div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">f</button>
        </div>`,
    extraCss: '',
    formStart: `<form onSubmit={e => e.preventDefault()}>`,
    formEnd: `</form>`,
  },
  Modern: {
    pageClass: 'login-page modern-page',
    wrapper: 'login-container modern-container',
    extra: `
        <div className="icon-circle">{ICON}</div>
`,
    eyebrow: true,
    titleClass: 'title serif',
    subClass: 'subtitle mono',
    btnClass: 'btn-email',
    divider: `<div className="divider mono"><span>or</span></div>`,
    social: '',
    extraCss: '',
    formStart: `<form onSubmit={e => e.preventDefault()}>`,
    formEnd: `</form>`,
  },
  Brand: {
    pageClass: 'login-page brand-page',
    wrapper: 'brand-wrapper',
    extra: `
        <div className="brand">
          <div className="brand-icon">{ICON}</div>
          <div className="brand-name serif">Call<span>App</span></div>
          <div className="brand-tagline mono">&gt; {SUBTITLE}</div>
        </div>
`,
    eyebrow: true,
    titleClass: 'form-title serif',
    subClass: 'form-sub mono',
    btnClass: 'btn-login',
    divider: `<div className="divider mono"><span>or</span></div>`,
    social: `<div className="social-row">
          <button className="social-btn">G</button>
          <button className="social-btn"></button>
          <button className="social-btn">⌥</button>
        </div>`,
    extraCss: '',
    formStart: `<form onSubmit={e => e.preventDefault()}>`,
    formEnd: `</form>`,
    innerWrapper: 'form-card',
  },
}

const imports = {
  Classic: `import { Link } from 'react-router-dom'\nimport '../../reset-password/Reset.css'\nimport '../signup/Signup.css'`,
  Modern: `import { Link } from 'react-router-dom'\nimport '../signup/Signup.css'`,
  Brand: `import { Link } from 'react-router-dom'\nimport '../../reset-password/Reset.css'\nimport '../signup/Signup.css'`,
}

const loginLinks = {
  Classic: '<Link to="/login/classic">Sign In</Link>',
  Modern: '<Link to="/login/modern">Sign In</Link>',
  Brand: '<Link to="/login/brand">Sign In</Link>',
}

for (const [pageName, page] of Object.entries(pages)) {
  const dir = join(base, pageName)
  mkdirSync(dir, { recursive: true })

  for (const [variantName, v] of Object.entries(variants)) {
    const id = `${pageName}-${variantName.toLowerCase()}`
    let fields = page.fields
      .replaceAll('{ID}', id)
      .replaceAll('{{TOGGLE}}', toggleFn(id))

    let extra = v.extra
      .replaceAll('{ICON}', page.icon)
      .replaceAll('{SUBTITLE}', page.subtitle)

    let footer = page.footer.replaceAll('{LINK_LOGIN}', loginLinks[variantName])

    let inner = ''
    if (v.innerWrapper) {
      inner = `
      <div className="${v.innerWrapper}">
        <div className="eyebrow">${page.title}</div>
        <h1 className="${v.titleClass}">${page.title}</h1>
        <p className="${v.subClass}">&gt; ${page.subtitle}</p>

        ${v.formStart}
          ${fields}
          <button type="submit" className="${v.btnClass}">${page.button}</button>
        ${v.formEnd}

        ${v.divider}
        ${v.social}
        <div className="signup">${footer}</div>
      </div>`
    } else {
      inner = `
        ${v.eyebrow ? `<div className="eyebrow">${page.title}</div>` : ''}
        <h1 className="${v.titleClass}" ${variantName === 'Modern' ? 'style={{ textAlign: "center" }}' : ''}>${page.title}</h1>
        <p className="${v.subClass}" ${variantName === 'Modern' ? 'style={{ textAlign: "center" }}' : ''}>&gt; ${page.subtitle}</p>

        ${v.formStart}
          ${fields}
          <button type="submit" className="${v.btnClass}">${page.button}</button>
        ${v.formEnd}

        ${v.divider}
        ${v.social}
        <div className="signup" ${variantName === 'Modern' ? 'style={{ textAlign: "center" }}' : ''}>${footer}</div>`
    }

    const content = `${imports[variantName]}
import './${variantName}.jsx' // no-op to avoid circular

export default function ${variantName}${pageName.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('')}() {
  return (
    <div className="${v.pageClass}">
      <div className="${v.wrapper}">
        <Link to="/" className="back-link mono" ${variantName !== 'Classic' ? 'style={{ color: "var(--sand)" }}' : ''}>← Back</Link>
${extra}${inner}
      </div>
    </div>
  )
}
`
    // remove the bogus import line
    const clean = content.replace(`import './${variantName}.jsx' // no-op to avoid circular\n`, '')

    writeFileSync(join(dir, `${variantName}.jsx`), clean)
  }
}

// Shared CSS for all auth pages
const sharedCss = `
/* ── Auth shared components ──────────────────── */

.lock-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  padding: 24px 0;
}
.lock-icon { font-size: 48px; }
.lock-info p { font-size: 14px; color: var(--muted); line-height: 1.5; }
.lock-timer {
  font-size: 22px;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.1em;
}

.onboarding-steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.step {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: var(--paper);
  border: 1.5px solid rgba(27, 23, 18, 0.12);
  border-radius: 7px;
  opacity: 0.5;
  transition: all 0.18s;
}
.step.done { opacity: 1; border-color: var(--gold); }
.step.active {
  opacity: 1;
  border-color: var(--gold);
  background: color-mix(in srgb, var(--gold) 8%, var(--paper));
  box-shadow: 3px 3px 0 var(--gold);
}
.step-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--paper-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
}
.step.done .step-num { background: var(--gold); color: var(--ink); }
.step-title { font-size: 14px; font-weight: 600; color: var(--ink); }

.invite-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: var(--paper);
  border: 1.5px solid color-mix(in srgb, var(--gold) 40%, transparent);
  border-radius: 7px;
  margin-bottom: 8px;
}
.invite-avatar {
  width: 44px;
  height: 44px;
  background: var(--gold);
  color: var(--ink);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  flex-shrink: 0;
}
.invite-copy { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.invite-from { font-size: 15px; font-weight: 700; color: var(--ink); }
.invite-email { font-size: 12px; color: var(--sand); }
.invite-role {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 4px 10px;
  background: var(--gold);
  color: var(--ink);
  border-radius: 4px;
}

.sso-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sso-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--paper);
  border: 1.5px solid rgba(27, 23, 18, 0.18);
  border-radius: 7px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.18s;
  box-shadow: 3px 3px 0 rgba(27, 23, 18, 0.07);
}
.sso-btn:hover {
  background: var(--gold);
  border-color: var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  transform: translate(-1px, -2px);
}
.sso-icon { font-size: 18px; }

.magic-info {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  background: color-mix(in srgb, var(--gold) 8%, transparent);
  border: 1.5px dashed color-mix(in srgb, var(--gold) 40%, transparent);
  border-radius: 7px;
  margin-top: 4px;
}
.magic-info span { font-size: 20px; }
.magic-info p { font-size: 13px; color: var(--muted); line-height: 1.5; }

.otp-row {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.otp-box {
  width: 52px;
  height: 56px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  background: var(--paper);
  border: 1.5px solid rgba(27, 23, 18, 0.20);
  border-radius: 7px;
  outline: none;
  transition: border-color 0.18s, box-shadow 0.18s;
}
.otp-box:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--gold) 18%, transparent);
}
.otp-hint {
  font-size: 12px;
  color: var(--sand);
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
  font-weight: 600;
  cursor: pointer;
}
.remember input { accent-color: var(--gold); width: 16px; height: 16px; }

.social-row { display: flex; gap: 12px; margin-bottom: 30px; }
.social-btn {
  flex: 1;
  height: 50px;
  background: var(--paper);
  border: 1.5px solid rgba(27, 23, 18, 0.15);
  border-radius: 7px;
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.18s;
  box-shadow: 3px 3px 0 rgba(27, 23, 18, 0.07);
}
.social-btn:hover {
  background: var(--gold);
  border-color: var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  transform: translate(-1px, -2px);
}

.signup {
  text-align: center;
  font-size: 14px;
  color: var(--muted);
}
.signup a {
  color: var(--gold);
  font-weight: 700;
}
.signup a:hover { color: var(--signal); }
`

mkdirSync(join(base, 'signup'), { recursive: true })
writeFileSync(join(base, 'signup', 'Signup.css'), sharedCss)

console.log('Generated 30 auth pages + shared CSS')
