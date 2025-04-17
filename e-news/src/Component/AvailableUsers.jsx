import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './adminnavbar';
import './AvailableUsers.css';

const AvailableUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/users/users/all");


      console.log("Fetched users:", res.data); // Log data to inspect the structure
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="dashboard">
      {/* Admin Navbar */}
      <AdminNavbar />
      
      {/* Available Users Section */}
      <div className="available-users">
        <h1>Available Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Profile Picture</th>
              <th>DOB</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr><td colSpan="9">No users found</td></tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.first_name} {user.middle_name} {user.last_name}</td>
                  <td>{user.address}</td>
                  <td>{user.contact_number}</td>
                  <td>{user.email}</td>
                  <td>
                    <img
                      src={`http://localhost:5000/uploads/${user.profile_picture || "default-user.png"}`}
                      alt="User"
                      className="user-image"
                      onError={(e) => e.target.src = "/assets/default-user.png"}
                    />
                  </td>
                  <td>{user.dob}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="edit-button">
                      <i className="fas fa-edit"></i> Edit
                    </button>
                  </td>
                  <td>
                    <button className="delete-button">
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button className="go-back-button">GO BACK</button>
      </div>
    </div>
  );
};

export default AvailableUsers;
