import "../styles/about.css";

const ENews = () => {
  const features = [
    {
      title: "Latest Updates",
      description: "Stay informed with the latest news.",
      icon: "M3 10h11M9 21V3m8 7h4m-2-2v4m-7-7h11",
    },
    {
      title: "24/7 Access",
      description: "Access news anytime, anywhere.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Trusted Sources",
      description: "Verified and reliable news sources.",
      icon: "M9 12l2 2 4-4m-7 8h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: "Global Coverage",
      description: "News from around the world.",
      icon: "M21 12.79A9 9 0 1112 3v9l3 3m6 0a9 9 0 01-9 9",
    },
  ];

  return (
    <div className="enews-container">
      <div className="enews-wrapper">
        {/* LEFT: WHY E-News */}
        <div className="enews-left">
          <h1 className="enews-heading">
            WHY <span className="highlight">E-News</span>?
          </h1>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={feature.icon} />
                  </svg>
                </div>
                <div className="feature-text">
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="enews-cta">
            <p className="cta-line1">Stayed Updated!</p>
            <p className="cta-line2">
              Get the <span className="highlight">Latest News....</span>
            </p>
            <button className="cta-button">→ Read More</button>
          </div>
        </div>

        {/* RIGHT: Introduction Video */}
        <div className="enews-right">
          <h2 className="video-heading">Watch our introduction</h2>
          <iframe
            className="intro-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ENews;
