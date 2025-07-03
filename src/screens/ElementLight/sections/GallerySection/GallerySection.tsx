import React from "react";

const sareeImages = [
  "/saree_products/1.png",
  "/saree_products/2.png",
  "/saree_products/3.png",
  "/saree_products/4.png",
  "/saree_products/5.png",
  "/saree_products/6.png",
  "/saree_products/7.png",
  "/saree_products/8.png",
  "/saree_products/9.png",
];

export const GallerySection = (): JSX.Element => {
  // Placeholder gallery/case study data
  const galleryItems = [
    {
      title: "Kolkata Textile Expo 2023",
      date: "March 2023",
      image: "https://via.placeholder.com/400x250?text=Event+Photo",
      description:
        "Connected Kolkata-based mill to 80+ retailers across India in 3 months.",
    },
    {
      title: "Pan-India B2B Meet",
      date: "July 2023",
      image: "https://via.placeholder.com/400x250?text=Event+Photo",
      description:
        "Facilitated 120+ new trade partnerships for manufacturers and buyers.",
    },
    {
      title: "Case Study: Growth Story",
      date: "2022",
      image: "https://via.placeholder.com/400x250?text=Success+Story",
      description:
        "Enabled a West Bengal-based manufacturer to expand into 5 new states.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery & Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-12">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="bg-[#f9fafb] rounded-lg shadow p-4 flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <span className="text-sm text-gray-500 mb-2">{item.date}</span>
            <p className="text-gray-700 text-center">{item.description}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-semibold mb-6 text-center">Saree Product Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {sareeImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Saree product ${idx+1}`}
            className="rounded shadow object-cover w-full h-48"
          />
        ))}
      </div>
    </section>
  );
}; 