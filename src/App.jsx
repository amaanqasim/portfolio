function App() {
  return (
    <main>
      <nav>
        <div className="logo">AQ</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">SOFTWARE DEVELOPER</p>

          <h1>
            Hi, I'm
            <br />
            <span>Amaan Qasim.</span>
          </h1>

          <p className="hero-description">
            Computer Science student building practical software and
            exploring the intersection of clean design and technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work →
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-label">CURRENTLY</div>
          <h2>Software Developer Intern</h2>
          <p>CogniLaarn · 2026 — Present</p>

          <div className="card-line" />

          <div className="card-label">FOCUS</div>
          <p>Web Development · Problem Solving · Building Products</p>
        </div>
      </section>

      <section id="about" className="section about-section">
  <div className="section-heading">
    <p className="eyebrow">ABOUT ME</p>

    <h2>
      I like turning
      <br />
      <span>ideas into software.</span>
    </h2>
  </div>

  <div className="about-content">
    <p>
      I'm Amaan Qasim, a 3rd-year Computer Science Engineering student and
      Software Developer Intern at CogniLaarn.
    </p>

    <p>
      I enjoy building practical applications, solving problems, and learning
      how different parts of a product come together — from the interface to
      the backend.
    </p>

    <div className="about-details">
      <div>
        <span>01</span>
        <strong>Build</strong>
        <p>Turning ideas into useful applications.</p>
      </div>

      <div>
        <span>02</span>
        <strong>Learn</strong>
        <p>Constantly improving my technical skills.</p>
      </div>

      <div>
        <span>03</span>
        <strong>Improve</strong>
        <p>Finding better ways to solve problems.</p>
      </div>
    </div>
  </div>
</section>

      <section id="skills" className="section">
        <p className="eyebrow">SKILLS</p>
        <h2>What I work with.</h2>
      </section>

      <section id="experience" className="section">
        <p className="eyebrow">EXPERIENCE</p>
        <h2>Where I've worked.</h2>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">PROJECTS</p>
        <h2>Things I've built.</h2>
      </section>

      <section id="contact" className="section">
        <p className="eyebrow">CONTACT</p>
        <h2>Let's build something.</h2>
      </section>
    </main>
  );
}

export default App;