import { useState, useEffect } from 'react';
import { FaUser, FaCalendarAlt, FaSearch, FaThumbsUp, FaShareAlt, FaComment } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './newspagecard.css';
import axios from 'axios';

const Newspagecard = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/news");
        setNewsData(res.data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = newsData.filter((news) => {
    return (
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDate === '' || news.created_at.startsWith(filterDate))
    );
  });

  const handleCardClick = (id) => {
    navigate(`/article/${id}`);
  };

  const handleFilterReset = () => {
    setFilterDate('');
  };

  return (
    <div className="home-news-card-container">
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
          &nbsp;<button className="home-news-reset-button" onClick={handleFilterReset}>Reset</button>
        </div>
      </div>

      <div className="home-news-card-title">
        <h2 className="home-news-card-heading">
          <span className="home-news-highlight">Our</span> News
        </h2>
        <p className="home-news-card-description">
          Stay updated with the latest headlines and stories.
        </p>
      </div>

      <div className="home-news-card-grid">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <div key={news.id} className="home-news-card" onClick={() => handleCardClick(news.id)}>
              <img
                src={news.image ? `http://localhost:5000/uploads/${news.image}` : 'https://via.placeholder.com/300x180'}
                alt={news.title}
                className="home-news-image"
              />
              <div className="home-news-content">
                <div className="home-news-meta">
                  <span><FaUser className="home-news-icon" /> {news.author}</span>
                  <span><FaCalendarAlt className="home-news-icon" /> {news.created_at?.split('T')[0]}</span>
                </div>
                <p className="home-news-description">{news.content?.substring(0, 100)}...</p>
                <div className="home-news-actions">
                  <FaThumbsUp className="home-news-action-icon" />
                  <FaComment className="home-news-action-icon" />
                  <FaShareAlt className="home-news-action-icon" />
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
