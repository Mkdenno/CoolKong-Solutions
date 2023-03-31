import React, { useState } from "react";
import { whiteApproach, whiteTitles } from "../Services";
import { Link } from "react-router-dom";
import { Contact } from "../components/Contact";
import { Product } from "../components/home/Product";

export const WhiteLabel = () => {
  const [approachData, setApproachData] = useState(whiteApproach[0]);
  const [activeApproach, setActiveApproach] = useState(whiteTitles[0]);

  const handleApproachClick = (approachTitle) => {
    for (let i = 0; i < whiteApproach.length; i++) {
      if (whiteApproach[i].id === approachTitle.id) {
        setApproachData(whiteApproach[i]);
      }
    }
  };

  const handleActiveApproach = (approach) => {
    setActiveApproach(approach);
  };

  return (
    <>
      <section className="service-hero-section">
        <img src="./images/lamp-logo.png" alt="logo" />

        <div className="container">
          <h2>White Label App Customization</h2>
        </div>
      </section>

      <section className="serv-sec-1">
        <div className="container">
          <div className="sec-1">
            <h5>White Label App Customization</h5>
            <h3>
              We build Customizable Business Apps that Promote Brand Visibility
              and Credibility
            </h3>
            <p>
              White label apps are software applications developed by one
              company and rebranded and marketed by another company under their
              brand name. These apps allow businesses to offer customized
              solutions to their customers without investing in costly
              development and infrastructure.
            </p>

            <p>
              At Lampnets Solutions, we offer white label app development
              services to help businesses create custom mobile apps that align
              with their brand and requirements. Our experts provide ideation,
              design, development, testing, and maintenance support. We offer
              flexible licensing options to fit your needs and budget,
              delivering a seamless user experience that enhances your brand
              identity.
            </p>
          </div>
        </div>
      </section>

      <section className="serv-sec-2">
        <div className="container">
          <div className="sec-2">
            <h3 className="text-center">
              Our White Label App Customization Services Includes
            </h3>

            <div className="serv-card-2-items">
              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>White-label Software</h6>
                <p>
                  We develop custom APIs that securely extend application
                  functionality, using clean code, top development tools, and
                  achieving high performance.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Branded Mobile Apps</h6>
                <p>
                  We offer businesses the opportunity to have their own branded
                  mobile app without the cost and time required to develop one
                  from scratch.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Cloud API Integration</h6>
                <p>
                  We provide secure API development, analysis, operation, and
                  scalability, with on-premises, cloud, or hybrid
                  on-premises/SaaS API management.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Third Party APIs</h6>
                <p>
                  Our Third-Party API allows your business to integrate with
                  third-party software systems, providing you with access to new
                  features and functionalities.
                </p>
              </div>

              <div className="serv-card">
                <div style={{ padding: "1.2rem 0" }}>
                  <Link>Discuss your idea</Link>
                </div>

                <h6>Need White Label Apps?</h6>
                <p>
                  Our Cloud & DevOps engineers will work with you to fine-tune
                  the delivery, deployment and support of a high-quality
                  software.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Customizable User Interface</h6>
                <p>
                  With our Customizable User Interface, your business can offer
                  a unique and personalized user experience to your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serv-sec-3">
        <div className="container">
          <h5>Our Unique Approach</h5>
          <h3>How we provide our White Label App Customization Services</h3>
          <div className="sec-3">
            <div className="sec-3-left">
              <div className="l-card">
                {whiteTitles.map((title) => (
                  <div
                    className={
                      activeApproach.id === title.id
                        ? "l-card-item active"
                        : "l-card-item"
                    }
                  >
                    <p
                      onClick={() => {
                        handleApproachClick(title);
                        handleActiveApproach(title);
                      }}
                    >
                      {title.id}. {title.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sec-3-right">
              <h3>{approachData.title}</h3>

              <p>{approachData.des_one}</p>

              <p>{approachData.des_two}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="serve-sec-4">
        <div className="container">
          <div className="sec-4">
            <div className="sec-4-left">
              <div className="l">
                <h5>Work With Us</h5>
                <h3>Looking for Apps with World-Class Branding Features?</h3>
                <p>
                  Let's start the conversation about your upcoming product
                  launch, and we'll assist you in brainstorming ideas and
                  execution process.
                </p>

                <Link>Discuss Your Ideas</Link>
              </div>
            </div>

            <div className="sec-4-right">
              <div className="sec-4-card">
                <div className="cd-left">
                  <h2>"</h2>
                  <p>We are glad to help you!</p>
                </div>
                <div className="cd-right">
                  <img src="./images/umoh.png" alt="person" />
                  <p>Umoh Emmanuel</p>
                  <p>Business Manager</p>
                </div>
              </div>
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

      <section className="serv-sec-5">
        <div className="container">
          <div className="sec-5-top">
            <h5>The Benefits</h5>
            <h3>
              Why Choose LampNets Solutions for your White Label App
              Customization
            </h3>

            <p>
              We understand your idea is unique, and so should be your product,
              hence we combine our resouces to accelerate the growth of your
              startup from ideation to execution
            </p>
          </div>

          <div className="sec-5-bottom">
            {benefits.map((benefit) => (
              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>{benefit.title}</h6>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="serv-sec-6">
        <div className="container">
          <div className="sec-6">
            <div className="sec-6-l">
              <img src="./images/stacks.png" alt="stack" />
            </div>
            <div className="sec-6-r">
              <h5>Our Tech Stacks</h5>
              <h3>
                We are a one-stop technology solution provider for startups and
                businesses
              </h3>
              <p>
                We employ the latest languages, frameworks and technologies to
                ensure security, scalability and speed. We are well-equipped to
                deliver cross-that are convenient for all users and work for all
                devices.
              </p>

              <Link>View Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

const benefits = [
  {
    title: "Branding",
    desc: "We help your business design and develop a custom mobile app that aligns with your brand identity, helping you to establish a stronger brand presence",
  },
  {
    title: "Cost-Effective",
    desc: "Our flexible licensing options allow you to customize the app to your business needs and provides a unique competitive advantage in your industry..",
  },
  {
    title: "Faster Time-to-Market",
    desc: "Our team of experts can help you bring your app ideas to life quickly, reducing the time it takes for your business to launch a mobile app in the market.",
  },
];
