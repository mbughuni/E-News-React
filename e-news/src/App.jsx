import { Routes, Route, Navigate, useLocation } from "react-router-dom"; 
import Navbar from "./Component/navbar.jsx";
import Home from "./Component/home.jsx";
import MainLayout from "./Component/mainabout.jsx";
import ContactSection from "./Component/contact.jsx";
import Newspage from "./Component/Newspage";
import SingleArticle from "./Component/singlearticle";
import Footer from "./Component/footer.jsx";
import ProfileForm from "./Component/profile.jsx";
import Login from "./Component/login.jsx";
import Register from "./Component/register.jsx";
import AdminRoutes from "./Component/adminroutes";
import ForgotPassword from "./Component/forgotpassword"; // Import the Forgot Password page

function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.startsWith("/admin") || location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="app-container">
      {!hideNavbarFooter && <Navbar />}

      {/* Wrap content inside a scrollable div */}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/about" element={<MainLayout />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/article/:id" element={<SingleArticle />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {!hideNavbarFooter && <Footer />}
    </div>
  );
}


export default App;
