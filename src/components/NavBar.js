import React, { useState } from "react";
import "./NavBar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const navBarStyle = {
  position: "absolute",
  fontSize: "2rem",
  padding: '.5rem',
  transition: "all 400ms ease-in-out",
  marginTop: '-.8rem'
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
          boxShadow: scroll >= 1 ? "rgba(0, 0, 0, 0.08) 0px 4px 12px" : "none",
          transition: "all 400ms ease-in-out",
        }}
      >
        <div className="nav-bars">
          <button style={{ padding: "2rem" }} onClick={handleClick}>
            {click ? (
              <FaTimes
                style={navBarStyle}
                color={scroll >= 1 ? "black" : "white"}
              />
            ) : (
              <FaBars
                style={navBarStyle}
                color={scroll >= 1 ? "black" : "white"}
              />
            )}
          </button>
        </div>

        <div className="container">
          <div className="nav-section">
            <img
              src={scroll >= 1 ? "./images/Logo-red.svg" : "./images/Logo.png"}
              alt="logo"
              width={100}
            />

            <div>
              <ul
                className={
                   scroll === 0
                    ? "links": "links scroll"
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
