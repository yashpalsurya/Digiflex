import React from "react";
import videoBg from "../assets/blockchain_video.mp4";
import WebApplication2 from "../container/Services/Custom App/Web Application Devlopment/WebApplication2";
import WebApplication3 from "../container/Services/Custom App/Web Application Devlopment/WebApplication3";
import WebApplication4 from "../container/Services/Custom App/Web Application Devlopment/WebApplication4";
import WebApplication5 from "../container/Services/Custom App/Web Application Devlopment/WebApplication5";

export default function Application() {
  return (
    <>
    <div className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
    {/* Video Background */}
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
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

    {/* Content Section */}
    <div className="relative z-30 text-white max-w-3xl p-8">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Custom Web App Development Services
      </h2>
      {/* Subheading */}
      <p className="text-lg mb-6">
        We build scalable and innovative web solutions to transform your business.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
          Get Started
        </button>
        <button className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-transform transform hover:scale-105 duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>

  <WebApplication2 />
  <WebApplication3 />
  <WebApplication4 />
  <WebApplication5 />
</>
);
}

      
     
 