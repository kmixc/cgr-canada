# CGR Canada — React Migration

Full pixel-faithful React (Vite) clone of [cgrcanada.com](https://cgrcanada.com/).

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** — all styles, custom colors, fonts
- **Framer Motion 11** — scroll animations, page transitions, mobile menu
- **React Router DOM 6** — client-side routing

## Project Structure

```
cgr-canada/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx            # Router + layout wrapper
    ├── index.css          # Tailwind + global styles
    ├── hooks/
    │   └── useInView.js   # IntersectionObserver hook for scroll animations
    ├── components/
    │   ├── Navbar.jsx         # Sticky nav, dropdown, mobile hamburger
    │   ├── Footer.jsx         # Full footer with services + links
    │   ├── PageHero.jsx       # Reusable hero banner for inner pages
    │   ├── HowWeWork.jsx      # Shared "How We Work" 3-step section
    │   ├── CertifiedSection.jsx  # Certified + Why Choose Us sections
    │   └── ScrollToTop.jsx    # Scroll to top on route change
    └── pages/
        ├── Home.jsx           # Video hero, service cards, about strip, CTA
        ├── GlassServices.jsx  # All 7 glass service descriptions
        ├── MetalServices.jsx  # All 5 metal service descriptions
        ├── AboutUs.jsx        # Origin story + how we work
        ├── Projects.jsx       # Full photo gallery with lightbox
        └── Contact.jsx        # Contact info, areas map, quote form
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
open http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home (video hero) |
| `/glass-services` | Glass Services |
| `/metal-services` | Metal Services |
| `/about-us` | About Us |
| `/projects` | Projects (gallery + lightbox) |
| `/contact` | Contact + Quote Form |

## Features Implemented

- ✅ Full-screen video hero on homepage
- ✅ Sticky transparent navbar that adds background on scroll
- ✅ Services dropdown on desktop
- ✅ Slide-in mobile hamburger menu
- ✅ Scroll-triggered fade/slide animations on every section
- ✅ Photo gallery with lightbox (prev/next navigation)
- ✅ Contact quote form with service selector
- ✅ Areas We Serve section with map
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ All images served directly from cgrcanada.com CDN
- ✅ Custom Barlow Condensed + Barlow typography via Google Fonts

## Notes

- All images are loaded from the original site's CDN (`cgrcanada.com/wp-content/uploads/`)
- The contact form is frontend-only; wire up to a backend (Formspree, EmailJS, etc.) as needed
- The video hero uses the original MP4 from the site's CDN
