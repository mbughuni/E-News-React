import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, Menu } from "lucide-react";
import "./adminnavbar.css";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Check if current page is admin panel
  const isAdmin = location.pathname.startsWith("/admin");

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
    <nav className="admin-navbar">
      <div className="navbar-left">
        <img src="/assets/A3.png" alt="Logo" className="logo" />
      </div>

      {/* Navigation Links (Only for Admin) */}
      {isAdmin && (
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/news">News</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/messages">Messages</Link></li>
        </ul>
      )}

      {/* Right Section (Profile) */}
      <div className="navbar-right">
        {isAdmin && (
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
              <Link to="/admin/profile" className="dropdown-item">Profile</Link>
              <Link to="/admin/settings" className="dropdown-item">Settings</Link>
              <Link to="/logout" className="dropdown-item">user site</Link>
            </div>
          </div>
        )}

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
