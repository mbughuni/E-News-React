import Navbar from "../Component/navbar";
import AboutHeader from "./aboutheader";
import ENews from "./about";
import './mainlayout.css';
import UserReviews from "./userreview.jsx";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="main-header">
        <Navbar />
      </header>

      <section className="main-about-header">
        <AboutHeader />
      </section>

      <section className="main-news">
        <ENews />
      </section>
      <section className="reviews-section">
        <UserReviews />
        
      </section>
      

     
    </div>
  );
};

export default MainLayout;
