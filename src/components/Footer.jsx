import Logo from "../assets/logo.svg";
import Contact from "./Footer/Contact";
import Location from "./Footer/Location";
import Menu from "./Footer/Menu";
import SocialMedia from "./Footer/SocialMedia";

const Footer = () => {
  return (
    <footer>
      <figure>
        <img className="footer-logo" src={Logo} alt="logo" />
      </figure>
      <div className="footer-box">
        <Location />
        <Contact />
        <Menu />
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
