import React from "react";
import "./Footer.css";
import { ImLocation2 } from "react-icons/im";
import { BiMobileAlt } from "react-icons/bi";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <section className="footer-section">
      <footer>
        <div className="top-footer container">
          <div className="footer-1">
            <img src="./images/logo.png" alt="logo" />

            <div className="footer-item">
              <div className="footer-1-item">
                <ImLocation2 style={{ margin: "0.2rem 0.5rem 0 0" }} />
                <p>128 Itire Rd, Lawanson Surulere Lagos, Nigeria</p>
              </div>
              <div className="footer-1-item">
                <BiMobileAlt style={{ margin: "0.2rem 0.5rem 0 0" }} />
                <p>+234 816 663 7303</p>
              </div>
              <p>support@lampnets.com</p>
            </div>
          </div>
          <div className="footer-2">
            <p className="footer-header">LINKS</p>

            <div className="footer-item">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Our Services</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Partnership Programmes</a>
              </li>
            </div>
          </div>
          <div className="footer-3">
            <p className="footer-header">WORKING DAYS</p>

            <div className="footer-item">
              <li>Monday - Friday 8:00am-16:00pm</li>
              <li>Saturday 10:00am - 14:00pm</li>
              <li>Sunday 9:00am - 12:00pm</li>
            </div>
          </div>
          <div className="footer-4">
            <p className="footer-header">POPULAR TAGS</p>
            <div className="tags">
              <p className="tag">Minimal</p>
              <p className="tag">One Page</p>
              <p className="tag">Design</p>
              <p className="tag">Creative</p>
              <p className="tag">Apps</p>
              <p className="tag">Development</p>
              <p className="tag">Tips</p>
              <p className="tag">Responsive</p>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="container bottom">
            <div className="footer-socials">
              <FaLinkedin style={{ margin: ".5rem" }} />
              <FaFacebookSquare style={{ margin: ".5rem" }} />
              <AiFillInstagram style={{ margin: ".5rem" }} />
            </div>
            <div className="footer-rights">
              <p>&copy;2023 Lampnets All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
