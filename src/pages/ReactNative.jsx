import React from 'react'
import Hero from '../container/Technology/MobileAppDev/React Native/Hero'
import WhyChooseReactNative from '../container/Technology/MobileAppDev/React Native/WhyChooseReactNative'
import OurServices from '../container/Technology/MobileAppDev/React Native/OurServices'
import OurTechStack from '../container/Technology/MobileAppDev/React Native/OurTechStack'
import SmartFeatures from '../container/Technology/MobileAppDev/React Native/SmartFeatures'
import IndustriesWeServe from '../container/Technology/MobileAppDev/React Native/IndustriesWeServe'
import WrapperContainer from '../Layout/WrapperContainer'
const ReactNative = () => {
  return (
    <div>

    
      <Hero/>
      <WrapperContainer>
      <WhyChooseReactNative/>
      <OurTechStack/>
      <OurServices/>
      <IndustriesWeServe/>
      <SmartFeatures/>
      </WrapperContainer>
      
    </div>
  )
}

export default ReactNative
