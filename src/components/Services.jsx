const services = [
  ['01', 'AI Engineering', 'Build intelligent applications and AI-powered workflows.'],
  ['02', 'RAG & intelligent applications', 'Connect language models to relevant, useful information.'],
  ['03', 'Full-stack development', 'Build responsive applications with React and backend technologies.'],
  ['04', 'AI agents & automation', 'Design agent workflows that use tools to complete practical tasks.'],
]

export default function Services() {
  return <section className="section section-alt"><div className="page-wrap"><div className="section-heading reveal"><p className="eyebrow">06 / CAPABILITIES</p><h2>What I <span>do.</span></h2></div><div className="services-grid">{services.map(([number, title, description]) => <article className="service-item reveal" key={number}><span className="mono-index">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>
}
