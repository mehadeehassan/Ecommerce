import { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import {
  IoBagHandleOutline,
  IoBarChartOutline,
  IoClose,
  IoGridOutline,
  IoLogOutOutline,
  IoMenu,
  IoSettingsOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import AdminCard from "../../components/AdminPanelCard/AdminManuCard";

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
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
                  <IoGridOutline className="text-xs text-gray-700 group-hover:text-white" />
                ),
              },
            })}
          </Link>

          <Link to="/admin/products">
            {AdminCard({
              adminSection: {
                name: "Products",
                icon: (
                  <IoBagHandleOutline className="text-xs text-gray-700 group-hover:text-white" />
                ),
              },
            })}
          </Link>

          <Link to="/admin/User">
            {AdminCard({
              adminSection: {
                name: "Users",
                icon: (
                  <AiOutlineUsergroupAdd className="text-xs text-gray-700 group-hover:text-white" />
                ),
              },
            })}
          </Link>

          <Link to="/admin/customers">
            {AdminCard({
              adminSection: {
                name: "Customers",
                icon: (
                  <IoBarChartOutline className="text-xs text-gray-700 group-hover:text-white" />
                ),
              },
            })}
          </Link>

          <Link to="/admin/settings">
            {AdminCard({
              adminSection: {
                name: "Settings",
                icon: (
                  <IoSettingsOutline className="text-xs text-gray-700 group-hover:text-white" />
                ),
              },
            })}
          </Link>
        </ul>
        <div className="p-6">
          <Link to="/login">
            <button className="w-full group   hover:bg-orange-400  rounded-md transition-colors items-center">
              <IoLogOutOutline className="inline-block mr-1 text-xs group-hover:text-white " />
              <span className="group-hover:text-white text-[10px]">
                Log out
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
