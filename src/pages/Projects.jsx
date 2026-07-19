import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'
import projectsHero from '../assets/img/projects.jpg'
import transitionImg from '../assets/img/transiton_2.png'

const HERO_IMG = projectsHero
const TRANSITION_2 = transitionImg

const sortImgs = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src)

const railingImgs = sortImgs(
  import.meta.glob('../assets/img/glassrailings/*', { eager: true, import: 'default' })
)
const enclosureImgs = sortImgs(
  import.meta.glob('../assets/img/glassenclosures/*', { eager: true, import: 'default' })
)
const metalworkImgs = sortImgs(
  import.meta.glob('../assets/img/metalwork/*', { eager: true, import: 'default' })
)

const categories = [
  {
    label: 'GLASS RAILINGS',
    images: [
      ...railingImgs,
    ],
  },
  {
    label: 'GLASS ENCLOSURES',
    images: [
      ...enclosureImgs,
    ],
  },
  {
    label: 'METAL WORK',
    images: [
      ...metalworkImgs,
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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
    </main>
  )
}
