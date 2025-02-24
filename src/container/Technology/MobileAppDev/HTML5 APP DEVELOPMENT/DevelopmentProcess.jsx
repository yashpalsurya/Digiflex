import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Heading from "../../../../Layout/Heading";

const steps = [
  {
    title: "Requirement Analysis",
    description: "Understanding your business needs",
  },
  {
    title: "UI/UX Design",
    description: "Creating engaging designs",
  },
  {
    title: "Development",
    description: "Coding with best practices",
  },
  {
    title: "Testing & QA",
    description: "Ensuring performance & security",
  },
  {
    title: "Deployment & Maintenance",
    description: "Continuous support",
  },
];

const faqs = [
  {
    question: "How long does the development process take?",
    answer:
      "The timeline varies depending on the project scope, but typically ranges from a few weeks to several months.",
  },
  {
    question: "Do you offer post-deployment support?",
    answer:
      "Yes, we provide continuous maintenance and support to ensure optimal performance.",
  },
  {
    question: "Can I request changes during the development process?",
    answer:
      "Yes, we follow an agile approach, allowing flexibility for modifications at different stages.",
  },
];

export default function DevelopmentProcess() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Development Process Section */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Development Process (Steps)
        </h2>
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-blue-200"></div>
          <div className="flex justify-between items-center relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-1/5 px-2">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="mt-16">
          <Heading> Frequently Asked Questions</Heading>
           
        
          <p className="text-center text-gray-600 mb-6">
            Answers to common queries about our development process.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <button
                  className="flex justify-between items-center w-full text-left text-blue-600 font-semibold focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
