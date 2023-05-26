import React from 'react';
import "./Contact.css"

export const Contact = () => {
    return (
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 contact-about-left">
              <h2>Get In Touch With Our Experts</h2>
              <h3>
                Do you have a project in mind or you want to start a
                conversation with us?
              </h3>

              <p>
                We’re ready assist you in brainstorming ideas and execution
                process about your upcoming product launch.
              </p>

              <h6>Our Contact Info</h6>

              <div className="cont-item" style={{ padding: "1rem 0 0 0" }}>
                <img
                  src="./images/call-dark.svg"
                  style={{ margin: "-1rem 0.5rem 0 0" }}
                  alt="ic"
                />
                <p>+234 816 663 7303</p>
              </div>

              <div className="cont-item">
                <img
                  src="./images/sms-dark.svg"
                  style={{ margin: "-1rem 0.5rem 0 0" }}
                  alt="ic"
                />
                <p>support@lampnets.com</p>
              </div>
            </div>
            <div className="col-md-6 contact-about-right">
              <form>
                <div className="top-form-section">
                  <input type="text" placeholder="Your full name" />

                  <input
                    type="text"
                    placeholder="Your email address"
                    style={{ margin: "1rem 0" }}
                  />

                  <input type="text" placeholder="Your phone number" />
                </div>
                <div
                  className="bottom-form-section"
                  style={{ paddingTop: "1rem" }}
                >
                  <textarea type="text" placeholder="Your message" />
                </div>

                <button type="submit">Talk to Us</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}