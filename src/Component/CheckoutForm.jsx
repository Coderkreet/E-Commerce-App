import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  AiOutlineShoppingCart, 
  AiOutlineUser, 
  AiOutlineEnvironment, 
  AiOutlineCreditCard,
  AiOutlineCheck,
  AiOutlineLoading3Quarters,
  AiOutlineEdit,
  AiOutlineDelete
} from 'react-icons/ai';
import { 
  BsCash, 
  BsShield, 
  BsTruck, 
  BsCheckCircle 
} from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const Checkout = ({ cart = [], Amount, onPaymentSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    
    // Delivery Address
    address: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    
    // Payment
    paymentMethod: 'razorpay',
    
    // Additional
    deliveryInstructions: '',
    saveAddress: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const containerRef = useRef();
  const stepsRef = useRef();
  const formRef = useRef();

  // Sample cart data if none provided
  const sampleCart = [
    { id: 1, title: "iPhone 14 Pro", price: 999, quantity: 1, image: "https://via.placeholder.com/100" },
    { id: 2, title: "AirPods Pro", price: 249, quantity: 2, image: "https://via.placeholder.com/100" }
  ];

  const cartItems = cart.length > 0 ? cart : sampleCart;
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = Amount || (subtotal + shipping + tax);

  useEffect(() => {
    // Animate page entry
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate steps
    gsap.fromTo(stepsRef.current?.children,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step >= 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    
    if (step >= 2) {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
      
      // Animate step change
      gsap.fromTo('.step-content',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleRazorpayPayment = () => {
    const options = {
      key: "rzp_test_iT1m7z7AJPuXoA", // Replace with your actual key
      amount: total * 100, // Amount in paise
      currency: "INR",
      name: "Cartnevula",
      description: "Order Payment",
      image: "https://via.placeholder.com/150",
      handler: function (response) {
        setOrderPlaced(true);
        gsap.to('.success-animation', {
          scale: 1.1,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        });
        onPaymentSuccess && onPaymentSuccess(response);
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: formData.address,
      },
      theme: {
        color: "#3B82F6",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

    razorpay.on("payment.failed", function (response) {
      alert("Payment Failed! Please try again.");
      console.error(response.error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    if (formData.paymentMethod === 'razorpay') {
      handleRazorpayPayment();
    } else {
      // Cash on Delivery
      setTimeout(() => {
        setIsSubmitting(false);
        setOrderPlaced(true);
        onPaymentSuccess && onPaymentSuccess({ paymentMethod: 'cod' });
      }, 2000);
    }
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: AiOutlineUser },
    { number: 2, title: 'Delivery Address', icon: AiOutlineEnvironment },
    { number: 3, title: 'Payment', icon: AiOutlineCreditCard }
  ];

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="success-animation bg-white rounded-3xl shadow-2xl p-8 text-center max-w-md w-full">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BsCheckCircle className="text-green-500 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">Order ID: #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="text-lg font-bold text-gray-900">Total: ₹{total}</p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Secure <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Checkout</span>
          </h1>
          <p className="text-gray-600 text-lg">Complete your order in just a few steps</p>
        </div>

        {/* Progress Steps */}
        <div ref={stepsRef} className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 lg:space-x-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <AiOutlineCheck className="text-lg" />
                  ) : (
                    <step.icon className="text-lg" />
                  )}
                </div>
                <div className="hidden lg:block ml-3">
                  <p className={`font-semibold ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block w-16 h-0.5 ml-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="step-content">
                
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                          }`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                          }`}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Delivery Address */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Address</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.address ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                          }`}
                          placeholder="Enter your street address"
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Apartment, Suite, etc. (Optional)
                        </label>
                        <input
                          type="text"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Apartment, suite, unit, building, floor, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.city ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                          }`}
                          placeholder="Enter your city"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.state ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                          }`}
                          placeholder="Enter your state"
                        />
                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Postal Code *
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.postalCode ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                          }`}
                          placeholder="Enter postal code"
                        />
                        {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        >
                          <option value="India">India</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Delivery Instructions (Optional)
                        </label>
                        <textarea
                          name="deliveryInstructions"
                          value={formData.deliveryInstructions}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Special delivery instructions..."
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            name="saveAddress"
                            checked={formData.saveAddress}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">Save this address for future orders</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
                    
                    <div className="space-y-4">
                      <div className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === 'razorpay' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`} onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'razorpay' }))}>
                        <label className="flex items-center gap-4 cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="razorpay"
                            checked={formData.paymentMethod === 'razorpay'}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-blue-600"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <AiOutlineCreditCard className="text-2xl text-blue-600" />
                              <div>
                                <h3 className="font-semibold text-gray-900">Online Payment</h3>
                                <p className="text-sm text-gray-600">Pay securely with Razorpay (UPI, Cards, Net Banking)</p>
                              </div>
                            </div>
                          </div>
                          <BsShield className="text-green-500 text-xl" />
                        </label>
                      </div>

                      <div className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === 'cod' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`} onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cod' }))}>
                        <label className="flex items-center gap-4 cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={handleInputChange}
                            className="w-5 h-5 text-blue-600"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <BsCash className="text-2xl text-green-600" />
                              <div>
                                <h3 className="font-semibold text-gray-900">Cash on Delivery</h3>
                                <p className="text-sm text-gray-600">Pay when your order is delivered</p>
                              </div>
                            </div>
                          </div>
                          <BsTruck className="text-green-500 text-xl" />
                        </label>
                      </div>
                    </div>

                    {/* Security Badges */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <BsShield className="text-green-500 text-lg" />
                        <span>Your payment information is secure and encrypted</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-gray-200 mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      currentStep === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    disabled={currentStep === 1}
                  >
                    ← Previous
                  </button>

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <AiOutlineLoading3Quarters className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Complete Order - ₹{total}
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AiOutlineShoppingCart className="text-blue-600" />
                Order Summary
              </h3>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">{item.title}</h4>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (GST 18%)</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                  <BsTruck />
                  <span>Free Delivery</span>
                </div>
                <p className="text-sm text-green-600">
                  Estimated delivery: 3-5 business days
                </p>
              </div>

              {/* Security Badge */}
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 text-blue-700 font-semibold">
                  <BsShield />
                  <span>Secure Checkout</span>
                </div>
                <p className="text-sm text-blue-600 mt-1">
                  Your data is protected with 256-bit SSL encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
