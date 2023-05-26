import React, {useState} from 'react';
import { staffApproach, staffTitles } from '../../Services';
import { Contact } from '../../components/contact/Contact';
import { Link } from 'react-router-dom';
import { Product } from '../../components/home/Product';

export const Staff = () => {
  const [approachData, setApproachData] = useState(staffApproach[0]);
  const [activeApproach, setActiveApproach] = useState(staffTitles[0]);

  const handleApproachClick = (approachTitle) => {
    for (let i = 0; i < staffApproach.length; i++) {
      if (staffApproach[i].id === approachTitle.id) {
        setApproachData(staffApproach[i]);
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
          <h2>IT Staff Outsourcing & Team Augmentation</h2>
        </div>
      </section>

      <section className="serv-sec-1">
        <div className="container">
          <div className="sec-1">
            <h5>IT Staff Outsourcing & Team Augmentation</h5>
            <h3>
              We Help You Achieve Your Business Goals with Top-notch Staffing
              Solutions
            </h3>
            <p>
              Staff outsourcing and team augmentation involve hiring external
              professionals to work on a project or join an existing team to
              supplement and enhance the skills and expertise of your current
              staff. It can help your business achieve its goals while saving
              time and resources.
            </p>

            <p>
              At Lampnet Solutions, we offer staff outsourcing and team
              augmentation services to provide specialized expertise and
              additional resources for businesses without the need for permanent
              hires. We provide flexible staffing solutions tailored to your
              needs, whether it's short-term or long-term projects. With ongoing
              support and seamless integration, let us help you achieve your
              business goals with top-notch staffing solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="serv-sec-2">
        <div className="container">
          <div className="sec-2">
            <h3 className="text-center">
              Our IT Staff Outsourcing & Team Augmentation Services Includes
            </h3>

            <div className="serv-card-2-items">
              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Hire UI</h6>
                <p>
                  Outsource IT staff to us for access to skilled professionals
                  without the cost of permanent hires. We handle recruitment,
                  training, and HR management.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Team Augmentation</h6>
                <p>
                  We augment your team with our IT experts who will work
                  seamlessly to help you scale your business faster without
                  permanent hires.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Project-based Outsourcing</h6>
                <p>
                  We handle entire IT projects for your business, providing
                  customized solutions that meet your business goals, help you
                  reduce costs and increase efficiency.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Remote Staffing</h6>
                <p>
                  We provide access to skilled IT professionals who work
                  remotely from our location to anywhere while saving on
                  overhead costs.
                </p>
              </div>

              <div className="serv-card">
                <div style={{ padding: "1.2rem 0" }}>
                  <Link>Discuss your idea</Link>
                </div>

                <h6>Need a Dedicated Developer ?</h6>
                <p>
                  Our Cloud & DevOps engineers will work with you to fine-tune
                  the delivery, deployment and support of a high-quality
                  software.
                </p>
              </div>

              <div className="serv-card">
                <img src="./images/serv-clock.svg" alt="ic" />

                <h6>Network Outsourcing</h6>
                <p>
                  We provide managed network services to ensure secure,
                  reliable, and efficient network. Our team reduces downtime and
                  improves network performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serv-sec-3">
        <div className="container">
          <h5>Our Unique Approach</h5>
          <h3>
            How we provide our IT Staff Outsourcing & Team Augmentation Services
          </h3>
          <div className="sec-3">
            <div className="sec-3-left">
              <div className="l-card">
                {staffTitles.map((title) => (
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
                  Need Seamless Access to Global Talent for your Project Needs?
                </h3>
                <p>
                  Our teams are behind the technical success of an array of
                  world-renowned Fintech, eCommerce, Investment, and other
                  brands
                </p>

                <Link>Consult Our Expert</Link>
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
              Why Choose LampNet Solutions for your Training & IT Consulting{" "}
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
    title: "Access to Global Talent",
    desc: "We provide your business with skilled IT professionals who have specialized skills and expertise that are hard to find in the local job market.",
  },
  {
    title: "Flexibility",
    desc: "Our staffing solutions are flexible and can be tailored to meet the specific needs of your business, whether you need short-term or long-term staff augmentation.",
  },
  {
    title: "Increased Productivity",
    desc: "Our IT professionals can supplement your existing team or handle entire projects, allowing your business to increase its capacity and scale faster.",
  },
];