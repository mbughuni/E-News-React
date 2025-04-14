// CommentForm.jsx
import { useState } from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Ensure this path is correct

const CommentForm = ({ newsId, comments, setComments, editingComment, setEditingComment, fetchData }) => {
  const { user } = useAuth();
  const [commentInput, setCommentInput] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    try {
      if (editingComment) {
        const res = await axios.put(`http://localhost:5000/api/comments/${editingComment.id}`, {
          content: commentInput,
        });
        setComments((prev) =>
          prev.map((c) => (c.id === editingComment.id ? res.data : c))
        );
        setEditingComment(null);
      } else {
        await axios.post("http://localhost:5000/api/comments/add", {
          content: commentInput,
          name: user?.username || user?.first_name || "Anonymous", // Adjust based on your data
          news_id: newsId,
        });
        setCommentInput("");
        fetchData(); // Refresh to update comment count & list
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <div className="comment-form">
      <h3>{editingComment ? "Edit Comment" : "Leave a Comment"}</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="Write your comment here..."
          rows="4"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          className="comment-textarea"
        />
        <button type="submit" className="submit-comment">
          {editingComment ? "Update Comment" : "Post Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
