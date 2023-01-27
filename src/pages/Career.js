import React from "react";
import { Link } from "react-router-dom";
import { Reviews } from "../components/Reviews";
import "./Career.css";

export const Career = () => {
  return (
    <>
      <section className="career-header">
        <div className="career-bg"> </div>
        <div className="career-header-content">
          <h1>Careers</h1>
          <p>CURRENTLY JOBS OPENING</p>
        </div>
      </section>

      <section className="career-section">
        <h2>Together at Lampnet</h2>
        <p>Work With Us</p>

        <div className="jobs-section">
          <div className="jobs-left">
            <h2>Current Openings</h2>

            <div className="jobs">

              <div className="job">
                <h5>UI/UX Designer</h5>
                <div className="job-btn">
                  <Link>APPLY JOB</Link>
                </div>
              </div>

              <div className="job">
                <h5>Presales Engineer</h5>
                <div className="job-btn">
                  <Link>APPLY JOB</Link>
                </div>
              </div>

              <div className="job">
                <h5>Sales Intern</h5>
                <div className="job-btn">
                  <Link>APPLY JOB</Link>
                </div>
              </div>

            </div>
          </div>

          <div className="jobs-right">
            <img src="./images/career-img.jpg" alt="hands" />
          </div>
        </div>
      </section>

    </>
  );
};
