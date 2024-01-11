import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/images/pro-picture.png";
import Service from "./Service";
import AboutHome from "./AboutHome";
import ProjectHome from "./ProjectHome";
import Contact from "./contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="lg:mx-16 mx-4 lg:flex flex-row lg:mt-5 ">
        <div className="lg:w-1/2  lg:mt-28 mb-8 lg:mb-0 ">
          <h1 className="text-4xl w-full lg:text-5xl font-semibold mb-3 ">
            Hi, I’m Adeleke Adekemi
          </h1>
          <h1 className=" text-2xl lg:text-5xl font-bold mb-7">
            a <span className="text-blue-600">Product Designer</span>
          </h1>
          <h4 className="text-gray-900 text-xl">
            A passionate and creative designer with 1 year of experience,
            specializing in user-centric design and seamless digital
            experiences.
          </h4>

          <div className="mt-11 flex ">
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
        <div className="lg:w-1/2">
          <img src={Image} alt="my image" />
        </div>
      </section>
      <div>
      <Service />
      </div>
      
      <AboutHome />
      <ProjectHome />
      <div >
      <Contact />
      <Footer />
      </div>
     
    </div>
  );
};

export default Home;
