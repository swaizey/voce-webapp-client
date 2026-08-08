import { useState } from "react";
import "../index.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const CTA = () => {
  const [waitlistForm, setWaitlistForm] = useState({ name: "", email: "" });
  const [contributorForm, setContributorForm] = useState({ name: "", email: "", role: "", message: "" });
  const [waitlistStatus, setWaitlistStatus] = useState("");
  const [contributorStatus, setContributorStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setWaitlistStatus("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(waitlistForm),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to join the waitlist right now.");
      }

      setWaitlistStatus("You’re on the list. We’ll be in touch soon.");
      setWaitlistForm({ name: "", email: "" });
    } catch (error) {
      setWaitlistStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContributorSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setContributorStatus("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contributors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contributorForm),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to register as a contributor right now.");
      }

      setContributorStatus("Thanks for stepping forward. We’ll reach out shortly.");
      setContributorForm({ name: "", email: "", role: "", message: "" });
    } catch (error) {
      setContributorStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta">
      <div className="cta-overlay">
        <div className="cta-content">
          <div className="cta-icon">
            <div className="mail-circle">✉</div>
          </div>

          <div className="cta-text">
            <h2>Be part of something beautiful.</h2>
            <p>Join our waitlist or become a contributor today.</p>

            <div className="cta-buttons">
              <a href="#waitlist" className="btn btn-primary">
                Join Waitlist
                <span>↗</span>
              </a>

              <a href="#contributors" className="btn btn-outline">
                Become a Contributor
              </a>
            </div>
          </div>

          <div className="cta-illustration">
            <div className="church">
              <div className="cross"></div>
              <div className="roof"></div>
              <div className="building">
                <div className="door"></div>
                <div className="window"></div>
              </div>

              <div className="music-note note1">♪</div>
              <div className="music-note note2">♫</div>
            </div>
          </div>
        </div>
      </div>

      <div className="engagement-grid">
        <div id="waitlist" className="engagement-card">
          <h3>Join the Waitlist</h3>
          <p>Be the first to know when Vocé launches.</p>

          <form onSubmit={handleWaitlistSubmit} className="engagement-form">
            <input
              type="text"
              placeholder="Your name"
              value={waitlistForm.name}
              onChange={(event) => setWaitlistForm({ ...waitlistForm, name: event.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={waitlistForm.email}
              onChange={(event) => setWaitlistForm({ ...waitlistForm, email: event.target.value })}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Join Waitlist"}
            </button>
          </form>

          {waitlistStatus ? <p className="engagement-status">{waitlistStatus}</p> : null}
        </div>

        <div id="contributors" className="engagement-card">
          <h3>Become a Contributor</h3>
          <p>Share your music, choir, or ministry with the Vocé community.</p>

          <form onSubmit={handleContributorSubmit} className="engagement-form">
            <input
              type="text"
              placeholder="Your name"
              value={contributorForm.name}
              onChange={(event) => setContributorForm({ ...contributorForm, name: event.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={contributorForm.email}
              onChange={(event) => setContributorForm({ ...contributorForm, email: event.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Role or ministry"
              value={contributorForm.role}
              onChange={(event) => setContributorForm({ ...contributorForm, role: event.target.value })}
            />
            <textarea
              placeholder="Tell us a bit about your work"
              value={contributorForm.message}
              onChange={(event) => setContributorForm({ ...contributorForm, message: event.target.value })}
              rows="4"
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Become a Contributor"}
            </button>
          </form>

          {contributorStatus ? <p className="engagement-status">{contributorStatus}</p> : null}
        </div>
      </div>
    </section>
  );
};

export default CTA;