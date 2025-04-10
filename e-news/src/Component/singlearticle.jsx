import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaRegComment } from 'react-icons/fa';
import axios from 'axios';
import './singlearticle.css';

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/news/${id}`);
        setArticle(res.data);
      } catch (err) {
        console.error("Failed to fetch article:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!article) return <h2>Article not found</h2>;

  return (
    <div className="single-article-page">
      <div className="article-header">
        <h2>Single Article</h2>
      </div>

      <div className="single-article-container">
        <div className="article-content">
          <img
            src={`http://localhost:5000/uploads/${article.image}`}
            alt={article.title}
            className="article-image"
          />
          <div className="article-meta">
            <span className="author"><FaUser /> {article.author}</span>
            <span className="date"><FaCalendarAlt /> {new Date(article.date).toLocaleDateString()}</span>
          </div>

          <div className="article-body">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-description">{article.description}</p>
            <p className="article-full-content">{article.fullContent || "More content will be added soon..."}</p>
          </div>

          <div className="comments-section">
            <h3 className="comments-title">
              <FaRegComment /> 0 Comments
            </h3>

            <div className="comment-form">
              <h3>Leave a Comment</h3>
              <form>
                <div className="form-group">
                  <textarea placeholder="Write your comment here..." rows="5" className="comment-textarea" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="comment-input" />
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
