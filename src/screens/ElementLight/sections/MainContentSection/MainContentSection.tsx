import React from "react";

export const MainContentSection = (): JSX.Element => {
  // MB TradeLink services with proper SVG icons
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Manufacturer Onboarding",
      desc: "We help manufacturers join our network and reach new buyers with comprehensive onboarding support."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.49-.58 1.07-.58 1.68V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      title: "Buyer Networking",
      desc: "Connect with verified buyers and expand your business reach through our extensive network."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Event Participation",
      desc: "Showcase your products at trade shows and industry events to maximize visibility."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "B2B Matchmaking",
      desc: "We facilitate the right connections for your business needs with intelligent matching algorithms."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 10 12 10s-3.5-1.57-3.5-3.5S10.07 3 12 3zm7 13.5c0 .83-.67 1.5-1.5 1.5h-11c-.83 0-1.5-.67-1.5-1.5V12h14v4.5z"/>
        </svg>
      ),
      title: "Product Sourcing",
      desc: "Find the best products and suppliers for your requirements with our extensive database."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      title: "Logistic Support",
      desc: "Get assistance with logistics and supply chain management for seamless operations."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive B2B solutions to connect manufacturers with buyers, 
            facilitating seamless trade relationships across India's textile industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 h-80 flex flex-col justify-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};
