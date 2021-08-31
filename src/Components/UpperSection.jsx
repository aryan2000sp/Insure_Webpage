import React from "react";

// Images or icons
import mobileImage from "../images/image-intro-mobile.jpg";
import desktopImage from "../images/image-intro-desktop.jpg";
// import { ReactComponent as DesignLeft } from "../images/bg-pattern-intro-left-mobile.svg";
const UpperSection = () => {
  // const clicked = () => {
  //   console.log("Clicked");
  // };
  return (
    <section className="upper-section">
      <div className="mobile-img">
        <img src={mobileImage} alt="mobile" className="image-1" />
      </div>
      <article className="upper-section-article flex-row flex-row-jc-c">
        <div className="desktop-img">
          <img src={desktopImage} alt="mobile" className="image-1" />
        </div>
        <div className="info flex-col flex-col-ai-c">
          <hr
            className="line"
            // style={{ width: "9.375rem", border: "0.25px solid #fff" }}
          />
          <h1>
            Humanizing <br />
            your insurance.
          </h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button>view plans</button>
        </div>
      </article>
    </section>
  );
};

export default UpperSection;
