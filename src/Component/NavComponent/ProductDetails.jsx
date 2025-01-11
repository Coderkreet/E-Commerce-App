import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductRating from "../ProductRating";

const ProductDetails = ({ setCart, cart }) => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]); // Runs again if the ID in the URL changes

  const handleAddToCart = () => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${product.title}`);
  };

  if (loading) return <ProductSkeleton />;  // Show skeleton loader when loading
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-[95%] justify-center items-center flex flex-col mx-auto bg-white shadow-md rounded-md">
      <div className="max-w-[95%] flex mx-auto bg-white shadow-md rounded-md">
        <div className="w-[100%] h-[100%]">
          <img src={product.image || product.thumbnail} alt={product.title} className="w-[50%] h-[40rem] object-cover mt-4" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <div className="flex items-center">
            <ProductRating rating={product.rating} />
            <p className="text-gray-500 ml-1">( Reviews {product.reviews?.length || 0} )</p>
          </div>
          <p className="text-gray-600 text-2xl w-[75%] mt-2">{product.description}</p>
          <div>
            <p className="text-xl font-semibold text-green-700 mt-2">
              Price: ₹ <span className="line-through text-red-700">{Math.round(product.price * 90.35)}</span> {Math.round(product.price * 74.35)}
            </p>
          </div>
          <p className="text-gray-500 mt-2">Stock: {product.stock || "N/A"}</p>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="px-11 py-5 text-2xl bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="px-11 py-5 text-2xl bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <h2 className="mx-auto text-3xl mt-9">Reviews Section</h2>
      {product.reviews?.map((elem, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 w-full max-w-full">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
              {elem.reviewerName[0]}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{elem.reviewerName}</h2>
              <p className="text-gray-500 text-sm">{elem.reviewerEmail}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{elem.comment}</p>
          <div className="flex justify-between items-center mt-4">
            <ProductRating rating={elem.rating} />
            <p className="text-gray-500 text-sm">{elem.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Skeleton Loader Component
const ProductSkeleton = () => {
  return (
    <div className="max-w-[95%] justify-center items-center flex flex-col mx-auto bg-white shadow-md rounded-md">
      <div className="max-w-[95%] flex mx-auto bg-white shadow-md rounded-md">
        <div className="w-[100%] h-[100%]">
          <div className="w-[50%] h-[40rem] bg-gray-300 animate-pulse mt-4"></div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="w-[200px] h-[30px] bg-gray-300 animate-pulse"></div>
          <div className="flex items-center space-x-2">
            <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse"></div>
            <div className="w-[80px] h-[20px] bg-gray-300 animate-pulse"></div>
          </div>
          <div className="w-[75%] h-[40px] bg-gray-300 animate-pulse"></div>
          <div className="w-[150px] h-[30px] bg-gray-300 animate-pulse"></div>
          <div className="w-[100px] h-[30px] bg-gray-300 animate-pulse"></div>

          <div className="mt-6 flex space-x-4">
            <button className="w-[150px] py-5 text-2xl bg-blue-500 text-white rounded-md animate-pulse"></button>
            <button className="w-[150px] py-5 text-2xl bg-green-500 text-white rounded-md animate-pulse"></button>
          </div>
        </div>
      </div>

      <h2 className="mx-auto text-3xl mt-9 bg-gray-300 animate-pulse w-[250px] h-[30px]"></h2>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-full mt-4">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 animate-pulse w-12 h-12 rounded-full"></div>
          <div>
            <div className="w-[120px] h-[20px] bg-gray-300 animate-pulse"></div>
            <div className="w-[150px] h-[15px] bg-gray-300 animate-pulse mt-1"></div>
          </div>
        </div>
        <div className="w-[100%] h-[20px] bg-gray-300 animate-pulse mt-4"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
