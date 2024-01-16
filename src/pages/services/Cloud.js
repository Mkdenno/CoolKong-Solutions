import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Contact } from "../../components/contact/Contact";
import { cloudApproach, cloudTitles } from "../../Services";
import { Product } from "../../components/home/Product";

export const Cloud = () => {
  const [approachData, setApproachData] = useState(cloudApproach[0]);
  const [activeApproach, setActiveApproach] = useState(cloudTitles[0]);

  const handleApproachClick = (approachTitle) => {
    for (let i = 0; i < cloudApproach.length; i++) {
      if (cloudApproach[i].id === approachTitle.id) {
        setApproachData(cloudApproach[i]);
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
          <h2>Cloud Solutions & Management</h2>
        </div>
      </section>

      <section className="serv-sec-1">
        <div className="container">
          <div className="sec-1">
            <h5>Cloud Solutions & Management</h5>
            <h3>
              We Ensure That Data Security and Performance Are Optimized Across
              Cloud Environments
            </h3>
            <p>
              Cloud solution & Management refers to the processes & tools used
              to manage the delivery of computing resources, including servers,
              storage, databases, software, and analytics, over the Internet.
            </p>

            <p>
              Managing and protecting your data can be complex, but with
              Lampnets’ cloud solution and management services, it doesn't have
              to be. We offer comprehensive services to move your enterprise
              infrastructure to cloud platforms such as Azure, and Google, to
              help your business conquer the challenges of cloud management and
              ensure the safety of your data
            </p>
          </div>
        </div>
      </section>

      <section className="serv-sec-2">
        <div className="container">
          <div className="sec-2">
            <h3 className="text-center">
              Our Cloud Solutions & Management Services Includes
            </h3>

            <div className="serv-card-2-items">
              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Cloud Mangement</h6>
                <p>
                  We implement security measures to protect cloud resources from
                  cyber threats, such as malware, hacking attempts, and data
                  breaches.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Managed Security </h6>
                <p>
                  We implement security measures to protect cloud resources from
                  cyber threats, such as malware, hacking attempts, and data
                  breaches.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Managed DevOps</h6>
                <p>
                  We integrate development and operations processes, to enable a
                  faster and more efficient software delivery in the cloud
                  environment.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Managed Support</h6>
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

                <h6>Cloud Computing</h6>
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
          <h3>How we provide our Cloud Solutions & Management Services</h3>
          <div className="sec-3">
            <div className="sec-3-left">
              <div className="l-card">
                {cloudTitles.map((title) => (
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
                  Looking to Keep Your Data Fully Protected Across Platforms?
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
              Why Choose CoolKong Solutions for your Cloud Solutions & Mangement
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
    title: "Reduced Cost of Ownership",
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
