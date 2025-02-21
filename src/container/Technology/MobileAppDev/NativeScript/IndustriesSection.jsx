import { useState, useEffect } from "react";
import { 
  FaHospital, FaShoppingCart, FaTaxi, FaBook, 
  FaUniversity, FaPlane, FaBuilding, FaIndustry, 
  FaFilm, FaDumbbell 
} from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import img1 from "../../../../assets/Healthcare.jpg";
import img2 from "../../../../assets/Ecomerce.jpg";
import img3 from "../../../../assets/Automation.jpeg";
import img4 from "../../../../assets/Education.jpg";
import img5 from "../../../../assets/fintech-investment-financial-internet-technology-concept.jpg";
import img6 from "../../../../assets/Travel.jpg";
import img7 from "../../../../assets/Reacl-estate.jpg";
import img8 from "../../../../assets/Manufacturing.jpg";
import img9 from "../../../../assets/Entertainment.jpg";
import img10 from "../../../../assets/Fitness.jpg";

const industries = [
  {
    id: 1,
    name: "Healthcare & Telemedicine",
    description:
      "Patient portals, appointment booking apps, teleconsultation, medical record management, and remote patient monitoring to improve healthcare accessibility and efficiency.",
    icon: <FaHospital />,
    image: img1,
  },
  {
    id: 2,
    name: "E-commerce & Retail",
    description:
      "Mobile shopping experiences with real-time inventory tracking, secure payment gateways, personalized recommendations, and seamless order fulfillment.",
    icon: <FaShoppingCart />,
    image: img2,
  },
  {
    id: 3,
    name: "On-Demand Services",
    description:
      "Ride-hailing, home services, logistics, and instant service booking platforms providing convenience and efficiency to users.",
    icon: <FaTaxi />,
    image: img3,
  },
  {
    id: 4,
    name: "Education & E-learning",
    description:
      "Online courses, exam preparation apps, virtual classrooms, and interactive learning tools designed to enhance digital education.",
    icon: <FaBook />,
    image: img4,
  },
  {
    id: 5,
    name: "FinTech & Banking",
    description:
      "Secure financial transactions, investment tracking, digital wallets, loan processing, and real-time banking services ensuring safe and fast operations.",
    icon: <FaUniversity />,
    image: img5,
  },
  {
    id: 6,
    name: "Travel & Hospitality",
    description:
      "Hotel booking, travel planning apps, flight reservations, tour guide applications, and travel itinerary management for seamless vacation planning.",
    icon: <FaPlane />,
    image: img6,
  },
  {
    id: 7,
    name: "Real Estate",
    description:
      "Property listing, virtual tours, real estate management, mortgage calculators, and agent-client interaction tools to streamline property dealings.",
    icon: <FaBuilding />,
    image: img7,
  },
  {
    id: 8,
    name: "Manufacturing & Automation",
    description:
      "Factory automation, supply chain management solutions, production monitoring, predictive maintenance, and real-time data analytics.",
    icon: <FaIndustry />,
    image: img8,
  },
  {
    id: 9,
    name: "Entertainment & Media",
    description:
      "Streaming platforms, content distribution apps, media production tools, and audience engagement analytics for a better entertainment experience.",
    icon: <FaFilm />,
    image: img9,
  },
  {
    id: 10,
    name: "Sports & Fitness",
    description:
      "Workout tracking, sports event management apps, personal fitness coaching, and health monitoring applications for a healthier lifestyle.",
    icon: <FaDumbbell />,
    image: img10,
  },
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [isChanging, setIsChanging] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);

  // Animation effect when changing selected industry
  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => {
      setIsChanging(false);
    }, 500);
    
    // Icon animation timer
    setAnimateIcon(true);
    const iconTimer = setTimeout(() => {
      setAnimateIcon(false);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(iconTimer);
    };
  }, [selectedIndustry]);

  const handleIndustrySelect = (industry) => {
    if (selectedIndustry.id !== industry.id) {
      setSelectedIndustry(industry);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 p-4">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 bg-white shadow-xl rounded-xl overflow-hidden border border-blue-200 transition-all duration-300 hover:shadow-2xl">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-blue-600 text-white shadow-lg">
          <div className="sticky top-0 p-6">
            <h2 className="text-2xl font-bold mb-6 border-b border-blue-400 pb-3">Industries We Serve</h2>
            <ul className="space-y-1">
              {industries.map((industry) => (
                <li
                  key={industry.id}
                  onClick={() => handleIndustrySelect(industry)}
                  className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition-all duration-300 transform ${
                    selectedIndustry.id === industry.id
                      ? "bg-white text-blue-600 shadow-md translate-x-2"
                      : "hover:bg-blue-500 text-white"
                  }`}
                >
                  <div className={`text-xl ${selectedIndustry.id === industry.id && animateIcon ? "animate-pulse" : ""}`}>
                    {industry.icon}
                  </div>
                  <span className="font-medium">{industry.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white to-blue-50">
          <div className={`transition-opacity duration-500 ${isChanging ? "opacity-0" : "opacity-100"}`}>
            <div className="relative mb-8 w-full">
              <div className="absolute -inset-1 bg-blue-600 rounded-lg blur opacity-25"></div>
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.name}
                className="relative w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col items-center transform transition-all duration-500">
              <Heading
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold flex items-center gap-3 text-blue-600 mb-4"
              >
                <span className={`text-2xl ${animateIcon ? "animate-bounce" : ""}`}>
                  {selectedIndustry.icon}
                </span>
                <span className="border-b-2 border-blue-600 pb-1">{selectedIndustry.name}</span>
              </Heading>
              
              <Subheading
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-800 mt-2 text-center max-w-2xl text-lg leading-relaxed"
              >
                {selectedIndustry.description}
              </Subheading>
              
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}