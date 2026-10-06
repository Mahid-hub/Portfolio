import skills from '../data/skills.js'

export default function Skills() {
  return <section id="skills" className="section section-alt"><div className="page-wrap">
    <div className="section-heading reveal"><p className="eyebrow">02 / TOOLKIT</p><h2>Skills &amp; <span>technologies.</span></h2><p className="section-intro">Tools I use to move from a problem to a working product.</p></div>
    <div className="skills-grid">{skills.map(({ category, items }, index) => <div className="skill-group reveal" key={category}><div className="skill-heading"><span className="mono-index">0{index + 1}</span><h3>{category}</h3></div><div className="skill-list">{items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}</div></div>)}</div>
  </div></section>
}
