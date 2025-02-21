// import React from 'react'

// const DevelopmentServices = () => {
//   return (
//     <div>DevelopmentServices</div>
//   )
// }

// export default DevelopmentServices


import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const services = [
  {
    icon: "\ud83d\uded2", // Shopping Cart Icon
    title: "NFT Marketplace Design and Development",
    description:
      "With in-depth knowledge of ERC-721 and ERC-1155 standards, smart contracts and IPFS protocols, our team designs and builds user-centric NFT marketplace platforms.",
  },
  {
    icon: "\ud83d\udcdd", // Document Icon
    title: "NFT Smart Contract Development and Audit",
    description:
      "We offer NFT smart contract development and audit services to ensure the error-free functioning of smart contracts, ensuring seamless automation in NFT transactions.",
  },
  {
    icon: "\ud83d\udcde", // Support Icon
    title: "NFT Marketplace Support and Maintenance",
    description:
      "We continuously monitor, maintain and offer support for managing third-party upgrades, new OS releases, and ensure nodes are always up and running.",
  },
  {
    icon: "\ud83c\udf1f", // NFT Icon
    title: "NFT Development",
    description:
      "Our NFT development services include tokenizing assets by developing and issuing new SPL tokens with high-end functionality depending on clients’ business requirements.",
  },
];

const  DevelopmentServices = () => {
  return (
    <WrapperContainer>

  
    <div className="max-w-6xl mx-auto px-2  py-12">
     <Heading>
        <div>
        Our NFT Marketplace Development Services
        </div>
     </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 border rounded-xl shadow-md hover:shadow-lg transition"
          >
            <span className="text-4xl text-blue-500">{service.icon}</span>
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </WrapperContainer> 
  );
};

export default  DevelopmentServices;
