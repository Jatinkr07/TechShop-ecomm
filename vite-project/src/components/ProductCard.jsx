import { useState } from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Star, Heart } from "lucide-react";

export const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-48"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute p-2 bg-white rounded-full shadow-md top-2 right-2 hover:bg-gray-100"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </span>
            <span
              className={`text-sm ${
                product.stock > 20
                  ? "text-green-600"
                  : product.stock > 0
                  ? "text-orange-600"
                  : "text-red-600"
              }`}
            >
              {product.stock > 20
                ? "In Stock"
                : product.stock > 0
                ? `Only ${product.stock} left`
                : "Out of Stock"}
            </span>
          </div>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            disabled={product.stock === 0}
            className={`w-full bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors ${
              product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
