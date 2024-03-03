"use client";
import React, { useEffect, useState } from "react";
import axios from "axios"; // for making HTTP requests
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/handlers/homePageApis";
import Image from "next/image";
import Link from "next/link";

// Define the Login component
const Login = () => {
  // Define state to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
  };

  // Define handleSubmit function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send POST request to server with form data
      const res = await axios.post(
        `${BASE_URL}/user/login`,
        formData
      );
      console.log(res);
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem("token", token);

        console.log("Login successful");
        router.push("/");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Render the Login form
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: 'url("https://image.lexica.art/full_webp/6c359bdc-7493-4964-90e3-3c39ef1460bd")'}}></div>
      <div className="md:w-1/2 w-10/12 bg-white shadow-md rounded-md overflow-hidden relative z-10 backdrop-filter backdrop-blur-lg">
        <div className="flex md:flex-row flex-col">
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <Image
              src="https://image.lexica.art/full_webp/4c0d323a-796e-4306-b3a3-d9fad376d867"
              alt="Login Image"
              width={500}
              height={500}
              className="w-full md:h-full h-[30vh] object-cover"
            />
          </div>
          {/* Form */}
          <div className="w-full md:w-1/2 md:p-8 p-6 md:my-20 my-2">
            <form onSubmit={handleSubmit}  method="POST">
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {/* Submit button */}
              <div className="flex-row items-center justify-between">
                <button
                  className="bg-orange-800 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
                <div className="text-sm mt-4 w-full text-center">
                  New user?{" "}
                  <Link href="/signup" className="text-indigo-500 hover:underline">
                    Sign up here
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; // Export the Login component
