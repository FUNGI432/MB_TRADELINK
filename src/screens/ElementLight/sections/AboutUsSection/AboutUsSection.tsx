import React from "react";
import { BentoGrid, BentoCard } from "../../../../components/magicui/bento-grid";
import { RocketIcon, StarIcon, PersonIcon, BackpackIcon } from "@radix-ui/react-icons";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about" className="relative w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <div className="w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <div className="w-20 h-20 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About MB TradeLink
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <BentoGrid className="!grid !grid-cols-1 md:!grid-cols-2 !auto-rows-[12rem] md:!auto-rows-[14rem] gap-4 max-w-5xl mx-auto">
          {/* Company Card - First Column - Black Texture */}
          <BentoCard
            name="Our Company"
            className="!col-span-1 !row-span-3 border border-gray-200 flex items-center justify-center relative overflow-hidden"
            background={
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/black texturepng.png")' }}
              />
            }
            Icon={BackpackIcon}
            description="A trusted bridge between India's top manufacturers and leading retailers & wholesalers."
            href="#about"
            cta="Learn More"
            iconClassName="text-white"
            nameClassName="text-white font-bold"
            descriptionClassName="text-gray-200"
            ctaClassName="text-white bg-white/20 hover:bg-white/30 border-white/30"
          />
          
          {/* Second Column Cards - Stacked */}
          {/* Mission Card - Red Texture */}
          <BentoCard
            name="Our Mission"
            className="!col-span-1 !row-span-1 border border-gray-200 relative overflow-hidden"
            background={
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/red texturepng.png")' }}
              />
            }
            Icon={RocketIcon}
            description="To empower manufacturers and buyers with verified connections, end-to-end support, and industry insights."
            href="#mission"
            cta="Read Mission"
            iconClassName="text-white"
            nameClassName="text-white font-bold"
            descriptionClassName="text-gray-200"
            ctaClassName="text-white bg-white/20 hover:bg-white/30 border-white/30"
          />
          
          {/* Journey Card - Yellow Texture */}
          <BentoCard
            name="Our Journey"
            className="!col-span-1 !row-span-1 border border-gray-200 relative overflow-hidden"
            background={
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/yellow texture.png")' }}
              />
            }
            Icon={StarIcon}
            description="From humble beginnings, we have expanded pan-India, connecting hundreds of businesses and facilitating seamless trade."
            href="#journey"
            cta="See Journey"
            iconClassName="text-white"
            nameClassName="text-white font-bold"
            descriptionClassName="text-gray-200"
            ctaClassName="text-white bg-white/20 hover:bg-white/30 border-white/30"
          />
          
          {/* Leadership Card - Green Texture */}
          <BentoCard
            name="Leadership"
            className="!col-span-1 !row-span-1 border border-gray-200 relative overflow-hidden"
            background={
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/green texture.png")' }}
              />
            }
            Icon={PersonIcon}
            description="Mr. [Founder Name] (Founder & CEO) leads MB TradeLink with a vision for transparent, efficient, and growth-oriented B2B trade."
            href="#leadership"
            cta="Meet the Team"
            iconClassName="text-white"
            nameClassName="text-white font-bold"
            descriptionClassName="text-gray-200"
            ctaClassName="text-white bg-white/20 hover:bg-white/30 border-white/30"
          />
        </BentoGrid>
      </div>
    </section>
  );
};
