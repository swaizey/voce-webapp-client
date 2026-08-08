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
    title: "Students of Sacred Music",
  },
  {
    icon: <FaCross />,
    title: "Priests",
  },
  {
    icon: <FaSchool />,
    title: "Sacred Schools",
  },
  {
    icon: <FaUserFriends />,
    title: "Praying Families",
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