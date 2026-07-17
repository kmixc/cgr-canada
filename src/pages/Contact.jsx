import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import contactHero from '../assets/img/contactus.jpg'
import transitionImg from '../assets/img/transiton_1.png'
import mapImg from '../assets/img/map.png'
import cartoonImg from '../assets/img/cartoon_1.jpg'
import paintImg from '../assets/img/paint.png'
import transition2Img from '../assets/img/transiton_2.png'
import whyImg from '../assets/img/image_1.jpg'
import './GlassServices.css'
import './Contact.css'

const HERO_IMG = contactHero
const TRANSITION_IMG = transitionImg

const canadaAreas = [
  'Toronto, ON', 'Mississauga, ON', 'Vaughan, ON', 'Barrie, ON',
  'Hamilton, ON', 'London, ON', 'Kitchener, ON', 'Waterloo, ON',
  'Niagara Falls, ON', 'Ottawa, ON', 'Kingston, ON', 'Muskoka, ON',
  'Peterborough, ON', 'Sudbury, ON',
]
const usAreas = ['Florida', 'New York']

function PhoneIcon() {
  return (
    <svg className="ct-info-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="ct-info-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="ct-info-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  )
}

function ContactHero() {
  return (
    <section className="ct-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
      <div className="ct-hero-overlay" />
      <div className="ct-hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CONTACT US
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="ct-hero-desc"
        >
          CGR has become a trusted leader in architectural glass and metal fabrication through our expertise, precision, and dedication. We pride ourselves on delivering high-quality solutions for every project, ensuring craftsmanship, reliability, and client satisfaction at every stage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="ct-info-list"
        >
          <a href="tel:+18773662476" className="ct-info-item">
            <PhoneIcon />
            <span>+1 (877) 366-2476</span>
          </a>
          <a href="mailto:info@cgrcanada.com" className="ct-info-item">
            <EmailIcon />
            <span>info@cgrcanada.com</span>
          </a>
          <div className="ct-info-item">
            <LocationIcon />
            <span>1625 Sismet Rd Unit 26 & 27, Mississauga, ON, L4W 1V6</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AreasSection() {
  const [ref, inView] = useInView()
  return (
    <section className="ct-areas" ref={ref}>
      <div className="ct-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="ct-areas-header"
        >
          <h2 className="ct-areas-title">AREAS WE SERVE</h2>
          <div className="ct-areas-line" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="ct-areas-intro"
        >
          Custom Glass Railings (CGR) proudly serves projects across Canada and the United States, supporting residential, commercial, and industrial clients with dependable glass and metal fabrication services.
        </motion.p>

        <div className="ct-areas-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="ct-areas-col"
          >
            <h3>CANADA</h3>
            <ul>
              {canadaAreas.map(area => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="ct-areas-map"
          >
            <img src={mapImg} alt="Map of CGR service areas across Canada and the United States" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="ct-areas-col"
          >
            <h3>UNITED STATES</h3>
            <ul>
              {usAreas.map(area => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="form" className="bg-black py-20" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-title text-center mb-12"
        >
          GET A FREE QUOTE
        </motion.h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="font-heading font-black text-3xl tracking-widest uppercase text-cgr-accent mb-4">Thank You!</div>
            <p className="font-body text-cgr-light">We'll be in touch shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={submit}
            className="space-y-5"
          >
            {[
              { name: 'name', label: 'Full Name', type: 'text', required: true },
              { name: 'email', label: 'Email Address', type: 'email', required: true },
              { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
            ].map(field => (
              <div key={field.name}>
                <label className="font-heading font-semibold tracking-widest text-xs uppercase text-cgr-light block mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  value={form[field.name]}
                  onChange={handle}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-cgr-light/40 focus:outline-none focus:border-cgr-accent transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="font-heading font-semibold tracking-widest text-xs uppercase text-cgr-light block mb-2">
                Service Required
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handle}
                className="w-full bg-black border border-white/20 px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-cgr-accent transition-colors appearance-none"
              >
                <option value="">Select a service…</option>
                <option>Glass Railings</option>
                <option>Curtain Wall Systems</option>
                <option>Office Glass Partitions</option>
                <option>Glass Enclosures</option>
                <option>Curved Glass</option>
                <option>Mirrors</option>
                <option>Metal Railings</option>
                <option>Mezzanines</option>
                <option>Metal Stairs</option>
                <option>Door Frames</option>
                <option>Mobile Welding</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="font-heading font-semibold tracking-widest text-xs uppercase text-cgr-light block mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handle}
                className="w-full bg-transparent border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-cgr-light/40 focus:outline-none focus:border-cgr-accent transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full text-center">
              SUBMIT REQUEST
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <main className="ct-page">
      <ContactHero />

      <div className="ct-transition-wrap" aria-hidden="true">
        <img src={TRANSITION_IMG} alt="" className="ct-transition" />
      </div>

      <ContactForm />
      <AreasSection />

      <section className="gs-how" style={{ backgroundImage: `url(${cartoonImg})` }}>
        <div className="gs-how-overlay" />
        <div className="gs-container">
          <div className="gs-how-header">
            <h2 className="gs-how-title">HOW WE WORK</h2>
            <div className="gs-how-line" />
          </div>
          <div className="gs-how-grid">
            <article className="gs-how-card gs-how-card--1">
              <h3>1. Design & Planning</h3>
              <p>Every project begins with a detailed review of design intent, site conditions, and project requirements. We work closely with clients, architects, and builders to ensure materials, finishes, and structural details are properly planned before fabrication begins.</p>
            </article>
            <article className="gs-how-card gs-how-card--2">
              <h3>2. In House Fabrication</h3>
              <p>All metal fabrication is completed in house, allowing for strict quality control and precision at every stage. Our team fabricates custom glass and metal components to exact specifications, ensuring consistency, durability, and a clean final product.</p>
            </article>
            <article className="gs-how-card gs-how-card--3">
              <h3>3. Installation</h3>
              <p>CGR ensures every component is installed to meet design intent and structural requirements. We coordinate closely with the site team for efficient scheduling, safe handling, and accurate installation to deliver a polished final result.</p>
            </article>
          </div>
        </div>
        <div className="gs-stats" style={{ backgroundImage: `url(${paintImg})` }}>
          <div className="gs-stat">
            <span className="gs-stat-number">10,000+</span>
            <span className="gs-stat-label">Projects Completed</span>
          </div>
          <div className="gs-stat">
            <span className="gs-stat-number">$27,000,000+</span>
            <span className="gs-stat-label">In Completed Projects</span>
          </div>
          <div className="gs-stat">
            <span className="gs-stat-number">20+</span>
            <span className="gs-stat-label">Years of Experience</span>
          </div>
        </div>
      </section>

      <div className="gs-certified-transition" aria-hidden="true">
        <img src={transition2Img} alt="" className="gs-certified-transition-img" />
      </div>

      <section className="gs-certified">
        <div className="gs-container gs-certified-content">
          <div className="gs-certified-header">
            <h2 className="gs-certified-title">CERTIFIED + INSURED + BONDED</h2>
            <div className="gs-certified-line" />
          </div>
          <p>CGR adheres to all applicable MOL and OBC regulations, ensuring full compliance with industry standards across every project. Our team is experienced in operating under CCDC contract frameworks and provides all required documentation, including engineered drawings, certifications, health and safety protocols, as well as comprehensive insurance and bonding coverage.</p>
          <strong>All certifications are available upon request.</strong>
        </div>
      </section>

      <section className="gs-why" style={{ backgroundImage: `url(${whyImg})` }}>
        <div className="gs-why-overlay" />
        <div className="gs-container">
          <div className="gs-why-header">
            <h2 className="gs-why-title">WHY CHOOSE US</h2>
            <div className="gs-why-line" />
          </div>
          <div className="gs-why-grid">
            <article>
              <h3>Professional Approach</h3>
              <p>Clear communication, accountability, and job site professionalism are at the core of how we work, from planning through installation.</p>
            </article>
            <article>
              <h3>Precision Craftsmanship</h3>
              <p>Every detail matters. Our in house fabrication and experienced team ensure accurate, high quality results on every project.</p>
            </article>
            <article>
              <h3>Reliable Execution</h3>
              <p>We understand construction timelines. Our team coordinates closely with other trades to deliver consistent, dependable work without delays.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
