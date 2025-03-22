import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./adminnavbar"; // Import AdminNavbar component
import "./AddedNews.css";

const AddedNews = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="dashboard">
      {/* Admin Navbar */}
      <AdminNavbar /> 

      {/* Added News Section */}
      <div className="added-news">
        <h1>Added News By Admin</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Images</th>
              <th>Category</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asraf</td>
              <td>PM change</td>
              <td>7781826301</td>
              <td>mail692@rku.ac.in</td>
              <td>
                <img
                  src="https://via.placeholder.com/100"
                  alt="News Image"
                  className="news-image"
                />
              </td>
              <td>Politics</td>
              <td>Asraf......</td>
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

export default AddedNews;
