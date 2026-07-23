import "../index.css";

export default function Benefits() {
  return (
    <section className="benefits">

      <div className="benefits-content">
        <div className="benefits-left">
          <div className="icon-circle">
            ✉
          </div>
        </div>

        <div className="benefits-center">
          <h2>Be part of something beautiful.</h2>

          <p>
            Join our waitlist or become a contributor today.
          </p>

          <div className="benefits-buttons">
            <button className="primary">
              Join Waitlist →
            </button>

            <button className="secondary">
              Become a Contributor
            </button>
          </div>
        </div>

        <div className="benefits-right">
          <div className="church">
            ⛪
          </div>
        </div>
      </div>

    </section>
  );
}