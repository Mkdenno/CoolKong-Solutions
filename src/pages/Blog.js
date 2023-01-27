import React from "react";
import "./Blog.css";

import { Reviews } from "../components/Reviews";


export const Blog = () => {
  return (
    <>
      <section className="blogs-header">
        <div className="blog-bg"> </div>
        <div className="blog-header-content">
          <h1>Our Blog</h1>
          <p>RECENT ARTICLES</p>
        </div>
      </section>

      <section className="blogs-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="blogs-list">
                <div className="blog">
                  <div className="blog-img">
                    <img src="./images/food-blog.jpg" alt="food" />
                  </div>

                  <div className="blog-desc">
                    <p>DIGITAL TRANSFORMATION IN THE FOOD INDUSTRY</p>
                    <p>April 25, 2021</p>
                  </div>
                </div>

                <div className="blog-d">
                  <p>
                    From surging demand to fractured supply chains, last year
                    tested the food industry like never before. All the upheaval
                    put digital transformation in the food industry into
                    hyper-drive. Faced with challenges on all fronts, food
                    companies stepped up their digital transformation efforts.
                    They focused on optimizing their processes for maximum
                    efficiency and building resiliency into their supply chains.
                    The goal wasn’t only to survive the pandemic challenge, but
                    to come out stronger and ready for whatever challenge may
                    come next.
                  </p>
                </div>

                <div className="blog-food">
                  <h3>Technology in food services</h3>
                  <p>
                    One of the ideal technologies in the food service industry
                    tends to be ghost or cloud kitchens, inspiring from the
                    effort of saving cost for a physical location.. Accordingly,
                    most restaurants have to open their virtual store in some
                    food delivery apps for adopting with changing customers’
                    desires.
                  </p>
                  <p>
                    In Nigeria however, LampNet solutions has a suite of
                    solutions for the food industry from food ordering to
                    restaurant management, to food delivery, all possessing rich
                    features from organized processes allocation to order
                    management, reservations, stock management, amidst cutting
                    edge innovative features.
                  </p>
                </div>

                <div className="blog-tags">
                  <p>DESIGN</p>
                  <p>BRANDING</p>
                  <p>STATIONERY</p>
                  <p>DEVELOPMENT</p>
                  <p>CONCEPT</p>
                </div>
              </div>

              <div className="blog-comment-no">
                <h2>0 Comments:</h2>
              </div>

              <div className="blog-comment">
                <h2>LEAVE A COMMENT</h2>

                <form className="comment-form">
                  <div className="comment-r-1">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                  </div>

                  <div>
                    <textarea placeholder="Comment"></textarea>
                  </div>

                  <div>
                    <button>POST COMMENT</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-search">
                <form>
                  <input
                    type="text"
                    placeholder="Type what it's on your mind..."
                  />
                </form>
              </div>

              <div className="archive-section">
                <h5>ARCHIVE</h5>
                <p>January 2017</p>
                <p>May 2016</p>
                <p>June 2015</p>
                <p>February 2017</p>
                <p>April 2015</p>
              </div>

              <div className="categories-section">
                <h5>CATEGORIES</h5>
                <p>Business</p>
                <p>Health</p>
                <p>JMotion Graphic</p>
                <p>Concept Design</p>
                <p>Lifestyle</p>
              </div>

              <div className=" tags-section">
                <h5>TAGS</h5>
                <div className="blog-tags">
                  <p>DESIGN</p>
                  <p>ENVATO</p>
                  <p>PHOTOGRAPHY</p>
                  <p>VIDEOS</p>
                  <p>CREATIVE</p>
                  <p>APPS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
};
