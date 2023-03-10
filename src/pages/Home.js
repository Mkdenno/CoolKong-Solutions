import React, { useState } from "react";
import { products } from "../../src/products";
import { Blog } from "../components/home/Blog";

import "./Home.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PartnerImg } from "../components/PartnerImg";
import { Product } from "../components/home/Product";
import Testimonial from "../components/home/Testimonial";

export const Home = () => {
  const [data, setData] = useState(products);
  const [color, setColor] = useState("black");

  const filterCategories = (item) => {
    const result = products.filter((curr) => {
      return curr.category === item;
    });

    if (item === "All") setData(products);
    else setData(result);
  };

  const onChangeClick = (item) => {};

  return (
    <>
      <section className="home-section">
        <div className="main-header">
          <div className="container">
            <div className="home-section-left">
              <h3>
                No. 1 Agile Software development and Tech Consultation Company
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
            slides={5}
            isDotsVisible={false}
            imgWidth="100px"
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
          <h3>What We Offer</h3>

          <p>
            Our African Technology company strives to provide top-tier IT
            solutions to businesses of all sizes and locations within the
            continent, utilizing African talent
          </p>
        </div>

        <div className="container service-items">
          <div className="service-item">
            <img src="./images/cloud-server.svg" alt="cloud" />

            <h5>Cloud Strategy</h5>
            <p>
              We provide strategies and processes such as cloud infrastructure
              and software for managing and maximizing technology performance
            </p>
          </div>

          <div className="service-item">
            <img src="./images/award-star.svg" alt="award" />

            <h5>Training and Consultation</h5>
            <p>
              We provide expert advice, data analytics, and business educational
              services to individuals and organizations seeking improvement.
            </p>
          </div>

          <div className="service-item">
            <img src="./images/mobile-settings.svg" alt="mobile" />

            <h5>Mobile App Development</h5>
            <p>
              We design and build cross-platform software applications for
              various industries from food, pharmacy, transport etc
            </p>
          </div>
        </div>
      </section>

      <section className="about-home-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-home-left">
              <div className="about-img-bg"></div>
              <img src="./images/about-home-img.png" alt="about" />
            </div>
            <div className="col-md-6 about-home-right">
              <h5>About us</h5>
              <h3>
                We are experts in Digital transformation and Protection
                Assurance
              </h3>

              <p style={{ paddingTop: "1rem" }}>
                Lampnet Solutions is a customer-centric cutting-edge technology
                service provider of World-Class Solutions for high business
                growth and transformation with experience in Mobile Application
                development, Security and Cloud based technologies.
              </p>

              <p>
                We are an agile software development and consulting company. We
                bring our expertise and competences to bear in the
                implementation and customization of integrated Cloud Solutions,
                ERP, CRM and other business software optimized to exceed
                customers’ expectations.
              </p>

              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="choose-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 choose-left">
              <h5>Why Choose Us</h5>
              <h3>We Have The Best Team of Development Experts</h3>

              <div className="apeture-wrapper">
                <img src="./images/arc.svg" alt="arc" />
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

      <section className="portfolio-section">
        <div className="portfolio-home-header">
          <h5>Our portfolio</h5>
          <h3>What We Offer</h3>

          <p>
            Our African Technology company strives to provide top-tier IT
            solutions to businesses of all sizes and locations within the
            continent, utilizing African talent
          </p>
        </div>

        <div className="container">
          <div className="product-home-header">
            <p onClick={() => filterCategories("All")} style={{ color: color }}>
              All portfolio
            </p>
            <p
              onClick={() => filterCategories("Food")}
              style={{ color: color }}
            >
              Food
            </p>
            <p
              onClick={() => filterCategories("Transportation")}
              style={{ color: color }}
            >
              Transportation
            </p>
            <p
              onClick={() => filterCategories("Fintech")}
              style={{ color: color }}
            >
              Fintech
            </p>
            <p
              onClick={() => filterCategories("Education")}
              style={{ color: color }}
            >
              Education
            </p>
            <p
              onClick={() => filterCategories("Health & Lifestyle")}
              style={{ color: color }}
            >
              Health & Lifestyle
            </p>
            <p
              onClick={() => filterCategories("Crypto")}
              style={{ color: color }}
            >
              Crypto
            </p>
          </div>

          <div className="product-home-list">
            {data.map((product) => {
              return (
                <Product
                  title={product.title}
                  image={product.image}
                  description={product.description}
                />
              );
            })}
          </div>

          <div className="product-home-button">
            <button>View all</button>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-home-header">
            <h5>Testimonials</h5>
            <h3>Hear from Our Customers and Partners</h3>

            <p>
              Our African Technology company strives to provide top-tier IT
              solutions to businesses of all sizes and locations within the
              continent, utilizing African talent
            </p>
          </div>

          <div>
            <Testimonial />
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
              <div className="partner-home-img-bg"></div>
              <img src="./images/partner-home-img.png" alt="partner" />
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-section">
        <div className="service-home-header">
          <h5>Our Blog</h5>
          <h3>Resources and Insights</h3>

          <p>
            Our African Technology company strives to provide top-tier IT
            solutions to businesses of all sizes and locations within the
            continent, utilizing African talent
          </p>
        </div>

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
      </section>
    </>
  );
};
