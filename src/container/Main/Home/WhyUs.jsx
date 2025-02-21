import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../Layout/WrapperContainer";

const PaidMedia = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className=" flex items-center justify-center">
      <WrapperContainer>
        {/* Main Container with Animated Border */}
        <div className="relative w-full max-w-[1400px] rounded-[2.5rem] p-0.5 overflow-hidden bg-gradient-to-r from-blue-500/20 to-blue-600/20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-20 animate-gradient-slow" />
          
          {/* Inner Container */}
          <div className="relative bg-white rounded-[2.4rem] p-8 sm:p-12 lg:p-10 overflow-hidden">
            {/* Background Gradient Elements */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-400 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
            
            {/* Content */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="relative flex flex-col md:flex-row gap-8 md:gap-12"
            >
              {/* Left Content */}
              <motion.div variants={item} className="flex-1 flex flex-col">
                <h2 className="text-5xl pb-5 font-bold text-blue-700">
                  Why Us
                </h2>
                
                <p className="text-gray-600 mt-6 text-lg">
                  At Digiflex, we empower businesses with cutting-edge IT solutions,
                  cloud services, and strategic consulting to drive digital
                  innovation and operational efficiency.
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    "Innovation-Driven Solution",
                    "Customer-Centric Approach",
                    "Industry Expertise",
                    "Scalability & Growth",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="flex items-center space-x-3 group"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                        ✔
                      </span>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right - Video Section */}
              <motion.div variants={item} className="flex-1">
                <div className="relative w-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10" />
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    src="https://videos.pexels.com/video-files/3205618/3205618-sd_640_360_25fps.mp4"
                    autoPlay
                    loop
                    muted
                    poster="your-poster-image-url.jpg"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default PaidMedia;