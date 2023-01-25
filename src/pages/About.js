import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { BiBulb } from "react-icons/bi";
import { AiOutlineChrome } from "react-icons/ai";

import "./About.css";

export const About = () => {
  return (
    <>
      <section className="about-header">
        <div className="header-bg"> </div>
        <div className="header-content">
          <h1>About Us</h1>
          <h4>DIGITAL CREATIVE AGENCY</h4>
        </div>
      </section>

      <section className="us-section">
        <div className="us-left">
          <img src="./images/about-right.jpg" width="100%" />
        </div>
        <div className="us-right">
          <h1>About Us</h1>
          <p>
            LampNet Solutions is an agile software development and consulting
            company. We bring our expertise and competences to bear in the
            implementation and customization of integrated Cloud Solutions, ERP,
            CRM and other business software optimized to exceed customers’
            expectations. We offer a suite of secure & compliant solutions that
            meets and exceeds requirements for small to medium-sized businesses,
            also offering transparent solutions. Our activities are geared
            around three business support pillars namely: Digital
            Transformation, Operational Excellence and Protection Assurance.
          </p>

          <p>
            LampNet Solutions is a private company registered in the Federal
            republic of Nigeria under the Companies and Allied Matter Act 1990.
            It was setup to provide business solutions to small, medium and
            large sized organization. As an independent software vendor and
            partners with the world leading Technology Vendors, we major in the
            delivery of timely and innovative IT solutions and provide IT
            trainings for corporate organizations, institutions, members of
            professional bodies and others. LampNet Solutions is one of the few
            IT solution providers in Africa with a trademark of providing
            world-class solutions in Africa for Africans. We pride in providing
            world class solutions to every African business in Africa.
          </p>

          <div className="play-btn">
            <a>
              <BsFillPlayFill />
            </a>
            <p>WATCH OUR VIDEO</p>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <h4>BRAND, DESIGN AND DIGITAL EXPERTISE</h4>

        <h2>About Lampnet</h2>

        <div className="brands">
          <div className="brand">
            <GiWorld style={{ fontSize: "2rem" }} />

            <h4>Vision</h4>
            <p>
              To be Africa’ s pride in digital business transformation through
              technologyadvancement. Lampnet envisions to be Africa technologies
              for Africans-byAfricans
            </p>
          </div>
          <div className="brand">
            <FiTrendingUp style={{ fontSize: "2rem" }} />

            <h4>Mission</h4>
            <p>
              To provide every African business and people with world-class
              technology solutions to help get the best from technology while
              giving them the ability to do more.
            </p>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <h2>WHY PARTNER</h2>
        <h2>WITH US</h2>

        <div className="partners">
          <div className="partner-col">
            <div className="partner">
              <div className="partner-img">
                <FaReact style={{ fontSize: "2.5rem" }} />
              </div>
              <div className="partner-desc">
                <h4>SPEAK TO A REAL PERSON!</h4>
                <p>
                  No one wants to call a machine about problems with their
                  machines! At Lampnet Solutions, we’ll make sure you speak with
                  a real person to get things figured out as quickly as
                  possible. 98% of all calls from 7:00 AM to 6:00 PM Mondays -
                  Fridays.
                </p>
              </div>
            </div>

            <div className="partner">
              <div className="partner-img">
                <AiOutlineChrome style={{ fontSize: "2.5rem" }} />
              </div>
              <div className="partner-desc">
                <h4>WE PROVIDE BEST /360 DEGREE SUPPORT EXPERIENCE</h4>
                <p>
                  We base our recommendations on what is best for you. Our job
                  is to layout your options, educate you on the pros and cons of
                  each and guide you to make the best, most cost-effective
                  solution for you.
                </p>
              </div>
            </div>

            <div className="partner">
              <div className="partner-img">
                <BiBulb style={{ fontSize: "2.5rem" }} />
              </div>
              <div className="partner-desc">
                <h4>WE PROVIDE ROBUST TECHNOLOGY SOLUTIONS</h4>
                <p>
                  We streamline your business using automation at every point we
                  can. Our goal is complete automation of your technology
                  processes, so we can maximize IT efficiency and minimize
                  problems.
                </p>
              </div>
            </div>
          </div>

          <div className="partner-col">
            <div className="partner">
              <div className="partner-img">
                <FaReact style={{ fontSize: "2.5rem" }} />
              </div>
              <div className="partner-desc">
                <h4>
                  WE ARE A ONE-STOP SHOP FOR ALL YOUR BUSINESS TECHNOLOGY NEEDS
                </h4>
                <p>
                   Unlike many value-added resellers who only specialize in one
                  or two products, we have the expertise to help you manage all
                  of your business technology. This makes us a great fit for
                  businesses who don’t have the resources to hire their own IT
                  staff, or who want to add a little extra muscle to their team.
                </p>
              </div>
            </div>

            <div className="partner">
              <div className="partner-img">
                <AiOutlineChrome style={{ fontSize: "2.5rem" }} />
              </div>
              <div className="partner-desc">
                <h4>WE HAVE DEEP INDUSTRY EXPERTISE</h4>
                <p>
                  While we can apply the knowledge we’ve gained over time to any
                  industry, there are a few we’ve worked in more than others.
                  These include professional services, manufacturing,
                  distribution and logistics, financial services,
                  pharmaceuticals/medical technology and hospitality,
                  particularly franchises.
                </p>
              </div>
            </div>
          </div>

          <div className="partner-col">
            <div className="partner">
              <div className="partner-img">
                <BiBulb style={{ fontSize: "2.5rem" }} />
              </div>
              <div className="partner-desc">
                <h4>ALL-ROUND SOLUTIONS PROVIDER</h4>
                <p>
                  No matter what your technology challenge is, be it cumbersome
                  software that doesn’t work how you hoped, security concerns,
                  boosting efficiency, eliminating errors, or something else
                  entirely, we have the skills and expertise to help you find
                  the solution.
                </p>
              </div>
            </div>

            <div className="partner">
              <div className="partner-img">
                <BiBulb style={{ fontSize: "2.5rem" }} />
              </div>
              <div className="partner-desc">
                <h4>
                  THE LAMPNET TEAM ADOPTS A 100% CUSTOMER-CENTRIC APPROACH.
                </h4>
                <p>We are about what is best for you and your business!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="working-section">
        <div className="working">
          <div className="work">
            <p>884+</p>
            <p>Working Hours</p>
          </div>
          <div className="work">
            <p>170+</p>
            <p>Happy Clients</p>
          </div>
          <div className="work">
            <p>20+</p>
            <p>project</p>
          </div>
          <div className="work">
            <p>247+</p>
            <p>Projects a Year</p>
          </div>
        </div>
      </section>
    </>
  );
};
