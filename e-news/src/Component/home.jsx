// import Navbar from "./navbar.jsx";
import NewsSection from "./newssection.jsx";
import Newspagecard from "./newspagecard.jsx";
// import Footer from "./footer.jsx";
import MoreNews from "./morenews.jsx";
import UserReviews from "./userreview.jsx";
import Carousel from "./carousel.jsx";
import ReviewForm from "./reviewform.jsx";

import "./Home.css"; // ✅ External CSS for better layout and responsiveness

const Home = () => {
  return (
    <div className="home-container">
    

      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel />
      </section>

      {/* News Section */}
      <section className="home-news-section">
        <div className="content-wrapper">
          <NewsSection />
          
        </div>
        <div className="newspagecard-home">
        <Newspagecard />
        </div>
      </section>

      {/* More News Section */}
      <section className="more-news">
        <MoreNews />
      </section>

      {/* User Reviews Section */}
      <section className="reviews-section">
        <UserReviews />
        <ReviewForm />
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
