import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import HowWeWork from '../components/HowWeWork'
import CertifiedSection from '../components/CertifiedSection'
import { useInView } from '../hooks/useInView'
import projectsHero from '../assets/img/projects.jpg'
import transitionImg from '../assets/img/transiton_2.png'

const HERO_IMG = projectsHero
const TRANSITION_2 = transitionImg

const BASE = '/img/'
const BASE_OLD = '/img/'
const BASE_2025 = '/img/'
const BASE_2026_04 = '/img/'

const categories = [
  {
    label: 'GLASS RAILINGS',
    images: [
      BASE + '1.jpg', BASE + '2.jpg', BASE + '3.jpg',
      BASE + '4.jpg', BASE + '5.jpg', BASE + '6.jpg',
      BASE + '7.jpg', BASE + '8.jpg', BASE + '9.jpg',
      BASE + 'Ext-1.jpg', BASE + 'Ext-2.jpg', BASE + 'Ext-3.jpg',
      BASE + 'Ext-4.jpg', BASE + 'Ext-5.jpg', BASE + 'Ext-6.jpg',
      BASE + 'Ext-7.jpg', BASE + 'Ext-8.jpg', BASE + 'Ext-9.jpg',
      BASE + 'Ext-midrise-1.jpg', BASE + 'Ext-midrise-2.jpg', BASE + 'Ext-midrise-3.jpg',
      BASE + 'commercial-1.jpg', BASE + 'commercial-2.jpg', BASE + 'commercial-3.jpg',
      BASE + 'commercial-4.jpg', BASE + 'commercial-5.jpg', BASE + 'commercial-6.jpg',
      BASE + 'commercial-7.jpg', BASE + 'commercial-8.jpg', BASE + 'Commercial-9.jpg',
      BASE + 'curved-2.jpg', BASE + 'curved-3.jpg', BASE + 'curved-4.jpg',
      BASE + 'curved-5.jpg', BASE + 'curved-6.jpg', BASE + 'curved-7.jpg',
      BASE + 'curved-8.jpg', BASE + 'curved-9.jpg', BASE + 'Curved-0.jpg',
    ],
  },
  {
    label: 'GLASS ENCLOSURES',
    images: [
      BASE_2025 + 'garage-glass-enclosure.jpg',
      BASE_OLD + '3-14.jpg', BASE_OLD + '5-1.jpg', BASE_OLD + '1-14.jpg',
      BASE_OLD + '21.jpg', BASE_OLD + '18.jpg', BASE_OLD + '19.jpg',
      BASE + 'Shower-5.jpg', BASE + 'Shower-1.jpg', BASE + 'Shower-2.jpg',
      BASE + 'Shower-3.jpg', BASE + 'Shower-4.jpg', BASE + 'shower-8.jpeg',
      BASE + 'Shower-6.jpeg', BASE + 'Shower-7.jpeg',
      BASE + 'Enclosure-20.jpg', BASE + 'Enclosure-21.jpeg', BASE + 'Enclosure-22.jpeg',
      BASE + 'Enclosure-10.jpg', BASE + 'REXWOOD-enclosure-photo.jpg',
      BASE + 'ALBA-office-frame-3.png',
      BASE + 'Enclosure-13.jpg', BASE + 'Enclosure-14.jpg', BASE + 'Enclosure-15.jpg',
      BASE + 'Curtainwall-lobby-enclosure-1.png', BASE + 'curtain-wall-installed-1.png',
      BASE + 'Enclosure-19.jpeg',
    ],
  },
  {
    label: 'METAL WORK',
    images: [
      BASE + 'Metal-1.jpg', BASE + 'Metal-2.jpg', BASE + 'Metal-3.jpg',
      BASE + 'Metal-4.jpg', BASE + 'Metal-5.jpg', BASE_2026_04 + 'mono-beam.jpg',
      BASE + 'Metal-7.jpg', BASE + 'Metal-8.jpg', BASE + 'Metal-9.jpg',
      BASE + 'Metal-10.jpg', BASE + 'Metal-11.jpg', BASE + 'Metal-12.jpg',
      BASE + 'Metal-13.jpg', BASE + 'Metal-14.jpg', BASE + 'Metal-15.jpg',
      BASE + 'Metal-16.jpg', BASE + 'Metal-17.jpg', BASE + 'Metal-18.jpg',
      BASE + 'Metal-19.jpg', BASE + 'Metal-20.jpg', BASE + 'Metal-21.jpg',
      BASE + 'Metal-22.jpg', BASE + 'Metal-23.jpg', BASE + 'Metal-24.jpg',
      BASE + 'Metal-25.jpg', BASE + 'Metal-26.jpg', BASE + 'Metal-27.jpg',
      BASE + 'Metal-28.jpg', BASE + 'Metal-29.jpg', BASE + 'Metal-30.jpg',
      BASE + 'Metal-31.jpg', BASE + 'Metal-32.jpg', BASE + 'Metal-33.jpg',
      BASE + 'Metal-34.jpg', BASE + 'Metal-35.jpg', BASE + 'Metal-36.jpg',
      BASE + 'Metal-37.jpg', BASE + 'Metal-38.jpg', BASE + 'Metal-39.jpg',
      BASE + 'Metal-40.jpg',
    ],
  },
]

function Lightbox({ images, index, onClose, onNext, onPrev }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lightbox-overlay"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/70 hover:text-white z-10 text-4xl font-light"
        onClick={onClose}
      >
        ×
      </button>
      <button
        className="absolute left-4 md:left-10 text-white/60 hover:text-white z-10 text-5xl"
        onClick={e => { e.stopPropagation(); onPrev() }}
      >
        ‹
      </button>
      <img
        src={images[index]}
        alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain"
        onClick={e => e.stopPropagation()}
      />
      <button
        className="absolute right-4 md:right-10 text-white/60 hover:text-white z-10 text-5xl"
        onClick={e => { e.stopPropagation(); onNext() }}
      >
        ›
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-heading text-xs tracking-widest text-white/40">
        {index + 1} / {images.length}
      </div>
    </motion.div>
  )
}

function GalleryCategory({ category }) {
  const [ref, inView] = useInView()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const next = () => setLightboxIndex(i => (i + 1) % category.images.length)
  const prev = () => setLightboxIndex(i => (i - 1 + category.images.length) % category.images.length)

  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {category.images.map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.5) }}
            className="relative aspect-square overflow-hidden group cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <img
              src={img}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-cgr-black/0 group-hover:bg-cgr-black/30 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={category.images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={next}
            onPrev={prev}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <main>
      <PageHero
        image={HERO_IMG}
        title="PROJECTS"
        subtitle="residential - commercial - industrial"
        showCTA
        transitionImage={TRANSITION_2}
      />

      <section className="bg-cgr-black pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category tabs */}
          <div className="grid sm:grid-cols-3 gap-3 md:gap-4 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(i)}
                className={`font-heading font-black tracking-widest uppercase text-base md:text-lg py-5 px-4 transition-colors duration-300 ${
                  i === activeCategory
                    ? 'bg-white text-cgr-black'
                    : 'bg-[#F6D51F] text-cgr-black hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <GalleryCategory
            key={categories[activeCategory].label}
            category={categories[activeCategory]}
          />
        </div>
      </section>

      <HowWeWork />
      <CertifiedSection />
    </main>
  )
}
