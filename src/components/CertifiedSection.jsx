import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const TRANSITION_IMG = '/img/CGR-Transition-3.png'

export default function CertifiedSection() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Background transition image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: `url(${TRANSITION_IMG})` }}
      >
        <div className="absolute inset-0 bg-cgr-black/75" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-heading font-black text-3xl md:text-4xl tracking-widest uppercase text-white mb-8"
          >
            CERTIFIED + INSURED + BONDED
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-body text-base md:text-lg text-white/80 leading-relaxed mb-6"
          >
            CGR adheres to all applicable MOL and OBC regulations, ensuring full compliance with industry standards across every project. Our team is experienced in operating under CCDC contract frameworks and provides all required documentation, including engineered drawings, certifications, health and safety protocols, as well as comprehensive insurance and bonding coverage.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading font-bold tracking-widest text-sm text-cgr-accent"
          >
            All certifications are available upon request.
          </motion.p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-cgr-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-center mb-14"
          >
            WHY CHOOSE US
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Professional Approach',
                desc: 'Clear communication, accountability, and job site professionalism are at the core of how we work, from planning through installation.',
              },
              {
                title: 'Precision Craftsmanship',
                desc: 'Every detail matters. Our in house fabrication and experienced team ensure accurate, high quality results on every project.',
              },
              {
                title: 'Reliable Execution',
                desc: 'We understand construction timelines. Our team coordinates closely with other trades to deliver consistent, dependable work without delays.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="text-center px-4"
              >
                <div className="w-16 h-0.5 bg-cgr-accent mx-auto mb-6" />
                <h3 className="font-heading font-black text-xl tracking-widest uppercase text-white mb-4">{item.title}</h3>
                <p className="font-body text-sm text-cgr-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
