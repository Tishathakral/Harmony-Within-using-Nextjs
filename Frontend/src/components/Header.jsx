"use client";
import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';



const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userData , setUserData] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      getuserDetails(); 
    }
  }, [token]);

  const getuserDetails = async () => {
    // Retrieve JWT token from localStorage
    const token = localStorage.getItem('token');
    
    // Decode the JWT token to extract email
    const decoded = jwtDecode(token);
    const email = decoded.email;

    // Set the Authorization header with the JWT token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    try {
        // Make GET request to the server with the authorization header
        const res = await axios.get(`http://localhost:5000/user/${email}`, config);

        // Assuming setUserData is a function to update user data in your component state
        setUserData(res.data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching user details:', error);
    }
};

    console.log(userData);

    const logout = () => {
      localStorage.removeItem('token');
      window.location.reload();
    };


  return (
    <>
      <div className="drop-shadow-2xl border-gray-100 md:pb-5 pb-1 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Logo Section */}
          <div className="flex flex-col-reverse md:flex-row min-w-full py-2 space-y-8 md:justify-between">
            <div className="flex-1 md:self-start md:flex md:items-center">
              <a href="#" className="flex items-center">
                <img src="/logo2.png" className="h-16 w-16 sm:h-20 sm:w-20" alt="" />
                <span className="pt-1 mx-1 text-2xl sm:text-4xl italic font-serif text-red-700 hover:text-gray-900">
                  Harmony <div className="text-lg sm:text-2xl">Within</div>
                </span>
              </a>
            </div>
            {/* Hamburger Menu Icon */}
            <div className="md:hidden cursor-pointer absolute right-10 -top-1" onClick={toggleMenu}>
              {isMenuOpen ? (
                // Cross Icon when the menu is open
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Hamburger Icon when the menu is closed
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          {/* Division Line */}
          <hr className="my-4 border-t border-black" />
          {/* Navigation Section */}
          <nav
            id="bar"
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex flex-col sm:flex-row items-center border-spacing-8'`}
          >
            <div className='backdrop-blur-sm w-full rounded md:flex justify-center'>
              <div className="flex flex-col sm:flex-row justify-center sm:space-y-0 space-y-2 text-center text-black text-lg font-gotham">
                <a
                  href="#why"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  Why
                </a>
                <a
                  href="#sounds"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  onClick={toggleMenu}
                >
                  Explore
                </a>
                <a
                  href="#discover"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  onClick={toggleMenu}
                >
                  Discover Music
                </a>
                <a
                  href="#faq"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  onClick={toggleMenu}
                >
                  FAQ
                </a>
            <button onClick={logout} className="mx-2 sm:mx-4 hover:scale-110 active">Logout</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
