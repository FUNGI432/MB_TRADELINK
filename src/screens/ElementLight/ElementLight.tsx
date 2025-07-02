import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { LatestProjectsSection } from "./sections/LatestProjectsSection";
import { MainContentSection } from "./sections/MainContentSection";
import { PricingSection } from "./sections/PricingSection";
import { StatsSection } from "./sections/StatsSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { GallerySection } from "./sections/GallerySection";

export const ElementLight = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start relative bg-white">
      <HeaderSection />
      <HeroSection />
      <StatsSection />
      <AboutUsSection />
      <FeaturesSection />
      <MainContentSection />
      <LatestProjectsSection />
      <GallerySection />
      <TestimonialsSection />
      <CallToActionSection />
      <PricingSection />
      <TeamSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />

      {/* Fixed header */}
      <header className="flex flex-col w-full items-center fixed top-0 left-0 bg-white shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] z-50">
        <div className="flex flex-col max-w-[1390px] w-full items-start relative">
          <div className="relative w-full h-[66px] flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-start">
              <div className="flex max-w-[180px] items-start relative w-full">
                <div className="flex max-w-[130px] w-[130px] items-start relative">
                  <div className="flex w-[130px] h-11 items-center justify-center relative">
                    <img
                      className="relative w-[130px] h-11"
                      alt="Logo svg"
                      src="/logo-svg-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="flex">
                <NavigationMenuItem className="h-[66px]">
                  <div className="inline-flex items-center justify-center px-0 py-7">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#79808a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      Home
                    </div>
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="h-[66px]">
                  <div className="inline-flex items-center justify-center px-0 py-7">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#79808a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      About
                    </div>
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="h-[66px]">
                  <div className="inline-flex items-center justify-center px-0 py-7">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#79808a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      Features
                    </div>
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="h-[66px]">
                  <div className="inline-flex items-center justify-center px-0 py-7">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#79808a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      Pricing
                    </div>
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="h-[66px]">
                  <div className="inline-flex items-center px-0 py-7">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#79808a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      Pages
                    </div>
                    <div className="inline-flex flex-col items-start pl-3 pr-0 py-0 relative">
                      <ChevronDownIcon className="w-3 h-3" />
                    </div>
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="h-[66px]">
                  <div className="inline-flex items-center justify-center px-0 py-7">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#79808a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      Support
                    </div>
                  </div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side actions */}
            <div className="flex items-center justify-end">
              <div className="flex w-[54px] h-[38px] items-start pl-0 pr-4 py-0 relative">
                <div className="flex w-[38px] h-[38px] items-center justify-center relative bg-white rounded-[33554400px]">
                  <div className="relative w-5 h-5">
                    <img
                      className="absolute w-[19px] h-[19px] top-0 left-0"
                      alt="Clip path group"
                      src="/clip-path-group-29.png"
                    />
                  </div>
                </div>
              </div>

              <div className="inline-flex pl-0 pr-4 py-0 relative flex-col items-start">
                <div className="inline-flex flex-col items-center justify-center relative">
                  <div className="flex w-[27px] items-start relative">
                    <div className="relative w-[27px] h-[27px]">
                      <img
                        className="absolute w-[26px] h-[26px] top-0 left-0"
                        alt="Clip path group"
                        src="/clip-path-group-30.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex pl-0 pr-4 py-0 relative flex-col items-start">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#79808a] text-base tracking-[0] leading-6 whitespace-nowrap">
                  Sign In
                </div>
              </div>

              <Button className="inline-flex items-center justify-center px-[30px] py-3 bg-[#4e6bff] rounded-[33554400px] text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Scroll to top button */}
      <Button className="flex w-10 h-10 items-center justify-center fixed bottom-8 right-8 bg-[#4e6bff] rounded p-0">
        <ChevronUpIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};
