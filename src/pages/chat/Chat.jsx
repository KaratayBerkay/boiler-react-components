import { Link } from 'react-router-dom'
import '../components/Components.css'
import '../sidebar/Sidebar.css'
import '../dashboard/Dashboard.css'
import './Chat.css'

const conversations = [
  { name: 'Ahmet Kaya', last: 'See you tomorrow!', time: '14:32', unread: 2, status: 'online', avatar: 'AK', color: 'green' },
  { name: 'Elif Yılmaz', last: 'The design looks great', time: '12:15', unread: 0, status: 'online', avatar: 'EY', color: 'blue' },
  { name: 'Team Chat', last: 'Can: Let me push the fix', time: '11:00', unread: 5, status: 'online', avatar: 'TC', color: 'purple' },
  { name: 'Mehmet Demir', last: 'Thanks for the help!', time: 'Yesterday', unread: 0, status: 'offline', avatar: 'MD', color: 'red' },
  { name: 'Zeynep Arslan', last: 'Meeting moved to 3pm', time: 'Yesterday', unread: 0, status: 'away', avatar: 'ZA', color: 'blue' },
]

const messages = [
  { from: 'them', text: 'Hey! Are you available for a quick call?', time: '14:28' },
  { from: 'me', text: 'Sure, give me 5 minutes', time: '14:29' },
  { from: 'them', text: 'Perfect. I want to discuss the new feature', time: '14:30' },
  { from: 'me', text: 'Sounds good. I have some ideas too', time: '14:31' },
  { from: 'them', text: 'See you tomorrow!', time: '14:32' },
]

export default function ChatPage() {
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
          <a className="sb-item active"><span className="sb-ico">💬</span> Messages</a>
        </div>
        <div className="sb-section">
          <span className="sb-section-label mono">Workspace</span>
          <a className="sb-item"><span className="sb-ico">📅</span> Calendar</a>
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

      <main className="app-main" style={{ padding: 0 }}>
        <div className="chat-layout">
          <div className="chat-list">
            <div className="chat-list-header">
              <h2 className="serif">Messages</h2>
              <button className="btn-gold" style={{ height: 36, fontSize: 13, padding: '0 14px' }}>+ New</button>
            </div>
            <input className="search-input mono" placeholder="Search chats..." style={{ width: '100%', marginBottom: 12 }} />
            {conversations.map((c, i) => (
              <div className={`chat-list-item ${i === 0 ? 'active' : ''}`} key={i}>
                <div className={`contact-card-avatar ${c.color}`} style={{ width: 42, height: 42, fontSize: 14 }}>
                  {c.avatar}
                  <span className={`status-dot ${c.status}`} />
                </div>
                <div className="chat-list-copy">
                  <div className="chat-list-top">
                    <span className="chat-list-name">{c.name}</span>
                    <span className="chat-list-time mono">{c.time}</span>
                  </div>
                  <div className="chat-list-bottom">
                    <span className="chat-list-last">{c.last}</span>
                    {c.unread > 0 && <span className="chat-unread mono">{c.unread}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-main">
            <div className="chat-main-header">
              <div className="chat-main-user">
                <div className="contact-card-avatar green" style={{ width: 40, height: 40, fontSize: 14 }}>
                  AK
                  <span className="status-dot online" />
                </div>
                <div>
                  <span className="chat-main-name">Ahmet Kaya</span>
                  <span className="chat-main-status mono">Online</span>
                </div>
              </div>
              <div className="chat-main-actions">
                <button className="contact-action" title="Voice call">📞</button>
                <button className="contact-action" title="Video call">🎥</button>
                <button className="contact-action" title="Info">ℹ</button>
              </div>
            </div>

            <div className="chat-messages">
              <div className="chat-date-divider mono">Today</div>
              {messages.map((m, i) => (
                <div key={i} className={`chat-bubble-row ${m.from === 'me' ? 'sent' : 'received'}`}>
                  <div className="chat-bubble">
                    <span className="chat-bubble-text">{m.text}</span>
                    <span className="chat-bubble-time mono">{m.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="chat-input-bar">
              <button className="contact-action" title="Attach">📎</button>
              <input className="chat-input mono" placeholder="Type a message..." />
              <button className="chat-send" title="Send">➤</button>
            </div>
          </div>
        </div>

        <div style={{ padding: '16px 36px' }}>
          <Link to="/" className="back-link mono" style={{ color: 'var(--sand)' }}>← Back to Templates</Link>
        </div>
      </main>
    </div>
  )
}
