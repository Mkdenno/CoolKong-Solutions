import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const PartnerImg = ({ slides, isDotsVisible, style, imgWidth }) => {
  const imgBg = {
    height: "500px",
    width: "500px",
  };

  const imgSty = {
    width: imgWidth,
    paddingTop: "1rem",
  };

  var settings = {
    dots: isDotsVisible,
    infinite: true,
    speed: 1000,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={style}>
      <Slider {...settings}>
        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/google.svg"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/HP.svg"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/ibm.svg"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/microsoft.svg"
            className="image"
            alt="partner"
          />
        </div>

        <div style={imgBg}>
          <img
            style={imgSty}
            src="./images/oracle.svg"
            className="image"
            alt="partner"
          />
        </div>
      </Slider>
    </div>
  );
};
