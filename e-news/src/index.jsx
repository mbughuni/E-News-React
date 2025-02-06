import  { useState } from 'react';
import './App.css';  // Make sure you include the necessary CSS file

function App() {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <div className="App">
      {/* Review Section */}
      <section className="review-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center text-dark mb-4">Share Your <span className="orange-text">Review</span></h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
                <div className="form-group mb-4">
                  <label htmlFor="review" className="font-weight-bold text-dark">Your Review</label>
                  <textarea
                    name="review"
                    className="form-control border-light"
                    style={{ padding: '25px' }}
                    placeholder="Write your review here..."
                    rows="5"
                    maxLength="500"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    id="review"
                  />
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="cname" className="font-weight-bold text-dark">Your Name</label>
                      <input
                        type="text"
                        className="form-control border-light"
                        style={{ padding: '20px' }}
                        placeholder="Enter your name"
                        name="name"
                        id="cname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="proffession" className="font-weight-bold text-dark">Your Profession</label>
                      <input
                        type="text"
                        className="form-control border-light"
                        style={{ padding: '20px' }}
                        placeholder="Enter your profession"
                        name="profession"
                        id="profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="image" className="font-weight-bold text-dark">Upload Your Picture</label>
                      <input
                        type="file"
                        name="pic"
                        className="form-control border-light text-center"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-orange px-4 py-2 rounded">Submit Review</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Media Partners Carousel */}
      <div className="media-partners-carousel">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo-carousel-inner">
                <div className="single-logo-item">
                  <img src="assets/img/media/news8.png" alt="Media Partner 1" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/media/news2.png" alt="Media Partner 2" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/media/news3.png" alt="Media Partner 3" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/media/news6.png" alt="Media Partner 4" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/media/news7.png" alt="Media Partner 5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About Us</h2>
                <p>We aim to provide high-quality services with integrity and dedication, ensuring satisfaction for all our clients and partners.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>36020, Katurbadam, Rajkot, Gujarat.</li>
                  <li>support@enews.com</li>
                  <li>+00 111 222 3333</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Pages</h2>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.jsp">About</a></li>
                  <li><a href="news.jsp">News</a></li>
                  <li><a href="contact.jsp">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form action="index.html">
                  <input type="email" placeholder="Email" />
                  <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>Copyrights &copy; 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>,  All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 text-right col-md-12">
              <div className="social-icons">
                <ul>
                  <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="#" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
