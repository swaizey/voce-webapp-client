import "../index.css";
import {
  FaMusic,
  FaHeart,
  FaDownload,
  FaUserFriends,
  FaCompactDisc,
  FaSearch,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMusic />,
    title: "Stream",
    text: "High quality streaming of Catholic music.",
  },
  {
    icon: <FaHeart />,
    title: "Like & Save",
    text: "Like your favorite songs and save for later.",
  },
  {
    icon: <FaDownload />,
    title: "Offline Downloads",
    text: "Download songs and listen anytime.",
  },
  {
    icon: <FaUserFriends />,
    title: "Browse by Composer",
    text: "Explore music by your favourite composers and choirs.",
  },
  {
    icon: <FaCompactDisc />,
    title: "Albums & Playlists",
    text: "Enjoy albums and curated playlists.",
  },
  {
    icon: <FaSearch />,
    title: "Powerful Search",
    text: "Find songs, albums, artists and composers instantly.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">

      <h2>Features</h2>

      <div className="title-line"></div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}