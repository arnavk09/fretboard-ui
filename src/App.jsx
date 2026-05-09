import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AuthSessionBoundary from './components/auth/AuthSessionBoundary'
import ProtectedRoute from './components/auth/ProtectedRoute'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import ListingDetail from './pages/ListingDetail'
import SellPage from './pages/SellPage'
import AboutPage from './pages/AboutPage'
import AuthRedirect from './pages/AuthRedirect'
import AccountPage from './pages/AccountPage'
import HowItWorks from './components/home/HowItWorks'

function App() {
  return (
    <BrowserRouter>
      <AuthSessionBoundary />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route
          path="/sell"
          element={(
            <ProtectedRoute
              title="Sign in to list an item"
              body="Create listings from your SafeCart account so buyers can see who they are dealing with."
            >
              <SellPage />
            </ProtectedRoute>
          )}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route
          path="/account"
          element={(
            <ProtectedRoute
              title="Sign in to view your account"
              body="Your account page includes profile details and listings connected to your signed-in user."
            >
              <AccountPage />
            </ProtectedRoute>
          )}
        />
        <Route path="/login" element={<AuthRedirect />} />
        <Route path="/signin" element={<AuthRedirect />} />
        <Route path="/signup" element={<AuthRedirect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
