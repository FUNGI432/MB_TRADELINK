import React from "react";

export const StatsSection = (): JSX.Element => {
  // Placeholder data for trusted network
  const trustedStates = [
    "West Bengal",
    "Gujarat",
    "Maharashtra",
    "Delhi NCR",
    "Punjab",
    "Rajasthan",
    "Karnataka",
    "Tamil Nadu",
  ];
  const segmentLogos = [
    { src: "https://via.placeholder.com/80x40?text=Sarees", alt: "Sarees" },
    { src: "https://via.placeholder.com/80x40?text=Fabrics", alt: "Fabrics" },
    { src: "https://via.placeholder.com/80x40?text=Kurtis", alt: "Kurtis" },
    { src: "https://via.placeholder.com/80x40?text=Mens+Ethnic", alt: "Men's Ethnic" },
    { src: "https://via.placeholder.com/80x40?text=Western", alt: "Women's Western" },
  ];

  return (
    <section className="relative w-full py-20 bg-[#ecf0f5] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Trusted Network</h2>
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {trustedStates.map((state, idx) => (
          <span
            key={idx}
            className="bg-white rounded-full px-6 py-2 shadow text-gray-800 text-base font-medium m-1"
          >
            {state}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {segmentLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto bg-white rounded shadow p-2"
          />
        ))}
      </div>
    </section>
  );
};
