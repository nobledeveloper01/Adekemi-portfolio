import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "./about.css";
import Header from "./Header";
import Footer from "./footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className=" lg:p-8 lg:mt-8">
      <div className=" lg:p-5 lg:mt-6 mx-4 mt-6">
        <div className="flex lg:flex-row flex-col lg:items-center">
          {/* Left Div */}
          <div className="flex-1 lg:p-8 lg:w-1/2">
            <h1 className="text-xl text-center lg:text-left text-orange-500 font-bold mb-2">
              About Me
            </h1>
            <h4 className="text-gray-600 text-center lg:text-left text-2xl mb-10">
              Transforming Ideas into Exceptional Designs
            </h4>
            <button className="bg-blue-500 text-white px-4 py-2 flex items-center rounded mx-auto lg:mx-0 lg:float-left">
            <a href="https://drive.google.com/file/d/1eUDlXwqW76EM3uPgW8IUly83dZfuSwht/view?usp=drivesdk " target="_blank" >
                Download
              </a>
              <FontAwesomeIcon icon={faDownload} className="ml-2" />
            </button>
          </div>

          {/* Right Div */}
          <div className="flex-1  lg:w-1/2 mx-4">
            {/* Range Sliders */}
            <div className="mb-4 slide container mt-7">
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
      <Footer />
    </div>
  );
};

export default About;
