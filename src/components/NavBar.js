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
            <img src="./images/logo.png" alt="logo" width={50} />

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
                  HOME
                </Link>
                <Link to="/about-us" onClick={handleClick}>
                  ABOUT
                </Link>
                <Link to="/our-products" onClick={handleClick}>
                  OUR PRODUCTS
                </Link>
                <Link to="/our-services" onClick={handleClick}>
                  OUR SERVICES
                </Link>
                <Link to="/blogs" onClick={handleClick}>
                  BLOG
                </Link>
                <Link to="/partnership" onClick={handleClick}>
                  PARTNERSHIP PROGRAM
                </Link>
                <Link to="/careers" onClick={handleClick}>
                  CAREER
                </Link>
                <Link to="/contact-us" onClick={handleClick}>
                  CONTACT US
                </Link>
              </ul>
            </div>

            <div className="nav-socials">
              <a>
                <FaFacebookF
                  fontSize={10}
                  color={scroll >= 1 ? "black" : "white"}
                />
              </a>
              <a>
                <FaLinkedin
                  fontSize={10}
                  color={scroll >= 1 ? "black" : "white"}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
