import '../styles/contact.css'; // Import CSS for styling
import Navbar from '../Component/navbar';
import ContactHeader from './contactheader';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon

const ContactSection = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <div className="contact-section">
        {/* Title and Description */}
        <div className="contact-header">
          <h1>Have any questions?</h1>
          <p>
            If you have any questions or need assistance, feel free to reach out to us. We are here to help!
          </p>
        </div>

        {/* Form and Contact Details */}
        <div className="contact-content">
          {/* Form Section */}
          <div className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Enter your name" className="form-input" />
              <input type="email" placeholder="Enter your email" className="form-input" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Enter your phone" className="form-input" />
              <input type="text" placeholder="Enter your subject" className="form-input" />
            </div>
            <textarea placeholder="Message" className="form-textarea"></textarea>
            <button className="send-button">Send Message</button>
          </div>

          {/* Contact Details Section */}
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
        </div>
      </div>

      {/* New Section: Location Container and Map */}
      <div className="location-container">
        <div className="location-content">
          <div className="location-icon-text">
            <FaMapMarkerAlt className="location-icon" />
            <p className="location-text">Find our location</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8a32a7a1f8!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633033452537!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;