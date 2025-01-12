import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import useFetch from "./useFetch";
import ProductRating from "./ProductRating";
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard"; // Import skeleton loading

const Recproduct = ({startNumber,endNumber}) => {
  const { data = [], loading, error } = useFetch("https://dummyjson.com/products");
  const { data: data2 = [], loading: loading2, error: error2 } = useFetch("https://fakestoreapi.com/products");

  const convertToRupees = (dollars) => (dollars * 74.35).toFixed(2); // USD to INR conversion

  // Show skeleton loading while fetching
  if (loading || loading2) {
    return (
      <div className="flex flex-wrap mx-auto justify-around gap-y-4 w-[80rem]">
        {Array(8)
          .fill()
          .map((_, i) => (
            <SkeletonCard key={i} />
          ))}
      </div>
    );
  }

  // Show error message if API fails
  if (error || error2) {
    return <div className="text-red-500 text-xl">⚠️ Error loading products. Please try again later.</div>;
  }

  return (
    <div className="flex items-center justify-center w-[100%]">
      <div className="flex flex-wrap justify-around gap-y-4 w-[80rem]">
        {/* Render first API products (limit to 5) */}
        {data.slice(startNumber, endNumber).map((dataItem) => (
          <Link to={`/product/${dataItem.id}`} key={dataItem.id} className="flex flex-col bg-gray-100 rounded-md justify-between w-72 h-96 p-4 relative">
            {/* Discount Badge */}
            <div className="absolute left-2 top-2">
              <p className="bg-red-500 text-white px-2 py-1 rounded-md">{dataItem.discountPercentage}%</p>
            </div>

            {/* Favorite & View Icons */}
            <div className="absolute right-2 top-2 flex flex-col text-xl">
              <AiOutlineHeart className="bg-white rounded-full mb-2 cursor-pointer hover:text-red-500" />
              <AiOutlineEye className="bg-white rounded-full cursor-pointer hover:text-blue-500" />
            </div>

            {/* Product Image */}
            <div className="flex justify-center items-center h-48">
              <img src={dataItem.thumbnail} className="h-full max-w-full object-cover" alt={dataItem.title} />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between h-40">
              <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{dataItem.title}</p>
              <div className="flex items-center">
                <p className="text-red-500 font-bold">₹ {convertToRupees(dataItem.price)}</p>
              </div>
              <div className="flex items-center">
                <ProductRating rating={dataItem.rating} />
                <p className="text-gray-500 ml-1">{dataItem.stock}</p>
              </div>
            </div>
          </Link>
        ))}


      </div>
    </div>
  );
};

export default Recproduct;
