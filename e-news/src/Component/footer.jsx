import '../styles/Footer.css'

export default function fotter() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>We aim to provide high-quality services with integrity and dedication, ensuring satisfaction for all our clients and partners.</p>
      </div>
      <div className="footer-section">
        <h3>Get in Touch</h3>
        <p>36020, Kasturabadamn, Rajkot, Gujarat.</p>
        <p>support@enews.com</p>
        <p>+00 111 222 3333</p>
      </div>
      <div className="footer-section">
        <h3>Pages</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Subscribes</h3>
        <p>Subscribe to our mailing list to get the latest updates.</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Email" className="email-input" />
          <button className="subscribe-button">&gt;</button>
        </div>
      </div>
    </footer>
  );
}
