import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const PartnerImg = ({
  slides,
  isDotsVisible,
  style,
  imgWidth
}) => {
  const imgBg = {
    height: "400px",
    width: "500px",
  };

  const imgSty = {
    width: imgWidth,
  };

  var settings = {
    dots: isDotsVisible,
    infinite: true,
    speed: 1000,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div
      style={style}
    >
      <Slider {...settings}>
        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-1.png"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-2.png"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-3.png"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-4.png"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-5.png"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-6.jpeg"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-7.jpeg"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-8.png"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-9.png"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-10.jpeg"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-11.jpeg"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/partner-12.jpeg"
            className="image"
            alt="partner"
          />
        </div>
      </Slider>
    </div>
  );
};
