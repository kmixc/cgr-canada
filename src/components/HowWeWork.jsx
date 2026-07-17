import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '1',
    title: 'Design & Planning',
    desc: 'Every project begins with a detailed review of design intent, site conditions, and project requirements. We work closely with clients, architects, and builders to ensure materials, finishes, and structural details are properly planned before fabrication begins.',
  },
  {
    num: '2',
    title: 'In House Fabrication',
    desc: 'All metal fabrication is completed in house, allowing for strict quality control and precision at every stage. Our team fabricates custom glass and metal components to exact specifications, ensuring consistency, durability, and a clean final product.',
  },
  {
    num: '3',
    title: 'Installation',
    desc: 'CGR ensures every component is installed to meet design intent and structural requirements. We coordinate closely with the site team for efficient scheduling, safe handling, and accurate installation to deliver a polished final result.',
  },
]

export default function HowWeWork() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section className="py-24 bg-cgr-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-title text-center mb-16"
        >
          HOW WE WORK
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="border border-white/10 p-8 hover:border-cgr-accent/50 transition-colors duration-300"
            >
              <div className="font-heading font-black text-6xl text-cgr-accent/30 mb-4">{step.num}.</div>
              <h3 className="font-heading font-bold text-xl tracking-widest uppercase text-white mb-4">{step.title}</h3>
              <p className="font-body text-sm text-cgr-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
