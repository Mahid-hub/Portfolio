export default function ProjectCard({ project, index }) {
  return <article className="project-card reveal">
    <div className="project-preview">
      {project.image ? <img className="project-image" src={project.image} alt={`${project.title} project preview`} loading="lazy" /> : <div className="project-image-placeholder"><span>SELECTED WORK&nbsp; / &nbsp;0{index + 1}</span><strong>Project preview</strong><i aria-hidden="true" /><code>Project image pending</code></div>}
    </div>
    <div className="project-info"><div className="project-title-row"><h3>{project.title}</h3><span className="project-count">0{index + 1}</span></div><p>{project.description}</p><div className="project-tags">{project.technologies.map((tech) => <span className={['AI/ML', 'RAG', 'LangChain', 'LangGraph', 'MCP'].includes(tech) ? 'technology-ai' : undefined} key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.github} aria-label={`GitHub repository for ${project.title}`}>GitHub <span>↗</span></a><a href={project.live} aria-label={`Live demo of ${project.title}`}>Live demo <span>↗</span></a></div></div>
  </article>
}
