import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminNavbar from './adminnavbar'; // Ensure AdminNavbar is imported
import './AvailableUsers.css';

const AvailableUsers = () => {
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
                  src="https://via.placeholder.com/100" // Placeholder image
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
        <button className="go-back-button">GO BACK</button>
      </div>
    </div>
  );
};

export default AvailableUsers;
