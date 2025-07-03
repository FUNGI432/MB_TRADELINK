import React from "react";
import { Lens } from "../../../../components/magicui/lens";

export const GallerySection = (): JSX.Element => {
  const galleryItems = [
    {
      id: 1,
      src: "/saree_products/1.png",
      alt: "Traditional Saree Collection",
      category: "Traditional Wear"
    },
    {
      id: 2,
      src: "/saree_products/2.png",
      alt: "Designer Saree Collection",
      category: "Designer Wear"
    },
    {
      id: 3,
      src: "/saree_products/3.png",
      alt: "Bridal Saree Collection",
      category: "Bridal Collection"
    },
    {
      id: 4,
      src: "/saree_products/4.png",
      alt: "Casual Saree Collection",
      category: "Casual Wear"
    },
    {
      id: 5,
      src: "/saree_products/5.png",
      alt: "Party Wear Saree",
      category: "Party Wear"
    },
    {
      id: 6,
      src: "/saree_products/6.png",
      alt: "Silk Saree Collection",
      category: "Silk Collection"
    },
    {
      id: 7,
      src: "/saree_products/7.png",
      alt: "Cotton Saree Collection",
      category: "Cotton Collection"
    },
    {
      id: 8,
      src: "/saree_products/8.png",
      alt: "Georgette Saree Collection",
      category: "Georgette Collection"
    },
    {
      id: 9,
      src: "/saree_products/9.png",
      alt: "Chiffon Saree Collection",
      category: "Chiffon Collection"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <div className="w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Product Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Explore our diverse collection of high-quality textile products from trusted manufacturers across India.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Lens zoomFactor={1.5} lensSize={150}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </Lens>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                    {item.alt}
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Want to see more of our exclusive collections?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}; 