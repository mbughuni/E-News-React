import { Routes, Route, Navigate,  } from "react-router-dom"; 
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
import ForgotPassword from "./Component/forgotpassword"; 
import 'react-toastify/dist/ReactToastify.css';
import EditReviewPage from "./Component/editReviewPage.jsx";
import UpdateProfile from "./Component/UpdateProfile.jsx";
import UserNews from "./Component/useraddedNews.jsx";
import EditNewsPage from "./Component/EditNewsPage.jsx";


function App() {
  return (
    <div className="app-container">
      {/* {!hideNavbarFooter && } */}
      <Navbar />
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
        <Route path="/admin/reviews/edit/:id" element={<EditReviewPage />} />
        <Route path="/edit-profile" element={<UpdateProfile />} />
        <Route path="/user-news" element={<UserNews />} />
        <Route path="/edit-news/:id" element={<EditNewsPage />} />


      </Routes>

      {/* {!hideNavbarFooter && } */}
      <Footer />
    </div>
  );
}

export default App;
