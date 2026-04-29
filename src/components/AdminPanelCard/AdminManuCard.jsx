import React from "react";

export default function AdminCard({ adminSection }) {
    return (
    //    navbar items
        <li className="group flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all">
            <div className="p-2 border border-gray-200 bg-gray-200 rounded-lg group-hover:bg-orange-400 group-hover:border-orange-400 transition-colors">
                {adminSection.icon}
            </div>
            <span className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                {adminSection.name}
            </span>
        </li>
    )
}