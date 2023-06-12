import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollAnimation } from "../utils/animation";
import HeroImage from "../assets/illustration-intro.png";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section ref={ref} className="container-hero">
      <article style={scrollAnimation(isInView)}>
        <motion.img
          src={HeroImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          alt="ilustration-into.png"
          className="hero-ilustration"
          transition={{ duration: 2 }}
        />
        <h1 className="hero-title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="hero-text">
          Fylo strores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="hero-btn" type="button">
          Get Started
        </button>
      </article>
    </section>
  );
};

export default Hero;
