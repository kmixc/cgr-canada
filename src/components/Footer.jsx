import { Link } from 'react-router-dom'
import logo from '../assets/img/cgr_logo_footer.svg'

const LOGO = logo

const GLASS_SERVICES = ['Glass Railings', 'Curtain Wall Systems', 'Office Glass Partitions', 'Glass Enclosures', 'Curved Glass']
const METAL_SERVICES = ['Metal Railings', 'Mezzanines', 'Metal Stairs', 'Door Frames', 'Mobile Welding']

const COMPANY_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'GLASS SERVICES', to: '/glass-services' },
  { label: 'METAL SERVICES', to: '/metal-services' },
  { label: 'ABOUT US', to: '/about-us' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'CONTACT', to: '/contact' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.2 8.4h3.6V22H1.2V8.4zm6.4 0h3.45v1.86h.05c.48-.9 1.65-1.86 3.4-1.86 3.63 0 4.3 2.4 4.3 5.5V22h-3.6v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V22H7.6V8.4z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-cgr-black border-t border-white/10">
      <div className="w-full px-6 md:px-12 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-12 mb-10 md:mb-14">
          {/* Logo */}
          <div className="col-span-2 lg:col-span-1">
            <img
              src={LOGO}
              alt="CGR Canada"
              className="w-full max-w-[150px] md:max-w-[240px] mx-auto lg:mx-0"
            />
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h4 className="font-heading font-black text-xl md:text-2xl tracking-wide uppercase text-white mb-4 md:mb-6">OUR SERVICES</h4>
            <Link to="/glass-services" className="block font-heading font-bold text-sm tracking-wider uppercase text-white mb-1 hover:text-cgr-light transition-colors">GLASS SERVICES</Link>
            <ul className="space-y-1 mb-2">
              {GLASS_SERVICES.map(s => (
                <li key={s}>
                  <Link to="/glass-services" className="font-body text-sm text-cgr-light hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
            <Link to="/metal-services" className="block font-heading font-bold text-sm tracking-wider uppercase text-white mb-1 hover:text-cgr-light transition-colors">METAL SERVICES</Link>
            <ul className="space-y-1">
              {METAL_SERVICES.map(s => (
                <li key={s}>
                  <Link to="/metal-services" className="font-body text-sm text-cgr-light hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center lg:text-left">
            <h4 className="font-heading font-black text-xl md:text-2xl tracking-wide uppercase text-white mb-4 md:mb-6">COMPANY</h4>
            <ul className="space-y-4">
              {COMPANY_LINKS.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="font-body text-sm tracking-wide text-cgr-light hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <h4 className="font-heading font-black text-xl md:text-2xl tracking-wide uppercase text-white mb-4 md:mb-6">CONTACT US</h4>
            <p className="mb-4 md:mb-6">
              <a href="tel:+18773662476" className="font-body text-base text-cgr-light underline underline-offset-4 hover:text-white transition-colors">
                +1 (877) 366-2476
              </a>
            </p>
            <p className="mb-4 md:mb-6">
              <a href="mailto:info@cgrcanada.com" className="font-body text-base text-cgr-light underline underline-offset-4 hover:text-white transition-colors">
                info@cgrcanada.com
              </a>
            </p>
            <p className="font-body text-sm text-cgr-light leading-relaxed">
              1625 Sismet Rd Unit 26 &amp; 27, Mississauga, ON, L4W 1V6
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col items-center gap-4 sm:flex-row sm:relative">
          <div className="flex items-center gap-5">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white hover:text-cgr-light transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-cgr-light sm:absolute sm:left-1/2 sm:-translate-x-1/2">
            Copyright © 2025 Custom Glass Railings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
