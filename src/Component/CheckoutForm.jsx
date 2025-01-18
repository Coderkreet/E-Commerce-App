import React from "react";

const RazorpayDemo = ({Amount}) => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_yourKeyIdHere", // Replace with your Razorpay Test Key ID
      amount: Amount, //    
      currency: "INR",
      name: "Demo Payment",
      description: "This is a test transaction",
      image: "https://via.placeholder.com/150", // Your logo URL
      handler: function (response) {
        // Handle payment success
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Demo Corporate Office",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

    razorpay.on("payment.failed", function (response) {
      // Handle payment failure
      alert("Payment Failed!");
      console.error(response.error);
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Razorpay Demo</h1>
      <button
        style={{
          backgroundColor: "#F37254",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={handlePayment}
      >
        Pay ₹{Amount}
      </button>
    </div>
  );
};

export default RazorpayDemo;
