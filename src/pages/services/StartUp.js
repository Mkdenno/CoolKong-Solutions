import React, { useState } from "react";
import { Link } from "react-router-dom";
import { startUpApproach, startUpTitles } from "../../Services";
import "./StartUp.css";

import { Contact } from "../../components/contact/Contact";
import { Product } from "../../components/home/Product";

export const StartUp = () => {
  const [approachData, setApproachData] = useState(startUpApproach[0]);
  const [activeApproach, setActiveApproach] = useState(startUpTitles[0]);

  const handleApproachClick = (approachTitle) => {
    for (let i = 0; i < startUpApproach.length; i++) {
      if (startUpApproach[i].id === approachTitle.id) {
        setApproachData(startUpApproach[i]);
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
          <h2>Startup Scale-up & MVP Development</h2>
        </div>
      </section>

      <section className="serv-sec-1">
        <div className="container">
          <div className="sec-1">
            <h5>Startup Scaleup & MVP Development</h5>
            <h3>
              We Have a Proven Track Record of Enabling Startups to Grow with
              Our Market-Ready MVPs
            </h3>
            <p>
              According to a study by Failory, over 70% of startups tend to fail
              within the first five years, around 42% fail due to misinformation
              on market demand while only 1% of startups become unicorn firms
              like Uber, Airbnb, Slack, Stripe, and Docker.{" "}
            </p>

            <p>
              A solid foundation for your Startup begins with a well-defined
              MVP. We specialize in designing prototypes and MVPs that address
              your unique business needs, incorporate exciting new features, and
              are easily adjusted to reflect market realities
            </p>
          </div>
        </div>
      </section>

      <section className="serv-sec-2">
        <div className="container">
          <div className="sec-2">
            <h3 className="text-center">
              Our Startup Scaleup & MVP Development Services Includes
            </h3>

            <div className="serv-card-2-items">
              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Validation & Prototype</h6>
                <p>
                  We collaborate with our clients to thoroughly assess their
                  unique business needs and goals before
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Industry Research</h6>
                <p>
                  We have a robust quality assurance process to ensure that our
                  solutions meet the highest standards.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Pitch-Ready MVP Product</h6>
                <p>
                  We are committed to continuous improvement to ensure that we
                  provide cutting-edge solutions
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Product Roadmap</h6>
                <p>
                  Our agile methodology approach to ensures tailored solutions
                  that meet clients' specific needs.
                </p>
              </div>

              <div className="serv-card">
                <div style={{ padding: "1.2rem 0" }}>
                  <Link>Discuss your idea</Link>
                </div>

                <h6>Need Market Ready MVPs?</h6>
                <p>
                  We’re committed to turning your idea into an efficient digital
                  product quickly and within budget.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Full-cycle MVP Engineering</h6>
                <p>
                  We provide ongoing support and maintenance to ensure that our
                  solutions continue to meet our clients' needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serv-sec-3">
        <div className="container">
          <h5>Our Unique Approach</h5>
          <h3>How we provide our Cloud Solutions & Management Services</h3>
          <div className="sec-3">
            <div className="sec-3-left">
              <div className="l-card">
                {startUpTitles.map((title) => (
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

      <section className="serve-sec-4">
        <div className="container">
          <div className="sec-4">
            <div className="sec-4-left">
              <div className="l">
                <h5>Work With Us</h5>
                <h3>
                  Looking to Scale Your Startup or Build a Well-Defined MVP?
                </h3>
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

      <section className="serv-sec-5">
        <div className="container">
          <div className="sec-5-top">
            <h5>The Benefits</h5>
            <h3>
              Why Choose LampNets Solutions for your Startup Scale-up & MVP
              Development
            </h3>

            <p>
              We understand your idea is unique, and so should be your product,
              hence we combine our resources to help your business bring your
              product vision to life and achieve long-term success.
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
    title: "Reduced Risk",
    desc: "We collaborate with our clients to thoroughly assess their unique business needs and goals before",
  },
  {
    title: "Quick Product Launch",
    desc: "We have a robust quality assurance process to ensure that our solutions meet the highest standards.",
  },
  {
    title: "Improved Product-Market Fit",
    desc: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions",
  },
];
