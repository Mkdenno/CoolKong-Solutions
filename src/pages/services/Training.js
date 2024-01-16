import React, { useState } from 'react';
import { trainingApproach, trainingTitles } from '../../Services';
import { Contact } from '../../components/contact/Contact';
import { Link } from 'react-router-dom';
import { Product } from '../../components/home/Product';

export const Training = () => {
    const [approachData, setApproachData] = useState(trainingApproach[0]);
    const [activeApproach, setActiveApproach] = useState(trainingTitles[0]);

    const handleApproachClick = (approachTitle) => {
      for (let i = 0; i < trainingApproach.length; i++) {
        if (trainingApproach[i].id === approachTitle.id) {
          setApproachData(trainingApproach[i]);
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
            <h2>Training & IT Consulting</h2>
          </div>
        </section>

        <section className="serv-sec-1">
          <div className="container">
            <div className="sec-1">
              <h5>Training & IT Consulting</h5>
              <h3>
                We Empower Organizations to to achieve their full potential
                through expert training and tailored consultancy solutions
              </h3>
              <p>
                Training & IT Consulting is a service that provides businesses
                with expert guidance and support on all aspects of IT. This
                service helps businesses to optimize their IT systems, increase
                efficiency, and reduce costs. At Lampnets Solutions, we offer
                Training & IT Consulting services to businesses of all sizes and
                industries.
              </p>

              <p>
                Our team of IT experts works with your business to evaluate your
                current IT systems and identify areas for improvement. We
                provide customized training and certification programs to help
                your team acquire the skills and knowledge they need to maximize
                the benefits of your IT systems. With our Training & IT
                Consulting services, your business can stay ahead of the curve
                with the latest IT technologies and trends.
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

                  <h6>Training & Certification</h6>
                  <p>
                    We offer a wide range of training courses, including
                    technical skills training, leadership training, and
                    certification programs.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>IT System Evaluation</h6>
                  <p>
                    We conduct a thorough assessment of your current IT system
                    to identify any vulnerabilities or inefficiencies and give
                    recommendations for improvement.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Project Management</h6>
                  <p>
                    Our IT project management team uses agile methodologies,
                    collaboration, and feedback for successful project execution
                    across industries.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Data Strategy</h6>
                  <p>
                    We build resilient architecture for interconnected
                    applications and proactively manage IT security across your
                    business ecosystem.
                  </p>
                </div>

                <div className="serv-card">
                  <div style={{ padding: "1.2rem 0" }}>
                    <Link>Discuss your idea</Link>
                  </div>

                  <h6>Need Training & IT Consulting?</h6>
                  <p>
                    Our Cloud & DevOps engineers will work with you to fine-tune
                    the delivery, deployment and support of a high-quality
                    software.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Business Intelligence</h6>
                  <p>
                    Our BI consultants optimize data visualization and analytics
                    with PowerBI. We use fact-based management and predictive
                    modeling to drive decisions
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
                  {trainingTitles.map((title) => (
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
            CoolKong Solutions strives to provide top-tier IT solutions to
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
                    <p>Dennis Masiror</p>
                    <p>Business Director</p>
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
                Why Choose CoolKong Solutions for your Training & IT Consulting
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
    title: "Improved IT Infrastructure",
    desc: "We optimize your IT systems and processes for better productivity and  implement solutions tailored to your specific needs",
  },
  {
    title: "Increased Business Performance",
    desc: "We align our IT services with your business goals to improve efficiency and increase profitability, and  maximize business potential.",
  },
  {
    title: "Competitive Advantage",
    desc: "Our team of business experts help your business stay ahead of the curve and remain competitive in a rapidly-changing marketplace.",
  },
];