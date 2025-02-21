import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

const toolsData = [
    { category: "Game Engines", tools: "Unity, Unreal Engine, Godot" },
    { category: "Programming", tools: "Visual Studio, JetBrains Rider" },
    { category: "3D Modeling", tools: "Blender, Maya, 3ds Max" },
    { category: "2D Art & UI", tools: "Photoshop, GIMP, Krita" },
    { category: "Audio Editing", tools: "Audacity, FL Studio, Ableton" },
    { category: "Version Control", tools: "Git, GitHub, GitLab" },
  ];
  
  const GameDevTools = () => {
  return (
    <WrapperContainer>
        <div className="container mx-auto p-4">
        <Heading>
          <h2>Tools & Software for PC Game Development</h2>
          </Heading>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Software/Tools</th>
                </tr>
              </thead>
              <tbody>
                {toolsData.map((item, index) => (
                  <tr
                    key={index}
                    className="border border-gray-300 hover:bg-gray-200 transition-all"
                  >
                    <td className="border border-gray-300 px-4 py-2 font-semibold">{item.category}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </WrapperContainer>
      );
    }
    

export default GameDevTools;