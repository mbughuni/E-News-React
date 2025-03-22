import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./adminnavbar"; // Ensure AdminNavbar is imported
import "./AvailableReviews.css";

const AvailableReviews = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="dashboard">
      {/* Admin Navbar */}
      <AdminNavbar />

      {/* Available Reviews Section */}
      <div className="available-reviews">
        <h1>Available Reviews</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Images</th>
              <th>Review</th>
              <th>Profession</th>
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
                  alt="Reviewer"
                  className="review-image"
                />
              </td>
              <td>Great experience!</td>
              <td>Student</td>
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

        {/* Go Back Button */}
        <button className="go-back-button" onClick={() => navigate(-1)}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default AvailableReviews;
