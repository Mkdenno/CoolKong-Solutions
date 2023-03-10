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
            <img src="./images/Logo.png" alt="logo" />

            <div>
              <p>
                We offer a suite of secure & compliant solutions that meets and
                exceeds requirements for small to medium-sized businesses, also
                offering transparent solutions.
              </p>

              <div className="footer-socials">
                <FaLinkedin style={{ margin: ".5rem" }} />
                <FaFacebookSquare style={{ margin: ".5rem" }} />
                <AiFillInstagram style={{ margin: ".5rem" }} />
              </div>
            </div>
          </div>
          <div className="footer-2">
            <p className="footer-header">Company</p>

            <div className="footer-item">
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
                <a>Partnership</a>
              </li>
            </div>
          </div>
          <div className="footer-3">
            <p className="footer-header">Support</p>

            <div className="footer-item">
              <li>Support</li>
              <li>Terms of service</li>
              <li>Privacy Policy</li>
              <li>Career</li>
            </div>
          </div>
          <div className="footer-4">
            <p className="footer-header">Contact</p>
            <div className="footer-item">
              <div className="footer-1-item">
                <img
                  src="./images/location.svg"
                  style={{ margin: "-1rem 0.5rem 0 0" }}
                />
                <p>128 Itire Rd, Lawanson Surulere Lagos, Nigeria</p>
              </div>
              <div className="footer-1-item">
                <img
                  src="./images/call.svg"
                  style={{ margin: "-1rem 0.5rem 0 0" }}
                />
                <p>+234 816 663 7303</p>
              </div>
              <div className="footer-1-item">
                <img
                  src="./images/sms.svg"
                  style={{ margin: "-1rem 0.5rem 0 0" }}
                />
                <p>support@lampnets.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="container bottom">
            <div className="footer-rights">
              <p>&copy;Copyrights by LampNets Solutions</p>
            </div>
            <div className="footer-rights">
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
