import { Link } from 'react-router-dom'
import '../Components.css'
import './Forms.css'

export default function FormComponents() {
  return (
    <div className="comp-page">
      <Link to="/" className="back-link mono">← Back to Templates</Link>
      <div className="comp-header">
        <div className="eyebrow">UI Components</div>
        <h1 className="serif">Form Controls</h1>
        <p className="mono sub">&gt; wizard, uploads, selects, toggles, sliders, dates</p>
      </div>

      <div className="comp-grid" style={{ maxWidth: 1400 }}>

        <div className="comp-card wide">
          <div className="comp-label mono">01 · Multi-Step Wizard</div>
          <div className="comp-preview">
            <div className="fm-wizard-steps">
              <div className="fm-step done"><span className="fm-step-dot">✓</span><span className="mono">Account</span></div>
              <div className="fm-step-line done" />
              <div className="fm-step active"><span className="fm-step-dot">2</span><span className="mono">Company</span></div>
              <div className="fm-step-line" />
              <div className="fm-step"><span className="fm-step-dot">3</span><span className="mono">Billing</span></div>
            </div>

            <div className="fm-wizard-body">
              <div className="fm-field-row">
                <div className="field">
                  <label>Company Name</label>
                  <input placeholder="Acme Inc." />
                </div>
                <div className="field">
                  <label>Team Size</label>
                  <select className="fm-select">
                    <option>1–10 employees</option>
                    <option>11–50 employees</option>
                    <option>51–200 employees</option>
                    <option>200+ employees</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>Industry</label>
                <select className="fm-select">
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                </select>
              </div>
            </div>

            <div className="fm-wizard-actions">
              <button className="fm-btn ghost">← Back</button>
              <span className="mono fm-step-count">Step 2 of 3</span>
              <button className="fm-btn primary">Continue →</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">02 · File Upload (drag & drop)</div>
          <div className="comp-preview">
            <div className="fm-dropzone">
              <span className="fm-drop-ico">📎</span>
              <div className="fm-drop-title">Drop files here</div>
              <div className="fm-drop-sub mono">PNG, PDF up to 10 MB</div>
              <button className="fm-btn ghost small">Browse Files</button>
            </div>
            <div className="fm-file">
              <span className="fm-file-ico">📄</span>
              <div className="fm-file-copy">
                <span className="fm-file-name">contract-v2.pdf</span>
                <div className="fm-file-bar"><span style={{ width: '68%' }} /></div>
              </div>
              <span className="mono fm-file-pct">68%</span>
            </div>
            <div className="fm-file done">
              <span className="fm-file-ico">✅</span>
              <div className="fm-file-copy">
                <span className="fm-file-name">logo.png</span>
                <span className="mono fm-file-meta">240 KB · Uploaded</span>
              </div>
              <button className="fm-file-x">✕</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">03 · Select & Multi-Select</div>
          <div className="comp-preview">
            <div className="field">
              <label>Country</label>
              <select className="fm-select">
                <option>🇹🇷 Turkey</option>
                <option>🇩🇪 Germany</option>
                <option>🇺🇸 United States</option>
              </select>
            </div>
            <div className="field">
              <label>Tags</label>
              <div className="fm-multiselect">
                <span className="fm-tag">clients <b>✕</b></span>
                <span className="fm-tag">priority <b>✕</b></span>
                <input placeholder="Add tag..." />
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">04 · Toggle Switches</div>
          <div className="comp-preview">
            <label className="fm-switch-row">
              <div>
                <div className="fm-switch-label">Call recording</div>
                <div className="fm-switch-sub mono">Record all calls automatically</div>
              </div>
              <span className="fm-switch on"><i /></span>
            </label>
            <label className="fm-switch-row">
              <div>
                <div className="fm-switch-label">Voicemail transcription</div>
                <div className="fm-switch-sub mono">AI transcript for missed calls</div>
              </div>
              <span className="fm-switch"><i /></span>
            </label>
            <label className="fm-switch-row">
              <div>
                <div className="fm-switch-label">Do not disturb</div>
                <div className="fm-switch-sub mono">Silence notifications 22:00–07:00</div>
              </div>
              <span className="fm-switch on"><i /></span>
            </label>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">05 · Radio & Checkbox Groups</div>
          <div className="comp-preview">
            <div className="fm-group">
              <div className="fm-group-title mono">Plan</div>
              <label className="fm-radio"><input type="radio" name="p" defaultChecked /><span className="fm-radio-dot" /> Free — 100 min/mo</label>
              <label className="fm-radio"><input type="radio" name="p" /><span className="fm-radio-dot" /> Pro — Unlimited</label>
              <label className="fm-radio"><input type="radio" name="p" /><span className="fm-radio-dot" /> Team — Per seat</label>
            </div>
            <div className="fm-group">
              <div className="fm-group-title mono">Features</div>
              <label className="fm-check"><input type="checkbox" defaultChecked /> Video calling</label>
              <label className="fm-check"><input type="checkbox" defaultChecked /> Call recording</label>
              <label className="fm-check"><input type="checkbox" /> International numbers</label>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">06 · Range Slider</div>
          <div className="comp-preview">
            <div className="fm-slider-block">
              <div className="fm-slider-head">
                <span className="mono">Call quality</span>
                <span className="mono fm-slider-val">High</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="75" className="fm-range" />
            </div>
            <div className="fm-slider-block">
              <div className="fm-slider-head">
                <span className="mono">Ring volume</span>
                <span className="mono fm-slider-val">60%</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="60" className="fm-range" />
            </div>
            <div className="fm-slider-block">
              <div className="fm-slider-head">
                <span className="mono">Storage used</span>
                <span className="mono fm-slider-val">9.2 / 10 GB</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="92" className="fm-range danger" />
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">07 · Date & Time Picker</div>
          <div className="comp-preview">
            <div className="field">
              <label>Meeting Date</label>
              <input type="date" defaultValue="2026-10-08" className="fm-date" />
            </div>
            <div className="fm-time-row">
              <div className="field" style={{ flex: 1 }}>
                <label>Start</label>
                <input type="time" defaultValue="14:30" className="fm-date" />
              </div>
              <div className="field" style={{ flex: 1 }}>
                <label>End</label>
                <input type="time" defaultValue="15:15" className="fm-date" />
              </div>
            </div>
            <div className="fm-chip-row">
              <button className="fm-time-chip">09:00</button>
              <button className="fm-time-chip active">14:30</button>
              <button className="fm-time-chip">17:00</button>
              <button className="fm-time-chip">Tomorrow</button>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">08 · Textarea & Counter</div>
          <div className="comp-preview">
            <div className="field">
              <label>Notes</label>
              <textarea className="fm-textarea" rows={4} defaultValue="Discuss Q4 roadmap and hiring plan." />
            </div>
            <div className="fm-counter mono">
              <span>33 / 280 characters</span>
              <span className="fm-counter-ok">✓ Looks good</span>
            </div>
            <div className="fm-field-error mono">✕ Message must be at least 10 characters</div>
          </div>
        </div>

      </div>
    </div>
  )
}
