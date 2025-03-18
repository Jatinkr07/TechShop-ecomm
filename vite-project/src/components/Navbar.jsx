/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Home,
  Package,
  Phone,
  Image,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/products", icon: Package, label: "Products" },
    { path: "/gallery", icon: Image, label: "Gallery" },
    { path: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Package className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">TechShop</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-indigo-600 rounded-full">
                  {itemCount}
                </span>
              )}
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-4 py-2 space-y-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center px-4 py-2 space-x-3 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}

            {/* Mobile Cart Icon */}
            <Link
              to="/cart"
              className="flex items-center px-4 py-2 space-x-3 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-indigo-600 rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
