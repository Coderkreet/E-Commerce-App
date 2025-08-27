import React, { useState, useEffect, useRef } from "react";
import { AiOutlineEye, AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { MdLocalOffer, MdTrendingUp } from "react-icons/md";
import { BsLightning, BsStar, BsStarFill } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFetch from "../useFetch";
import ProductRating from "../ProductRating";
import { Link } from "react-router-dom";
import SkeletonCard from "../SkeletonCard";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const { data = [], loading, error } = useFetch("https://dummyjson.com/products");
  const [wishlistedItems, setWishlistedItems] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('all');
  const cardsRef = useRef(null);

  const convertToRupees = (dollars) => (dollars * 74.35).toFixed(0);
  const getOriginalPrice = (price, discount = 0) => (discount > 0 ? ((price * 100) / (100 - discount)).toFixed(0) : price.toFixed(0));

  // GSAP Animation
  useEffect(() => {
    if (cardsRef.current && data && data.length > 0) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [data]);

  const toggleWishlist = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    const newWishlisted = new Set(wishlistedItems);
    if (newWishlisted.has(id)) {
      newWishlisted.delete(id);
    } else {
      newWishlisted.add(id);
    }
    setWishlistedItems(newWishlisted);
  };

  // Fixed filtering with proper null checks
  const filteredProducts = Array.isArray(data?.products || data)
    ? (data?.products || data).filter(product => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'discounted') return product.discountPercentage > 15;
      if (activeFilter === 'popular') return product.rating > 4.0;
      if (activeFilter === 'low-stock') return product.stock < 20;
      return true;
    })
    : [];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {Array(12).fill().map((_, i) => (<SkeletonCard key={i} />))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-2xl mb-4">⚠️ Error loading products</div>
        <p className="text-gray-600 mb-6">Something went wrong. Please try again later.</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  const productsData = data?.products || data || [];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Products</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our amazing collection of premium products at unbeatable prices
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          { key: 'all', label: 'All Products', icon: '🛍️' },
          { key: 'discounted', label: 'Best Deals', icon: '🏷️' },
          { key: 'popular', label: 'Popular', icon: '⭐' },
          { key: 'low-stock', label: 'Limited', icon: '⚡' }
        ].map(filter => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeFilter === filter.key
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            <span>{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>

      {/* Products Count */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Showing <span className="font-bold text-blue-600">{filteredProducts.length}</span> products
        </p>
      </div>

      {/* Products Grid */}
      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {filteredProducts.map((dataItem) => {
          const discountedPrice = convertToRupees(dataItem.price);
          const originalPrice = getOriginalPrice(dataItem.price, dataItem.discountPercentage);
          const isWishlisted = wishlistedItems.has(dataItem.id);

          return (
            <Link 
              to={`/product/${dataItem.id}`}
              key={dataItem.id} 
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200 group-hover:-translate-y-3 relative">
                
                {/* Product Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    {dataItem.discountPercentage > 0 && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        <MdLocalOffer className="text-sm" />
                        {Math.round(dataItem.discountPercentage)}% OFF
                      </div>
                    )}
                    
                    {dataItem.stock < 20 && dataItem.stock > 0 && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        <BsLightning className="text-sm" />
                        Limited
                      </div>
                    )}

                    {dataItem.rating > 4.5 && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        <MdTrendingUp className="text-sm" />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Action Icons */}
                  <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <button
                      onClick={(e) => toggleWishlist(dataItem.id, e)}
                      className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:bg-white"
                    >
                      {isWishlisted ? (
                        <AiFillHeart className="text-red-500 text-lg" />
                      ) : (
                        <AiOutlineHeart className="text-gray-600 text-lg hover:text-red-500" />
                      )}
                    </button>
                    
                    <button className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:bg-white">
                      <AiOutlineEye className="text-gray-600 text-lg hover:text-blue-500" />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="h-48 lg:h-56 flex items-center justify-center p-4 relative overflow-hidden">
                    <img 
                      src={dataItem.thumbnail} 
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                      alt={dataItem.title}
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Add to cart logic here
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <AiOutlineShoppingCart className="text-lg" />
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4 lg:p-6 space-y-3">
                  {/* Brand & Rating */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {dataItem.brand || dataItem.category || 'Brand'}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        i < Math.floor(dataItem.rating) ? 
                          <BsStarFill key={i} className="text-yellow-400 text-xs" /> :
                          <BsStar key={i} className="text-gray-300 text-xs" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({dataItem.rating})</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base leading-snug group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {dataItem.title}
                  </h3>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg lg:text-xl font-bold text-gray-900">
                        ₹{discountedPrice}
                      </span>
                      {dataItem.discountPercentage > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {/* Stock & Savings */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        dataItem.stock > 30 
                          ? 'text-green-700 bg-green-50' 
                          : dataItem.stock > 10
                          ? 'text-orange-700 bg-orange-50'
                          : 'text-red-700 bg-red-50'
                      }`}>
                        {dataItem.stock > 30 ? 'In Stock' : 
                         dataItem.stock > 10 ? 'Limited Stock' : 
                         `Only ${dataItem.stock} left`}
                      </span>
                      
                      {dataItem.discountPercentage > 0 && (
                        <span className="text-xs text-green-600 font-semibold">
                          Save ₹{(originalPrice - discountedPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/10 transform -skew-x-12 transition-all duration-700 pointer-events-none"></div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-300 text-8xl mb-6">🛍️</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your filters or check back later</p>
          <button 
            onClick={() => setActiveFilter('all')}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Show All Products
          </button>
        </div>
      )}

      {/* Stats Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{productsData.length}</div>
            <div className="text-gray-600">Total Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {productsData.filter(p => p.discountPercentage > 15).length}
            </div>
            <div className="text-gray-600">Hot Deals</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {productsData.filter(p => p.rating > 4.0).length}
            </div>
            <div className="text-gray-600">Top Rated</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
