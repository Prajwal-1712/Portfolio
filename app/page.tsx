'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowUp, ArrowUpRight, Check, Code2, Database, Download, GitBranch, BriefcaseBusiness,
  Mail, Menu, Network, Send, Server, Terminal, X, Zap,
} from 'lucide-react'

const projects = [
{
  name: 'G-Crown',
  type: 'Jewellery E-commerce Platform',
  description: 'A premium jewellery e-commerce platform showcasing elegant collections of gold, silver, diamond and fashion jewellery. Designed with a luxurious black-and-gold aesthetic, modern product displays, intuitive navigation and a seamless shopping experience across all devices.',
  image: '/G-Crown.png',
  live: 'https://g-crown-vert.vercel.app/',
  github: '',
  tags: ['Node.js', 'React.js', 'MongoDB', 'E-commerce', 'Jewellery'],
  accent: 'from-yellow-500/20 to-amber-400/5'
},
{
  name: 'Sawali Traders',
  type: 'Billing Management System',
  description:
    'A complete billing management system for Sawali Traders to manage sales, customers, dairy and normal customer records, product pricing, credit (Udhari) balances and sales history through a simple business dashboard.',
  image: '/project-sawali.png',
  tags: [
    'React',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Billing Management',
    'CRM'
  ],
  live: 'https://sawali-traders.vercel.app/',
  github: '',
  accent: 'from-violet-500/20 to-fuchsia-400/5',
},  { name: 'Shivtej', type: 'Billing management', description: 'A React Native Expo application for Ganpati Mandal management, accounting and member operations.', image: '/project-shivtej.png', tags: ['React Native', 'Expo', 'Firebase'], accent: 'from-cyan-500/20 to-blue-400/5' },
]

const skillGroups = [
  { label: 'Frontend', icon: Code2, skills: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { label: 'Backend', icon: Server, skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Socket.io'] },
  { label: 'Database', icon: Database, skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL'] },
  { label: 'Cloud & DevOps', icon: Network, skills: ['AWS', 'Git', 'GitHub'] },
  { label: 'Languages', icon: Terminal, skills: ['C', 'C++', 'Python', 'JavaScript'] },
  { label: 'Testing & Tools', icon: Check, skills: [ 'Postman', 'Vite', 'REST Client', 'ESLint'] },
]

const navItems = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  function copyEmail() {
    navigator.clipboard?.writeText('hello@prajwalpawar.dev')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="portfolio-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Prajwal Pawar home"><span>PP</span><b>Prajwal Pawar</b></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
          <p className="hero-kicker">FULL STACK DEVELOPER / BACKEND ENGINEER</p>
          <h1>Building <em>scalable</em><br />digital experiences.</h1>
          <p className="hero-description">I build scalable web and mobile applications, powerful backend systems and seamless digital experiences using modern technologies.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowUpRight aria-hidden="true" /></a><a className="button button-ghost" href="/Prajwal-Pawar-Resume.pdf" download="Prajwal-Pawar-Resume.pdf"><Download aria-hidden="true" /> Download resume</a></div>
          <div className="social-row"><span>Find me online</span><a href="#contact" aria-label="GitHub"><GitBranch /></a><a href="#contact" aria-label="LinkedIn"><BriefcaseBusiness /></a><a href="#contact" aria-label="Email"><Mail /></a></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-large" /><div className="visual-orbit orbit-small" />
          <div className="profile-frame"><Image src="/profile-prajwal (2).png" alt="Portrait of Prajwal Pawar" width={520} height={520} priority /></div>
          <div className="float-card float-card-top"><span className="mini-icon"><Zap /></span><span><b>8+</b><small>technologies daily</small></span></div>
          <div className="float-card float-card-bottom"><span className="code-mark">&lt;/&gt;</span><span><b>clean code</b><small>built to scale</small></span></div>
        </div>
      </section>

      <div className="marquee-band" aria-hidden="true"><div><span>REACT</span><i /> <span>NODE.JS</span><i /> <span>POSTGRESQL</span><i /> <span>AWS</span><i /> <span>REACT NATIVE</span><i /> <span>SOCKET.IO</span><i /> <span>REACT</span><i /> <span>NODE.JS</span><i /></div></div>

      <section className="section-wrap about-section" id="about">
        <div className="section-label">01 <span>About me</span></div>
        <div className="about-grid"><div><h2>Turning complex<br /><span>problems into</span><br />simple systems.</h2></div><div className="about-copy"><p className="lead">I&apos;m Prajwal, Computer Science graduate from Sanjay Ghodawat University who enjoys working where product thinking meets engineering craft.</p><p>From robust REST APIs to thoughtful mobile interfaces, I care about building software that is dependable behind the scenes and effortless to use. I&apos;m always looking for the next interesting problem to solve.</p><div className="about-meta"><div><b>2026</b><small>Graduating</small></div><div><b>Kolhapur</b><small>India</small></div><div><b>Full stack</b><small>By practice</small></div></div></div></div>
      </section>

      <section className="section-wrap stats-section" aria-label="Portfolio statistics"><div className="stats-grid"><div><strong>03</strong><span>Projects completed</span></div><div><strong>06</strong><span>Skill areas</span></div><div><strong>03</strong><span>Professional roles</span></div><div><strong>03</strong><span>Recognitions listed</span></div></div></section>

      <section className="section-wrap skills-section" id="skills">
        <div className="section-label">02 <span>Toolkit</span></div><div className="section-heading"><div><h2>Tools for the<br /><span>right job.</span></h2></div><p>A practical, evolving toolkit shaped by building real products from the database up.</p></div>
        <div className="skills-grid">{skillGroups.map(({ label, icon: Icon, skills }, index) => <article className={`skill-card skill-${index + 1}`} key={label}><div className="skill-card-top"><span className="skill-icon"><Icon /></span><span>0{index + 1}</span></div><h3>{label}</h3><div className="skill-pills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section className="section-wrap projects-section" id="projects">
        <div className="section-label">03 <span>Selected work</span></div><div className="section-heading projects-heading"><div><h2>Built with intent.<br /><span>Made to matter.</span></h2></div><a className="text-link" href="#contact">Have a project? <ArrowUpRight /></a></div>
        <div className="projects-list">{projects.map((project, index) => <article className="project-card" key={project.name}><div className={`project-image bg-gradient-to-br ${project.accent}`}><Image src={project.image} alt={`${project.name} project interface`} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="project-content"><div className="project-number">0{index + 1} / {project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-footer"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links"><a href="#contact" aria-label={`${project.name} GitHub placeholder`}><GitBranch /></a><a href={project.live} aria-label={`${project.name} live demo placeholder`}><ArrowUpRight /></a></div></div></div></article>)}</div>
      </section>

      <section className="section-wrap experience-section" id="experience">
        <div className="section-label">04 <span>Experience</span></div><div className="section-heading"><div><h2>Learning by<br /><span>doing.</span></h2></div><p>Roles and environments that have helped me grow as an engineer. Dates and details can be updated as the journey continues.</p></div>
        <div className="timeline">{['Athenura', 'Graphura India Pvt. Ltd.', 'Qodequay Technologies'].map((company, index) => <article className="timeline-item" key={company}><div className="timeline-marker">0{index + 1}</div><div className="timeline-body"><div className="timeline-meta"><span>{index === 0 ? 'Backend Department' : index === 1 ? 'Backend Developer Intern' : 'IoT Intern'}</span><small>Dates to update</small></div><h3>{company}</h3><p>{index === 0 ? 'Working on backend systems and the engineering foundations that power reliable product experiences.' : index === 1 ? 'Contributing to backend development and learning the craft of building production-ready applications.' : 'Exploring connected systems, device data and the relationship between hardware and software.'}</p></div></article>)}</div>
      </section>
{/* 
      <section className="section-wrap resume-section" id="resume">
        <div className="resume-sheet">
          <div className="resume-header">
            <div className="section-label">05 <span>Resume</span></div>
            <div className="resume-actions">
              <a className="button button-primary" href="/Prajwal-Pawar-Resume.pdf" download="Prajwal-Pawar-Resume.pdf"><Download aria-hidden="true" /> Download PDF</a>
              <a className="button button-ghost" href="/Prajwal-Pawar-Resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>

          <div className="resume-body">
            <aside className="resume-aside">
              <h2>Prajwal Pawar</h2>
              <p className="resume-role">Full Stack Developer / Backend Engineer</p>

              <div className="resume-block">
                <h3>Contact</h3>
                <ul>
                  <li>hello@prajwalpawar.dev</li>
                  <li>Kolhapur, India</li>
                  <li>Available for remote work</li>
                </ul>
              </div>

              <div className="resume-block">
                <h3>Skills</h3>
                <ul>
                  <li>React.js / Next.js</li>
                  <li>Node.js / Express.js</li>
                  <li>MongoDB / PostgreSQL</li>
                  <li>AWS / Docker / Git</li>
                </ul>
              </div>
            </aside>

            <div className="resume-main">
              <div className="resume-block">
                <h3>Profile</h3>
                <p>I am a Computer Science graduate focused on building scalable products, clean backend systems, and user-friendly digital experiences. I enjoy solving practical engineering problems with reliable architecture and thoughtful UI.</p>
              </div>

              <div className="resume-block">
                <h3>Experience</h3>
                <div className="resume-item">
                  <div className="resume-date">2025 — Present</div>
                  <div>
                    <h4>Backend Developer</h4>
                    <p>Working on production-ready backend systems, API architecture, and scalable product features.</p>
                  </div>
                </div>
                <div className="resume-item">
                  <div className="resume-date">2024 — 2025</div>
                  <div>
                    <h4>Backend Developer Intern</h4>
                    <p>Contributed to backend development, project workflows, and learning practical engineering standards.</p>
                  </div>
                </div>
              </div>

              <div className="resume-block">
                <h3>Education</h3>
                <div className="resume-item">
                  <div className="resume-date">2022 — 2026</div>
                  <div>
                    <h4>B.Tech in Computer Science</h4>
                    <p>Sanjay Ghodawat University, Kolhapur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-wrap education-section"><div className="education-card"><div><div className="section-label">05 <span>Education</span></div><h2>Grounded in<br /><span>computer science.</span></h2></div><div className="education-details"><p>Bachelor of Technology<br /><strong>Computer Science</strong></p><p>Sanjay Ghodawat University<br /><strong>Kolhapur, India</strong></p><span className="year-badge">Completed · 2026</span></div></div></section>

      <section className="section-wrap recognition-section"><div className="section-label">06 <span>Recognition</span></div><div className="recognition-grid"><h2>Always<br /><span>curious.</span></h2><div className="recognition-list">{['Full Stack Development — Skillected Institute', 'Generative AI Certification', ].map((item, i) => <div className="recognition-item" key={item}><span>0{i + 1}</span><p>{item}</p><ArrowUpRight /></div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-label">07 <span>Get in touch</span></div><div className="contact-grid"><div><h2>Have a project<br />in mind? <span>Let&apos;s<br />build it.</span></h2><p>Whether you have a product idea, a backend challenge, or just want to say hello — my inbox is open.</p><button className="email-copy" onClick={copyEmail}>{copied ? <Check /> : <Mail />} {copied ? 'Email ' : 'prajwalpawar3p@gmail.com'}</button></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const subject = encodeURIComponent(String(form.get('subject') || 'Portfolio enquiry')); const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`); window.location.href = `mailto:prajwalpawar3p@gmail.com?subject=${subject}&body=${body}`; setSent(true) }}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Subject<input required name="subject" placeholder="Project subject" /></label><label>Message<textarea required name="message" placeholder="Tell me a little about your project" rows={4} /></label><button className="button button-primary" type="submit">{sent ? 'Opening email client' : 'Send message'} <Send aria-hidden="true" /></button></form></div></div></section>

      {/* <footer className="site-footer section-wrap"><div className="footer-grid"><div className="footer-brand"><a href="#top" className="brand"><span>PP</span><b>Prajwal Pawar</b></a><p>Building scalable applications and meaningful digital experiences.</p><span className="footer-status"><span className="status-dot" /> Open to opportunities</span></div><div><h3>Explore</h3><nav className="footer-links" aria-label="Footer navigation">{[['Home', '#top'], ...navItems].map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav></div><div><h3>Connect</h3><nav className="footer-links" aria-label="Social links"><a href="#contact">LinkedIn</a><a href="#contact">WhatsApp</a><a href="#contact">GitHub</a><a href="#contact">Instagram</a><a href="mailto:hello@prajwalpawar.dev">Email</a></nav></div><div><h3>Based in</h3><p className="footer-copy">Sangli, Maharashtra, India<br />Available for remote opportunities<br />Backend / Full stack development</p></div></div><div className="footer-bottom"><span>© 2026 Prajwal Pawar. All rights reserved.</span><span>Built with React.js and Tailwind CSS.</span><a href="#top" className="back-top">Back to top <ArrowUp /></a></div></footer> */}
    
    
<footer className="site-footer section-wrap">
  <div className="footer-grid">

    {/* Brand */}
    <div className="footer-brand">
      <a href="#top" className="brand">
        <span>PP</span>
        <b>Prajwal Pawar</b>
      </a>

      <p>
        Building scalable applications and meaningful digital experiences.
      </p>

      <span className="footer-status">
        <span className="status-dot" />
        Open to opportunities
      </span>
    </div>

    {/* Explore */}
    <div className="footer-column">
      <h3>Explore</h3>
      <nav className="footer-links" aria-label="Footer navigation">
        {[['Home', '#top'], ...navItems].map(([label, href]) => (
          <a href={href} key={label}>{label}</a>
        ))}
      </nav>
    </div>

    {/* Connect */}
    <div className="footer-column">
      <h3>Connect</h3>
      <nav className="footer-links" aria-label="Social links">
        <a href="https://www.linkedin.com/in/prajwal-pawar-259412335" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="https://github.com/Prajwal-1712?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.instagram.com/prajwalpawar3p" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
    </div>

    {/* Location */}
    <div className="footer-column">
      <h3>Based in</h3>
      <p className="footer-copy">
        Sangli, Maharashtra, India<br />
        Available for opportunities<br />
        Backend / Full stack development
      </p>
    </div>

  </div>

  {/* Copyright - Always Last */}
  <div className="footer-copyright">
    © 2026 Prajwal Pawar. All rights reserved.
  </div>
</footer>
</main>
  )
  
}



