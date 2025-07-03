import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <div className="w-16 h-16 bg-white rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <div className="w-20 h-20 bg-white rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <div className="w-32 h-32 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Main Content */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to Connect with India's Top Textile Partners?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of manufacturers and buyers who trust MB TradeLink for their B2B connections. 
            Start your journey towards business growth today.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12">
          <Button className="bg-white text-blue-600 px-8 py-4 md:px-10 md:py-4 text-base md:text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Partner With Us
          </Button>
          <Button variant="outline" className="border-2 border-white text-white px-8 py-4 md:px-10 md:py-4 text-base md:text-lg font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
            Schedule a Call
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-sm md:text-base text-blue-100">Manufacturers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-sm md:text-base text-blue-100">Buyers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-sm md:text-base text-blue-100">States</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-sm md:text-base text-blue-100">Satisfaction</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/20">
          <p className="text-sm md:text-base text-blue-100 mb-4">
            No setup fees • Free consultation • 24/7 support
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-blue-100">
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified Partners Only
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Quality Assurance
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              End-to-End Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
