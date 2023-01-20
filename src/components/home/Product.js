import React from "react";
import "./Product.css";

export const Product = ({ image, title, bgColor }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={image} alt="product" />
      </div>

      <div className="product-desc" style={{background: bgColor}}>
        <h3>{title}</h3>

        <button>READ MORE</button>
      </div>
    </div>
  );
};
