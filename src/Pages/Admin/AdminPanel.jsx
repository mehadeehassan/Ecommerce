import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import AdminCard from "../../components/AdminPanelCard/AdminManuCard";
import AdminMainCard from "../../components/AdminPanelCard/DashboardCard";
import {
  IoGridOutline,
  IoCartOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoHomeOutline,
  IoChevronForwardOutline,
  IoSearchOutline,
  IoMenu,
} from "react-icons/io5";

export default function AdminPanel() {
  return (
    // sidebar

    <nav className="w-64  bg-gray-50 shadow-full text-black  flex flex-col rounded-2xl">
      <div className="p-4 text-xl font-bold border-b border-slate-700 flex justify-between items-center">
        <a
          href="#"
          className="font-extrabold text-2xl sm:text-2xl flex items-center  "
        >
          <img src={Logo} alt="Logo" className="w-10" />
          <span className="hover:text-orange-400 transition-colors font-mono">
            SHOPS
          </span>
        </a>
        <button className="p-1 hover:text-orange-400 rounded">
          <IoMenu className="text-2xl" />
        </button>
      </div>
      <ul className="flex-1 p-4 space-y-2">
        {/* navbar card */}

        <Link to="/admin">
          {AdminCard({
            adminSection: {
              name: "Dashboard",
              icon: (
                <IoHomeOutline className="text-xl text-gray-700 group-hover:text-white" />
              ),
            },
          })}
        </Link>

        <Link to="/admin/products">
          {AdminCard({
            adminSection: {
              name: "Products",
              icon: (
                <IoGridOutline className="text-xl text-gray-700 group-hover:text-white" />
              ),
            },
          })}
        </Link>

        <Link to="/admin/orders">
          {AdminCard({
            adminSection: {
              name: "Orders",
              icon: (
                <IoCartOutline className="text-xl text-gray-700 group-hover:text-white" />
              ),
            },
          })}
        </Link>

        <Link to="/admin/customers">
          {AdminCard({
            adminSection: {
              name: "Customers",
              icon: (
                <IoPeopleOutline className="text-xl text-gray-700 group-hover:text-white" />
              ),
            },
          })}
        </Link>

        <Link to="/admin/settings">
          {AdminCard({
            adminSection: {
              name: "Settings",
              icon: (
                <IoSettingsOutline className="text-xl text-gray-700 group-hover:text-white" />
              ),
            },
          })}
        </Link>
      </ul>
      <div className="p-4 border-t border-slate-700">
        <Link to="/login">
          <button className="w-full group bg-orange-400 font-bold hover:bg-orange-500 py-2 rounded-md transition-colors items-center">
            <IoLogOutOutline className="inline-block mr-1 text-2xl group-hover:text-white " />
            <span className="group-hover:text-white">Log out</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
