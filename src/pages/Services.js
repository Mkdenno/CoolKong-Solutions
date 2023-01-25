import React from "react";
import "./Services.css";

import { RiFlaskLine } from "react-icons/ri";
import { FiTrendingUp } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { SlLayers } from "react-icons/sl";
import { BsTrophy } from "react-icons/bs";
import Reviews from "../components/Reviews";

export const Services = () => {
  return (
    <>
      <section className="services-header">
        <div className="service-bg"> </div>
        <div className="service-header-content">
          <h1>Our Services</h1>
        </div>
      </section>

      <section className="intro-service">
        <div className="intro-content">
          <p>
            Lampnet Institute of Technology(LIT) is the EdTech arm of Lampnet
            Solutions which is a NvffLampnet Institute of Technology(LIT)
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-list">
          <div className="service">
            <div className="service-img">
              <RiFlaskLine style={{ fontSize: "3rem", color: "#3949ab" }} />
            </div>
            <div className="service-desc">
              <h4>IT Training</h4>
              <p>
                Lampnet Institute of Technology(LIT) is the EdTech arm of
                Lampnet Solutions which is a Nigerian software based solution
                and consultancy company known for providing world class
                Solutions tailored to meet the on-demand mobile and cloud
                service need of various clients in Nigeria.…
              </p>
            </div>
          </div>

          <div className="service">
            <div className="service-img">
              <FaLaptop style={{ fontSize: "3rem", color: "#3949ab" }} />
            </div>
            <div className="service-desc">
              <h4>Website Development</h4>
              <p>
                Lampnet Institute of Technology(LIT) is the EdTech arm of
                Lampnet Solutions which is a Nigerian software based solution
                and consultancy company known for providing world class
                Solutions tailored to meet the on-demand mobile and cloud
                service need of various clients in Nigeria.
              </p>
            </div>
          </div>

          <div className="service">
            <div className="service-img">
              <SlLayers style={{ fontSize: "3rem", color: "#3949ab" }} />
            </div>
            <div className="service-desc">
              <h4>IT services</h4>
              <p>
                The Business world today requires innovative concepts and
                solutions in order to meet the diverse changing needs of
                businesses and customers across the world. We are focused on
                bringing to life cutting edge digital ideas and strategies that
                would be a landmark
              </p>
            </div>
          </div>
        </div>

        <div className="services-list">
          <div className="service">
            <div className="service-img">
              <FiTrendingUp style={{ fontSize: "3rem", color: "#3949ab" }} />
            </div>
            <div className="service-desc">
              <h4>Proactive Strategies</h4>
              <p>
                Designing a good website that accommodates a lot of content is a
                tricky balancing act to pull off.
              </p>
            </div>
          </div>

          <div className="service">
            <div className="service-img">
              <CiSettings style={{ fontSize: "3rem", color: "#3949ab" }} />
            </div>
            <div className="service-desc">
              <h4>Easy Customization</h4>
              <p>
                We build mobile apps for the conference, integrating unique
                content and branding to create.
              </p>
            </div>
          </div>

          <div className="service">
            <div className="service-img">
              <BsTrophy style={{ fontSize: "3rem", color: "#3949ab" }} />
            </div>
            <div className="service-desc">
              <h4>Agro Services</h4>
              <p>
                Lampnet Solution has become one of the top agency that now
                builds brands. Over the years, we have formed relationships with
                a diverse and vast clientele. From dabbling in various aspects
                of media and marketing, we now create solutions and trends
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strategic-section">
        <div className="strategic-bg">

          <div className="strategic-desc">
            <h2>Strategic Digital Solutions</h2>

            <button>START A PROJECT</button>
          </div>

        </div>
      </section>

      <Reviews />
    </>
  );
};

export default Services;
