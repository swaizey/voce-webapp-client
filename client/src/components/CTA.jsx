import "../index.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-overlay">
        <div className="cta-content">
          <div className="cta-icon">
            <div className="mail-circle">
              ✉
            </div>
          </div>

          <div className="cta-text">
            <h2>Be part of something beautiful.</h2>
            <p>
              Join our waitlist or become a contributor today.
            </p>

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
    </section>
  );
};

export default CTA;