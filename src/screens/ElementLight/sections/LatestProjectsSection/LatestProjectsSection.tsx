import React, { useState } from "react";

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

export const LatestProjectsSection = (): JSX.Element => {
  // Categories/industries
  const categories = [
    {
      name: "Sarees",
      icon: sareeImages[0],
      desc: "Premium saree manufacturers and suppliers.",
      images: sareeImages.slice(0, 6),
    },
    {
      name: "Dress Materials",
      icon: "https://via.placeholder.com/48?text=Dress",
      desc: "Wide range of dress materials for B2B buyers."
    },
    {
      name: "Kurtis",
      icon: "https://via.placeholder.com/48?text=Kurtis",
      desc: "Trendy kurtis for women, direct from manufacturers."
    },
    {
      name: "Men's Ethnic",
      icon: "https://via.placeholder.com/48?text=Men",
      desc: "Men's ethnic wear for all occasions."
    },
    {
      name: "Women's Western",
      icon: "https://via.placeholder.com/48?text=Western",
      desc: "Western wear for women, latest styles."
    },
    {
      name: "Fabrics",
      icon: "https://via.placeholder.com/48?text=Fabrics",
      desc: "Quality fabrics for every requirement."
    }
  ];
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? categories : categories.filter(c => c.name === filter);
  return (
    <section className="relative w-full py-20 bg-[#f9fafb] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Industries & Categories We Serve</h2>
      <div className="mb-6 flex gap-4 flex-wrap justify-center">
        <button
          className={`px-4 py-2 rounded-full border font-medium ${filter === "All" ? "bg-blue-700 text-white" : "bg-white text-blue-700 border-blue-700"}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full border font-medium ${filter === cat.name ? "bg-blue-700 text-white" : "bg-white text-blue-700 border-blue-700"}`}
            onClick={() => setFilter(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {filtered.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow p-6 w-full">
            <img src={cat.icon} alt={cat.name} className="mb-4 h-12 w-12 object-cover rounded" />
            <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
            <p className="text-gray-700 text-center mb-2">{cat.desc}</p>
            {Array.isArray(cat.images) && cat.images.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mt-4 w-full">
                {cat.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Saree product ${i+1}`}
                    className="rounded shadow object-cover w-full h-32"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
