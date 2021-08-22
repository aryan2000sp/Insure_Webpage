import React from "react";

// Images or icons
import mobileImage from "../images/image-intro-mobile.jpg";
import designCurve1 from "../images/bg-pattern-intro-left-mobile.svg";
const UpperSection = () => {
  return (
    <section className="upper-section">
      <div className="upper-section-img">
        <img src={mobileImage} alt="mobile" />
      </div>
      <article className="upper-section-info">
        <img src={designCurve1} alt="" />
      </article>
    </section>
  );
};

export default UpperSection;
