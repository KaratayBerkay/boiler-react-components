import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'
import Home from './pages/Home'
import ClassicLogin from './pages/login/Classic'
import ModernLogin from './pages/login/Modern'
import BrandLogin from './pages/login/Brand'
import ClassicReset from './pages/reset-password/Classic'
import ModernReset from './pages/reset-password/Modern'
import BrandReset from './pages/reset-password/Brand'
import CredentialsComponents from './pages/components/credentials/Credentials'
import SocialComponents from './pages/components/social/Social'
import BiometricComponents from './pages/components/biometric/Biometric'
import MfaComponents from './pages/components/mfa/Mfa'
import SidebarComponents from './pages/sidebar/Sidebar'
import DashboardPage from './pages/dashboard/Dashboard'
import ContactsPage from './pages/contacts/Contacts'
import HistoryPage from './pages/history/History'
import SettingsPage from './pages/settings/Settings'
import ChatPage from './pages/chat/Chat'
import CalendarPage from './pages/calendar/Calendar'
import CallPage from './pages/app/call/Call'
import CallIncoming from './pages/app/call-incoming/Incoming'
import CallEnded from './pages/app/call-ended/Ended'
import ConferencePage from './pages/app/conference/Conference'
import NotificationsPage from './pages/app/notifications/Notifications'
import ProfilePage from './pages/app/profile/Profile'
import TeamPage from './pages/app/team/Team'
import AnalyticsPage from './pages/app/analytics/Analytics'
import LibraryPage from './pages/app/library/Library'
import SearchPage from './pages/app/search/Search'
import ErrorsPage from './pages/app/errors/Errors'
import LoadingPage from './pages/app/loading/Loading'
import OnboardingCarousel from './pages/app/onboarding/Onboarding'

import ClassicSignup from './pages/auth/signup/Classic'
import ModernSignup from './pages/auth/signup/Modern'
import BrandSignup from './pages/auth/signup/Brand'
import ClassicVerify from './pages/auth/verify/Classic'
import ModernVerify from './pages/auth/verify/Modern'
import BrandVerify from './pages/auth/verify/Brand'
import ClassicTwofa from './pages/auth/twofa/Classic'
import ModernTwofa from './pages/auth/twofa/Modern'
import BrandTwofa from './pages/auth/twofa/Brand'
import ClassicLocked from './pages/auth/locked/Classic'
import ModernLocked from './pages/auth/locked/Modern'
import BrandLocked from './pages/auth/locked/Brand'
import ClassicExpired from './pages/auth/expired/Classic'
import ModernExpired from './pages/auth/expired/Modern'
import BrandExpired from './pages/auth/expired/Brand'
import ClassicOnboarding from './pages/auth/onboarding/Classic'
import ModernOnboarding from './pages/auth/onboarding/Modern'
import BrandOnboarding from './pages/auth/onboarding/Brand'
import ClassicChangePassword from './pages/auth/change-password/Classic'
import ModernChangePassword from './pages/auth/change-password/Modern'
import BrandChangePassword from './pages/auth/change-password/Brand'
import ClassicInvite from './pages/auth/invite/Classic'
import ModernInvite from './pages/auth/invite/Modern'
import BrandInvite from './pages/auth/invite/Brand'
import ClassicSso from './pages/auth/sso/Classic'
import ModernSso from './pages/auth/sso/Modern'
import BrandSso from './pages/auth/sso/Brand'
import ClassicMagicLink from './pages/auth/magic-link/Classic'
import ModernMagicLink from './pages/auth/magic-link/Modern'
import BrandMagicLink from './pages/auth/magic-link/Brand'

import './App.css'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login/classic" element={<ClassicLogin />} />
          <Route path="/login/modern" element={<ModernLogin />} />
          <Route path="/login/brand" element={<BrandLogin />} />
          <Route path="/reset/classic" element={<ClassicReset />} />
          <Route path="/reset/modern" element={<ModernReset />} />
          <Route path="/reset/brand" element={<BrandReset />} />

          <Route path="/components/credentials" element={<CredentialsComponents />} />
          <Route path="/components/social" element={<SocialComponents />} />
          <Route path="/components/biometric" element={<BiometricComponents />} />
          <Route path="/components/mfa" element={<MfaComponents />} />
          <Route path="/components/sidebar" element={<SidebarComponents />} />
          <Route path="/app/dashboard" element={<DashboardPage />} />
          <Route path="/app/contacts" element={<ContactsPage />} />
          <Route path="/app/history" element={<HistoryPage />} />
          <Route path="/app/settings" element={<SettingsPage />} />
          <Route path="/app/chat" element={<ChatPage />} />
          <Route path="/app/calendar" element={<CalendarPage />} />
          <Route path="/app/call" element={<CallPage />} />
          <Route path="/app/call-incoming" element={<CallIncoming />} />
          <Route path="/app/call-ended" element={<CallEnded />} />
          <Route path="/app/conference" element={<ConferencePage />} />
          <Route path="/app/notifications" element={<NotificationsPage />} />
          <Route path="/app/profile" element={<ProfilePage />} />
          <Route path="/app/team" element={<TeamPage />} />
          <Route path="/app/analytics" element={<AnalyticsPage />} />
          <Route path="/app/library" element={<LibraryPage />} />
          <Route path="/app/search" element={<SearchPage />} />
          <Route path="/app/errors" element={<ErrorsPage />} />
          <Route path="/app/loading" element={<LoadingPage />} />
          <Route path="/app/onboarding" element={<OnboardingCarousel />} />

          <Route path="/auth/signup/classic" element={<ClassicSignup />} />
          <Route path="/auth/signup/modern" element={<ModernSignup />} />
          <Route path="/auth/signup/brand" element={<BrandSignup />} />
          <Route path="/auth/verify/classic" element={<ClassicVerify />} />
          <Route path="/auth/verify/modern" element={<ModernVerify />} />
          <Route path="/auth/verify/brand" element={<BrandVerify />} />
          <Route path="/auth/twofa/classic" element={<ClassicTwofa />} />
          <Route path="/auth/twofa/modern" element={<ModernTwofa />} />
          <Route path="/auth/twofa/brand" element={<BrandTwofa />} />
          <Route path="/auth/locked/classic" element={<ClassicLocked />} />
          <Route path="/auth/locked/modern" element={<ModernLocked />} />
          <Route path="/auth/locked/brand" element={<BrandLocked />} />
          <Route path="/auth/expired/classic" element={<ClassicExpired />} />
          <Route path="/auth/expired/modern" element={<ModernExpired />} />
          <Route path="/auth/expired/brand" element={<BrandExpired />} />
          <Route path="/auth/onboarding/classic" element={<ClassicOnboarding />} />
          <Route path="/auth/onboarding/modern" element={<ModernOnboarding />} />
          <Route path="/auth/onboarding/brand" element={<BrandOnboarding />} />
          <Route path="/auth/change-password/classic" element={<ClassicChangePassword />} />
          <Route path="/auth/change-password/modern" element={<ModernChangePassword />} />
          <Route path="/auth/change-password/brand" element={<BrandChangePassword />} />
          <Route path="/auth/invite/classic" element={<ClassicInvite />} />
          <Route path="/auth/invite/modern" element={<ModernInvite />} />
          <Route path="/auth/invite/brand" element={<BrandInvite />} />
          <Route path="/auth/sso/classic" element={<ClassicSso />} />
          <Route path="/auth/sso/modern" element={<ModernSso />} />
          <Route path="/auth/sso/brand" element={<BrandSso />} />
          <Route path="/auth/magic-link/classic" element={<ClassicMagicLink />} />
          <Route path="/auth/magic-link/modern" element={<ModernMagicLink />} />
          <Route path="/auth/magic-link/brand" element={<BrandMagicLink />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
