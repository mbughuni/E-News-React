import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./adminnavbar.css";

const AdminNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="admin-navbar">
      <div className="navbar-left">
        <img src="/assets/A3.png" alt="Logo" className="logo" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon icon={faBars} className="icon" />
      </div>

      {/* Navigation Links - Visible only on Admin Pages */}
      {location.pathname.startsWith("/admin") && (
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/news">News</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/messages">Messages</Link></li>
        </ul>
      )}

      {/* Right Section - Search & Profile */}
      <div className="navbar-right">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />

        {/* Profile Dropdown */}
        <div className="profile-container" ref={dropdownRef}>
          <FontAwesomeIcon
            icon={faUser}
            className="profile-icon"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <Link to="/admin/profile" className="dropdown-item">Profile</Link>
            <Link to="/admin/settings" className="dropdown-item">Settings</Link>
            <Link to="/logout" className="dropdown-item">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
