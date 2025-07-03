import React from "react";
import { MagicCard } from "../../../../components/magicui/magic-card";

export const FeaturesSection = (): JSX.Element => {
  // Steps for 'How It Works'
  const steps = [
    {
      icon: "https://via.placeholder.com/48?text=1",
      title: "Share Your Requirements",
      desc: "Tell us what you need or what you offer."
    },
    {
      icon: "https://via.placeholder.com/48?text=2",
      title: "Get Connected",
      desc: "We match you with verified manufacturers or buyers."
    },
    {
      icon: "https://via.placeholder.com/48?text=3",
      title: "Build Partnerships",
      desc: "Grow your business with long-term trade relationships."
    }
  ];
  // USPs
  const usps = [
    {
      icon: "https://via.placeholder.com/48?text=Network",
      title: "Pan-India Network",
      desc: "Access a vast network of trusted partners across India."
    },
    {
      icon: "https://via.placeholder.com/48?text=Verified",
      title: "Verified Vendors",
      desc: "Work only with thoroughly vetted manufacturers and buyers."
    },
    {
      icon: "https://via.placeholder.com/48?text=Support",
      title: "End-to-End Support",
      desc: "We assist you at every step, from onboarding to logistics."
    }
  ];
  return (
    <section className="relative w-full py-20 bg-[#f9fafb] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-12 justify-center items-center">
        {steps.map((step, idx) => (
          <MagicCard 
            key={idx} 
            className="p-6 w-64 h-64 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            gradientFrom="#4F46E5"
            gradientTo="#7C3AED"
            gradientSize={300}
          >
            <div className="flex flex-col items-center text-center h-full justify-center">
              <img src={step.icon} alt={step.title} className="mb-4 h-12 w-12" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          </MagicCard>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {usps.map((usp, idx) => (
          <MagicCard 
            key={idx} 
            className="p-6 w-64 h-64 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            gradientFrom="#059669"
            gradientTo="#3B82F6"
            gradientSize={300}
          >
            <div className="flex flex-col items-center text-center h-full justify-center">
              <img src={usp.icon} alt={usp.title} className="mb-4 h-12 w-12" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{usp.title}</h3>
              <p className="text-gray-700">{usp.desc}</p>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};
