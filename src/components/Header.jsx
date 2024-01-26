import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faFacebook,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white p-4 flex items-center justify-between mx-2 lg:mx-16 align-middle">
      {/* Logo div to the left */}
      <div className="w-28">
        <img src={Logo} alt="logo" />
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="w-6 h-6 text-black cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Navigation */}

      <div className="hidden lg:flex items-center justify-between gap-8 space-x-4">
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mx-5 mr-20 justify-between">
          {/* Social media links */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              className="w-6 h-6 text-black hover:text-blue-800"
            />
          </a>
          <a
            href="http://www.linkedin.com/in/adekemi-adeleke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-6 h-6 text-black hover:text-blue-800"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100007432507473"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-6 text-black hover:text-blue-800"
            />
          </a>
          <a
            href="http://www.behance.net/adelekeadekemi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faBehance}
              className="w-6 h-6 text-black hover:text-blue-800"
            />
          </a>
        </div>
        <NavLink
          to="/"
          className={`nav-link ${
            location.pathname === "/"
              ? "text-blue-700"
              : "text-black hover:text-blue-700"
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`nav-link ${
            location.pathname === "/about"
              ? "text-blue-700"
              : "text-black hover:text-blue-700"
          }`}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={`nav-link ${
            location.pathname === "/projects"
              ? "text-blue-700"
              : "text-black hover:text-blue-700"
          }`}
        >
          Projects
        </NavLink>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <a href="mailto:adelekeadekemi22@gmail.com" target="_blank">
            Contact Me
          </a>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="p-4 flex items-center justify-between">
            <div className="w-28">
              <img src={Logo} alt="logo" />
            </div>
            <FontAwesomeIcon
              icon={faBars}
              className="w-6 h-6 text-black cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
          <div className="flex flex-col items-center mt-8">
            <NavLink
              to="/"
              className={`mb-4 text-xl nav-link ${
                location.pathname === "/"
                  ? "text-blue-700"
                  : "text-black hover:text-blue-700"
              }`}
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`nav-link mb-4 text-xl ${
                location.pathname === "/about"
                  ? "text-blue-700"
                  : "text-black hover:text-blue-700"
              }`}
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={`nav-link mb-4 text-xl ${
                location.pathname === "/projects"
                  ? "text-blue-700"
                  : "text-black hover:text-blue-700"
              }`}
              onClick={toggleMobileMenu}
            >
              Projects
            </NavLink>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              <a
                href="mailto:adelekeadekemi22@gmail.com"
                className="text-white"
              >
                Contact Me
              </a>
            </button>
            {/* Social Media Icons */}
            <div className="flex mt-8 ">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-500 text-2xl mr-4 border border-blue-500 py-2 px-3 rounded hover:bg-blue-700 hover:text-white"
              />
              <FontAwesomeIcon
                icon={faBehance}
                className="text-blue-500 text-2xl mr-4 border border-blue-500 py-2 px-3 rounded hover:bg-blue-700 hover:text-white"
              />
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="text-blue-500 text-2xl mr-4 border border-blue-500 py-2 px-3 rounded hover:bg-blue-700 hover:text-white"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-500 text-2xl mr-4 border border-blue-500 py-2 px-3 rounded hover:bg-blue-700 hover:text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
