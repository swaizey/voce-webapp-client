


import { FaAndroid, FaApple } from "react-icons/fa6";
import phone from "../assets/phone.png";
import "../index.css";
export default function Hero() {
  return (
    <section className="hero">

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
          />

        </div>

      </div>
    </section>
  );
}