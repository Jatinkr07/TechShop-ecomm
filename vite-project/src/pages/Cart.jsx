import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  if (state.items.length === 0) {
    return (
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Your cart is empty
          </h2>
          <p className="mb-8 text-gray-600">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
          >
            Start Shopping
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Shopping Cart ({state.items.length} items)
      </h2>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cart Items */}
        <div className="flex-grow">
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center p-6 border-b border-gray-200 sm:flex-row"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-24 h-24 rounded"
                />
                <div className="flex-1 mt-4 sm:ml-6 sm:mt-0">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.stock > 20 ? "In Stock" : `Only ${item.stock} left`}
                  </p>
                </div>
                <div className="flex flex-col items-center mt-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 sm:mt-0">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                      disabled={item.quantity >= item.stock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Order Summary
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${(state.total * 0.1).toFixed(2)}</span>
              </div>
              <div className="pt-3 mt-3 border-t">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-indigo-600">
                    ${(state.total * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full px-4 py-3 mt-6 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Proceed to Checkout
            </button>

            <div className="mt-4 text-center">
              <Link
                to="/products"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
