import React from "react";

export const MainContentSection = (): JSX.Element => {
  // MB TradeLink services
  const services = [
    {
      icon: "https://via.placeholder.com/48?text=Onboard",
      title: "Manufacturer Onboarding",
      desc: "We help manufacturers join our network and reach new buyers."
    },
    {
      icon: "https://via.placeholder.com/48?text=Network",
      title: "Buyer Networking",
      desc: "Connect with verified buyers and expand your business reach."
    },
    {
      icon: "https://via.placeholder.com/48?text=Event",
      title: "Event Participation",
      desc: "Showcase your products at trade shows and industry events."
    },
    {
      icon: "https://via.placeholder.com/48?text=Match",
      title: "B2B Matchmaking",
      desc: "We facilitate the right connections for your business needs."
    },
    {
      icon: "https://via.placeholder.com/48?text=Source",
      title: "Product Sourcing",
      desc: "Find the best products and suppliers for your requirements."
    },
    {
      icon: "https://via.placeholder.com/48?text=Logistics",
      title: "Logistic Support",
      desc: "Get assistance with logistics and supply chain management."
    }
  ];
  return (
    <section className="relative w-full py-20 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center bg-[#f9fafb] rounded-lg shadow p-6">
            <img src={service.icon} alt={service.title} className="mb-4 h-12 w-12" />
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
