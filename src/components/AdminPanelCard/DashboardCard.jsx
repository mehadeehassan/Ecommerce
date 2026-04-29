import React from "react";

export default function AdminMain( { adminSection }) {
    return (
            <div className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between border-l-4 border-green-500">
                <div>
                    <p className="text-sm text-gray-500 font-medium">{adminSection.title}</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">{adminSection.number}</h3>
                    <span className="text-xs font-bold text-green-500">{adminSection.percentage}</span>
                </div>
                <div className="text-3xl bg-gray-50 p-2 rounded-lg">{adminSection.icon}</div>
            </div>
    )
}
