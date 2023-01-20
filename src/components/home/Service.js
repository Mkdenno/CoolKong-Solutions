import React from "react";
import "./Service.css"

export const Service = ({ image, title, description }) => {
  return (
    <div className="card-do-item">
      <div className="card-img">
        <img src={image} alt="service-1" />
      </div>

      <div className="card-do-item-desc">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
