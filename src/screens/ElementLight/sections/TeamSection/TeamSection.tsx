import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";

export const TeamSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      title: "Email Address",
      value: "info@mbtradelink.com",
    },
    {
      title: "Office Location",
      value: "8th Floor, 113/1B, Chittaranjan Ave, Kolutolla, Kolkata, West Bengal 700073",
    },
    {
      title: "Phone Number",
      value: "+91 33 4000 0000",
    },
    {
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  // Social media icons data
  const socialIcons = [
    { src: "/svg-2.svg", alt: "Facebook", width: "11px", height: "20px" },
    { src: "/svg-11.svg", alt: "Twitter", width: "20px", height: "16px" },
    { src: "/svg-4.svg", alt: "LinkedIn", width: "19px", height: "18px" },
    { src: "/svg-6.svg", alt: "YouTube", width: "22px", height: "14px" },
  ];

  // Form fields data
  const formFields = [
    {
      label: "Full name",
      placeholder: "Devid Wonder",
      gridArea: "top-0 left-0",
    },
    {
      label: "Email address",
      placeholder: "example@gmail.com",
      gridArea: "top-0 left-[353px]",
    },
    {
      label: "Phone number",
      placeholder: "+009 3342 3432",
      gridArea: "top-[124px] left-0",
    },
    {
      label: "Subject",
      placeholder: "Type your subject",
      gridArea: "top-[124px] left-[353px]",
    },
  ];

  return (
    <section className="relative flex flex-col items-center gap-20 px-0 py-[120px] bg-[#f4f7fa] w-full">
      {/* Decorative elements */}
      <div className="absolute top-[54px] left-48">
        <div className="w-[43px] h-[86px] flex items-center justify-center">
          <img
            className="w-[43px] h-[86px]"
            alt="Shape svg"
            src="/shape-06-svg-1.svg"
          />
        </div>
      </div>

      <div className="absolute top-[270px] left-[1451px]">
        <div className="w-[85px] h-[46px] flex items-center justify-center">
          <img
            className="w-[85px] h-[46px]"
            alt="Shape svg"
            src="/shape-03-svg.svg"
          />
        </div>
      </div>

      <div className="absolute top-[923px] left-[1724px]">
        <div className="w-[100px] h-[50px] flex items-center justify-center">
          <img
            className="w-[100px] h-[50px]"
            alt="Shape svg"
            src="/shape-07-svg.svg"
          />
        </div>
      </div>

      <div className="absolute top-[42px] left-0">
        <div className="w-[927px] h-[1039px] flex items-center justify-center">
          <div className="relative w-[927px] h-[1039px] overflow-hidden">
            <img
              className="absolute w-[2339px] h-[1852px] top-[640px] left-[-1778px]"
              alt="Group"
              src="/group-3.png"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-[893px]">
        <div className="w-[1027px] h-[492px] flex items-center justify-center">
          <div className="relative w-[1027px] h-[492px] overflow-hidden">
            <img
              className="absolute w-[1728px] h-[1802px] top-[-1510px] left-[94px]"
              alt="Group"
              src="/group-4.png"
            />
          </div>
        </div>
      </div>

      {/* Section heading */}
      <div className="flex flex-col max-w-[1390px] w-[1390px] items-center gap-[18px]">
        <h2 className="mt-[-1px] font-['Outfit',Helvetica] font-semibold text-[#181c31] text-[45px] text-center leading-[55px] whitespace-nowrap">
          Let&apos;s Stay Connected
        </h2>

        <div className="flex flex-col w-[639.39px] items-center">
          <p className="mt-[-1px] font-['Inter',Helvetica] font-normal text-[#79808a] text-base text-center leading-6">
            It is a long established fact that a reader will be distracted by
            the readable content
            <br />
            of a page when looking at its layout. The point of using.
          </p>
        </div>
      </div>

      {/* Contact cards container */}
      <div className="flex flex-col max-w-screen-xl w-[1280px] px-9">
        <div className="flex items-start justify-between w-full">
          {/* Contact information card */}
          <Card className="relative w-[390.5px] z-[1] bg-white rounded-lg overflow-hidden shadow-[0px_8px_70px_#0000000d]">
            <CardContent className="p-[50px] flex flex-col gap-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-1.5 w-full"
                >
                  <h3 className="font-['Outfit',Helvetica] font-normal text-[#181c31] text-[22px] leading-[26px]">
                    {item.title}
                  </h3>
                  <p className="font-['Inter',Helvetica] font-normal text-[#79808a] text-base leading-6">
                    {item.value}
                  </p>
                </div>
              ))}

              <Separator className="bg-[#d8e1ed]" />

              <div className="flex flex-col items-start gap-[30px] w-full">
                <h3 className="font-['Outfit',Helvetica] font-normal text-[#181c31] text-[22px] leading-[26px]">
                  Social Media
                </h3>

                <div className="flex items-center gap-4 w-full">
                  {socialIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="inline-flex flex-col items-start"
                    >
                      <div className="flex w-10 h-10 items-center justify-center rounded-full">
                        <img
                          className={`w-[${icon.width}] h-[${icon.height}]`}
                          alt={icon.alt}
                          src={icon.src}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements inside card */}
              <div className="absolute top-5 left-[340px]">
                <div className="w-[30px] h-[16.23px] flex items-center justify-center overflow-hidden">
                  <img
                    className="w-[30px] h-[16.24px]"
                    alt="Shape svg"
                    src="/shape-03-svg.svg"
                  />
                </div>
              </div>

              <div className="absolute top-[572px] left-[346px] rotate-180">
                <div className="w-6 h-12 flex items-center justify-center">
                  <img
                    className="w-6 h-12 -rotate-180"
                    alt="Shape svg"
                    src="/shape-06-svg.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact form card */}
          <Card className="w-[777.5px] z-0 bg-white rounded-lg shadow-[0px_8px_70px_#0000000d]">
            <CardContent className="p-14">
              <div className="relative w-full h-[480px]">
                {/* Form fields */}
                {formFields.map((field, index) => (
                  <div
                    key={index}
                    className={`absolute w-[313px] h-[94px] flex flex-col items-start gap-4 ${field.gridArea}`}
                  >
                    <label className="font-['Inter',Helvetica] font-normal text-[#79808a] text-base leading-6 w-full">
                      {field.label}
                    </label>
                    <Input
                      className="px-[25px] py-[17px] bg-[#ffffff01] rounded-lg border border-solid border-[#d8e1ed] shadow-[0px_6px_30px_#00000008] font-['Inter',Helvetica] text-[#797f8980] text-base"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                {/* Message textarea */}
                <div className="absolute w-[666px] h-[232px] top-[248px] left-0 flex flex-col">
                  <div className="flex flex-col h-48 items-start gap-4 w-full">
                    <label className="font-['Inter',Helvetica] font-normal text-[#79808a] text-base leading-6 w-full">
                      Message
                    </label>
                    <Textarea
                      className="pt-[25px] pb-[97px] px-[25px] bg-[#ffffff01] rounded-lg border border-solid border-[#d8e1ed] shadow-[0px_6px_30px_#00000008] font-['Inter',Helvetica] text-[#797f8980] text-base h-full"
                      placeholder="Message"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-center w-full mt-4">
                <Button className="px-[30px] py-3 bg-[#4e6bff] rounded-full font-['Inter',Helvetica] font-normal text-white text-base">
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
