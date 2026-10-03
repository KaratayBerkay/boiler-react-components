import { Link } from 'react-router-dom'
import '../Components.css'
import './DataTable.css'

const rows = [
  { name: 'Ahmet Kaya', email: 'ahmet@callapp.io', role: 'Owner', plan: 'Pro', calls: 142, status: 'Active', avatar: 'AK', color: 'green' },
  { name: 'Elif Yılmaz', email: 'elif@callapp.io', role: 'Admin', plan: 'Pro', calls: 98, status: 'Active', avatar: 'EY', color: 'blue' },
  { name: 'Mehmet Demir', email: 'mehmet@callapp.io', role: 'Member', plan: 'Free', calls: 45, status: 'Trial', avatar: 'MD', color: 'purple' },
  { name: 'Zeynep Arslan', email: 'zeynep@callapp.io', role: 'Editor', plan: 'Team', calls: 210, status: 'Active', avatar: 'ZA', color: 'red' },
  { name: 'Can Öztürk', email: 'can@callapp.io', role: 'Viewer', plan: 'Free', calls: 12, status: 'Inactive', avatar: 'CÖ', color: 'green' },
  { name: 'Ayşe Şahin', email: 'ayse@callapp.io', role: 'Member', plan: 'Team', calls: 76, status: 'Active', avatar: 'AŞ', color: 'blue' },
]

export default function DataTableComponents() {
  return (
    <div className="comp-page">
      <Link to="/" className="back-link mono">← Back to Templates</Link>
      <div className="comp-header">
        <div className="eyebrow">UI Components</div>
        <h1 className="serif">Data Table</h1>
        <p className="mono sub">&gt; sortable columns, selection, pagination, states</p>
      </div>

      <div className="comp-grid" style={{ maxWidth: 1400 }}>

        <div className="comp-card wide">
          <div className="comp-label mono">01 · Full Table (sort · select · actions)</div>
          <div className="comp-preview" style={{ padding: 20, gap: 16 }}>
            <div className="dt-toolbar">
              <input className="dt-search mono" placeholder="Filter rows..." />
              <div className="dt-toolbar-right">
                <button className="dt-chip mono">Role: All ▾</button>
                <button className="dt-chip mono">Plan: All ▾</button>
                <button className="dt-btn primary mono">+ New</button>
              </div>
            </div>

            <div className="dt-selection mono">2 selected · <span className="dt-link">Export CSV</span> · <span className="dt-link danger">Delete</span></div>

            <div className="dt-scroll">
              <table className="dt-table">
                <thead>
                  <tr>
                    <th className="dt-check"><input type="checkbox" defaultChecked /></th>
                    <th className="dt-sortable">Member ⇅</th>
                    <th className="dt-sortable">Role ⇅</th>
                    <th className="dt-sortable">Plan ⇅</th>
                    <th className="dt-sortable num">Calls ↓</th>
                    <th className="dt-sortable">Status ⇅</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className={i < 2 ? 'selected' : ''}>
                      <td className="dt-check"><input type="checkbox" defaultChecked={i < 2} /></td>
                      <td>
                        <div className="dt-member">
                          <div className={`contact-avatar ${r.color}`}>{r.avatar}</div>
                          <div>
                            <div className="dt-member-name">{r.name}</div>
                            <div className="dt-member-email mono">{r.email}</div>
                          </div>
                        </div>
                      </td>
                      <td><span className="dt-role mono">{r.role}</span></td>
                      <td className="mono dt-cell-muted">{r.plan}</td>
                      <td className="mono num">{r.calls}</td>
                      <td><span className={`dt-status mono ${r.status.toLowerCase()}`}>{r.status}</span></td>
                      <td className="dt-actions">
                        <button className="contact-action">⋯</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="dt-footer mono">
              <span className="dt-footer-count">Showing 1–6 of 42</span>
              <div className="dt-pager">
                <button className="dt-page" disabled>‹</button>
                <button className="dt-page active">1</button>
                <button className="dt-page">2</button>
                <button className="dt-page">3</button>
                <button className="dt-page">…</button>
                <button className="dt-page">7</button>
                <button className="dt-page">›</button>
              </div>
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">02 · Compact Rows</div>
          <div className="comp-preview" style={{ padding: 16 }}>
            <div className="dt-compact">
              {rows.slice(0, 5).map((r, i) => (
                <div className="dt-compact-row" key={i}>
                  <span className="dt-compact-name">{r.name}</span>
                  <span className={`dt-status mono ${r.status.toLowerCase()}`}>{r.status}</span>
                  <span className="mono dt-cell-muted">{r.plan}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">03 · Sort States</div>
          <div className="comp-preview" style={{ padding: 16 }}>
            <table className="dt-table mini">
              <thead>
                <tr>
                  <th className="dt-sortable asc">Name ▲</th>
                  <th className="dt-sortable desc">Calls ↓</th>
                  <th className="dt-sortable">Plan ⇅</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Ayşe Şahin</td><td className="mono num">12</td><td className="mono">Free</td></tr>
                <tr><td>Can Öztürk</td><td className="mono num">45</td><td className="mono">Free</td></tr>
                <tr><td>Elif Yılmaz</td><td className="mono num">98</td><td className="mono">Pro</td></tr>
                <tr><td>Zeynep Arslan</td><td className="mono num">210</td><td className="mono">Team</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">04 · Empty State</div>
          <div className="comp-preview dt-empty">
            <span className="dt-empty-ico">📭</span>
            <div className="dt-empty-title serif">No members yet</div>
            <div className="dt-empty-desc mono">Invite your team to start collaborating on calls.</div>
            <button className="dt-btn primary mono">+ Invite Member</button>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">05 · Loading State</div>
          <div className="comp-preview" style={{ padding: 16 }}>
            <div className="dt-compact">
              {[...Array(5)].map((_, i) => (
                <div className="dt-compact-row" key={i}>
                  <div className="skel-line" style={{ width: `${110 + i * 12}px`, height: 13 }} />
                  <div className="skel-line" style={{ width: 54, height: 20, borderRadius: 10 }} />
                  <div className="skel-line" style={{ width: 40, height: 13 }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="comp-card">
          <div className="comp-label mono">06 · Bulk Action Bar</div>
          <div className="comp-preview" style={{ justifyContent: 'center' }}>
            <div className="dt-bulkbar">
              <span className="mono">3 items selected</span>
              <div className="dt-bulkbar-actions">
                <button className="dt-btn ghost mono">Archive</button>
                <button className="dt-btn ghost mono">Export</button>
                <button className="dt-btn danger mono">Delete</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
