import "../index.css";
import {
  FaUsers,
  FaPenNib,
  FaChurch,
  FaMusic,
  FaCross,
  FaSchool,
  FaPray,
  FaUserFriends,
} from "react-icons/fa";

const audience = [
  {
    icon: <FaUsers />,
    title: "Choirs",
  },
  {
    icon: <FaPenNib />,
    title: "Composers",
  },
  {
    icon: <FaChurch />,
    title: "Organists",
  },
  {
    icon: <FaMusic />,
    title: "Choir Directors",
  },
  {
    icon: <FaPray />,
    title: "Seminarians",
  },
  {
    icon: <FaCross />,
    title: "Priests",
  },
  {
    icon: <FaSchool />,
    title: "Catholic Schools",
  },
  {
    icon: <FaUserFriends />,
    title: "Catholic Families",
  },
];

export default function Audience() {
  return (
    <section className="audience">
      <h2>Who it's for</h2>

      <div className="audience-grid">
        {audience.map((item, index) => (
          <div className="audience-card" key={index}>
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}