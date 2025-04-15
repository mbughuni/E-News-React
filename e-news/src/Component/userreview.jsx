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
  const { user } = useContext(AuthContext);
  const [userReview, setUserReview] = useState(null);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/reviews/all");
      if (Array.isArray(response.data)) {
        setReviews(response.data);
        const userRev = user
          ? response.data.find((review) => review.email === user.email)
          : null;
        setUserReview(userRev);
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
        data: { email: user.email, image },
      });
      fetchReviews();
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

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
                    src={
                      review.image
                        ? `http://localhost:5000/uploads/${review.image}`
                        : "/assets/default-user.png"
                    }
                    alt={review.name}
                    onError={(e) => (e.target.src = "/assets/default-user.png")}
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

                  {/* Show buttons only if user is owner */}
                  {user && review.name === user.name && (
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

        {/* Add review button only for logged in users with no existing review */}
        {user && userReview === null && (
          <div className="add-review">
            <button onClick={() => alert("Add review form coming soon!")}>Add Review</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
