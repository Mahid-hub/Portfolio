import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return <section id="projects" className="section page-wrap"><div className="section-heading reveal"><p className="eyebrow">03 / SELECTED WORK</p><h2>Featured <span>projects.</span></h2><p className="section-intro">A selection of work across AI engineering and application development.</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div></section>
}
