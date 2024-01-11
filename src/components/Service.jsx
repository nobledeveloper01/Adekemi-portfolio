import React from "react";
import ServiceImg from "../assets/images/service-logo.svg";

const Service = () => {
  return (
    <div className="mt-10 py-10 bg-gray-500">
      <div>
        <h1 className="text-xl font-semibold  text-orange-500 py-3 text-center">
          My Services
        </h1>
        <h4 className="text-3xl font-bold mb-5 text-white text-center">
          Crafting Through Design and Innovation
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-20 my-10">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md ">
            {/* Logo */}
            <div className="text-center mb-4">
              {/* Your logo goes here */}
              <img
                src={ServiceImg}
                alt="Service 1 Logo"
                className="w-16 h-16 mx-auto hover:text-white"
              />
            </div>
            {/* Title */}
            <h3 className="text-xl text-center font-semibold mb-2 text-blue-600 ">
              Product Design
            </h3>
            {/* Description */}
            <p className="text-gray-600">
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
            <p className="text-gray-600">
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
              Product Design
            </h3>
            {/* Description */}
            <p className="text-gray-600">
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
