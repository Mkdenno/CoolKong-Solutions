import React from "react";

import "./About.css";
import { PartnerImg } from "../../components/PartnerImg";
import { Contact } from "../../components/contact/Contact";
import { SliderLayout } from "../../components/slider/SliderLayout";

export const About = () => {
  return (
    <>
      <section className="about-section">
        <img src="./images/lamp-logo.png" alt="logo" />
        <div className="container">
          <div className="about-section-left">
            <h3>About us</h3>
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

      <section className="our-story-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 weare-section-left">
              <h5>Who we are</h5>

              <h3>
                We Craft Exceptional Experiences with our Brand, Design, and
                Digital Expertise
              </h3>
            </div>

            <div className="col-md-6 weare-section-right">
              <p>
              CoolKong is a team of innovative and world-class professionals
                relentlessly obsessed with the consistent delivery of
                trail-blazing solutions that guarantee your optimum
                productivity. We provide customized solutions that drive growth,
                efficiency, and success, and offer comprehensive support
                services to simplify technology adoption and utilization,
                ensuring user-friendliness, security, and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="working-section">
        <div className="container">
          <div className="working-items">
            <div className="icon-item">
              <img src="./images/w-ic-1.svg" alt="icon" />
              <h3>884+</h3>
              <p>Working hours</p>
            </div>

            <div className="icon-item">
              <img src="./images/w-ic-2.svg" alt="icon" />
              <h3>170+</h3>
              <p>Happy clients</p>
            </div>

            <div className="icon-item">
              <img src="./images/w-ic-3.svg" alt="icon" />
              <h3>247+</h3>
              <p>Projects a year</p>
            </div>

            <div className="icon-item">
              <img src="./images/w-ic-4.svg" alt="icon" />
              <h3>100+</h3>
              <p>Team members</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mission-about-left">
              <div className="mission-img-top-bg"></div>
              <div className="mission-img-bottom-bg"></div>
              <img src="./images/about-home-img.png" alt="about" />
            </div>
            <div className="col-md-6 mission-about-right">
              <h5>Our Mission</h5>
              <h3>
                We Prioritize Exceptional Customer Service and Long-lasting
                Partnership
              </h3>

              <p style={{ paddingTop: "1rem" }}>
                As a progressive and pioneering company, we prioritize our
                people above all else. Our culture is defined by diversity,
                inclusion, and an unwavering commitment to continuous learning
                and growth. We offer comprehensive support services to simplify
                technology adoption and utilization, ensuring usability,
                security, scalability and deliver solutions that exceed
                expectations.
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
                We believe in Empowering African Businesses with World-Class
                Technology Solutions
              </h3>

              <p style={{ padding: "1rem 0 0 0" }}>
                At CoolKong Solutions, our vision is to become the leading
                digital transformation partner for African businesses. We are
                committed to empowering organizations across the continent with
                cutting-edge technology solutions that drive growth and success.
                Our goal is to be Africa's pride in digital business
                transformation through technology advancement.
              </p>
            </div>
            <div className="col-md-6 vision-about-right">
              <div className="vision-about-img-top-bg"></div>
              <div className="vision-about-img-bottom-bg"></div>
              <img src="./images/partner-home-img.png" alt="partner" />
            </div>
          </div>
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
          <button>Check Out Our Solutions</button>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <div className="approach-about-header">
            <h5>Our Approach</h5>
            <h3>We believe in effective collaboration</h3>

            <p>
              Our African Technology company strives to provide top-tier IT
              solutions to businesses of all sizes and locations within the
              continent, utilizing African talent
            </p>
          </div>
        </div>

        <div className="approach-items">
          <div className="approach-item">
            <img src="./images/collabo.svg" alt="cloud" />

            <h5>Collaboration</h5>
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
            <img src="./images/quality.svg" alt="award" />

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
            <img src="./images/continu.svg" alt="mobile" />

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
            <img src="./images/develop.svg" alt="cloud" />

            <h5>Develop Solutions</h5>
            <p>
              Our agile methodology approach to ensures tailored solutions that
              meet clients' specific needs.
            </p>

            <div className="desc-wrapper-bottom">
              <div className="numbered-hr-bottom"></div>
              <div className="numbered-bottom">2</div>
            </div>
          </div>

          <div className="approach-item-bottom">
            <img src="./images/Support.svg" alt="award" />

            <h5>Provide Support</h5>
            <p>
              We provide ongoing support and maintenance to ensure that our
              solutions continue to meet our clients' needs.
            </p>
            <div className="desc-wrapper-bottom">
              <div className="numbered-hr-bottom"></div>
              <div className="numbered-bottom">4</div>
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

      <Contact />
    </>
  );
};
