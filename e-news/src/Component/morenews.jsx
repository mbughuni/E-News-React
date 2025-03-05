import { useState } from "react";
import Modal from "react-modal";
import "./morenews.css"; // Import external CSS

const MoreNews = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="news-container">
      {/* More News Button */}
      <button className="more-news-btn">More News</button>

      {/* Breaking News Section */}
      <div className="news-content">
        <div className="news-image-container">
          <img
            src="./assets/n3.jpg"
            alt="Breaking:Major event unfolding"
            className="news-image"
          />
          {/* Play Button */}
          <button className="play-btn" onClick={() => setModalIsOpen(true)}>▶</button>
        </div>

        {/* News Details */}
        <div className="news-details">
          <h2><span className="highlight">Highlight</span> of the Day</h2>
          <h3>Top Story: Global Headlines</h3>
          <p>
            Stay informed with in-depth reporting on the latest developments happening 
            around the world. From politics to technology, we have got you covered with 
            verified news stories.
          </p>

          {/* Countdown Timer (Static) */}
          <div className="countdown">
            {["306 Days", "08 Hours", "25 Mins", "34 Secs"].map((time, index) => (
              <div key={index} className="countdown-box">
                <p className="countdown-number">{time.split(" ")[0]}</p>
                <p className="countdown-text">{time.split(" ")[1]}</p>
              </div>
            ))}
          </div>

          <a href="#" className="read-more">📖 Read More</a>
        </div>
      </div>

      {/* Trusted News Source Section */}
      <div className="trusted-source">
        <h2>Your Trusted <span className="highlight">News Source</span></h2>
        <p>
          Stay informed with reliable, unbiased reporting. From breaking news to 
          in-depth analysis, we cover stories that matter most to you. Explore 
          global and local events with context and clarity.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      {/* Video Popup Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-overlay"
        ariaHideApp={false}
      >
        <div className="modal-content">
          <button className="close-btn" onClick={() => setModalIsOpen(false)}>✖</button>
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/JeU_EYFH1Jk?si=bRMhsuAvJ6AvN_4n"
            title="News Video"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default MoreNews;
