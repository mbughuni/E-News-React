import { Routes, Route } from "react-router-dom"; 
import Navbar from "./Component/navbar.jsx";
import Home from "./Component/home.jsx";
import MainLayout from "./Component/mainabout.jsx";
import ContactSection from "./Component/contact.jsx";
import Newspage from "./Component/Newspage";
import SingleArticle from "./Component/singlearticle";
import Footer from "./Component/footer.jsx";
import ProfileForm from "./Component/profile.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/about" element={<MainLayout />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/article/:id" element={<SingleArticle />} />
          <Route path="/profile" element={<ProfileForm/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
