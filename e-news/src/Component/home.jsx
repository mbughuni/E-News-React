
import Navbar from "./navbar.jsx";
import NewsSection from "./newssection.jsx";
import NewsCardSection from "./newcard.jsx";
import Footer from "./footer.jsx";
import MoreNews from "./morenews.jsx";
import UserReviews from "./userreview.jsx";
import Carousel from "./carousel.jsx";
import ReviewForm from "./reviewform.jsx";

import "./NewsSection.css"; 

const Home = () => {
  
  return (
    <div className="relative w-full">
      <Navbar />

      {/* Carousel Section */}
     <Carousel></Carousel>

      {/* News Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <NewsSection />
        <NewsCardSection />
      </div>
      <MoreNews />
      <UserReviews />
      <ReviewForm/>
      <Footer />
    </div>
  );
};

export default Home;
