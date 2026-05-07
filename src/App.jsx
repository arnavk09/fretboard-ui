import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import ListingDetail from './pages/ListingDetail'
import SellPage from './pages/SellPage'
import AboutPage from './pages/AboutPage'
import HowItWorks from './components/home/HowItWorks'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App