import React, { useEffect, useState } from "react";
import { serviceDesc, services } from "../../../src/products";
import { Blog } from "../../components/blog/Blog";

import "./Home.css";

import { PartnerImg } from "../../components/PartnerImg";
import { BsArrowRight } from "react-icons/bs";
import { SliderLayout } from "../../components/slider/SliderLayout";
import { Product } from "../../components/home/Product";
import { HeroSlider } from "../../components/home/HeroSlider";
import { Link } from "react-router-dom";
import { ROUTES, saveRoute } from "../../constants/constants";

export const Home = () => {
  const [serviceData, setServiceData] = useState(serviceDesc[0]);
  const [activeServiceL, setActiveServiceL] = useState(services[0]);

  useEffect(() => saveRoute("home"), []);
  const handleServiceClick = (id) => {
    for (let i = 0; i < serviceDesc.length; i++) {
      if (serviceDesc[i].id === id) {
        setServiceData(serviceDesc[i]);
      }
    }
  };

  const handleActiveService = (service) => {
    setActiveServiceL(service);
  };

  return (
    <>
      <section className="home-section">
        <HeroSlider />
        <div className="main-header">
          <div className="container">
            <div className="home-section-left">
              <h3>
                No. 1 Pre-built Solution Development Company In West Africa
              </h3>

              <p>
                LampNet Solutions is the leading provider of comprehensive ICT
                services like SAAS, PAAS, IAAS services for all African
                businesses in West Africa.
              </p>

              <div className="hero-btn">
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="partner-home-section">
        <div className="container">
          <PartnerImg
            slides={7}
            isDotsVisible={false}
            style={{
              width: "100%",
              padding: "0 2rem",
            }}
          />
        </div>
      </div>

      <section className="services-home-section">
        <div className="service-home-header">
          <h5>Our services</h5>
          <h3>LampNets Solutions Provides Flexible IT Services</h3>

          <p>
            Our African Technology company strives to provide top-tier IT
            solutions to businesses of all sizes and locations within the
            continent, utilizing African talent
          </p>
        </div>
      </section>

      <section className="service-scrolls-section">
        <div className="container">
          <div className="items-wrapper">
            {services.map((service) => {
              return (
                <div
                  className="service-card"
                  style={{
                    background:
                      activeServiceL.id === service.id ? "#AB0E12" : "#09244B",
                  }}
                  key={service.id}
                  onClick={() => {
                    handleServiceClick(service.id);
                    handleActiveService(service);
                  }}
                >
                  <img src={service.icon} alt="icon" />
                  <p>{service.title}</p>
                  <img
                    src="./images/vuesax.svg"
                    className="icon-direction"
                    alt="icon"
                    style={{
                      transform:
                        activeServiceL.id === service.id
                          ? "rotate(-90deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="service-items">
            <div className="items-left" style={{ width: "35%" }}></div>

            <div style={{ width: "65%" }}>
              <div className="service-cd-desc">
                <h3>{serviceData.title}</h3>
                <p>{serviceData.description}</p>

                <div className="service-ls-desc">
                  <div className="service-ls">
                    {serviceData.icons.map((icon) => {
                      return (
                        <span className="service-cd">
                          <div>
                            <img src={icon.icon} alt="cloud" />{" "}
                          </div>

                          <p>{icon.title}</p>
                        </span>
                      );
                    })}
                  </div>

                  <button>
                    Learn more <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-home-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-home-left">
              <div className="about-img-top-bg"></div>
              <div className="about-img-bottom-bg"></div>
              <img src="./images/about-home-img.png" alt="about" />
            </div>
            <div className="col-md-6 about-home-right">
              <h5>About us</h5>
              <h3>
                We are a one-stop technology solution provider for startups and
                businesses
              </h3>

              <p style={{ paddingTop: "1rem" }}>
                LampNet Solutions is a remote-based agile IT Consulting & Mobile
                Technology Development company in West Africa, who are service
                providers of world-class solutions and mobile technologies for
                high business growth and transformation with vast experience in
                Mobile Application Development, Enterprise solutions, Security
                and Cloud based technologies.
              </p>

              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-home-header">
          <h5>Our Solutions</h5>
          <h3>The Best Solutions From Industry Experts</h3>

          <p>
            LampNets Solutions strives to provide top-tier IT solutions to
            businesses of all sizes and locations from industry experts
          </p>
        </div>

        <Product />
      </section>

      <section className="choose-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 choose-left">
              <h5>Why Choose Us</h5>
              <h3>We Have The Best Team of Development Experts</h3>

              <div className="apeture-wrapper">
                <img src="./images/Circle.svg" alt="arc" />
              </div>
            </div>
            <div className="col-md-6 choose-right">
              <div className="choose-item">
                <div>
                  <img src="./images/communication.svg" alt="" />
                </div>

                <div>
                  <h6>Clear Communication</h6>
                  <p>
                    Our dedicated development team prioritizes your needs to
                    ensure prompt query resolution and effective support for
                    your business and branding objectives.
                  </p>
                </div>
              </div>

              <div className="choose-item">
                <div>
                  <img src="./images/framework.svg" alt="" />
                </div>

                <div>
                  <h6>SaaS Development Framework</h6>
                  <p>
                    With our affordable SaaS development framework and expert
                    app development services, our diverse team members help
                    revolutionize business of any size.
                  </p>
                </div>
              </div>

              <div className="choose-item">
                <div>
                  <img src="./images/shield.svg" alt="" />
                </div>

                <div>
                  <h6>Secure and Scalable Products</h6>
                  <p>
                    We develop scalable web apps using MVC to separate design,
                    data and business logic for improved maintenance,
                    reliability and efficiency.
                  </p>
                </div>
              </div>

              <div className="choose-item">
                <div>
                  <img src="./images/shake.svg" alt="" />
                </div>

                <div>
                  <h6>Customer Centric Approach</h6>
                  <p>
                    At Lampnet Solutions, we employ a consultative approach to
                    discover our clients' journeys and assist in reimagining
                    their businesses for unparalleled success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 partner-home-left">
              <h5>Call for Partners</h5>
              <h3>We believe in today’s rapidly evolving digital landscape</h3>

              <p style={{ padding: "1rem 0 0 0" }}>
                We are constantly seeking out new partnerships with innovative
                companies and individuals who share our vision and values, and
                who are committed to delivering exceptional solutions to our
                clients.
              </p>

              <p>
                Our team of experts is ready to discuss more about our
                partnerships programs and explore how we can collaborate to
                achieve growth and success for our clients.
              </p>

              <button>Partner with us</button>
            </div>
            <div className="col-md-6 partner-home-right">
              <div className="partner-home-img-top-bg"></div>
              <div className="partner-home-img-bottom-bg"></div>
              <img src="./images/partner-home-img.png" alt="partner" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-home-header">
            <h5>Testimonials</h5>
            <h3>We Care About Our Customers Too</h3>

            <p>
              We are proud to share some of the positive feedbacks we have
              received from our satisfied customers who have benefited from our
              services.
            </p>
          </div>

          <section className="testimony-section">
            <div className="container">
              <SliderLayout />
            </div>
          </section>
        </div>
      </section>

      <section className="collaborate-section">
        <div className="collaborate-home-header">
          <h5>Let’s Collaborate</h5>
          <h3>Do You Have a Project Idea in Mind?</h3>

          <p>
            Our team of experts is ready to discuss more about our partnerships
            programs and explore how we can collaborate to achieve growth and
            success for our clients.
          </p>
        </div>

        <div className="collaborate-home-button">
          <button>Discuss with us</button>
        </div>
      </section>

      <section className="blogs-home-section">
        <div className="service-home-header">
          <h5>Recent News</h5>
          <h3>Resources and Insights</h3>

          <p>
            Our African Technology company strives to provide top-tier IT
            solutions to businesses of all sizes and locations within the
            continent, utilizing African talent
          </p>
        </div>

        <div className="container">
          <div className="blogs">
            <Blog
              title="Building your API Stack"
              image="./images/Imageblog-1.png"
              category="Software Engineering"
              description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
            />
            <Blog
              title="Our JS frameworks to use"
              image="./images/Imageblog-2.png"
              category="Product"
              description="JavaScript frameworks make development easy with extensive features and functionalities."
            />
            <Blog
              title="What is Wireframing?"
              image="./images/Imageblog-3.png"
              category="Design"
              description="Introduction to Wireframing and its Principles. Learn from the best in the industry."
            />
          </div>

          <div className="blog-home-button">
            <Link to={`/${ROUTES.blog}`} onClick={() => saveRoute(ROUTES.blog)}>Read all</Link>
          </div>
        </div>
      </section>
    </>
  );
};
