import { categories } from "../data/products";

export const Filters = ({ filters, setFilters }) => {
  return (
    <div className="p-4 space-y-4 bg-white rounded-lg shadow-md">
      <div>
        <h3 className="mb-2 font-semibold text-gray-800">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() => setFilters((prev) => ({ ...prev, category }))}
                className="text-indigo-600 focus:ring-indigo-500 "
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-gray-800">Price Range</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                minPrice: Number(e.target.value),
              }))
            }
            placeholder="Min"
            className="w-24 px-2 py-1 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                maxPrice: Number(e.target.value),
              }))
            }
            placeholder="Max"
            className="w-24 px-2 py-1 border rounded"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-gray-800">Sort By</h3>
        <select
          value={filters.sortBy}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              sortBy: e.target.value["sortBy"],
            }))
          }
          className="w-full px-2 py-1 border rounded"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="reviews">Most Reviewed</option>
        </select>
      </div>
    </div>
  );
};
