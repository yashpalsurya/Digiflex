// import React from 'react'
// import WrapperContainer from '../../../../Layout/WrapperContainer'
// import Heading from '../../../../Layout/Heading'

// const Feature = () => {
//   return (
//    <>
//    <WrapperContainer>
//     <Heading>
//         Top Features
//     </Heading>
//     <div className='max-w-6xl '>
        

//     </div>

//    </WrapperContainer>
//    </>
//   )
// }

// export default Feature


import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const FeaturesSection = () => {
  return (
    <WrapperContainer>
        <Heading>
        Our Top Feature's 
        </Heading>

      <div className="max-w-4xl mt-8 md:mt-0 flex flex-col space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-orange-500 text-2xl">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      </WrapperContainer>
    
  );
};

const features = [
  {
    icon: "📷", // Replace with an actual icon component if needed
    title: "Non-custodial",
    description:
      "We ensure the user has full control of the private keys and financial assets eliminating third-party intervention.",
  },
  {
    icon: "📱",
    title: "Cross-platform DeFi Application",
    description:
      "The DeFi platform we develop can be accessed on any device and any operating system enabling easy usability from anywhere.",
  },
  {
    icon: "🔒",
    title: "Security",
    description:
      "Through highly secured smart contracts, we ensure the DeFi platform developed by us is free from vulnerabilities.",
  },
  {
    icon: "🔗",
    title: "Decentralization",
    description:
      "Through Decentralization, we enable users to have full access to their funds and financial activities ensuring transparency.",
  },
];

export default FeaturesSection;
