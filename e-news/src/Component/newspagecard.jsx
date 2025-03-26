import { useState } from 'react';
import { FaUser, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './newspagecard.css';

const newsData = [
  {
    id: 1,
    image: 'https://static01.nyt.com/images/2022/06/11/multimedia/11gun-protests-DC-04/11gun-protests-DC-04-videoSixteenByNine3000.jpg?year=2022&h=1689&w=3000',
    title: 'You will vainly look for fruit on it in autumn.',
    author: 'Admin',
    date: '2019-12-27',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae...'
  },
  {
    id: 2,
    image: 'https://static01.nyt.com/images/2022/06/11/multimedia/11gun-protests-DC-04/11gun-protests-DC-04-videoSixteenByNine3000.jpg?year=2022&h=1689&w=3000',
    title: "A man's worth has its season, like tomato.",
    author: 'Admin',
    date: '2019-12-27',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae...'
  },
  {
    id: 3,
    image: 'https://www.middleeasteye.net/sites/default/files/images-story/Israel-palestine-war-attack-jabalia-mohamed-hajjar-mee-12-oct-2023.jpg',
    title: 'Good thoughts bear good fresh juicy fruit.',
    author: 'Admin',
    date: '2023-10-12',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae...'
  }
];

const Newspagecard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const navigate = useNavigate();

  const filteredNews = newsData.filter((news) => {
    return (
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDate === '' || news.date === filterDate)
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
          <button className="home-news-reset-button" onClick={handleFilterReset}>Reset</button>
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
              <img src={news.image} alt={news.title} className="home-news-image" />
              <div className="home-news-content">
                <div className="home-news-meta">
                  <span><FaUser className="home-news-icon" /> {news.author}</span>
                  <span><FaCalendarAlt className="home-news-icon" /> {news.date}</span>
                </div>
                <p className="home-news-description">{news.description}</p>
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
