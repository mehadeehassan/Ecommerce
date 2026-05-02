import React from "react";

export default function AdminCard({ adminSection }) {
    return (
    //    navbar items
        <li className="group flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all active:scale-95">
            <div className="  group-hover:bg-orange-400 group-hover:border-orange-400 transition-colors">
                <div className="text-[10px] sm:text-[5px]">
                    {adminSection.icon}
                </div>
            </div>
            <span className="text-[10px] group-hover:text-orange-500 transition-colors whitespace-nowrap hidden sm:block">
                {adminSection.name}
             </span>
        </li>
       
    )
}