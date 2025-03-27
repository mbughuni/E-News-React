import Navbar from "./navbar.jsx";
import Newspagecard from "./newspagecard.jsx";
// import Footer from "./footer.jsx";
import WriteNews from "./writenews.jsx";
import './newspage.css'; // Create a separate CSS file for this page

const Newspage = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <div className="container-text">
        <h2>News Article</h2>
      </div>

      {/* News Section */}
      
        <Newspagecard />
    

      {/* Write News Section */}
     
        <WriteNews />
     

      {/* <Footer /> */}
    </div>
  );
};

export default Newspage;
