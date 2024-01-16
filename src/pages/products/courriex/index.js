import React, { useRef, useState } from "react";
import "../product.css";
import { PartnerImg } from "../../../components/PartnerImg";
import { Link } from "react-router-dom";
import { Button } from "../../../components/products/Button";

const primaryColor = "#54BD95";
const onPrimaryColor = "white";

export const Courier = () => {
  const [titleDat, setApproachData] = useState(titleData[0]);
  const [activeData, setActiveApproach] = useState(titles[0]);
  const [scrollIcon, setScrollIcon] = useState("./images/Scroll-l-a.svg");
  const scrollContainerRef = useRef(null);

  const handleApproachClick = (approachTitle) => {
    for (let i = 0; i < titleData.length; i++) {
      if (titleData[i].id === approachTitle.id) {
        setApproachData(titleData[i]);
      }
    }
  };

  const handleActiveApproach = (approach) => {
    setActiveApproach(approach);
  };

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

  const changeToGreenIcon = () => setScrollIcon("./images/Scroll-l-g.svg");
  const changeToAshIcon = () => setScrollIcon("./images/Scroll-l-a.svg");

  return (
    <>
      <section className="cx-hero-sec">
        <div className="cx-hero">
          <div className="cx-hero-l">
            <h5>CourierX</h5>
            <h3>Manage your</h3>
            <p>
              CourierX is an all-in-one customizable delivery management
              software to keep track of delivery operations, for all types of
              businesses
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
            <img src="./images/cx-hero.svg" alt="hero" />
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
            <h5>One Platform, All Deliveries</h5>
            <h3>Boost Your Delivery Management and Enjoy Increase ROI </h3>
            <p>
              CoolKong Solutions strives to provide top-tier IT solutions to
              businesses of all sizes and locations from industry experts
            </p>
          </div>

          <div className="plarts">
            <div className="serv-card">
              <img src="./images/clock-g.svg" alt="ic" />

              <h6>Customer App</h6>
              <p>
                On demand delivery app for customer’s orders and real time
                delivery tracking. Payment through multiple gateways are also
                available
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-g.svg" alt="ic" />

              <h6>Driver App</h6>
              <p>
                Advanced analytics to analyze data and reports to improve and
                optimize the performance of fleets and drivers. Ensure on-time
                deliveries with easy navigation
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-g.svg" alt="ic" />

              <h6>Delivery Management App</h6>
              <p>
                Advanced analytics to analyze data and reports to improve and
                optimize the performance of fleets and drivers. Ensure on-time
                deliveries with easy navigation
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cx-solution-sec">
        <div className="container">
          <div className="plart-t">
            <h5>Our Solutions</h5>
            <h3>Transform The Way You Handle Your Logistics Needs</h3>
            <p>
            CoolKong Solutions strives to provide top-tier IT solutions to
              businesses of all sizes and locations from industry experts
            </p>
          </div>

          <div className="plart-b">
            <div className="plart-b-left">
              <h3>Real-Time Tracking and Local language Integration</h3>

              <div className="track-desc">
                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Live Map</h6>
                    <p>
                      Fully-integrated live map view and notifications that
                      keeps you and your customers updated with real-time driver
                      locations.
                    </p>
                  </div>
                </div>

                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Streamlined Communication</h6>
                    <p>
                      Enhances customer communication by allowing them to
                      contact their dispatchers, drivers, and admin with just a
                      single tap.
                    </p>
                  </div>
                </div>

                <div className="track-item">
                  <div>
                    <input type="radio" checked />
                  </div>

                  <div>
                    <h6>Privacy and Security</h6>
                    <p>
                      You may keep calls anonymous for safety and privacy
                      without fear of security breach.
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
              <img src="/images/cx-sol.svg" alt="prod" />
            </div>
          </div>
        </div>
      </section>

      <section className="cx-features-sec">
        <div className="container">
          <div className="feature-t">
            <h5>The Features</h5>
            <h3>The Most Versatile Logistics & Delivery Management Platform</h3>

            <p>
              We understand your idea is unique, and so should be your product,
              hence we combine our resouces to accelerate the growth of your
              startup from ideation to execution
            </p>
          </div>

          <div className="scroll-btns">
            <button onClick={handleScrollLeft}>
              <img src={scrollIcon} alt="ic" />
            </button>
            <button onClick={handleScrollRight}>
              <img src="./images/scroll-r.svg" alt="ic" />
            </button>
          </div>
        </div>
        <div className="feature-b">
          <div className="features" ref={scrollContainerRef}>
            <div className="feature p">
              <img src="./images/feature-g.svg" alt="ic" />
              <h6>Featured Adverts</h6>
              <p>
                Customize the advert listings by promoting sponsored adverts on
                your apps . Simply set the time frame and select the item to be
                featured.
              </p>
            </div>

            <div className="feature p">
              <img src="./images/star-g.svg" alt="ic" />
              <h6>Ratings and Reviews</h6>
              <p>
                Ratings and reviews system in which all your customers can be
                the judge for product/ service quality for quality service and
                reviews
              </p>
            </div>

            <div className="feature p">
              <img src="./images/clock-g.svg" alt="ic" />
              <h6>Increased Productivity</h6>
              <p>
                Calculate real-time estimated time of arrival (ETA) with our
                last mile delivery system along with real-time re-routing and
                delivery route optimization.
              </p>
            </div>

            <div className="feature p">
              <img src="./images/clock-g.svg" alt="ic" />
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
            <h5>All businesses can use CourierX</h5>
            <h3>Get a Jump-start with Our Pre-built Logistics Solution</h3>
            <p>
              All businesses dealing with pickup, delivery, workforce management
              and are focused on satisfying their customers
            </p>
          </div>
        </div>

        <div className="cx-businesses">
          <div className="cx-business">
            <img src="./images/logistics-g.svg" alt="ic" />
            <p>Logistics</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-g.svg" alt="ic" />
            <p>Freight Forwarder</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-g.svg" alt="ic" />
            <p>Manufacturing</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-g.svg" alt="ic" />
            <p>Quick Service Restaurants</p>
          </div>

          <div className="cx-business">
            <img src="./images/freight-g.svg" alt="ic" />
            <p>Courier & Parcel</p>
          </div>
        </div>
      </section>

      <section className="cx-collaborate-sec">
        <div
          className="container cx-collab"
          style={{ background: primaryColor }}
        >
          <h5>Let’s Collaborate</h5>
          <h3>
            Smooth delivery experience Guaranteed with our Ready-to-Launch
            Delivery Management Software
          </h3>

          <div className="cx-collab-btns">
            <button>Download Now</button>
            <button>Become a Reseller</button>
          </div>
        </div>
      </section>

      <section className="cx-competition-sec">
        <div className="container">
          <div className="plart-t">
            <h5>Win Against The Competition</h5>
            <h3>White-Label Software for Your Needs</h3>
            <p>
              Expand Your On-demand Delivery Business with the Influence of our
              ready-to-use 100% Customizable Software Solution for profitable
              results in your Company
            </p>
          </div>

          <div className="cx-needs">
            <div className="serv-card">
              <img src="./images/clock-g.svg" alt="ic" />

              <h6>100% Customization</h6>
              <p>
                Ready-to-use and fully customizable features of our on-demand
                delivery software to suit your business needs to suit your
                business needs
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/clock-g.svg" alt="ic" />

              <h6>Source Code Ownership</h6>
              <p>
                Integrate CourierX with your existing tools with little or no
                coding for both native and IOS devices both native and IOS
                devices
              </p>
            </div>

            <div className="serv-card">
              <img src="./images/code-g.svg" alt="ic" />

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

      <section className="cx-sol-sec">
        <div className="container">
          <div className="cx-sol">
            <div className="cx-sol-left">
              <h5>Solution for all Businesses</h5>
              <h4>What is Your Company Type?</h4>
              <div className="cx-l-card">
                {titles.map((title) => (
                  <div
                    className={
                      activeData.id === title.id
                        ? "cx-l-card-item active"
                        : "cx-l-card-item"
                    }
                    onClick={() => {
                      handleApproachClick(title);
                      handleActiveApproach(title);
                    }}
                  >
                    <img
                      src={
                        activeData.id === title.id
                          ? "./images/rocket-g.svg"
                          : "./images/rocket-w.svg"
                      }
                      alt="ic"
                    />
                    <p>{title.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cx-sol-right">
              <img src={titleDat.icon} alt="ic" />

              <h4>{titleDat.title}</h4>

              <p>{titleDat.sub_title}</p>

              <div className="cx-title-des">
                <input type="radio" checked />
                <p>{titleDat.des_1}</p>
              </div>
              <div className="cx-title-des">
                <input type="radio" checked />
                <p>{titleDat.des_2}</p>
              </div>

              <Button
                primary
                onPrimaryColor={onPrimaryColor}
                primaryColor={primaryColor}
                content={"Build With Us"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flexibility-sec" style={{paddingTop: "4rem"}}>
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
              <h5>CourierX Courier & Logistics App</h5>
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
              <h5>CourierX Courier & Logistics Website</h5>
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
              <h5>CourierX Delivery Management Solution</h5>
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
          <h3>
            Smooth delivery experience Guaranteed with our Ready-to-Launch
            Delivery Management Software
          </h3>

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

const titles = [
  {
    id: 1,
    title: "Startup",
  },
  {
    id: 2,
    title: "SMB’s",
  },
  {
    id: 3,
    title: "Franchises",
  },
  {
    id: 4,
    title: "Enterprise",
  },
];

const titleData = [
  {
    id: 1,
    title: "Startup",
    sub_title: "Focused on Growing Business",
    icon: "./images/rocket-b-w.svg",
    des_1:
      "I am serious and committed to the budget, looking to work in this online business for at least one year.",
    des_2: "My company is already running & receiving real orders.",
  },
];
