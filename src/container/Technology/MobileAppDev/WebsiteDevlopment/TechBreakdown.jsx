import React from 'react';
import Introduction from '../../../../container/Main/Home/Intro';
import WhyUsSection from '../../../../container/Main/Home/WhyUs';

const TechBreakdown = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* First Section with Introduction */}
      

      {/* Second Section */}
      <section className="sticky top-0 min-h-screen ">
        <div className="">
          <WhyUsSection />
        </div>
      </section>

      {/* Third Section */}
      <section className="sticky top-0 min-h-screen flex items-center justify-center bg-gray-900 p-8">
        <div className="w-full max-w-7xl">
          <Introduction />
        </div>
      </section>


     
    </div>
  );
};

export default TechBreakdown;
