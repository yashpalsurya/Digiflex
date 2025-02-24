import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Layers, Cloud, Lock, Code, Users } from "lucide-react";
import Saas2 from "../container/Services/Custom App/Saas Devlopment/Saas2";
import Saas3 from "../container/Services/Custom App/Saas Devlopment/Saas3";
import Saas4 from "../container/Services/Custom App/Saas Devlopment/Saas4";
import videoBg from "../assets/blockchain_video.mp4"; // Video Background
import Heading from "../../src/Layout/Heading";
import Subheading from "../../src/Layout/Subheading";
import WrapperContainer from "../Layout/WrapperContainer";

const clients = [
  { name: "Universal", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBM7RW2MYrGDHBmKM99UUycqt995yTLhWww&s" },
  { name: "NHS", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGtutCNQT5sDXQvTm17rkNot67tFpR38Jig&s" },
  { name: "Guinness", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBcKvoP84DeACaP9kvyPCakbXbWXrYb1ztA&s" },
  { name: "E-commerce", src: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png" },
];

const Saas = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
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

        {/* Content */}
        <motion.div
          className="relative z-30 text-white max-w-4xl p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Leading SaaS Development Services
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            We specialize in building high-performing, scalable, and secure SaaS applications tailored to your business needs. Our expert developers create cloud-based solutions that drive efficiency, innovation, and growth across multiple industries.
          </p>

          {/* Call to Action Button */}
          <a
            href="#get-quote"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>

      {/* Clients Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading>Trusted by Global Brands</Heading>
          <p className="text-gray-600">
            We have partnered with industry leaders to build innovative SaaS solutions that redefine digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img src={client.src} alt={`${client.name} logo`} className="max-h-12 w-auto object-contain" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Heading>Why Choose Our SaaS Development Services?</Heading>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Cloud size={40} />, title: "Scalable Architecture", description: "Designed for businesses of all sizes, our SaaS solutions can scale seamlessly as your company grows." },
              { icon: <Lock size={40} />, title: "Robust Security", description: "We implement the latest security protocols to ensure data privacy and protection for your users." },
              { icon: <Layers size={40} />, title: "Cross-Platform Compatibility", description: "Our SaaS solutions are accessible across various devices and operating systems for maximum efficiency." },
              { icon: <ShieldCheck size={40} />, title: "High Availability", description: "Our cloud-based applications are built for reliability, ensuring maximum uptime and performance." },
              { icon: <Code size={40} />, title: "Custom Integrations", description: "We offer seamless API integrations to connect your SaaS application with other essential tools and services." },
              { icon: <Users size={40} />, title: "User-Centric Design", description: "Our SaaS platforms prioritize intuitive interfaces and user experience for enhanced engagement and satisfaction." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 text-blue-600">{feature.icon}</div>
                <Subheading className="text-xl font-semibold mb-2">{feature.title}</Subheading>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <WrapperContainer>
        <Saas2 />
        <Saas3 />
        <Saas4 />
      </WrapperContainer>
    </>
  );
};

export default Saas;
