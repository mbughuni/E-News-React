import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./teamcard.css"; // Import CSS for styling

const teamMembers = [
  {
    id: 1,
    name: "asraf",
    role: "Project Manager",
    image: "https://images.pexels.com/photos/4584170/pexels-photo-4584170.jpeg?auto=compress&cs=tinysrgb&w=600",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "mussa",
    role: "Lead Developer",
    image: "https://images.pexels.com/photos/8727381/pexels-photo-8727381.jpeg?auto=compress&cs=tinysrgb&w=600",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Baljit",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/8172822/pexels-photo-8172822.jpeg?auto=compress&cs=tinysrgb&w=600",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

const TeamCard = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Meet Our <span className="highlight">Team</span></h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="team-social-icons">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="team-icon" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="team-icon" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="team-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
