import { Link } from "react-router-dom";
import { logo } from "../../staticData/menu";
import { footer } from "../../staticData/footer";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white font-alegreya">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 mb-7">
          <div>
            <Link
              to={"/"}
              className="text-white font-extrabold inline-block mb-4 font-inter">
              {logo[0]}
              <span className="text-pink">{logo[1]}</span>
            </Link>
            <div className="flex gap-4">
              {footer?.social?.map((e) => (
                <Link to={e.link} key={e.id} target="_blank">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d={e.path} fill={e.fill} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-light-pink mb-2 font-bold text-lg">
              Quick Links
            </h5>
            <ul className="ps-4">
              {footer?.["Quick Links"]?.map((e) => (
                <li key={e.id} className="not-last:mb-1">
                  <Link className="hover:text-pink" to={e.link}>
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-light-pink mb-2 font-bold text-lg">
              Contact Us
            </h5>
            <ul className="ps-4">
              {footer?.["Contact Us"]?.map((e) => (
                <li key={e.id} className="not-last:mb-1">
                  <Link className="hover:text-pink" to={e.link}>
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          {footer.copyright} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
