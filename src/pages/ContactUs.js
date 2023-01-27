import React from "react";
import "./ContactUs.css";

import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { GiBugleCall } from "react-icons/gi";

export const ContactUs = () => {
  return (
    <>
      <section className="contacts-header">
        <div className="contact-bg"> </div>
        <div className="contact-header-content">
          <h1>Contact Us</h1>
          <p>FEEL FREE TO CALL US 24 HOURS</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-list">
          <div className="contact">
            <CiLocationOn style={{ fontSize: "3rem", color: "#3949ab" }} />
            <h3>Office Address</h3>
            <p>128 Itire Rd, Lawanson Surulere Lagos, Nigeria.</p>
          </div>
          <div className="contact">
            <HiOutlineMail style={{ fontSize: "3rem", color: "#3949ab" }} />
            <h3>Email Us</h3>
            <p>info@lampnets.com.</p>
          </div>
          <div className="contact">
            <GiBugleCall style={{ fontSize: "3rem", color: "#3949ab" }} />
            <h3>Call Us</h3>
            <p>+234 816 663 7303</p>
            <p>+234 706 953 6407</p>
          </div>
        </div>
      </section>
    </>
  );
};
