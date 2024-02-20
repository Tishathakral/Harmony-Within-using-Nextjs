import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-8 md:px-32 lg:px-16">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        {/* Left side of the footer */}
        <div className="flex flex-col lg:space-y-4 lg:w-1/3">
          {/* Placeholder for your logo */}
          <img
            src="/logo2.png" // Replace with the actual path to your logo file
            alt="Harmony Within Logo"
            className="w-20 h-20 mb-4 mx-auto lg:mx-0"
          />
          <p className="text-sm text-center md:text-left">
            &copy; 2023 Harmony Within. All Rights Reserved
          </p>
        </div>

        {/* Middle part of the footer */}
        <div className="flex flex-col items-center lg:w-1/3 mt-8">
          <div className="flex items-center space-x-4 mb-2">
            <input
              type="email"
              placeholder="Your email"
              className="border p-3 rounded-full hover:scale-105 transition duration-300 ease-in-out"
              // Add your state and onChange handler for the email input
            />
            <button className="bg-fuchsia-500 text-white px-2 py-3 rounded-full hover:scale-105 transition duration-300 ease-in-out">Subscribe</button>
          </div>
          <p className=" text-sm md:text-lg text-center px-2">
            Subscribe to our newsletter and stay updated with our latest meditations and news.
          </p>
        </div>

        {/* Right side of the footer */}
        <div className="flex flex-row space-x-4 justify-end lg:order-2 lg:w-1/3 mt-5">
          <a href="#" className="text-white hover:text-gray-500">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Bottom part of the footer */}
      <div className="mt-2 container flex flex-col lg:flex-row items-center justify-center lg:justify-end space-y-4 lg:space-y-0">
        <ul className="flex flex-col lg:flex-row items-center justify-center lg:justify-end space-y-4 lg:space-y-0">
          <li className="text-sm">
            <a href="#" className="text-sm">
              Privacy Policy
            </a>
          </li>
          <li className="text-sm ml-4">
            <a href="#" className="text-sm">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
