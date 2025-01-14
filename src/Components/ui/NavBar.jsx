import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

import { navLinks } from "../../constants/NavBar";

const Navbar = () => {
  return (
    <header className="py-5 px-5 w-[100vw] absolute text-white">
      <nav className="sticky top-0 flex justify-between items-center h-24 z-10">
        <Link to="/">
          <img
            src="./logo.svg"
            alt="logo"
            className="lg:ml-60 lg:w-[250px]   h-auto"
          />
        </Link>
        <ul className="flex-1 flex mr-40 justify-end items-center gap-10 max-lg:hidden rounded-full">
          {navLinks.map((link) => (
            <li key={link.display} className="link">
              <Link to={link.link}>{link.display}</Link>
            </li>
          ))}
        </ul>
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Navbar;
