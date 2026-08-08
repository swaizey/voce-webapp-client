


import { useEffect, useState } from "react";
import { FaAndroid, FaApple } from "react-icons/fa6";
import phone from "../assets/phone.png";
import heroBg from "../assets/herobg.png";
import "../index.css";

export default function Hero({ onNavigate }) {
  const [phoneOffset, setPhoneOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = Math.min(window.scrollY * 0.12, 60);
      setPhoneOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      <div className="hero-overlay">

        <div className="hero-left">

          <h1>VOCE</h1>

          <h2>
            The home of
            <br />
            Sacred Music.
          </h2>

          <p>
            Discover, stream, and share Sacred Hymns,
            Choral Works, Liturgical Music, and Original
            Compositions from Choirs and Composers
            across Nigeria and beyond.
          </p>

          <div className="hero-buttons">
            <a href="#waitlist" className="primary-btn">
              Join Waitlist
            </a>

            <a href="#contributors" className="secondary-btn">
              Become a Contributor
            </a>

            <button type="button" className="secondary-btn" onClick={() => onNavigate("privacy")}>Privacy Policy</button>
          </div>

          <div className="platforms">

            <span>Coming soon on</span>

            <div className="platform-icons">

              <div className="platform-badge">
                <span className="platform-icon"><FaAndroid /></span>
                <span className="platform-label">Android</span>
              </div>

              <div className="platform-badge">
                <span className="platform-icon"><FaApple /></span>
                <span className="platform-label">iOS</span>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={phone}
            alt="Voce App"
            style={{ transform: `translateY(${phoneOffset}px)` }}
          />

        </div>

      </div>
    </section>
  );
}