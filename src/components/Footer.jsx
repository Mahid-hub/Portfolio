import { personalInfo } from '../data/personal.js'

export default function Footer() {
  return <footer className="site-footer"><div className="page-wrap footer-inner"><a className="brand footer-brand" href="#home">MW<span className="brand-dot">.</span></a><div className="footer-person"><strong>{personalInfo.name}</strong><span>{personalInfo.title}</span></div><div className="footer-links"><a href={personalInfo.github}>GitHub ↗</a><a href={personalInfo.linkedin}>LinkedIn ↗</a><a href={personalInfo.email}>Email ↗</a></div><p className="copyright">© 2026 Mahid Wasif. All rights reserved.</p></div></footer>
}
