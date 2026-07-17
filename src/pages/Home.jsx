import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import paintImg from '../assets/img/paint.png'

const VIDEO_URL = 'https://cgrcanada.com/wp-content/uploads/2026/03/CGR-Video.mp4'

export default function Home() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Mobile browsers only autoplay videos whose muted ATTRIBUTE is set on the
    // DOM element; React's `muted` prop doesn't guarantee that.
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')

    const tryPlay = () => {
      const p = video.play()
      if (p) p.catch(() => {})
    }
    tryPlay()

    // If autoplay was still blocked (e.g. iOS Low Power Mode), start on first tap.
    const onTouch = () => tryPlay()
    window.addEventListener('touchstart', onTouch, { once: true, passive: true })
    return () => window.removeEventListener('touchstart', onTouch)
  }, [])

  return (
    <main>
      {/* ── Hero Video ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="hero-video"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-cgr-black/25" />

        <div className="relative z-10 w-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-heading font-black text-[31vw] sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] tracking-[0.05em] sm:tracking-widest uppercase text-white leading-[1.15] sm:leading-none drop-shadow-lg"
          >
            <span className="block sm:inline">GLASS</span>
            <span className="hidden sm:inline">&nbsp;-&nbsp;</span>
            <span className="block sm:inline">METAL</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 sm:mt-20 md:mt-32 flex flex-wrap items-center justify-center gap-x-10 gap-y-12 sm:gap-x-36 md:gap-x-56"
          >
            <Link to="/glass-services" className="paint-btn">
              <img src={paintImg} alt="" className="paint-btn-bg -rotate-2" />
              <span>GLASS</span>
            </Link>
            <Link to="/metal-services" className="paint-btn">
              <img src={paintImg} alt="" className="paint-btn-bg rotate-1 -scale-x-100" />
              <span>METAL</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
