import { FaNewspaper, FaClock, FaShareAlt, FaGlobe } from 'react-icons/fa';
import './NewsSection.css';

const NewsSection = () => {
  return (
    <div className="news-container">
      <h1 className="news-heading">
        <FaNewspaper className="news-heading-icon" />
        Latest News
      </h1>

      <div className="news-features-grid">
        <div className="news-feature-item">
          <FaClock className="news-feature-icon" />
          <div>
            <h3>24/7 Coverage</h3>
            <p>Stay updated with real-time headlines.</p>
          </div>
        </div>

        <div className="news-feature-item">
          <FaShareAlt className="news-feature-icon" />
          <div>
            <h3>Share Stories</h3>
            <p>Easily share news with your network.</p>
          </div>
        </div>

        <div className="news-feature-item">
          <FaGlobe className="news-feature-icon" />
          <div>
            <h3>Global Reach</h3>
            <p>News anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
