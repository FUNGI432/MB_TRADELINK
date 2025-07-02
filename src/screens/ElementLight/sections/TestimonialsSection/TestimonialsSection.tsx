import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";

export const TestimonialsSection = (): JSX.Element => {
  // Pricing plan data
  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      buttonColor: "bg-[#f36a8d]",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
      ],
    },
    {
      title: "Growth Plan",
      price: "$59",
      buttonColor: "bg-[#4e6bff]",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
      ],
    },
    {
      title: "Business",
      price: "$139",
      buttonColor: "bg-[#f36a8d]",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
      ],
    },
  ];

  // Decorative shapes data
  const decorativeShapes = [
    {
      src: "/shape-06-svg-1.svg",
      alt: "Shape svg",
      className: "w-[43px] h-[86px]",
      wrapperClassName: "top-[118px] left-48",
    },
    {
      src: "/shape-03-svg.svg",
      alt: "Shape svg",
      className: "w-[85px] h-[46px]",
      wrapperClassName: "top-[312px] left-[1451px]",
    },
    {
      src: "/shape-07-svg.svg",
      alt: "Shape svg",
      className: "w-[100px] h-[50px]",
      wrapperClassName: "top-[892px] left-[1724px]",
    },
  ];

  // Background images data
  const backgroundImages = [
    {
      src: "/group.png",
      alt: "Group",
      className: "w-[2339px] h-[1852px] top-[640px] left-[-1778px]",
      wrapperClassName: "top-0 left-0",
      wrapperWidth: "w-[927px]",
    },
    {
      src: "/group-1.png",
      alt: "Group",
      className: "w-[1728px] h-[1802px] top-[-1510px] left-[94px]",
      wrapperClassName: "top-[70px] left-[893px]",
      wrapperWidth: "w-[1027px]",
    },
  ];

  return (
    <section className="relative w-full bg-[#f4f7fa] py-24">
      <div className="relative mx-auto max-w-[1390px]">
        {/* Decorative shapes */}
        {decorativeShapes.map((shape, index) => (
          <div
            key={`shape-${index}`}
            className={`absolute ${shape.wrapperClassName}`}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                className={`relative ${shape.className}`}
                alt={shape.alt}
                src={shape.src}
              />
            </div>
          </div>
        ))}

        {/* Background images */}
        {backgroundImages.map((image, index) => (
          <div
            key={`bg-${index}`}
            className={`absolute ${image.wrapperClassName} ${image.wrapperWidth}`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                className={`absolute ${image.className}`}
                alt={image.alt}
                src={image.src}
              />
            </div>
          </div>
        ))}

        {/* Section header */}
        <div className="flex flex-col items-center gap-[18px] mb-16">
          <h2 className="font-['Outfit',Helvetica] font-semibold text-[#181c31] text-[45px] leading-[55px] text-center">
            Great Affordable Pricing Plans
          </h2>
          <div className="max-w-[640px]">
            <p className="font-['Inter',Helvetica] font-normal text-[#79808a] text-base text-center leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content
              <br />
              of a page when looking at its layout. The point of using.
            </p>
          </div>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className="font-['Inter',Helvetica] font-medium text-[#181c31] text-base leading-6 mr-4">
            Bill Monthly
          </span>
          <Switch className="bg-[#4e6bff]" />
          <span className="font-['Inter',Helvetica] font-medium text-[#181c31] text-base leading-6 ml-4">
            Bill Annually
          </span>
        </div>

        {/* Pricing cards */}
        <div className="flex justify-center gap-10">
          {pricingPlans.map((plan, index) => (
            <Card
              key={`plan-${index}`}
              className="w-[380px] bg-white rounded-lg shadow-[0px_8px_70px_#0000000d]"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-center px-[30px] pt-11">
                  <h3 className="font-['Outfit',Helvetica] font-normal text-[#181c31] text-[22px] leading-[26px] text-center">
                    {plan.title}
                  </h3>

                  <div className="flex items-center justify-center gap-1.5 mt-[38px]">
                    <span className="font-['Outfit',Helvetica] font-semibold text-[#181c31] text-[40px] leading-[42px]">
                      {plan.price}
                    </span>
                    <span className="font-['Inter',Helvetica] font-normal text-[#181c31] text-sm leading-5">
                      /per month
                    </span>
                  </div>

                  <p className="font-['Inter',Helvetica] font-normal text-[#79808a] text-base leading-6 mt-2">
                    No credit card required
                  </p>

                  <Button
                    className={`${plan.buttonColor} text-white rounded-full mt-[30px] px-[52px] py-2.5 font-['Inter',Helvetica] font-medium text-base`}
                  >
                    Try for free
                  </Button>

                  <div className="flex flex-col items-center gap-3 mt-[42px] w-full">
                    {plan.features.map((feature, featureIndex) => (
                      <p
                        key={`feature-${index}-${featureIndex}`}
                        className="font-['Inter',Helvetica] font-normal text-[#79808a] text-base text-center leading-6 w-full"
                      >
                        {feature}
                      </p>
                    ))}
                  </div>

                  <p className="font-['Inter',Helvetica] font-normal text-[#181c31] text-base text-center leading-6 mt-[42px] mb-11">
                    7-day free trial
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
