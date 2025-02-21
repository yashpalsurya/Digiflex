import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const processSteps = [
  {
    title: "Strategic Design",
    description:
      "Web3 project development starts with strategy formation, market analysis, tech stack selection, establishing goals & visions, etc.",
    icon: "🎯",
  },
  {
    title: "Infrastructure Development",
    description:
      "Next, the core components of the Web3 application or software creation follow along with security protocols integration.",
    icon: "🔧",
  },
  {
    title: "Ecosystem Development",
    description:
      "Web3 ecosystem development involves customization of UI/UX, features, tools, dashboards, etc., to make it futuristic.",
    icon: "🌐",
  },
  {
    title: "Functionality Integration",
    description:
      "Industry-specific functionalities are integrated into the Web3 platform to help businesses gain a competitive advantage after ecosystem development.",
    icon: "⚡",
  },
];

// Motion Variants for Animations
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const ProcessCard = ({ title, description, icon, index }) => (
  <motion.div
    className="aspect-square bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-start"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    custom={index}
    whileHover={{ scale: 1.05 }}
  >
    <div className="bg-yellow-400 w-10 h-10 rounded-md flex items-center justify-center text-xl mb-3 shadow-md">
      {icon}
    </div>
    <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed flex-grow overflow-auto">
      {description}
    </p>
  </motion.div>
);

const Process = () => {
  return (
    <WrapperContainer>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <div className="text-center mb-10">
          <Heading>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Web3 Development Process
            </motion.div>
          </Heading>
          <Paragraph>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Maticz innovates & adapts the Web3 development process by
              thoroughly studying & analyzing the market evolution and trends
              for each business project.
            </motion.span>
          </Paragraph>
        </div>

        {/* Process Steps Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
        >
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </WrapperContainer>
  );
};

export default Process;
