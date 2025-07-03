import React from "react";
import { Button } from "../../../../components/ui/button";

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

  const companyUpdates = [
    {
      id: 1,
      title: "New Partnership with Kolkata Textile Hub",
      date: "March 15, 2024",
      image: "/surat textile correct .jpeg",
      excerpt: "We're excited to announce our strategic partnership with the prestigious Kolkata Textile Hub, expanding our network across Eastern India."
    },
    {
      id: 2,
      title: "Enhanced Quality Verification System",
      date: "March 10, 2024",
      image: "/surat textile .jpeg",
      excerpt: "Introducing our upgraded quality verification system with AI-powered inspection and real-time reporting for better transparency."
    },
    {
      id: 3,
      title: "Pan-India Expansion Milestone",
      date: "March 5, 2024",
      image: "/4.png",
      excerpt: "MB TradeLink now connects manufacturers and buyers across 25+ states, marking a significant milestone in our growth journey."
    },
    {
      id: 4,
      title: "Digital Payment Integration",
      date: "February 28, 2024",
      image: "/FOOTER.png",
      excerpt: "Streamlined payment processes with integrated digital payment solutions for faster and more secure transactions."
    }
  ];

  return (
    <section id="company" className="relative w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Company Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Stay updated with the latest news, partnerships, and developments at MB TradeLink.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {companyUpdates.map((update) => (
            <div
              key={update.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs md:text-sm text-blue-600 font-semibold">
                    {update.date}
                  </span>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                
                <h3 className="font-bold text-sm md:text-base lg:text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {update.title}
                </h3>
                
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {update.excerpt}
                </p>
                
                <button className="text-blue-600 font-semibold text-xs md:text-sm hover:text-blue-700 transition-colors duration-300 flex items-center">
                  Read More
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Join thousands of manufacturers and buyers who trust MB TradeLink for their B2B connections and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
