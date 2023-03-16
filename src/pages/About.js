import React from "react";

import "./About.css";
import { PartnerImg } from "../components/PartnerImg";
import { Contact } from "../components/home/Contact";

export const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="main-header">
          <div className="container">
            <div className="about-section-left">
              <h3>
                Empowering <br /> innovation through cutting-edge solutions
              </h3>

              <p>
                LampNet Solutions is the leading provider of comprehensive ICT
                services like SAAS, PAAS, IAAS services for all African
                businesses in West Africa.
              </p>
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

      <section className="our-story-section">
        <div className="container">
          <div className="our-story">
            <h5>Our Story</h5>
            <h3>
              We Craft Exceptional Experiences with our Brand, Design, and
              Digital Expertise
            </h3>

            <p>
              Lampnet Solutions is a customer-centric cutting-edge technology
              service provider of World-Class Solutions for high business growth
              and transformation with experience in Mobile Application
              development, Security and Cloud based technologies. We are an
              agile software development and consulting company. We bring our
              expertise and competences to bear in the implementation and
              customization of integrated Cloud Solutions, ERP, CRM and other
              business software optimized to exceed customers’ expectations.
            </p>

            <p>
              LampNet Solutions is a privately owned Nigerian company registered
              under the Companies and Allied Matters Act of 1990. The company
              was established to provide business solutions to small, medium,
              and large organizations. As an independent software vendor,
              LampNet Solutions partners with leading technology vendors to
              provide innovative and timely IT solutions, as well as IT training
              for corporate organizations, institutions, and professional
              bodies. The company is committed to delivering world-class
              solutions that are optimized for African businesses and prides
              itself on providing exceptional services to every African
              business.
            </p>
          </div>
        </div>
      </section>

      <section className="working-section">
        <div className="work-bg">
          <div className="container">
            <div className="working">
              <div className="work">
                <h3>884+</h3>
                <p>Working Hours</p>
              </div>
              <div className="work">
                <h3>170+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="work">
                <h3>247+</h3>
                <p>Projects a Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mission-about-left">
              <div className="mission-img-bg"></div>
              <img src="./images/about-home-img.png" alt="about" />
            </div>
            <div className="col-md-6 mission-about-right">
              <h5>Our Mission</h5>
              <h3>
                We believe in Empowering African Businesses with World-Class
                Technology Solutions
              </h3>

              <p style={{ paddingTop: "1rem" }}>
                Our software company is committed to empowering African
                businesses and people with innovative technology solutions. We
                provide customized solutions that drive growth, efficiency, and
                success, and offer comprehensive support services to simplify
                technology adoption and utilization, ensuring user-friendliness,
                security, and scalability.
              </p>

              <p>
                Our success is dependent on our clients' success. Therefore, we
                prioritize exceptional customer service, building long-lasting
                partnerships with clients, and delivering solutions that exceed
                expectations. Our goal is to be the leading provider of
                world-class technology solutions for African businesses, driving
                innovation and success across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 vision-about-left">
              <h5>Our Vision</h5>
              <h3>
                We Transforming African Businesses with Innovative Technology
                Solutions
              </h3>

              <p style={{ padding: "1rem 0 0 0" }}>
                At Lampnet Solutions, our vision is to become the leading
                digital transformation partner for African businesses. We are
                committed to empowering organizations across the continent with
                cutting-edge technology solutions that drive growth and success.
                Our goal is to be Africa's pride in digital business
                transformation through technology advancement.
              </p>

              <p>
                We believe in developing solutions that are tailored to the
                unique needs and challenges of African businesses, and in doing
                so, we strive to be Africa technologies for Africans-by
                Africans. Our team of experienced professionals are dedicated to
                providing world-class software solutions that are secure,
                reliable, and user-friendly.
              </p>
            </div>
            <div className="col-md-6 vision-about-right">
              <div className="vision-about-img-bg"></div>
              <img src="./images/partner-home-img.png" alt="partner" />
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <div className="approach-about-header">
            <h5>Our Approach</h5>
            <h3>We believe in effective communication and collaboration</h3>

            <p>
              Our African Technology company strives to provide top-tier IT
              solutions to businesses of all sizes and locations within the
              continent, utilizing African talent
            </p>
          </div>
        </div>

        <div className="approach-items">
          <div className="approach-item">
            <img src="./images/search.svg" alt="cloud" />

            <h5>Assess</h5>
            <p>
              We collaborate with our clients to thoroughly assess their unique
              business needs and goals before embarking on any project.
            </p>

            <div className="desc-wrapper">
              <div className="numbered-hr"></div>
              <div className="numbered">1</div>
            </div>
          </div>

          <div className="approach-item">
            <img src="./images/award-star.svg" alt="award" />

            <h5>Ensure Quality</h5>
            <p>
              We have a robust quality assurance process to ensure that our
              solutions meet the highest standards.
            </p>
            <div className="desc-wrapper">
              <div className="numbered-hr"></div>
              <div className="numbered">3</div>
            </div>
          </div>

          <div className="approach-item">
            <img src="./images/progress.svg" alt="mobile" />

            <h5>Continuously Improve</h5>
            <p>
              We are committed to continuous improvement to ensure that we
              provide cutting-edge solutions that exceed our clients'
              expectations.
            </p>

            <div className="desc-wrapper">
              <div className="numbered-hr"></div>
              <div className="numbered">5</div>
            </div>
          </div>
        </div>

        <div className="approach-items-bottom">
          <div
            className="approach-item-bottom"
            style={{ marginRight: "-20rem" }}
          >
            <img src="./images/search.svg" alt="cloud" />

            <h5>Assess</h5>
            <p>
              We collaborate with our clients to thoroughly assess their unique
              business needs and goals before embarking on any project.
            </p>

            <div className="desc-wrapper-bottom">
              <div className="numbered-hr-bottom"></div>
              <div className="numbered-bottom">2</div>
            </div>
          </div>

          <div className="approach-item-bottom">
            <img src="./images/award-star.svg" alt="award" />

            <h5>Ensure Quality</h5>
            <p>
              We have a robust quality assurance process to ensure that our
              solutions meet the highest standards.
            </p>
            <div className="desc-wrapper-bottom">
              <div className="numbered-hr-bottom"></div>
              <div className="numbered-bottom">4</div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};
