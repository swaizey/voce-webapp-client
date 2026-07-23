
import Logo from "./Logo";

import phone from "../assets/phone.png";
import "../index.css";
export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-left">

          <Logo />

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

              <div>
                🤖 Android
              </div>

              <div>
                 iOS
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