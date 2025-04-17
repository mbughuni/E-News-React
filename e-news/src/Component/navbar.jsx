import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/assets/A3.png" alt="Logo" className="logo" />
      </div>

      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        {["Home", "News", "About", "Contact"].map((link) => (
          <li key={link} className="nav-item">
            <Link
              to={`/${link}`}
              className={activeLink === link ? "active-link" : "nav-link"}
              onClick={() => setActiveLink(link)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Profile Section */}
      <div className="profile-section" ref={dropdownRef}>
        {user ? (
          <img
            src={`http://localhost:5000/uploads/${user.profile_picture}`}
            alt="Profile"
            className="user-avatar clickable-avatar"
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
          />
        ) : (
          <User
            className="profile-icon"
            size={28}
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
          />
        )}

        <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
          {user ? (
            <>
              <Link to="/profile" className="dropdown-item">Profile</Link>
              {user.role === "admin" && (
                <Link to="/admin" className="dropdown-item">Admin</Link>
              )}
              <button onClick={handleLogout} className="dropdown-item">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="dropdown-item">Login</Link>
              <Link to="/register" className="dropdown-item">Register</Link>
            </>
          )}
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
