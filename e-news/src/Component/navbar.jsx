import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/assets/A3.png" alt="Logo" className="logo" />
      </div>

      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

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
    </nav>
  );
};

export default Navbar;
