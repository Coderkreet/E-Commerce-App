import React, { useState } from "react";
import Loginimg from "./Image/Signup/dl.beatsnoop 1.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({setIsLogin}) => {
  const Navigate = useNavigate()
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
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
  if (setFormData.name != "" && setFormData.email != "" && setFormData.password !="") {
    Navigate('/')
    setIsLogin(true)
  }
  };

  return (
    <div className="flex gap-x-[5rem] justify-center items-center">
      {/* Left side Image */}
      <img width={"500rem"} src={Loginimg} alt="Signup" />

      {/* Right side Form */}
      <div className="flex justify-center flex-col gap-5 w-[25rem]">
        <div className="text-center">
          <h1 className="text-[2rem] font-bold mb-8">Create an account</h1>
          <p className="text-1.5rem font-bold">Enter your details below</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-9">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-b-2 border-black bg-transparent h-6 outline-none"
            placeholder="Name"
            required
          />
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

          <div className="flex flex-col gap-8">
            <button
              type="submit"
              className="bg-orange-600 h-[3rem] text-white font-bold rounded-md"
            >
              Create Account
            </button>

            <div className="bg-transparent flex gap-3 justify-center items-center border border-black h-[3rem] text-black font-bold rounded-md">
              <FcGoogle />
              <button type="button">Sign up with Google</button>
            </div>

            <div className="flex mt-5 justify-center items-center gap-4 text-black">
              <p>Already have an account?</p>
              <Link to="/Login">
                <p className="font-bold border-b-[2px] border-black cursor-pointer">
                  Log in
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
