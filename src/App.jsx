const skills = {
  'Programming Languages': ['C', 'Java', 'Python'],
  Technologies: ['DBMS', 'Operating Systems', 'Web Development'],
  Tools: ['GitHub', 'VS Code', 'IntelliJ IDEA'],
};

const projects = [
  {
    title: 'CampusLoop',
    highlight: 'Main Highlight',
    description:
      'A campus circular economy platform where students can buy, sell, rent, and request second-hand items inside a trusted ecosystem.',
    stack: ['Flask', 'MongoDB Atlas'],
    features: [
      'User registration and login system',
      'Buyer, seller, and admin roles',
      'Seller verification with admin approval',
      'Trust score and badge system',
      'Product listing, browsing, and search',
      'Buy flow with order creation',
      'Rental and item request system',
      'Real-time buyer-seller chat',
      'Admin dashboard for moderation',
    ],
    github: 'https://github.com/swathy-1327/DERN.git',
  },
  {
    title: 'BidVerse',
    highlight: 'Featured Project',
    description:
      'An online auction platform where users can bid on products in real time through a role-based marketplace experience.',
    stack: ['Java (Swing)', 'Spring Boot'],
    features: [
      'User roles for admin, seller, and bidder',
      'Product listing and bidding system',
      'Real-time bidding process',
      'Seller approval for the highest bidder',
      'QR-based payment simulation',
      'Auction status management',
    ],
  },
];

const certificates = [
  {
    title: 'Java & Spring Boot Backend Development Workshop',
    issuer: 'Certificate of Participation',
    type: 'PDF',
    file: 'Certificate of Participation - Java & Spring Boot Backend Development Workshop.pdf',
  },
  {
    title: 'IEEE MEC Conference',
    issuer: 'IEEE',
    type: 'Image',
    file: 'ieee mec conf.jpeg',
  },
  {
    title: 'JYESTA Internship Certification',
    issuer: 'JYESTA',
    type: 'PDF',
    file: 'JYESTA internship certification.pdf',
  },
  {
    title: 'Petrichor 26 Palakkad',
    issuer: 'Event Certificate',
    type: 'Image',
    file: 'petrichor26 palakad.jpg',
  },
  {
    title: 'TinkerHub Certificate',
    issuer: 'TinkerHub',
    type: 'PDF',
    file: 'tinkerhub.pdf',
  },
];

const contactLinks = [
  {
    label: 'Email',
    value: 'swathyumendran13326@gmail.com',
    href: 'mailto:swathyumendran13326@gmail.com',
  },
  {
    label: 'Phone',
    value: '9633554289',
    href: 'tel:+919633554289',
  },
  {
    label: 'GitHub',
    value: 'github.com/swathy-1327',
    href: 'https://github.com/swathy-1327',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/swathy-umendran-97b124332',
    href: 'https://www.linkedin.com/in/swathy-umendran-97b124332/',
  },
];

function App() {
  return (
    <div className="page-shell">
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />

      <header className="hero section">
        <nav className="topbar">
          <div className="brand">Swathy Umendran</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-card glass-card">
          <div className="hero-copy">
            <span className="eyebrow">BTech Computer Science Student</span>
            <h1>Hi, I&apos;m Swathy Umendran</h1>
            <p className="hero-subtitle">
              Aspiring software developer focused on building practical,
              user-friendly applications that solve real-world problems.
            </p>
            <p className="hero-text">
              I enjoy building real-world applications and solving problems
              through code.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View Projects
              </a>
              <a className="secondary-button" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-badge">Open to Opportunities</div>
            <div className="stat-grid">
              <article>
                <strong>2</strong>
                <span>Featured Projects</span>
              </article>
              <article>
                <strong>3</strong>
                <span>Languages</span>
              </article>
              <article>
                <strong>3</strong>
                <span>Core Tech Areas</span>
              </article>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section-heading">
            <span className="section-tag">About Me</span>
            <h2>Building software with curiosity and purpose.</h2>
          </div>
          <div className="about-grid">
            <article className="content-card">
              <p>
                I am a BTech Computer Science Engineering student passionate
                about building software solutions and exploring web development.
                I enjoy solving problems and creating applications that have
                real-world impact.
              </p>
            </article>
            <article className="content-card">
              <p>
                I am continuously learning and improving my skills in
                programming, backend development, and database management. I am
                particularly interested in developing scalable and user-friendly
                applications.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span className="section-tag">Skills</span>
            <h2>Tools and technologies I&apos;m growing with.</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <article className="content-card skill-card" key={category}>
                <h3>{category}</h3>
                <div className="pill-row">
                  {items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span className="section-tag">Projects</span>
            <h2>Selected work that reflects my approach to product building.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-chip">{project.highlight}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="stack-row">
                  {project.stack.map((tech) => (
                    <span className="stack-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.github ? (
                    <a
                      className="inline-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repository
                    </a>
                  ) : (
                    <span className="inline-note">
                      GitHub link can be added later
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section">
          <div className="section-heading">
            <span className="section-tag">Certificates</span>
            <h2>Learning milestones and experiences that shaped my growth.</h2>
          </div>
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.file}>
                <span className="project-chip">{certificate.type}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <a
                  className="inline-link"
                  href={`/${encodeURI(certificate.file)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-heading">
            <span className="section-tag">Contact</span>
            <h2>Let&apos;s connect and build something meaningful.</h2>
          </div>
          <div className="contact-card">
            {contactLinks.map((item) => (
              <a
                className="contact-item"
                href={item.href}
                key={item.label}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
