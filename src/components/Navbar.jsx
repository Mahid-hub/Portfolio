import { useState } from 'react'
import { personalInfo } from '../data/personal.js'

const links = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Experience', 'experience'], ['Education', 'education'], ['Contact', 'contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <nav className="nav-wrap page-wrap" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Mahid Wasif, home">MW<span className="brand-dot">.</span></a>
      <div id="mobile-navigation" className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <div className="mobile-social"><a href={personalInfo.github} aria-label="GitHub">GitHub ↗</a><a href={personalInfo.linkedin} aria-label="LinkedIn">LinkedIn ↗</a></div>
      </div>
      <div className="nav-actions">
        <a className="nav-social" href={personalInfo.github} aria-label="GitHub profile">GH ↗</a>
        <a className="nav-social" href={personalInfo.linkedin} aria-label="LinkedIn profile">in ↗</a>
        <a className="resume-link" href={personalInfo.resume}>Resume <span aria-hidden="true">↗</span></a>
      </div>
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </nav>
  </header>
}
