import { Link } from "react-router-dom";
import "./admindashboard.css";
import AdminNavbar from "./adminnavbar";  

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      {/* AdminNavbar at the top */}
      <AdminNavbar />

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>DASHBOARD</h1>
        </header>

        <div className="dashboard-content">
          {/* Welcome Card */}
          <div className="dashboard-card">
            <h2>Welcome!</h2>
            <button className="dashboard-button">Admin</button>
          </div>

          {/* Messages Card */}
          <div className="dashboard-card">
            <h2>Messages</h2>
            <Link to="/admin/messages">
              <button className="dashboard-button">View Messages</button>
            </Link>
          </div>

          {/* Review Card */}
          <div className="dashboard-card">
            <h2>Review</h2>
            <Link to="/admin/reviews">
              <button className="dashboard-button">Check Reviews</button>
            </Link>
          </div>

          {/* Total Users Card */}
          <div className="dashboard-card">
            <h2>available Users</h2>
            <Link to="/admin/available-users">
              <button className="dashboard-button">View Users</button>
            </Link>
          </div>

          {/* Add News Card */}
          <div className="dashboard-card">
            <h2>Add News</h2>
            <Link to="/admin/add-news">
              <button className="dashboard-button">Add News</button>
            </Link>
          </div>

          {/* Added News Card */}
          <div className="dashboard-card">
            <h2>Added News</h2>
            <Link to="/admin/added-news">
              <button className="dashboard-button">View Added News</button>
            </Link>
          </div>

          {/* Available News Card */}
          <div className="dashboard-card">
            <h2>Available News</h2>
            <Link to="/admin/available-news">
              <button className="dashboard-button">View Available News</button>
            </Link>
          </div>

          {/* Add User Card */}
          <div className="dashboard-card">
            <h2>Add User</h2>
            <Link to="/admin/add-user">
              <button className="dashboard-button">Add User</button>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
