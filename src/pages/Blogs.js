import React from "react";
import { blogsCategory } from "../BlogsCategory";
import { Blog } from "../components/home/Blog";

import "./Blog.css";


export const Blogs = () => {
  return (
    <>
      <section className="blogs-header-section">
        <div className="container">
          <h2>Resources and Insights</h2>
        </div>
      </section>

      <section className="tags-section">
        <div className="container">
          <div className="tags">
            {blogsCategory.map((category) => (
              <span className="tag"> {category}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="blogs-section">
        <div className="container">
          <div className="blogs">
            <Blog
              title="Building your API Stack"
              image="./images/Imageblog-1.png"
              category="Software Engineering"
              description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
            />
            <Blog
              title="Our JS frameworks to use"
              image="./images/Imageblog-2.png"
              category="Product"
              description="JavaScript frameworks make development easy with extensive features and functionalities."
            />
            <Blog
              title="What is Wireframing?"
              image="./images/Imageblog-3.png"
              category="Design"
              description="Introduction to Wireframing and its Principles. Learn from the best in the industry."
            />

            <Blog
              title="Building your API Stack"
              image="./images/Imageblog-1.png"
              category="Software Engineering"
              description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
            />
            <Blog
              title="Our JS frameworks to use"
              image="./images/Imageblog-2.png"
              category="Product"
              description="JavaScript frameworks make development easy with extensive features and functionalities."
            />
            <Blog
              title="What is Wireframing?"
              image="./images/Imageblog-3.png"
              category="Design"
              description="Introduction to Wireframing and its Principles. Learn from the best in the industry."
            />
          </div>
        </div>
      </section>

      <section className="collaborate-section">
        <div className="collaborate-home-header">
          <h5>Let’s Collaborate</h5>
          <h3>Do You Have a Project Idea in Mind?</h3>

          <p>
            Our team of experts is ready to discuss more about our partnerships
            programs and explore how we can collaborate to achieve growth and
            success for our clients.
          </p>
        </div>

        <div className="collaborate-home-button">
          <button>Discuss with us</button>
        </div>
      </section>
    </>
  );
};
