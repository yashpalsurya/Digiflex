import React from 'react';
import videoBg from '../assets/blockchain_video.mp4';
import Amp2 from '../container/Services/Custom App/Mobile App Devlopment/Amp2';
import Amp3 from '../container/Services/Custom App/Mobile App Devlopment/Amp3';
import Amp5 from '../container/Services/Custom App/Mobile App Devlopment/Amp5';
import Heading from '../Layout/Heading';
import WrapperContainer from '../Layout/WrapperContainer';

const Amp = () => {
  return (
    <>
      {/* Video Background Section */}
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center text-center">
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
        <div className="relative z-30 text-white max-w-4xl p-8">
          <Heading>Web & Mobile App Development</Heading>
          <p className="text-lg mt-4">
            We build custom web and mobile applications that drive success. From idea to execution, we craft user-friendly, scalable, and innovative solutions tailored to your business needs.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all">
              Get in Touch
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <WrapperContainer>
        <Amp2 />
        <Amp3 />
        <Amp5 />
      </WrapperContainer>
    </>
  );
};

export default Amp;
