import React, { useEffect, useState } from "react";
import "./SlideLayout.css";

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export const SliderLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = 4000;
  let intervalId = null;

  useEffect(() => {
    intervalId = setInterval(() => {
      handleNextClick();
    }, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handlePrevClick = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const nextSlide = (index) => setCurrentSlide(index)

  return (
    <div className="slider-container">
      <div className="slides-items">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="testimony-card">
              <div className="testimony-desc">
                <h2>"</h2>
                <p>{slide.desc}</p>
                <h5>{slide.name}</h5>
                <h6>{slide.company}</h6>
              </div>

              <div className="testimony-img">
                <img
                  src="./images/testimony-img.png"
                  alt="person"
                  width={300}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-wrapper">
        <div className="pagination">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => nextSlide(index)}
            >
              <span className={index === currentSlide ? "pag show" : "pag"}>
                {" "}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="nav">
        <button className="slider-prev" onClick={handlePrevClick}>
          <span>
            {" "}
            <IoIosArrowRoundBack style={navStyle} />
          </span>
        </button>
        <button className="slider-next" onClick={handleNextClick}>
          <span>
            {" "}
            <IoIosArrowRoundForward
              style={navStyle}
            />{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

const navStyle = { color: "#212121", fontSize: "1.5rem" }

export const slides = [
  {
    desc: "Working with Lampnets has been a pleasure. Their team of expert developers and designers exceeded our expectations. They were exceptional in promptly resolving an IT issue that had remained unresolved by previous consultants. We look forward to future projects with them",
    name: "Bure",
    company: "Doxapedia",
  },
  {
    desc: "Working with Lampnets has been a pleasure. Their team of expert developers and designers exceeded our expectations. They were exceptional in promptly resolving an IT issue that had remained unresolved by previous consultants. We look forward to future projects with them",
    name: "Doro",
    company: "Doxapedia",
  },
  {
    desc: "Working with Lampnets has been a pleasure. Their team of expert developers and designers exceeded our expectations. They were exceptional in promptly resolving an IT issue that had remained unresolved by previous consultants. We look forward to future projects with them",
    name: "Doro",
    company: "Doxapedia",
  },
  {
    desc: "Working with Lampnets has been a pleasure. Their team of expert developers and designers exceeded our expectations. They were exceptional in promptly resolving an IT issue that had remained unresolved by previous consultants. We look forward to future projects with them",
    name: "Doro",
    company: "Doxapedia",
  },
];
