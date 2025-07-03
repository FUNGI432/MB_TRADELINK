import React from "react";
import { Lens } from "../../../../components/magicui/lens";

export const GallerySection = (): JSX.Element => {
  // Gallery items with actual content
  const galleryItems = [
    {
      title: "Kolkata Textile Expo 2023",
      date: "March 2023",
      image: "/saree_products/1.png",
      description: "Connected Kolkata-based mill to 80+ retailers across India in 3 months.",
      category: "Events"
    },
    {
      title: "Pan-India B2B Meet",
      date: "July 2023",
      image: "/saree_products/2.png",
      description: "Facilitated 120+ new trade partnerships for manufacturers and buyers.",
      category: "Networking"
    },
    {
      title: "Case Study: Growth Story",
      date: "2022",
      image: "/saree_products/3.png",
      description: "Enabled a West Bengal-based manufacturer to expand into 5 new states.",
      category: "Success"
    },
    {
      title: "Premium Saree Collection",
      date: "2024",
      image: "/saree_products/4.png",
      description: "Exclusive handcrafted sarees showcasing traditional Indian craftsmanship.",
      category: "Products"
    },
    {
      title: "Designer Collection Launch",
      date: "2024",
      image: "/saree_products/5.png",
      description: "Launch of our latest designer saree collection with modern aesthetics.",
      category: "Launch"
    },
    {
      title: "Artisan Workshop",
      date: "2023",
      image: "/saree_products/6.png",
      description: "Supporting local artisans and preserving traditional weaving techniques.",
      category: "Workshop"
    }
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
            Gallery & Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our journey through events, partnerships, and the beautiful products that connect India's textile industry.
          </p>
        </div>

        {/* Gallery Grid with Lens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Image with Lens */}
              <div className="relative h-64 overflow-hidden">
                <Lens zoomFactor={1.5} lensSize={150}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Lens>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <span className="text-sm text-gray-500 mb-3 block">{item.date}</span>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 