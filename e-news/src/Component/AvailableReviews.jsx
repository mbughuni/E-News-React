import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "./adminnavbar";
import "./AvailableReviews.css";

const AvailableReviews = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reviews");
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const handleDeleteReview = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await axios.delete(`http://localhost:5000/api/reviews/${id}`);
        setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
      } catch (err) {
        console.error("Error deleting review:", err);
      }
    }
  };

  const handleEditReview = (id) => {
    navigate(`/admin/reviews/edit/${id}`);
  };

  const getImageUrl = (imageName) => {
    if (!imageName) return "https://via.placeholder.com/100";
    return `http://localhost:5000/uploads/${imageName}`;
  };

  return (
    <div className="dashboard">
      <AdminNavbar />

      <div className="available-reviews">
        <h1>Available Reviews</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Image</th>
              <th>Review</th>
              <th>Profession</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <tr key={review.id}>
                  <td>{review.name}</td>
                  <td>{review.address}</td>
                  <td>{review.phone}</td>
                  <td>{review.email}</td>
                  <td>
                    <img
                      src={getImageUrl(review.image)}
                      alt="Reviewer"
                      className="review-image"
                      style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
                    />
                  </td>
                  <td>{review.review}</td>
                  <td>{review.profession}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEditReview(review.id)}>
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                  </td>
                  <td>
                    <button className="delete-button" onClick={() => handleDeleteReview(review.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No reviews available</td>
              </tr>
            )}
          </tbody>
        </table>

        <button className="go-back-button" onClick={() => navigate(-1)}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default AvailableReviews;
