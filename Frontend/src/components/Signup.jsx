"use client";
import React, { useEffect, useState } from "react";
import axios from "axios"; // for making HTTP requests
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/handlers/homePageApis";
import Link from "next/link";
import Image from "next/image";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

// Define the Signup component
const Signup = () => {
  // Define state to manage form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  // Initialize router
  const router = useRouter();
  // Check if localStorage is available before accessing it
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  // Define handleChange function to update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "confirmPassword") {
      setPasswordMatch(e.target.value === formData.password);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Define handleSubmit function to handle form submission
  const handleSubmit = async (e) => {
    if(formData.password !== formData.confirmPassword){
      console.log("Password don't matches")
      return;
    }
    e.preventDefault();
    const data = {
      name: formData.firstname + " " + formData.lastname,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Send POST request to server with form data
      const res = await axios.post(`${BASE_URL}/user/signup`, data);
      console.log(res);
      if (res.status === 200) {
        console.log("Signup successful");
        router.push("/login");
      } else {
        console.log("Signup failed");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  // Render the Signup form
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: 'url("https://image.lexica.art/full_webp/c9a92df7-557e-4c69-9b58-d3b76d576140")' }}></div>
      <div className="md:w-1/2 w-10/12 bg-white shadow-md rounded-md overflow-hidden relative z-10 backdrop-filter backdrop-blur-lg">
        <div className="flex md:flex-row flex-col">
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <Image
              src="https://image.lexica.art/full_webp/91c282ae-a272-4743-8dc3-d798e116efcd"
              alt="Signup Image"
              width={500}
              height={500}
              className="w-full md:h-full h-[18vh] md:block hidden object-cover"
            />
          </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit} 
            method="POST"
            className="w-full md:w-1/2 md:p-8 p-6 md:my-12 my-0"
          >
            {/* First Name field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                placeholder="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            {/* Last Name field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>

            {/* Email field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* Password field */}
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {/* Toggle Password Visibility */}
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <RiEyeCloseLine className="h-6 w-6 relative top-4 text-gray-400" />
                ) : (
                  <RiEyeLine className="h-6 w-6 relative top-4 text-gray-400" />
                )}
              </button>
            </div>
            {/* Confirm Password field */}
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 ${
                  passwordMatch ? "" : "border-red-500"
                }`}
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {/* Toggle Confirm Password Visibility */}
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <RiEyeCloseLine className="h-6 w-6 relative top-4 text-gray-400" />
                ) : (
                  <RiEyeLine className="h-6 w-6 relative top-4 text-gray-400" />
                )}
              </button>
              {!passwordMatch && (
                <p className="text-red-500 text-xs mt-1">
                  Passwords do not match
                </p>
              )}
            </div>
            {/* Submit button */}
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-800 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="text-sm mt-4 w-full text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-500 hover:underline">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
