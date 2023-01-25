import React, {useState} from 'react';
import "./NavBar.css"
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [scroll, setScroll] = useState(0);

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
          <div className="container">
            <div className="nav-section">
              <img src="./images/logo.png" alt="logo" width={50} />

              <div>
                <ul className={scroll >= 1 ? "scroll-nav-links" : "links"}>
                  <Link to="/">HOME</Link>
                  <Link to="/about-us">ABOUT</Link>
                  <Link to="/our-products">OUR PRODUCTS</Link>
                  <Link to="/our-services">OUR SERVICES</Link>
                  <Link>BLOG</Link>
                  <Link>PARTNERSHIP PROGRAM</Link>
                  <Link>CAREER</Link>
                  <Link>CONTACT US</Link>
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
}

export default NavBar;