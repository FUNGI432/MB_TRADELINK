import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const PricingSection = (): JSX.Element => {
  // Filter categories data
  const filterCategories = [
    { name: "All", isActive: true },
    { name: "Branding Strategy", isActive: false },
    { name: "Digital Experiences", isActive: false },
    { name: "Ecommerce", isActive: false },
  ];

  // Project data
  const projects = [
    {
      id: 1,
      image: "/photo-retouching.png",
      width: "w-[683px]",
      height: "h-[499px]",
      position: "top-0 left-0",
    },
    {
      id: 2,
      image: "/photo-retouching-1.png",
      width: "w-[330px]",
      height: "h-[499px]",
      position: "top-0 left-[707px]",
    },
    {
      id: 3,
      image: "/photo-retouching-2.png",
      width: "w-[330px]",
      height: "h-[899px]",
      position: "top-0 left-[1060px]",
    },
    {
      id: 4,
      image: "/photo-retouching-3.png",
      width: "w-[1036px]",
      height: "h-[376px]",
      position: "top-[523px] left-0",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[50px] py-[120px] w-full">
      <div className="flex flex-col max-w-[1390px] w-full items-center gap-[18px] relative z-[1]">
        <h2 className="font-['Outfit',Helvetica] font-semibold text-[#181c31] text-[45px] text-center tracking-[0] leading-[55px]">
          Our Latest Projects
        </h2>

        <div className="flex flex-col w-full max-w-[639.39px] items-center">
          <p className="font-['Inter',Helvetica] font-normal text-[#79808a] text-base text-center tracking-[0] leading-6">
            It is a long established fact that a reader will be distracted by
            the readable content
            <br />
            of a page when looking at its layout. The point of using.
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-[1390px] w-full items-center gap-[70px] relative z-0">
        <div className="flex flex-wrap w-full max-w-[667.06px] items-center justify-center gap-[0px_20px] px-2.5 py-2 bg-white rounded-[33554400px] shadow-[0px_8px_70px_#0000000d]">
          {filterCategories.map((category, index) => (
            <Button
              key={index}
              variant={category.isActive ? "default" : "ghost"}
              className={`px-6 py-1.5 rounded-[33554400px] ${
                category.isActive ? "bg-[#4e6bff]" : ""
              }`}
            >
              <span
                className={`font-['Inter',Helvetica] font-medium text-${
                  category.isActive ? "white" : "[#79808a]"
                } text-base text-center tracking-[0] leading-6`}
              >
                {category.name}
              </span>
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[898.7px]">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`flex flex-col ${project.width} ${project.height} items-start justify-center absolute ${project.position} rounded-lg overflow-hidden p-0`}
            >
              <div
                className={`relative flex-1 w-full grow bg-cover bg-[50%_50%]`}
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#fffefe33] flex flex-col items-center justify-center rounded-lg">
                <div className="w-[187.09px] h-[34px]" />
                <div className="w-[158.3px] h-6" />
                <div className="flex flex-col items-start pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-full border border-solid border-[#79808a]"
                  >
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
