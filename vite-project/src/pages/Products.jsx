import React, { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Filters } from "../components/Filters";
import { products } from "../data/products";
import { Search } from "lucide-react";

export const Products = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: 0,
    maxPrice: 1000,
  });

  const getFilteredProducts = () => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filters.category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        <div className="flex-1">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2 pl-10 pr-4 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="mb-4">Found {filteredProducts.length} products</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p>No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
