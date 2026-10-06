import { useState } from 'react'
import { personalInfo } from '../data/personal.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
  }
  return <section id="contact" className="section page-wrap contact-section"><div className="contact-grid"><div className="contact-copy reveal"><p className="eyebrow">07 / CONTACT</p><h2>Let’s build<br /><span>something.</span></h2><p>Have an idea, project, or opportunity? Let’s talk.</p><div className="contact-details"><a href={personalInfo.email}><span>EMAIL</span>{personalInfo.emailAddress}<span aria-hidden="true">↗</span></a><a href={personalInfo.github}><span>GITHUB</span>View profile<span aria-hidden="true">↗</span></a><a href={personalInfo.linkedin}><span>LINKEDIN</span>Connect<span aria-hidden="true">↗</span></a></div></div><form className="contact-form reveal" onSubmit={handleSubmit}><label htmlFor="name">Name<input id="name" name="name" autoComplete="name" placeholder="Your name" required /></label><label htmlFor="email">Email<input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label htmlFor="message">Message<textarea id="message" name="message" rows="4" placeholder="What would you like to talk about?" required /></label><button type="submit" className="button button-primary">Prepare message <span aria-hidden="true">↗</span></button><p className="form-note" role="status">{submitted ? 'The form is ready, but no email service is connected yet. Please email me directly.' : 'This form is a UI preview. No message is sent yet.'}</p></form></div></section>
}
