import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLogIn, BiUser } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const NavBar = ({ IsLogin, cart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  // Fetch products from APIs
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [dummyResponse, fakeStoreResponse] = await Promise.all([
          axios.get("https://dummyjson.com/products"),
          axios.get("https://fakestoreapi.com/products"),
        ]);

        setAllProducts([
          ...dummyResponse.data.products,
          ...fakeStoreResponse.data,
        ]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts([]);
      return;
    }

    const results = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(results);
    setSelectedIndex(-1);
  }, [searchQuery, allProducts]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (filteredProducts.length === 0) return;

    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      window.location.href = `/product/${filteredProducts[selectedIndex].id}`;
    }
  };

  // Hide search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredProducts([]);
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contect" }
  ];

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <HiOutlineSparkles className="text-white text-lg lg:text-xl" />
            </div>
            <h1 className="font-bold text-xl lg:text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Cartnevula
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="relative group py-2 px-3 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            {!IsLogin && (
              <Link
                to="/SignUp"
                className="relative group py-2 px-3 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                Sign Up
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </div>

          {/* Search Bar */}
          <div ref={searchRef} className="hidden lg:block relative">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <div className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-full border-2 transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg focus-within:shadow-blue-500/20">
                <input
                  type="text"
                  className="bg-transparent text-sm w-64 xl:w-80 h-10 px-4 focus:outline-none placeholder-gray-500"
                  placeholder="Search amazing products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsSearchFocused(true)}
                />
                <div className="p-2 mr-1">
                  <AiOutlineSearch className="text-gray-500 text-lg cursor-pointer hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Search Results Dropdown */}
            {searchQuery && (
              <div className="absolute top-14 left-0 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 max-h-96 overflow-y-auto backdrop-blur-lg">
                {filteredProducts.length > 0 ? (
                  <div className="p-2">
                    <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
                      {filteredProducts.length} results found
                    </div>
                    {filteredProducts.slice(0, 6).map((product, index) => (
                      <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedIndex === index 
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200" 
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <img 
                            src={product.thumbnail || product.image} 
                            alt={product.title} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
                          <p className="text-xs text-gray-500">
                            ${product.price?.toFixed(2) || 'N/A'}
                          </p>
                        </div>
                      </Link>
                    ))}
                    {filteredProducts.length > 6 && (
                      <div className="text-center py-2 border-t border-gray-100">
                        <Link 
                          to="/products" 
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View all {filteredProducts.length} results →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <div className="text-gray-400 text-4xl mb-2">🔍</div>
                    <p className="text-gray-500 text-sm">No products found</p>
                    <p className="text-gray-400 text-xs">Try searching for something else</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {IsLogin ? (
              <div className="flex items-center space-x-3">
                {/* Wishlist */}
                <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 relative group">
                  <AiOutlineHeart className="text-xl text-gray-600 group-hover:text-red-500 transition-colors" />
                </button>

                {/* Cart */}
                <Link to="/cart" className="relative group">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300">
                    <AiOutlineShoppingCart className="text-xl text-gray-600 group-hover:text-blue-600 transition-colors" />
                    {cart && cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-lg">
                        {cart.length > 99 ? '99+' : cart.length}
                      </span>
                    )}
                  </button>
                </Link>

                {/* Profile */}
                <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300">
                  <BiUser className="text-xl text-gray-600 hover:text-blue-600 transition-colors" />
                </button>
              </div>
            ) : (
              <Link to="/Login">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <BiLogIn className="text-lg" />
                  <span className="hidden sm:block">Log In</span>
                </button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="text-xl" />
              ) : (
                <AiOutlineMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
            <div className="p-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <div className="flex items-center bg-gray-50 rounded-full border-2 transition-all duration-300 focus-within:border-blue-500">
                  <input
                    type="text"
                    className="bg-transparent text-sm flex-1 h-10 px-4 focus:outline-none placeholder-gray-500"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <div className="p-2 mr-1">
                    <AiOutlineSearch className="text-gray-500 text-lg" />
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                {!IsLogin && (
                  <Link
                    to="/SignUp"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                  >
                    Sign Up
                  </Link>
                )}
              </div>

              {/* Mobile Search Results */}
              {searchQuery && filteredProducts.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-2 space-y-1">
                  <div className="text-xs text-gray-500 px-2 py-1">
                    {filteredProducts.length} results
                  </div>
                  {filteredProducts.slice(0, 4).map((product, index) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                        <img 
                          src={product.thumbnail || product.image} 
                          alt={product.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
                        <p className="text-xs text-gray-500">
                          ${product.price?.toFixed(2) || 'N/A'}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
