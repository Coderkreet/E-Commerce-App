import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails2 = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]); // Run again if the ID in the URL changes

  const handleAddToCart = () => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${product.title}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-[95%] justify-center items-center flex flex-col mx-auto bg-white shadow-md rounded-md">
      <div className="max-w-[95%] flex mx-auto bg-white shadow-md rounded-md">
        <div className="w-[100%] h-[100%]">
        <img src={product.image} alt={product.title} className="w-[100%] h-[40rem] object-cover mt-4" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <div className="flex items-center">
            <p className="text-gray-500 ml-1">
              Rating: ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
          <p className="text-gray-600 text-2xl w-[75%] mt-2">{product.description}</p>
          <div>
            <p className="text-xl font-semibold text-green-700 mt-2">
              Price: ₹ <span className="line-through text-red-700">{Math.round(product.price * 90.35)}</span> {Math.round(product.price * 74.35)}
            </p>
          </div>
          <p className="text-gray-500 mt-2">Category: {product.category}</p>

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
    </div>
  );
};

export default ProductDetails2;
