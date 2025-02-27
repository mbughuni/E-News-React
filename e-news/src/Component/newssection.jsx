import { FaNewspaper, FaClock, FaShareAlt, FaGlobe,  } from 'react-icons/fa';
import './NewsSection.css'; // Create this CSS file

const NewsSection = () => {
  return (
    <div className="news-container">
      <h1 className="main-heading">
        <FaNewspaper className="heading-icon" />
        Latest News
      </h1>

      <div className="features-grid">
        <div className="feature-item">
          <FaClock className="feature-icon" />
          <div>
            <h3>24/7 Coverage</h3>
            <p>Stay updated with real-time headlines.</p>
          </div>
        </div>

        <div className="feature-item">
          <FaShareAlt className="feature-icon" />
          <div>
            <h3>Share Stories</h3>
            <p>Easily share news with your network.</p>
          </div>
        </div>

        <div className="feature-item">
          <FaGlobe className="feature-icon" />
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