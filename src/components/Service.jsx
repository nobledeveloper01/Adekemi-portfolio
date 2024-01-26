import React from "react";
import ServiceImg from "../assets/images/service-logo.svg";

const Service = () => {
  return (
    <div className="lg:mt-10 mt-5 lg:py-8 py-5 bg-gray-500">
      <div className="mx-4 lg:mx-0">
        <h1 className="text-xl font-semibold  text-orange-500 py-3 text-center">
          My Services
        </h1>
        <h4 className="lg:text-3xl text-2xl font-bold mb-5 text-white text-center">
          Crafting Through Design and Innovation
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mx-20 mx-4 lg:my-10">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md ">
            {/* Logo */}
            <div className="text-center mb-4">
              {/* Your logo goes here */}
              <img
                src={ServiceImg}
                alt="Service 1 Logo"
                className="w-16 h-16 mx-auto "
              />
            </div>
            {/* Title */}
            <h3 className="text-xl text-center font-semibold mb-2 text-blue-600 ">
              Product Design
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-justify">
              Specialize in creating intuitive and visually appealing digital
              interfaces, focusing on enhancing user experiences through
              thoughtful design choices.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            {/* Logo */}
            <div className="text-center mb-4">
              {/* Your logo goes here */}
              <img
                src={ServiceImg}
                alt="Service 2 Logo"
                className="w-16 h-16 mx-auto"
              />
            </div>
            {/* Title */}
            <h3 className="text-xl text-center font-semibold mb-2 text-blue-600">
              UI/UX Design
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-justify">
              Translating user needs and business goals into intuitive and
              visually compelling digital solutions. My focus is on solving
              real-world problems through innovative design.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md ">
            {/* Logo */}
            <div className="text-center mb-4">
              {/* Your logo goes here */}
              <img
                src={ServiceImg}
                alt="Service 3 Logo"
                className="w-16 h-16 mx-auto"
              />
            </div>
            {/* Title */}
            <h3 className="text-xl text-center font-semibold mb-2 text-blue-600">
              Visual Design
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-justify">
              Translating user needs and business goals into intuitive and
              visually compelling digital solutions. My focus is on solving
              real-world problems through innovative design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
