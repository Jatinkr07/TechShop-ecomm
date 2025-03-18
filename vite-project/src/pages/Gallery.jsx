import React, { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800",
    title: "Professional Setup",
    category: "Workstation",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    title: "Gaming Peripherals",
    category: "Gaming",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
    title: "Premium Headphones",
    category: "Audio",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800",
    title: "Laptop Collection",
    category: "Computers",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    title: "Wireless Headphones",
    category: "Audio",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
    title: "Mechanical Keyboard",
    category: "Peripherals",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
    title: "Gaming Mouse",
    category: "Gaming",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800",
    title: "RGB Setup",
    category: "Gaming",
  },
];

const categories = [
  "All",
  ...new Set(galleryImages.map((img) => img.category)),
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      {/* Header Section */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Our Gallery</h1>
          <p className="text-lg text-gray-600">
            Explore our collection of premium tech products and setups
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
            >
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                <div className="p-4 text-center text-white">
                  <h3 className="mb-2 text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-0 text-white -top-12 hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-75 rounded-b-lg">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-sm text-gray-300">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
