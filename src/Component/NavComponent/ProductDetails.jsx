import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductRating from "../ProductRating";
import Recproduct from "../Recproduct";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  AiOutlineHeart, 
  AiFillHeart, 
  AiOutlineShoppingCart, 
  AiOutlineShareAlt,
  // AiOutlineTruck,
  // AiOutlineShield,
  AiOutlineReload,
  AiOutlineStar,
  AiOutlineCheck,
  AiOutlineClose
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdLocalOffer, MdSecurity } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const ProductDetails = ({ setCart, cart, IsLogin, seAmount }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const detailsRef = useRef(null);
  const tabsRef = useRef(null);
  const reviewsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  useEffect(() => {
    if (product && containerRef.current) {
      // Hero section animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -50, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(detailsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
      );

      // Tabs animation
      gsap.fromTo(tabsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Reviews animation
      if (reviewsRef.current) {
        gsap.fromTo(reviewsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: reviewsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [product]);

  const handleAddToCart = () => {
    if (!IsLogin) {
      toast.error("Please login to add items to cart", { position: "top-center" });
      return;
    }
    
    if (product) {
      const productWithQuantity = { ...product, quantity };
      setCart([...cart, productWithQuantity]);
      toast.success(`${product.title} added to cart!`, { position: "top-center" });
    }
  };

  const handleBuyNow = () => {
    if (!IsLogin) {
      toast.error("Please login to purchase", { position: "top-center" });
      return;
    }
    
    seAmount(Math.round(product.price * 74.35 * quantity));
    navigate('/Checkout');
  };

  const handleWishlist = () => {
    if (!IsLogin) {
      toast.error("Please login to add to wishlist", { position: "top-center" });
      return;
    }
    
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist", { position: "top-center" });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="text-red-500 text-xl mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center p-8 text-gray-600">Product not found.</div>;
  }

  const discountedPrice = Math.round(product.price * 74.35);
  const originalPrice = Math.round(product.price * 90.35);
  const savings = originalPrice - discountedPrice;

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        <nav className="text-sm text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-blue-600 cursor-pointer">{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.title}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-8">
            
            {/* Image Gallery */}
            <div ref={imageRef} className="space-y-4">
              <div className="relative group">
                <img
                  src={product.images?.[selectedImage] || product.thumbnail}
                  alt={product.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <button 
                  onClick={handleWishlist}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                >
                  {isWishlisted ? 
                    <AiFillHeart className="text-red-500 text-xl" /> : 
                    <AiOutlineHeart className="text-gray-600 text-xl" />
                  }
                </button>
                
                {product.discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{Math.round(product.discountPercentage)}% OFF
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      className={`w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                        selectedImage === idx ? 'border-blue-500 scale-110' : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedImage(idx)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div ref={detailsRef} className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-2 py-1 rounded-full">
                    {product.brand}
                  </span>
                  <span className="text-gray-500 text-sm">#{product.category}</span>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  {product.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <ProductRating rating={product.rating} />
                    <span className="text-gray-600">({product.rating})</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-green-600 font-medium">
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl lg:text-4xl font-bold text-gray-900">
                    ₹{discountedPrice}
                  </span>
                  {product.discountPercentage > 0 && (
                    <span className="text-xl text-gray-500 line-through">
                      ₹{originalPrice}
                    </span>
                  )}
                </div>
                {savings > 0 && (
                  <p className="text-green-600 font-semibold">
                    You save ₹{savings} ({Math.round(product.discountPercentage)}% off)
                  </p>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <AiOutlineShoppingCart className="text-xl" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Buy Now
                  </button>
                </div>
                
                <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                  <AiOutlineShareAlt className="text-xl" />
                  Share Product
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  {/* <AiOutlineTruck className="text-green-600 text-xl" /> */}
                  <div>
                    <p className="font-semibold text-sm">Free Delivery</p>
                    <p className="text-xs text-gray-500">Orders over ₹500</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {/* <AiOutlineShield className="text-blue-600 text-xl" /> */}
                  <div>
                    <p className="font-semibold text-sm">2 Year Warranty</p>
                    <p className="text-xs text-gray-500">Manufacturer warranty</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <AiOutlineReload className="text-purple-600 text-xl" />
                  <div>
                    <p className="font-semibold text-sm">Easy Returns</p>
                    <p className="text-xs text-gray-500">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div ref={tabsRef} className="bg-white rounded-2xl shadow-xl mt-8 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6 lg:p-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <AiOutlineCheck className="text-green-500" />
                        <span>Premium Quality</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AiOutlineCheck className="text-green-500" />
                        <span>Durable Construction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AiOutlineCheck className="text-green-500" />
                        <span>Easy to Use</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AiOutlineCheck className="text-green-500" />
                        <span>Money Back Guarantee</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">What's in the Box</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 1x {product.title}</li>
                      <li>• User Manual</li>
                      <li>• Warranty Card</li>
                      <li>• Accessories (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">Brand:</span>
                      <span className="text-gray-600">{product.brand || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">Category:</span>
                      <span className="text-gray-600">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">SKU:</span>
                      <span className="text-gray-600">SKU-{product.id}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">Stock:</span>
                      <span className="text-gray-600">{product.stock} units</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">Rating:</span>
                      <span className="text-gray-600">{product.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">Discount:</span>
                      <span className="text-gray-600">{product.discountPercentage}%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">Availability:</span>
                      <span className="text-green-600">In Stock</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">Shipping:</span>
                      <span className="text-gray-600">Free</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <AiOutlineStar className="text-yellow-500" />
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-gray-500">
                        ({product.reviews ? product.reviews.length : 0} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {product.reviews && product.reviews.length > 0 ? (
                  <div ref={reviewsRef} className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="flex items-start gap-4">
                          <BiUserCircle className="text-4xl text-gray-400 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{review.reviewerName}</h4>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <ProductRating rating={review.rating} />
                              <span className="text-sm text-gray-600">({review.rating}/5)</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <AiOutlineStar className="text-6xl mx-auto mb-4 text-gray-300" />
                    <p>No reviews yet. Be the first to review this product!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h3>
          <Recproduct startNumber={0} endNumber={8} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
