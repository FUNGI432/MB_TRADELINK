import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Blog data for mapping
  const blogs = [
    {
      id: 1,
      image: "/blog.png",
      author: "Juhan Ahamed",
      date: "Aug 28 2024",
      title: "Lorem ipsum dolor sit amet,\nconsecutetur adipiscing",
      authorIcon: "/clip-path-group-18.png",
      dateIcon: "/clip-path-group-19.png",
    },
    {
      id: 2,
      image: "/blog-1.png",
      author: "Juhan Ahamed",
      date: "Aug 28 2024",
      title: "Lorem ipsum dolor sit amet,\nconsecutetur adipiscing…",
      authorIcon: "/clip-path-group-20.png",
      dateIcon: "/clip-path-group-21.png",
    },
    {
      id: 3,
      image: "/blog-2.png",
      author: "Juhan Ahamed",
      date: "Aug 28 2024",
      title: "Lorem ipsum dolor sit amet,\nconsecutetur adipiscing elit",
      authorIcon: "/clip-path-group-22.png",
      dateIcon: "/clip-path-group-23.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[70px] py-[120px] w-full">
      <div className="flex flex-col items-center gap-[18px] max-w-[1390px] z-[1]">
        <h2 className="font-semibold text-[45px] text-[#181c31] text-center leading-[55px] [font-family:'Outfit',Helvetica]">
          Latest Blogs &amp; News
        </h2>

        <div className="flex flex-col items-center max-w-[640px]">
          <p className="font-normal text-[#79808a] text-base text-center leading-6 [font-family:'Inter',Helvetica]">
            It is a long established fact that a reader will be distracted by
            the readable content
            <br />
            of a page when looking at its layout. The point of using.
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-screen-xl w-full items-start z-0">
        <div className="flex items-start justify-center gap-10 w-full">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="flex flex-col w-[400px] items-start rounded-lg overflow-hidden shadow-[0px_8px_70px_#0000000d] bg-[#ffffff01]"
            >
              <div className="flex flex-col items-start w-full z-[1] overflow-hidden">
                <div
                  className="w-full h-[260px] bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
              </div>

              <CardContent className="flex flex-col items-start gap-3 p-[30px] w-full">
                <div className="flex flex-wrap items-center gap-[0px_20px] w-full">
                  <div className="inline-flex flex-col items-start z-[1]">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-[18px] h-[18px] bg-[100%_100%]"
                        style={{ backgroundImage: `url(${blog.authorIcon})` }}
                      />
                      <div className="inline-flex flex-col items-start">
                        <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#79808a] text-base leading-6 whitespace-nowrap">
                          {blog.author}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 z-0">
                    <div
                      className="w-[18px] h-[18px] bg-[100%_100%]"
                      style={{ backgroundImage: `url(${blog.dateIcon})` }}
                    />
                    <div className="inline-flex flex-col items-start">
                      <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#79808a] text-base leading-6 whitespace-nowrap">
                        {blog.date}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[306px] items-start flex flex-col">
                  <h3 className="mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#181c31] text-2xl leading-8 whitespace-pre-line">
                    {blog.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
