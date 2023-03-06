import React from "react";
import "./Product.css";

import { BsArrowRight } from "react-icons/bs";


export const Product = ({ image, title, description }) => {
  return (
    <div className="product-home-card">
      <div className="product-home-img">
        <img src={image} alt="product" />
      </div>

      <div className="product-home-desc">
        <h5>{title}</h5>

        <p>{description}</p>

        <button>Learn more <span> <BsArrowRight style={{fontWeight: "bold"}} /></span> </button>
      </div>
    </div>
  );
};
