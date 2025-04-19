import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import '../styles/contact.css';
import Navbar from '../Component/navbar';
import ContactHeader from './contactheader';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AuthContext } from './AuthContext'; // Import the context properly

const ContactSection = () => {
  const { user } = useContext(AuthContext); // Get current logged-in user

  // Set the form data to pre-fill the fields if the user is logged in
  const [formData, setFormData] = useState({
    name: user?.name || '', // Set to user name if available
    email: user?.email || '', // Set to user email if available
    phone: user?.phone || '', // Set to user phone if available
    subject: '',
    message: ''
  });

  useEffect(() => {
    // If user data changes, update the form data accordingly
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        subject: '',
        message: ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('You must be logged in to send a message.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/contact', {
        ...formData,
        userId: user.id, // Optionally send user ID
      });
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error("Failed to send message", err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <ContactHeader />
      <div className="contact-section">
        <div className="contact-header">
          <h1>Have any questions?</h1>
          <p>If you have any questions or need assistance, feel free to reach out to us. We are here to help!</p>
        </div>

        <form className="contact-content" onSubmit={handleSubmit}>
          <div className="contact-form">
            <div className="form-row">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
                className="form-input" 
              />
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                className="form-input" 
              />
            </div>
            <div className="form-row">
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Enter your phone" 
                className="form-input" 
              />
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Enter your subject" 
                className="form-input" 
              />
            </div>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Message" 
              className="form-textarea"
            ></textarea>

            {/* Send Message Button */}
            <button type="submit" className="send-button" disabled={!user}>
              {user ? "Send Message" : "Login to Send"}
            </button>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="details-section">
              <h2 className="details-title">Office Location</h2>
              <p className="details-text">123 Main Street, City, State, ZIP Code</p>
            </div>
            <div className="details-section">
              <h2 className="details-title">Contact Information</h2>
              <p className="details-text">Email: email@example.com</p>
              <p className="details-text">Phone: 456-7890</p>
            </div>
          </div>
        </form>

        <div className="location-container">
          <div className="location-content">
            <div className="location-icon-text">
              <FaMapMarkerAlt className="location-icon" />
              <p className="location-text">Find our location</p>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?... (your iframe src)"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
