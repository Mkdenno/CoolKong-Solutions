import React, { useState } from "react";
import "./NavBar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const navBarStyle = {
  position: "absolute",
  fontSize: "2rem",
  padding: ".5rem",
  transition: "all 400ms ease-in-out",
  marginTop: "-.8rem",
};

const NavBar = () => {
  const [scroll, setScroll] = useState(0);
  const [icon, setIcon] = useState("./images/arrow-down.svg");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [hideService, setHideService] = useState(false);
  const [hideIndustries, setHideIndustries] = useState(false);
  const [hideProducts, setHideProducts] = useState(false);
  const [hideCompany, setHideCompany] = useState(false);
  const [hidePartnership, setHidePartnership] = useState(false);
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScroll(1);
      setIcon("./images/arrow-down-dark.svg");
    } else {
      setIcon("./images/arrow-down.svg");
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
            <NavLink to="/">
              <img
                src={
                  scroll >= 1 ? "./images/Logo-red.svg" : "./images/Logo.png"
                }
                alt="logo"
                width={100}
              />
            </NavLink>

            <div>
              <ul className={scroll === 0 ? "links" : "links scroll"}>
                <Link
                  onClick={handleClick}
                  className="service-a"
                  onMouseOver={() => {
                    setHideService(!hideService);
                    setHideIndustries(false);
                  }}
                >
                  Services
                  <img
                    src={icon}
                    alt="nav-ic"
                    onMouseOver={() => setHideService(!hideService)}
                    onMouseLeave={() => setHideService(!hideService)}
                  />
                </Link>

                {hideService && (
                  <div
                    className="service-nav-section"
                    onMouseLeave={() => setHideService(!hideService)}
                  >
                    <div>
                      <Link to="/cloud" className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Cloud Solution & Manangement</p>
                      </Link>
                      <Link to="/start-up" className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Startup Scale Up & MVP Development</p>
                      </Link>
                      <Link to="/software-product" className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Software Product Devlopment</p>
                      </Link>
                      <Link to= "/api" className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>API Development & Integration</p>
                      </Link>
                    </div>
                    <div style={{ margin: "0 0 0 2rem" }}>
                      <Link to="/white-label" className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>White Label App Customization</p>
                      </Link>
                      <Link to="/training" className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Training & IT Consultation</p>
                      </Link>
                      <Link to="/design" className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>UI/UX Design</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Outsourcing & Team Augmentation</p>
                      </Link>
                    </div>
                  </div>
                )}

                <Link
                  className="service-a"
                  onClick={handleClick}
                  onMouseOver={() => {
                    setHideIndustries(!hideService);
                    setHideService(false);
                  }}
                >
                  Industries
                  <img
                    src={icon}
                    alt="nav-ic"
                    onMouseOver={() => setHideIndustries(!hideIndustries)}
                    onMouseLeave={() => setHideIndustries(!hideIndustries)}
                  />
                </Link>

                {hideIndustries && (
                  <div
                    className="service-nav-section"
                    onMouseLeave={() => setHideIndustries(!hideIndustries)}
                  >
                    <div>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Food</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Transportation</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Education</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Health & Lifestyle</p>
                      </Link>
                    </div>
                    <div style={{ margin: "0 0 0 2rem" }}>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Banking & Finance</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Productivity</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>E-commerce</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Fintech</p>
                      </Link>
                    </div>
                  </div>
                )}

                <Link
                  className="service-a"
                  onClick={handleClick}
                  onMouseOver={() => setHideProducts(!hideProducts)}
                >
                  Products
                  <img
                    src={icon}
                    alt="nav-ic"
                    onMouseOver={() => setHideProducts(!hideProducts)}
                    onMouseLeave={() => setHideProducts(!hideProducts)}
                  />
                </Link>

                {hideProducts && (
                  <div
                    className="service-nav-section"
                    onMouseLeave={() => setHideProducts(!hideProducts)}
                  >
                    <div>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>UberX Ride Hailing App </p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>OrderX Delivery App</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>CryptoX Trading App</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>School 360 SMS Solution</p>
                      </Link>
                    </div>

                    <div style={{ margin: "0 0 0 2rem" }}>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>TotalX CRM App</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>GrowthX Business Suite App</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>PayX Loan & Investment App</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>HotelX Mangement & POS App</p>
                      </Link>
                    </div>

                    <div style={{ margin: "0 0 0 2rem" }}>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>UberX Taxi Hailing App</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>OrderX Online Store & Delivery App</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>OrderX Online Store & Delivery App</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>OrderX Pharmacy Delivery App</p>
                      </Link>
                    </div>
                  </div>
                )}
                <Link
                  className="service-a"
                  onClick={handleClick}
                  onMouseOver={() => setHideCompany(!hideCompany)}
                  onMouseEnter={() => {
                    setHidePartnership(false);
                    setHideProducts(false);
                  }}
                >
                  Company
                  <img
                    src={icon}
                    alt="nav-ic"
                    onMouseOver={() => setHideCompany(!hideCompany)}
                    onMouseLeave={() => setHideCompany(!hideCompany)}
                  />
                </Link>

                {hideCompany && (
                  <div
                    className="service-nav-section company-s"
                    onMouseLeave={() => setHideCompany(!hideCompany)}
                  >
                    <div>
                      <Link to="./about-us" className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>About Us</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Our Approach </p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Why Choose Us</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Careers</p>
                      </Link>
                    </div>
                  </div>
                )}
                <Link
                  className="service-a"
                  onClick={handleClick}
                  onMouseOver={() => setHidePartnership(!hidePartnership)}
                >
                  Partnership
                  <img
                    src={icon}
                    alt="nav-ic"
                    onMouseOver={() => setHidePartnership(!hidePartnership)}
                    onMouseLeave={() => setHidePartnership(!hidePartnership)}
                  />
                </Link>

                {hidePartnership && (
                  <div
                    className="service-nav-section partner-s"
                    onMouseLeave={() => setHidePartnership(!hidePartnership)}
                  >
                    <div>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Become a Partner</p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Our Partnership Program </p>
                      </Link>
                      <Link className="sv-nav-item">
                        <img src="./images/cloud-setting.svg" alt="ic" />
                        <p>Our Partners</p>
                      </Link>
                    </div>
                  </div>
                )}
                <Link
                  to="/resources"
                  onClick={handleClick}
                  activeClassName="active"
                >
                  Resources
                </Link>
              </ul>
            </div>

            <div className="contact-btn">
              <button>Request a quote</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
