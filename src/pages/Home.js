import React from "react";
import { products } from "../../src/products";
import { Blog } from "../components/home/Blog";

import "./Home.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PartnerImg } from "../components/PartnerImg";
import { Product } from "../components/home/Product";

export const Home = () => {
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
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerImg
        slides={6}
        isDotsVisible={false}
        padding="4rem 8rem"
        width="100%"
        imgWidth="100px"
      />

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

        <div className="service-items">
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
            <div className="col-md-6">
              <img src="./images/about-home-img.png" alt="about" width="400" />
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
            <div className="col-sm-6 choose-left">
              <h5>Why Choose Us</h5>
              <h3>We Have The Best Team of Development Experts</h3>

              <div className="apeture-wrapper">
                <div className="apeture">
                  <h1>100%</h1>
                  <h5>Customer satisfaction</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 choose-right">
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
            <p>All portfolio</p>
            <p>Food</p>
            <p>Transportation</p>
            <p>Fintech</p>
            <p>Education</p>
            <p>Health & Lifestyle</p>
            <p>Crypto</p>
          </div>

          <div className="product-home-list">
            {products.map((product) => {
              return <Product title={product.title} image={product.image} />;
            })}
          </div>
        </div>
      </section>

      <section className="blogs-section">
        <div>
          <h1 className="prod-header">Our Blogs</h1>
        </div>

        <div className="blogs">
          <Blog
            title="Quality never goes out of style"
            image="./images/blog.jpg"
            date="April 28, 2017"
          />
          <Blog
            title="Maths is easy design is hard"
            image="./images/blog.jpg"
            date="May 9, 2015"
          />
          <Blog
            title="We Are good. Just ask our moms"
            image="./images/blog.jpg"
            date="November 18, 2016"
          />
        </div>
      </section>
    </>
  );
};
