import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <div className="logo">
          <h2>
            VOC<span>✝</span>E
          </h2>
          <small>The Home of Catholic Music</small>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contributors">Contributors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-buttons">
          <button className="outline-btn">
            Become a Contributor
          </button>

          <button className="primary-btn">
            Join Waitlist
          </button>
        </div>

      </div>
    </nav>
  );
}