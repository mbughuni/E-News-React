import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar.jsx";
import './AvailableNews.css'; // Reuse styles

const UserNews = () => {
  const { user } = useAuth();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserNews = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch("/api/news/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        });

        if (!response.ok) throw new Error("Failed to fetch user news");

        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserNews();
  }, [user]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this news item?")) return;
    try {
      const response = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`Delete failed: ${response.status}`);
      setNewsData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-news/${id}`);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="available-news">
        <h1>Your Added News</h1>

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
                <th>Edit</th>
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
                    <button className="delete-button" onClick={() => handleDelete(news.id)}>
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </td>
                  <td>
                    <button className="edit-button" onClick={() => handleEdit(news.id)}>
                      <FontAwesomeIcon icon={faEdit} /> Edit
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

export default UserNews;
