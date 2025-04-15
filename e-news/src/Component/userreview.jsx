import { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Userreview.css";
import axios from "axios";
import { AuthContext } from "./AuthContext"; // Adjust path as needed

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext); // Access the user from AuthContext
  const [userReview, setUserReview] = useState(null);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/reviews/all");
      if (Array.isArray(response.data)) {
        setReviews(response.data);
        const userRev = response.data.find((review) => review.email === user.email);
        setUserReview(userRev);  // Set the user's review if it exists
      } else {
        setReviews([]);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteReview = async (id, image) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/reviews/delete/${id}`, {
        data: { email: user.email, image }, // Use email from the user context
      });
      fetchReviews(); // Refresh list
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (!user) {
    return <p>Please log in to view reviews.</p>; // Handle if user is not logged in
  }

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">
            <span style={{ color: "black" }}>User</span>
            <span className="orange-text"> Reviews</span>
            <span style={{ color: "black" }}> Around the World</span>
          </h2>
          <p className="section-subtitle">
            Hear what our customers have to say about their experiences.
          </p>
        </div>

        {loading ? (
          <p>Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p>No reviews available.</p>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="testimonial-slider"
            grabCursor={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="single-testimonial-slider">
                <div className="client-avater">
                  <img
                    src={review.image ? `/uploads/${review.image}` : "assets/default-user.png"}
                    alt={review.name}
                    onError={(e) => (e.target.src = "assets/default-user.png")}
                  />
                </div>
                <div className="client-meta">
                  <h3>
                    {review.name} <span>{review.profession}</span>
                  </h3>
                  <p className="testimonial-body orange-text">“{review.review}”</p>
                  <br />
                  <div className="last-icon">
                    <i className="fas fa-quote-right"></i>
                  </div>

                  {/* Conditional delete/edit buttons */}
                  {review.email === user.email && (
                    <div className="edit-delete-buttons">
                      <button onClick={() => deleteReview(review.id, review.image)}>
                        🗑️ Delete
                      </button>
                      <button onClick={() => alert("Edit feature coming soon!")}>
                        ✏️ Edit
                      </button>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        
        {/* Allow adding review if the user doesn't have one */}
        {userReview === null && (
          <div className="add-review">
            <button onClick={() => alert("Add review form coming soon!")}>Add Review</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
