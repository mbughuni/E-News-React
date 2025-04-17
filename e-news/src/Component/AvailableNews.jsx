import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./adminnavbar";
import "./AvailableNews.css";

const AvailableNews = () => {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/available");
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this news item?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/news/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete news item");

      // Update frontend state
      setNewsData((prevNews) => prevNews.filter((news) => news.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news. Try again.");
    }
  };

  return (
    <div className="dashboard">
      <AdminNavbar />
      <div className="available-news">
        <h1>Available News</h1>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Image</th>
              <th>Category</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((news, index) => (
              <tr key={index}>
                <td>{news.author}</td>
                <td>{news.title}</td>
                <td>{news.phone}</td>
                <td>{news.email}</td>
                <td>
                  <img
                    src={news.image || "https://via.placeholder.com/100"}
                    alt="News"
                    className="news-image"
                  />
                </td>
                <td>{news.category}</td>
                <td>{news.description}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(news.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="go-back-button" onClick={() => navigate(-1)}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default AvailableNews;
