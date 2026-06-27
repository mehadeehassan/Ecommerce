/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminPanel from "../Pages/Admin/AdminPanel.jsx";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

const AdminLayout = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("admin");
    if (stored) {
      try {
        setAdmin(JSON.parse(stored));
      } catch {
        setAdmin(null);
      }
    }
  }, []);

  const getInitials = (name) => {
    if (!name) return "A";
    const parts = name.trim().split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (
      parts[0].charAt(0).toUpperCase() +
      parts[parts.length - 1].charAt(0).toUpperCase()
    );
  };

  const roleLabel = admin?.role
    ? `${admin.role.charAt(0).toUpperCase()}${admin.role.slice(1)} Profile`
    : "Admin Profile";

  return (
    <div className="flex bg-gray-200 min-h-screen relative">
      <AdminPanel />

      <div className="flex-1 flex flex-col min-w-0 ">
        <div className="flex items-center justify-between px-8 py-4 sticky top-0 z-10 bg-gray-50">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="bg-gray-300 p-2 rounded-lg text-orange-400 text-sm sm:text-lg">
              <IoHomeOutline className="hidden sm:flex" />
            </div>
            <div className="hidden  sm:flex items-center gap-1 text-[10px] truncate">
              <span className="text-gray-800 text-sm sm:text-md uppercase">
                Home
              </span>
              <IoChevronForwardOutline className="text-gray-400 text-lg shrink-0" />
              <span className="text-gray-400 font-normal truncate">
                Sales
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-38 sm:max-w-lg mx-2 sm:mx-10">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search anything"
                className=" w-50 bg-gray-200 border border-gray-100/50 py-2 px-11 rounded-xl outline-none transition-all text-sm text-gray-600"
              />
              <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-orange-400" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <p className="font-bold text-gray-800 leading-none text-base sm:text-xl">
                {admin?.name || "Admin"}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-orange-400">
                {roleLabel}
              </p>
            </div>
            <div className="relative">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-orange-400 text-white font-bold flex items-center justify-center rounded-full shadow-sm shrink-0 border-2 border-white text-sm sm:text-base">
                {getInitials(admin?.name)}
              </div>
            </div>
          </div>
        </div>
        <main className="p-4 sm:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;