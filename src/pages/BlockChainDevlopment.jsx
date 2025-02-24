import React from "react";
import { motion } from "framer-motion";
import { Cardpart1 } from "../container/Services/Custom App/BlockChain/Cardpart1";
import Cardparten2 from "../container/Services/Custom App/BlockChain/Cardparten2";
import Cardpart3 from "../container/Services/Custom App/BlockChain/Cardpart3";
import Cardpart4 from "../container/Services/Custom App/BlockChain/Cardpart4";
import Cardpart5 from "../container/Services/Custom App/BlockChain/Cardpart5";
import Card6part from "../container/Services/Custom App/BlockChain/Card6part";
import videoBg from "../assets/blockchain_video.mp4";
import WrapperContainer from "../Layout/WrapperContainer";

function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
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
          className="relative z-30 text-white max-w-[80%] mx-auto p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold uppercase leading-relaxed mb-6">
            Blockchain Development Services
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            Blockchain is a decentralized, distributed ledger technology that
            securely records transactions across multiple computers. It
            ensures transparency, security, and immutability by using
            cryptographic hashing and consensus mechanisms.
          </p>

          <motion.button
            className="mt-10 px-6 py-3 border-2 border-[#C04112] rounded-full text-[20px] uppercase cursor-pointer hover:bg-[#C04112] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Hire Blockchain Developers
          </motion.button>
        </motion.div>
      </div>

      {/* Blockchain Service Components */}
      <WrapperContainer>
        <Cardpart1 />
        <Cardparten2 />
        <Cardpart3 />
        <Cardpart4 />
        <Cardpart5 />
        <Card6part />
      </WrapperContainer>
    </>
  );
}

export default Home;
