import React, { useRef, useState } from "react";
import "../product.css";
import { PartnerImg } from "../../../components/PartnerImg";
import { Button } from "../../../components/products/Button";

const primaryColor = "#1628F4";
const onPrimaryColor = "white";
const secondaryColor = "#222222";

export const WorkspaceX = () => {
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
            <h5 style={{ color: primaryColor }}>Co-WorkspaceX</h5>
            <h3>The most intuitive coworking management solution</h3>
            <p>
              Automate your investment business operations to increase
              efficiency, gather and analyse important data to source and close
              more deals online.
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
            <img src="./images/thriftx.svg" alt="hero" />
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
              Many Spaces, One Community Solution.
            </h5>
            <h3>What you can do with Co-WorkspaceX</h3>
            <p>
              Co-WorspaceX is a highly customizable online food ordering and
              delivery system that enables ease of use and seamless management.
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

              <h6>Space App</h6>
              <p>
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-ex.svg" alt="ic" />

              <h6>Admin Management App</h6>
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
            <h5 style={{ color: primaryColor }}>About Co-WorkspaceX</h5>
            <h3>What you can do with Co-WorkspaceX</h3>
            <p>
              Co-WorkspaceX Software incorporates all banking and payment
              functions in one single platform.
            </p>
          </div>

          <div className="plart-b">
            <div className="plart-b-left">
              <h3>Automated Invoicing and Payment</h3>

              <div className="track-desc">
                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Communities</h6>
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
                    <h6>Easy booking</h6>
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
              <img src="/images/about-wx.svg" alt="prod" />
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
              <img src="./images/feature-ex.svg" alt="ic" />
              <h6>Analytics</h6>
              <p>
                Customize the advert listings by promoting sponsored adverts on
                your apps . Simply set the time frame and select the item to be
                featured.
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/star-ex.svg" alt="ic" />
              <h6>Automated Workflows</h6>
              <p>
                Ratings and reviews system in which all your customers can be
                the judge for product/ service quality for quality service and
                reviews
              </p>
            </div>

            <div className="feature ex">
              <img src="./images/clock-ex.svg" alt="ic" />
              <h6>Scalability</h6>
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
            <h5 style={{ color: primaryColor }}>
              All Types of Business can Use Co-Workspacex
            </h5>
            <h3>A Platform Built to Simplify Complexity</h3>
            <p>
              Different asset classes require different solutions. Co-Workspacex
              is built to support the unique workflows need for each kind of
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
          style={{ background: primaryColor }}
        >
          <h5>Let’s Collaborate</h5>
          <h3>Choose Co-workspaceX today so you can scale your tomorrow.</h3>

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
            CoolKong School 360 Solutions works for all use cases and strives
              to provide top-tier IT solutions to businesses of all sizes and
              locations in the learning industry
            </p>
          </div>

          <div className="schedules">
            <div className="sched-desc">
              <h5>Estate & Office Space Booking App</h5>
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
              <h5>Event & Office Space Booking App</h5>
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
              <h5 style={{ color: primaryColor }}>Our Tech Stacks</h5>
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
            <h5 style={{ color: primaryColor }}>Join. Sell. Earn</h5>
            <h3>Empower your Clients and business with Co-WorkspaceX</h3>
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
            Join leading coworking spaces now and start using Co-WorkspaceX
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
