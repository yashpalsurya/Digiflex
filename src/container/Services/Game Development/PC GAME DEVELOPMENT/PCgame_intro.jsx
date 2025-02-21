import React from "react";
import { Pencil, Gamepad2, Users, Layout, Music } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";


const features = [
  {
    icon: Pencil,
    title: "Concept & Storyline",
    description:
      "This is the first step where game designers develop a concept for the game.\n\nIt includes defining the genre, theme, story, and objectives.",
  },
  {
    icon: Gamepad2,
    title: "Gameplay Mechanics",
    description:
      "These are the rules that govern how the game is played.\n\nThis includes player controls, level design, game physics, and enemy behavior.",
  },
  {
    icon: Users,
    title: "Characters & Worldbuilding",
    description:
      "Designers create the world in which the game takes place, including characters, locations, and lore.\n\nCharacter design is crucial for player engagement.",
  },
  {
    icon: Layout,
    title: "User Interface (UI)",
    description:
      "The visual elements like menus, buttons, and HUD (heads-up display) that players interact with.\n\nA clean and intuitive UI enhances the gaming experience.",
  },
  {
    icon: Music,
    title: "Audio Design",
    description:
      "Sound effects, background music, and voice acting contribute to the atmosphere of the game.",
  },
];

function GameDesignSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
      <Heading>
        <h2>Game Design</h2>
        </Heading>
        <Paragraph>
        <p>
          Understanding the fundamental aspects of game design and development.
        </p>
        </Paragraph>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-6 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            {/* Icon with Hover Effect */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-110 absolute -top-8">
              <feature.icon size={32} className="text-white" />
            </div>
            <Subheading>
            <h3 className="text-xl font-semibold mt-8">{feature.title}</h3>
            </Subheading>
            <Paragraph>
            <p className=" whitespace-pre-line mt-4">{feature.description}</p>
            </Paragraph>
            {/* Hover Learn More Effect */}
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
  );
}

export default GameDesignSection;
