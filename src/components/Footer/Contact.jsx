import iconPhone from "../../assets/icon-phone.svg";
import iconEmail from "../../assets/icon-email.svg";

const Contact = () => {
  return (
    <div className="container-contact">
      <ul>
        <li>
          <img className="contact-icon" src={iconPhone} alt="phone" />
          <span className="contact-text">+1-543-123-4567</span>
        </li>
        <li>
          <img className="email-icon" src={iconEmail} alt="phone" />
          <span className="contact-text">example@fylo.com</span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
