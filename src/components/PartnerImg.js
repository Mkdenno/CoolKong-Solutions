import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { partnerImages } from "../products";

export const PartnerImg = ({ slides, isDotsVisible, style }) => {

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
        {partnerImages.map((img) => {
          return (
            <div key={img.img_url}>
              <a href={img.url} target="_blank" style={{outline: "none"}}>
                <img
                  style={{
                    width: img.width,
                    height: "100px",
                  }}
                  src={img.img_url}
                  className="image"
                  alt="partner"
                />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
