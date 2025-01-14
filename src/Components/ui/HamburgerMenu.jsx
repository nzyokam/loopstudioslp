import { Link } from "react-router-dom";
import "../ui/Hamburger.css";
import { navLinks } from "../../constants/NavBar";

const HamburgerMenu = () => {
  const showSideBar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.transform = "translateX(0)";
  };
  const hideSideBar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.transform = "translateX(100%)";
  };

  return (
    <div className="lg:hidden">
      <button className="hamburger" onClick={showSideBar}>
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </button>
      <nav id="sidebar" className="menu">
        <div className="flex justify-between mt-10 m-5">
          <Link to="/">
            <img src="./logo.svg" alt="logo" className="h-auto mr-[50vw]" />
          </Link>
          <button
            className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
            title="Close SideBar"
            onClick={hideSideBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="44"
              height="44"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="x-button"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className="mt-20 m-10">
          
          {navLinks.map((link) => (
            <li key={link.display} className="light mt-[10vw] uppercase text-4xl" onClick={hideSideBar}>
              <Link to={link.link}>{link.display}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
