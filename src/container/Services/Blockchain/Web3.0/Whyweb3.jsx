// import React from 'react'

import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

// const Whyweb3 = () => {
//   return (
//     <div>Whyweb3</div>
//   )
// }

// export default Whyweb3;

const Web3Features = () => {
    const features = [
      {
        title: "Better Security",
        description:
          "Web3 apps keep data safe because they don't depend on just one place for protection. They use a blockchain network which is more open and secure.",
      },
      {
        title: "Total Control",
        description:
          "Blockchain lets users make decisions about their data privacy and be involved in online dealings without giving up their privacy.",
      },
      {
        title: "Automated Contracts",
        description:
          "Web3 uses smart contracts that work on their own to make things more efficient, less risky, and more trustworthy.",
      },
      {
        title: "Interoperability",
        description:
          "Web3 lets different decentralized apps and blockchain networks work together smoothly to share data.",
      },
      {
        title: "Easier Updates",
        description:
          "Web3 technology makes it simpler to improve apps over time. You can change and upgrade without disrupting the service.",
      },
      {
        title: "Community Trust",
        description:
          "Web3 builds trust by allowing the community to check and agree on how apps work, leading to more reliable services.",
      },
    ];
  
    return (
<WrapperContainer>
<div className="max-w-6xl mx-auto px-6 py-12">
       <Heading>
        <div>
        Why Should You Go For Web3 Development?
        </div>
        
       </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
</WrapperContainer>
   

    );
  };
  
  export default Web3Features;
  