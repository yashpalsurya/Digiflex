import React from "react";
import Hero from '../container/Technology/MobileAppDev/IOS Devlopment/Hero'
import WhyChooseDigiflex from '../container/Technology/MobileAppDev/IOS Devlopment/WhyChooseDigiflex'
import Industries from "../container/Technology/MobileAppDev/IOS Devlopment/Industries";
import TechStack from "../container/Technology/MobileAppDev/IOS Devlopment/TechStack";
import WrapperContainer from "../Layout/WrapperContainer";

const IosDevelopmentTech = () => {
  return (
    <>
      <Hero />
      <WrapperContainer>
      <WhyChooseDigiflex/>
      <Industries/>
      <TechStack/>   
      </WrapperContainer>
    </>
  );
};

export default IosDevelopmentTech;
