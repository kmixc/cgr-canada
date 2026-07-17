import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageHero({ image, title, subtitle, showCTA = false, transitionImage }) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cgr-black/50 via-cgr-black/20 to-cgr-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-black text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-widest uppercase text-white leading-none drop-shadow-lg mb-8"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-heading font-bold text-3xl md:text-5xl tracking-widest uppercase text-white drop-shadow mb-12"
          >
            {subtitle}
          </motion.p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5"
          >
            <Link
              to="/contact#form"
              className="inline-block font-heading font-bold tracking-widest uppercase text-lg md:text-2xl px-12 py-5 bg-[#F6D51F] text-cgr-black hover:bg-white transition-all duration-300"
            >
              GET A FREE QUOTE
            </Link>
            <span className="font-heading font-bold tracking-widest text-2xl md:text-3xl text-white uppercase drop-shadow">
              or call us at{' '}
              <a href="tel:+18773662476" className="text-white hover:text-cgr-accent transition-colors">
                +1 (877) 366-2476
              </a>
            </span>
          </motion.div>
        )}
      </div>

      {/* Torn edge into the next section */}
      {transitionImage && (
        <img
          src={transitionImage}
          alt=""
          className="absolute bottom-0 left-0 w-full h-40 md:h-56 object-fill -scale-y-100 z-[5] pointer-events-none select-none"
        />
      )}
    </section>
  )
}
