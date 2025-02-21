import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

const DeFiIcon = ({ paths, viewBox = "0 0 24 24" }) => (
  <svg 
    viewBox={viewBox} 
    className="w-12 h-12 text-blue-600"
    fill="currentColor"
  >
    {paths}
  </svg>
);

const DefiTechnology = () => {
  const technologies = [
    {
      name: "Uniswap",
      description: "A decentralized exchange built on Ethereum's smart contract protocol that facilitates trading and swapping of ERC-20 tokens directly from the Ethereum wallet.",
      icon: <DeFiIcon paths={
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 18.5L3.5 12 12 3.5l8.5 8.5-8.5 8.5zm0-4.5a4 4 0 100-8 4 4 0 000 8z" />
      } />
    },
    {
      name: "Sushi",
      description: "Also known as SushiSwap, it allows users to deposit their tokens into a liquidity pool. These funds are then lent out, enabling users to earn interest on the money.",
      icon: <DeFiIcon paths={
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8c.78 0 1.41-.63 1.41-1.41S8.78 9.18 8 9.18s-1.41.63-1.41 1.41.63 1.41 1.41 1.41zm8 0c.78 0 1.41-.63 1.41-1.41s-.63-1.41-1.41-1.41-1.41.63-1.41 1.41.63 1.41 1.41 1.41z" />
      } />
    },
    {
      name: "Compound",
      description: "Compound is an open-source, autonomous protocol built for developers. It enables algorithmic, efficient money markets on the Ethereum blockchain.",
      icon: <DeFiIcon paths={
        <path d="M4 8h16v8H4V8zm2 2v4h12v-4H6zm14-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
      } />
    },
    {
      name: "Aave",
      description: "One of the popular DeFi lending protocols, Aave is an open-source and non-custodial protocol to earn interest on deposits and borrow assets.",
      icon: <DeFiIcon paths={
        <path d="M12 2L2 12l3 3 7-7 7 7 3-3L12 2zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      } />
    },
    {
      name: "Synthetix",
      description: "Synthetix is a crypto exchange built on Ethereum. It allows users to participate in margin trading in a completely decentralized manner.",
      icon: <DeFiIcon paths={
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z" />
      } />
    },
    {
      name: "Notional",
      description: "Notional is an on-chain Ethereum protocol that enables users to lend and borrow at fixed rates and predefined maturities.",
      icon: <DeFiIcon paths={
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
      } />
    },
    {
      name: "Yearn Finance",
      description: "It comprises a string of DeFi-focused protocols that leverage multiple lending services, including Compound, DyDx, and Fulcrum to optimize lending options.",
      icon: <DeFiIcon paths={
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
      } />
    },
    {
      name: "Project Serum",
      description: "A decentralized exchange built on a blockchain compatible with Bitcoin and Ethereum. It allows traders to engage in transactions involving currencies other than ERC-20 tokens.",
      icon: <DeFiIcon paths={
        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      } />
    },
    {
      name: "Fulcrum",
      description: "A decentralized platform designed for tokenized margin trading and lending. It enables users to lend assets for interest or enter into short/leveraged positions.",
      icon: <DeFiIcon paths={
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      } />
    }
  ];

  return (
    <> 
<WrapperContainer>
 <Heading>
    <div>
    Our Technology Expertise
    </div>
 </Heading>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl  hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="mb-4 p-3 rounded-full bg-blue-50">{tech.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">{tech.name}</h3>
            <p className="text-gray-600 text-center text-sm">{tech.description}</p>
          </div>
        ))}
      </div>
      </WrapperContainer>
      </>
  )
};

export default DefiTechnology;