import "../index.css";
import { FaPlay } from "react-icons/fa";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-video">
          <div className="video-overlay">
            <button className="play-btn">
              <FaPlay />
            </button>
          </div>
        </div>

        <div className="about-content">
          <h2>What is Voce?</h2>
          <div className="underline"></div>

          <p>
            Voce is a music streaming platform created exclusively for Catholic
            music. Our mission is to make Catholic music easily accessible while
            giving composers and choirs a platform to share their work with the
            world.
          </p>

        </div>

      </div>
    </section>
  );
}