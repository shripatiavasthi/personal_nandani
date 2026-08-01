import { useEffect, useRef, useState } from 'react'
import './App.css'
import growthArrow from './assets/arrow.png'
import bannerMobileTablet from './assets/banners/banner-mobile-tablet.jpg'
import gisProject from './assets/work/gis.png'
import panlexProject from './assets/work/panlex.png'
import revenueGrowthLogo from './assets/r-g-logo.png'
import nandaniPortrait from './assets/nandani.jpg'
import shripatiPortrait from './assets/shripati-avasthi.jpg'
import transformativeWork from './assets/transformative-work.png'

const services = [
  ['Branding', 'Bold identities built to make ambitious brands impossible to ignore.'],
  ['Digital Products', 'Useful, intuitive experiences that turn complex ideas into simple products.'],
  ['Websites', 'High-performing websites designed to earn attention and drive action.'],
  ['Development', 'Fast, flexible technology built to scale alongside your business.'],
  ['Content', 'Strategic stories and campaigns that make your message matter.'],
  ['Generative Tools', 'Practical AI tools that help your teams move smarter and faster.'],
]

const articles = [
  ['https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=700&q=85', 'Essential Guide to Effective Pay-Per-Click Campaigns'],
  ['https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85', 'How to Build a Digital Strategy That Converts'],
  ['https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85', 'Why Generative Tools Belong in Your Workflow'],
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
        <a href="/#work">Work</a><a href="/#clients">Clients</a><a href="/#services">Services</a><a href="/about">About</a><a href="/#insights">Blog</a>
        <button className="pill" onClick={onStartProject}>Start a project</button>
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap footer-grid"><div><h2>Let’s Talk</h2><a href="mailto:revenue@gmail.com">revenue@gmail.com</a><a href="tel:+919999005697">+91 99990 05697</a><div className="socials"><a href="#top">ig</a><a href="#top">Be</a><a href="#top">in</a><a href="#top">𝕏</a></div></div>
        <div className="footer-links"><a href="/#work">Work</a><a href="/about">About</a><a href="/#clients">Clients</a><a href="/#insights">Blog</a><a href="/#services">Services</a><a href="mailto:revenue@gmail.com">Contact</a><a href="/#services">Industries</a></div>
      </div><div className="wrap copyright">© 2026 Revenue Growth <span>Built for what’s next.</span></div>
    </footer>
  )
}

function HeroSection({ onScheduleCall, about = false }) {
  return (
      <section className={`hero-section ${about ? 'about-page-hero' : 'home-hero'}`}>
        <picture className="hero-banner">
          <img src={bannerMobileTablet} alt="" aria-hidden="true" />
        </picture>
      {about ? (
        <div className="hero-copy about-hero-copy">
          <h1>About Us</h1>
          <h2>We transform brands through<br />elevated digital experiences</h2>
        </div>
      ) : (
        <div className="hero-copy">
          <p>Fuelling your</p>
          <h1>Online Growth</h1>
          <h2>through smart digital solutions</h2>
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
        <p>We build transformative digital experiences for the world's leading brands by blending AI, design, and technology.</p>
      </section>

      <section className="services-section" id="services">
        <div className="wrap">
          <h2 className="section-title">Our Services</h2>
          <div className="service-grid">
            {services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
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
          {[['Deepak Gulati', 'Revenue Growth transformed how our brand shows up online. The team brought clarity, pace and genuine creative spark.'], ['Nandita Shah', 'They understood our ambition from day one and turned it into a digital experience our customers truly love.']].map(([name, quote]) => <blockquote key={name}><span>“</span><p>{quote}</p><footer>{name}</footer></blockquote>)}
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

      <section className="team-section"><div className="wrap"><p className="team-intro-copy">For over 20 years, since 2003, we’ve been at the forefront of digital marketing, helping businesses navigate the ever-changing online landscape without losing their way – or their sanity. Based in the heart of Ripon, North Yorkshire, we’re proud to be small-town locals with big-time impact, working with companies across the UK and internationally delivering innovative strategies tailored to the unique needs of each client.</p><h2 className="about-heading">Meet the team</h2><div className="team-grid">{team.map(([image, name, designation]) => <article key={name}><img src={image} alt={`${name}, ${designation} at Revenue Growth`} /><div><h3>{name}</h3><p>{designation}</p></div></article>)}</div></div></section>

      <MakeItHappen onScheduleCall={goToContact} />

      <section className="studio wrap"><div className="studio-gallery">{studioImages.map((image, index) => <a key={image} href={image} target="_blank" rel="noreferrer" aria-label={`View workspace image ${index + 1}`}><img src={image} alt={index === 0 ? 'Revenue Growth team workspace' : ''} /></a>)}</div></section>

      <SiteFooter />
    </main>
  )
}

function Root() {
  return window.location.pathname.replace(/\/+$/, '') === '/about' ? <AboutPage /> : <App />
}

export default Root
