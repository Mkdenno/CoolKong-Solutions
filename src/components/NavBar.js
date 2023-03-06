import React, { useState } from "react";
import "./NavBar.css";
import { FaFacebookF, FaLinkedin, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const navBarStyle = {
  position: "absolute",
  left: "1rem",
  top: "1.5rem",
  fontSize: "1.5rem",
  transition: "all 400ms ease-in-out",
};
const NavBar = () => {
  const [scroll, setScroll] = useState(0);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScroll(1);
    } else {
      setScroll(0);
    }
  });

  return (
    <>
      <nav
        style={{
          backgroundColor: scroll >= 1 ? "white" : "transparent",
        }}
      >
        <div className="nav-bars">
          {click ? (
            <FaTimes
              style={navBarStyle}
              onClick={handleClick}
              color={scroll >= 1 ? "black" : "white"}
            />
          ) : (
            <FaBars
              style={navBarStyle}
              onClick={handleClick}
              color={scroll >= 1 ? "black" : "white"}
            />
          )}
        </div>
        <div className="container">
          <div className="nav-section">
            <img src="./images/Logo.png" alt="logo" width={100} />

            <div>
              <ul
                className={
                  click
                    ? "links active"
                    : scroll >= 1
                    ? "scroll-nav-links"
                    : "links"
                }
              >
                <Link to="/" onClick={handleClick}>
                  Home
                </Link>
                <Link to="/about-us" onClick={handleClick}>
                  About us
                </Link>
                <Link to="/our-services" onClick={handleClick}>
                  Services
                </Link>
                <Link to="/solutions" onClick={handleClick}>
                  Solutions
                </Link>
                <Link to="/news" onClick={handleClick}>
                  News
                </Link>
                <Link to="/partnership" onClick={handleClick}>
                  Partnership
                </Link>
                <Link to="/careers" onClick={handleClick}>
                  Career
                </Link>
              </ul>
            </div>

            <div className="contact-btn">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
