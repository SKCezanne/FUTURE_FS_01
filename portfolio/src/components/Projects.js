function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <a
            href="https://github.com/yourusername/password-strength-checker"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            title="Open in new tab"
          >
            ↗
          </a>

          <h3>Password Strength Checker</h3>
          <p>
            A web-based tool that evaluates password strength using
            security rules and entropy concepts.
          </p>
        </div>

        <div className="project-card">
          <a
            href="https://github.com/yourusername/network-scanner"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            title="Open in new tab"
          >
            ↗
          </a>

          <h3>Network Scanner</h3>
          <p>
            Python-based tool that scans open ports and services
            on a given network.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
