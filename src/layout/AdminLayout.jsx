import React from "react";
import { Outlet } from "react-router-dom";
import AdminPanel from "../Pages/Admin/AdminPanel.jsx";
import Logo from "../assets/Logo.png";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

const AdminLayout = () => {
  return (
        //   sidebar and home menu card 
        
    <div className="flex bg-gray-200 min-h-screen">
      <AdminPanel />

      {/* admin profile */}
      <div className="flex-1 flex flex-col min-h-screen ">
        <div className="flex items-center justify-between px-8 py-4 ">

          {/* Top Bar Home icon */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-300 p-2 rounded-lg text-orange-400 text-2xl">
             <IoHomeOutline />
            </div>
            <div className="flex items-center gap-1 font-semibold text-sm">
              <span className="text-gray-800 text-xl">Home</span>
              <IoChevronForwardOutline className="text-gray-400 text-lg" />
              <span className="text-gray-400 font-normal">Sales</span>
            </div>
          </div>

          {/* Search bar  */}

          <div className="flex-1 max-w-lg mx-10">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search anything"
                className=" w-50 bg-gray-100 border border-transparent focus:border-gray-200 focus:bg-white py-2 px-11 rounded-xl outline-none transition-all text-sm text-gray-600"
              />
              <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-orange-400" />
            </div>
          </div>

          {/* admin profile  */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden lg:block">
              <p className=" font-bold text-gray-800 leading-none text-xl">
                Spider-Man
              </p>
              <p className="mt-1 text-sm text-orange-400">Admin Profile</p>
            </div>
            <div className="relative">
              <div className="w-11 h-11 bg-gray-300 rounded-full shadow-sm overflow-hidden">
                <img
                  src={Logo}
                  alt="Admin"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
