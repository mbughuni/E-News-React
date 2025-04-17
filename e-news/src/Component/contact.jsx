import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import axios from "axios";
import "./AvailableReviews.css";
import AdminNavbar from "./AdminNavbar"; // ✅ Make sure this is imported correctly

const Message = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch messages from the backend
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/messages/contact_messages");
        setMessages(response.data); // ✅ Correct endpoint
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

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
                  <td>{message.message}</td>
                  <td>
                    <button className="delete-button">
                      Delete
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
      </div>
    </div>
  );
};

export default Message;
