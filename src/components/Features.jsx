import { useRef } from "react";
import { useInView } from "framer-motion";
import { featuresInfo } from "../utils/features";
import { scrollAnimation } from "../utils/animation";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section ref={ref} className="container-feature" id="Features">
      {featuresInfo.map((item, index) => {
        const { img, title, paragraph } = item;
        return (
          <div key={index} style={scrollAnimation(isInView)}>
            <figure>
              <img className="feature-image" src={img} alt="image" />
            </figure>
            <h1 className="feature-title">{title}</h1>
            <p className="feature-text">{paragraph}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
