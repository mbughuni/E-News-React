import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaRegComment, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import './singlearticle.css';
import { AuthContext } from './AuthContext'; // Ensure this path is correct
import CommentForm from './commentForm.jsx'; // Import the new CommentForm component

const SingleArticle = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingComment, setEditingComment] = useState(null);

  const fetchData = async () => {
    try {
      const articleRes = await axios.get(`http://localhost:5000/api/news/${id}`);
      setArticle(articleRes.data);

      const commentRes = await axios.get(`http://localhost:5000/api/comments/${id}`);
      setComments(commentRes.data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/comments/${commentId}`);
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  const handleEdit = (comment) => {
    setEditingComment(comment);
  };

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
            <span className="date"><FaCalendarAlt /> {new Date(article.created_at).toLocaleDateString()}</span>
          </div>

          <div className="article-body">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-description">{article.description}</p>
            <p className="article-full-content">{article.content}</p>
          </div>

          <div className="comments-section">
            <h3 className="comments-title">
              <FaRegComment /> {comments.length} Comment{comments.length !== 1 && 's'}
            </h3>

            {user ? (
              <CommentForm
                newsId={id}
                comments={comments}
                setComments={setComments}
                editingComment={editingComment}
                setEditingComment={setEditingComment}
                fetchData={fetchData}
              />
            ) : (
              <p className="login-warning">You must be logged in to post a comment.</p>
            )}

            <div className="comment-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <strong>{comment.name}</strong>
                  <p>{comment.content}</p>
                  <span className="comment-time">
                    {new Date(comment.created_at).toLocaleString()}
                  </span>
                  {user && user.username === comment.name && (
                    <div className="comment-actions">
                      <FaEdit onClick={() => handleEdit(comment)} title="Edit" />
                      <FaTrash onClick={() => handleDelete(comment.id)} title="Delete" />
                    </div>
                  )}
                </div>
              ))}
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
