import React from 'react'
import { Cpu, Code, Image, Brain, Users, CheckCircle } from "lucide-react";


const topics = [
    {
      icon: Cpu,
      title: "Game Engine",
      description:
        "A game engine is a software platform used to build and run games. Popular engines include Unreal Engine, Unity, and Godot.",
    },
    {
      icon: Code,
      title: "Programming",
      description:
        "Developers use languages like C++, C#, or Python to code gameplay mechanics, AI behavior, physics, and more.",
    },
    {
      icon: Image,
      title: "3D/2D Art & Animation",
      description:
        "Visual assets, such as models, textures, and animations, are created by artists for immersive game environments.",
    },
    {
      icon: Brain,
      title: "AI Development",
      description:
        "AI is essential for NPCs, enemy behavior, and procedural content generation, ranging from pathfinding to decision-making systems.",
    },
    {
      icon: Users,
      title: "Multiplayer & Networking",
      description:
        "Design and implement multiplayer features, ensuring smooth connectivity and synchronization of data across players.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance (QA) & Testing",
      description:
        "Ensuring the game is bug-free and functions as expected by testing for glitches, balancing issues, and performance problems.",
    },
  ];

function PC_develoopment() {
  return (
    <>
        <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 leading-relaxed">Game Development</h2>
        <p className="text-gray-600 text-lg leading-loose">
          Exploring key aspects of game development, from coding to design.
        </p>
      </div>

      {/* Grid Layout for Topics */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-6 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-110 absolute -top-8">
              <topic.icon size={32} className="text-white" />
            </div>

            <h3 className="text-xl font-semibold mt-8">{topic.title}</h3>
            <p className="text-gray-600 mt-4 leading-relaxed">{topic.description}</p>

            {/* Hover Effect */}
            <a
              href="#"
              className="mt-4 text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default PC_develoopment