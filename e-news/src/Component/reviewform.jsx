import { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Review Submitted!");
  };

  return (
    <div className="review-container">
      <h2>
        Share Your <span className="highlight">Review</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Your Review</label>
        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="input-group">
          <div className="input-field">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label>Your Profession</label>
            <input
              type="text"
              placeholder="Enter your profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label>Upload Your Picture</label>
            <input type="file" />
          </div>
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
