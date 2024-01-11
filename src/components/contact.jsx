import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareXTwitter,
  faBehance,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact-section lg:mx-16 mt-5 lg:mt-10 relative z-10 bg-white rounded-3xl p-6 shadow-2xl lg:mb-[-50px]">
      <div className="flex lg:flex-row flex-col justify-between ">
        {/* Left Div */}
        <div className="left-div lg:w-1/2 lg:pr-12 lg:mt-16">
          <h1 className=" text-xl lg:text-2xl font-bold mb-4 text-red-500">
            Let’s discuss your project
          </h1>
          <p className="text-gray-600 text-md mb-8">
            Do you have a concept you'd like to bring to life? Feel free to
            reach out to me, let’s build something innovative together.
          </p>
          <div className="flex items-center mb-4">
            <div className="mr-4 bg-gray-200 py-2 px-3 rounded">
              {/* Gmail Logo */}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-500 text-2xl"
              />
            </div>
            <div>
              <h1 className=" text-md lg:text-xl font-bold">Email</h1>
              <p className="text-sm lg:text-xl ">adelekeadekemi22@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 bg-gray-200 py-2 px-3 rounded">
              {/* Phone Icon */}
              <FontAwesomeIcon
                icon={faPhone}
                className="text-blue-500 text-2xl"
              />
            </div>
            <div>
              <h1 className=" text-md lg:text-xl font-bold">Phone</h1>
              <p className="text-sm lg:text-xl">+2348167095747</p>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex mt-8 ">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-500 text-xl lg:text-2xl mr-4 border border-blue-500 py-2 px-3 rounded  hover:bg-blue-700 hover:text-white"
            />
            <FontAwesomeIcon
              icon={faBehance}
              className="text-blue-500 text-xl lg:text-2xl mr-4 border border-blue-500 py-2 px-3 rounded  hover:bg-blue-700 hover:text-white"
            />
            <FontAwesomeIcon
              icon={faSquareXTwitter}
              className="text-blue-500 text-xl lg:text-2xl mr-4 border border-blue-500 py-2 px-3 rounded  hover:bg-blue-700 hover:text-white"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-blue-500 text-xl lg:text-2xl mr-4 border border-blue-500 py-2 px-3 rounded hover:bg-blue-700 hover:text-white"
            />
          </div>
        </div>

        {/* Right Div */}
        <div className="right-div lg:w-1/2 lg-pr-8 mt-10 lg:mt-0">
          <form>
            <label className="block text-lg font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-200 rounded mb-4"
            />

            <label className="block text-lg font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-200 rounded mb-4"
            />

            <label className="block text-lg font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 bg-gray-200 rounded mb-4"
            />

            <label className="block text-lg font-bold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-200 rounded mb-4"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 w-full rounded-xl hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
