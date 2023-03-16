import React from 'react';
import "./Contact.css"

export const Contact = () => {
    return (
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 contact-about-left">
              <h5>Contact Us</h5>
              <h3>
                Do you have a project in mind or you want to start a
                conversation with us?
              </h3>

              <p>
                Let's start the conversation about your upcoming product launch,
                and we'll assist you in brainstorming ideas and execution
                process.
              </p>
            </div>
            <div className="col-md-6 contact-about-right">
              <form>
                <div className="top-form-section">
                  <input type="text" placeholder="Your full name" />

                  <input type="text" placeholder="Your email address" />

                  <input type="text" placeholder="Your phone number" />
                </div>
                <div className="bottom-form-section">
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