import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".profile-section")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/assets/A3.png" alt="Logo" className="logo" />
      </div>

      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        {['Home', 'News', 'About', 'Contact'].map((link) => (
          <li key={link} className="nav-item">
            <Link 
              to={`/${link}`} 
              className={activeLink === link ? "active-link" : "nav-link"} 
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Profile Section */}
      <div className="profile-section">
        <User 
          className="profile-icon" 
          size={28} 
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }} 
        />
        <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
          <Link to="/profile" className="dropdown-item">Profile</Link>
          <Link to="/admin" className="dropdown-item">Admin</Link>
          <Link to="/login" className="dropdown-item">Login</Link>
          <Link to="/register" className="dropdown-item">Register</Link>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div 
        className="hamburger-menu" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
