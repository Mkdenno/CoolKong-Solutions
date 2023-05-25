import React, { useRef, useState } from "react";
import "../product.css";
import { PartnerImg } from "../../../components/PartnerImg";
import { Button } from "../../../components/products/Button";

const primaryColor = "#AB0E12";
const onPrimaryColor = "white";

export const SchoolX = () => {
  const [scrollIcon, setScrollIcon] = useState("./images/Scroll-l-a.svg");
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 320;
      changeToAshIcon();
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 320;
      changeToGreenIcon();
    }
  };

  const changeToGreenIcon = () => setScrollIcon("./images/scroll-fx-l.svg");
  const changeToAshIcon = () => setScrollIcon("./images/Scroll-l-a.svg");

  return (
    <>
      <section className="cx-hero-sec">
        <div className="cx-hero">
          <div className="cx-hero-l">
            <h5 style={{ color: primaryColor }}>School 360</h5>
            <h3>
              A Frontier Solution for Borderless Learning and School Management{" "}
            </h3>
            <p>
              Build reputable school brand, raise productivity and manage
              operations more efficiently with your one-stop school software.
            </p>

            <div className="cx-hero-btns">
              <Button
                primary
                primaryColor={primaryColor}
                onPrimaryColor={onPrimaryColor}
                content={"Request a Quote"}
              />

              <Button
                outline
                primaryColor={primaryColor}
                onPrimaryColor={onPrimaryColor}
                content={"Become a Reseller"}
              />
            </div>
          </div>
          <div className="cx-hero-r">
            <img src="./images/schoolx.svg" alt="hero" />
          </div>
        </div>
      </section>
      <PartnerImg
        slides={7}
        isDotsVisible={false}
        style={{ padding: "2rem 7rem" }}
      />
      <section className="plart-sec">
        <div className="container">
          <div className="plart-t">
            <h5 style={{ color: primaryColor }}>
              One Platform, All Deliveries
            </h5>
            <h3>Schools like yours love School 360. It is designed for </h3>
            <p>
              School 360 provides a comprehensive management system that helps
              you efficiently streamline operations and reduce resources and
              costs within your school organization.
            </p>
          </div>

          <div className="plarts">
            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Students</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Parents</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>School Administrator</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cx-solution-sec ex">
        <div className="container">
          <div className="plart-t">
            <h5 style={{ color: primaryColor }}>About School 360</h5>
            <h3>You Can Manage Your School With School 360</h3>
            <p>
              School 360 helps you efficiently manage all of your processes.
              Enjoy professional school management for any educational
              institution, in minutes!
            </p>
          </div>

          <div className="plart-b">
            <div className="plart-b-left">
              <h3>Class Management</h3>

              <div className="track-desc">
                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Faster Learning Approach</h6>
                    <p>
                      With all-time access to learning resources, learn and
                      study at your own pace, even ahead of the class.
                    </p>
                  </div>
                </div>

                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Improved Techy Skills</h6>
                    <p>
                      Stay connected and collaborate better with co-learners.so
                      you’ll never need to enter data twice.
                    </p>
                  </div>
                </div>

                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Increased Productivity</h6>
                    <p>
                      Save time with efficient patient & study management
                      features.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                primary
                primaryColor={primaryColor}
                onPrimaryColor={onPrimaryColor}
                content={"Download Now"}
              />
            </div>
            <div className="plart-b-right">
              <img src="/images/about-sx.svg" alt="prod" />
            </div>
          </div>
        </div>
      </section>

      <section className="cx-features-sec">
        <div className="container">
          <div className="feature-t">
            <h5 style={{ color: primaryColor }}>World-Class Features</h5>
            <h3>Put Your Portfolio On Autopilot With Our School 360</h3>

            <p>
              MedX is built to handle everything that clinics both large and
              small need to run smoothly. Forget spreadsheets, integrations,
              paper notes and scanning - do it all from one easy to use tool.
            </p>
          </div>

          <div className="scroll-btns">
            <button onClick={handleScrollLeft}>
              <img src={scrollIcon} alt="ic" />
            </button>
            <button onClick={handleScrollRight}>
              <img src="./images/scroll-fx.svg" alt="ic" />
            </button>
          </div>
        </div>
        <div className="feature-b">
          <div className="features" ref={scrollContainerRef}>
            <div className="feature ex">
              <img src="./images/feature-fx.svg" alt="ic" />
              <h6>User Friendly</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/star-fx.svg" alt="ic" />
              <h6>Cost Effective</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/clock-fx.svg" alt="ic" />
              <h6>On-site Training</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/clock-fx.svg" alt="ic" />
              <h6>Local Language</h6>
              <p>
                Our system can also work in the areas having low data
                penetration. Hence, there isn’t much dependency on high internet
                speed or data consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-business-sec">
        <div className="container">
          <div className="plart-t">
            <h5 style={{ color: primaryColor }}>
              All Schools can use School 360
            </h5>
            <h3>Works for any type of school</h3>
            <p>
              Different schools/classes require different solutions. School 360
              is built to support the unique output need for each kind of school
              you own.
            </p>
          </div>
        </div>

        <div className="cx-businesses">
          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Logistics</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Freight Forwarder</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Manufacturing</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Quick Service Restaurants</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Courier & Parcel</p>
          </div>
        </div>
      </section>

      <section className="cx-collaborate-sec">
        <div
          className="container cx-collab ex"
          style={{ background: primaryColor }}
        >
          <h5>Let’s Collaborate</h5>
          <h3>Ready to see what School 360 can do for you?</h3>

          <div className="cx-collab-btns">
            <Button
              primary
              primaryColor={onPrimaryColor}
              onPrimaryColor={primaryColor}
              content={"Download Now"}
            />

            <Button
              outline
              primaryColor={onPrimaryColor}
              onPrimaryColor={onPrimaryColor}
              content={"Become a Reseller"}
            />
          </div>
        </div>
      </section>

      <section className="cx-competition-sec">
        <div className="container">
          <div className="plart-t">
            <h5 style={{ color: primaryColor }}>Win Against The Competition</h5>
            <h3>White-Label Software for Your Needs</h3>
            <p>
              Expand Your On-demand Delivery Business with the Influence of our
              ready-to-use 100% Customizable Software Solution for profitable
              results in your Company
            </p>
          </div>

          <div className="cx-needs">
            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>100% Customization</h6>
              <p>
                Ready-to-use and fully customizable features of our on-demand
                delivery software to suit your business needs to suit your
                business needs
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Source Code Ownership</h6>
              <p>
                Integrate CourierX with your existing tools with little or no
                coding for both native and IOS devices both native and IOS
                devices
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/code-ex.svg" alt="ic" />

              <h6>Scalability and Growth</h6>
              <p>
                Effectively scale your business and revenue for the complete
                success and growth of your company scale your business and
                revenue for the
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flexibility-sec">
        <div className="container">
          <div className="plart-t">
            <h5 style={{ color: primaryColor }}>Explore More Flexiblities</h5>
            <h3>Building Your Business Is Our Passion</h3>
            <p>
              LampNets School 360 Solutions works for all use cases and strives
              to provide top-tier IT solutions to businesses of all sizes and
              locations in the learning industry
            </p>
          </div>

          <div className="schedules">
            <div className="sched-desc">
              <h5>Course Creation and E-learning App</h5>
              <p>
                LampNet Course Creation and E-learning App is an enterprise
                learning management system engineered to support the most
                demanding and complex learning ecosystems. Simplify e-Learning
                with LampNet learning solution.
              </p>
              <Button
                primary
                primaryColor={primaryColor}
                onPrimaryColor={onPrimaryColor}
                content={"Schedule Demo"}
              />
            </div>
            <div className="sched-img">
              <img src="./images/flex-img.svg" alt="pic" />
            </div>
          </div>

          <div className="schedules">
            <div className="sched-desc">
              <h5>CBT Exam System</h5>
              <p>
                LampNet Course Creation and E-learning App is an enterprise
                learning management system engineered to support the most
                demanding and complex learning ecosystems. Simplify e-Learning
                with LampNet learning solution.
              </p>

              <Button
                primary
                primaryColor={primaryColor}
                onPrimaryColor={onPrimaryColor}
                content={"Schedule Demo"}
              />
            </div>
            <div className="sched-img">
              <img src="./images/flex-img.svg" alt="pic" />
            </div>
          </div>

          <div className="schedules">
            <div className="sched-desc">
              <h5>School Management System</h5>
              <p>
                LampNet Course Creation and E-learning App is an enterprise
                learning management system engineered to support the most
                demanding and complex learning ecosystems. Simplify e-Learning
                with LampNet learning solution.
              </p>

              <Button
                primary
                primaryColor={primaryColor}
                onPrimaryColor={onPrimaryColor}
                content={"Schedule Demo"}
              />
            </div>
            <div className="sched-img">
              <img src="./images/flex-img.svg" alt="pic" />
            </div>
          </div>
        </div>
      </section>

      <section className="serv-sec-6">
        <div className="container">
          <div className="sec-6">
            <div className="sec-6-l">
              <img src="./images/stacks.png" alt="stack" />
            </div>
            <div className="sec-6-r cloud">
              <h5 style={{ color: primaryColor }}>One-Click Integrations</h5>
              <h3>Integrated with thousands of apps</h3>
              <p>
                School 360 uses one single database and an integrated school
                management system to serve your entire campus and integrates
                seamlessly with a number of third-party solutions
              </p>

              <div>
                <div className="integration">
                  <img src="./images/tick.svg" alt="ic" />
                  <p>100+ Major Addons</p>
                </div>

                <div className="integration">
                  <img src="./images/tick.svg" alt="ic" />
                  <p>Major Access Provider</p>
                </div>

                <div className="integration">
                  <img src="./images/tick.svg" alt="ic" />
                  <p>Free Open API</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-sell-sec">
        <div className="container sec-6">
          <div className="sec-6-r cloud">
            <h5 style={{ color: primaryColor }}>Join. Sell. Earn</h5>
            <h3>Start Innovating Today Experience EstateX for Yourself.</h3>
            <p>
              Collaborate with us and Explore our Partnership Program to earn
              more by selling, customizing or integrating our premium logistic
              solution
            </p>

            <Button
              primary
              primaryColor={primaryColor}
              onPrimaryColor={onPrimaryColor}
              content={"Become a Partner"}
            />
          </div>
          <div className="sec-6-l">
            <img src="./images/sell-g.svg" alt="pic" />
          </div>
        </div>
      </section>

      <section className="cx-collaborate-sec">
        <div
          className="container cx-collab"
          style={{ background: primaryColor }}
        >
          <h3>School 360 powers ambitious schools from every background</h3>

          <div className="cx-collab-btns">
            <Button
              primary
              primaryColor={onPrimaryColor}
              onPrimaryColor={primaryColor}
              content={"Download Now"}
            />

            <Button
              outline
              primaryColor={onPrimaryColor}
              onPrimaryColor={onPrimaryColor}
              content={"Become a Reseller"}
            />
          </div>
        </div>
      </section>
    </>
  );
};
