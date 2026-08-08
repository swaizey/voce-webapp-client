import React from "react";
import "../index.css";

export default function LegalPage({ title, subtitle, children, onNavigate }) {
  return (
    <section className="legal-page">
      <div className="container legal-page-shell">
        <a
          href="#"
          className="legal-back-link"
          onClick={(event) => {
            event.preventDefault();
            onNavigate?.("home");
          }}
        >
          ← Back to home
        </a>

        <div className="legal-card">
          <p className="legal-eyebrow">Vocé</p>
          <h1>{title}</h1>
          <p className="legal-intro">{subtitle}</p>
          <div className="legal-content">{children}</div>
        </div>
      </div>
    </section>
  );
}
