import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {
  PRODUCT_ROUTES,
  ROUTES,
  getRoute,
  navIcons,
  saveRoute,
} from "../constants/constants";

const lightShadow = "rgba(0, 0, 0, 0.08) 0px 4px 12px";

const NavBar = () => {
  const [scroll, setScroll] = useState(0);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [route, setRoute] = useState("");
  const [navbarStyles, setNavbarStyles] = useState({
    navColor: "white",
    dropDownIcon: navIcons.lightIcon,
    backgroundColor: "transparent",
    navLogo: navIcons.whiteLogo,
    boxShadow: "none",
  });
  const [btnColor, setBtnColor] = useState("#AB0E12");
  const [hideService, setHideService] = useState(false);
  const [hideIndustries, setHideIndustries] = useState(false);
  const [hideProducts, setHideProducts] = useState(false);
  const [hideCompany, setHideCompany] = useState(false);
  const [hidePartnership, setHidePartnership] = useState(false);

  useEffect(() => {
    setRoute(getRoute());
    setNavButtonColor();
    route === ROUTES.home
      ? changeToLightColors()
      : changeToDarkColors("transparent", "none");
  }, [route]);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScroll(1);
      changeToDarkColors("white", lightShadow);
    } else {
      setScroll(0);
      route === ROUTES.home
        ? changeToLightColors()
        : changeToDarkColors("transparent", "none");
    }
  });

  const saveRouteState = (routes) => {
    saveRoute(routes);
    setRoute(routes);
    setNavButtonColor();
  };

  const changeToDarkColors = (bgColor, shadow) => {
    setNavbarStyles({
      navColor: "black",
      dropDownIcon: navIcons.darkIcon,
      backgroundColor: bgColor,
      navLogo: navIcons.darkLogo,
      boxShadow: shadow,
    });
  };

  const changeToLightColors = () => {
    setNavbarStyles({
      navColor: "white",
      dropDownIcon: navIcons.lightIcon,
      backgroundColor: "transparent",
      navLogo: navIcons.whiteLogo,
      boxShadow: "none",
    });
  };

  const setNavButtonColor = () => {
    switch (route) {
      case PRODUCT_ROUTES.courier:
        setBtnColor("#54BD95");
        break;
      case PRODUCT_ROUTES.foodx:
        setBtnColor("#F6613F");
        break;
      case PRODUCT_ROUTES.medx:
        setBtnColor("#3E83EA");
        break;
      case PRODUCT_ROUTES.estatex:
        setBtnColor("#222222");
        break;
      case PRODUCT_ROUTES.fintech360:
        setBtnColor("#453787");
        break;
      case PRODUCT_ROUTES.thriftx:
        setBtnColor("#E47E1F");
        break;
      case PRODUCT_ROUTES.workspaceX:
        setBtnColor("#1628F4");
        break;
      default:
        setBtnColor("#AB0E12");
    }
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: navbarStyles.backgroundColor,
          boxShadow: navbarStyles.boxShadow,
          transition: "all 400ms ease-in-out",
        }}
      >
        <div className="nav-bars">
          <button style={{ padding: "2rem" }} onClick={handleClick}>
            {click ? (
              <FaTimes color={scroll >= 1 ? "black" : "white"} />
            ) : (
              <FaBars color={scroll >= 1 ? "black" : "white"} />
            )}
          </button>
        </div>

        <div className="container">
          <div className="nav-section">
            <NavLink to="/" onClick={() => saveRouteState(ROUTES.home)}>
              <img
                src={navbarStyles.navLogo}
                alt="logo"
                width={100}
                onClick={() => saveRouteState(ROUTES.home)}
              />
            </NavLink>

            <div className="nav-right">
              <div>
                <ul className={scroll === 0 ? "links" : "links scroll"}>
                  <Link
                    className="service-a"
                    onMouseOver={() => {
                      setHideService(!hideService);
                      setHideIndustries(false);
                    }}
                    style={{
                      color: navbarStyles.navColor,
                    }}
                  >
                    Services
                    <img
                      src={navbarStyles.dropDownIcon}
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
                        <Link
                          to="/cloud"
                          className="sv-nav-item"
                          onClick={() => saveRouteState(ROUTES.cloud)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Cloud Solution & Manangement</p>
                        </Link>
                        <Link
                          to="/start-up"
                          className="sv-nav-item"
                          onClick={() => saveRouteState(ROUTES.startUp)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Startup Scale Up & MVP Development</p>
                        </Link>
                        <Link
                          to="/software-product"
                          className="sv-nav-item"
                          onClick={() => saveRouteState(ROUTES.softwareProd)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Software Product Devlopment</p>
                        </Link>
                        <Link
                          to="/api"
                          className="sv-nav-item"
                          onClick={() => saveRouteState(ROUTES.api)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>API Development & Integration</p>
                        </Link>
                      </div>
                      <div style={{ margin: "0 0 0 2rem" }}>
                        <Link
                          to="/white-label"
                          className="sv-nav-item"
                          onClick={() => saveRouteState(ROUTES.whiteLabel)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>White Label App Customization</p>
                        </Link>
                        <Link
                          to="/training"
                          className="sv-nav-item"
                          onClick={() => saveRouteState(ROUTES.training)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Training & IT Consultation</p>
                        </Link>
                        <Link
                          to="/design"
                          className="sv-nav-item"
                          onClick={() => saveRouteState(ROUTES.ui)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>UI/UX Design</p>
                        </Link>
                        <Link
                          to="/staff"
                          className="sv-nav-item"
                          onClick={() => saveRouteState(ROUTES.staff)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Outsourcing & Team Augmentation</p>
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link
                    className="service-a"
                    onClick={() => {
                      saveRouteState(ROUTES.industries);
                    }}
                    onMouseOver={() => {
                      setHideIndustries(!hideService);
                      setHideService(false);
                    }}
                    style={{
                      color: navbarStyles.navColor,
                    }}
                  >
                    Industries
                    <img
                      src={navbarStyles.dropDownIcon}
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
                    onClick={() => {
                      saveRouteState(ROUTES.products);
                    }}
                    onMouseOver={() => setHideProducts(!hideProducts)}
                    style={{
                      color: navbarStyles.navColor,
                    }}
                  >
                    Products
                    <img
                      src={navbarStyles.dropDownIcon}
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
                        <Link
                          className="sv-nav-item"
                          to={`/${PRODUCT_ROUTES.courier}`}
                          onClick={() => saveRouteState(PRODUCT_ROUTES.courier)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Courriex App</p>
                        </Link>
                        <Link
                          className="sv-nav-item"
                          to={`/${PRODUCT_ROUTES.fintech360}`}
                          onClick={() =>
                            saveRouteState(PRODUCT_ROUTES.fintech360)
                          }
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Fintech 360 App</p>
                        </Link>
                        <Link
                          className="sv-nav-item"
                          to={`/${PRODUCT_ROUTES.school360}`}
                          onClick={() =>
                            saveRouteState(PRODUCT_ROUTES.school360)
                          }
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>School 360 Solution</p>
                        </Link>
                      </div>

                      <div style={{ margin: "0 0 0 2rem" }}>
                        <Link className="sv-nav-item">
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>TotalX CRM App</p>
                        </Link>
                        <Link
                          className="sv-nav-item"
                          to={`/${PRODUCT_ROUTES.workspaceX}`}
                          onClick={() => saveRouteState(PRODUCT_ROUTES.workspaceX)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Co-WorkspaceX App</p>
                        </Link>
                        <Link
                          className="sv-nav-item"
                          to={`/${PRODUCT_ROUTES.estatex}`}
                          onClick={() => saveRouteState(PRODUCT_ROUTES.estatex)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>EstateX App</p>
                        </Link>
                        <Link className="sv-nav-item">
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>HotelX Mangement & POS App</p>
                        </Link>
                      </div>

                      <div style={{ margin: "0 0 0 2rem" }}>
                        <Link
                          className="sv-nav-item"
                          to={`/${PRODUCT_ROUTES.thriftx}`}
                          onClick={() => saveRouteState(PRODUCT_ROUTES.thriftx)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>ThriftX App</p>
                        </Link>
                        <Link className="sv-nav-item">
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>OrderX Online Store & Delivery App</p>
                        </Link>
                        <Link
                          to={`/${PRODUCT_ROUTES.foodx}`}
                          className="sv-nav-item"
                          onClick={() => saveRouteState(PRODUCT_ROUTES.foodx)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>Foodx App</p>
                        </Link>
                        <Link
                          to={`/${PRODUCT_ROUTES.medx}`}
                          className="sv-nav-item"
                          onClick={() => saveRouteState(PRODUCT_ROUTES.medx)}
                        >
                          <img src="./images/cloud-setting.svg" alt="ic" />
                          <p>OrderX Pharmacy Delivery App</p>
                        </Link>
                      </div>
                    </div>
                  )}
                  <Link
                    className="service-a"
                    onClick={() => {
                      saveRouteState(ROUTES.company);
                    }}
                    onMouseOver={() => setHideCompany(!hideCompany)}
                    onMouseEnter={() => {
                      setHidePartnership(false);
                      setHideProducts(false);
                    }}
                    style={{
                      color: navbarStyles.navColor,
                    }}
                  >
                    Company
                    <img
                      src={navbarStyles.dropDownIcon}
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
                        <Link
                          to="./about-us"
                          className="sv-nav-item"
                          onClick={() => {
                            saveRouteState(ROUTES.aboutUs);
                          }}
                        >
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
                    onClick={() => {
                      saveRouteState(ROUTES.partnership);
                    }}
                    onMouseOver={() => setHidePartnership(!hidePartnership)}
                    style={{
                      color: navbarStyles.navColor,
                    }}
                  >
                    Partnership
                    <img
                      src={navbarStyles.dropDownIcon}
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
                    onClick={() => {
                      saveRouteState(ROUTES.resources);
                    }}
                    activeClassName="active"
                    style={{
                      color: navbarStyles.navColor,
                    }}
                  >
                    Resources
                  </Link>
                </ul>
              </div>

              <div className="contact-btn">
                <button
                  style={{
                    backgroundColor: btnColor,
                  }}
                >
                  Request a quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
