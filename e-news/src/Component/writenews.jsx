import { useState } from "react";
import "./writenews.css";

const WriteNews = () => {
  const [newsData, setNewsData] = useState({
    title: "",
    content: "",
    author: "",
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

    const formData = new FormData();
    formData.append("title", newsData.title);
    formData.append("content", newsData.content);
    formData.append("author", newsData.author);
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
        setNewsData({ title: "", content: "", author: "", category: "Politics" });
        setImage(null);
      } else {
        setMessage("❌ Failed to post news: " + data.message);
      }
    } catch (err) {
      setMessage("❌ Server error: " + err.message);
    }
  };

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
            <label>Your Name</label>
            <input
              type="text"
              name="author"
              value={newsData.author}
              onChange={handleChange}
              placeholder="Enter your name"
              required
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
        </select>

        <button type="submit" className="post-btn">POST NEWS</button>
      </form>
    </div>
  );
};

export default WriteNews;
