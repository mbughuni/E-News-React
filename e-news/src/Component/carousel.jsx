import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css"; // External CSS

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const slides = [
    { id: 1, url: "/assets/marathon.jpg", subtitle: "Top Stories", title: "Racing Towards Glory: The Spirit of the Marathon", btnPrimary: { text: "Live Updates", link: "shop.html" }, btnSecondary: { text: "Read More", link: "contact.jsp" } },
    { id: 2, url: "/assets/vr.jpg", subtitle: "Breaking News", title: "latest update on apple vision pro!", btnPrimary: { text: "News Collection", link: "news.jsp" }, btnSecondary: { text: "Contact Us", link: "contact.jsp" } },
    { id: 3, url: "/assets/fire.jpg", subtitle: "You Can Share", title: "fire outbreak in los angeles", btnPrimary: { text: "Write News", link: "shop.html" }, btnSecondary: { text: "Contact Us", link: "contact.jsp" } },
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
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit={direction === "right" ? "exitRight" : "exitLeft"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="carousel-slide"
          >
            <img src={slides[currentIndex].url} alt={slides[currentIndex].title} className="carousel-image" />
            <div className="carousel-overlay">
              <motion.p 
                className="carousel-subtitle"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {slides[currentIndex].subtitle}
              </motion.p>
              <motion.h1 
                className="carousel-title"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {slides[currentIndex].title}
              </motion.h1>
              <div className="carousel-buttons">
                <a href={slides[currentIndex].btnPrimary.link} className="carousel-btn primary">{slides[currentIndex].btnPrimary.text}</a>
                <a href={slides[currentIndex].btnSecondary.link} className="carousel-btn secondary">{slides[currentIndex].btnSecondary.text}</a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={prevSlide} className="carousel-arrow left">
          <ChevronLeft className="arrow-icon" />
        </button>
        <button onClick={nextSlide} className="carousel-arrow right">
          <ChevronRight className="arrow-icon" />
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button 
              key={index} 
              onClick={() => { 
                setDirection(index > currentIndex ? "right" : "left"); 
                setCurrentIndex(index); 
              }} 
              className={`indicator ${index === currentIndex ? "active" : ""}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
