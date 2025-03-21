import Navbar from "../Component/navbar";
import AboutHeader from "./aboutheader";
import ENews from "./about";
import Footer from "./footer";
import './mainlayout.css';

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

      <footer className="main-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
