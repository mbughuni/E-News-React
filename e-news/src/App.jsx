import { Routes, Route } from "react-router-dom"; 
import Navbar from "./Component/navbar.jsx";
import Home from "./Component/home.jsx";
import MainLayout from "./Component/MainAbout";
import ContactSection from "./Component/Contact";
import Newspage from "./Component/Newspage";
import SingleArticle from "./Component/singlearticle";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/about" element={<MainLayout />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/article/:id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
