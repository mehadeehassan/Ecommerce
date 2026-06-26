import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose, IoMdMenu, IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import axiosPublic from "../../Pages/Utils/axiosPublic";

const Navbar = () => {
  // menu open/close function
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // categories backend theke asbe ei state e
  const [categories, setCategories] = useState([]);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    handleGetAllCategory();
  }, []);

  const handleGetAllCategory = async () => {
    try {
      const response = await axiosPublic.get("/getAllCategory");
      if (response.status === 200) {
        setCategories(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

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
              {isMenuOpen ? (
                <IoMdClose className="text-orange-500" />
              ) : (
                <IoMdMenu className="text-orange-500" />
              )}
            </button>
            <Link
              to="/"
              className="font-extrabold text-2xl sm:text-2xl flex items-center"
            >
              <img src={Logo} alt="Logo" className="w-11" />
              <samp className="relative group hidden sm:block">SHOPS</samp>
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
            <Link to="/cart">
              <button className="bg-orange-400 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group relative">
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <div className="relative">
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-orange-500 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border border-orange-400">
                      {cartCount}
                    </span>
                  )}
                </div>
              </button>
            </Link>
            <Link to="/login">
              <div className="flex items-center ">
                <FaRegUser className="text-2xl text-orange-500" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Navbar Desktop & Mobile Responsive*/}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:block py-2 bg-white sm:bg-transparent border-t sm:border-t-0`}
      >
        <ul className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-1 sm:gap-4 px-4 sm:px-0">
          <li className="w-full sm:w-auto">
            <Link
              to="/"
              className="block sm:inline-block py-2 sm:py-0 px-4 hover:text-orange-400 duration-200 w-full active:text-orange-400"
            >
              Home
            </Link>
          </li>

          {/* Dynamic Categories - Admin Panel Theke Asche */}
          {categories.map((category) => (
            <li key={category.id} className="w-full sm:w-auto">
              <Link
                to={`/products/${category.category_name.toLowerCase()}`}
                className="block sm:inline-block py-2 sm:py-0 px-4 hover:text-orange-400 duration-200 w-full active:text-orange-400"
              >
                {category.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
