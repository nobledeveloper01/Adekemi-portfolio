import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faFacebook,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-between mx-20 align-middle">
      {/* Logo div to the left */}
      <div className="w-28">
        <img src={Logo} alt="logo" />
      </div>

      <div className="flex items-center space-x-4 mx-5 justify-between">
        {/* Social media links */}
        <a href="YOUR_TWITTER_LINK" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faSquareXTwitter}
            className="w-6 h-6"
          />
        </a>
        <a
          href="http://www.linkedin.com/in/adekemi-adeleke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100007432507473" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
        </a>
        <a
          href="http://www.behance.net/adelekeadekemi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBehance} className="w-6 h-6" />
        </a>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-8 space-x-4">
        <NavLink to="/" className="text-blue-700" >
          Home
        </NavLink>
        <NavLink to="/about" >
          About
        </NavLink>
        <NavLink to="/projects" >
          Projects
        </NavLink>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <a href="mailto:adelekeadekemi22@gmail.com" className="text-white">
            Contact Me
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
