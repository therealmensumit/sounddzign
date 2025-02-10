import { Link } from "react-router-dom";
import { hero } from "../../staticData/hero";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="line text-base">{hero.subTitle}</div>
        <h1 className="text-balance mb-8 text-[32px] md:text-[40px] font-bold font-alegreya">
          {hero.title}
        </h1>
        <Link to={hero.btnLink} role="button">
          <button className="btn">{hero.btnText}</button>
        </Link>
      </div>
    </section>
  );
};
