import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./writenews.css";

const EditNewsPage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [newsData, setNewsData] = useState({
    title: "",
    content: "",
    category: "Politics"
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/news/${id}`);
        const data = await res.json();
        if (res.ok) {
          setNewsData({
            title: data.title,
            content: data.content,
            category: data.category,
          });
        } else {
          setMessage("❌ Failed to fetch news.");
        }
      } catch (err) {
        setMessage("❌ Error: " + err.message);
      }
    };
    fetchNews();
  }, [id]);

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
    formData.append("author", user?.first_name || "Anonymous");
    formData.append("category", newsData.category);
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await fetch(`/api/news/edit/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ News updated successfully!");
        setTimeout(() => navigate("/usernews"), 1500);
      } else {
        setMessage("❌ Failed to update news: " + data.message);
      }
    } catch (err) {
      setMessage("❌ Server error: " + err.message);
    }
  };

  if (!user) {
    return (
      <div className="write-news-container">
        <h2 className="news-heading">Edit News</h2>
        <p className="news-subtext">⚠️ You must be logged in to edit news.</p>
      </div>
    );
  }

  return (
    <div className="write-news-container">
      <h2 className="news-heading">
        <span className="highlight">Edit Your</span> News
      </h2>
      <p className="news-subtext">Update your article below.</p>

      {message && <p className="form-message">{message}</p>}

      <form className="news-form" onSubmit={handleSubmit}>
        <label>News Title</label>
        <input
          type="text"
          name="title"
          value={newsData.title}
          onChange={handleChange}
          required
        />

        <label>News Content</label>
        <textarea
          name="content"
          value={newsData.content}
          onChange={handleChange}
          required
        ></textarea>

        <div className="form-row">
          <div>
            <label>Author (Logged in as)</label>
            <input type="text" value={user?.first_name} readOnly />
          </div>
          <div>
            <label>Upload New Image (Optional)</label>
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

        <button type="submit" className="post-btn">UPDATE NEWS</button>
      </form>
    </div>
  );
};

export default EditNewsPage;
