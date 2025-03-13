
import "./writenews.css";

const WriteNews = () => {
  return (
    <div className="news-container">
      <h2 className="news-heading">
        <span className="highlight">Write Your</span> News
      </h2>
      <p className="news-subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid, fuga quas
        itaque eveniet beatae optio.
      </p>
      <div className="news-form">
        <label>News Title</label>
        <input type="text" placeholder="Enter news title" />

        <label>News Content</label>
        <textarea placeholder="Write your news here..."></textarea>

        <div className="form-row">
          <div>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Upload Image</label>
            <input type="file" />
          </div>
        </div>

        <label>Category</label>
        <select>
          <option>Politics</option>
          <option>Sports</option>
          <option>Technology</option>
          <option>Entertainment</option>
        </select>

        <button className="post-btn">POST NEWS</button>
      </div>
    </div>
  );
};

export default WriteNews;
