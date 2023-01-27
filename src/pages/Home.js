import React, { useEffect, useState } from "react";
import { BriefItem } from "../components/home/BriefItem";
import { Product } from "../components/home/Product";
import { Service } from "../components/home/Service";
import { products } from "../../src/products";
import { Blog } from "../components/home/Blog";

import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbCapture } from "react-icons/tb";

import "./Home.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Reviews } from "../components/Reviews";

export const Home = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    setBackgroundColor();
  }, []);

  const setBackgroundColor = () => {
    const colors = ["#EF473ACC", "#5E35B1CC", "#1DE9B6CC"];

    let prods = [];

    for (let i = 0; i < products.length; i++) {
      prods.push({
        title: products[i].title,
        image: products[i].image,
        bgColor: colors[i % 3],
      });
      setProd(prods);
    }
  };

  return (
    <>
      <section className="home-section">
        <div className="main-header">
          <div className="container">
            <div className="home-section-left">
              <h3>
                No. 1 Mobile Application Development Company In West Africa.
              </h3>

              <p>
                LampNet provides SAAS, PAAS, IAAS services for African
                businesses of all sizes
              </p>

              <div className="prod-btn">
                <a>LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-left">
          <p>ABOUT LAMPNETS</p>
          <h2>Who We Are</h2>
          <p>
            Lampnet Solutions is a customer-centric cutting-edge technology
            service provider of World-Class Solutions for high business growth
            and transformation with experience in Mobile Application
            development, Security and Cloud based technologies. LampNet
            Solutions is an agile software development and consulting company.
            We bring our expertise and competences to bear in the implementation
            and customization of integrated Cloud Solutions, ERP, CRM and other
            business software optimized to exceed customers’ expectations. We
            offer a suite of secure & compliant solutions that meets and exceeds
            requirements for small to medium-sized businesses, also offering
            transparent solutions. Our activities are geared around three
            business support pillars namely: Digital Transformation, Operational
            Excellence and Protection Assurance.
          </p>
          <a>READ MORE</a>
        </div>
        <div className="about-section-right">
          <img src="./images/about-right.jpg" width="100%" />
        </div>
      </section>

      <section className="brief-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <BriefItem
                title="World-Class Solution Delivery"
                description="We are partners with the world leading Technology Vendors, which
                    includes Google, Microsoft, IBM, HP, Oracle and Eccouncil. We are
                    that African technology company that believes every African business
                    despite its size or location deserves a world-class IT solution
                    developed by Africans for Africans."
              />

              <BriefItem
                title="Clear Communication"
                description="Our development team is friendly. They make sure that your queries get resolved as soon you escalate. we are commited to support and hail your branding and business objectives in the most efficient manner possible."
              />

              <BriefItem
                title="Transformational Business Support"
                description="Our activities are geared around three business support pillars namely Digital Transformation, operational Excellence and Protection Assurance."
              />

              <BriefItem
                title="Secure and Scalable Products"
                description="Web applications that we build are easy to manage and scale. Our team utilized MVC framework to segregated design and data from actual business logic"
              />
            </div>
            <div className="col-md-6">
              <BriefItem
                title="100% CLIENT SATISFACTION"
                description="Till date, we have developed and deployed projects of varying sizes for our esteemed clients across diverse industry vercals. We manage to have 97.96% client retention RATE"
              />

              <BriefItem
                title="SAAS MODEL OF DEVELOPMENT"
                description="We are one of the few technology firm working on a Saas development framework. It helps small businesses who can’t afford investment to get their app developed"
              />

              <BriefItem
                title="24/7 Customer Support"
                description="Our 24/7 award-winning support team is available to handle any requests you may have. Whatever youmay need, we are just a click away"
              />

              <BriefItem
                title="CUSTOMER CENTRIC APPROACH"
                description="Lampnet Soluons extensively uses a consultave approach to locate customers’ journey and help them reimagine their businesses for unmatched success"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="wedo-section">
        <h1 className="text-center">WHAT WE DO</h1>
        <div className="we-do-items">
          <Service
            image="./images/service-img-1.jpg"
            title="TECHNOLOGY MANAGEMENT AND OPTIMIZATION PROCESSES"
            description="Cloud readiness assessment, deployment & migration services,
            Migration planning, Transition Management, Cloud infrastructure,
            Lift & Shiftservices"
          />

          <Service
            image="./images/service-img-2.jpg"
            title="CLOUD STRATEGY AND BUSINESS MIGRATION"
            description="Cloud Readiness Assessment, Deployment & Migration Services, Migration Planning,Transition Management,Cloud Infrastructure,Lift & Shift Services"
          />

          <Service
            image="./images/service-img-3.jpg"
            title="TRAINING, ADVISORY AND CONSULTING SERVICES"
            description="Data Experts, Business Continuity, Software Licensing, Training, Special Projects"
          />

          <Service
            image="./images/service-img-4.jpg"
            title="MOBILE APPLICATION DEVELOPMENT"
            description="Mobile Applications for business of various industries from food, pharmacy, transport and logistics, account and financing, home services delivery, schools, general ecommerce, etc. all customisable to a customer’s business"
          />
        </div>
      </section>

      <section className="products-section">
        <div>
          <h1 className="prod-header">Our Products</h1>
        </div>

        <div className="products">
          {prod.map((product) => (
            <Product
              title={product.title}
              image={product.image}
              bgColor={product.bgColor}
            />
          ))}
        </div>
      </section>

      <section className="categories-section">
        <div>
          <h1 className="prod-header">Our Categories</h1>
        </div>

        <div className="categories">
          <div className="food-cat">
            <div className="food-bg">
              <TbCapture style={{ fontSize: "40px" }} />
              <p>FOOD</p>
            </div>
          </div>
          <div className="transportation-cat">
            <div className="trans-bg">
              <HiOutlineSpeakerphone style={{ fontSize: "40px" }} />
              <p>TRANSPORTATION</p>
            </div>
          </div>
          <div className="accounting-cat">
            <div className="acc-bg">
              <AiOutlineCamera style={{ fontSize: "40px" }} />
              <p>ACCOUNTING</p>
            </div>
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

      <section className="partners-section">
        <div className="partners-left">
          <h1>Our Partners</h1>
          <h3>Passion for people</h3>

          {/* <Swiper
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="./images/partner-1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partner-2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partner-3.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partner-4.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/partner-5.png" />
              </SwiperSlide>
            </Swiper> */}
        </div>
        <div className="partners-right">
          <img src="./images/hand.jpg" alt="hands" />
        </div>
      </section>

      <Reviews />
    </>
  );
};
