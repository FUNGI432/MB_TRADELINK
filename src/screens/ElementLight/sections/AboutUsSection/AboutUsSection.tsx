import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const stats = [
    { number: "27", label: "Global Brands" },
    { number: "18", label: "Happy Clients" },
    { number: "29", label: "Winning Award" },
    { number: "12", label: "Happy Clients" },
  ];

  // Data for decorative elements
  const decorations = [
    {
      className: "w-[58px] top-[221px] left-[58px]",
      imgClassName: "w-[58px] h-[50.03px]",
      src: "/shape-11-svg.svg",
      alt: "Shape svg",
    },
    {
      className: "w-[84px] top-[17px] left-[1798px] rotate-90",
      imgClassName: "w-[42px] h-[84px] mt-[-21.00px] -rotate-90",
      src: "/shape-07-svg-1.svg",
      alt: "Shape svg",
    },
    {
      className: "w-[54px] top-[3px] left-[672px]",
      imgClassName: "w-[54px] h-[54px]",
      src: "/shape-10-svg.svg",
      alt: "Shape svg",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">About MB TradeLink</h2>
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center justify-center">
        <img
          src="https://via.placeholder.com/180x180?text=Founder"
          alt="Founder"
          className="rounded-full shadow mb-6 md:mb-0"
        />
        <div className="flex-1">
          <p className="text-lg text-gray-700 mb-4">
            Founded in Surat, MB TradeLink has rapidly become a trusted bridge between India's top manufacturers and leading retailers & wholesalers. Our mission is to streamline B2B connections, foster long-term partnerships, and unlock growth opportunities across the textile and apparel industry.
          </p>
          <p className="text-base text-gray-600 mb-2">
            <strong>Our Journey:</strong> From humble beginnings, we have expanded our network pan-India, connecting hundreds of businesses and facilitating seamless trade.
          </p>
          <p className="text-base text-gray-600 mb-2">
            <strong>Our Mission:</strong> To empower manufacturers and buyers with verified connections, end-to-end support, and industry insights.
          </p>
          <p className="text-base text-gray-600">
            <strong>Leadership:</strong> <span className="font-semibold">Mr. [Founder Name]</span> (Founder & CEO) leads MB TradeLink with a vision for transparent, efficient, and growth-oriented B2B trade.
          </p>
        </div>
      </div>
    </section>
  );
};
