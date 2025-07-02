import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  // Team members data
  const teamMembers = [
    {
      name: "Matheus Ferrero",
      position: "Product Manager",
      image: "/matheus-ferrero.png",
    },
    {
      name: "Eva Hudson",
      position: "Product Designer",
      image: "/eva-hudson.png",
    },
    {
      name: "Jackie Sanders",
      position: "Web Designer",
      image: "/jackie-sanders.png",
    },
  ];

  // Decorative shapes data
  const shapes = [
    {
      src: "/shape-09-svg.svg",
      alt: "Shape svg",
      className: "w-[47px] h-[54px]",
      containerClassName: "absolute top-[473px] left-48",
    },
    {
      src: "/shape-10-svg.svg",
      alt: "Shape svg",
      className: "w-[54px] h-[54px]",
      containerClassName: "absolute top-[47px] left-96",
    },
    {
      src: "/shape-11-svg.svg",
      alt: "Shape svg",
      className: "w-20 h-[69px]",
      containerClassName: "absolute top-[142px] left-[1552px]",
    },
  ];

  return (
    <section className="relative w-full py-[120px] flex flex-col items-center gap-[70px]">
      {/* Background */}
      <div className="absolute w-full h-[568px] top-0 left-0 bg-[#f4f7fa]" />

      {/* Decorative shapes */}
      {shapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`${shape.containerClassName} flex flex-col items-start`}
        >
          <div className="flex flex-col items-center justify-center relative">
            <img
              className={`relative ${shape.className}`}
              alt={shape.alt}
              src={shape.src}
            />
          </div>
        </div>
      ))}

      {/* Background image */}
      <div className="absolute top-0 left-[299px] flex flex-col items-start max-w-[1920px] w-[1621px]">
        <div className="flex flex-col w-[1621px] h-[566px] items-center justify-center relative">
          <div className="relative w-[1621px] h-[566px] overflow-hidden">
            <img
              className="absolute w-[2447px] h-[3032px] top-[-1374px] left-[469px]"
              alt="Group"
              src="/group-6.png"
            />
          </div>
        </div>
      </div>

      {/* Section heading */}
      <div className="relative flex flex-col max-w-[1390px] w-[1390px] items-center gap-[18px] z-10">
        <div className="flex w-[695px] items-center flex-col">
          <h2 className="relative w-fit mt-[-1.00px] font-['Outfit',Helvetica] font-semibold text-[#181c31] text-[45px] text-center tracking-[0] leading-[55px]">
            Meet With Our Creative
            <br />
            Dedicated Team
          </h2>
        </div>

        <div className="flex flex-col w-[639.39px] items-center">
          <p className="w-fit text-[#79808a] text-base text-center leading-6 relative mt-[-1.00px] font-['Inter',Helvetica] font-normal tracking-[0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros.
            <br />
            Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>
      </div>

      {/* Team members */}
      <div className="relative flex flex-col max-w-[1390px] w-[1390px] items-start px-[104px] py-0 z-10">
        <div className="flex items-start justify-center gap-[50px] relative self-stretch w-full">
          {teamMembers.map((member, index) => (
            <Card
              key={`member-${index}`}
              className="relative self-stretch w-[360.66px] border-none bg-transparent"
            >
              <CardContent className="p-0">
                <div className="flex flex-col w-full items-start overflow-hidden">
                  <div
                    className="relative w-full h-[360.66px] rounded-md bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />

                  <div className="flex flex-col w-full items-center mt-8">
                    <h3 className="font-['Outfit',Helvetica] font-normal text-[#181c31] text-[26px] text-center tracking-[0] leading-8 whitespace-nowrap">
                      {member.name}
                    </h3>

                    <p className="mt-2 font-['Inter',Helvetica] font-normal text-[#79808a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      {member.position}
                    </p>

                    <div className="flex items-center justify-center gap-8 w-full mt-[30px] pb-5">
                      <div className="relative w-2.5 h-[18px]" />
                      <div className="relative w-[18px] h-3.5" />
                      <div className="relative w-[17px] h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
