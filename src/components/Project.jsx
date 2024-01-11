import React from "react";
import ProjectOne from "../assets/images/Aventour.png";
import ProjectTwo from "../assets/images/Homehub.png";
import ProjectThree from "../assets/images/Heychat.png";
import ProjectFour from "../assets/images/Alltask.png";
import ProjectFive from "../assets/images/innoson.png";
import ProjectSix from "../assets/images/digitech.png";
import ProjectSeven from "../assets/images/netflix.png";
import ProjectEight from "../assets/images/kira.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./footer";
import Contact from "./contact";

const Project = () => {
  return (
    <div>
      <Header />
      <div className="text-center mt-10">
        <h1 className="text-xl font-semibold mb-2">Hello! 😊👐</h1>
        <h3 className="text-4xl text-blue-500">Welcome to my world! 🚀</h3>
        <div className="mt-6 mb-6 flex justify-center items-center">
          {/* Hire Me button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 mr-4 flex items-center rounded">
          <a href="mailto:adelekeadekemi22@gmail.com" target="_blank">
                Hire Me
              </a>
            <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
          </button>

          {/* View Portfolio button */}
          <button className="bg-white text-blue-700 hover:text-white hover:bg-blue-700 border border-blue-700 px-4 py-3 flex items-center rounded">
          <a href=" http://www.behance.net/adelekeadekemi " target="_blank" >
                View Portfolio
              </a>
          </button>
        </div>
      </div>

      <div className="project-section lg:mx-16 mx-4 lg:mb-24">
        <h1 className="text-xl text-orange-500 text-center font-bold mb-4">
          Projects
        </h1>
        <h4 className="text-3xl font-bold mb-8 text-center">
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
              A tourism website that showcases the beauty of sights and sounds
              of tourism centers located in Ekiti State.
            </p>
            <div className="mt-3 flex ">
              {/* Hire Me button */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 mr-2 lg:px-4 lg:py-3 lg:mr-4 flex items-center rounded">
              <a href="https://www.behance.net/gallery/182394109/Adventour-Tourism-Website-Case-Study"  target="_blank" >
                View Case Study
              </a>
              </button>

              {/* View Portfolio button */}
              <button className="bg-white text-blue-700 hover:text-white hover:bg-blue-700 border border-blue-700 px-4 py-3 flex items-center rounded">
              <a href="https://adventour-one.vercel.app "  target="_blank" >
                View Portfolio
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
              <a href=" https://www.behance.net/gallery/184384991/HOMEHUB-Rental-App-Design-Case-study "  target="_blank" >
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
              <a href="#"  target="_blank" >
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
              <a href="https://www.behance.net/gallery/177438333/Event-Management-App-ALLTASK-CASE-STUDY "  target="_blank" >
                View Case Study
              </a>
              </button>
            </div>
          </div>
          {/* Fifth Card */}
          <div className="project-card">
            <img src={ProjectFive} alt="Project 1" className="w-full h-auto" />
            <div className="live-website bg-gray-300 text-orange-500 py-1 px-2 inline-block mt-5 mb-2 rounded-full">
              Case study
            </div>
            <h2 className="text-xl font-bold mb-2">
              INNOSON REDESIGNED WEBSITE
            </h2>
            <p className="text-gray-700 mb-4">
              A redesigned website for innoson group of company website with
              african theme.
            </p>
            <div className="mt-3 flex ">
              {/* View button */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 mr-4 flex items-center rounded">
              <a href=" https://www.behance.net/gallery/188675059/A-redesigned-innoson-website "  target="_blank" >
                View Case Study
              </a>
              </button>
            </div>
          </div>
          {/* Sixth Card */}
          <div className="project-card">
            <img src={ProjectSix} alt="Project 1" className="w-full h-auto" />
            <div className="live-website bg-gray-300 text-orange-500 py-1 px-2 inline-block mt-5 mb-2 rounded-full">
              Case study
            </div>
            <h2 className="text-xl font-bold mb-2">DIGITECH</h2>
            <p className="text-gray-700 mb-4">
              An IT Solution website landing page
            </p>
            <div className="mt-3 flex ">
              {/* View button */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 mr-4 flex items-center rounded">
              <a href="  https://www.behance.net/gallery/188677089/IT-SOLUTION-WEBSITE "  target="_blank" >
                View Case Study
              </a>
              </button>
            </div>
          </div>
          {/*  Seventh Card */}
          <div className="project-card">
            <img src={ProjectSeven} alt="Project 1" className="w-full h-auto" />
            <div className="live-website bg-gray-300 text-orange-500 py-1 px-2 inline-block mt-5 mb-2 rounded-full">
              Case study
            </div>
            <h2 className="text-xl font-bold mb-2">
            REDESIGNED NETFLIX MOBILE APP
            </h2>
            <p className="text-gray-700 mb-4">
            A redesigned Netflix mobile application that allows users search and watch movies at their comfort zone.
            </p>
            <div className="mt-3 flex ">
              {/* View button */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 mr-4 flex items-center rounded">
              <a href="#"  target="_blank" >
                View Case Study
              </a>
              </button>
            </div>
          </div>
          {/* Eighth Card */}
          <div className="project-card">
            <img src={ProjectEight} alt="Project 1" className="w-full h-auto" />
            <div className="live-website bg-gray-300 text-orange-500 py-1 px-2 inline-block mt-5 mb-2 rounded-full">
              Case study
            </div>
            <h2 className="text-xl font-bold mb-2">KIRA’S CLOSET </h2>
            <p className="text-gray-700 mb-4">
            A website landing page for fashion store that allows users shop online from anywhere in the world.
            </p>
            <div className="mt-3 flex ">
              {/* View button */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 mr-4 flex items-center rounded">
              <a href="   https://www.behance.net/gallery/176448237/Landing-page-for-an-online-fashion-store "  target="_blank" >
                View Case Study
              </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Project;
