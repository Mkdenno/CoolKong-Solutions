import React from "react";
import "./Footer.css";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

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
                <FaLinkedin style={{ margin: "0 .5rem 0 0" }} />
                <FaFacebookSquare style={{ margin: ".5rem" }} />
                <AiFillInstagram style={{ margin: ".5rem" }} />
              </div>
            </div>
          </div>
          <div className="footer-2">
            <p className="footer-header">Company</p>

            <div className="footer-item">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/">Our Services</Link>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
              <li>
                <Link href="/">Partnership</Link>
              </li>
            </div>
          </div>
          <div className="footer-3">
            <p className="footer-header">Support</p>

            <div className="footer-item">
              <li>
                <Link href="/">Support</Link>
              </li>
              <li>
                <Link href="/">Terms of service</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
            </div>
          </div>
          <div className="footer-4">
            <p className="footer-header">Contact</p>
            <div className="footer-item">
              <div className="footer-1-item">
                <img
                  src="./images/location.svg"
                  style={{ margin: "-1rem 0.5rem 0 0" }}
                  alt="ic"
                />
                <p>128 Itire Rd, Lawanson Surulere Lagos, Nigeria</p>
              </div>
              <div className="footer-1-item">
                <img
                  src="./images/call.svg"
                  style={{ margin: "-1rem 0.5rem 0 0" }}
                  alt="ic"
                />
                <p>+234 816 663 7303</p>
              </div>
              <div className="footer-1-item">
                <img
                  src="./images/sms.svg"
                  style={{ margin: "-1rem 0.5rem 0 0" }}
                  alt="ic"
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
