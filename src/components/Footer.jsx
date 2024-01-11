import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faBehance,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/images/logo-footer.png";

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-white pt-20 relative z-0">
      <div className="flex justify-between items-center  my-4 mx-16">
        {/* Left Div - Logo */}
        <div>
          <img src={Logo}  alt="Logo" className="w-28" />
        </div>

        {/* Middle Div - Navigation and Social Logos */}
        <div className="text-center">
          {/* Navigation Links */}
          <div className="mb-4">
            <a href="#" className="text-white hover:text-white mx-4">
              Home
            </a>
            <a href="#" className="text-white hover:text-white mx-4">
              About
            </a>
            <a href="#" className="text-white hover:text-white mx-4">
              Projects
            </a>
          </div>

          {/* Social Media Logos */}
          <div className="mb-3">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white hover:text-white mx-2"
            />
            <FontAwesomeIcon
              icon={faBehance}
              className="text-white hover:text-white mx-2"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white hover:text-white mx-2"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-white hover:text-white mx-2"
            />
          </div>
        </div>

        {/* Right Div - Contact Me Button and Copyright */}
        <div className="text-right">
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md mr-4">
            Contact Me
          </button>
        </div>
      </div>
      <div className="text-white border-t-2 py-2 text-center">&copy; {currentYear} All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
