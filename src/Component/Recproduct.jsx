import React, { useState } from "react";
import { AiOutlineEye, AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { BsLightning } from "react-icons/bs";
import useFetch from "./useFetch";
import ProductRating from "./ProductRating";
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

const Recproduct = ({ startNumber, endNumber }) => {
  const { data = [], loading, error } = useFetch("https://dummyjson.com/products");
  const { data: data2 = [], loading: loading2, error: error2 } = useFetch("https://fakestoreapi.com/products");
  
  const [wishlistedItems, setWishlistedItems] = useState(new Set());

  const convertToRupees = (dollars) => (dollars * 74.35).toFixed(0);
  const getOriginalPrice = (price, discount) => ((price * 100) / (100 - discount)).toFixed(0);

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

  // Show skeleton loading while fetching
  if (loading || loading2) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {Array(8)
            .fill()
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      </div>
    );
  }

  // Show error message if API fails
  if (error || error2) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-xl mb-4">⚠️ Error loading products</div>
        <p className="text-gray-600">Please try again later.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {data.slice(startNumber, endNumber).map((dataItem) => {
          const discountedPrice = convertToRupees(dataItem.price);
          const originalPrice = getOriginalPrice(dataItem.price, dataItem.discountPercentage);
          const isWishlisted = wishlistedItems.has(dataItem.id);

          return (
            <Link 
              to={`/product/${dataItem.id}`} 
              key={dataItem.id} 
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200 group-hover:-translate-y-2">
                
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
                    {dataItem.stock < 10 && dataItem.stock > 0 && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        <BsLightning className="text-sm" />
                        Low Stock
                      </div>
                    )}
                  </div>

                  {/* Action Icons */}
                  <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={(e) => toggleWishlist(dataItem.id, e)}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:bg-white"
                    >
                      {isWishlisted ? (
                        <AiFillHeart className="text-red-500 text-lg" />
                      ) : (
                        <AiOutlineHeart className="text-gray-600 text-lg hover:text-red-500" />
                      )}
                    </button>
                    
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:bg-white">
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
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Quick Add to Cart - appears on hover */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                      <AiOutlineShoppingCart className="text-lg" />
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4 lg:p-6 space-y-3">
                  {/* Brand & Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {dataItem.brand || dataItem.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <ProductRating rating={dataItem.rating} size="small" />
                      <span className="text-xs text-gray-500">({dataItem.rating})</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
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
                    
                    {/* Stock Status */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        dataItem.stock > 10 
                          ? 'text-green-700 bg-green-50' 
                          : dataItem.stock > 0
                          ? 'text-orange-700 bg-orange-50'
                          : 'text-red-700 bg-red-50'
                      }`}>
                        {dataItem.stock > 10 ? 'In Stock' : 
                         dataItem.stock > 0 ? `Only ${dataItem.stock} left` : 'Out of Stock'}
                      </span>
                      
                      {dataItem.discountPercentage > 0 && (
                        <span className="text-xs text-green-600 font-semibold">
                          Save ₹{(originalPrice - discountedPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 pointer-events-none"></div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* No Products Message */}
      {data.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🛍️</div>
          <p className="text-gray-600 text-lg">No products found</p>
        </div>
      )}
    </div>
  );
};

export default Recproduct;
