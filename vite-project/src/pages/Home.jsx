import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Truck,
  Shield,
  Clock,
  CreditCard,
} from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200"
            alt="Electronics collection"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Welcome to <span className="text-indigo-400">TechShop</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the latest in tech gadgets and accessories. Shop our
              curated collection of premium products.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <Truck className="h-10 w-10 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                <p className="text-gray-600">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <Shield className="h-10 w-10 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-gray-600">100% secure payment</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <Clock className="h-10 w-10 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                <p className="text-gray-600">Dedicated support</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <CreditCard className="h-10 w-10 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                <p className="text-gray-600">30 day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="mt-4 text-gray-600">
              Check out our most popular items
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-gray-600">
              Read testimonials from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Tech Enthusiast",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
                text: "Amazing products and excellent customer service. Will definitely shop here again!",
              },
              {
                name: "Jane Smith",
                role: "Professional Photographer",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
                text: "The quality of their products is outstanding. Fast shipping and great prices too!",
              },
              {
                name: "Mike Johnson",
                role: "Software Developer",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
                text: "Best tech store I've found online. Their support team is incredibly helpful.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-indigo-100 mb-8">
              Get the latest updates, deals, and exclusive offers directly in
              your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
