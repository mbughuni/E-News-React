import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, Menu } from "lucide-react";
import "./adminnavbar.css";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isAdmin = location.pathname.startsWith("/admin");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-left">
        <img src="/assets/A3.png" alt="Logo" className="logo" />
      </div>

      {isAdmin && (
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/news">News</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/messages">Messages</Link></li>
        </ul>
      )}

      <div className="navbar-right">
        {user?.role === "admin" && (
          <div className="profile-section" ref={dropdownRef}>
            <User
              className="profile-icon"
              size={28}
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
            />
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <Link to="/" className="dropdown-item">User Site</Link>
              <button onClick={handleLogout} className="dropdown-item">Logout</button>
            </div>
          </div>
        )}

        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
