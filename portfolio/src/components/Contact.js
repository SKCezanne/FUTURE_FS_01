function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div
  className="contact-item clickable"
  onClick={() => window.location.href = "mailto:cezanneshaik@gmail.com"}
  title="Send email"
>
  <span>Email</span>
  <span className="contact-link">↗</span>
</div>


      <div className="contact-item">
        <span>GitHub</span>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="Open GitHub in new tab"
        >
          ↗
        </a>
      </div>

      <div className="contact-item">
        <span>LinkedIn</span>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="Open LinkedIn in new tab"
        >
          ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;
