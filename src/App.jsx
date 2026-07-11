import { useState } from 'react'
import './App.css'

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
  return <a className="logo" href="#top" aria-label="Revenue Growth home"><span>Re</span><i>v</i><span>enue</span><small>GROWTH<br />LET'S MAKE IT REAL</small></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main id="top">
      <header className="nav-shell">
        <Logo />
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
          <a href="#work">Work</a><a href="#clients">Clients</a><a href="#services">Services</a><a href="#about">About</a><a href="#insights">Blog</a>
          <button className="pill" onClick={scrollToContact}>Start a project</button>
        </nav>
      </header>

      <section className="hero-section">
        <div className="circuit-lines" />
        <div className="hero-copy">
          <p>Fuelling your</p>
          <h1>Online Growth</h1>
          <h2>through smart digital solutions</h2>
          <button className="pill" onClick={scrollToContact}>Schedule a call</button>
        </div>
        <div className="growth-arrow" aria-hidden="true" />
      </section>

      <section className="about wrap" id="about">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=900&q=85" alt="Creative professional working at a laptop" />
        </div>
        <p>We build transformative digital experiences for the world's leading brands by blending <strong>AI, design, and technology.</strong></p>
      </section>

      <section className="services-section" id="services">
        <div className="wrap">
          <h2 className="section-title">Our Services</h2>
          <div className="service-grid">
            {services.map(([title, text], index) => <article className={index === 2 ? 'featured' : ''} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="wrap">
          <h2 className="section-title light">See Our Work</h2>
          <div className="work-grid">
            <a href="#contact" className="project project-one"><span>G↑S<small>BRAND & DIGITAL</small></span><strong>View project ↗</strong></a>
            <a href="#contact" className="project project-two"><span>Plan | Execute<small>ALL DAY FINE</small></span><strong>View project ↗</strong></a>
          </div>
        </div>
      </section>

      <section className="testimonials wrap" id="clients">
        <h2 className="section-title">Our Clients Say</h2>
        <div className="quote-grid">
          {[['Deepak Gulati', 'Revenue Growth transformed how our brand shows up online. The team brought clarity, pace and genuine creative spark.'], ['Nandita Shah', 'They understood our ambition from day one and turned it into a digital experience our customers truly love.']].map(([name, quote]) => <blockquote key={name}><span>“</span><p>{quote}</p><footer>{name}</footer></blockquote>)}
        </div>
      </section>

      <section className="cta">
        <div className="marquee" aria-hidden="true">Make It Happen Make It Happen</div>
        <h2>Make It <em>Happen</em></h2>
        <button className="pill" onClick={scrollToContact}>Schedule a call</button>
      </section>

      <section className="insights" id="insights">
        <div className="wrap"><h2 className="section-title light centered">News + Insights</h2><div className="article-grid">
          {articles.map(([image, title], i) => <a href="#contact" key={title}><img src={image} alt="" /><span>{i === 2 ? 'AI & Innovation' : 'Growth Strategy'}</span><h3>{title}</h3><b>Read insight ↗</b></a>)}
        </div></div>
      </section>

      <footer className="footer" id="contact">
        <div className="wrap footer-grid"><div><h2>Let’s Talk</h2><a href="mailto:revenue@gmail.com">revenue@gmail.com</a><a href="tel:+919810800876">+ 91–9810800876</a><div className="socials"><a href="#top">ig</a><a href="#top">Be</a><a href="#top">in</a><a href="#top">𝕏</a></div></div>
          <div className="footer-links"><a href="#work">Work</a><a href="#about">About</a><a href="#clients">Clients</a><a href="#insights">Blog</a><a href="#services">Services</a><a href="mailto:revenue@gmail.com">Contact</a><a href="#services">Industries</a></div>
        </div><div className="wrap copyright">© 2026 Revenue Growth <span>Built for what’s next.</span></div>
      </footer>
    </main>
  )
}

export default App
