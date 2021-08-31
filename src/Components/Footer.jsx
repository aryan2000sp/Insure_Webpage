import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section-title flex-col flex-col-ai-c">
        <Logo className="logo" />
        <div className="social-media">
          <Facebook className="icon" />
          <Instagram className="icon" />
          <Twitter className="icon" />
          <Pinterest className="icon" />
        </div>
      </div>
      <hr className="footer-section-line" />

      <div className="footer-section-main-info">
        <div className="footer-section-row1 footer-section-row flex-col flex-col-ai-c">
          <article className="col1 col">
            <h1>OUR COMPANY</h1>
            <h2>HOW WE WORK</h2>
            <h2>WHY INSURE?</h2>
            <h2>CHECK PRICE</h2>
            <h2>REVIEWS</h2>
          </article>
          <article className="col2 col">
            <h1>HELP ME</h1>
            <h2>FAQ</h2>
            <h2>TERMS OF USE</h2>
            <h2>PRIVACY POLICY</h2>
            <h2>COOKIES</h2>
          </article>
        </div>
        <div className="footer-section-row2 footer-section-row flex-col flex-col-ai-c">
          <article className="col1 col">
            <h1>CONTACT</h1>
            <h2>SALES</h2>
            <h2>SUPPORT</h2>
            <h2>LIVE CHAT</h2>
          </article>
          <article className="col2 col">
            <h1>OTHERS</h1>
            <h2>CAREERS</h2>
            <h2>PRESS</h2>
            <h2>LICENSES</h2>
          </article>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
