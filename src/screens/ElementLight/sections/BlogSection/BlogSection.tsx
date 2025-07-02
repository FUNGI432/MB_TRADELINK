import React from "react";
import { Button } from "../../../../components/ui/button";

export const BlogSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-[#4e6bff] relative">
      {/* Background image container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <img
            className="w-auto h-auto max-w-none"
            alt="Background pattern"
            src="/group-5.png"
          />
        </div>
      </div>

      {/* Content container */}
      <div className="max-w-screen-xl mx-auto px-5 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-semibold text-white text-[45px] leading-[55px] font-['Outfit',Helvetica]">
              Join with 5000+ Startups
              <br />
              Growing with Base.
            </h2>
            <p className="text-white text-base leading-6 font-['Inter',Helvetica]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
              nibh lorem.
              <br />
              Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.
            </p>
          </div>

          <Button
            variant="default"
            className="bg-white text-[#181c31] hover:bg-white/90 font-medium text-base px-[30px] py-3 rounded-full font-['Inter',Helvetica]"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};
