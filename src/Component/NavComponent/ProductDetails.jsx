import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductRating from "../ProductRating"; // Make sure the path is correct
import Recproduct from "../Recproduct";
import { toast } from "react-toastify";

const ProductDetails = ({ setCart, cart,IsLogin,seAmount }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Navigation = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
        console.error("Error fetching product:", err); // Log the error for debugging
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

 

  const handleAddToCart = () => {
    if (product) { // Check if product is loaded
      setCart([...cart, product]);
     
     toast.success(`${product.title} added to cart!`,{position:"top-center"});
    }
  };

  const handleBuyNow = () => {
    seAmount(Math.round(product.price * 74.35))
    Navigation('/Checkout')
  };

  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  if (!product) return <div>Product not found.</div>; // Handle case where product is null after loading

  return (
    <div className="max-w-[90%] mx-auto p-4 bg-white rounded-lg shadow-md mt-8">
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2">
          <img
            src={product.images?.[0] || product.thumbnail} // Use first image from array if available
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <div className="flex items-center mb-4">
            <ProductRating rating={product.rating} />
            <span className="text-gray-500 ml-2">({product.rating})</span>
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold mr-2">Price: ₹{Math.round(product.price * 74.35)}</span>
            <span className="text-gray-500 line-through">₹{Math.round(product.price * 90.35)}</span>
          </div>
          <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
          <div className="flex space-x-4">
            <button
              onClick={()=>{
                IsLogin?
                handleAddToCart :
                toast.error("First You Need to Login")
                Navigation('/Login')
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
            <button
              onClick={ 

                IsLogin?handleBuyNow:toast.error("First You Need to Login")
               
              }
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Reviews</h3>
          {product.reviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold">{review.reviewerName}</span>
                <span className="text-gray-500 ml-2">{review.date}</span>
              </div>
              <p>{review.comment}</p>
               <div className="flex items-center mt-2">
                <ProductRating rating={review.rating} />
                <span className="text-gray-500 ml-2">({review.rating})</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
      <Recproduct startNumber={0} endNumber={9}/>
      </div>
    </div>
  );

};



export default ProductDetails;