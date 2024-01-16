import React, { useRef, useState } from "react";
import "../product.css";
import { PartnerImg } from "../../../components/PartnerImg";
import { Button } from "../../../components/products/Button";

const primaryColor = "#453787";
const onPrimaryColor = "white";

export const FintechX = () => {
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
            <h5 style={{ color: primaryColor }}>Fintech 360</h5>
            <h3>
              A White-label Mobile Banking App For all type of Fintech Solution
            </h3>
            <p>
              Best White-label digital banking platform branded and customized
              for your business.
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
            <img src="./images/hero-fnx.svg" alt="hero" />
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
              Many Challenges, One Banking Solution.
            </h5>
            <h3>Financial Institutions Like Yours Enjoy Fintech 360 </h3>
            <p>
              Fintech 360 provides a comprehensive management system that helps
              you efficiently streamline operations and reduce resources and
              costs within your school organization.
            </p>
          </div>

          <div className="plarts">
            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Increase Sales</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Simple Integration</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Promote Your Brand</h6>
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
            <h5 style={{ color: primaryColor }}>About Fintech 360</h5>
            <h3>You Can Manage Any Accounts With Fintech 360</h3>
            <p>
              Fintech 360 Banking Software incorporates all banking and payment
              functions in one single platform.
            </p>
          </div>

          <div className="plart-b">
            <div className="plart-b-left">
              <h3>
                Onboard Your Customers In Seconds With a Single API Request.
              </h3>

              <div className="track-desc">
                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Automated ID verification</h6>
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
                    <h6>Branded Physical and Virtual Cards</h6>
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
                    <h6>Real-time Authorisations</h6>
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
              <img src="/images/about-fnx.svg" alt="prod" />
            </div>
          </div>
        </div>
      </section>

      <section className="cx-features-sec">
        <div className="container">
          <div className="feature-t">
            <h5 style={{ color: primaryColor }}>World-Class Features</h5>
            <h3>Core Banking Functionality –Everything You Need</h3>

            <p>
              Approved by many regulators, flexible and customizable, API-based,
              cloud-hosted or on-premise-installed, available in SaaS or
              perpetual license model, opportunity to purchase source codes.
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
              <h6>BSA/AML Compliance</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/star-fx.svg" alt="ic" />
              <h6>Fraud Management</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/clock-fx.svg" alt="ic" />
              <h6>Flexibility</h6>
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
              All Types of Business can Use Fintech 360
            </h5>
            <h3>Works for any type of Business</h3>
            <p>
              Businesses of all sizes and types, from e-commerce platforms to
              travel and hospitality companies- use Fintech 360 to process
              online and offline payments quickly and securely.
            </p>
          </div>
        </div>

        <div className="cx-businesses">
          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Banking</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Microfinance</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Top-up & Bill Payment</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Crypto</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-ex.svg" alt="ic" />
            <p>Insurance</p>
          </div>
        </div>
      </section>

      <section className="cx-collaborate-sec">
        <div
          className="container cx-collab ex"
          style={{ background: primaryColor }}
        >
          <h5>Let’s Collaborate</h5>
          <h3>Want to see our fintech platform software in action?</h3>

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
            <h3>Fully Customizable To Meet Your Fintech Needs</h3>
            <p>
              Fintech 360 white-label banking software comes as a collection of
              configurable standalone modules to handle the core functionality
              for financial services.
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
            CoolKong School 360 Solutions works for all use cases and strives
              to provide top-tier IT solutions to businesses of all sizes and
              locations in the learning industry
            </p>
          </div>

          <div className="schedules">
            <div className="sched-desc">
              <h5>Mobile Banking App</h5>
              <p>
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
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
              <h5>Banking Management System</h5>
              <p>
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
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
                Fintech 360 uses one single database and an integrated school
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
            <h3>Start Innovating Today Experience Fintech 360 for Yourself.</h3>
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
          <h3>Fintech 360 powers businesses from every background</h3>

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
