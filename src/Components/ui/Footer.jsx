import { Link } from "react-router-dom";
import { navLinks } from "../../constants/NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPinterest,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      {/* Large Devices */}
      <div className="bg-black w-screen h-[20vh] text-white sm:hidden ms:hidden xs:hidden lg:block">
        <div className="flex justify-between">
          {/* Left section: Logo and navigation links */}
          <div className="flex flex-col ml-40 mt-10">
            <img src="./logo.svg" width={229} className="m-4" />
            <div className="m-4">
              <ul className="flex-1 flex mr-40 justify-end items-center gap-10 max-lg:hidden rounded-full">
                {navLinks.map((link) => (
                  <li key={link.display} className="link">
                    <Link to={link.link}>{link.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right section: Social icons and copyright */}
          <div className="flex flex-col items-end mr-40 mt-16">
            {/* Social Icons */}
            <div className="flex gap-6 mb-4">
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="text-white text-2xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white text-2xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white text-2xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white text-2xl hover:text-gray-400"
                />
              </a>
            </div>

            {/* Copyright Info */}
            <div className="text-gray-500 text-sm">
              © 2025 Loopstudios. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Small Devices */}
      
      <div className="bg-black w-screen h-auto text-white lg:hidden ms:block xs:block sm:block">
        <div className="flex flex-col justify-center">
          {/* Top section: Logo and navigation links */}
          <div className="flex flex-col justify-center items-center">
            <img src="./logo.svg" width={200} className="m-10" />
            <div className="m-4">
              <ul className="flex-1 flex text-2xl flex-col gap-5 tracking-widest justify-center items-center">
                {navLinks.map((link) => (
                  <li key={link.display} className="link">
                    <Link to={link.link}>{link.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section: Social icons and copyright */}
          <div className="flex flex-col items-center mt-20 mb-20">
            {/* Social Icons */}
            <div className="flex gap-6 mb-4">
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="text-white text-2xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white text-2xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white text-2xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white text-2xl hover:text-gray-400"
                />
              </a>
            </div>

            {/* Copyright Info */}
            <div className="text-gray-500 text-sm">
              © 2025 Loopstudios. All rights reserved.
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
