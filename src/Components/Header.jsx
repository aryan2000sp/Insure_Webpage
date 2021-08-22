// Import react tools
import { useState } from "react";

// Import images, icon
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";
import { ReactComponent as NavImage } from "../images/bg-pattern-mobile-nav.svg";

const Header = () => {
  // Set the initial state of the component.
  const [show, setShow] = useState(false);
  return (
    <header className="header">
      <nav className="header-nav flex-row flex-row-jc-sb flex-row-ai-c">
        <Logo />
        {/* <img
          src={show ? close : hamburger}
          alt="hamburger-menu"
          onClick={() => setShow(!show)}
          className="header-mobile"
        /> */}

        {show ? (
          <Close
            onClick={() => {
              setShow(!show);
            }}
            className="header-mobile"
          />
        ) : (
          <Hamburger
            onClick={() => {
              setShow(!show);
            }}
            className="header-mobile"
          />
        )}

        {/* This is the section navigation bar for the desktop view */}
        <section className="header-desktop flex-row flex-row-ai-c">
          <ul className="flex-row">
            <li>
              <a href="/">HOW WE WORK</a>
            </li>
            <li>
              <a href="/">BLOG</a>
            </li>
            <li>
              <a href="/">ACCOUNT</a>
            </li>
          </ul>
          <button>VIEW PLANS</button>
        </section>
      </nav>
      {show && <PopupNav />}
    </header>
  );
};

const PopupNav = () => {
  return (
    <section className="header-popup-nav">
      <div className="links flex-col">
        <a href="/">HOW WE WORK</a>
        <a href="/">BLOG</a>
        <a href="/">ACCOUNT</a>
        <button>VIEW PLANS</button>
      </div>
      {/* <img src={navImage} alt="nav" /> */}

      <div className="header-svg">
        <NavImage />
      </div>
    </section>
  );
};
export default Header;
