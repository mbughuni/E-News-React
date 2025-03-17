import { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react"; // Import profile icon
import "../styles/navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/assets/A3.png" alt="Logo" className="logo" />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <Link to="/" className={activeLink === "Home" ? "active-link" : "nav-link"} onClick={() => handleLinkClick("Home")}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news" className={activeLink === "News" ? "active-link" : "nav-link"} onClick={() => handleLinkClick("News")}>
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={activeLink === "About" ? "active-link" : "nav-link"} onClick={() => handleLinkClick("About")}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={activeLink === "Contact" ? "active-link" : "nav-link"} onClick={() => handleLinkClick("Contact")}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Profile Icon with Dropdown */}
      <div className="profile-container" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <User className="profile-icon" size={28} /> {/* Profile icon */}
        <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
          <Link to="/profile" className="dropdown-item">Profile</Link>
          <Link to="/admin" className="dropdown-item">Admin</Link>
          <Link to="/login" className="dropdown-item">Login</Link>
          <Link to="/register" className="dropdown-item">Register</Link>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
