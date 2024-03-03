"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getuserDetails } from "@/handlers/homePageApis";
import Link from "next/link";
import { FiMenu, FiX } from 'react-icons/fi'; // Importing menu and close icons
import { BsPersonFill } from 'react-icons/bs'; // Importing user icon

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isusermenuOpen, setuserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
 const toggleUserMenu = () => {
    setuserMenuOpen(!isusermenuOpen);
  };

  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  useEffect(() => {
    if (token) {
      setLogin(true);
    }
  }, [token]);

  const { data: userDetails, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getuserDetails(token),
    enabled: login,
  });

  useEffect(() => {
    if (userDetails) {
      setUserData(userDetails);
    }
  }, [userDetails]);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="drop-shadow-2xl border-gray-100 md:pb-5 pb-1 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col-reverse md:flex-row min-w-full py-2 space-y-8 md:justify-between">
            <div className="flex-1 md:self-start md:flex md:items-center">
              <a href="#" className="flex items-center">
                <img
                  src="/logo2.png"
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  alt=""
                />
                <span className="pt-1 mx-1 text-2xl sm:text-4xl italic font-serif text-red-700 hover:text-gray-900">
                  Harmony <div className="text-lg sm:text-2xl">Within</div>
                </span>
              </a>
            </div>
            <div
              className="md:hidden cursor-pointer absolute right-10 -top-1"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-black" />
              ) : (
                <FiMenu className="w-6 h-6 text-black" />
              )}
            </div>
          </div>
          <hr className="my-4 border-t border-black" />
          <nav
            id="bar"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex flex-col sm:flex-row items-center border-spacing-8`}
          >
            <div className="backdrop-blur-sm w-full rounded md:flex justify-center">
              <div className="flex flex-col sm:flex-row justify-center sm:space-y-0 space-y-2 text-center text-black text-lg font-gotham">
                <Link
                  href="#why"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  aria-current="page"
                  onClick={toggleMenu}
                >
                  Why
                </Link>
                <Link
                  href="#sounds"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  onClick={toggleMenu}
                >
                  Explore
                </Link>
                <Link
                  href="#discover"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  onClick={toggleMenu}
                >
                  Discover Music
                </Link>
                <Link
                  href="#faq"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  onClick={toggleMenu}
                >
                  FAQ
                </Link>
                {login && userData ? (
                  <div className="relative mx-2 sm:mx-4 group">
                    <button
                      onClick={toggleUserMenu}
                      className="hover:scale-110 active"
                    >
                      <BsPersonFill className="w-6 h-6" />
                    </button>
                    <ul
                      className={`${
                        isusermenuOpen ? "block" : "hidden"
                      } absolute top-full left-0 w-36 bg-white border border-gray-200 py-2 rounded-md shadow-lg min-w-fit`}
                    >
                       <li className="px-4 py-2">
                        <span className="block text-gray-800 font-semibold">
                          {userData.name}
                        </span>
                      </li>
                      <li className="px-4 py-2">
                        <span className="block text-gray-800 font-semibold">
                          {userData.email}
                        </span>
                      </li>
                      <li className="px-4 py-2">
                        <button
                          onClick={logout}
                          className="text-red-600 hover:text-red-800"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="mx-2 sm:mx-4 hover:scale-110 active"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
