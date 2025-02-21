import React from 'react';
import { CheckCircle, Users, ShieldCheck, Box } from 'lucide-react'; // Use Box instead of Cube
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-[#f3f4f6] rounded-lg p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-gray-900 text-xl font-bold max-w-[70%]">{title}</h3>
      <div className="w-16 h-16"> {/* Adjust size with custom width and height */}
        {icon}
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <Box className="text-blue-500" size={48} />,  // Increase icon size using size prop
      title: "CUSTOMIZED FULL-CYCLE GAME DEVELOPMENT",
      description: "We create games carefully tailored to your specific needs and budget expectations. Experienced professionals in each desktop game development area provide a customized approach to your project to match the goals and scale."
    },
    {
      icon: <Users className="text-green-500" size={48} />,  // Increase icon size using size prop
      title: "TRANSPARENCY AND RELIABLE PARTNERSHIP",
      description: "Thanks to an open dialogue, transparent communication and strict adherence to the wishes of the client, our PC gaming company ensures complete satisfaction with the implemented projects and secures repeat business in 90% of cases."
    },
    {
      icon: <ShieldCheck className="text-red-500" size={48} />,  // Increase icon size using size prop
      title: "ADHERENCE TO THE BEST SECURITY PRACTICES",
      description: "Keep calm and don't worry about data, system and infrastructure protection: we adhere to strict protection policy rules and constantly update security systems in accordance with the latest innovations."
    },
    {
      icon: <CheckCircle className="text-yellow-500" size={48} />,  // Increase icon size using size prop
      title: "EXCEPTIONAL FLEXIBILITY AND SCALABILITY",
      description: "We adjust to the scale of the project and are ready to attract an even greater number of highly skilled experts if necessary for the successful implementation of the project on schedule. On average, we need 2 weeks to hire a new specialist."
    }
  ];

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Heading>
            <h2>OUR FUNDAMENTAL BENEFITS IN PC GAME DEVELOPMENT</h2>
          </Heading>

          <p className="max-w-3xl mx-auto">
            <Paragraph>
              Over the years of successful work on many global projects, we have formed a solid base of quality criteria that we strictly follow and that allow us to stand out.
            </Paragraph>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Benefits;
