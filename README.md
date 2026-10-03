# boiler-react-components

React + Vite UI template with reusable components: login and auth flows, form inputs, social/biometric/MFA options, sidebars, theme switching, and full app-layout pages.

Built as a design-template gallery — every screen is a static, copyable example intended as a reference when rebuilding the UI in Flutter (or any other stack).

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## What's Inside

| Section | Routes | Count |
|---|---|---|
| Authentication components | `/components/credentials`, `/social`, `/biometric`, `/mfa` | 4 |
| UI components | `/components/sidebar`, `/feedback`, `/table`, `/forms` | 4 |
| Page templates | `/login/*`, `/reset/*` (classic, modern, brand) | 6 |
| Auth flow pages | `/auth/{signup,verify,twofa,locked,expired,onboarding,change-password,invite,sso,magic-link}/*` | 30 |
| App pages (full layouts) | `/app/*` | 19 |

### Component examples

- **Credentials** — classic fields, floating labels, underline style, password strength, visibility toggle
- **Social** — OAuth buttons, icon grids, chips, outline and dark variants, split rows
- **Biometric** — fingerprint sensor, Face ID prompt, WebAuthn passkey, scanning states
- **MFA** — OTP boxes, resend timer, authenticator prompts, backup codes, error states
- **Sidebar layout** — full sidebar, icon-only, collapsible, overlay, topbar, tree menu
- **Feedback** — confirmation/success modals, toast stack, inline alerts, tooltips, dropdown menus, tabs, progress bars, spinners
- **Data table** — sortable columns, row selection, bulk action bar, pagination, empty/loading states, compact rows
- **Form controls** — multi-step wizard, drag & drop file upload, selects, multi-select tags, toggle switches, radios, range sliders, date/time pickers, textarea with counter

### App pages

Dashboard, Contacts, History, Chat, Calendar, Settings, Active Call, Incoming Call, Call Ended, Conference, Notifications, Profile, Team, Analytics, Library, Search, Errors, Loading (skeletons), Onboarding.

## Theming

Six palettes, switched from the Home page palette selector:

`avenox` (default) · `ocean` · `forest` · `midnight` · `sunset` · `violet`

Themes are injected as CSS custom properties by `src/ThemeContext.jsx` from the palette definitions in `src/theme.js`. Add a theme by adding an entry there — no other changes needed.

Core variables: `--paper`, `--paper-2`, `--ink`, `--gold`, `--signal`, `--sand`, `--muted`.

## Design Language

- Hard offset shadows (`8px 8px 0`) instead of soft blurs
- Gold-bordered cards with `translateY(-3px)` hover lift
- `Fraunces`-style serif headings, `JetBrains Mono` for code/labels
- Eyebrow labels with accent bars

## Project Structure

```
src/
├── App.jsx                  # all routes
├── theme.js                 # 6 color palettes
├── ThemeContext.jsx         # theme state → CSS variables
├── pages/
│   ├── Home.jsx             # template gallery index
│   ├── components/          # per-category component examples
│   ├── sidebar/             # sidebar variants
│   ├── login/ reset/        # page templates (classic/modern/brand)
│   ├── auth/                # 30 generated auth flow pages
│   ├── dashboard/ contacts/ history/ chat/ calendar/ settings/
│   └── app/                 # call, team, analytics, library, ...
└── index.css                # global styles + shared helpers
```

## Regenerating Auth Pages

```bash
node generate-auth.mjs
```

Rewrites the 30 auth flow pages (10 templates × 3 variants).
