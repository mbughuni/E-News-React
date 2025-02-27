import '../styles/Footer.css'; // Ensure the path is correct

export default function Footer() { // Fixed component name to "Footer"
  return (
    <footer className="footerrr-container">
      <div className="footerrr-section">
        <h3>About Us</h3>
        <p>We aim to provide high-quality services with integrity and dedication, ensuring satisfaction for all our clients and partners.</p>
      </div>
      <div className="footerrr-section">
        <h3>Get in Touch</h3>
        <p>36020, Kasturabadamn, Rajkot, Gujarat.</p>
        <p>support@enews.com</p>
        <p>+00 111 222 3333</p>
      </div>
      <div className="footerrr-section">
        <h3>Pages</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footerrr-section">
        <h3>Subscribes</h3>
        <p>Subscribe to our mailing list to get the latest updates.</p>
        <div className="subscribeee-box">
          <input type="email" placeholder="Email" className="emailll-input" />
          <button className="subscribeee-button">&gt;</button>
        </div>
      </div>
    </footer>
  );
}