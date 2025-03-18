import { useParams } from 'react-router-dom';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import './singlearticle.css';
import Footer from "./footer.jsx";

const newsData = [
  {
    id: 1,
    image: 'https://static01.nyt.com/images/2022/06/11/multimedia/11gun-protests-DC-04/11gun-protests-DC-04-videoSixteenByNine3000.jpg?year=2022&h=1689&w=3000',
    title: 'You will vainly look for fruit on it in autumn.',
    author: 'Admin',
    date: '27 December 2019',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae...'
  }
];

const SingleArticle = () => {
  const { id } = useParams();
  const article = newsData.find(news => news.id === parseInt(id));

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className="single-article-page">
      {/* Header Section */}
      <div className="article-header">
        <h2>single Article</h2>
      </div>

      <div className="single-article-container">
        <div className="article-content">
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="article-meta">
            <span className="author"><FaUser /> Admin</span>
            <span className="date"><FaCalendarAlt /> {article.date}</span>
          </div>
        </div>
        <div className="sidebar">
          <h3>Recent Posts</h3>
          <ul>
            <li>You will never look at food the same way again.</li>
            <li>10 tips for a healthier lifestyle.</li>
            <li>How to save money on groceries.</li>
            <li>The secret to a happy life.</li>
          </ul>
          <h3>Tags</h3>
          <div className="tags">
            <span>Health</span>
            <span>Lifestyle</span>
            <span>Wellness</span>
            <span>Food</span>
            <span>Heart Disease</span>
            <span>Tips</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer/>
          </div>
  );
};

export default SingleArticle;
