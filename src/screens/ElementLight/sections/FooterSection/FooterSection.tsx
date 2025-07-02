import { SendIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    { url: "/clip-path-group-24.png", alt: "Social media icon" },
    { url: "/clip-path-group-25.png", alt: "Social media icon" },
    { url: "/clip-path-group-26.png", alt: "Social media icon" },
    { url: "/clip-path-group-27.png", alt: "Social media icon" },
  ];

  // Quick links data
  const quickLinks = [
    { name: "Home", badge: null },
    { name: "Product", badge: null },
    { name: "Hiring", badge: "Hiring" },
    { name: "Pricing", badge: null },
  ];

  // Services data
  const services = [
    "Web Development",
    "Graphics Design",
    "Digital Marketing",
    "Ui/Ux Design",
  ];

  // Support links data
  const supportLinks = ["Company", "Press media", "Our Blog", "Contact Us"];

  // Footer bottom links
  const bottomLinks = ["English", "Privacy Policy", "Support"];

  return (
    <footer className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-transparent">
      <div className="flex flex-col max-w-[1390px] w-full items-start gap-[100px] pt-[100px] pb-0 px-0 relative flex-[0_0_auto]">
        <div className="flex flex-wrap min-h-[212px] items-start justify-between gap-[0px_69.5px] relative self-stretch w-full flex-[0_0_auto]">
          {/* Logo and company info section */}
          <div className="flex flex-col w-[347.5px] items-start gap-5 relative self-stretch">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col max-w-[347.5px] w-[130px] items-start relative">
                <div className="flex flex-col w-[130px] h-11 items-center justify-center relative">
                  <img
                    className="relative w-[130px] h-11"
                    alt="Logo svg"
                    src="/logo-svg.svg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <p className="self-stretch text-[#79808a] text-base leading-6 relative mt-[-1.00px] font-normal tracking-[0]">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit.
              </p>
            </div>

            <div className="flex items-center gap-5 pt-5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              {socialIcons.map((icon, index) => (
                <div
                  key={`social-icon-${index}`}
                  className="inline-flex flex-col items-start relative flex-[0_0_auto]"
                >
                  <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className={`relative w-6 h-6 bg-[url(${icon.url})] bg-[100%_100%]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full md:w-[973px] items-start justify-between pl-0 pr-[0.02px] py-0 relative self-stretch">
            {/* Quick Links section */}
            <div className="inline-flex flex-col items-start gap-9 relative self-stretch flex-[0_0_auto]">
              <div className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col">
                <h3 className="relative w-fit mt-[-1.00px] font-normal text-[#181c31] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                  Quick Links
                </h3>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-36.00px]">
                {quickLinks.map((link, index) => (
                  <div
                    key={`quick-link-${index}`}
                    className="flex flex-col items-start pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    {link.badge ? (
                      <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-normal text-[#79808a] text-base tracking-[0] leading-6 whitespace-nowrap">
                          {link.name}
                        </div>
                        <Badge className="bg-[#20ca66] text-white text-xs font-medium">
                          {link.badge}
                        </Badge>
                      </div>
                    ) : (
                      <div className="relative self-stretch mt-[-1.00px] font-normal text-[#79808a] text-base tracking-[0] leading-6">
                        {link.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Services section */}
            <div className="inline-flex flex-col min-w-[138.45px] items-start gap-9 relative self-stretch flex-[0_0_auto]">
              <div className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col">
                <h3 className="relative w-fit mt-[-1.00px] font-normal text-[#181c31] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                  Services
                </h3>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-36.00px]">
                {services.map((service, index) => (
                  <div
                    key={`service-${index}`}
                    className="flex flex-col items-start pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="relative self-stretch mt-[-1.00px] font-normal text-[#79808a] text-base tracking-[0] leading-6">
                      {service}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support section */}
            <div className="inline-flex flex-col items-start gap-9 relative self-stretch flex-[0_0_auto]">
              <div className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col">
                <h3 className="relative w-fit mt-[-1.00px] font-normal text-[#181c31] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                  Support
                </h3>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-60.00px]">
                {supportLinks.map((link, index) => (
                  <div
                    key={`support-link-${index}`}
                    className="flex flex-col items-start pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="relative self-stretch mt-[-1.00px] font-normal text-[#79808a] text-base tracking-[0] leading-6">
                      {link}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter section */}
            <div className="relative self-stretch w-[310px]">
              <div className="w-[310px] items-start absolute top-0 left-0 flex flex-col">
                <h3 className="relative w-fit mt-[-1.00px] font-normal text-[#181c31] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                  Newsletter
                </h3>
              </div>

              <div className="flex flex-col w-[279px] items-start absolute top-[68px] left-0">
                <p className="relative w-fit mt-[-1.00px] font-normal text-[#79808a] text-base tracking-[0] leading-6 whitespace-nowrap">
                  Subscribe to receive future updates
                </p>
              </div>

              <div className="flex flex-col w-[310px] items-start absolute top-[108px] left-0">
                <div className="relative w-full">
                  <Input
                    className="pl-[25px] pr-[51px] py-[15px] bg-[#ffffff01] rounded-[33554400px] border border-solid border-[#d8e1ed] shadow-[0px_8px_70px_#0000000d] text-[#797f8980] text-base"
                    placeholder="Email address"
                  />
                  <div className="inline-flex flex-col items-start p-4 absolute top-0 right-0">
                    <SendIcon className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[0px_20px] pt-[31px] pb-[30px] px-0 relative self-stretch w-full flex-[0_0_auto]">
          <Separator className="absolute top-0 left-0 right-0 bg-[#d8e1ed]" />

          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
              {bottomLinks.map((link, index) => (
                <div
                  key={`bottom-link-${index}`}
                  className="inline-flex flex-col items-start relative flex-[0_0_auto]"
                >
                  <div className="relative w-fit mt-[-1.00px] font-normal text-[#79808a] text-base tracking-[0] leading-6 whitespace-nowrap">
                    {link}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-normal text-[#79808a] text-base tracking-[0] leading-6 whitespace-nowrap">
                © 2025 Base. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
