import { personalInfo } from '../data/personal.js'

export default function Hero() {
  return <section id="home" className="hero page-wrap">
    <div className="hero-copy reveal">
      <p className="eyebrow"><span className="status-dot" /> AI ENGINEER <span className="eyebrow-divider">/</span> FULL-STACK DEVELOPER</p>
      <h1>Hi, I’m Mahid<br /><span>Wasif.</span></h1>
      <p className="hero-lede">I build intelligent systems<br className="desktop-break" /> and modern web applications.</p>
      <p className="hero-description">From retrieval pipelines and AI agents to the interfaces people use every day, I work across the stack to make software practical and clear.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">View my work <span aria-hidden="true">↘</span></a>
        <a className="button button-secondary" href={personalInfo.resume}>Download resume <span aria-hidden="true">↗</span></a>
      </div>
      <a className="hero-connect" href="#contact">Have a project in mind? <span>Let’s connect <span aria-hidden="true">↗</span></span></a>
    </div>
    <div className="hero-visual reveal" aria-label="Profile image placeholder">
      <div className="photo-frame"><img src={personalInfo.profile} alt="Portrait of Mahid Wasif" onError={(event) => { event.currentTarget.style.display = 'none' }} /><div className="photo-placeholder"><span>MW</span><small>PROFILE PHOTO</small><code>public/profile.jpg</code></div><span className="frame-index">01 — 04</span></div>
      <div className="hero-caption"><span>BUILDING AT THE INTERSECTION OF</span><strong>AI <i>×</i> SOFTWARE</strong></div>
    </div>
    <div className="hero-bottom"><span>BASED IN PAKISTAN</span><a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
  </section>
}
