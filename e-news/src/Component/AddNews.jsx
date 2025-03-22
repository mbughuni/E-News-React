import { useNavigate } from "react-router-dom";
import AdminNavbar from "./adminnavbar"; // Import AdminNavbar component
import "./AddNews.css";

const AddNews = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="dashboard">
      {/* AdminNavbar */}
      <AdminNavbar />

      {/* Add News Container */}
      <div className="add-news-container">
        <h1>ADD NEWS</h1>

        {/* News Title */}
        <h2>News Title</h2>
        <input
          type="text"
          placeholder="Enter news title"
          className="news-input"
        />

        {/* News Content */}
        <h2>News Content</h2>
        <textarea
          placeholder="Enter news content"
          className="news-textarea"
        ></textarea>

        {/* Your Name */}
        <h2>Your Name</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="news-input"
        />

        {/* Category */}
        <h2>Category</h2>
        <select className="news-select">
          <option value="product">Product</option>
          <option value="technology">Technology</option>
          <option value="politics">Politics</option>
          <option value="robotics">Robotics</option>
        </select>

        {/* Choose Picture */}
        <h2>Choose your picture</h2>
        <input type="file" className="news-file" />

        {/* Buttons Container */}
        <div className="buttons-container">
          {/* Publish Button */}
          <div className="button-row">
            <button className="publish-button">Publish News</button>
          </div>

          {/* Go Back Button */}
          <div className="button-row">
            <button className="go-back-button" onClick={() => navigate(-1)}>
              GO BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
