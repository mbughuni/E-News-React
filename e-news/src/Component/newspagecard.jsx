import { useState, useEffect, useContext } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaSearch,
  FaThumbsUp,
  FaShareAlt,
  FaComment,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./newspagecard.css";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const Newspagecard = () => {
  const [newsData, setNewsData] = useState([]);
  const [commentCounts, setCommentCounts] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (newsData.length > 0) {
      fetchCommentCounts();
    }
  }, [newsData]);

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNewsData(res.data);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    }
  };

  const fetchCommentCounts = async () => {
    try {
      const promises = newsData.map(async (news) => {
        const res = await axios.get(
          `http://localhost:5000/api/comments/count/${news.id}`
        );
        return { [news.id]: parseInt(res.data.count, 10) };
      });
      const commentCountsArray = await Promise.all(promises);
      const counts = Object.assign({}, ...commentCountsArray);
      setCommentCounts(counts);
    } catch (err) {
      console.error("Failed to fetch comment counts:", err);
    }
  };

  const handleLike = async (newsId) => {
    if (!user) {
      alert("Please login to like.");
      return;
    }
    try {
      const res = await axios.post(
        `http://localhost:5000/api/news/${newsId}/like`,
        { userId: user.id }
      );

      // Optimistically update UI for like count and userLike flag
      const updatedNews = newsData.map((news) => {
        if (news.id === newsId) {
          return {
            ...news,
            like_count: res.data.likeCount, // Backend sends updated like count as likeCount
            userLiked: res.data.userLiked,
          };
        }
        return news;
      });
      setNewsData(updatedNews);
    } catch (err) {
      console.error("Failed to like the post:", err);
    }
  };

  const filteredNews = newsData.filter((news) => {
    return (
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDate === "" || news.created_at.startsWith(filterDate))
    );
  });

  const handleCardClick = (id) => {
    navigate(`/article/${id}`);
  };

  const handleFilterReset = () => {
    setFilterDate("");
  };

  // Format the date for better readability
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="home-news-card-container">
      {/* Search and Filter */}
      <div className="home-news-search-filter-container">
        <div className="home-news-search-box">
          <FaSearch className="home-news-icon" />
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="home-news-date-filter">
          <FaCalendarAlt className="home-news-icon" />
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
          &nbsp;
          <button
            className="home-news-reset-button"
            onClick={handleFilterReset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="home-news-card-title">
        <h2 className="home-news-card-heading">
          <span className="home-news-highlight">Our</span> News
        </h2>
        <p className="home-news-card-description">
          Stay updated with the latest headlines and stories.
        </p>
      </div>

      {/* News Cards */}
      <div className="home-news-card-grid">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <div key={news.id} className="home-news-card">
              <img
                src={
                  news.image
                    ? `http://localhost:5000/uploads/${news.image}`
                    : "https://via.placeholder.com/300x180"
                }
                alt={news.title}
                className="home-news-image"
                onClick={() => handleCardClick(news.id)}
              />
              <div className="home-news-content">
                <div className="home-news-meta">
                  <span>
                    <FaUser className="home-news-icon" /> {news.author}
                  </span>
                  <span>
                    <FaCalendarAlt className="home-news-icon" />{" "}
                    {formatDate(news.created_at)}
                  </span>
                </div>
                <p className="home-news-description">
                  {news.content?.substring(0, 100)}...
                </p>
                <div className="home-news-actions">
                  <div
                    className="action-item like-wrapper"
                    onClick={() => handleLike(news.id)}
                  >
                    <FaThumbsUp
                      className="home-news-action-icon"
                      color={news.userLiked ? "#007bff" : "#333"}
                    />
                    <div className="like-count-text">{news.like_count}</div>
                  </div>
                  <div
                    className="action-item comment-wrapper"
                    onClick={() => handleCardClick(news.id)}
                  >
                    <FaComment className="home-news-action-icon" />
                    <div className="comment-count-text">
                      {commentCounts[news.id] || 0}
                    </div>
                  </div>

                  <div className="action-item">
                    <FaShareAlt className="home-news-action-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="home-news-no-news">No news found</p>
        )}
      </div>
    </div>
  );
};

export default Newspagecard;
