import { useEffect, useRef, useState } from 'react'
import './App.css'
import growthArrow from './assets/arrow.png'
import aboutBanner from './assets/banners/banner-2.jpg'
import bannerMobileTablet from './assets/banners/banner-mobile-tablet.jpg'
import gisProject from './assets/work/gis.png'
import panlexProject from './assets/work/panlex.png'
import revenueGrowthLogo from './assets/r-g-logo.png'
import nandaniPortrait from './assets/nandani.jpg'
import shripatiPortrait from './assets/shripati-avasthi.jpg'
import transformativeWork from './assets/transformative-work.png'

const services = [
  ['Growth Marketing', 'Acquire, engage, and retain more customers through measurable, data-backed marketing strategies.'],
  ['Search & AI Visibility', 'Increase your visibility across Google, search engines, and AI-powered discovery platforms.'],
  ['Conversion Optimization', 'Turn more website visitors into qualified leads and paying customers.'],
  ['AI Marketing Automation', 'Automate repetitive workflows, improve customer experiences, and scale your growth smarter.'],
  ['Founder & Brand Authority', 'Build credibility and attract valuable opportunities through strategic thought leadership.'],
  ['Marketplace Growth', 'Improve product visibility, conversions, and sales across leading digital marketplaces.'],
]

const articles = [
  ['https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=700&q=85', 'Essential Guide to Effective Pay-Per-Click Campaigns'],
  ['https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85', 'How to Build a Digital Strategy That Converts'],
  ['https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85', 'Why Generative Tools Belong in Your Workflow'],
]

const testimonials = [
  {
    name: 'Amit Kharbanda',
    designation: 'Founder & CEO, Global Infra Solutions',
    quote: "Revenue Growth has been a reliable marketing partner for our business. Their team understands our goals, communicates clearly, and consistently delivers quality work. We've seen better online visibility and a noticeable increase in genuine business inquiries.",
  },
  {
    name: 'Deepak Kohli',
    designation: 'CEO, Panlex LLP',
    quote: "Revenue Growth helped us establish a strong digital presence from the ground up. From designing our print materials to building our social media presence, their team delivered everything with professionalism and attention to detail. They've been a dependable partner throughout our branding journey.",
  },
]

function Logo() {
  return <a className="logo" href="/" aria-label="Revenue Growth home"><img src={revenueGrowthLogo} alt="Revenue Growth" /></a>
}

function SiteHeader({ onStartProject }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav-shell">
      <Logo />
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <nav className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
        <a href="/#clients">Clients</a><a href="/services">Services</a><a href="/about">About</a><a href="/#insights">Blog</a>
        <button className="pill" onClick={onStartProject}>Start a project</button>
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap footer-grid"><div><h2>Let’s Talk</h2><a href="mailto:revenue@gmail.com">revenue@gmail.com</a><a href="tel:+919999005697">+91 99990 05697</a><div className="socials"><a href="#top">ig</a><a href="#top">Be</a><a href="#top">in</a><a href="#top">𝕏</a></div></div>
        <div className="footer-links"><a href="/#work">Work</a><a href="/about">About</a><a href="/#clients">Clients</a><a href="/#insights">Blog</a><a href="/services">Services</a><a href="mailto:revenue@gmail.com">Contact</a><a href="/services">Industries</a></div>
      </div><div className="wrap copyright">© 2026 Revenue Growth <span>Built for what’s next.</span></div>
    </footer>
  )
}

function HeroSection({ onScheduleCall, about = false }) {
  return (
      <section className={`hero-section ${about ? 'about-page-hero' : 'home-hero'}`}>
        <picture className="hero-banner">
          <img src={about ? aboutBanner : bannerMobileTablet} alt="" aria-hidden="true" />
        </picture>
      {about ? (
        <div className="hero-copy about-hero-copy">
          <p className="about-hero-label">About Us</p>
          <h1>Driving Measurable Success in the Digital Economy.</h1>
          <h2>We do not just market. We scale businesses.</h2>
        </div>
      ) : (
        <div className="hero-copy">
          <h1>Your Next Stage of<br />Growth Starts Here.</h1>
          <button className="pill" onClick={onScheduleCall}>Schedule a call</button>
        </div>
      )}
      <img className="growth-arrow" src={growthArrow} alt="" aria-hidden="true" />
    </section>
  )
}

function MakeItHappen({ onScheduleCall }) {
  const ctaRef = useRef(null)

  useEffect(() => {
    const section = ctaRef.current
    if (!section) return

    const topText = section.querySelector('.marquee-top')
    const bottomText = section.querySelector('.marquee-bottom')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrame

    const updateMarquees = () => {
      const rect = section.getBoundingClientRect()
      const travelArea = window.innerHeight + rect.height
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / travelArea, 0), 1)
      const offset = reduceMotion ? 0 : (progress - 0.5) * 360

      topText.style.setProperty('--marquee-shift', `${offset}px`)
      bottomText.style.setProperty('--marquee-shift', `${-offset}px`)
      animationFrame = undefined
    }

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(updateMarquees)
    }

    updateMarquees()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="cta" ref={ctaRef}>
      <div className="marquee marquee-top" aria-hidden="true">Make It Happen Make It Happen Make It Happen Make It Happen</div>
      <div className="marquee marquee-bottom" aria-hidden="true">Make It Happen Make It Happen Make It Happen Make It Happen</div>
      <h2>Make It <em>Happen</em></h2>
      <button className="pill" onClick={onScheduleCall}>Schedule a call</button>
    </section>
  )
}

function App() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main id="top">
      <SiteHeader onStartProject={scrollToContact} />

      <HeroSection onScheduleCall={scrollToContact} />

      <section className="about wrap" id="about">
        <div className="about-image">
          <img src={transformativeWork} alt="Creative professional working at a laptop" />
        </div>
        <div className="about-copy">
          <p>We believe marketing should create measurable business outcomes—not just impressions, clicks, or followers.</p>
          <p>Every campaign, every strategy, and every decision is designed to generate qualified leads, increase conversions, and drive sustainable revenue growth.</p>
          <p>From AI-powered automation to performance marketing and conversion optimization, we build systems that help businesses scale with confidence.</p>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="wrap">
          <h2 className="section-title">Our Services</h2>
          <div className="service-grid">
            {services.map(([title, text]) => <a href="/services" key={title} aria-label={`Learn more about ${title}`}><article><h3>{title}</h3><p>{text}</p></article></a>)}
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="wrap">
          <h2 className="section-title light">See Our Work</h2>
          <div className="work-grid">
            <a href="#contact" className="project" aria-label="View the Global Infra Solutions project"><img src={gisProject} alt="Global Infra Solutions interior project" /></a>
            <a href="#contact" className="project" aria-label="View the Panlex LLP project"><img src={panlexProject} alt="Panlex LLP law firm project" /></a>
          </div>
        </div>
      </section>

      <section className="testimonials wrap" id="clients">
        <h2 className="section-title">Our Clients Say</h2>
        <div className="quote-grid">
          {testimonials.map(({ name, designation, quote }) => (
            <blockquote key={name}>
              <span>“</span>
              <p>{quote}</p>
              <footer><strong>{name}</strong><small>{designation}</small></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <MakeItHappen onScheduleCall={scrollToContact} />

      <section className="insights" id="insights">
        <div className="wrap"><h2 className="section-title light centered">News + Insights</h2><div className="article-grid">
          {articles.map(([image, title], i) => <a href="#contact" key={title}><img src={image} alt="" /><span>{i === 2 ? 'AI & Innovation' : 'Growth Strategy'}</span><h3>{title}</h3><b>Read insight ↗</b></a>)}
        </div></div>
      </section>

      <SiteFooter />
    </main>
  )
}

const team = [
  [nandaniPortrait, 'Nandani', 'Company Director'],
  [shripatiPortrait, 'Shripati Avasthi', 'CTO'],
]

const studioImages = [
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85',
]

function AboutPage() {
  const goToContact = () => { window.location.href = '/#contact' }

  return (
    <main id="top" className="about-page">
      <SiteHeader onStartProject={goToContact} />

      <HeroSection onScheduleCall={goToContact} about />

      <section className="team-section">
        <div className="wrap">
          <div className="about-introduction">
            <p className="team-intro-copy">Revenue Growth is a premium digital strategy agency built for the modern B2B and corporate landscape. We turn complex market dynamics into streamlined, scalable revenue pipelines.</p>
          </div>

          <div className="about-philosophy">
            <span className="eyebrow">Our Core Philosophy</span>
            <h2 className="about-heading">Your growth is our business.</h2>
            <p>We align every strategy with your corporate objectives, ensuring each digital initiative is accountable to a measurable return on investment.</p>
          </div>

          <div className="about-advantage">
            <span className="eyebrow">The Revenue Growth Advantage</span>
            <h2 className="about-heading">Technology meets business economics.</h2>
            <div className="advantage-grid">
              <article>
                <h3>Data-Driven Architectures</h3>
                <p>We build marketing ecosystems grounded in empirical data, focusing on high-conversion activity and lead velocity.</p>
              </article>
              <article>
                <h3>AI-Powered Execution</h3>
                <p>We use advanced AI frameworks to improve search visibility, automate CRM workflows, and accelerate market penetration.</p>
              </article>
              <article>
                <h3>Holistic Growth Alignment</h3>
                <p>From digital authority to final funnel conversion, every touchpoint is optimized to drive bottom-line revenue.</p>
              </article>
            </div>
          </div>

          <div className="about-commitment">
            <span className="eyebrow">Our Commitment</span>
            <h2 className="about-heading">An extension of your business.</h2>
            <p>We operate with transparency and a rigorous focus on scalability, helping established enterprises and high-growth brands build authority, strengthen their digital presence, and earn market share.</p>
          </div>

          <div className="about-team">
            <h2 className="about-heading">Meet the team</h2>
            <div className="team-grid">{team.map(([image, name, designation]) => <article key={name}><img src={image} alt={`${name}, ${designation} at Revenue Growth`} /><div><h3>{name}</h3><p>{designation}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <MakeItHappen onScheduleCall={goToContact} />

      <section className="studio wrap"><div className="studio-gallery">{studioImages.map((image, index) => <a key={image} href={image} target="_blank" rel="noreferrer" aria-label={`View workspace image ${index + 1}`}><img src={image} alt={index === 0 ? 'Revenue Growth team workspace' : ''} /></a>)}</div></section>

      <SiteFooter />
    </main>
  )
}

function ServicesPage() {
  const goToContact = () => { window.location.href = '/#contact' }

  return (
    <main id="top" className="services-page">
      <SiteHeader onStartProject={goToContact} />

      <section className="hero-section about-page-hero services-page-hero">
        <picture className="hero-banner"><img src={aboutBanner} alt="" aria-hidden="true" /></picture>
        <div className="hero-copy about-hero-copy">
          <h1>Services</h1>
          <h2>A full-service digital innovation partner</h2>
        </div>
        <img className="growth-arrow" src={growthArrow} alt="" aria-hidden="true" />
      </section>

      <div className="services-page-gradient">
        <section className="services-overview wrap">
          <p className="services-intro">Our digital marketing services combine strategy, technology, and performance-driven execution to strengthen your online presence and create meaningful business results.</p>
          <div className="service-grid">
            {services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>
        <MakeItHappen onScheduleCall={goToContact} />
      </div>

      <SiteFooter />
    </main>
  )
}

function ComingSoonPage() {
  return (
    <main className="coming-soon-page">
      <div className="coming-soon-glow coming-soon-glow-one" aria-hidden="true" />
      <div className="coming-soon-glow coming-soon-glow-two" aria-hidden="true" />
      <header className="coming-soon-header">
        <img src={revenueGrowthLogo} alt="Revenue Growth" />
      </header>
      <section className="coming-soon-content">
        <p className="coming-soon-eyebrow">Something exciting is on the way</p>
        <h1>Coming <em>Soon</em></h1>
        <p className="coming-soon-message">We’re creating a new digital experience to help ambitious brands grow. Stay tuned.</p>
        <a className="pill coming-soon-contact" href="mailto:revenue@gmail.com">Get in touch</a>
      </section>
      <footer className="coming-soon-footer">
        <span>© 2026 Revenue Growth</span>
        <a href="mailto:revenue@gmail.com">revenue@gmail.com</a>
      </footer>
    </main>
  )
}

const SITE_URL = 'https://www.revenuegrowth.in'

const seoByPath = {
  '/': {
    title: 'Revenue Growth | B2B Digital Strategy & Growth Marketing',
    description: 'Revenue Growth helps B2B and corporate brands scale through data-driven digital strategy, growth marketing, AI visibility, automation, and conversion optimization.',
    image: bannerMobileTablet,
  },
  '/about': {
    title: 'About Revenue Growth | Digital Strategy Agency',
    description: 'Meet Revenue Growth, a digital strategy agency that turns complex market dynamics into scalable revenue pipelines for B2B and corporate brands.',
    image: aboutBanner,
  },
  '/services': {
    title: 'Digital Growth Services | Revenue Growth',
    description: 'Explore growth marketing, search and AI visibility, conversion optimization, AI automation, brand authority, and marketplace growth services.',
    image: aboutBanner,
  },
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
}

function Seo({ path }) {
  useEffect(() => {
    const canonicalPath = path === '/home' ? '/' : path
    const seo = seoByPath[canonicalPath]
    const canonicalUrl = `${SITE_URL}${canonicalPath}`

    if (!seo) {
      document.title = 'Page Not Found | Revenue Growth'
      upsertMeta('meta[name="robots"]', { name: 'robots', content: 'noindex, follow' })
      return
    }

    const imageUrl = new URL(seo.image, SITE_URL).href
    document.title = seo.title
    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Revenue Growth digital strategy agency' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    let structuredData = document.head.querySelector('#revenue-growth-structured-data')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'revenue-growth-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.appendChild(structuredData)
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Revenue Growth',
          url: `${SITE_URL}/`,
          email: 'revenue@gmail.com',
          telephone: '+91 99990 05697',
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: 'Revenue Growth',
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
      ],
    })
  }, [path])

  return null
}

function Root() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  let page
  if (path === '/' || path === '/home') page = <App />
  else if (path === '/about') page = <AboutPage />
  else if (path === '/services') page = <ServicesPage />
  else page = <ComingSoonPage />

  return <><Seo path={path} />{page}</>
}

export default Root
