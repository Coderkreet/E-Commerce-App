import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const NavBar = ({ IsLogin ,cart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
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
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav className="flex justify-between mt-10 mb-10 px-10 items-center">
        <div>
          <h1 className="NameWeb font-bold text-[1.5rem]">Cartnevula</h1>
        </div>

        <div className="ml-10">
          <ul className="flex gap-[2.5rem]">
            <Link to={"/"}><li className="cursor-pointer hover:underline">Home</li></Link>
            <Link to={"/About"}><li className="cursor-pointer hover:underline">About</li></Link>
            <Link to={"/products"}><li className="cursor-pointer hover:underline">Products</li></Link>
            <Link to={"/contect"}><li className="cursor-pointer hover:underline">Contact</li></Link>
            {!IsLogin && <Link to={"/SignUp"}><li className="cursor-pointer hover:underline">Sign Up</li></Link>}
          </ul>
        </div>

        {/* Search Bar */}
        <div ref={searchRef} className="flex gap-x-4 justify-center items-center relative">
          <div className="flex gap-x-2 items-center bg-[#F5F5F5] relative rounded-md">
            <input
              type="text"
              className="text-[0.9rem] border rounded-md w-[12rem] h-[2rem] px-3"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <AiOutlineSearch className="font-bold text-[1.4rem] cursor-pointer" />
          </div>



          {/* Icons */}
          <div className="flex gap-x-2 items-center">
            {IsLogin ? (
              <div className="flex gap-x-2 items-center">

               <Link className="flex gap-x-1 " to={'/cart'}> <AiOutlineShoppingCart className="font-bold text-[1.4rem] cursor-pointer" />{cart&&<span className="text-red-500 font-extrabold">{cart.length}</span>}</Link>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-4 text-black">
                <Link to={"/Login"}>
                  <p className="font-bold flex gap-3 upperbuttton border-b-[2px] border-black cursor-pointer">
                    <BiLogIn fontSize={25} /> Log in
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
                  {/* Search Results Dropdown */}
                  {searchQuery && (
            <div className="absolute top-[8rem] right-[6rem] w-[22rem] bg-white shadow-lg border rounded-md z-50 max-h-[500px] overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className={`p-2 flex items-center gap-2 cursor-pointer transition-all duration-200 ${
                      selectedIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    <img src={product.thumbnail || product.image} alt={product.title} className="w-10 h-10 object-cover rounded-md" />
                    <p className="text-sm">{product.title}</p>
                  </Link>
                ))
              ) : (
                <p className="p-2 text-gray-500 text-sm">No results found</p>
              )}
            </div>
          )}
      </nav>
    </div>
  );
};

export default NavBar;
