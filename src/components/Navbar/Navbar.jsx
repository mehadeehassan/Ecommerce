import { useState } from "react";
import { FaCaretDown, FaUserCheck } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose, IoMdMenu, IoMdSearch } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  // menu open/close function
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 // dropdown open/close function
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="shadow-md bg-white transition-all duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-orange-200 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center gap-2">

            {/* Mobile menu button toggle button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-2xl text-gray-700 hover:text-orange-400 transition-colors"
            >
              {isMenuOpen ? <IoMdClose className="text-orange-500"/> : <IoMdMenu className="text-orange-500" />}
            </button>
            <Link to="/">
              <a
                href="#"
                className="font-extrabold text-2xl sm:text-2xl flex items-center gap-2"
              >
                <img src={Logo} alt="Logo" className="w-10" />
                <samp className="relative group hidden sm:block">SHOPS</samp>
              </a>
            </Link>
          </div>

          {/* Search bar, Order Button */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-50 sm:w-50 group-hover:w-72 transition-all duration-300 
                    rounded-full border border-gray-300 px-2 py-1 focus:border-orange-400 bg-white text-gray-700"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-orange-400 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button className="bg-orange-400 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            
            {/* Log In Section */}
            <div className="flex flex-row items-center gap-2 sm:gap-2">
              <Link to="/login">
                <button className="cursor-pointer transition-all duration-200 text-orange-400 py-0.5 px-2 sm:px-3 border border-orange-400 hover:bg-orange-400 hover:text-white rounded-full flex items-center gap-1 group text-sm sm:text-base">
                  <IoLogInSharp className="text-lg sm:text-xl drop-shadow-sm" />
                  <span className="whitespace-nowrap">Log In</span>
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-orange-400 hover:bg-orange-500 transition-all cursor-pointer duration-200 text-white border border-orange-400 py-0.5 px-2 sm:px-3 rounded-full flex items-center gap-1 group text-sm sm:text-base">
                  <FaUserCheck className="text-lg sm:text-xl drop-shadow-sm" />
                  <span className="whitespace-nowrap">Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar (Desktop & Mobile Responsive)*/}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:block py-2 bg-white sm:bg-transparent border-t sm:border-t-0`}>
        <ul className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-1 sm:gap-4 px-4 sm:px-0">
          <li className="w-full sm:w-auto">
            <a
              href="/"
              className="block sm:inline-block py-2 sm:py-0 px-4 hover:text-orange-400 duration-200 w-full active:text-orange-400"
            >
              Home
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              href="/products/top-rated"
              className="block sm:inline-block py-2 sm:py-0 px-4 hover:text-orange-400 duration-200 w-full active:text-orange-400"
            >
              Top Rated
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              href="/products/kids-wear"
              className="block sm:inline-block py-2 sm:py-0 px-4 hover:text-orange-400 duration-200 w-full active:text-orange-400"
            >
              Kids Wear
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              href="/products/men-wear"
              className="block sm:inline-block py-2 sm:py-0 px-4 hover:text-orange-400 duration-200 w-full active:text-orange-400"
            >
              Men Wear
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <a
              href="/products/electronics"
              className="block sm:inline-block py-2 sm:py-0 px-4 hover:text-orange-400 duration-200 w-full active:text-orange-400"
            >
              Electronics
            </a>
          </li>

          {/* Simple Dropdown */}
          <li 
            className="group relative cursor-pointer w-full sm:w-auto px-4 sm:px-0"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {/* href="#" er jonne page jeno top-a na uthe jay ba URL change na hoy, tai preventDefault use kora hoyeche  */}
            <a href="/#" className="flex items-center gap-1 py-2" onClick={(e) => e.preventDefault()}>
              Other
              <span>
                <FaCaretDown className={`transition-all duration-200 ${isDropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
              </span>
            </a>
            
            {/* Dropdown Menu */}
            <div className={`
              ${isDropdownOpen ? "block" : "hidden group-hover:sm:block"} 
              sm:absolute z-50 w-full sm:w-48 rounded-md bg-white p-2 text-black 
              sm:shadow-md top-full left-0 relative sm:left-auto mt-1 sm:mt-0
            `}>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/products/trending"
                    className="inline-block p-2 rounded-md w-full hover:bg-orange-200 active:bg-orange-200"
                  >
                    Trending Products
                  </a>
                </li>
                <li>
                  <a
                    href="/products/best-selling"
                    className="inline-block p-2 rounded-md w-full hover:bg-orange-200 active:bg-orange-200"
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