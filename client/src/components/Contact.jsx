import "../index.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact">

      <h2>Get in touch</h2>

      <div className="contact-row">

        <div className="contact-item">
          <FaEnvelope />
          <span>hello@voce.app</span>
        </div>

        <div className="contact-item">
          <FaWhatsapp />
          <span>+234 801 234 5678</span>
        </div>

        <div className="contact-item">
          <FaFacebookF />
          <span>facebook.com/voce.app</span>
        </div>

        <div className="contact-item">
          <FaInstagram />
          <span>@voce.catholicmusic</span>
        </div>

      </div>

      <p className="contact-text">
        We'd love to hear from you!
      </p>

    </section>
  );
}