import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Company updates data
  const companyUpdates = [
    {
      id: 1,
      image: "/saree_products/1.png",
      category: "Expansion",
      date: "Dec 15 2024",
      title: "MB TradeLink Expands to Kolkata",
      description: "We're excited to announce our new office in Kolkata, strengthening our presence in Eastern India and connecting more manufacturers with buyers.",
      readTime: "2 min read"
    },
    {
      id: 2,
      image: "/saree_products/2.png",
      category: "Partnership",
      date: "Dec 10 2024",
      title: "New Partnership with 50+ Manufacturers",
      description: "MB TradeLink has successfully onboarded 50+ new manufacturers from West Bengal, expanding our network and offering more variety to buyers.",
      readTime: "3 min read"
    },
    {
      id: 3,
      image: "/saree_products/3.png",
      category: "Achievement",
      date: "Dec 05 2024",
      title: "₹10 Crore+ Trade Volume Milestone",
      description: "We've achieved a significant milestone of facilitating ₹10 crore+ in trade volume, connecting hundreds of businesses across India successfully.",
      readTime: "2 min read"
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Company Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and developments at MB TradeLink as we continue to grow and serve India's textile industry.
          </p>
        </div>

        {/* Company Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companyUpdates.map((update) => (
            <Card
              key={update.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {update.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Date and Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 font-medium">
                    {update.date}
                  </span>
                  <span className="text-sm text-blue-600 font-medium">
                    {update.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {update.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {update.description}
                </p>

                {/* Read More Button */}
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center gap-2">
                  Read Full Update
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with MB TradeLink</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest company updates, industry insights, and exclusive opportunities directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 rounded-full text-gray-900 font-medium w-full max-w-md focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
