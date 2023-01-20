import React from 'react';
import "./Contact.css"

export const Contact = () => {
    return (
      <section className="contact-section">
        <div>
          <h1 className="prod-header">CONTACT US</h1>
        </div>

        <div className="form-section">
          <form>
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  margin: "1rem 0 0",
                }}
              />
              <input
                type="text"
                placeholder="Your Email"
                style={{
                  margin: "1rem 0 0 1rem",
                }}
              />
            </div>

            <input
              type="text"
              placeholder="Your Subject"
              style={{
                margin: "1rem 2rem 0 0",
              }}
            />
            <textarea
              type="text"
              placeholder="Your Message"
              style={{
                margin: "1rem 0 0 0",
                height: "13rem",
                padding: "1rem",
              }}
            />

            <div>
              <button>SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </section>
    );
}