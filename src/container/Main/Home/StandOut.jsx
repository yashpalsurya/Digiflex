import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaCloud, FaCubes, FaLock, FaEye } from "react-icons/fa";
import WrapperContainer from "../../../Layout/WrapperContainer";

const strategies = [
  {
    number: "01",
    title: "PROJECT STRATEGY",
    icon: <FaRobot className="text-blue-600" size={24} />,
    description: "Our project strategy ensures thorough planning and precise execution.",
    image:
      "https://i.pinimg.com/736x/2f/18/34/2f18340560646d0712eca0a4c9c69736.jpg",
  },
  {
    number: "02",
    title: "DESIGN & MOTION",
    icon: <FaBrain className="text-blue-600" size={24} />,
    description:
      "Innovative design combined with dynamic motion for engaging experiences.",
    image:
      "https://i.pinimg.com/originals/a5/35/60/a53560c8088900e266880f779dacced7.gif",
  },
  {
    number: "03",
    title: "SMOOTH DEVELOPMENT",
    icon: <FaCloud className="text-blue-600" size={24} />,
    description:
      "Seamless development processes ensure efficiency and scalability.",
    image:
      "https://i.pinimg.com/736x/05/43/fe/0543feb1496162dd651921bab79af301.jpg",
  },
  {
    number: "04",
    title: "POWERFUL MARKETING",
    icon: <FaCubes className="text-blue-600" size={24} />,
    description:
      "Robust marketing strategies drive growth and brand recognition.",
    image:
      "https://i.pinimg.com/736x/96/af/8d/96af8d60f3ef5b40a357169293974faf.jpg",
  },
  {
    number: "05",
    title: "ONGOING SUPPORT",
    icon: <FaLock className="text-blue-600" size={24} />,
    description:
      "We offer continuous support to keep your operations running smoothly.",
    image:
      "https://i.pinimg.com/736x/0d/3e/1c/0d3e1c4677a54db8e814c7cf0a5311bc.jpg",
  },
  {
    number: "06",
    title: "FUTURE EVOLUTION",
    icon: <FaEye className="text-blue-600" size={24} />,
    description:
      "Innovative solutions to prepare you for tomorrow's challenges.",
    image:
      "https://i.pinimg.com/736x/86/a8/83/86a8830b333868867434d47350341a34.jpg",
  },
];

const Card = ({ strategy }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="bg-white border-2 border-black rounded-xl p-6 shadow-md cursor-pointer relative overflow-hidden group"
    >
      {/* Blue accent line that animates on hover */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
      
      <div className="flex justify-between items-start">
        <span className="text-4xl font-extrabold text-black">{strategy.number}</span>
        <div className="p-3 rounded-lg bg-white border border-black group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
          {React.cloneElement(strategy.icon, { 
            className: "text-black group-hover:text-white transition-colors duration-300" 
          })}
        </div>
      </div>
      
      <h3 className="mt-6 text-xl font-bold text-black tracking-tight">{strategy.title}</h3>
      <p className="mt-3 text-sm text-black/80">{strategy.description}</p>
      
      {/* Animated arrow on hover */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-0 group-hover:translate-x-2 transition-transform">
        <span className="text-blue-600 font-bold flex items-center">
          Explore <span className="ml-2">→</span>
        </span>
      </div>
    </motion.div>
  );
};

const ImageShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full mt-16 mb-10">
      <h3 className="text-2xl font-bold text-black mb-6 border-l-4 border-blue-600 pl-4">
        OUR WORK
      </h3>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {strategies.map((strategy, idx) => (
          <motion.div 
            key={`showcase-${idx}`}
            className="relative overflow-hidden rounded-xl aspect-square group"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-blue-600/30 transition-colors duration-300 z-10"></div>
            <img
              src={strategy.image}
              alt={`Project ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="text-white text-sm font-medium">{strategy.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const StandOut = () => {
  return (
    <div className="bg-white py-16">
      <WrapperContainer>
        <div className="max-w-[1400px] mx-auto">
          {/* Header with accents */}
          <div className="relative mb-16 text-center">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[120px] font-black text-blue-600/5 select-none">
              PATHWAY
            </div>
            <h2 className="text-5xl font-extrabold text-black relative">
              PATHWAY TO <span className="text-blue-600">SUCCESS.</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
            <p className="max-w-xl mx-auto mt-6 text-black/70">
              Our proven methodology delivers consistent results through strategic planning,
              innovative design, and flawless execution.
            </p>
          </div>
          
          {/* Strategy cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {strategies.map((strategy, index) => (
              <Card key={index} strategy={strategy} />
            ))}
          </div>
          
          {/* Image showcase instead of marquee */}
          <ImageShowcase />
          
          {/* CTA section */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-black rounded-xl p-8 md:p-12">
            <div className="md:max-w-lg mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h3>
              <p className="text-white/80">
                Let's discuss how our proven pathway can help you achieve your business goals.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 text-white py-4 px-8 rounded-lg font-bold flex items-center"
            >
              Get Started <span className="ml-2">→</span>
            </motion.button>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default StandOut;