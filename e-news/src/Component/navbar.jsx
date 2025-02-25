import { useState } from 'react';
import '../styles/navbar.css'; // Ensure the path is correct

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For hamburger menu toggle

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMenuOpen) setIsMenuOpen(false); // Close menu when link is clicked
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/assets/A3.png" alt="Logo" className="logo" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <a
            href="#home"
            className={activeLink === 'Home' ? 'active-link' : 'nav-link'}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#news"
            className={activeLink === 'News' ? 'active-link' : 'nav-link'}
            onClick={() => handleLinkClick('News')}
          >
            News
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            className={activeLink === 'About' ? 'active-link' : 'nav-link'}
            onClick={() => handleLinkClick('About')}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            className={activeLink === 'Contact' ? 'active-link' : 'nav-link'}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        {isSearchOpen ? (
          <input type="text" placeholder="Search..." className="search-input" />
        ) : (
          <span className="search-icon" onClick={toggleSearch}>🔍</span>
        )}
        <div className="profile-icon" onClick={toggleDropdown}>
          <span className="profile-symbol">👤</span>
          {isDropdownOpen && (
            <div className="dropdown-menu show">
              <a href="#login" className="dropdown-item">Login</a>
              <a href="#register" className="dropdown-item">Register</a>
              <a href="#profile" className="dropdown-item">Profile</a>
              <a href="#admin" className="dropdown-item">Admin</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
