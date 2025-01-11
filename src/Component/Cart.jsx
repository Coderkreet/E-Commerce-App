import React from 'react';

const Cart = ({ cart }) => {
  // Convert price from dollars to rupees
  const convertToRupees = (dollars) => {
    const conversionRate = 74.35; // 1 USD = 74.35 INR
    return dollars * conversionRate;
  };

  // Calculate total price with validation checks, assuming all items have quantity 1
  const totalPrice = cart.reduce((total, item) => {
    // Ensure item.price is valid before multiplying
    const price = item.price && !isNaN(item.price) ? item.price : 0;
    const priceInRupees = convertToRupees(price); // Convert price to INR
    return total + priceInRupees; // No need to multiply by quantity, assuming all items have quantity 1
  }, 0);

  return (
    <div className="max-w-[91%] mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Shopping Cart</h2>

      {/* If the cart is empty */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {/* Loop through cart items */}
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center">
                  <img src={item.image || item.thumbnail} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500">Price: ₹ {convertToRupees(item.price).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="mr-4">Quantity: 1</p> {/* Quantity is fixed to 1 */}
                  <p className="font-semibold">₹ {convertToRupees(item.price).toFixed(2)}</p> {/* Price per item */}
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div className="mt-4 flex justify-between items-center">
            <p className="font-semibold text-xl">Total Price:</p>
            <p className="text-xl font-bold">₹ {totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
