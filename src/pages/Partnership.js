import React from "react";
import "./Partnership.css"

import { Reviews } from "../components/Reviews";

export const Partnership = () => {
  return (
    <>
      <section className="partnership-section">
        <div className="partner-header">
          <div className="partner-left">
            <h2>Lampnet Alliance Programme (LAP)</h2>
            <p>
              Join hands with the fastest growing globally relevant IT Solutions
              Company and grab the opportunity to market and deliver tested and
              trusted world-class on-demand mobile app solutions which promises
              various life-time income opportunities.
            </p>
          </div>

          <div className="partner-right">
            <img src="./images/prog-header.jpg" alt="prog" />
          </div>
        </div>
      </section>

      <section className="programmes-section">
        <h2>Our Partners Programmes</h2>
        <div className="programmes">
          <div className="program">
            <div className="program-img">
              <img src="./images/program.png" alt="program" />
            </div>

            <div className="program-desc-h">
              <h4>Reference Partner</h4>
              <h3>
                The ‘Reference Partner Plan’ would be apt for individuals/firms
                having network with concerned business sectors in any manner.
                Prior marketing or technical skills not necessary. Invest little
                time and harvest revenue without any financial commitment and
                hassles.
              </h3>
            </div>

            <div className="program-desc-l">
              <ul>
                <li>
                  The Reference Partner needs to provide the client reference,
                  identify the potential client and hold the preliminary
                  discussions.
                </li>
                <li>
                  The online or on-site product demo, negotiation and order
                  finalization will be conducted by LampNet.
                </li>
                <li>
                  Contract/Billing for the product with the client will be
                  solely managed by LampNet.
                </li>
                <li>
                  Software Implementation, Training and After sales Support will
                  be carried out by LampNet.
                </li>
              </ul>
            </div>
          </div>

          <div className="program">
            <div className="program-img">
              <img src="./images/program.png" alt="program" />
            </div>

            <div className="program-desc-h">
              <h4>Associate Partner</h4>
              <h3>
                The ‘Associate Partner Plan’ would be apt for individual/firms
                having wide network with concerned business sectors. Prior
                marketing and technical skills needed. Invest time and effort
                without any financial commitments and harvest promising
                life-time income
              </h3>
            </div>

            <div className="program-desc-l">
              <ul>
                <li>
                  The Associate Partner would be required to identify the
                  client, demonstrate the product online/on-site, negotiation
                  and order finalization. The Partner will also deliver training
                  and provide after sales support once the product is installed
                </li>
                <li>
                  The Contract/Billing may be managed either by the Associate
                  Partner or by LampNet.
                </li>
                <li>
                  A business margin of 30-40% will be provided to the Associate
                  Partner depending upon the modules and license fee of the
                  product. This will also depend on the number of unit sales for
                  a fixed period
                </li>
                <li>
                  The Partner is eligible for the agreed business margin of the
                  recurring yearly license fee while the contract is valid.
                </li>
              </ul>
            </div>
          </div>

          <div className="program">
            <div className="program-img">
              <img src="./images/program.png" alt="program" />
            </div>

            <div className="program-desc-h">
              <h4>Exclusive Partner</h4>
              <h3>
                The ‘Exclusive Partner Plan’ would be apt for firms having wide
                network with concerned business sectors. Prior marketing and
                technical skills essential. Wise investment of time and money in
                exclusive areas with guaranteed life-time returns.
              </h3>
            </div>

            <div className="program-desc-l">
              <ul>
                <li>
                  The ‘Exclusive Partner Plan’ would be apt for firms having
                  wide network with concerned business sectors. Prior marketing
                  and technical skills essential. Wise investment of time and
                  money in exclusive areas with guaranteed life-time returns.
                </li>
                <li>
                  The Partner will also deliver training and provide after sales
                  support once the product is installed
                </li>
                <li>
                  The Contract/Billing may be managed by the Exclusive Partner.
                </li>
                <li>
                  A fixed margin of 50 % will be provided to the Exclusive
                  Partner.
                </li>
              </ul>
            </div>
          </div>

          <div className="program">
            <div className="program-img">
              <img src="./images/program.png" alt="program" />
            </div>

            <div className="program-desc-h">
              <h4>OEM Partner</h4>
              <h3>
                The ‘OEM Partner Plan’ well suits firms which opt for White
                Labelling/Re-brand instead of starting from the scratch. This
                Plan would be of great advantage to the firms that handle and
                market other products in the concerned business sector
              </h3>
            </div>

            <div className="program-desc-l">
              <ul>
                <li>
                  The Exclusive Partner would be required to identify the
                  client, demonstrate the product online/on-site, negotiation
                  and order finalization.
                </li>
                <li>
                  The Partner will also deliver training and provide after sales
                  support once the product is installed.
                </li>
                <li>The Contract/Billing may be managed by the OEM Partner</li>
                <li>Extra customization and upgradation can be availed.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-left">
          <h1>Our Partners</h1>
          <h3>Passion for people</h3>
        </div>
        <div className="partners-right">
          <img src="./images/hand.jpg" alt="hands" />
        </div>
      </section>
      <Reviews />
    </>
  );
};
