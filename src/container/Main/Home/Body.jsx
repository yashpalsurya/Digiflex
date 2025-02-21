import React from "react";
import { motion } from "framer-motion";
import WhyUsSection from "./WhyUs";
import { BentoGridItem } from "../../../components/ui/Bento-grid";
import { WhatWeOffer } from './WhatWeOffer';
import Timeline from './Timeline';
import Introduction from './Intro';
import Expertie from './Experties';
import CaseStudies from './CaseStudy';
import IndustriesCarousel from "./Industries";
import OurWork from "./OurWork";
import TeamSection from "./OurTeam";
import Recognitions from "./Recognition";
import StandOut from "./StandOut";

const MotionBentoGridItem = motion(BentoGridItem);

const BentoGridFeatures = () => {
  return (
    
      <div className="relative z-10">
        {/* Introduction */}
        <Introduction />

        {/* Why us */}
        <WhyUsSection />

        {/* Our Expertise */}
        <Expertie />

        {/* Industries */}
        <IndustriesCarousel />

        {/* Timeline */}
        <Timeline />

        {/* Case Study */}
        <CaseStudies />

        {/* What we offer */}
        <WhatWeOffer />

        {/* Our Work */}
        <OurWork />

        {/* Our Team */}
        <TeamSection />

        {/* Recognition */}
        <Recognitions />
      </div>
  );
};

export default BentoGridFeatures;
