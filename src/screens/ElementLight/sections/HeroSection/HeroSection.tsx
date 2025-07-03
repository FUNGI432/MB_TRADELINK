import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const [displayed, setDisplayed] = useState("");
  const fullText = "World of Opportunities";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 min-h-screen"
        src="/TEXTTILE VIDEO BACKROUND.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 min-h-screen" />
      <div className="max-w-4xl w-full flex flex-col items-center text-center z-20 relative px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white drop-shadow-sm tracking-tight leading-tight">
          Connecting Manufacturers to the<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">{displayed}<span className="border-r-2 border-purple-400 animate-pulse ml-1" /></span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
          MB TradeLink is the trusted bridge between India's top manufacturers and leading retailers & wholesalers. We streamline B2B connections and unlock growth opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2 w-full max-w-xs sm:max-w-md mx-auto px-4">
          <Button className="w-full sm:w-40 bg-blue-700 text-white px-6 py-3 text-base font-semibold rounded-3xl shadow-lg hover:bg-blue-800 active:bg-blue-900 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none">
            Partner With Us
          </Button>
          <Button variant="outline" className="w-full sm:w-40 border-2 border-blue-700 text-blue-700 bg-white px-6 py-3 text-base font-semibold rounded-3xl shadow-lg hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none">
            Explore Our Network
          </Button>
        </div>
      </div>
      {/* Trusted by row at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-full">
        <span className="uppercase text-xs text-gray-200 tracking-widest mb-2 text-center">Trusted by</span>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {/* Repeat the trusted by image multiple times for seamless loop */}
            {Array.from({ length: 20 }, (_, i) => (
              <img
                key={i}
                src="/trusted by/TRUSTED_BY_NEW.png"
                alt="Trusted by"
                className="h-20 w-auto bg-white rounded shadow p-1 border mx-4 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
