import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GlassServices from './pages/GlassServices'
import MetalServices from './pages/MetalServices'
import AboutUs from './pages/AboutUs'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glass-services" element={<GlassServices />} />
        <Route path="/metal-services" element={<MetalServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
