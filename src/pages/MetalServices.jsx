import { Link } from 'react-router-dom'
import { useState } from 'react'
import metalServicesHero from '../assets/img/metalservices.jpg'
import transitionImg from '../assets/img/transiton_1.png'
import cartoonImg from '../assets/img/cartoon_1.jpg'
import paintImg from '../assets/img/paint.png'
import transition2Img from '../assets/img/transiton_2.png'
import whyImg from '../assets/img/image_1.jpg'
import './GlassServices.css'

const HERO_IMG = metalServicesHero
const TRANSITION_IMG = transitionImg

const services = [
  {
    title: 'Metal Railings',
    body: 'Custom engineered metal railing systems for interior and exterior applications across residential, commercial, and industrial projects. We fabricate and install powder-coated steel, stainless steel, and aluminum railing systems, including cable, picket, flat bar, and mixed material assemblies tailored to structural and design requirements. From custom homes and townhouse developments to commercial staircases, mezzanine guards, and high-rise balconies, our metal railings are fabricated in house to exact specifications and installed to meet OBC code compliance and architectural intent.',
  },
  {
    title: 'Mezzanines',
    body: 'Structural steel mezzanine systems designed and fabricated for industrial, warehouse, and commercial environments. We engineer custom mezzanine platforms to maximize vertical space and operational efficiency, incorporating staircase access, guard rail systems, and integrated floor decking. Each system is built to exact load specifications, engineered and stamped as required, and installed with minimal disruption to ongoing operations. Ideal for storage expansion, office buildouts above production floors, and multi-level warehouse configurations.',
  },
  {
    title: 'Metal Stairs',
    body: 'Custom fabricated steel stair systems for residential, commercial, and industrial applications. We design and install open-riser and closed-riser configurations, mono-stringer and double-stringer assemblies, and feature staircases combining steel structure with wood, concrete, or glass infill elements. Each stair system is engineered to meet OBC requirements and fabricated in house to ensure structural precision, consistent finish quality, and clean integration with surrounding architectural elements. Suitable for custom homes, commercial interiors, office towers, and industrial facilities.',
  },
  {
    title: 'Door Frames',
    body: 'Custom fabricated steel door frames and architectural metal frame assemblies for commercial and industrial environments. We supply and install hollow metal frames, tube steel frames, and custom welded assemblies designed to meet fire rating, security, and dimensional requirements. Suitable for warehouses, industrial facilities, commercial fit-outs, and high-traffic institutional environments where durability, precise tolerances, and long-term performance are essential. All frames are fabricated in house and finished to project specifications.',
  },
  {
    title: 'Mobile Welding',
    body: 'On-site mobile welding services for structural, architectural, and repair applications across residential, commercial, and industrial projects. Our certified welders provide field welding for steel connections, structural repairs, custom fabrication, and site modifications where shop fabrication is not practical. Services include MIG, TIG, and stick welding across carbon steel, stainless steel, and aluminum, with documentation and certifications available as required. Ideal for construction sites, industrial facilities, and renovation projects requiring precision on-site metalwork.',
  },
]

export default function MetalServices() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <main className="gs-page">
      <section className="gs-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="gs-hero-overlay" />
        <div className="gs-hero-content">
          <h1>METAL SERVICES</h1>
          <p className="gs-subtitle">residential - commercial - industrial</p>
          <div className="gs-cta-row">
            <Link to="/contact#form" className="gs-cta-btn">GET A FREE QUOTE</Link>
            <p className="gs-call-text">
              OR CALL US AT <a href="tel:+18773662476">+1 (877) 366-2476</a>
            </p>
          </div>
        </div>
      </section>

      <div className="gs-transition-wrap" aria-hidden="true">
        <img src={TRANSITION_IMG} alt="" className="gs-transition" />
      </div>

      <section className="gs-services">
        <div className="gs-container gs-services-list">
          {services.map((s, i) => {
            const isOpen = openIndex === i
            return (
              <article key={s.title} className={`gs-service-item${isOpen ? ' gs-service-item--open' : ''}`}>
                <button
                  className="gs-service-head"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="gs-service-number">{String(i + 1).padStart(2, '0')}</span>
                  <h2>{s.title}</h2>
                  <span className="gs-chevron" aria-hidden="true" />
                </button>
                <div className="gs-service-body" style={{ maxHeight: isOpen ? '1200px' : '0' }}>
                  <p>{s.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

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
              <p>All metal fabrication is completed in house, allowing for strict quality control and precision at every stage. Our team fabricates custom metal components to exact specifications, ensuring consistency, durability, and a clean final product.</p>
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
