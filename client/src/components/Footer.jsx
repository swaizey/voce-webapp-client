import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <h2 className="footer-logo">
            VOC<span>✝</span>E
          </h2>

          <p className="footer-tagline">
            The Home of Catholic Music
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contributors">Contributors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>

          <ul>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Copyright Policy</a></li>
          </ul>
        </div>

        <div>
          <h4>Stay Updated</h4>

          <p>
            Join our newsletter and receive the latest updates.
          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Your email address"
            />

            <button>→</button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Voce. All rights reserved.
      </div>

    </footer>
  );
}