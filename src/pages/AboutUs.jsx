import { Link } from 'react-router-dom'
import aboutHero from '../assets/img/aboutus.jpg'
import transitionImg from '../assets/img/transiton_1.png'
import cartoonImg from '../assets/img/cartoon_1.jpg'
import cartoon2Img from '../assets/img/cartoon_2.jpg'
import paintImg from '../assets/img/paint.png'
import transition2Img from '../assets/img/transiton_2.png'
import whyImg from '../assets/img/image_1.jpg'
import './GlassServices.css'
import './AboutUs.css'

const HERO_IMG = aboutHero
const TRANSITION_IMG = transitionImg

export default function AboutUs() {
  return (
    <main className="gs-page">
      <section className="gs-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="gs-hero-overlay" />
        <div className="gs-hero-content">
          <h1>ABOUT US</h1>
          <p className="gs-subtitle">craftsmanship - integrity - attention to detail</p>
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

      <section className="gs-origin">
        <div className="gs-container gs-origin-grid">
          <div className="gs-origin-text">
            <h2 className="gs-origin-title">HOW IT STARTED</h2>
            <div className="gs-origin-line" />
            <p>Custom Glass Railings (CGR) was founded in 2015 by two longtime friends with a shared vision to deliver high quality architectural glass solutions built on craftsmanship, integrity, and attention to detail. What began as a company focused on glass railing systems quickly evolved as client demand grew and projects became more complex.</p>
            <p>As the business expanded, CGR developed into a full service glass and metal fabrication company, working across residential, commercial, and industrial sectors. From custom homes and community developments to high rise condominiums, storefronts, curtain wall systems, and industrial metal structures, CGR provides tailored solutions to meet each project's unique needs.</p>
            <p>From the beginning, CGR has remained committed to quality, accountability, and long term client relationships, values that continue to guide the company's growth today.</p>
          </div>
          <div className="gs-origin-img">
            <img src={cartoon2Img} alt="CGR team at work" />
          </div>
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
