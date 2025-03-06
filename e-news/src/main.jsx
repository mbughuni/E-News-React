import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Uncomment and use the components as needed
// import Navbar from './Component/navbar';
// A
// import Footer from './Component/footer';
// import ProfileDetails from './Component/profile';
// import ProfileForm from './Component/profile';
// import ProfileHeader from './Component/profileheader';
// import DemoCarousel from './Component/indexcoursel';
// import ContactSection from './Component/contact';
// import ENews from './Component/about';
import MainLayout from './Component/mainabout';
// import MainLayout from './Component/mainabout';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}

    {/* <Footer /> */}
    {/* <ProfileForm /> */}
    {/* <ProfileHeader /> */}
    {/* <DemoCarousel /> */}
  {/* <ContactSection></ContactSection> */}
  <MainLayout></MainLayout>
  {/* <Home></Home> */}
  </StrictMode>
);
