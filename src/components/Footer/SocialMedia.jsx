import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="container-social-media">
      <ul>
        <a target="_blank" href="https://www.facebook.com">
          <FaFacebookF color="#fff" />
        </a>
        <a target="_blank" href="https://www.twitter.com">
          <FaTwitter color="#fff" />
        </a>
        <a target="_blank" href="https://www.instagram.com">
          <FaInstagram color="#fff" />
        </a>
      </ul>
    </div>
  );
};

export default SocialMedia;
