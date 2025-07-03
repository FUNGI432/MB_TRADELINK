import React, { useState } from "react";
import { MagicCard } from "../../../../components/magicui/magic-card";

export const FeaturesSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Steps for 'How It Works'
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Share Your Requirements",
      desc: "Tell us what you need or what you offer.",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.49-.58 1.07-.58 1.68V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      title: "Get Connected",
      desc: "We match you with verified manufacturers or buyers.",
      color: "purple"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Build Partnerships",
      desc: "Grow your business with long-term trade relationships.",
      color: "green"
    }
  ];
  // USPs
  const usps = [
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Pan-India Network",
      desc: "Access a vast network of trusted partners across India.",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Verified Vendors",
      desc: "Work only with thoroughly vetted manufacturers and buyers.",
      color: "green"
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"/>
        </svg>
      ),
      title: "End-to-End Support",
      desc: "We assist you at every step, from onboarding to logistics.",
      color: "purple"
    }
  ];

  // Helper function to get color classes
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          border: "hover:border-blue-200",
          bg: "group-hover:bg-blue-50",
          text: "group-hover:text-blue-600",
          overlay: "bg-blue-600/5"
        };
      case "green":
        return {
          border: "hover:border-green-200",
          bg: "group-hover:bg-green-50",
          text: "group-hover:text-green-600",
          overlay: "bg-green-600/5"
        };
      case "purple":
        return {
          border: "hover:border-purple-200",
          bg: "group-hover:bg-purple-50",
          text: "group-hover:text-purple-600",
          overlay: "bg-purple-600/5"
        };
      default:
        return {
          border: "hover:border-blue-200",
          bg: "group-hover:bg-blue-50",
          text: "group-hover:text-blue-600",
          overlay: "bg-blue-600/5"
        };
    }
  };

  return (
    <section id="services" className="relative w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* How It Works Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Our simple three-step process connects you with the right business partners for growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {steps.map((step, idx) => {
            const colorClasses = getColorClasses(step.color);
            return (
              <div 
                key={idx} 
                className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-gray-100 ${colorClasses.border} transform hover:-translate-y-2`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 md:left-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                  {idx + 1}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-4 md:mb-6 mt-2 md:mt-4">
                  <div className={`p-3 md:p-4 bg-gray-50 rounded-full ${colorClasses.bg} transition-colors duration-300`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className={`font-bold text-lg md:text-xl mb-2 md:mb-3 text-gray-900 ${colorClasses.text} transition-colors duration-300`}>
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 ${colorClasses.overlay} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We provide the tools, network, and support you need to succeed in the competitive textile industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {usps.map((usp, idx) => {
            const colorClasses = getColorClasses(usp.color);
            return (
              <div 
                key={idx} 
                className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-gray-100 ${colorClasses.border} transform hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className={`p-3 md:p-4 bg-gray-50 rounded-full ${colorClasses.bg} transition-colors duration-300`}>
                    {usp.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className={`font-bold text-lg md:text-xl mb-2 md:mb-3 text-gray-900 ${colorClasses.text} transition-colors duration-300`}>
                    {usp.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {usp.desc}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 ${colorClasses.overlay} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
