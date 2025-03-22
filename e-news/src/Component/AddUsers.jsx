import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";  // Import useNavigate
import AdminNavbar from './adminnavbar';
import './AddUsers.css';

const AddUsers = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="dashboard">
      {/* Admin Navbar */}
      <AdminNavbar />

      {/* Available Users Section */}
      <div className="add-users">
        <h1>Add Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Images</th>
              <th>DOB</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asraf</td>
              <td>Gandhi Nagar</td>
              <td>7781826301</td>
              <td>mail692@rku.ac.in</td>
              <td>
                <img
                  src="https://via.placeholder.com/100" 
                  alt="User"
                  className="user-image"
                />
              </td>
              <td>30-12-2002</td>
              <td>*******</td>
              <td>
                <button className="edit-button">
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
              </td>
              <td>
                <button className="delete-button">
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Updated GO BACK Button */}
        <button className="go-back-button" onClick={() => navigate("/admin")}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default AddUsers;
