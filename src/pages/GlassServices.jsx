import { Link } from 'react-router-dom'
import { useState } from 'react'
import glassServicesHero from '../assets/img/glassservices.jpg'
import transitionImg from '../assets/img/transiton_1.png'
import cartoonImg from '../assets/img/cartoon_1.jpg'
import paintImg from '../assets/img/paint.png'
import transition2Img from '../assets/img/transiton_2.png'
import whyImg from '../assets/img/image_1.jpg'
import './GlassServices.css'

const HERO_IMG = glassServicesHero
const TRANSITION_IMG = transitionImg

const services = [
  {
    title: 'Glass Railings – Interior & Exterior',
    body: 'Engineered glass railing systems for residential, commercial, and industrial applications. We design and install frameless and framed glass guard systems using a variety of hardware mounting options including surface-mounted base shoe, standoff pins, spigots, and fascia/side-mounted systems depending on structural and architectural requirements. Ideal for stairs, landings, balconies, and terraces, including high-rise condominium and apartment balcony guards with integrated privacy dividers. For residential projects, we offer custom pool enclosures with self-closing, code-compliant locking gates, as well as fully customized or modular kit systems tailored to project scope, budget, and design intent.',
  },
  {
    title: 'Curtain Wall Systems & Storefronts',
    body: 'Commercial and industrial aluminum and glass façade systems designed for performance, durability, and architectural impact. We supply and install curtain wall systems and retail storefront assemblies engineered to meet structural, thermal, and code requirements while maximizing natural light and visibility. Our scope includes full glazing packages, insulated glass units, entrance systems, and integrated ADO (Automatic Door Opener) systems for barrier-free access and high-traffic environments. Ideal for retail plazas, office buildings, warehouses, and institutional facilities seeking a clean, modern exterior with reliable long-term performance.',
  },
  {
    title: 'Glass Enclosures – Gyms, Wine Cellars & Showers',
    body: 'Custom glass enclosure systems for high-end residential and commercial interiors. In custom homes, we design and install frameless and framed glass enclosures for private gyms, climate-controlled wine cellars, and luxury shower systems, delivering clean sightlines while maintaining proper ventilation, sealing, and structural integrity. For commercial environments, we fabricate specialty glass vestibules for restaurants, hospitality spaces, and office entries, as well as architectural wine displays that showcase collections while meeting functional and code requirements. Each enclosure is tailored to the space, combining precision hardware, premium glass finishes, and refined detailing to elevate both performance and design.',
  },
  {
    title: 'Decorative Glass – Printed & Film Applications',
    body: 'Architectural decorative glass solutions designed to enhance branding, privacy, and visual impact in commercial and residential environments. We supply and install custom glass film applications for office partitions and enclosures, providing privacy gradients, frosted effects, logos, and branded graphics without sacrificing natural light. Our offerings also include back-painted glass for feature walls, columns, elevator surrounds, and lobby accents, delivering a sleek, durable alternative to traditional finishes. For fully customized design statements, we provide precision laser-printed glass applications with custom patterns, textures, and imagery, transforming standard glazing into a functional architectural centerpiece.',
  },
  {
    title: 'Bullet-Resistant / Ballistic Glass',
    body: 'High-security glazing systems engineered to provide enhanced protection in commercial, institutional, and high-risk environments. We supply and install certified bullet-resistant and ballistic-rated glass assemblies designed to meet recognized security standards while maintaining optical clarity and professional aesthetics. Applications include banks, government facilities, retail storefronts, guard booths, transaction windows, and secure office partitions. Systems can be integrated into aluminum storefronts, curtain wall frames, and custom steel assemblies, with options for pass-through drawers, speak-through devices, and reinforced framing to deliver a complete, code-compliant protective solution without compromising design intent.',
  },
  {
    title: 'Curved Glass',
    body: 'Custom bent and curved glass solutions fabricated to meet complex architectural and design requirements. We supply and install precision-formed glass for residential, commercial, and institutional applications, including curved railings, stair enclosures, storefronts, curtain walls, feature façades, and interior partitions. Each panel is manufactured to exact radiuses and structural specifications, available in tempered, laminated, insulated, and low-iron options depending on performance needs. Ideal for feature staircases, rounded balconies, display windows, and statement architectural elements, curved glass delivers seamless flow and elevated design while maintaining structural integrity and code compliance.',
  },
  {
    title: 'Mirrors',
    body: 'Custom fabricated mirror solutions for residential, commercial, and institutional applications. We supply and install precision-cut mirrors for bathrooms, feature walls, fitness studios, elevators, lobbies, and retail environments, tailored to exact dimensions and design intent. Options include polished or beveled edges, safety-backing, tinted and antique finishes, and seamless wall-to-wall installations for a clean, expansive look. Whether enhancing natural light in a custom home or creating functional wall coverage for gyms and commercial spaces, our mirror systems are installed with refined detailing and secure mounting methods for long-term durability and performance.',
  },
]

export default function GlassServices() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <main className="gs-page">
      <section className="gs-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="gs-hero-overlay" />
        <div className="gs-hero-content">
          <h1>GLASS SERVICES</h1>
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
