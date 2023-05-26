import React from "react";

import "./Blog.css";
import { BsArrowRight } from "react-icons/bs";

export const Blog = ({ title, image, description, category }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <img src={image} alt="blog" />
      </div>

      <div className="blog-card-desc">
        <h6>{category}</h6>
        <h5>{title}</h5>

        <p>{description}</p>

        <button>
          Find out more
          <span>
            <BsArrowRight style={{ fontWeight: "bold", marginLeft: ".5rem" }} />
          </span>
        </button>
      </div>
    </div>
  );
};
