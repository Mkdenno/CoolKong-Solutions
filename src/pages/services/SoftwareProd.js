import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Contact } from "../../components/contact/Contact";
import { softProdApproach, softProdTitles } from '../../Services';
import { Product } from '../../components/home/Product';

export const SoftwareProd = () => {
    const [approachData, setApproachData] = useState(softProdApproach[0]);
    const [activeApproach, setActiveApproach] = useState(softProdTitles[0]);

    const handleApproachClick = (approachTitle) => {
      for (let i = 0; i < softProdApproach.length; i++) {
        if (softProdApproach[i].id === approachTitle.id) {
          setApproachData(softProdApproach[i]);
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
            <h2>Software Product Development</h2>
          </div>
        </section>

        <section className="serv-sec-1">
          <div className="container">
            <div className="sec-1">
              <h5>Software Product Development</h5>
              <h3>
                We Bring Your Business Vision to Life and Give Competitive Edge
                to Your Software Products
              </h3>
              <p>
                Software product development is the process of designing,
                creating, testing, and launching software products that are
                intended with a focus on meeting the needs of a specific market
                or audience.
              </p>

              <p>
                As a leading software product development company, we are
                committed to delivering exceptional software products and
                services that enable our clients to transform their business
                operations and achieve sustainable growth in the digital age.
                Our expertise spans across various industries, including
                healthcare, finance, education, e-commerce, and more.
              </p>
            </div>
          </div>
        </section>

        <section className="serv-sec-2">
          <div className="container">
            <div className="sec-2">
              <h3 className="text-center">
                Our Software Product Development Services Includes{" "}
              </h3>

              <div className="serv-card-2-items">
                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Software Quality Analysis</h6>
                  <p>
                    We implement security measures to protect cloud resources
                    from cyber threats, such as malware, hacking attempts, and
                    data breaches.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Mobile App Development</h6>
                  <p>
                    We implement security measures to protect cloud resources
                    from cyber threats, such as malware, hacking attempts, and
                    data breaches.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Web/Cloud Development</h6>
                  <p>
                    We integrate development and operations processes, to enable
                    a faster and more efficient software delivery in the cloud
                    environment.
                  </p>
                </div>

                <div className="serv-card">
                  <img src="./images/serv-clock.svg" alt="ic" />

                  <h6>Software Architecture Design</h6>
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

                  <h6>Enterprise Software Development</h6>
                  <p>
                    We provide on-demand access to computing resources, such as
                    servers, storage, and databases, as well as software and
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="serv-sec-3">
          <div className="container">
            <h5>Our Unique Approach</h5>
            <h3>How Do We Provide Software Product Development Services?</h3>
            <div className="sec-3">
              <div className="sec-3-left">
                <div className="l-card">
                  {softProdTitles.map((title) => (
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
                    Need High-quality, Usable and Sustainable Software Products?{" "}
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
    title: "Agile Methodology",
    desc: "We provide access to cloud resources on a pay-as-you-go basis, without having to invest in your own infrastructure and cut costs by eliminating redundant data.",
  },
  {
    title: "High Scalability",
    desc: "We offer cloud infrastructure that enables seamless deployment of new products and resource allocation to handle sudden increases in demand.",
  },
  {
    title: "Industry-standard solutions",
    desc: "We provide reliable and efficient industry-standard software and tools that enable your business to focus on their core competencies ",
  },
];