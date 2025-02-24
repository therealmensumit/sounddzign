import { Link, NavLink } from "react-router-dom";
import { menu, logo } from "../../staticData/menu";
import { useState } from "react";
import { ScrollLink, Button } from "react-scroll";

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuButton = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header container md:!p-8 !p-4 text-base`}>
      <div className="flex">
        <Button to={"hero"} className="text-white font-extrabold cursor-pointer">
          {logo[0]}
          <span className="text-pink">{logo[1]}</span>
        </Button>
        <button
          onClick={handleMenuButton}
          className={`${menuOpen ? "menu-open" : ""
            } md:hidden ml-auto px-1 py-2`}>
          <div className="w-5 h-[3px] bg-white rounded-2xl transition-all duration-150 mb-1"></div>
          <div className="w-5 h-[3px] bg-white rounded-2xl transition-all duration-150"></div>
        </button>
        <div
          className={`${menuOpen ? "dropdown-open" : "hidden"
            } ml-auto md:block`}>
          <ul className="nav-links">
            {menu?.map((e) => (
              <li key={e.id}>
                <Button
                  className={`hover:text-pink cursor-pointer`}
                  to={e.name.split(' ').join('-').toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  activeClass="text-pink"
                >
                  {/* <NavLink className="hover:text-pink" to={e.link}> */}
                  {e.name}
                  {/* </NavLink> */}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
