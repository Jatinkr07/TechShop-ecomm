import React from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <Package className="w-8 h-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">TechShop</span>
            </div>
            <p className="mb-4 text-gray-400">
              Your one-stop destination for premium tech products and
              accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>support@techshop.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-gray-800">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TechShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
