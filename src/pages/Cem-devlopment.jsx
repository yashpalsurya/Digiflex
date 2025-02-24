import React from "react";
import videoBg from "../assets/blockchain_video.mp4";
import Cards from "../container/Services/Custom App/CEM Devlopment/Cards";
import Thirds from "../container/Services/Custom App/CEM Devlopment/Third";
import Four from "../container/Services/Custom App/CEM Devlopment/Four";
import KnowledgeSection from "../container/Services/Custom App/CEM Devlopment/KnowledgeSection";
import WrapperContainer from "../Layout/WrapperContainer";

const Hero = () => {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-center bg-[#1A2E6F]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-30 max-w-3xl text-white px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 Transform Customer Experience with CEM Development
          </h1>
          <p className="text-lg mb-6">
            Deliver seamless, personalized, and omnichannel customer experiences with our cutting-edge CEM solutions.
            At <span className="font-semibold">Digiflex.ai</span>, we help businesses enhance customer interactions 
            through innovative IT solutions, ensuring efficiency and engagement across all touchpoints.
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Request Demo
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <WrapperContainer>
        <Thirds />
        <Four />
        <Cards />
        <KnowledgeSection />
      </WrapperContainer>
    </>
  );
};

export default Hero;
