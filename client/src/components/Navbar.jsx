import { useState } from "react";
import Logo from "./Logo";
import "../index.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <Logo />

          <div className="desktop-nav">
            <ul className="nav-links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#features" onClick={closeMenu}>Features</a></li>
              <li><a href="#contributors" onClick={closeMenu}>Contributors</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>

            <div className="nav-buttons">
              <button className="outline-btn" onClick={closeMenu}>
                Become a Contributor
              </button>

              <button className="primary-btn" onClick={closeMenu}>
                Join Waitlist
              </button>
            </div>
          </div>

          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`mobile-nav-panel ${isMenuOpen ? "open" : ""}`}>
        <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close navigation menu">
          ×
        </button>

        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#contributors" onClick={closeMenu}>Contributors</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="nav-buttons mobile-nav-buttons">
          <button className="outline-btn" onClick={closeMenu}>
            Become a Contributor
          </button>

          <button className="primary-btn" onClick={closeMenu}>
            Join Waitlist
          </button>
        </div>
      </aside>
    </>
  );
}