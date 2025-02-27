import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { FaNewspaper, FaClock, FaShareAlt, FaGlobe } from "react-icons/fa";
import Navbar from "./navbar.jsx";
import NewsSection from "./newssection.jsx";
import NewsCardSection from "./newcard.jsx";

import "./NewsSection.css"; 

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const slides = [
    { id: 1, url: "/assets/2.jpg", subtitle: "Top Stories", title: "Stay Updated with the Latest News", btnPrimary: { text: "Live Updates", link: "shop.html" }, btnSecondary: { text: "Read More", link: "contact.jsp" } },
    { id: 2, url: "/assets/2.jpg", subtitle: "Breaking News", title: "Latest Updates and Headlines", btnPrimary: { text: "News Collection", link: "news.jsp" }, btnSecondary: { text: "Contact Us", link: "contact.jsp" } },
    { id: 3, url: "/assets/3.jpg", subtitle: "You Can Share", title: "Interesting News Around You", btnPrimary: { text: "Write News", link: "shop.html" }, btnSecondary: { text: "Contact Us", link: "contact.jsp" } },
  ];

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 1 },
    hiddenLeft: { x: "-100%", opacity: 1 },
    visible: { x: "0%", opacity: 1 },
    exitRight: { x: "-100%", opacity: 1 },
    exitLeft: { x: "100%", opacity: 1 },
  };

  return (
    <div className="relative w-full">
      <Navbar />

      {/* Carousel Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit={direction === "right" ? "exitRight" : "exitLeft"}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <img src={slides[currentIndex].url} alt={slides[currentIndex].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 p-6">
                <p className="text-lg font-semibold uppercase">{slides[currentIndex].subtitle}</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{slides[currentIndex].title}</h1>
                <div className="flex gap-4 mt-4">
                  <a href={slides[currentIndex].btnPrimary.link} className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">{slides[currentIndex].btnPrimary.text}</a>
                  <a href={slides[currentIndex].btnSecondary.link} className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">{slides[currentIndex].btnSecondary.text}</a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full text-white transition z-10">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full text-white transition z-10">
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => { 
                  setDirection(index > currentIndex ? "right" : "left"); 
                  setCurrentIndex(index); 
                }} 
                className={`w-3 h-3 rounded-full transition ${index === currentIndex ? "bg-white" : "bg-white/50"}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <NewsSection />
        <NewsCardSection /> {/* News Cards integrated here */}
      </div>
    </div>
  );
};

export default Home;
