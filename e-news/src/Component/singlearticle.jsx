import { useParams } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaRegComment } from 'react-icons/fa';
import './singlearticle.css';

const newsData = [
  {
    id: 1,
    image: 'https://static01.nyt.com/images/2022/06/11/multimedia/11gun-protests-DC-04/11gun-protests-DC-04-videoSixteenByNine3000.jpg?year=2022&h=1689&w=3000',
    title: 'You will vainly look for fruit on it in autumn.',
    author: 'Admin',
    date: '27 December 2019',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    fullContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
    comments: [
      {
        id: 1,
        name: 'John Doe',
        date: '28 December 2019',
        content: 'Great article! Really enjoyed reading this perspective.'
      },
      {
        id: 2,
        name: 'Jane Smith',
        date: '29 December 2019',
        content: 'Interesting points, but I disagree with some conclusions.'
      }
    ]
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
        <h2>Single Article</h2>
      </div>

      <div className="single-article-container">
        <div className="article-content">
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="article-meta">
            <span className="author"><FaUser /> {article.author}</span>
            <span className="date"><FaCalendarAlt /> {article.date}</span>
          </div>
          
          {/* Article Content Section */}
          <div className="article-body">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-description">{article.description}</p>
            <p className="article-full-content">{article.fullContent}</p>
          </div>
          
          {/* Comments Section */}
          <div className="comments-section">
            <h3 className="comments-title">
              <FaRegComment /> {article.comments.length} Comments
            </h3>
            
            {article.comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment-meta">
                  <span className="comment-author">{comment.name}</span>
                  <span className="comment-date">{comment.date}</span>
                </div>
                <p className="comment-content">{comment.content}</p>
              </div>
            ))}
            
            {/* Comment Form */}
            <div className="comment-form">
              <h3>Leave a Comment</h3>
              <form>
                <div className="form-group">
                  <textarea 
                    placeholder="Write your comment here..." 
                    rows="5"
                    className="comment-textarea"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="comment-input"
                  />
                </div>
                <button type="submit" className="submit-comment">Post Comment</button>
              </form>
            </div>
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
    </div>
  );
};

export default SingleArticle;