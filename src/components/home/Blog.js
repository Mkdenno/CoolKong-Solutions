import React from 'react';
import { TiMessages } from "react-icons/ti";
import { BiTimeFive } from "react-icons/bi";

import "./Blog.css"

export const Blog = ({title, image, date}) => {
    return (
      <div className="blog-card">
        <div className="blog-card-img">
          <img src={image} alt="blog" />
        </div>

        <div className="blog-card-desc">
          <p>{title}</p>
          <h6>{date}</h6>

          <div className="horizontal-line"></div>
          <div className="blog-extra">
            <div className="blog-message">
              <TiMessages
                style={{ fontSize: "12px", paddingRight: "0.2rem" }}
              />
              <span>5 Comments</span>
            </div>
            <div>
              <BiTimeFive
                style={{ fontSize: "12px", paddingRight: "0.2rem" }}
              />
              <span>5 Minutes</span>
            </div>
          </div>

          <a>READ MORE</a>
        </div>
      </div>
    );
}
