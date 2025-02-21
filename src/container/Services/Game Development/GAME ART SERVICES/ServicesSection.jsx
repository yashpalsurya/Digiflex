import React from 'react';
import { Code, Film, PaintBucket, Settings, Globe, Brain } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />, 
      title: "3D Game Art",
      description: "You name it, we model it. Character, clothing, vehicles, weapons, manmade and natural environments, furniture and props...",
    },
    {
      icon: <Film className="w-8 h-8 text-cyan-500" />,
      title: "3D Animation",
      description: "No matter how perfect the character, it is the animation that puts life in them. Animation is an art form and we create MASTERPIECES...",
    },
    {
      icon: <PaintBucket className="w-8 h-8 text-cyan-500" />,
      title: "Beautification",
      description: "Beautifying a level means taking a basic and simple level that you've banged out for playability and turning into a real time...",
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: "Rigging",
      description: "Human, creatures or animals... Great character animations start from the perfectly weighted and skinned rig. Rigging is an art form...",
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: "Mixed Reality",
      description: "We at Exigent realised pretty early that Virtual Reality is set to become one of the most powerful medium in few years...",
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: "Generative AI",
      description: "We @ Exigent are helping LIVE games transform into LIVING games with Generative AI. Going forward, living games...",
    }
  ];

  return (
    <div className="relative min-h-screen bg-white py-16">
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16 uppercase border-b-2 border-cyan-400 pb-2 inline-block mx-auto">
          Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-100 shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-cyan-500 text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                <button className="bg-transparent border border-cyan-500 text-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-white transition-colors duration-300">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
