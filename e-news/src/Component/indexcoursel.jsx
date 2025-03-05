import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/A2.jpg" alt="Slide 1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/A3.jpg" alt="Slide 2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/A2.jpg" alt="Slide 3"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;