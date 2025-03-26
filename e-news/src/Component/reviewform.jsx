import { useState } from "react";
import "./ReviewForm.css";

const ReviewFormPage = () => {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Review Submitted!");
  };

  return (
    <div className="form-review-page-container">
      <h2>
        Share Your <span className="highlight">Review</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Your Review</label>
        <textarea
          className="review-textarea"
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="input-group">
          <div className="input-field name-field">
            <label>Your Name</label>
            <input
              className="name-input"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-field profession-field">
            <label>Your Profession</label>
            <input
              className="profession-input"
              type="text"
              placeholder="Enter your profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>

          <div className="input-field file-field">
            <label>Upload Your Picture</label>
            <input className="file-input" type="file" />
          </div>
        </div>

        <button className="submit-button" type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewFormPage;
