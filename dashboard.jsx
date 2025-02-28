import React from 'react';
import './dashboard.css'; // Import the Dashboard-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For icons
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'; // Profile and search icons

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">E-News</div>
          <ul className="nav-links">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/messages">Messages</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
      </nav>

      {/* Dashboard Content */}
      <header className="dashboard-header">
        <h1>DASHBOARD</h1>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Welcome !</h2>
          <button className="dashboard-button">MD ASRAF ALI</button>
        </div>

        <div className="dashboard-card">
          <h2>Messages</h2>
          <button className="dashboard-button">View Messages</button>
        </div>

        <div className="dashboard-card">
          <h2>Review</h2>
          <button className="dashboard-button">Check Reviews</button>
        </div>

        <div className="dashboard-card">
          <h2>Total User</h2>
          <button className="dashboard-button">View Users</button>
        </div>

        <div className="dashboard-card">
          <h2>Add News</h2>
          <button className="dashboard-button">Add News</button>
        </div>

        <div className="dashboard-card">
          <h2>Added News</h2>
          <button className="dashboard-button">View Added News</button>
        </div>

        <div className="dashboard-card">
          <h2>Available News</h2>
          <button className="dashboard-button">View Available News</button>
        </div>

        <div className="dashboard-card">
          <h2>Total User</h2>
          <button className="dashboard-button">Add User</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;