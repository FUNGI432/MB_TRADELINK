import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";

import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";

import { MainContentSection } from "./sections/MainContentSection";

import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { GallerySection } from "./sections/GallerySection";
import { SmoothCursor } from "../../components/ui/smooth-cursor";

export const ElementLight = (): JSX.Element => {
  const [navDark, setNavDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // 80vh is a good threshold for leaving the hero section
      setNavDark(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col w-full items-start relative bg-white">
      <SmoothCursor />
      <HeaderSection />
      <HeroSection />
      <AboutUsSection />
      <FeaturesSection />
      <MainContentSection />
      <GallerySection />
      <TestimonialsSection />
      <CallToActionSection />
      <FAQSection />
      <FooterSection />

      {/* Fixed header */}
      <header
        className={
          `flex flex-col w-full items-center fixed top-0 left-0 z-50 transition-colors duration-300 ` +
          `backdrop-blur-lg` // glassy effect
        }
        style={{ 
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 100%)", 
          WebkitBackdropFilter: "blur(16px)", 
          backdropFilter: "blur(16px)" 
        }}
      >
        <div className="flex flex-col max-w-[1390px] w-full items-start relative">
          <div className="relative w-full h-[66px] flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-start">
              <div className="flex max-w-[200px] items-start relative w-full">
                <div className="flex max-w-[160px] w-[160px] items-start relative">
                  <div className="flex w-[160px] h-16 items-center justify-center relative">
                    <img
                      className="relative w-[160px] h-16 object-contain transition-opacity duration-300"
                      alt="MB TradeLink Logo"
                      src={navDark ? "/BLACK LOGO.png" : "/WHITE LOGO.png"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="flex">
                {[
                  "Home",
                  "About",
                  "Features",
                  "Pages",
                  "Support",
                ].map((item, idx) => (
                  <NavigationMenuItem className="h-[66px]" key={item}>
                    <div className="inline-flex items-center justify-center px-0 py-7">
                      <div
                        className={
                          `[font-family:'Inter',Helvetica] font-normal text-base text-center tracking-[0] leading-6 whitespace-nowrap transition-colors duration-300 ` +
                          (navDark ? "text-black" : "text-white")
                        }
                      >
                        {item}
                      </div>
                    </div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side actions */}
            <div className="flex items-center justify-end">
              <Button className={`inline-flex items-center justify-center px-[30px] py-3 rounded-3xl transition-colors duration-300 ` + (navDark ? "bg-[#4e6bff] text-white" : "bg-white/20 text-white border border-white/30") }>
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
