import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./adminnavbar"; // Ensure AdminNavbar is imported
import { useEffect, useState } from "react";
import axios from "axios";
import "./AvailableReviews.css";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch messages from the backend (adjust API path)
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/messages/contact_messages");
        setMessages(response.data); // Assuming the backend returns messages in this structure
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  // Delete handler (assuming an API endpoint for deletion)
  const handleDelete = async (messageId) => {
    try {
      await axios.delete(`http://localhost:5000/api/messages/contact_messages/${messageId}`);
      setMessages(messages.filter((message) => message.id !== messageId)); // Remove deleted message from UI
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="dashboard">
      {/* Admin Navbar */}
      <AdminNavbar />

      {/* Available Messages Section */}
      <div className="available-reviews">
        <h1>Available Messages</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((message) => (
                <tr key={message.id}>
                  <td>{message.name}</td>
                  <td>{message.phone}</td>
                  <td>{message.email}</td>
                  <td>{message.subject}</td>
                  <td>{message.message}</td> {/* Display the message */}
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(message.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No messages available.</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Go Back Button */}
        <button className="go-back-button" onClick={() => navigate(-1)}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default Message;
