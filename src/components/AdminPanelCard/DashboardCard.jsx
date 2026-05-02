import React from "react";

export default function AdminMain({ adminSection }) {
  return (
    <div className="bg-gray-100/50 p-3  rounded-xl shadow-sm flex items-center justify-between border-l-4 border-green-500">
      <div>
        <p className="text-[10px] text-gray-500 font-medium">
          {adminSection.title}
        </p>
        <h3 className="text-[13px] font-bold text-gray-800 mt-1">
          {adminSection.number}
        </h3>
        <span className="text-xs font-normal text-red-700">
          {adminSection.percentage}
        </span>
      </div>
      <div className="text-xl p-2 rounded-lg">
        {adminSection.icon}
      </div>
    </div>
  );
}
