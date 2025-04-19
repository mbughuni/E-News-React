import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import "./AvailableNews.css";

const AvailableNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/available");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log("Fetched news data:", data);
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this news item?"))
      return;
    try {
      const response = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`Delete failed: ${response.status}`);
      setNewsData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete.");
    }
  };

  return (
    <div className="dashboard">
      <AdminNavbar />
      <div className="available-news">
        <h1>Available News</h1>

        {loading ? (
          <p>Loading...</p>
        ) : newsData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Content</th>
                <th>Email</th>
                <th>Image</th>
                <th>Category</th>
                <th>Created At</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {newsData.map((news) => (
                <tr key={news.id}>
                  <td>{news.author}</td>
                  <td>{news.title}</td>
                  <td>{news.content}</td>
                  <td>{news.email}</td>
                  <td>
                    <img
                      src={
                        news.image
                          ? `http://localhost:5000/uploads/${news.image}`
                          : "https://via.placeholder.com/100"
                      }
                      alt="News"
                      className="news-image"
                    />
                  </td>
                  <td>{news.category}</td>
                  <td>{new Date(news.created_at).toLocaleString()}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(news.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No news available.</p>
        )}

        <button className="go-back-button" onClick={() => navigate(-1)}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default AvailableNews;
