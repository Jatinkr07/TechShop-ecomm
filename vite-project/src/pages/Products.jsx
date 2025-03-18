import React, { useState, useMemo } from "react";
import { ProductCard } from "../components/ProductCard";
import { Filters } from "../components/Filters";
import { products } from "../data/products";

import { Search } from "lucide-react";

export const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: 0,
    maxPrice: 1000,
    sortBy: "price-asc",
  });

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          filters.category === "All" || product.category === filters.category;
        const matchesPrice =
          product.price >= filters.minPrice &&
          (filters.maxPrice === 0 || product.price <= filters.maxPrice);

        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          case "reviews":
            return b.reviews - a.reviews;
          default:
            return 0;
        }
      });
  }, [searchQuery, filters]);

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Filters Sidebar */}
        <div className="flex-shrink-0 w-full md:w-64">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-gray-600">
            Showing {filteredProducts.length} results
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-500">
                No products found matching your criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
