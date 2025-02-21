import React from 'react'
import Hero from '../container/Technology/MobileAppDev/XamarinAppDevlopment/Hero'
import WhyChooseXamarin from '../container/Technology/MobileAppDev/XamarinAppDevlopment/WhyChooseXamarin'
import XamarinAppServices from '../container/Technology/MobileAppDev/XamarinAppDevlopment/XamarinAppServices'
import WhyDigiflex from '../container/Technology/MobileAppDev/XamarinAppDevlopment/WhyDigiflex'
import XamarinTechStack from '../container/Technology/MobileAppDev/XamarinAppDevlopment/XamarinTechStack'
import IndustriesWeServe from '../container/Technology/MobileAppDev/XamarinAppDevlopment/IndustriesWeServe'
import FrequentlyAskedQuestions from '../container/Technology/MobileAppDev/XamarinAppDevlopment/FrequentlyAskedQuestions'
import WrapperContainer from '../Layout/WrapperContainer'

const XamarinAppDEvlopment = () => {
  return (
    <div>
      <Hero/>
      <WrapperContainer>
      <WhyChooseXamarin/>
      <XamarinAppServices/>
      <WhyDigiflex/>
      <XamarinTechStack/>
      <IndustriesWeServe/>
      <FrequentlyAskedQuestions/>
      </WrapperContainer>
    </div>
  )
}

export default XamarinAppDEvlopment
