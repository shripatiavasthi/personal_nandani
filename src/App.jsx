import { useEffect, useRef, useState } from 'react'
import './App.css'
import growthArrow from './assets/arrow.png'
import bannerMobileTablet from './assets/banners/banner-mobile-tablet.jpg'
import gisProject from './assets/work/gis.png'
import panlexProject from './assets/work/panlex.png'
import revenueGrowthLogo from './assets/r-g-logo.png'
import nandaniPortrait from './assets/nandani.jpg'
import shripatiPortrait from './assets/shripati-avasthi.png'
import transformativeWork from './assets/transformative-work.png'

const services = [
  {
    number: '01',
    name: 'Growth Marketing',
    headline: 'Accelerate Growth with Performance-Driven Marketing',
    description: 'Growth marketing goes beyond traditional advertising. It focuses on acquiring, engaging, and retaining customers using measurable, data-backed strategies that continuously improve business performance. Instead of running isolated campaigns, we create an integrated marketing ecosystem that helps your business grow consistently across every digital touchpoint.',
    offers: ['Meta Ads (Facebook & Instagram)', 'Google Ads', 'Search Engine Marketing (SEM)', 'Performance Marketing Campaigns', 'Lead Generation Campaigns', 'Marketing Strategy & Analytics', 'Campaign Optimization', 'Customer Acquisition Strategy'],
  },
  {
    number: '02',
    name: 'Search & AI Visibility',
    headline: 'Get Found Where Your Customers Are Searching',
    description: 'Search is evolving beyond Google. Today’s customers discover businesses through search engines, AI assistants, voice search, and generative AI platforms. We help your brand increase visibility across both traditional search and AI-powered search experiences, ensuring your business is discoverable wherever customers are looking.',
    offers: ['Search Engine Optimization (SEO)', 'Local SEO', 'Google Business Profile Optimization', 'Technical SEO', 'Content Optimization', 'AI Search Optimization', 'Generative Engine Optimization (GEO)', 'AI Visibility Strategy'],
    result: 'Higher rankings, increased organic traffic, and stronger visibility across Google and AI platforms.',
  },
  {
    number: '03',
    name: 'Conversion Optimization',
    headline: 'Turn More Visitors into Paying Customers',
    description: 'Driving traffic is only half the equation. The real growth happens when visitors become customers. Our Conversion Rate Optimization (CRO) strategies identify friction points across your website and sales funnel, helping improve user experience, increase conversions, and maximize every marketing investment.',
    offers: ['Conversion Rate Optimization (CRO)', 'Landing Page Design', 'Sales Funnel Strategy', 'Funnel Optimization', 'A/B Testing', 'User Experience Optimization', 'Lead Capture Optimization', 'Website Performance Analysis'],
    result: 'More leads, higher conversion rates, and increased revenue without increasing ad spend.',
  },
  {
    number: '04',
    name: 'AI Marketing Automation',
    headline: 'Automate Your Growth. Scale Smarter.',
    description: 'Businesses shouldn’t waste time on repetitive tasks. AI automation enables faster operations, better customer experiences, and improved marketing performance. We design intelligent workflows that automate customer interactions, streamline operations, and help your team focus on growth.',
    offers: ['Workflow Automation', 'CRM Automation', 'Lead Management', 'Lead Nurturing', 'Email Automation', 'AI Chatbots', 'Marketing Automation', 'Customer Journey Automation'],
    result: 'Faster response times, better customer engagement, and increased operational efficiency.',
  },
  {
    number: '05',
    name: 'Founder & Brand Authority',
    headline: 'Build Trust Before You Sell',
    description: 'People don’t just buy products—they buy from brands and leaders they trust. We help founders and businesses establish authority through strategic content, personal branding, and thought leadership that strengthens credibility and attracts high-value opportunities.',
    offers: ['Founder Branding', 'LinkedIn Personal Branding', 'Thought Leadership Strategy', 'Executive Content Creation', 'Brand Positioning', 'PR Strategy', 'Reputation Management', 'Content Strategy'],
    result: 'Increased credibility, stronger brand perception, and higher-quality business opportunities.',
  },
  {
    number: '06',
    name: 'Marketplace Growth',
    headline: 'Scale Your Sales Across Digital Marketplaces',
    description: 'Selling on marketplaces requires more than listing products. Success depends on visibility, optimized product pages, advertising, pricing, and continuous performance improvement. We help brands grow their presence across leading marketplaces while improving conversion rates and maximizing sales.',
    offers: ['Amazon Growth Strategy', 'Marketplace SEO', 'Product Listing Optimization', 'Amazon Advertising', 'Performance Analytics', 'Marketplace Account Management', 'Product Launch Strategy', 'Sales Optimization'],
    result: 'Higher product visibility, increased marketplace sales, and sustainable revenue growth.',
  },
]

const growthOutcomes = [
  'Generate qualified leads',
  'Improve search visibility',
  'Increase website conversions',
  'Automate marketing processes',
  'Build brand authority',
  'Scale marketplace sales',
  'Drive predictable revenue growth',
]

const testimonials = [
  {
    name: 'Amit Kharbanda',
    designation: 'Founder & CEO, Global Infra Solutions',
    quote: 'Revenue Growth has been a reliable marketing partner for our business. Their team understands our goals, communicates clearly, and consistently delivers quality work. We’ve seen better online visibility and a noticeable increase in genuine business inquiries.',
  },
  {
    name: 'Deepak Kohli',
    designation: 'CEO, Panlex LLP',
    quote: 'Revenue Growth helped us establish a strong digital presence from the ground up. From designing our print materials to building our social media presence, their team delivered everything with professionalism and attention to detail. They’ve been a dependable partner throughout our branding journey.',
  },
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
          <h1>Your Next Stage of<br />Growth Starts Here.</h1>
          <h2>Growth Is Our Only Metric.</h2>
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
        <div className="hero-description">
          <p>We believe marketing should create measurable business outcomes—not just impressions, clicks, or followers.</p>
          <p>Every campaign, every strategy, and every decision is designed to generate qualified leads, increase conversions, and drive sustainable revenue growth.</p>
          <p>From AI-powered automation to performance marketing and conversion optimization, we build systems that help businesses scale with confidence.</p>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="wrap">
          <h2 className="section-title">Growth Solutions Built to Scale Your Business</h2>
          <div className="section-intro">
            <p>Marketing alone doesn’t create growth. A connected strategy does.</p>
            <p>At Revenue Growth, we combine AI, digital marketing, automation, search visibility, and conversion optimization to build predictable growth systems that generate qualified leads, increase conversions, and drive long-term revenue.</p>
            <p>Whether you’re a startup, an established business, or an enterprise, our solutions are designed to help you attract the right customers, convert them faster, and scale efficiently.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.name}</h3>
                <h4>{service.headline}</h4>
                <p>{service.description}</p>
                <h5>What We Offer</h5>
                <ul>{service.offers.map((offer) => <li key={offer}>{offer}</li>)}</ul>
                {service.result && <p className="service-result"><strong>Expected result:</strong> {service.result}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="wrap why-grid">
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Businesses Choose Revenue Growth</h2>
            <h3>Growth isn’t a campaign—it’s a system.</h3>
            <p>Our approach combines strategy, AI, performance marketing, automation, and optimization into one connected growth engine.</p>
            <p>Every service we deliver is focused on measurable business outcomes—not vanity metrics.</p>
          </div>
          <div>
            <h4>We help businesses:</h4>
            <ul>{growthOutcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
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
          {testimonials.map(({ name, designation, quote }) => <blockquote key={name}><span>“</span><p>{quote}</p><footer>{name}<small>{designation}</small></footer></blockquote>)}
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
  [nandaniPortrait, 'Nandani'],
  [shripatiPortrait, 'Shripati Avasthi'],
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

      <section className="team-section"><div className="wrap"><p className="team-intro-copy">For over 20 years, since 2003, we’ve been at the forefront of digital marketing, helping businesses navigate the ever-changing online landscape without losing their way – or their sanity. Based in the heart of Ripon, North Yorkshire, we’re proud to be small-town locals with big-time impact, working with companies across the UK and internationally delivering innovative strategies tailored to the unique needs of each client.</p><h2 className="about-heading">Meet the team</h2><div className="team-grid">{team.map(([image, name], index) => <article key={`${name}-${index}`}><img src={image} alt={`${name}, Revenue Growth team member`} /><div><h3>{name}</h3></div></article>)}</div></div></section>

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
