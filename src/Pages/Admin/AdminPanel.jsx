import Cookies from "js-cookie";
import { useState } from "react";
import {
  IoAppsOutline,
  IoBagHandleOutline,
  IoBarChartOutline,
  IoClose,
  IoGridOutline,
  IoImagesOutline,
  IoListOutline,
  IoLogOutOutline,
  IoMenu,
  IoPersonAddOutline,
  IoSettingsOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import AdminCard from "../../components/AdminPanelCard/AdminMenuCard";

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("adminToken");
    navigate("/admin-login");
  };
  return (
    // sidebar
    <>
      <div className="md:hidden fixed top-5.5 left-3.5 z-50">
        <button
          onClick={toggleSidebar}
          className="p-1 shadow-md rounded-lg text-orange-400 border border-gray-200"
        >
          {isOpen ? (
            <IoClose className="text-xl" />
          ) : (
            <IoMenu className="text-xl" />
          )}
        </button>
      </div>

      {/* 2. Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* 3. Sidebar Navigation */}
      <nav
        className={`
          fixed md:sticky md:top-0 inset-y-0 left-0 z-40
          w-35 sm:w-45 bg-gray-50  text-black flex flex-col 
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          h-screen md:max-h-screen md:overflow-y-auto
        `}
      >
        {/* Logo Section */}
        <div
          className={`p-2 py-2 items-center transition-all duration-300 ${isOpen ? "pl-12 md:pl-2" : "pl-2"}`}
        >
          <Link to="/" className=" flex items-center gap-0">
            <img src={Logo} alt="Logo" className="w-8 shrink-0" />
            <span className="text-[15px]  hover:text-orange-400 transition-colors">
              SHOPS
            </span>
          </Link>
        </div>
        <ul className="flex-1 p-2 space-y-2">
          {/* navbar card */}
          <Link to="/admin">
            {AdminCard({
              adminSection: {
                name: "Dashboard",
                icon: (
                  <IoGridOutline className="text-gray-400 group-hover:text-orange-400" />
                ),
              },
            })}
          </Link>
          <div className="mb-0">
            <div onClick={() => setProductOpen((p) => !p)}>
              {AdminCard({
                adminSection: {
                  name: "Products",
                  icon: (
                    <IoBagHandleOutline className="text-gray-400 group-hover:text-orange-400" />
                  ),
                },
                hasDropdown: true,
                isOpen: productOpen,
              })}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${productOpen ? "max-h-60" : "max-h-0"}`}
            >
              <ul className="pl-2 flex flex-col gap-0.5 py-1">
                <Link to="/admin/products/brand">
                  <li className="flex items-center gap-2 p-2 px-3 rounded-lg group">
                    <IoStorefrontOutline className="text-xs text-gray-400 group-hover:text-orange-400 shrink-0" />
                    <span className="text-xs text-gray-500 group-hover:text-orange-500 hidden sm:block">
                      Brands
                    </span>
                  </li>
                </Link>

                <Link to="/admin/products/category">
                  <li className="flex items-center gap-2 p-2 px-3 rounded-lg group">
                    <IoAppsOutline className="text-xs text-gray-400 group-hover:text-orange-400 shrink-0" />
                    <span className="text-xs text-gray-500 group-hover:text-orange-500 hidden sm:block">
                      Category
                    </span>
                  </li>
                </Link>

                <Link to="/admin/hero-slides">
                  <li className="flex items-center gap-2 p-2 px-3 rounded-lg group">
                    <IoImagesOutline className="text-xs text-gray-400 group-hover:text-orange-400 shrink-0" />
                    <span className="text-xs text-gray-500 group-hover:text-orange-500 hidden sm:block">
                      Hero Slides
                    </span>
                  </li>
                </Link>
                
                <Link to="/admin/products">
                  <li className="flex items-center gap-2 p-2 px-3 rounded-lg group">
                    <IoListOutline className="text-xs text-gray-400 group-hover:text-orange-400 shrink-0" />
                    <span className="text-xs text-gray-500 group-hover:text-orange-500 hidden sm:block">
                      Product List
                    </span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <Link to="/admin/user">
            {AdminCard({
              adminSection: {
                name: "Users",
                icon: (
                  <IoPersonAddOutline className="text-gray-400 group-hover:text-orange-400" />
                ),
              },
            })}
          </Link>

          <Link to="/admin/customers">
            {AdminCard({
              adminSection: {
                name: "Customers",
                icon: (
                  <IoBarChartOutline className="text-gray-400 group-hover:text-orange-400" />
                ),
              },
            })}
          </Link>

          <Link to="/admin/settings">
            {AdminCard({
              adminSection: {
                name: "Settings",
                icon: (
                  <IoSettingsOutline className="text-gray-400 group-hover:text-orange-400" />
                ),
              },
            })}
          </Link>
        </ul>
        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full group hover:bg-orange-400 rounded-md transition-colors items-center"
          >
            <IoLogOutOutline className="inline-block mr-1 text-xs group-hover:text-white" />
            <span className="group-hover:text-white text-xs">Log out</span>
          </button>
        </div>
      </nav>
    </>
  );
}
