import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext"; // Make sure this path is correct
import "./writenews.css";

const WriteNews = () => {
  const { user } = useContext(AuthContext); // Access the logged-in user
  const [newsData, setNewsData] = useState({
    title: "",
    content: "",
    category: "Politics"
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsData({ ...newsData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("❌ You must be logged in to post news.");
      return;
    }

    const formData = new FormData();
    formData.append("title", newsData.title);
    formData.append("content", newsData.content);
    formData.append("author", user?.first_name || "Anonymous");
    formData.append("category", newsData.category);
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await fetch("http://localhost:5000/api/news/add", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ News posted successfully!");
        setNewsData({ title: "", content: "", category: "Politics" });
        setImage(null);

        // Refresh the page to fetch updated news
        window.location.reload(); // This will reload the page and reflect changes
      } else {
        setMessage("❌ Failed to post news: " + data.message);
      }
    } catch (err) {
      setMessage("❌ Server error: " + err.message);
    }
  };

  if (!user) {
    return (
      <div className="write-news-container">
        <h2 className="news-heading">Share your news with us!</h2>
        <p className="news-subtext">⚠️ You must be logged in to write news.</p>
      </div>
    );
  }

  return (
    <div className="write-news-container">
      <h2 className="news-heading">
        <span className="highlight">Write Your</span> News
      </h2>
      <p className="news-subtext">
        Share your thoughts and updates with the world.
      </p>

      {message && <p className="form-message">{message}</p>}

      <form className="news-form" onSubmit={handleSubmit}>
        <label>News Title</label>
        <input
          type="text"
          name="title"
          value={newsData.title}
          onChange={handleChange}
          placeholder="Enter news title"
          required
        />

        <label>News Content</label>
        <textarea
          name="content"
          value={newsData.content}
          onChange={handleChange}
          placeholder="Write your news here..."
          required
        ></textarea>

        <div className="form-row">
          <div>
            <label>Author (Logged in as)</label>
            <input
              type="text"
              value={user?.first_name}
              readOnly
            />
          </div>
          <div>
            <label>Upload Image</label>
            <input type="file" onChange={handleImageChange} />
          </div>
        </div>

        <label>Category</label>
        <select name="category" value={newsData.category} onChange={handleChange}>
          <option value="Politics">Politics</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
          <option value="Entertainment">Entertainment</option>
          <option value="disaster & emergency">Disaster & Emergency</option>
          <option value="crime and law">Crime and law</option>
          <option value="agriculture">Agriculture</option>
          <option value="Science & Innovation">Science & Innovation</option>
        </select>

        <button type="submit" className="post-btn">POST NEWS</button>
      </form>
    </div>
  );
};

export default WriteNews;
