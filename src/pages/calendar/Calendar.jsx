import { Link } from 'react-router-dom'
import '../components/Components.css'
import '../sidebar/Sidebar.css'
import '../dashboard/Dashboard.css'
import './Calendar.css'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const events = [
  { day: 0, hour: 1, title: 'Team Standup', color: 'gold', duration: 1 },
  { day: 0, hour: 5, title: 'Design Review', color: 'blue', duration: 2 },
  { day: 1, hour: 2, title: '1-on-1 with Elif', color: 'green', duration: 1 },
  { day: 1, hour: 6, title: 'Client Call', color: 'red', duration: 1 },
  { day: 2, hour: 0, title: 'Sprint Planning', color: 'gold', duration: 2 },
  { day: 2, hour: 4, title: 'Lunch & Learn', color: 'purple', duration: 1 },
  { day: 3, hour: 3, title: 'Code Review', color: 'blue', duration: 1 },
  { day: 3, hour: 7, title: 'Demo Day', color: 'green', duration: 2 },
  { day: 4, hour: 1, title: 'Retro', color: 'gold', duration: 1 },
  { day: 4, hour: 5, title: 'Video Call', color: 'purple', duration: 1 },
]

const upcomingList = [
  { time: '09:00', title: 'Team Standup', duration: '30 min', color: 'gold' },
  { time: '14:30', title: 'Client Review', duration: '60 min', color: 'blue' },
  { time: '16:00', title: 'Design Sync', duration: '45 min', color: 'green' },
]

export default function CalendarPage() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="sb-brand">
          <span className="sb-logo">📞</span>
          <span className="sb-name">CallApp</span>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Main</span>
          <a className="sb-item"><span className="sb-ico">🏠</span> Dashboard</a>
          <a className="sb-item"><span className="sb-ico">👥</span> Contacts</a>
          <a className="sb-item"><span className="sb-ico">📞</span> Calls</a>
          <a className="sb-item"><span className="sb-ico">💬</span> Messages</a>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Workspace</span>
          <a className="sb-item active"><span className="sb-ico">📅</span> Calendar</a>
          <a className="sb-item"><span className="sb-ico">📊</span> Analytics</a>
          <a className="sb-item"><span className="sb-ico">⚙️</span> Settings</a>
        </div>
        <div className="sb-footer">
          <div className="sb-avatar">BK</div>
          <div className="sb-user-info">
            <span className="sb-user-name">Berkay</span>
            <span className="sb-user-status mono">Online</span>
          </div>
        </div>
      </aside>

      <main className="app-main">
        <header className="app-header">
          <div>
            <div className="eyebrow">Calendar</div>
            <h1 className="serif">October 2026</h1>
          </div>
          <div className="app-header-actions">
            <button className="btn-outline" style={{ height: 42 }}>‹ Prev</button>
            <button className="btn-outline" style={{ height: 42 }}>Today</button>
            <button className="btn-outline" style={{ height: 42 }}>Next ›</button>
            <button className="btn-gold">+ New Event</button>
          </div>
        </header>

        <div className="calendar-layout">
          <div className="calendar-grid-wrap">
            <div className="calendar-header-row">
              <div className="calendar-time-col" />
              {days.map(d => (
                <div key={d} className="calendar-day-header mono">{d}</div>
              ))}
            </div>
            <div className="calendar-body">
              <div className="calendar-time-col">
                {hours.map(h => (
                  <div key={h} className="calendar-time-label mono">{h}</div>
                ))}
              </div>
              {days.map((d, di) => (
                <div key={di} className="calendar-day-col">
                  {hours.map((h, hi) => {
                    const event = events.find(e => e.day === di && e.hour === hi)
                    return (
                      <div key={hi} className="calendar-cell">
                        {event && (
                          <div className={`calendar-event ${event.color}`} style={{ height: `${event.duration * 100}%` }}>
                            <span className="event-title">{event.title}</span>
                            <span className="event-time mono">{h}</span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="calendar-sidebar">
            <div className="calendar-sidebar-section">
              <h3 className="serif">Today's Schedule</h3>
              <div className="upcoming-list">
                {upcomingList.map((u, i) => (
                  <div className={`upcoming-item ${u.color}`} key={i}>
                    <span className="upcoming-time mono">{u.time}</span>
                    <div className="upcoming-info">
                      <span className="upcoming-title">{u.title}</span>
                      <span className="upcoming-duration mono">{u.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="calendar-sidebar-section">
              <h3 className="serif">Quick Actions</h3>
              <div className="quick-actions">
                <button className="quick-action">📞 Start Instant Call</button>
                <button className="quick-action">📅 Schedule Meeting</button>
                <button className="quick-action">📧 Send Invite</button>
              </div>
            </div>
          </div>
        </div>

        <Link to="/" className="back-link mono" style={{ marginTop: 24, display: 'inline-block', color: 'var(--sand)' }}>← Back to Templates</Link>
      </main>
    </div>
  )
}
