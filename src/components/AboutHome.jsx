import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "./about.css";
import Header from "./Header";
import Footer from "./footer";

const About = () => {
  return (
    <div>
      <div className=" p-8 mt-8">
        <div className="flex items-center">
          {/* Left Div */}
          <div className="flex-1 p-12 w-1/2">
            <h1 className="text-xl text-orange-500 font-bold mb-2">About Me</h1>
            <h4 className="text-gray-600 text-2xl mb-10">
              Transforming Ideas into Exceptional Designs
            </h4>
            <button className="bg-blue-500 text-white px-4 py-2 flex items-center rounded">
              Download
              <FontAwesomeIcon icon={faDownload} className="ml-2" />
            </button>
          </div>

          {/* Right Div */}
          <div className="flex-1 p-12 w-1/2">
            {/* Range Sliders */}
            <div className="mb-4 slidecontainer">
              <label className="block text-black mb-2">Web Design</label>
              <input
                type="range"
                disabled
                value="95"
                className="slider w-full appearance-none"
              />
            </div>

            <div className="mb-4 slidecontainer">
              <label className="block text-black mb-2">Web Design</label>
              <input
                type="range"
                disabled
                value="90"
                className="slider w-full appearance-none"
              />
            </div>

            <div className="mb-4 slidecontainer">
              <label className="block text-black mb-2">Web Design</label>

              <input
                type="range"
                disabled
                value="93"
                className="slider w-full appearance-none  "
              />
            </div>

            <div className="mb-4 slidecontainer">
              <label className="block text-black mb-2">Web Design</label>

              <input
                type="range"
                disabled
                value="88"
                className="slider w-full appearance-none  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
