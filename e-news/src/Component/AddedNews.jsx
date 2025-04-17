import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "./adminnavbar";
import "./AddedNews.css";

const AddedNews = () => {
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);

  // Fetch news from backend
  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/news/all");
      console.log("Fetched news:", res.data);
      setNewsList(res.data);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="dashboard">
      <AdminNavbar />

      <div className="added-news">
        <h1>Added News By Admin</h1>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Content</th>
              <th>Category</th>
              <th>Image</th>
              <th>Created At</th>
              <th>Likes</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {newsList.length === 0 ? (
              <tr><td colSpan="9">No news available</td></tr>
            ) : (
              newsList.map((news) => (
                <tr key={news._id}>
                  <td>{news.author}</td>
                  <td>{news.title}</td>
                  <td>{news.content}</td>
                  <td>{news.category}</td>
                  <td>
                    <img
                      src={`http://localhost:5000/uploads/${news.image || "default-news.png"}`}
                      alt="News"
                      className="news-image"
                      onError={(e) => e.target.src = "/assets/default-news.png"}
                    />
                  </td>
                  <td>{new Date(news.created_at).toLocaleDateString()}</td>
                  <td>{news.like_count}</td>
                  <td>{news.email}</td>
                  <td>
                    <button className="delete-button">
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </td>
                </tr>
              ))
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

export default AddedNews;
