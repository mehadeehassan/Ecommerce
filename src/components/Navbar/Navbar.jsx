import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white   transition-all duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-orange-200 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            <Link to="/"><a
              href="#"
              className="font-extrabold text-2xl sm:text-2xl flex items-center gap-2"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              SHOPS
            </a></Link>
          </div>

          {/* Search bar, Order Button */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-50 sm:w-50 group-hover:w-72 transition-all duration-300 
                    rounded-full border border-gray-300 px-2 py-1 focus:border-orange-400  bg-white  text-gray-700"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-orange-400 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button className="bg-orange-400 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Log In Section  */}
            <Link to="/login">
              <button className="bg-white-400 transition-all duration-200 text-orange-400 py-1 px-4 border border-orange-400 hover:bg-orange-400 hover:text-white rounded-full flex items-center gap-3 group">
                <IoLogInSharp className="text-xl  hover:text-white  drop-shadow-sm cursor-pointer" />{" "}
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-orange-400 hover:bg-orange-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <FaUserCheck className="text-xl text-white drop-shadow-sm cursor-pointer" />{" "}
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Navbar  */}
      <div className="flex justify-center py-2">
        <ul className="sm:flex hidden items-center gap-4">
          <li>
            <a
              href="/"
              className="inline-block px-4 hover:text-orange-400 duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/products/top-rated"
              className="inline-block px-4 hover:text-orange-400 duration-200"
            >
              Top Rated
            </a>
          </li>
          <li>
            <a
              href="/products/kids-wear"
              className="inline-block px-4 hover:text-orange-400 duration-200"
            >
              Kids Wear
            </a>
          </li>
          <li>
            <a
              href="/products/men-wear"
              className="inline-block px-4 hover:text-orange-400 duration-200"
            >
              Men Wear
            </a>
          </li>
          <li>
            <a
              href="/products/electronics"
              className="inline-block px-4 hover:text-orange-400 duration-200"
            >
              Electronics
            </a>
          </li>

          {/* Simple Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="/#" className="flex items-center gap-1 py-2">
              Other
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            {/* Dropdown Menu */}
            <div className="absolute z-9999 hidden group-hover:block w-48 rounded-md bg-white p-2 text-black shadow-md top-full">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/products/trending"
                    className="inline-block p-2 rounded-md w-full hover:bg-orange-200"
                  >
                    Trending Products
                  </a>
                </li>
                <li>
                  <a
                    href="/products/best-selling"
                    className="inline-block p-2 rounded-md w-full hover:bg-orange-200"
                  >
                    Best Selling
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
