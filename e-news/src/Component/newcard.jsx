import { FaUser, FaCalendarAlt, FaThumbsUp, FaComment, FaShareAlt, FaBookOpen } from 'react-icons/fa';
import './NewsCardSection.css';

const newsData = [
  {
    id: 1,
    image: 'https://static01.nyt.com/images/2022/06/11/multimedia/11gun-protests-DC-04/11gun-protests-DC-04-videoSixteenByNine3000.jpg',
    title: 'You will vainly look for fruit on it in autumn.',
    author: 'Admin',
    date: '27 December, 2019',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae...',
  },
  {
    id: 2,
    image: 'https://static01.nyt.com/images/2022/06/11/multimedia/11gun-protests-DC-04/11gun-protests-DC-04-videoSixteenByNine3000.jpg',
    title: "A man's worth has its season, like tomato.",
    author: 'Admin',
    date: '27 December, 2019',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae...',
  },
  {
    id: 3,
    image: 'https://www.middleeasteye.net/sites/default/files/images-story/Israel-palestine-war-attack-jabalia-mohamed-hajjar-mee-12-oct-2023.jpg',
    title: 'Good thoughts bear good fresh juicy fruit.',
    author: 'Admin',
    date: '27 December, 2019',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae...',
  },
];

const NewsCardSection = () => {
  return (
    <div className="news-card-container">
      <h2 className="news-card-heading">
        <span className="highlight">Our</span> News
      </h2>
      <p className="news-card-description">
        Stay updated with the latest headlines and stories.
      </p>

      <div className="news-card-grid">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              {/* <h3 className="news-title">{news.title}</h3> */}
              <div className="news-meta">
                <span><FaUser className="icon" /> {news.author}</span>
                <span><FaCalendarAlt className="icon" /> {news.date}</span>
              </div>
              <p className="news-description">{news.description}</p>
              
              <div className="news-actions">
                {[FaThumbsUp, FaComment, FaShareAlt, FaBookOpen].map((Icon, index) => (
                  <div key={index} className="action-item">
                    <Icon className="action-icon" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCardSection;
