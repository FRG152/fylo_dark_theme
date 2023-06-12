import { BsArrowRightShort } from "react-icons/bs";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { scrollAnimation } from "../utils/animation";
import FeatureImage from "../assets/illustration-stay-productive.png";

const More = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section ref={ref} className="container-more">
      <article style={scrollAnimation(isInView)}>
        <figure className="more-image">
          <img style={{ marginBottom: "50px" }} src={FeatureImage} alt="" />
        </figure>
        <div className="more-content">
          <h1 className="more-title">Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="more-link">
            <a href="#">See how Fylo works</a>
            <BsArrowRightShort size={20} className="more-icon" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default More;
