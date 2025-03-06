
import "./teamsection.css"; // Import external CSS
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jimmy Doe",
    role: "Farmer",
    image: "./assets/team-1.jpg", // Replace with actual image URL
  },
  {
    name: "Marry Doe",
    role: "Farmer",
    image: "./assets/team-2.jpg", //
  },
  {
    name: "Simon Joe",
    role: "Farmer",
    image: "./assets/team-3.jpg",
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="team-title">
        Our <span className="highlight">Team</span>
      </h2>
      <p className="team-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga
        quas itaque eveniet beatae optio.
      </p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
