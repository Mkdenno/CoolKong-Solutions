import React, { useEffect, useState } from 'react';
import "./HeroSlider.css"

export const HeroSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const autoSlideInterval = 4000;
    let intervalId = null;

    useEffect(() => {
      intervalId = setInterval(() => {
        handleNextClick();
      }, autoSlideInterval);

      return () => clearInterval(intervalId);
    }, [currentSlide]);


    const handleNextClick = () => {
      setCurrentSlide((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };

    const nextSlide = (index) => setCurrentSlide(index);

    return (
      <>
        <div className="slider-h-container">
          <div className="slides-h-items">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={index === currentSlide ? "slide-h active" : "slide-h"}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
            
                <div className='hero-img-container'> 
                    <img src={slide} alt="hero-img" />
                </div>
              </div>
            ))}
          </div>

          <div className="pagination-h-wrapper">
            <div className="pagination-h">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className={index === currentSlide ? "active" : ""}
                  onClick={() => nextSlide(index)}
                >
                  <span className={index === currentSlide ? "pag-h show" : "pag-h"}>
                    {" "}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

const slides = [
  "./images/hero-img.png",
  "./images/hero-about.png",
  "./images/accounting.jpg",
];