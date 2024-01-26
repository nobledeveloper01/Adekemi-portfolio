import React from "react";
import ProjectOne from "../assets/images/Aventour.png";
import ProjectTwo from "../assets/images/Homehub.png";
import ProjectThree from "../assets/images/Heychat.png";
import ProjectFour from "../assets/images/Alltask.png";
import { Link } from "react-router-dom";


const Project = () => {
  return (
    <div>
      <div className="project-section mx-5 mt-8 lg:mx-16">
      <h1 className="text-xl text-orange-500 text-center font-bold mb-4">
        Projects
      </h1>
      <h4 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
        Check out my latest projects
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First Card */}
        <div className="project-card">
          <img src={ProjectOne} alt="Project 1" className="w-full h-auto" />
          <div className="live-website bg-gray-300 text-orange-500 py-1 px-2 inline-block mt-5 mb-2 rounded-full">
            Live Website
          </div>

          <h2 className="text-xl font-bold mb-2">AVENTOUR</h2>
          <p className="text-gray-700 mb-4">
            A tourism website that showcases the beauty of sights and sounds of
            tourism centers located in Ekiti State.
          </p>
          <div className="mt-3 flex ">
            {/* Hire Me button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white lg:px-4 lg:py-3 mr-2 px-2 py-1 lg:mr-4 flex items-center rounded">
            <a href="https://www.behance.net/gallery/182394109/Adventour-Tourism-Website-Case-Study" target="_blank">
                View Case Study
              </a>
            </button>

            {/* View Portfolio button */}
            <button className="bg-white text-blue-700 hover:text-white hover:bg-blue-700 border border-blue-700 lg:px-4 lg:py-3 mr-2 px-2 py-1 lg:mr-4 flex items-center rounded">
            <a href="https://adventour-one.vercel.app" target="_blank" >
            View Website
              </a>
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="project-card">
          <img src={ProjectTwo} alt="Project 2" className="w-full h-auto" />
          <div className="live-website bg-gray-300 text-orange-500 py-1 px-2 inline-block mt-5 mb-2 rounded-full">
            Case study
          </div>
          <h2 className="text-xl font-bold mb-2">HOMEHUB</h2>
          <p className="text-gray-700 mb-4">
            A mobile application that allows users browse and rent apartment
            using your smartphone anywhere in the world
          </p>
          <div className="mt-3 flex ">
            {/* View button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 mr-4 flex items-center rounded">
            <a href="https://www.behance.net/gallery/184384991/HOMEHUB-Rental-App-Design-Case-study " target="_blank" >
                View Case Study
              </a>
            </button>
          </div>
        </div>
        {/* Third Card */}
        <div className="project-card">
          <img src={ProjectThree} alt="Project 1" className="w-full h-auto" />
          <div className="live-website bg-gray-300 text-orange-500 py-1 px-2 inline-block mt-5 mb-2 rounded-full">
            Case study
          </div>
          <h2 className="text-xl font-bold mb-2">HEYCHAT</h2>
          <p className="text-gray-700 mb-4">
            A mobile application that allows users to chat with friends and
            family, it also recommend groups for users to explore.
          </p>
          <div className="mt-3 flex ">
            {/* View button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 mr-4 flex items-center rounded">
            <a href="#" target="_blank">
                View Case Study
              </a>
            </button>
          </div>
        </div>
        {/* Fourth Card */}
        <div className="project-card">
          <img src={ProjectFour} alt="Project 1" className="w-full h-auto" />
          <div className="live-website bg-gray-300 text-orange-500 py-1 px-2 inline-block mt-5 mb-2 rounded-full">
            Case study
          </div>
          <h2 className="text-xl font-bold mb-2">ALLTASK</h2>
          <p className="text-gray-700 mb-4">
            A mobile application that allows event organizers stay up to date
            with tasks and also in constant contacts with their teams
          </p>
          <div className="mt-3 flex ">
            {/* View button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 mr-4 flex items-center rounded">
            <a href="https://www.behance.net/gallery/177438333/Event-Management-App-ALLTASK-CASE-STUDY  " target="_blank">
                View Case Study
              </a>
            </button>
          </div>
        </div>
      </div>
      <button className="bg-white text-blue-700 hover:text-white mt-7 hover:bg-blue-700 border border-blue-700 px-4 py-3 flex items-center rounded mx-auto">
        <Link to="/projects">See More</Link>
      </button>
    </div>
    </div>
  );
};

export default Project;
