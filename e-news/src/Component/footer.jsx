import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footerrr-container">
      {/* About Section */}
      <div className="footerrr-section">
        <h3>About Us</h3>
        <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      </div>

      {/* Contact Section */}
      <div className="footerrr-section">
        <h3>Get in Touch</h3>
        <p>rajkot,gujarat,kasturbadham,360020</p>
        <p>support@enews.com</p>
        <p>+91 111 222 3333</p>
      </div>

      {/* Pages Section */}
      <div className="footerrr-section">
        <h3>Pages</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Subscribe Section */}
      <div className="footerrr-section">
        <h3>Subscribe</h3>
        <p>Subscribe to our mailing list to get the latest updates.</p>
        <div className="subscribeee-box">
          <input type="email" placeholder="Email" className="emailll-input" />
          <button className="subscribeee-button">
            <span>📧</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
