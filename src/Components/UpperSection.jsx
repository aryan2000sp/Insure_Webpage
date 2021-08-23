import React from "react";

// Images or icons
import mobileImage from "../images/image-intro-mobile.jpg";
import { ReactComponent as DesignLeft } from "../images/bg-pattern-intro-left-mobile.svg";
const UpperSection = () => {
  return (
    <section className="upper-section">
      <div className="upper-section-img">
        <img src={mobileImage} alt="mobile" />
      </div>
      <article className="upper-section-info">
        <DesignLeft />
      </article>
    </section>
  );
};

export default UpperSection;
