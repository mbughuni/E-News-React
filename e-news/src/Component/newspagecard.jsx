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

  return (
    <div className="news-card-container">
      <div className="search-filter-container">
        <div className="search-box">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="date-filter">
          <FaCalendarAlt className="icon" />
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
      </div>

      <h2 className="news-card-heading">Our News</h2>

      <div className="news-card-grid">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <div key={news.id} className="news-card" onClick={() => handleCardClick(news.id)}>
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-title">{news.title}</h3>
                <div className="news-meta">
                  <span><FaUser className="icon" /> {news.author}</span>
                  <span><FaCalendarAlt className="icon" /> {news.date}</span>
                </div>
                <p className="news-description">{news.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-news">No news found</p>
        )}
      </div>
    </div>
  );
};

export default Newspagecard;
