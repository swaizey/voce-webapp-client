import "../index.css";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-logo">
            VOC<span>✝</span>E
          </h2>

          <p className="footer-tagline">The Home of Catholic Music</p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <ul>
            <li>
              <a
                href="#home"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("home");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("home");
                }}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("home");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>

          <ul>
            <li>
              <a
                href="#terms"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("terms");
                }}
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("privacy");
                }}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#copyright"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("copyright");
                }}
              >
                Copyright Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Stay Updated</h4>

          <p>Join our newsletter and receive the latest updates.</p>

          <div className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button type="button">→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2026 Voce. All rights reserved.</div>
    </footer>
  );
}