import React from 'react'
import Hero from '../container/Technology/MobileAppDev/NativeScript/Hero'
import NativeScriptBenefits from '../container/Technology/MobileAppDev/NativeScript/NativeScriptBenefits'
import NativeScriptServices from '../container/Technology/MobileAppDev/NativeScript/NativeScriptServices'
import NativeScriptProcess from '../container/Technology/MobileAppDev/NativeScript/NativeScriptProcess'
import IndustriesSection from '../container/Technology/MobileAppDev/NativeScript/IndustriesSection'
import WrapperContainer from '../Layout/WrapperContainer'


const NativeScript = () => {
  return (
    <>

      
      <Hero/>
      <WrapperContainer>
      <NativeScriptBenefits/>
      <NativeScriptServices/>
      <NativeScriptProcess/>
      <IndustriesSection/>
      
      </WrapperContainer>
      
    </>
  )
}

export default NativeScript
