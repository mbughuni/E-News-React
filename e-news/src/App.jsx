import { Routes, Route } from "react-router-dom"; // ✅ No need for BrowserRouter here
import Navbar from "./Component/navbar.jsx";
import Home from "./Component/home.jsx";
import MainLayout from "./Component/MainAbout";
import ContactSection from "./Component/Contact";
import Newspage from "./Component/Newspage";

function App() {
  return (
    <> {/* ✅ Remove <Router>, keep only Routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/about" element={<MainLayout />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </>
  );
}

export default App;
