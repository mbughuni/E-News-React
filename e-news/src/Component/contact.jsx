import '../styles/contact.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h1>GET CONNECTED WITH US</h1>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Have you any question?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula ullamcorper accumsan. Pellentesque ac erat quam sed placerat. Etiam tristique</p>
        
        <div className="form-group">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Enter your phone" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Enter your subject" />
        </div>
        <div className="form-group">
          <textarea placeholder="Message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </div>
      <div className="other-location">
        <h3>Other Location</h3>
        <p>123 Main Street, City, State</p>
        <p>email@example.com, 456-7890</p>
      </div>
    </div>
  );
};

export default ContactForm;