


import { useEffect, useState } from "react";
import { FaAndroid, FaApple } from "react-icons/fa6";
import phone from "../assets/phone.png";
import heroBg from "../assets/herobg.png";
import "../index.css";
export default function Hero() {
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
            Catholic music.
          </h2>

          <p>
            Discover, stream, and share Catholic hymns,
            choral works, liturgical music, and original
            compositions from choirs and composers
            across Nigeria and beyond.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Join Waitlist
            </button>

            <button className="secondary-btn">
              Become a Contributor
            </button>

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