import React, { useState } from 'react';
import { designApproach, designTitles } from '../Services';
import { Link } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { Product } from '../components/home/Product';

export const Design = () => {
    const [approachData, setApproachData] = useState(designApproach[0]);
    const [activeApproach, setActiveApproach] = useState(designTitles[0]);

    const handleApproachClick = (approachTitle) => {
      for (let i = 0; i < designApproach.length; i++) {
        if (designApproach[i].id === approachTitle.id) {
          setApproachData(designApproach[i]);
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
            <h2>UI/UX Design</h2>
          </div>
        </section>

        <section className="serv-sec-1">
          <div className="container">
            <div className="sec-1">
              <h5>UI/UX Design</h5>
              <h3>
                We Empower Organizations to to achieve their full potential
                through expert training and tailored consultancy solutions
              </h3>
              <p>
                UI/UX design is creating interfaces and experiences that are
                visually appealing and user-friendly. It involves designing
                intuitive and engaging products that provide a positive user
                experience.
              </p>

              <p>
                Lampnets Solutions offers UI/UX design services to businesses,
                creating modern and user-friendly interfaces that meet their
                specific needs. Our experts develop customized solutions
                optimized for ease of use and functionality. We offer UI/UX
                design services for new and existing interfaces that align with
                your brand and business goals. Our team delivers high-quality
                designs that enhance user engagement and satisfaction, leading
                to increased customer loyalty and revenue.
              </p>
            </div>
          </div>
        </section>

        <section className="serv-sec-2">
          <div className="container">
            <div className="sec-2">
              <h3 className="text-center">
                Our Training & IT Consulting Services Includes
              </h3>

              <div className="serv-card-2-items">
                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>UI/UX Consulting</h6>
                  <p>
                    We analyze your interface and provide recommendations to
                    enhance your user experience, improve usability and user
                    satisfaction.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Website Design</h6>
                  <p>
                    We create responsive and visually appealing designs that are
                    tailored to your business needs to attract and retain more
                    customers to ultimately increase your revenue.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Mobile Design</h6>
                  <p>
                    We create user-friendly and intuitive mobile applications
                    optimized for mobile devices to help you reach a wider
                    audience and engage your customers.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Branding</h6>
                  <p>
                    We create a memorable brand identity for your business to
                    help your business establish a strong brand that resonates
                    with your target audience.
                  </p>
                </div>

                <div className="serv-card">
                  <div style={{ padding: "1.2rem 0" }}>
                    <Link>Discuss your idea</Link>
                  </div>

                  <h6>Need Secured Cloud Services?</h6>
                  <p>
                    Our Cloud & DevOps engineers will work with you to fine-tune
                    the delivery, deployment and support of a high-quality
                    software.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Design Workshop</h6>
                  <p>
                    Our design workshops enhance your team's design skills with
                    training on UI/UX principles, design thinking, agile
                    methodology and strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="serv-sec-3">
          <div className="container">
            <h5>Our Unique Approach</h5>
            <h3>How we provide our Training & IT Consulting Services</h3>
            <div className="sec-3">
              <div className="sec-3-left">
                <div className="l-card">
                  {designTitles.map((title) => (
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
                  <h3>
                    Need the Best Training Solutions for Your Business
                    Challenges?
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
                Why Choose LampNets Solutions for your Software Product
                Development
              </h3>

              <p>
                We understand your idea is unique, and so should be your
                product, hence we combine our resouces to accelerate the growth
                of your startup from ideation to execution
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
                  We are a one-stop technology solution provider for startups
                  and businesses
                </h3>
                <p>
                  We employ the latest languages, frameworks and technologies to
                  ensure security, scalability and speed. We are well-equipped
                  to deliver cross-that are convenient for all users and work
                  for all devices.
                </p>

                <Link>View Our Services</Link>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </>
    );
}

const benefits = [
  {
    title: "Improved User Experience",
    desc: "We create user-friendly interfaces tailored to your business goals, target audience, and user needs for maximum satisfaction.",
  },
  {
    title: "Increased CX Satisfaction",
    desc: "We create Well-designed interfaces that lead to positive user experiences, customer loyalty, repeat business, and referrals.",
  },
  {
    title: "Value for Money",
    desc: "We employs experts and skilled UI/UX designers who know how to turn any idea into reality quickly, efficiently, and, most importantly, at a reasonable price..",
  },
];