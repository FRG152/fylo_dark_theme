import { TeamsInfo } from "../utils/teams";
import Quotes from "../assets/bg-quotes.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { scrollAnimation } from "../utils/animation";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section ref={ref} className="container-team" id="Team">
      <article style={scrollAnimation(isInView)}>
        <figure>
          <img className="team-quotes" src={Quotes} alt="quotes" />
        </figure>
        {TeamsInfo.map((item, index) => {
          const { comment, img, name, position } = item;
          return (
            <div className="team-box" key={index}>
              <p className="team-comment">{comment}</p>
              <div className="team-info">
                <img className="team-image" src={img} alt="profile" />
                <div className="team-person">
                  <h2 className="team-name">{name}</h2>
                  <span className="team-position">{position}</span>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Team;
