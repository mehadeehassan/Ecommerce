import React from "react";
import { FaCaretDown } from "react-icons/fa";

export default function AdminCard({ adminSection, hasDropdown, isOpen }) {
  return (
    <li className="group flex items-center justify-between gap-2 p-3 rounded-lg cursor-pointer transition-all active:scale-95">
      <div className="flex items-center gap-2">
        <div className="transition-colors">
          <div className="text-xs text-gray-700 group-hover:text-orange-400">
            {adminSection.icon}
          </div>
        </div>
        <span className="text-xs group-hover:text-orange-500 transition-colors whitespace-nowrap hidden sm:block">
          {adminSection.name}
        </span>
      </div>

      {hasDropdown && (
        <FaCaretDown
          className={`hidden sm:block text-gray-400 text-xs transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      )}
    </li>
  );
}