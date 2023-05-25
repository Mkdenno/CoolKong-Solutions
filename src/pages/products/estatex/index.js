import React, { useRef, useState } from "react";
import "../product.css";
import { PartnerImg } from "../../../components/PartnerImg";
import { Button } from "../../../components/products/Button";

const primaryColor = "#222222";
const onPrimaryColor = "white";
const secondaryColor = "#AB0E12";

export const EstateX = () => {
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
            <h5 style={{ color: secondaryColor }}>EstateX</h5>
            <h3>
              Ready-to-Use Property Listing & Management App Built for You
            </h3>
            <p>
              Choose the property management software that powers you to do more
              than just manage properties.
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
            <img src="./images/estatex.svg" alt="hero" />
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
            <h5 style={{ color: secondaryColor }}>
              One Platform, All Deliveries
            </h5>
            <h3>
              Capture untapped opportunities with EstateX intuitive features
            </h3>
            <p>
              EstateX is a highly customizable online food ordering and delivery
              system that enables ease of use and seamless management.
            </p>
          </div>

          <div className="plarts">
            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Customer App</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Driver App</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Delivery Management App</h6>
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
            <h5 style={{ color: secondaryColor }}>About EstateX</h5>
            <h3>You Can Manage Any Door With EstateX</h3>
            <p>
              Whether you manage five doors or five thousand, you need a simple,
              unified platform that powers you to be your best
            </p>
          </div>

          <div className="plart-b">
            <div className="plart-b-left">
              <h3>Automate rent collection</h3>

              <div className="track-desc">
                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Bookkeeping For Any Portfolio</h6>
                    <p>
                      Keep your bookkeeping complete and accurate. Track every
                      payment, manage accounts payable and reconcile bank
                      accounts automatically.
                    </p>
                  </div>
                </div>

                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Vendor Management</h6>
                    <p>
                      Vendor bills and expenses can be tracked and paid within
                      EstateX, so you’ll never need to enter data twice.
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
              <img src="/images/about-ex.svg" alt="prod" />
            </div>
          </div>
        </div>
      </section>

      <section className="cx-features-sec">
        <div className="container">
          <div className="feature-t">
            <h5 style={{ color: secondaryColor }}>World-Class Features</h5>
            <h3>Put Your Portfolio On Autopilot With Our EstateX</h3>

            <p>
              EstateX is built to handle everything that clinics both large and
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
              <img src="./images/feature-ex.svg" alt="ic" />
              <h6>Featured Adverts</h6>
              <p>
                Customize the advert listings by promoting sponsored adverts on
                your apps . Simply set the time frame and select the item to be
                featured.
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/star-ex.svg" alt="ic" />
              <h6>Ratings and Reviews</h6>
              <p>
                Ratings and reviews system in which all your customers can be
                the judge for product/ service quality for quality service and
                reviews
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/clock-ex.svg" alt="ic" />
              <h6>Increased Productivity</h6>
              <p>
                Calculate real-time estimated time of arrival (ETA) with our
                last mile delivery system along with real-time re-routing and
                delivery route optimization.
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/clock-ex.svg" alt="ic" />
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
            <h5 style={{ color: secondaryColor }}>
              All businesses can use EstateX
            </h5>
            <h3>The right fit for any asset class</h3>
            <p>
              Different asset classes require different solutions. EstateX is
              built to support the unique workflows need for each kind of
              property you manage.
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
          style={{ background: secondaryColor }}
        >
          <h5>Let’s Collaborate</h5>
          <h3>Choose EstateX today so you can scale your tomorrow.</h3>

          <div className="cx-collab-btns">
            <Button
              primary
              primaryColor={onPrimaryColor}
              onPrimaryColor={secondaryColor}
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
            <h5 style={{ color: secondaryColor }}>
              Win Against The Competition
            </h5>
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
            <h5 style={{ color: secondaryColor }}>Explore More Flexiblities</h5>
            <h3>Building Your Business Is Our Passion</h3>
            <p>
              LampNets School 360 Solutions works for all use cases and strives
              to provide top-tier IT solutions to businesses of all sizes and
              locations in the learning industry
            </p>
          </div>

          <div className="schedules">
            <div className="sched-desc">
              <h5>EstateX House Listing & Shortlet Booking App</h5>
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
              <h5>EstateX House Listing & Shortlet Booking Website</h5>
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
              <h5 style={{ color: secondaryColor }}>Our Tech Stacks</h5>
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
            <h5 style={{ color: secondaryColor }}>Join. Sell. Earn</h5>
            <h3>Empower your Clients and business with EstateX</h3>
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
          style={{ background: secondaryColor }}
        >
          <h3>
            Put Your Portfolio On Autopilot With Our Property Management Tool
          </h3>

          <div className="cx-collab-btns">
            <Button
              primary
              primaryColor={onPrimaryColor}
              onPrimaryColor={secondaryColor}
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