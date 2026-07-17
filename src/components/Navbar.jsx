import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/img/cgr_logo.svg'

const LOGO = logo

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cgr-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-32 hidden md:flex items-center justify-center gap-14 lg:gap-20">
          {/* Left Nav */}
          <nav className="flex items-center gap-14 lg:gap-20">
            {/* SERVICES dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link flex items-center gap-1">
                SERVICES
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-cgr-black border border-white/10 py-2"
                  >
                    <Link to="/glass-services" className="block px-5 py-3 font-heading font-semibold tracking-widest text-sm text-white hover:text-cgr-accent hover:bg-white/5 transition-colors uppercase">
                      Glass Services
                    </Link>
                    <Link to="/metal-services" className="block px-5 py-3 font-heading font-semibold tracking-widest text-sm text-white hover:text-cgr-accent hover:bg-white/5 transition-colors uppercase">
                      Metal Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/about-us" className="nav-link">ABOUT US</Link>
          </nav>

          {/* Center Logo */}
          <Link to="/" className="shrink-0">
            <img src={LOGO} alt="CGR Canada" className="h-20 w-auto" />
          </Link>

          {/* Right Nav */}
          <nav className="flex items-center gap-14 lg:gap-20">
            <Link to="/projects" className="nav-link">PROJECTS</Link>
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between px-5 h-18 py-4">
          <Link to="/">
            <img src={LOGO} alt="CGR Canada" className="h-12 w-auto" />
          </Link>
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-cgr-black flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              <Link to="/" className="font-heading font-black text-3xl tracking-widest uppercase text-white hover:text-cgr-accent transition-colors">HOME</Link>
              <Link to="/glass-services" className="font-heading font-black text-3xl tracking-widest uppercase text-white hover:text-cgr-accent transition-colors">GLASS SERVICES</Link>
              <Link to="/metal-services" className="font-heading font-black text-3xl tracking-widest uppercase text-white hover:text-cgr-accent transition-colors">METAL SERVICES</Link>
              <Link to="/about-us" className="font-heading font-black text-3xl tracking-widest uppercase text-white hover:text-cgr-accent transition-colors">ABOUT US</Link>
              <Link to="/projects" className="font-heading font-black text-3xl tracking-widest uppercase text-white hover:text-cgr-accent transition-colors">PROJECTS</Link>
              <Link to="/contact" className="font-heading font-black text-3xl tracking-widest uppercase text-white hover:text-cgr-accent transition-colors">CONTACT</Link>
            </nav>
            <div className="mt-auto pb-12">
              <p className="font-heading text-cgr-accent tracking-widest text-lg">+1 (877) 366-2476</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
