import { Link, NavLink } from "react-router-dom";
import { menu, logo } from "../../staticData/menu";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuButton = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={`header container md:!p-8 !p-4 text-base`}>
      <div className="flex">
        <Link to={"/"} className="text-white font-extrabold">
          {logo[0]}
          <span className="text-pink">{logo[1]}</span>
        </Link>
        <button
          onClick={handleMenuButton}
          className={`${
            menuOpen ? "menu-open" : ""
          } md:hidden ml-auto px-1 py-2`}>
          <div className="w-5 h-[3px] bg-white rounded-2xl transition-all duration-150 mb-1"></div>
          <div className="w-5 h-[3px] bg-white rounded-2xl transition-all duration-150"></div>
        </button>
        <div
          className={`${
            menuOpen ? "dropdown-open" : "hidden"
          } ml-auto md:block`}>
          <ul className="nav-links">
            {menu?.map((e) => (
              <li key={e.id}>
                <NavLink className="hover:text-pink" to={e.link}>
                  {e.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
