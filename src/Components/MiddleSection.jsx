import React from "react";
import { ReactComponent as Snappy } from "../images/icon-snappy-process.svg";
import { ReactComponent as Affordable } from "../images/icon-affordable-prices.svg";
import { ReactComponent as People } from "../images/icon-people-first.svg";
const MiddleSection = () => {
  return (
    <section className="middle-section flex-col flex-col-ai-c">
      <hr className="middle-section-line" />
      <div className="middle-section-title">
        <h1>We’re different</h1>
      </div>
      <div className="middle-section-articles ">
        <article className="middle-section-row middle-section-row1">
          <Snappy />
          <h2>Snappy Process</h2>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </article>
        <article className="middle-section-row middle-section-row2">
          <Affordable />
          <h2>Affordable Prices</h2>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </article>
        <article className="middle-section-row middle-section-row3">
          <People />
          <h2>People First</h2>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MiddleSection;
