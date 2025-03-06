import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Userreview.css"; // External CSS for styling

const reviews = [
  {
    name: "Saira Hakim",
    role: "Student",
    image: "assets/team-2.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dicta eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    name: "David Niph",
    role: "Engineer",
    image: "assets/team-1.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dicta eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    name: "Jacob Sikim",
    role: "Doctor",
    image: "assets/team-3.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dicta eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
];

const UserReviews = () => {
  return (
    <div className="testimonial-section">
      <div className="container">
        {/* Heading */}
        <div className="text-center">
          <h2 className="section-title">
          <h2 className="section-title">
  <span style={{ color: "black" }}>User</span>
  <span className="orange-text"> Reviews</span> 
  <span style={{ color: "black" }}> Around the World</span>
</h2>

          </h2>
          <p className="section-subtitle">
            Hear what our customers have to say about their experiences.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Show one review at a time
          loop={true} // Infinite loop
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-scroll every 5 seconds
          pagination={{ clickable: true }} // Enable pagination dots
          className="testimonial-slider"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="single-testimonial-slider">
              <div className="client-avater">
                <img src={review.image} alt={review.name} />
              </div>
              <div className="client-meta">
                <h3>
                  {review.name} <span>{review.role}</span>
                </h3>
                <p className="testimonial-body orange-text">“{review.review}”</p>
                <br></br>
                <div className="last-icon">
                  <i className="fas fa-quote-right"></i>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserReviews;
