import React from "react";
import { BentoGrid, BentoCard } from "../../../../components/magicui/bento-grid";
import { RocketIcon, StarIcon, PersonIcon, BackpackIcon } from "@radix-ui/react-icons";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <div className="w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <div className="w-20 h-20 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About MB TradeLink
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <BentoGrid className="!grid !grid-cols-1 md:!grid-cols-2 !auto-rows-[14rem] gap-4 max-w-5xl mx-auto">
          {/* Company Card - First Column */}
          <BentoCard
            name="Our Company"
            className="!col-span-1 !row-span-3 bg-white border border-gray-200 flex items-center justify-center"
            background={null}
            Icon={BackpackIcon}
            description="A trusted bridge between India's top manufacturers and leading retailers & wholesalers."
            href="#about"
            cta="Learn More"
          />
          
          {/* Second Column Cards - Stacked */}
          {/* Mission Card */}
          <BentoCard
            name="Our Mission"
            className="!col-span-1 !row-span-1 bg-white border border-gray-200"
            background={null}
            Icon={RocketIcon}
            description="To empower manufacturers and buyers with verified connections, end-to-end support, and industry insights."
            href="#mission"
            cta="Read Mission"
          />
          {/* Journey Card */}
          <BentoCard
            name="Our Journey"
            className="!col-span-1 !row-span-1 bg-white border border-gray-200"
            background={null}
            Icon={StarIcon}
            description="From humble beginnings, we have expanded pan-India, connecting hundreds of businesses and facilitating seamless trade."
            href="#journey"
            cta="See Journey"
          />
          {/* Leadership Card */}
          <BentoCard
            name="Leadership"
            className="!col-span-1 !row-span-1 bg-white border border-gray-200"
            background={null}
            Icon={PersonIcon}
            description="Mr. [Founder Name] (Founder & CEO) leads MB TradeLink with a vision for transparent, efficient, and growth-oriented B2B trade."
            href="#leadership"
            cta="Meet the Team"
          />
        </BentoGrid>
      </div>
    </section>
  );
};
