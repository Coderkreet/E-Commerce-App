import React, { useState } from "react";
import SignUpimg from "./Image/Signup/dl.beatsnoop 1.png";
import { Link, useNavigate } from "react-router-dom";
import Recproduct from "./Recproduct";

const Login = ({setIsLogin}) => {
  // State for form inputs
    const Navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (setFormData.name !== "" && setFormData.email !== "" && setFormData.password !=="") {
      Navigate('/')
      setIsLogin(true)
    }
  
  };

  return (
    <div className="flex gap-x-[5rem] justify-center items-center">
      {/* Left side Image */}
      <img width={"500rem"} src={SignUpimg} alt="Login" />

      {/* Right side Form */}
      <div className="flex flex-col gap-5 w-[25rem]">
        <div className="text-center">
          <h1 className="text-[2rem] font-bold mb-8">Log in to Cartnevula</h1>
          <p className="text-1.5rem font-bold">Enter your details below</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-9">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 border-black bg-transparent h-6 outline-none"
            placeholder="Email or Phone Number"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border-b-2 border-black h-6 bg-transparent outline-none"
            placeholder="Password"
            required
          />

          <div className="flex items-baseline justify-between">
            <button
              type="submit"
              className="bg-orange-600 w-[8rem] h-[3rem] text-white font-bold rounded-md"
            >
              Log In
            </button>
            <p className="text-orange-400 cursor-pointer">Forget Password?</p>
          </div>
        </form>

        <div className="flex mt-5 justify-center items-center gap-4 text-black">
          <p>Create your account</p>
          <Link to="/SignUp">
            <p className="font-bold border-b-[2px] border-black cursor-pointer">
              Sign Up
            </p>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
