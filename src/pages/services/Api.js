import React, { useState } from 'react';
import { apiApproach, apiTitles } from '../../Services';
import { Link } from 'react-router-dom';
import { Contact } from '../../components/Contact';
import { Product } from '../../components/home/Product';

export const Api = () => {
    const [approachData, setApproachData] = useState(apiApproach[0]);
    const [activeApproach, setActiveApproach] = useState(apiTitles[0]);

    const handleApproachClick = (approachTitle) => {
      for (let i = 0; i < apiApproach.length; i++) {
        if (apiApproach[i].id === approachTitle.id) {
          setApproachData(apiApproach[i]);
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
            <h2>API Development & Integration</h2>
          </div>
        </section>

        <section className="serv-sec-1">
          <div className="container">
            <div className="sec-1">
              <h5>API Development & Integration</h5>
              <h3>
                We Can Manage your system integration and bring disparate
                systems together
              </h3>
              <p>
                An API is an application programming interface. APIs are sets of
                protocols that enable different software systems to connect and
                share data.
              </p>

              <p>
                At Lampnets Solutions, we offer comprehensive API development
                and integration services to help businesses streamline their
                operations and improve efficiency. Our team of experts has
                extensive experience in building custom APIs that fit your
                business requirements, whether you need to integrate with
                third-party systems, automate tasks, or enhance the customer
                experience.
              </p>
            </div>
          </div>
        </section>

        <section className="serv-sec-2">
          <div className="container">
            <div className="sec-2">
              <h3 className="text-center">
                Our API Development & Integration Services Includes
              </h3>

              <div className="serv-card-2-items">
                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Custom API Development</h6>
                  <p>
                    We develop custom APIs that securely extend application
                    functionality, using clean code, top development tools, and
                    achieving high performance.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Third Party API Integration </h6>
                  <p>
                    We use Microsoft platforms like Azure for web functionality,
                    system integration, REST API creation, documentation, and
                    seamless integration with existing apps.
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

                  <h6>Microservice Architecture</h6>
                  <p>
                    We provide technical support and troubleshooting services to
                    ensure optimal functioning of cloud resources, with timely
                    resolution of any issue.
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

                  <h6>Automated API Testing</h6>
                  <p>
                    Our engineers and QA specialists use automated testing to
                    evaluate performance and functionality of crucial business
                    apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="serv-sec-3">
          <div className="container">
            <h5>Our Unique Approach</h5>
            <h3>How we provide our API Development & Integration Services</h3>
            <div className="sec-3">
              <div className="sec-3-left">
                <div className="l-card">
                  {apiTitles.map((title) => (
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
                    Looking for Seamless and Personalized API Integration?
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
    title: "Streamlined Integration",
    desc: "Our API integration services help your business integrate systems seamlessly, including third-party applications, databases, and software",
  },
  {
    title: "Enhanced Security",
    desc: "We prioritize security in our API development and integration services, ensuring that your business data is protected from unauthorized access.",
  },
  {
    title: "Increased Efficiency",
    desc: "We optimize API performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
  },
];