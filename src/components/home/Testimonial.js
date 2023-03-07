import React from 'react';
import "./Testimonial.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Testimonial = () => {

    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };


    return (
      <Slider {...settings}>
        <div>
          <div className="testimony-card">
            <div className= "testimony-img">
              <div className="img-wrapper">
                <img src="./images/testimonial-img.png" alt="person" />
              </div>
            </div>

            <div className="testimony-desc">
              <p>
                “Working with Lampnets has been a pleasure. Their team of expert
                developers and designers exceeded our expectations. They were
                exceptional in promptly resolving an IT issue that had remained
                unresolved by previous consultants. We look forward to future
                projects with them”
              </p>
              <h5>Bukola .E. Oluwole</h5>
              <h6>Doxapedia</h6>
            </div>
          </div>
        </div>

        <div>
          <div className="testimony-card">
            <div testimony-img>
              <div className="img-wrapper">
                <img src="./images/testimonial-img.png" alt="person" />
              </div>
            </div>

            <div className="testimony-desc">
              <p>
                “Working with Lampnets has been a pleasure. Their team of expert
                developers and designers exceeded our expectations. They were
                exceptional in promptly resolving an IT issue that had remained
                unresolved by previous consultants. We look forward to future
                projects with them”
              </p>
              <h5>Bure</h5>
              <h6>Doxapedia</h6>
            </div>
          </div>
        </div>
      </Slider>
    );
}

export default Testimonial;