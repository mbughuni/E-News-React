import Navbar from "../Component/navbar";
import AboutHeader from "./aboutheader";
import ENews from "./about";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutHeader /> {/* Blue background with orange and white text */}
      <ENews />
      <Footer />
    </div>
  );
};

export default MainLayout;
